# S3 Object Lock

> Write-once-read-many (WORM) protection for objects. Prevents deletion or modification for a specified period or indefinitely.

## Requirements

- Must be enabled at bucket creation; cannot be added to existing buckets.
- Automatically enables versioning on the bucket.
- Versioning cannot be suspended once Object Lock is enabled.
- Applies per object version, not to the bucket as a whole.

## Retention Period

### Governance Mode

- Users with `s3:BypassGovernanceRetention` permission can override or remove retention.
- Use for: General accidental deletion protection.

### Compliance Mode

- No user, including root, can remove retention until expiry.
- Use for: Regulatory compliance (e.g., SEC 17a-4, FINRA, CFTC requirements).

### Specification

- Set in days or years.
- Can be set per object or as bucket default.
- Bucket policy can enforce min/max retention periods via `s3:object-lock-remaining-retention-days` condition key.

## Legal Hold

- Independent of retention period.
- Can be ON or OFF per object version.
- No expiration date — persists until explicitly removed.
- Users with `s3:PutObjectLegalHold` permission can remove.
- Use for: Legal investigations, litigation holds.

## Key Behavior

- One object version can have retention period, legal hold, both, or neither.
- Retention periods and legal holds don't prevent new versions or delete markers.
- Protected versions remain locked even after new versions are created.
