# Object Versioning and MFA Delete in Amazon S3

## Object Versioning Overview

- **Bucket-level control:** Object versioning is enabled or suspended at the bucket level.
- **Versioning states:** A bucket can transition: Disabled → Enabled → Suspended → Enabled → Suspended... (once enabled, you cannot return to Disabled, only suspend).

## How Versioning Works

- **Without versioning:** Each object is identified by its key; overwriting creates a new version but replaces the old one completely.
- **With versioning enabled:** Each object modification creates a new, unique version with a distinct version ID. Multiple versions of the same object coexist in the bucket.

## Operations with Versioned Objects

| Operation                               | Result                                                                                                     |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Get object (no version ID specified)    | Returns the latest version                                                                                 |
| Delete object (no version ID specified) | Adds a delete marker as the latest version; object can still be retrieved by specifying a prior version ID |
| Delete the delete marker                | Removes the delete marker, making the previous version the latest again                                    |
| Permanently delete specific version     | Must specify the version ID in the delete request                                                          |

## Storage and Billing

- All versions of all objects, including delete markers, consume bucket storage.
- You are charged for storing every version of every object in the bucket.

## MFA Delete

- MFA Delete is required to:
  - Permanently delete a specific object version
  - Change the versioning state of a bucket (enable or suspend versioning)
