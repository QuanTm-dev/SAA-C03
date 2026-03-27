#!/usr/bin/env node
/**
 * Convert a markdown note to an Anki-importable tab-separated .txt file.
 *
 * Usage:
 *   node markdown-to-anki.js <note.md> --repo-root <path>
 *
 * Arguments:
 *   note.md        Path to the markdown note file.
 *   --repo-root    Path to the repository root (default: current directory).
 *
 * Output:
 *   Writes a tab-separated .txt file to .anki/<note-relative-path>.txt
 *   relative to the repo root.
 */

const fs = require("fs");
const path = require("path");

const USAGE = `
Usage: node markdown-to-anki.js <note.md> --repo-root <path> 
 
  note.md        Path to the markdown note file. 
  --repo-root    Path to the repository root (default: current directory). 
`.trim();

/** Derive the Anki deck name from the note path relative to the repo root.
 *  /parent-topic/note.md -> parent-topic::note
 */
function getDeckName(notePath, repoRoot) {
  const absNote = path.resolve(notePath);
  const absRoot = path.resolve(repoRoot);

  if (!absNote.startsWith(absRoot + path.sep) && absNote !== absRoot) {
    console.error(
      `Error: '${notePath}' is not inside the repo root '${repoRoot}'.`,
    );
    process.exit(1);
  }

  const rel = path.relative(absRoot, absNote);
  const parts = rel.split(path.sep);
  // Strip .md extension from the last segment
  parts[parts.length - 1] = path.basename(parts[parts.length - 1], ".md");
  return parts.join("::");
}

/**
 * Parse ## headings as card fronts and following content as card backs.
 * Only ## headings (exactly two hashes) generate cards.
 * Sections with empty backs are skipped.
 * Returns an array of { front, back } objects.
 */
function parseCards(content) {
  const cards = [];
  // Split on ## headings (exactly two hashes, not ###, ####, etc.)
  const sections = content.split(/^(?=## )/m);

  for (const section of sections) {
    if (!/^## /.test(section)) continue;

    const lines = section.split("\n");
    const front = lines[0].slice(3).trim(); // strip "## "

    // Collect back lines until the next heading of any level
    const backLines = [];
    for (let i = 1; i < lines.length; i++) {
      if (/^#{1,6} /.test(lines[i])) break;
      backLines.push(lines[i]);
    }

    const back = backLines.join("\n").trim();

    if (!front || !back) continue; // skip empty cards

    // Sanitise: replace literal tabs (invalid in TSV columns)
    const safeFront = front.replace(/\t/g, "    ");
    // Convert newlines to HTML line breaks for Anki's html:true mode
    const safeBack = back.replace(/\t/g, "    ").replace(/\n/g, "<br>");

    cards.push({ front: safeFront, back: safeBack });
  }

  return cards;
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === "-h" || args[0] === "--help") {
    console.log(USAGE);
    process.exit(0);
  }

  const noteArg = args[0];
  let repoRootArg = ".";

  const repoRootIdx = args.indexOf("--repo-root");
  if (repoRootIdx !== -1) {
    if (repoRootIdx + 1 >= args.length) {
      console.error("Error: --repo-root requires a path argument.");
      process.exit(1);
    }
    repoRootArg = args[repoRootIdx + 1];
  }

  if (!fs.existsSync(noteArg)) {
    console.error(`Error: Note file not found: '${noteArg}'`);
    process.exit(1);
  }

  const content = fs.readFileSync(noteArg, "utf-8");
  const deck = getDeckName(noteArg, repoRootArg);
  const cards = parseCards(content);

  if (cards.length === 0) {
    console.error(
      `No flashcards found.\nEnsure the note uses ## headings as card fronts with content below each heading.\nExample:\n  ## What is a closure?\n  A function that retains access to its outer scope variables.`,
    );
    process.exit(1);
  }

  // Build output path: .anki/<repo-relative-path-without-.md>.txt
  const absNote = path.resolve(noteArg);
  const absRoot = path.resolve(repoRootArg);
  const rel = path.relative(absRoot, absNote);
  const relWithNewExt = rel.replace(/\.md$/, ".txt");
  const outPath = path.join(absRoot, ".anki", relWithNewExt);

  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  const lines = [
    "#separator:tab",
    "#html:true",
    "#deck column:3",
    "#notetype:Basic",
    ...cards.map(({ front, back }) => `${front}\t${back}\t${deck}`),
  ];

  fs.writeFileSync(outPath, lines.join("\n") + "\n", { encoding: "utf-8" });

  const displayPath = path.relative(absRoot, outPath);
  console.log(`Generated ${cards.length} card(s) -> ${displayPath}`);
}

main();
