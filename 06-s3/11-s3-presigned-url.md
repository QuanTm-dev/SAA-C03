# S3 Presigned URLs

> Presigned URLs grant temporary access to S3 objects without requiring the recipient to have AWS credentials. Access is constrained by the permissions of the user who created the URL.

## Core Concepts

- A presigned URL is a time-limited, signed HTTP request that grants access to a specific S3 object.
- The recipient can download (GET), upload (PUT), or read metadata (HEAD) depending on the URL type.
- Permissions of the creator are applied when the URL is used.

## How It Works

1. An AWS user generates a presigned URL by specifying: the S3 object, the HTTP method (GET, PUT, HEAD, etc.), and an expiration time.
2. S3 encodes authentication information and expiration into the URL.
3. The user shares the URL with others, who can access the object until the URL expires.

## Key Constraints

- **URL generation**:
  - An AWS user can generate a presigned URL for an object they don't have access to.
  - An AWS user can generate a presigned URL for an object that doesn't exist.
- **Access denial**: If access is denied, either the creator never had permission or has since lost it.
- **IAM role limitation**: URLs created with IAM role credentials expire when the role session expires, even if a longer expiration time was specified => Don't use IAM role to generate PreSigned URLs.
