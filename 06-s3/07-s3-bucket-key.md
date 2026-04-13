# S3 Bucket Key

## Overview

S3 Bucket Key reduces the cost of S3 server-side encryption with AWS KMS (SSE-KMS) by caching a bucket-level key, reducing API calls to KMS by up to 99%.

## Problem Without S3 Bucket Key

- **Cost**: Each SSE-KMS object encryption requires a call to KMS to generate a Data Encryption Key (DEK), incurring per-request costs that add up with large volumes.
- **Throttling**: High-volume object encryption can hit KMS throttling limits.

## How S3 Bucket Key Works

- S3 generates a short-lived bucket-level key from KMS and temporarily caches it in S3.
- This bucket key creates unique data keys for objects during its lifecycle.
- Objects are encrypted using the cached bucket key instead of making individual KMS calls, reducing S3-to-KMS traffic and encryption costs.

## Important Changes When Enabling S3 Bucket Key

### CloudTrail Logging
- KMS CloudTrail events log the **bucket ARN** instead of the object ARN as the encryption context.
- IAM and KMS key policies that use object ARN for encryption context must be updated to use bucket ARN instead.

### Replication Behavior
- When replicating encrypted objects, encryption settings are **preserved** in the destination bucket.
- If replicating unencrypted objects to a bucket with default encryption (including S3 Bucket Key), the replica objects are encrypted using the destination bucket's encryption configuration.
- The replica object's ETag will differ from the source object's ETag due to encryption changes.
