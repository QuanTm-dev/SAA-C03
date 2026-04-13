# S3 Storage Classes

> S3 offers multiple storage classes for different access patterns and durability needs. All classes (except Reduced Redundancy) have 99.999999999% durability across 3+ AZs.

## Storage Classes Comparison (First 6 Tiers)

| Storage Class                     | Replication   | Durability    | Availability           | Access                                                      | Min Duration | Min Billable Size | Retrieval                     | Use Case                                    |
| --------------------------------- | ------------- | ------------- | ---------------------- | ----------------------------------------------------------- | ------------ | ----------------- | ----------------------------- | ------------------------------------------- |
| **S3 Standard**                   | Multi-AZ (3+) | 99.999999999% | 99.99%                 | Millisecond                                                 | None         | None              | Instant                       | Frequently accessed, non-replaceable data   |
| **S3 Standard-IA**                | Multi-AZ (3+) | 99.999999999% | 99.9%                  | Millisecond                                                 | 30 days      | 128 KB            | Instant (per-GB fee)          | Infrequently accessed, non-replaceable data |
| **S3 One Zone-IA**                | Single AZ     | 99.999999999% | 99.5%                  | Millisecond                                                 | 30 days      | 128 KB            | Instant (per-GB fee)          | Recreatable data; resilience not required   |
| **S3 Glacier Instant Retrieval**  | Multi-AZ (3+) | 99.999999999% | 99.9%                  | Millisecond                                                 | 90 days      | 128 KB            | Instant (per-GB fee)          | Long-term data accessed quarterly           |
| **S3 Glacier Flexible Retrieval** | Multi-AZ (3+) | 99.999999999% | 99.99% (after restore) | Expedited: 1–5 min<br/>Standard: 3–5 hrs<br/>Bulk: 5–12 hrs | 90 days      | 40 KB metadata    | Requires restore (per-GB fee) | Archive/backup; accessed semi-annually      |
| **S3 Glacier Deep Archive**       | Multi-AZ (3+) | 99.999999999% | 99.99% (after restore) | Standard: 12 hrs<br/>Bulk: 48 hrs                           | 180 days     | 40 KB metadata    | Requires restore (per-GB fee) | Compliance archiving; accessed < once/year  |

## Detailed Charges Breakdown

| Charge Type                    | S3 Standard     | S3 Standard-IA                                            | S3 One Zone-IA                                            | S3 Glacier Instant                                        | S3 Glacier Flexible                                       | S3 Glacier Deep Archive                                     |
| ------------------------------ | --------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------- |
| **Storage (per GB/month)**     | Higher baseline | ~50% less than Standard                                   | ~50% less than Standard-IA                                | ~80% less than Standard                                   | ~85% less than Standard                                   | ~90% less than Standard                                     |
| **Request Fees**               | Per 1k requests | Per 1k requests                                           | Per 1k requests                                           | Per 1k requests                                           | Per 1k requests                                           | Per 1k requests                                             |
| **Retrieval Fee**              | None            | ✓ Per-GB retrieved                                        | ✓ Per-GB retrieved                                        | ✓ Per-GB retrieved                                        | ✓ Expedited > Standard > Bulk                             | ✓ Standard > Bulk (cheapest)                                |
| **Data Transfer Out (per GB)** | ✓ Charged       | ✓ Charged                                                 | ✓ Charged                                                 | ✓ Charged                                                 | ✓ Charged                                                 | ✓ Charged                                                   |
| **Minimum Duration Penalty**   | N/A             | ✓ 30 days: charged for full 30 days even if deleted early | ✓ 30 days: charged for full 30 days even if deleted early | ✓ 90 days: charged for full 90 days even if deleted early | ✓ 90 days: charged for full 90 days even if deleted early | ✓ 180 days: charged for full 180 days even if deleted early |
| **Storage Overhead**           | None            | None                                                      | None                                                      | None                                                      | 40 KB metadata per object                                 | 40 KB metadata per object                                   |
| **Early Deletion**             | No charge       | Pro-rated charge for remainder of 30-day minimum          | Pro-rated charge for remainder of 30-day minimum          | Pro-rated charge for remainder of 90-day minimum          | Pro-rated charge for remainder of 90-day minimum          | Pro-rated charge for remainder of 180-day minimum           |

**Notes on Retrieval Fees:**

- **S3 Glacier Flexible Retrieval** retrieval costs vary by tier: Expedited (fastest, most expensive) > Standard (middle) > Bulk (slowest, often free)
- **S3 Glacier Deep Archive** retrieval: Standard (12 hrs) > Bulk (48 hrs, cheapest)
- All retrieval fees charged per-GB of data retrieved
- \*\*Retrieval fee applies when you initiate a restore request to access the archived data

## S3 Intelligent-Tiering

- **Automatic tiering** — moves objects automatically based on access patterns
- **Access tiers** (no retrieval fees):
  - Frequent Access: Like S3 Standard (default tier)
  - Infrequent Access: Like Standard-IA (after 30 days no access)
  - Archive Instant Access: Like Glacier Instant (after 90 days no access)
  - Archive Access: Like Glacier Flexible (after 90 days, configurable up to 730 days)
  - Deep Archive Access: Like Glacier Deep Archive (after 180 days, configurable up to 730 days)
- **Additional Charges:** Monitoring and automation fee per object per month (no retrieval fees)
- **Minimum object size monitored:** 128 KB (smaller objects stay in Frequent Access)
- **Durability/Availability:** 99.999999999% durability, 99.9% availability
- **Use case:** Data with unknown or changing access patterns; long-lived data where access frequency is uncertain
