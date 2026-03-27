# Anki Note Format Reference

## Note Structure for Card Detection

Markdown notes must follow this structure for cards to be detected:

# Note Title (H1 — ignored, used as document title only)

## Card front text goes here

Card back content goes here. Can be multiple lines,
lists, and inline code like `const x = 1`.

- bullet points are supported
- they render in Anki via HTML

## Another Card Front

Another back.

### Rules

- Only ## (H2) headings become card fronts.
- Everything after a ## heading until the next ## or # heading becomes the card back.
- Content before the first ## heading is skipped.
- A section with no content below its ## heading produces no card (empty cards are skipped).
- Literal tab characters in fronts or backs are replaced with four spaces.

## Deck Naming Convention

The deck name is derived from the note's path relative to the repository root:

| Note path                 | Deck name               |
| ------------------------- | ----------------------- |
| javascript/closures.md    | javascript::closures    |
| aws/compute/ec2.md        | aws::compute::ec2       |
| parent-topic/note.md      | parent-topic::note      |

Rules:

- Use the path relative to the repository root (no leading /).
- Remove the .md extension from the final segment.
- Replace each / path separator with ::.

## Output File Location

The output file mirrors the note path under the .anki/ folder at the repository root, with a .text extension:

| Note path                 | Output path                       |
| ------------------------- | --------------------------------- |
| javascript/closures.md    | .anki/javascript/closures.text    |
| aws/compute/ec2.md        | .anki/aws/compute/ec2.text        |

## Output File Format

The .text file uses tab-separated values with Anki import headers:

#separator:tab
#html:true
#deck column:3
#notetype:Basic
What is a closure? A function that captures variables from its outer scope. javascript::closures

Columns in order: front → back → deck

Multi-line back content is converted to  
 HTML line breaks (compatible with #html:true).

## Importing into Anki

1. Open Anki → File → Import.
2. Select the .text file from the .anki/ folder.
3. Anki auto-detects the separator and column mapping from the file headers.
4. Click Import. Cards are added to the deck derived from the file path.
