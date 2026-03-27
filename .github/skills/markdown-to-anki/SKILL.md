---
name: markdown-to-anki
description: "Convert a markdown note into an Anki-importable tab-separated text file. Use when asked to create Anki flashcards from a markdown note, export study cards, or generate Anki import files from notes. Parses ## headings as card fronts and the content below each heading as the card back. Derives the deck name from the note path relative to the repository root. Saves the output to the .anki/ folder mirroring the note path."
argument-hint: "Provide the note path, for example: convert notes/javascript/closures.md to Anki cards"
---

# markdown-to-anki

Convert a workspace markdown note into a tab-separated .txt file ready to import into Anki. ## headings become card fronts; content below each heading becomes the card back.

## When to Use This Skill

Use this skill when:

- A user asks to create Anki flashcards from a markdown note.
- A user wants to export or sync study cards from their notes.
- A user asks to generate an Anki import file from a .md file.
- Keywords: Anki, flashcards, study cards, spaced repetition, import.

## Requirements

- The note must use ## headings as card fronts with content below each heading.
- Run from the repository root so deck names are derived correctly.
- Requires Node.js to execute the conversion script.
- See [references/note-format.md](./references/note-format.md) for full format rules, deck naming convention, and output file specification.

## Workflow

1. Identify the markdown note file path from the user's request.
2. Confirm the file exists in the workspace.
3. Determine the repository root (workspace root folder).
4. Run [scripts/markdown-to-anki.js](./scripts/markdown-to-anki.js) with the note path and repo root:

node .github/skills/markdown-to-anki/scripts/markdown-to-anki.js <note.md> --repo-root . 5. Report the number of cards generated and the output .txt file path. 6. If zero cards were generated, remind the user to use ## headings as card fronts with content below each heading.

## Troubleshooting

| Problem                 | Action                                                                    |
| ----------------------- | ------------------------------------------------------------------------- |
| 0 cards generated       | Ensure the note uses ## headings with content below each heading.         |
| Cards have empty backs  | Add content below each ## heading before the next heading.                |
| Wrong deck name         | Confirm --repo-root points to the workspace root, not a subdirectory.     |
| Import fails in Anki    | Verify the file is UTF-8 encoded and the first line is #separator:tab.    |
| Script not found        | Run from the repository root. Requires Node.js.                           |

## Completion Check

- The .txt file exists in .anki/ at the path matching the note's location.
- The deck column uses :: notation matching the note's path.
- At least one card was generated.
