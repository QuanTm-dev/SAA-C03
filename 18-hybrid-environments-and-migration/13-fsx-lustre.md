# FSx For Lustre

- Lustre is a **Linux** file system designed for high performance computing (HPC).
- FSx For Lustre is a managed file system for Lustre.
- Use POSIX style permission.
- Designed to use for anything that use large amount of data and requires high performance such as Machine Learning, Big Data.
- There are 2 deployment types:
  - Scratch: Maximum performance, no replication. Best for short‑lived, high‑throughput workloads where data loss is acceptable.
  - Persistent: Offer high availability for **1 AZ** and self healing. Best for long‑running, resilient workloads that need consistent availability.
- Acccessible within VPC.
- Metadata stored on Metadata Targets (MST).
- Objects (Data) are stored on multiple object storage targets (OST).
- Data can be backed up to S3 either manually or automatically. Automatic backups support configurable retention from 0 to 35 days.

## Performance model

- Follow the credit model similar to EBS GP2.
- Baseline performance are based on size:
  - Scratch: 200MB/s per TB.
  - Persistent: 3 levels - 50MB/s, 100MB/s, 200MB/s per TB.
- Size range: 1.2TB - 2.4TB.
- Can burst up to 1300MB/s.

## S3 Integration

- FSx For Lustre can be linked with a S3 bucket.
- Data is lazy-loaded from the S3 bucket to the file system the first time it's loaded.
- Data can be sync back to the S3 bucket using hsm_archive.
- Mental note: FSx For Lustre and S3 bucket data are completely separate. They're not automatically in sync.

## Architecture

- Depending the size of storage, the product deploys a number of servers. The servers are responsible for read/write requests and have an in-memory cache for frequent access data.
- All servers share an ENI.
