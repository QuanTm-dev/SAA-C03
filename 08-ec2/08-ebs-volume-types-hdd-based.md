# EBS Volume Types - HDD-Based

- There are two HDD-based EBS volume types: **st1** and **sc1**.
- Both use a burst bucket model (like gp2)

## St1 (Throughput Optimized HDD)

- **Use case:** Frequently accessed sequential workloads (big data, data warehouses, log processing).
- **Storage capacity:** 125 GiB – 16 TiB.
- **Baseline throughput:** 40 MiB/s per TiB.
- **Burst throughput:** 250 MiB/s per TiB (capped at 500 MiB/s max).
- **Burst bucket:** Fills at **Baseline throughput**, holds 1 TiB of credits per TiB of volume size. Each credit = 1 MiB throughput.
- **Cost:** Lower than SSD volumes.

## Sc1 (Cold HDD)

- **Use case:** Infrequently accessed sequential workloads (cold data archives).
- **Storage capacity:** 125 GiB – 16 TiB.
- **Baseline throughput:** 12 MiB/s per TiB.
- **Burst throughput:** 80 MiB/s per TiB (capped at 250 MiB/s max).
- **Burst bucket:** Fills at **Baseline throughput**, holds 1 TiB of credits per TiB of volume size. Each credit = 1 MiB throughput.
- **Cost:** Lower than st1.
