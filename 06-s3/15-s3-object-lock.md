# S3 Object Lock

- S3 Object Lock prevents objects from being deleted or overwritten for a specified period of time or indefinitely.

## Characteristics

- Object Lock needs to be enabled when creating a bucket and cannot be enabled on an existing bucket.
- When Object Lock is enabled, versioning is automatically enabled for the bucket.
- When Object Lock is enabled, you cannot disable it or suspend versioning for the bucket.
- Object Lock follows a write-once-read-many (WORM) model, which means that once an object is locked, it cannot be modified or deleted until the lock is removed or expires.
- Object Lock applies to individual object versions.
- There are 2 retention modes:
  - Retention Period: You can specify a retention period in days or years, during which the object is protected from deletion or overwriting.
  - Legal Hold: You can apply a legal hold to an object, which prevents it from being deleted or overwritten until the legal hold is removed, regardless of the retention period.
- One object version can have both, 1 or none of the retention modes applied to it.
- A bucket can have a default Object Lock Settings.

### Retention Period

- You can specify a retention period in days or years.
- There are 2 types of retention periods:
  - Governance Mode: Users with s3:BypassGovernanceRetention permission can override or remove the retention settings. When to use: For general data protection, for example, to protect data from accidental deletion or overwriting by users who do not have the necessary permissions.
  - Compliance Mode: No user, including the root user, can override or remove the retention settings until they expire. When to use: For compliance purposes, for example, compliance laws require finance or medical records need to be retained for a certain period of time.

### Legal Hold

- Set on object version, can be ON or OFF.
- Users with s3:PutObjectLegalHold permission can remove a legal hold.
- When to use: For legal purposes, for example, when an object is under investigation or involved in a legal case, you can apply a legal hold to prevent it from being deleted or overwritten until the investigation or case is resolved.
