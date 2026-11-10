# Storage Gateway - File

## Core Concepts

- File Storage Gateway links local file storage to an S3 bucket
- Create one or more **Mount Points (AKA File Shares)**, each linked to a specific S3 bucket
- Mount Points are accessed via NFS (Linux) or SMB (Windows)
- A **Bucket Share (File Share)** is a combination of a Mount Point and an S3 bucket
- A File Storage Gateway can have a maximum of 50 Bucket Shares

## Caching

- Uses **Cache Storage**, similar to Storage Gateway - Volume Cached

## S3 Integration

- S3 buckets and files are visible to the user in the S3 Console
- Because the bucket is visible in S3, it integrates with other AWS services such as S3 Lifecycle, S3 Replication, and Lambda

## Change Synchronization

- Changes made in Mount Points are reflected in the S3 bucket, and vice versa
- Gateway to S3 is automatic.
- S3 to gateway is not automatic: the gateway’s cache only picks up S3 changes after a RefreshCache call or a cache-refresh timeout.

## Multiple Contributors

- Multiple on-premises environments can point to the same S3 bucket
- Each environment has its own Mount Point and File Storage Gateway
- This allows multiple contributors to work on the same S3 bucket

### Change visibility

- By default, a change one contributor makes to the bucket is not immediately visible to other contributors
- Other contributors see the change only after they refresh their folder or access the file again
- You can use `NotifyWhenUploaded` API to notify other contributors when a file is uploaded to the S3 bucket so that they can automatically refresh their folder or access the file again

### Concurrent edits

- File Storage Gateway has no Object Locking or File Locking mechanism
- Contributors working on the same file may overwrite each other's changes
- You must implement your own control mechanism
