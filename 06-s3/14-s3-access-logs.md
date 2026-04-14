# S3 Access Logs

> Detailed request records for S3 bucket access. Useful for security audits, understanding usage, and troubleshooting.

## Key Terms

- **Source bucket**: The bucket being logged.
- **Target bucket**: The bucket where logs are stored (must be in same Region, same AWS account).

## Setup

- Enable via S3 Console, CLI, or PutBucketLogging API.
- Grant Log Delivery group write permission on target bucket using ACL.
- Best-effort delivery: logs may take time to appear after enabling.
- Specify optional prefix to organize log objects (e.g., `logs/`).

## Log Format

- Log files contain newline-delimited records.
- Each record is space-delimited with attributes: requester, bucket name, request time, action, response status, error code, etc.
- Can configure date-based partitioning in log object key format.

## Important Constraints

- Source and target buckets must be in same Region and owned by same account.
- Target bucket must not have Object Lock default retention or Requester Pays enabled.
- A single target bucket can receive logs from multiple source buckets (use prefixes to distinguish).
- S3 does NOT automatically manage log lifecycle — you must configure deletion via lifecycle policies.
- Avoid logging to the same bucket as source to prevent infinite log loops (if unavoidable, use a prefix).
