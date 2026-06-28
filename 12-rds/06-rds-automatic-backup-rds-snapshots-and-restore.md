# Amazon RDS Backups, Snapshots, and Restore

## Backup Types

- There are two types of backups in RDS: **manual snapshots** and **automated backups**.
- Stored in AWS-managed S3 buckets (not visible in S3 console, only in RDS console).
- **Multi-AZ**: backups taken from Standby → no performance impact.
- **Single instance**: backups taken from Primary → may cause performance degradation.

## Manual Snapshots

- Capture all databases in the instance.
- First snapshot = full copy.
- Subsequent snapshots = incremental (only changed data).
- No retention period → must delete manually.

## Automated Backups

- Same mechanism as snapshots, but automatic.
- Daily backups during a configurable **backup window**.
- Retention period: **1–35 days**.
- Transaction logs captured every 5 minutes.
  - Enables **point-in-time restore** (5-min granularity).
  - Improves **RPO** (Recovery Point Objective).

## Cross-Region Backup

- Snapshots and transaction logs can be copied to another region.
- Extra cost for data transfer + storage in destination region.
- Must be enabled manually in RDS console.

## Restore

- Creates a **new RDS instance** with a new endpoint. Application must connect to the new endpoint.
- Process:
  - Backup restored.
  - Transaction logs replayed to reach desired point in time.
- Restores are slow → impacts **RTO** (Recovery Time Objective).
