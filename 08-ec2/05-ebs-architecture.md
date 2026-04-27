# Elastic Block Store (EBS) Service Architecture

> EBS is a block storage service providing persistent, AZ-resilient storage to EC2 instances. Volumes appear as block devices to instances and data replicates across physical devices within an AZ.

## Core Concepts

- **EBS volumes**: Block storage allocated from raw physical disks; appear as block devices when attached to EC2 instances; can be encrypted with KMS.
- **AZ resilience**: Provisioned in a single AZ with data replication across multiple physical devices within that AZ. If the AZ fails, volumes are unavailable (not a failure domain across AZs).
- **Volume lifecycle**: Independent of EC2 instance lifecycle; volumes persist after instance termination and can be detached and reattached to different instances.

## Attachment Modes

- **Single attachment**: One volume to one instance (default mode); an instance can attach multiple volumes.
- **Multi-Attach**: Attach single Provisioned IOPS SSD (io1/io2) volume to up to 16 Nitro instances in the same AZ. Requires clustered file system to manage concurrent writes; no additional charges.

## Snapshots

- Incremental backups stored in S3 (in buckets you cannot access directly via S3 console or API).
- Snapshot data automatically replicates across all AZs in the Region for durability.
- From any snapshot, you can restore a new EBS volume in any AZ within that Region.

## Billing

- **Volume storage**: Charged per GB-month for all volume types (gp2, gp3, io1, io2, st1, sc1).
- **Provisioned performance**: For gp3 and io2 volumes, additional charges for IOPS/throughput beyond the included baseline.
- **Snapshots**: Charged per GB-month stored; incremental snapshots minimize storage costs.
