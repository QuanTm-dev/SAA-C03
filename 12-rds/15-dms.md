# Database Migration Service (DMS)

## Why DMS (manual migration problems)

- Setting up real-time replication between source/target manually is complex.
- Alternative: snapshot + restore, but you still need to handle changes made after the snapshot.
- Handling engine-to-engine migration (e.g. Oracle → PostgreSQL) manually is hard.
- Handling application downtime during migration is hard.

## DMS Basics

- DMS is a managed database migration service.
- Uses a **replication instance** (runs on EC2) to perform 1+ migration tasks.
- You define **source and target endpoints** pointing to the source/target databases.
- **IMPORTANT:** at least 1 endpoint must be on AWS (can't migrate on-prem → on-prem).

### Migration types

| Type            | What it does                                        | When to use                                   |
| --------------- | --------------------------------------------------- | --------------------------------------------- |
| Full load       | Migrates existing data only                         | One-time migration, downtime acceptable       |
| Full load + CDC | Migrates existing data + replicates ongoing changes | **Most common** — minimizes downtime          |
| CDC only        | Replicates ongoing changes only                     | Existing data already migrated by other means |

## Schema Conversion Tool (SCT)

- Used to convert schema between different database engines (e.g. Oracle → PostgreSQL).
- Primarily converts schema.
- Can extract data locally and move them to a Snowball device for large migrations.
- Supports both OLTP (MySQL, Oracle, etc.) and OLAP (Teradata, Vertica, etc.) databases.

## DMS + Snowball (large migrations)

**Problem:** multi-TB database migrations take too much time/bandwidth over the network.

**Steps:**

1. Use SCT to extract data locally and load it onto a Snowball device.
2. Ship the Snowball device to AWS — data gets loaded to S3.
3. DMS migrates the data from S3 to the target database.
4. CDC replicates ongoing changes from source to target to catch up.
