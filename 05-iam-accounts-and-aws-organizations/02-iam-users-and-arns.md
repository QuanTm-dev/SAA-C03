# IAM Users and ARNs

## IAM User Basics

- IAM User: An identity within an AWS account representing a person or application (see [IAM Objects](../02-course-fundamentals-and-aws-accounts/04-identity-and-access-management-iam-basics.md#iam-objects) for detailed concepts).
- **Principal**: Any entity (user, role, service) requesting access to AWS resources.

## Authentication and Authorization

1. Principal authenticates with credentials (password or access keys)
2. AWS evaluates all policies attached to the principal
3. Action allowed only if policies permit it

## Amazon Resource Names (ARN)

- Amazon Resource Name (ARN) is a unique identifier for AWS resources.

### Format

- `arn:partition:service:region:account-id:resource-type/resource-id`
- `arn:partition:service:region:account-id:resource-id`

### ARN Examples

- `arn:aws:s3:::catgif` — Bucket itself (supports bucket-level actions)
- `arn:aws:s3:::catgif/*` — All objects in bucket (supports object-level actions, not bucket actions)

## Limits and Design Considerations

- **IAM Users per Account**: Maximum 5000
- **Groups per User**: Maximum 10 groups per user
- **Scaling Beyond 5000**: Use identity federation (external identity providers) instead of creating individual IAM users
