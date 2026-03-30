# AnkiConnect API Reference

Base URL: `http://localhost:8765` (default)

All requests are HTTP POST with `Content-Type: application/json`. All responses have shape:

```json
{ "result": <value>, "error": null | "<message>" }
```

When `error` is non-null the action failed; `result` will be `null`.

---

## `version`

Check that AnkiConnect is running and return its API version.

**Request**

```json
{ "action": "version", "version": 6 }
```

**Response**

```json
{ "result": 6, "error": null }
```

---

## `deckNames`

Return the names of all decks currently in Anki. Use this before `createDeck` to avoid creating a deck that already exists.

**Request**

```json
{ "action": "deckNames", "version": 6 }
```

**Response**

```json
{
  "result": ["Default", "SAA-C03", "SAA-C03::04-aws-fundamentals"],
  "error": null
}
```

---

## `createDeck`

Create a new deck. AnkiConnect automatically creates parent decks if they don't exist. Safe to call even if the deck exists — it returns the existing deck's ID without error. However, calling `deckNames` first and skipping creation is preferred to avoid unnecessary API round-trips.

**Request**

```json
{
  "action": "createDeck",
  "version": 6,
  "params": { "deck": "SAA-C03::04-aws-fundamentals::05-s3" }
}
```

**Response**

```json
{ "result": 1710000000000, "error": null }
```

`result` is the deck ID (integer).

---

## `canAddNotes`

Check whether each note in a list can be added (i.e., is not a duplicate). Returns a boolean array parallel to the input.

**Request**

```json
{
  "action": "canAddNotes",
  "version": 6,
  "params": {
    "notes": [
      {
        "deckName": "SAA-C03::04-aws-fundamentals::05-s3",
        "modelName": "Basic",
        "fields": {
          "Front": "What is the default encryption method for S3 server-side encryption?",
          "Back": "<b>AES-256</b> is the default encryption method for S3 server-side encryption."
        },
        "tags": []
      }
    ]
  }
}
```

**Response**

```json
{ "result": [true], "error": null }
```

- `true` — note can be added (not a duplicate)
- `false` — note is a duplicate; will be skipped

---

## `addNotes`

Add one or more notes to Anki. Only call this for notes where `canAddNotes` returned `true`.

Returns an array of note IDs (integers) parallel to the input. A `null` entry indicates that individual note failed to add.

**Request**

```json
{
  "action": "addNotes",
  "version": 6,
  "params": {
    "notes": [
      {
        "deckName": "SAA-C03::04-aws-fundamentals::05-s3",
        "modelName": "Basic",
        "fields": {
          "Front": "What is the default encryption method for S3 server-side encryption?",
          "Back": "<b>AES-256</b> is the default encryption method for S3 server-side encryption."
        },
        "tags": []
      }
    ]
  }
}
```

**Response — all succeeded**

```json
{ "result": [1710000000001], "error": null }
```

**Response — one note failed**

```json
{ "result": [null], "error": null }
```

A top-level `error` means the entire request failed (e.g., AnkiConnect internal error). Per-note failures are indicated by `null` entries in `result`.

---

## Error Handling Summary

| Scenario                    | How to detect                     | Recommended action                   |
| --------------------------- | --------------------------------- | ------------------------------------ |
| AnkiConnect not running     | Network error / `ECONNREFUSED`    | Prompt user to open Anki             |
| Duplicate note              | `canAddNotes` returns `false`     | Skip + count as duplicate            |
| Individual note add failure | `addNotes` result entry is `null` | Count as failed; leave file in place |
| Full request failure        | top-level `error` is non-null     | Throw and abort file processing      |
