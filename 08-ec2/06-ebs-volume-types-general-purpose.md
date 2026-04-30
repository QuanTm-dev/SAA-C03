# EBS Volume Types - General Purpose

## GP2 Overview

- General Purpose SSD (GP2) is the default EBS volume type.
- Volume size: 1 GiB to 16 TiB.
- Use cases: low-latency applications, dev/test environments, boot volumes.

## GP2 Performance

### Baseline IOPS

- Scales linearly: 3 IOPS per GiB (minimum 100, maximum 16,000 IOPS).
- Volumes ≤33.33 GiB: 100 IOPS baseline.
- Volumes >33.33 GiB: 3 IOPS per GiB baseline.
- Maximum baseline is 16,000 IOPS.

### Burst Performance (Credit System)

- Can burst up to 3,000 IOPS when demand exceeds baseline.
- I/O credit system governs burst capacity:
  - Each credit represent 16 KiB of data.
  - Each volume starts with 5.4 million I/O credits.
  - Credits accumulate at baseline IOPS rate per second (minimum 100/second).
  - Burst for up to 30 minutes at 3,000 IOPS before credits exhaust.
- Volumes ≥1 TiB have baseline ≥3,000 IOPS; burst capability not needed.

### Throughput

- GP2 delivers 128–250 MiB/s depending on volume size.
- Volumes ≤170 GiB: 128 MiB/s maximum.
- Volumes 170–334 GiB: can burst to 250 MiB/s.
- Volumes ≥334 GiB: 250 MiB/s.

## GP3 Overview

- Latest General Purpose SSD, 20% lower cost per GiB than GP2.
- Volume size: 1 GiB to 64 TiB.
- **Key advantage**: Performance (IOPS/throughput) scales independently of volume size.
- **No burst needed**: Indefinitely sustains provisioned performance.
- Use cases: Same as GP2 (transactional, general workloads).

## GP3 Performance

### Baseline Performance (Included)

- 3,000 IOPS and 125 MiB/s (fixed, regardless of volume size).

### Provisioned Performance (Additional Cost)

- **IOPS**: Provision up to 80,000 IOPS (ratio: 500 IOPS per GiB, maximum for volumes ≥160 GiB).
- **Throughput**: Provision up to 2,000 MiB/s (ratio: 0.25 MiB/s per IOPS, maximum for volumes ≥160 GiB and ≥8,000 IOPS).
