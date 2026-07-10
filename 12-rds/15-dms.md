# Database Migration Service (DMS)

## Problems

- Migration is a complex process.
- Some challenges if you need to do it manually:
  - Setting up a real time replication between source and target databases.
  - Or take a snapshot of the source database and restore it to the target database. But you will need to handle the changes after the snapshot is taken.
  - How should you handle migration between different database engines? For example, from Oracle to PostgreSQL.
  - How do you handle the downtime of the application during the migration process?

## Introduce DMS

- DMS is a managed database migration service.
- DMS uses a replication instance which run on EC2 to perform 1 or more migration tasks.
- You need to define source and target endpoints which point to the source and target databases.
- IMPORTANT: 1 of the endpoints must be on AWS.
- Migration types:
  - Full load: Migrate existing data from source to target.
  - Full load + CDC (Change Data Capture): Migrate existing data and replicate ongoing changes from source to target. (This is the most common migration type.)
  - CDC only: Replicate ongoing changes from source to target. (Use when you have already migrated the existing data using other methods.)
- DMS doesn't support schema conversion (from one database engine to another).

## Schema Conversion Tool (SCT)

- SCT is used when converting one database engine to another. For example, from Oracle to PostgreSQL.
- SCT does not migrate data, it only converts the schema.
- SCT can also be used to extract data to a Snowball device for large database migration.
- Support both OLTP (Mysql, Oracle, etc...) and OLAP (Teradata, Vertica, etc...) databases.

## DMS and Snowball

- Problem: Large database migration with multi TB in size takes time and bandwidth to migrate.
- Solution: Use DMS with Snowball.
- Steps:
  1.  Use SCT to extract data locally and move to a Snowball device.
  2.  Ship the Snowball device to AWS. They load the data to S3.
  3.  DMS migrates the data from S3 to the target database.
  4.  Change Data Capture (CDC) is used to replicate ongoing changes from source to target database.
