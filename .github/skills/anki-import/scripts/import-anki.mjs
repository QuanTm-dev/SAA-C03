#!/usr/bin/env node
/**
 * import_anki.mjs — Import .anki/*.txt flashcard files into Anki via AnkiConnect
 *
 * Usage:
 *   node import_anki.mjs [files_or_globs...] [--host <url>] [--model <name>] [--dry-run]
 *
 * Defaults:
 *   files_or_globs  .anki/**\/*.txt  (auto-excludes .anki/.imported/**)
 *   --host          http://localhost:8765
 *   --model         Basic
 *
 * Requires: Node.js 24+
 */

import { readFile, mkdir, rename, rmdir, access } from "node:fs/promises";
import { glob } from "node:fs/promises";
import { resolve, relative, dirname } from "node:path";
import { parseArgs } from "node:util";

// ---------------------------------------------------------------------------
// CLI parsing
// ---------------------------------------------------------------------------

const { values: flags, positionals } = parseArgs({
  args: process.argv.slice(2),
  options: {
    host: { type: "string", default: "http://localhost:8765" },
    model: { type: "string", default: "Basic" },
    "dry-run": { type: "boolean", default: false },
    help: { type: "boolean", default: false },
  },
  allowPositionals: true,
  strict: true,
});

if (flags.help) {
  console.log(
    `
Usage: node import_anki.mjs [files_or_globs...] [options]

Options:
  --host <url>    AnkiConnect base URL  (default: http://localhost:8765)
  --model <name>  Anki note model       (default: Basic)
  --dry-run       Parse and report without importing or moving files
  --help          Show this help

Examples:
  node import_anki.mjs
  node import_anki.mjs ".anki/**/*.txt"
  node import_anki.mjs .anki/04-aws-fundamentals/05-s3.txt --dry-run
  node import_anki.mjs --host http://localhost:8765 --model "Basic"
`.trim(),
  );
  process.exit(0);
}

const HOST = flags.host;
const MODEL = flags.model;
const DRY_RUN = flags["dry-run"];

// ---------------------------------------------------------------------------
// AnkiConnect helper
// ---------------------------------------------------------------------------

/**
 * Send a single action to AnkiConnect and return the result.
 * Throws if the top-level error field is non-null or the request fails.
 */
async function ankiRequest(action, params = {}) {
  const body = JSON.stringify({ action, version: 6, params });
  let res;
  try {
    res = await fetch(HOST, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
  } catch (err) {
    throw new Error(
      `Cannot reach AnkiConnect at ${HOST}. Is Anki open with AnkiConnect installed?\n  Cause: ${err.message}`,
    );
  }

  const json = await res.json();
  if (json.error)
    throw new Error(`AnkiConnect error [${action}]: ${json.error}`);
  return json.result;
}

// ---------------------------------------------------------------------------
// File format parser
// ---------------------------------------------------------------------------

/** Parse an unquoted-or-quoted CSV line into an array of field strings. */
function parseCsvLine(line) {
  const fields = [];
  let i = 0;
  while (i < line.length) {
    if (line[i] === '"') {
      // Quoted field
      let value = "";
      i++; // skip opening quote
      while (i < line.length) {
        if (line[i] === '"' && line[i + 1] === '"') {
          value += '"';
          i += 2;
        } else if (line[i] === '"') {
          i++; // skip closing quote
          break;
        } else {
          value += line[i++];
        }
      }
      fields.push(value);
      // skip separator if present
      if (line[i] === ",") i++;
    } else {
      // Unquoted field — read until next comma
      const end = line.indexOf(",", i);
      if (end === -1) {
        fields.push(line.slice(i));
        break;
      }
      fields.push(line.slice(i, end));
      i = end + 1;
    }
  }
  return fields;
}

/**
 * Parse an .anki .txt file into an array of note objects.
 * Returns { notes: Array<{deckName, front, back}>, errors: string[] }
 */
function parseAnkiFile(content, filePath) {
  const lines = content.split(/\r?\n/);
  let separator = ",";
  let deckColumn = null; // 1-based
  const notes = [];
  const errors = [];

  for (let lineNum = 1; lineNum <= lines.length; lineNum++) {
    const raw = lines[lineNum - 1].trim();

    if (!raw) continue; // skip blank lines

    if (raw.startsWith("#")) {
      // Directive
      const sepMatch = raw.match(/^#separator:\s*(.+)$/i);
      if (sepMatch) {
        const s = sepMatch[1].trim().toLowerCase();
        if (s === "comma") separator = ",";
        else separator = s; // future-proofing; parser only supports comma today
        continue;
      }
      const deckMatch = raw.match(/^#deck\s+column:\s*(\d+)$/i);
      if (deckMatch) {
        deckColumn = parseInt(deckMatch[1], 10);
        continue;
      }
      // Other directives (e.g. #html) — ignore silently
      continue;
    }

    // Note row
    if (deckColumn === null) {
      errors.push(
        `Line ${lineNum}: no #deck column directive found before note rows`,
      );
      continue;
    }

    const fields = parseCsvLine(raw);

    // Determine front and back: columns other than the deck column (1-based)
    const noteFields = [];
    for (let col = 1; col <= fields.length; col++) {
      if (col !== deckColumn) noteFields.push(fields[col - 1]);
    }

    const deckName = fields[deckColumn - 1];

    if (!deckName) {
      errors.push(`Line ${lineNum}: deck column ${deckColumn} is empty`);
      continue;
    }
    if (noteFields.length < 2) {
      errors.push(
        `Line ${lineNum}: expected at least 2 non-deck fields, got ${noteFields.length}`,
      );
      continue;
    }

    notes.push({ deckName, front: noteFields[0], back: noteFields[1] });
  }

  return { notes, errors };
}

// ---------------------------------------------------------------------------
// Glob expansion
// ---------------------------------------------------------------------------

const IMPORTED_SEGMENT = ".anki/.imported";

/**
 * Expand a mix of glob patterns and literal paths into a deduplicated file list.
 * Automatically excludes anything under .anki/.imported/.
 */
async function expandInputs(inputs, cwd) {
  const seen = new Set();
  const files = [];

  for (const input of inputs) {
    // Try treating it as a glob first
    const matches = [];
    try {
      for await (const match of glob(input, { cwd })) {
        matches.push(resolve(cwd, match));
      }
    } catch {
      // glob() can throw for invalid patterns — treat as literal path
      matches.push(resolve(cwd, input));
    }

    for (const abs of matches) {
      const rel = relative(cwd, abs).replace(/\\/g, "/");
      if (rel.startsWith(IMPORTED_SEGMENT)) continue; // skip already-imported
      if (!seen.has(abs)) {
        seen.add(abs);
        files.push(abs);
      }
    }
  }

  return files;
}

// ---------------------------------------------------------------------------
// Report helpers
// ---------------------------------------------------------------------------

/** Left-pad a number string in a fixed-width cell. */
function pad(str, width) {
  return String(str).padStart(width);
}

/** Left-align a string in a fixed-width cell. */
function padEnd(str, width) {
  return String(str).padEnd(width);
}

function printReport(results, cwd) {
  const COL_FILE = 40;
  const COL_ADDED = 7;
  const COL_SKIPPED = 9;
  const COL_FAILED = 8;
  const COL_STATUS = 8;

  const header =
    padEnd("File", COL_FILE) +
    "  " +
    pad("Added", COL_ADDED) +
    "  " +
    pad("Skipped", COL_SKIPPED) +
    "  " +
    pad("Failed", COL_FAILED) +
    "  " +
    padEnd("Status", COL_STATUS);

  const divider =
    "-".repeat(COL_FILE) +
    "  " +
    "-".repeat(COL_ADDED) +
    "  " +
    "-".repeat(COL_SKIPPED) +
    "  " +
    "-".repeat(COL_FAILED) +
    "  " +
    "-".repeat(COL_STATUS);

  console.log("\n" + header);
  console.log(divider);

  let totalAdded = 0,
    totalSkipped = 0,
    totalFailed = 0;

  for (const r of results) {
    const rel = relative(cwd, r.filePath).replace(/\\/g, "/");
    const fileCell = padEnd(
      rel.length > COL_FILE ? "…" + rel.slice(-(COL_FILE - 1)) : rel,
      COL_FILE,
    );
    console.log(
      fileCell +
        "  " +
        pad(r.added, COL_ADDED) +
        "  " +
        pad(r.skipped, COL_SKIPPED) +
        "  " +
        pad(r.failed, COL_FAILED) +
        "  " +
        padEnd(r.status, COL_STATUS),
    );
    totalAdded += r.added;
    totalSkipped += r.skipped;
    totalFailed += r.failed;
  }

  console.log(
    "=".repeat(COL_FILE) +
      "  " +
      "=".repeat(COL_ADDED) +
      "  " +
      "=".repeat(COL_SKIPPED) +
      "  " +
      "=".repeat(COL_FAILED),
  );
  console.log(
    padEnd("TOTAL", COL_FILE) +
      "  " +
      pad(totalAdded, COL_ADDED) +
      "  " +
      pad(totalSkipped, COL_SKIPPED) +
      "  " +
      pad(totalFailed, COL_FAILED),
  );
}

// ---------------------------------------------------------------------------
// Per-file import logic
// ---------------------------------------------------------------------------

async function importFile(filePath, existingDecks, cwd) {
  const rel = relative(cwd, filePath).replace(/\\/g, "/");

  // Compute destination path up-front so we can check for prior import
  const destRel = rel.startsWith(".anki/")
    ? `.anki/.imported/${rel.slice(".anki/".length)}`
    : `.anki/.imported/${rel}`;
  const destAbs = resolve(cwd, destRel);

  // Skip if this file was already successfully imported
  try {
    await access(destAbs);
    console.log(`  [SKIP] ${rel}: already imported (exists at ${destRel})`);
    return {
      filePath,
      added: 0,
      skipped: 0,
      failed: 0,
      status: "already-imported",
    };
  } catch {
    // Destination does not exist — proceed with import
  }

  let content;
  try {
    content = await readFile(filePath, "utf8");
  } catch (err) {
    console.error(`  [ERROR] Cannot read ${rel}: ${err.message}`);
    return { filePath, added: 0, skipped: 0, failed: 0, status: "error" };
  }

  const { notes, errors } = parseAnkiFile(content, rel);

  if (errors.length) {
    for (const e of errors) console.warn(`  [WARN] ${rel}: ${e}`);
  }

  if (notes.length === 0) {
    console.log(`  [SKIP] ${rel}: no notes found`);
    return {
      filePath,
      added: 0,
      skipped: 0,
      failed: 0,
      status: DRY_RUN ? "dry-run" : "empty",
    };
  }

  let added = 0,
    skipped = 0,
    failed = 0;

  if (DRY_RUN) {
    console.log(`  [DRY-RUN] ${rel}: ${notes.length} note(s) parsed`);
    return { filePath, added: 0, skipped: 0, failed: 0, status: "dry-run" };
  }

  // --- Create missing decks ---
  const uniqueDecks = [...new Set(notes.map((n) => n.deckName))];
  for (const deck of uniqueDecks) {
    if (!existingDecks.has(deck)) {
      await ankiRequest("createDeck", { deck });
      existingDecks.add(deck);
      console.log(`  [DECK] Created: ${deck}`);
    } else {
      console.log(`  [DECK] Already exists: ${deck}`);
    }
  }

  // --- Build AnkiConnect note objects ---
  function toAnkiNote(n) {
    return {
      deckName: n.deckName,
      modelName: MODEL,
      fields: { Front: n.front, Back: n.back },
      tags: [],
    };
  }

  const ankiNotes = notes.map(toAnkiNote);

  // --- Duplicate check ---
  const canAdd = await ankiRequest("canAddNotes", { notes: ankiNotes });

  const newNotes = [];
  const newAnkiNotes = [];

  for (let i = 0; i < notes.length; i++) {
    if (canAdd[i]) {
      newNotes.push(notes[i]);
      newAnkiNotes.push(ankiNotes[i]);
    } else {
      skipped++;
      console.log(`  [DUP] ${notes[i].front.slice(0, 60)}`);
    }
  }

  // --- Add new notes ---
  if (newAnkiNotes.length > 0) {
    const results = await ankiRequest("addNotes", { notes: newAnkiNotes });
    for (let i = 0; i < results.length; i++) {
      if (results[i] === null) {
        failed++;
        console.error(
          `  [FAILED] Could not add note: ${newNotes[i].front.slice(0, 60)}`,
        );
      } else {
        added++;
      }
    }
  }

  // --- Move file if fully successful ---
  let status;
  if (failed === 0) {
    await mkdir(dirname(destAbs), { recursive: true });
    await rename(filePath, destAbs);
    console.log(`  [MOVED] → ${destRel}`);
    status = "moved";

    // Remove source folder(s) if now empty (walk up to .anki/ root)
    const ankiRoot = resolve(cwd, ".anki");
    let dir = dirname(filePath);
    while (dir.startsWith(ankiRoot) && dir !== ankiRoot) {
      try {
        await rmdir(dir); // throws ENOTEMPTY if folder still has contents
        console.log(
          `  [CLEANUP] Removed empty folder: ${relative(cwd, dir).replace(/\\/g, "/")}`,
        );
        dir = dirname(dir);
      } catch {
        break; // folder not empty or other error — stop walking up
      }
    }
  } else {
    console.warn(
      `  [LEFT] ${rel}: ${failed} note(s) failed — file left in place for retry`,
    );
    status = "left";
  }

  return { filePath, added, skipped, failed, status };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const cwd = process.cwd();
  const inputs = positionals.length > 0 ? positionals : [".anki/**/*.txt"];

  console.log(`AnkiConnect host : ${HOST}`);
  console.log(`Note model       : ${MODEL}`);
  console.log(`Dry-run          : ${DRY_RUN}`);
  console.log(`Glob inputs      : ${inputs.join(", ")}`);
  console.log("");

  // Expand globs
  const files = await expandInputs(inputs, cwd);

  if (files.length === 0) {
    console.log("No files found matching the provided patterns.");
    process.exit(0);
  }

  console.log(`Found ${files.length} file(s) to process.\n`);

  // Fetch existing decks once (skip in dry-run)
  let existingDecks = new Set();
  if (!DRY_RUN) {
    const names = await ankiRequest("deckNames");
    existingDecks = new Set(names);
  }

  // Process each file
  const results = [];
  for (const filePath of files) {
    const rel = relative(cwd, filePath).replace(/\\/g, "/");
    console.log(`Processing: ${rel}`);
    const result = await importFile(filePath, existingDecks, cwd);
    results.push(result);
    console.log("");
  }

  // Final report
  printReport(results, cwd);

  const anyFailed = results.some((r) => r.failed > 0 || r.status === "error");
  process.exit(anyFailed ? 1 : 0);
}

main().catch((err) => {
  console.error(`\n[FATAL] ${err.message}`);
  process.exit(1);
});
