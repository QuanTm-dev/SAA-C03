# EBS Volume Types - Provisioned IOPS

> High-performance SSD volumes designed for IOPS-intensive workloads requiring consistent low latency.

## Overview

- Provisioned IOPS volumes allow independent configuration of IOPS and storage capacity.
- As of April 30, 2025, AWS only offers **io2 Block Express** for new Provisioned IOPS volumes (io2 legacy is retired).
- Current types: **io1** and **io2 Block Express**.

## Volume Specifications

### io1 (Provisioned IOPS SSD)

- Max IOPS: 64,000 per volume
- Max throughput: 1,000 MiB/s (at 64,000 IOPS on Nitro instances)
- Storage capacity: 4 GiB – 16 TiB
- IOPS:GiB ratio: 50:1 (max)

### io2 Block Express (Provisioned IOPS SSD)

- Max IOPS: 256,000 per volume (Nitro instances); 32,000 (other instance types)
- Max throughput: 4,000 MiB/s
- Storage capacity: 4 GiB – 64 TiB
- IOPS:GiB ratio: 1,000:1 (max)

## Per-Instance Performance Limits

Aggregate IOPS and throughput across all EBS volumes attached to a single instance are bounded by instance type limits:

- For io1, 260,000 IOPS and 7,500 MB/s
- For io2 Block Express, 260,000 IOPS and 7,500 MB/s

## Use Cases

- I/O-intensive workloads requiring sustained IOPS performance.
- Databases and mission-critical applications with strict latency requirements.
- io2 Block Express preferred for new deployments (io1 is legacy for new volumes).
