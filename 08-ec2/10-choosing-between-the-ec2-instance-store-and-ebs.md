# Choosing Between EC2 Instance Store and EBS

## When to Use EBS

- Use EBS for persistent storage that survives instance termination.
- Use EBS for resilience and isolation from instance lifecycle.
- Use EBS if your application cannot replicate data across instances.

## When to Use Instance Store

- Use instance store for ephemeral, high-performance storage with no persistence requirements.
- Use instance store for built-in fault-tolerant applications with multi-instance replication.
- Use instance store for cost optimization (no additional charge—included in instance price).
- Use instance store for super-high performance (>260,000 IOPS).

## Choosing EBS Volume Types

**By Cost:**

- Cheapest: st1 (throughput optimized) or sc1 (cold storage)
- Note: Do not use st1/sc1 for boot volumes

**By IOPS Capacity:**

- Up to 16,000 IOPS: gp2
- Up to 80,000 IOPS: gp3
- Up to 256,000 IOPS: io2 Block Express
- Beyond per-instance limits: Use instance store

**Constraint: Per-Instance Performance Limits**

- Total attached volume IOPS cannot exceed instance limits. Check [Per-Instance Performance Limits](./07-ebs-volume-types-provisioned-iops.md#per-instance-performance-limits).
- If exceeding instance limits, choose a larger instance type.
