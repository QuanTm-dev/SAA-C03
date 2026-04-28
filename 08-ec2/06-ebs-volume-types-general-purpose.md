# EBS Volume Types - General Purpose

## GP2

### Terms

- IO Credit: 16kb chunk of data.
- IO Bucket: Container that holds IO credits.
- Baseline Performance: The minimum transfer speed of a volume.

### Characteristics

- General Purpose SSD (GP2) is the default EBS volume type.
- Volumes ranges in size from 1 GB to 16 TB.
- If IO Bucket is empty, no IO operations can be performed until the bucket is refilled.
- IO Bucket can hold up to 5.4 million IO credits.
- GP2 has a baseline performance of 3 IOPS per GB (with a minimum of 100 IOPS).
- IO Bucket is refilled at the rate of **Baseline Performance**. Meaning for every second, the bucket is refilled with IO credits equal to the baseline performance of the volume (minimum 100 IOPS). For example, with a 100 GB volume, the baseline performance is 300 IOPS, so the bucket is refilled with 300 IO credits every second. With a 10GB volume, the baseline performance is 100 IOPS (minimum), so the bucket is refilled with 100 IO credits every second.
- Rule of thumb: Volume below 33.33 GB will have a baseline performance of 100 IOPS, and volume above 33.33 GB will have a baseline performance of 3 IOPS per GB.
- You're not limited to the baseline performance. You can burst up to 3,000 IOPS when required.
- IO Bucket starts full, so you can run it in burst mode for 30 minutes (5.4 million IO credits / 3000 IOPS) before it runs out of credits.
- If you consume more credits than the refill rate, the IO Bucket will deplete. If you consume less credits than the refill rate, the IO Bucket will fill up.
- Volumes that are larger than 1TB do not need this credit system as they have baseline performance equal to or greater than the maximum burst performance (3,000 IOPS). Meaning the refill rate is equal to or greater than the maximum burst performance, so the bucket will always be full.
- The maximum baseline performance is 16,000 IOPS
- GP2 is suitable for low latency applications, dev or test environments, boot volumes. If you don't have a good reason to choose another volume type, GP2 is a good default choice.

## GP3

- Volumes ranges in size from 1 GB to 16 TB.
- Volumes starts with a baseline performance of 3,000 IOPS and 125 MB/s throughput, regardless of the volume size.
- Base price is 20% lower cost than GP2.
- You can pay more to increase the baseline performance up to 16,000 IOPS and 1,000 MB/s throughput. 4x faster throughput than GP2(250 MB/s).
- GP3 does not auto scale performance based on volume size, you have to provision the performance you need by paying more.
- GP3 has the same use cases as GP2, and can swap with GP2 in any time.
