# S3 Replication

> S3 replication automatically copies objects from a source bucket to destination buckets. Live replication copies new objects; Batch Replication copies existing objects on-demand.

## Replication Types

| Feature     | Cross-Region (CRR)                                   | Same-Region (SRR)                                |
| ----------- | ---------------------------------------------------- | ------------------------------------------------ |
| Scope       | Different AWS regions                                | Same AWS region                                  |
| Use Case    | Regional resilience, reduce user latency, compliance | Log aggregation, PROD/DEV sync, data sovereignty |
| Key Benefit | Protects against regional outages                    | Meets geographic/regulatory requirements         |

## Core Configuration

- **Source bucket**: Where replication is configured (configured on source, not destination)
- **Destination bucket**: Where objects are replicated
- **IAM role**: Grants S3 permission to replicate on your behalf
- **Encryption**: All replication traffic encrypted with SSL
- **Cross-account replication**: Destination bucket owner must grant source bucket owner permissions via bucket policy

## Replication Rule Options

- **What to replicate**: All objects OR filtered by prefix/tags
- **Storage class**: Default is same as source; can override with any target storage class
- **Ownership**: Keep source ownership (default) OR transfer to destination bucket owner
- **Replication Time Control (RTC)**: Predictable replication of 99.9% of objects within 15 minutes (optional; default is best-effort, can take hours)

## Key Behavior & Limitations

### What Replicates

- New/updated objects (only after replication enabled; not retroactive)
- Unencrypted, SSE-S3, SSE-C, and SSE-KMS encrypted objects
- Object metadata, ACLs, tags
- Object Lock retention info (if Object Lock enabled on source and destination)

### What Does NOT Replicate

- **Glacier/Deep Archive objects**: Cannot replicate until restored to standard storage class
- **Intelligent-Tiering archived tiers**: Cannot replicate Archive Access or Deep Archive Access objects
- **Lifecycle-triggered actions**: Delete markers from lifecycle expirations not replicated
- **Bucket-level changes**: Lifecycle rules, notification configs, not replicated
- **Objects replicated by other rules**: Prevents chaining; use Batch Replication instead
- **Delete markers**: By default, not replicated (can be enabled with explicit rule)
- **Delete with version ID**: Versioned object deletions not replicated (protects against malicious deletion)

### Permissions Issue

- Source bucket owner needs `READ` and `READ_ACP` permissions on objects in the source bucket
- If objects owned by different accounts, the object owner must grant these permissions via ACL
- Destination bucket owner needs permission to use KMS key if using SSE-KMS encryption

## Replication Models

- **One-way (live replication)**: Source → Destination (default); destination changes do not replicate back
- **Bi-directional (two-way replication)**: Configure rules in both buckets to sync in both directions
- **On-demand (Batch Replication)**: Use S3 Batch Operations to replicate existing objects or re-replicate previously failed objects

## Requirements

- **Versioning**: Must be enabled on BOTH source and destination buckets

## Use Cases by Type

### CRR Use Cases

- Meet strict compliance requirements with geographic separation
- Reduce latency for global users
- Increase operational efficiency with compute clusters in multiple regions

### SRR Use Cases

- Aggregate logs from multiple sources into single bucket
- Replicate between PROD and DEV environments with shared data
- Meet data sovereignty requirements within same region
