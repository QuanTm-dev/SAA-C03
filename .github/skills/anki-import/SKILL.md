---
name: anki-import
description: "Import Anki .txt card files into Anki through AnkiConnect. Use when asked to validate one or more .anki text exports, send cards with AnkiConnect addNotes, use curl for the HTTP call, or archive imported files into .anki/.imported while preserving their relative paths."
argument-hint: "Provide one or more .txt files under .anki to validate and import"
license: Apache-2.0
---

# Anki Text Import

Import `.txt` card files from `.anki/` into Anki with AnkiConnect, then archive successful imports under `.anki/.imported/`.

## When to Use This Skill

- Import files produced in the three-column Anki text format used by this repo's AWS card workflow.
- Validate `.txt` files before sending any cards to Anki.
- Retry after the user fixes missing files, invalid files, or already-imported files.
- Process multiple files with a single validation pass and a per-file import loop.

## Prerequisites

- Anki Desktop is running.
- The AnkiConnect add-on is installed and listening on `http://127.0.0.1:8765`.
- Input files live under `.anki/` and are not already inside `.anki/.imported/`.
- The target note type is `Basic` unless the user explicitly asks for a different model.
- The user must run the generated `curl` request in a VS Code execute block or terminal before any file is moved.

## Format Reference

Validate against [the Anki txt format reference](./references/anki-txt-format.md) before importing.

## Workflow

### 1. Gather input

- If the user did not provide file paths, ask for them before doing anything else.
- Accept one or more `.txt` files.
- Resolve relative paths from the workspace root.

### 2. Validate every file first

For each requested file:

1. Confirm the file exists.
2. Confirm the file path ends with `.txt`.
3. Confirm the file is under `.anki/` and not already under `.anki/.imported/`.
4. Confirm the archive counterpart does not already exist under `.anki/.imported/` with the same relative path. Treat that archived file as the source of truth for `already imported`.
5. Read the file and validate:
   - `#deck column:3` is present.
   - `#separator:Comma` is present.
   - Non-comment rows parse as CSV.
   - Each row has exactly three fields: front, back, deck.
   - Front, back, and deck are all non-empty after trimming.

If any file fails validation, stop before importing any file. Return a concise report with each failed file and the reason. When the user updates the input, restart at validation.

### 3. Import each file with AnkiConnect

For each validated file:

1. Read the headers and card rows.
2. Extract the first two columns as `Front` and `Back` fields.
3. Extract the third column as the target deck name.
4. Use [the Bash template](./templates/import-anki-notes.sh) to build a `curl` request for that file.
5. Use `execute` tool to execute the request and capture the response.
6. If the response is successful, use `execute` tool to move the file to `.anki/.imported/` while preserving its relative path from `.anki/`.
7. If the response is not successful, leave the source file in place and continue with the next file only after the failure is understood.

### 4. Report results

At the end, provide a summary with:

- Total files requested
- Files blocked by validation
- Files with generated requests
- Files confirmed as imported by the user
- Files that failed during the AnkiConnect request
- Suggested archive destination for each successful file

## Execution Notes

- Keep validation separate from import. Do not start imports until the full validation pass succeeds.
- Use the archive path as the duplicate-import guard for files. Do not infer import success from file contents alone.
- Treat partial `addNotes` results as a failed import for that file. Do not tell the user to archive a file unless every row returns a note id.
- Preserve the deck name from column three exactly as written.
- Default to the `Basic` note model with `Front` and `Back` fields.

## Troubleshooting

| Problem                        | What to check                                                                                         |
| ------------------------------ | ----------------------------------------------------------------------------------------------------- |
| Connection refused             | Anki is not running, AnkiConnect is missing, or the URL/port is wrong.                                |
| Validation fails on CSV rows   | The file is not in the expected quoted three-column CSV format.                                       |
| File marked already imported   | The mirrored archive file already exists under `.anki/.imported/`.                                    |
| Import returns partial success | One or more notes were rejected by AnkiConnect; inspect the script output and keep the file in place. |

## Resources

- [Anki txt format reference](./references/anki-txt-format.md)
- [Import script template](./templates/import-anki-notes.sh)
