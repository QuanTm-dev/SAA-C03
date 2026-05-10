# Snapshots, Restore & Fast Snapshot Restore (FSR)

## Snapshot Basics

- Snapshots are incremental backups of EBS volumes, stored in S3.
- First snapshot: full copy of **all data** on the volume.
- Subsequent snapshots: store only changes since the previous snapshot.
- Only used data is captured; a 100 GB volume with 20 GB of data creates a 20 GB snapshot.
- Volumes can be created from snapshots and copied across regions.

## Restoration & Initialization

- **Snapshots restore data lazily**: data is fetched on-demand when first read.
- Unrequested blocks load from S3 on access (high latency).
- **Force initialization**: use `dd` or similar tools to load all data into the volume upfront for predictable performance.

## Fast Snapshot Restore (FSR)

- Enables fast restore of snapshots without manual initialization.
- **Limit: up to 50 FSR per region**.
- Each FSR is a a combination of a snapshot and an availability zone.
- FSR costs more but eliminates admin overhead; `dd` method saves cost but requires manual work.
