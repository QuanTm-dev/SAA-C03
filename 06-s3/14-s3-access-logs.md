# S3 Access Logs

- S3 Access Logs are a feature of Amazon S3 that provides detailed records for the requests that are made to your S3 buckets. These logs can help you understand how your S3 resources are being accessed and used, and can be useful for security and auditing purposes.

## Terms

- Source Bucket: The S3 bucket for which access logs are being collected.
- Target Bucket: The S3 bucket where the access logs are stored.

## Architecture

- Enable Access Logging on Source Bucket via UI Console, CLI or Put API.
- Logging is managed by Log Delivery group, you need to grant write permission to the Log Delivery group on the Target Bucket using ACL.
- The enable logging process is best effort, it might take some time for the logging to start after you enable it.
- Logs are delivered as log files. Log files consist of Log Records. Records are newline-delimited. Attributes are space-delimited.
- Each log record contains details about a single access request, such as the requester, bucket name, request time, action, response status, and error code (if any).
- A single target bucket can receive logs from multiple source buckets. You can separate using prefixes, this is configured on the logging configuration of the source bucket.
- You need to manage the lifecycle of the log files by yourself, it's not automatically managed by S3 Access Logs.
