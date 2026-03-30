---
name: anki-import
description: Import Anki flashcard .txt files into Anki using the AnkiConnect API. Use when asked to import, sync, or push .anki/*.txt flashcard files into Anki, run the AnkiConnect import script, bulk-add cards to Anki decks, or archive imported flashcard files. Supports glob patterns and explicit file paths, duplicate detection, post-import archiving, and a final summary report.
license: Complete terms in LICENSE.txt
---

# Anki Import Skill

Import one or more `.anki/*.txt` flashcard files into Anki via the [AnkiConnect](https://ankiweb.net/shared/info/2055492159) HTTP API using the bundled Node.js script.

## When to Use This Skill

- Importing or syncing `.anki/**/*.txt` files into Anki
- Bulk-adding cards to Anki decks from generated flashcard files
- Running the AnkiConnect import automation script
- Archiving successfully imported flashcard files to `.anki/.imported/`
- Debugging or adjusting the import workflow

## Prerequisites

| Requirement        | Details                                                                      |
| ------------------ | ---------------------------------------------------------------------------- |
| Node.js 24+        | `node --version` must be ≥ v24                                               |
| Anki desktop       | Must be open during import                                                   |
| AnkiConnect add-on | Install from Anki → Tools → Add-ons → code `2055492159`; default port `8765` |

Verify AnkiConnect is reachable:

```bash
curl http://localhost:8765 -d '{"action":"version","version":6}' -H "Content-Type: application/json"
# Expected: {"result":6,"error":null}
```

## Input File Format

Files follow the Anki text import format with directive headers:

```
#deck column:3
#separator:Comma
"Front text","Back text","DeckName::SubDeck"
```

| Directive          | Meaning                                          |
| ------------------ | ------------------------------------------------ |
| `#deck column:N`   | 1-based column index that contains the deck path |
| `#separator:Comma` | Field separator (only `Comma` is supported)      |

Deck paths use `::` for hierarchy (e.g., `SAA-C03::04-aws-fundamentals::05-s3`).

## Step-by-Step Workflow

### 1. Run a dry-run first

```bash
node .github/skills/anki-import/scripts/import_anki.mjs ".anki/**/*.txt" --dry-run
```

Dry-run parses all files and prints the final report without contacting AnkiConnect or moving any files.

### 2. Import files

```bash
# Import all pending files (default glob, auto-excludes .anki/.imported/)
node .github/skills/anki-import/scripts/import_anki.mjs

# Import a specific file
node .github/skills/anki-import/scripts/import_anki.mjs .anki/04-aws-fundamentals/05-s3.txt

# Import with a custom AnkiConnect host
node .github/skills/anki-import/scripts/import_anki.mjs --host http://localhost:8765

# Import with a custom note model
node .github/skills/anki-import/scripts/import_anki.mjs --model "Basic"
```

Full parameter reference:

| Parameter             | Required | Default                 | Description                                        |
| --------------------- | -------- | ----------------------- | -------------------------------------------------- |
| `[files_or_globs...]` | No       | `.anki/**/*.txt`        | File paths or glob patterns to import              |
| `--host <url>`        | No       | `http://localhost:8765` | AnkiConnect base URL                               |
| `--model <name>`      | No       | `Basic`                 | Anki note model/type to use                        |
| `--dry-run`           | No       | `false`                 | Parse and report without importing or moving files |

### 3. Present the final report

After the script exits, **collect the per-file results from its stdout and render them as a markdown table** in your response. Do not paste the raw terminal output — parse the numbers and format them as shown below.

**Template:**

| File                                  | Added | Skipped (dups) | Failed | Status   |
| ------------------------------------- | ----- | -------------- | ------ | -------- |
| `.anki/04-aws-fundamentals/05-s3.txt` | 2     | 0              | 0      | ✅ moved |
| **TOTAL**                             | **2** | **0**          | **0**  |          |

Status icon mapping:

| Script value | Display                |
| ------------ | ---------------------- |
| `moved`      | ✅ moved               |
| `left`       | ⚠️ left (retry needed) |
| `dry-run`    | 🔍 dry-run             |
| `empty`      | — empty                |
| `error`      | ❌ error               |

After the table, add a one-sentence summary, for example:

> All 2 notes imported successfully across 1 file.

### 4. Retry failures

Files left in place (status `left`) can be re-run after fixing the underlying issue (e.g., AnkiConnect not running, invalid note format).

## Post-Import File Location

Successfully imported files are moved to mirror the original path under `.anki/.imported/`:

```
.anki/04-aws-fundamentals/05-s3.txt
  → .anki/.imported/04-aws-fundamentals/05-s3.txt
```

The destination directory is created automatically.

## Troubleshooting

| Problem                            | Solution                                                                        |
| ---------------------------------- | ------------------------------------------------------------------------------- |
| `ECONNREFUSED` on `localhost:8765` | Open Anki and ensure AnkiConnect add-on is installed and enabled                |
| `Model not found` error            | Run `curl` against `modelNames` action to list available models; use exact name |
| Notes skipped as duplicates        | Expected — those cards already exist in Anki; no action needed                  |
| File not moved after import        | One or more notes failed — check the Failed column in the report and retry      |
| `fs.glob is not a function`        | Upgrade to Node.js 22+ (Node.js 24 is required)                                 |

## References

- [Script](./scripts/import-anki.mjs) — the import automation
- [AnkiConnect API reference](./references/anki-connect-api.md) — actions used by this skill
- [AnkiConnect add-on page](https://ankiweb.net/shared/info/2055492159)
