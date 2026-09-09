# Storage Gateway - File

## Core Concepts

- File Storage Gateway links a local file storage to an S3 bucket.
- With File Storage Gateway, you create one or more **Mount Points (AKA File Shares)** that are linked to a specific S3 bucket.
- Mount Points can be accessed via the NFS (Linux) or SMB (Window) protocol.
- The S3 buckets and files are visible to the user in the S3 Console.
- Use **Cache Storage** similar to Storage Gateway - Volume Cached.
- A **Bucket Share** is a combination of a Mount Point and an S3 bucket.
- A File Storage Gateway can have maximum of 10 Bucket Shares.
- Because the Mount Points are linked to S3 buckets, any changes made to the files in the Mount Points are reflected in the S3 bucket and vice versa.
- Because the S3 bucket is visible in the S3 Console, you can integrate it with other AWS services such as S3 Lifecycle, S3 Replication, Lambda.

## Multiple Contributors

- Multiple on-premises environments can point to the same S3 bucket with their own Mount Points and File Storage Gateway. This allows multiple contributors to work on the same S3 bucket.
- By default, when a change is made to the bucket from one contributor, the other contributors will not see the change until they refresh their folder or access the file again. You can use `NotifyWhenUploaded` API to notify other contributors when a file is uploaded to the S3 bucket.
- There is no Object Locking or File Locking mechanism in File Storage Gateway. If multiple contributors are working on the same file, they may overwrite each other's changes. You need to implement your own control yourself.
