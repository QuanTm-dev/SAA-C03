# FSx for Lustre

## Overview

- Lustre is a **Linux** file system designed for high performance computing (HPC)
- FSx for Lustre is a managed file system for Lustre
- Uses POSIX-style permissions
- Accessible within a VPC
- Designed for large datasets that require high performance, such as Machine Learning and Big Data

## Deployment types

### Scratch

- Maximum performance with no replication
- Best for short-lived, high-throughput workloads where data loss is acceptable

### Persistent

- Offers high availability within 1 AZ
- Self-healing
- Best for long-running, resilient workloads that need consistent availability

## Architecture

- Metadata is stored on Metadata Targets (MDT)
- Data (objects) is stored on multiple Object Storage Targets (OST)
- A number of servers are deployed depending on storage size
- Servers handle read/write requests
- Servers have an in-memory cache for frequently accessed data
- All servers share an ENI

## Performance model

- Follows a credit model similar to EBS GP2
- Baseline performance is based on file system size:
  - Scratch: 200MB/s per TB.
  - Persistent: There are multiple performance levels. For example, 50MB/s, 100MB/s, and 200MB/s per TB.
- Can burst up to 1300 MB/s per TB
- Size starts at 1.2 TB and grows in 2.4 TB increments

## S3 integration

- Can be linked with an S3 bucket
- Data is lazy-loaded from the S3 bucket to the file system the first time it is accessed
- Data can be synced back to the S3 bucket using hsm_archive
- Mental note: FSx for Lustre and S3 bucket data are completely separate. They are not automatically in sync

## Backups

- Data can be backed up to S3 either manually or automatically
- Automatic backups support configurable retention from 0 to 90 days
