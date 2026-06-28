# RDS Automatic Backup, RDS Snapshots and Restore

- There are 2 types of backups in RDS:
  - Automated Backups
  - Manual Snapshots
- Backups are stored in S3. They use AWS-managed buckets and are not visible to the user in the S3 console. However, you can see the backups in the RDS console.
- If you use MultiAZ, the backup is taken from the standby instance so there won't be any performance impact on the primary instance. If you use a single instance, the backup is taken from the primary instance, which may cause performance degradation.

## Manual Snapshots

- Snapshots take the data of all databases in the instance.
- First snapshot is a full copy of the database, and subsequent snapshots are incremental. Incremental snapshots only backup the data that has changed since the last snapshot.
- Snapshots don't have a retention period, you must delete them manually.

## Automated Backups

- Think of it as automated snapshots, the way a snapshot is taken is the same as a manual snapshot, but it is done automatically by RDS.
- You can set the backup window, which is the time when the backup will be taken.
- Backups are taken daily during the backup window.
- It has a retention period. You can set the retention period from 1 to 35 days.
- Addition to the snapshot, RDS also takes transaction logs every 5 minutes. This allows you to restore the database to a point in time with a granularity of 5 minutes => Good [RPO](../03-tech-fundamentals/06-backup-and-dr/rpo-rto.md#recovery-point-objective-rpo).

## Cross-Region Backup

- Both snashots and transaction logs can be copied to another region.
- There are extra cost for cross-region data copy process and storage in the destination region.
- This is not enabled by default, you must enable it in the RDS console.

## Restore

- When restoring a database, a new RDS instance is created with a new endpoint.
- How it works: Backup is restored and transaction logs are replayed to bring the database to the desired point in time.
- Restores aren't fast, will impact [RTO](../03-tech-fundamentals/06-backup-and-dr/rpo-rto.md#recovery-time-objective-rto)
