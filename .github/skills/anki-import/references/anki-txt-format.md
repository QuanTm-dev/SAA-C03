# Anki Txt Format

> This skill expects the same three-column `.txt` structure produced by the AWS note-to-Anki workflow in this repo.

## Required Headers

- `#deck column:3`
- `#separator:Comma`

## Row Shape

- Each non-comment row must contain exactly three CSV fields.
- Field 1 maps to the Anki `Front` field.
- Field 2 maps to the Anki `Back` field.
- Field 3 maps to the Anki `deckName`.

## Validation Rules

- Every field value should be wrapped in double quotes.
- The separator must be a comma.
- Blank lines are allowed and should be ignored.
- Comment lines beginning with `#` are allowed and should be ignored after header validation.
- Front, back, and deck values must be non-empty after trimming.

## Example

```text
#deck column:3
#separator:Comma
""What is the default encryption method for S3 server-side encryption?"",""<b>AES-256</b> is the default encryption method for S3 server-side encryption."",""SAA-C03::04-aws-fundamentals::05-s3""
""What does S3 versioning protect against?"",""S3 versioning protects against accidental deletion of objects."",""SAA-C03::04-aws-fundamentals::05-s3""
```

## Archive Rule

- For an input file under `.anki/<relative-path>.txt`, archive successful imports to `.anki/.imported/<relative-path>.txt`.
- If the archive file already exists, treat the input as already imported.
