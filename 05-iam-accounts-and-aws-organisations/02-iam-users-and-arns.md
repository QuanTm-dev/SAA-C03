## What is an IAM User?

- Please refer to [this lesson](../02-course-fundamentals-and-aws-accounts/04-identity-and-access-management-iam-basics.md#iam-objects)

## How can an IAM User use AWS resources?

- Principal: An unidentified entity that want to access AWS resources.

1. Principal needs to authenticate to IAM using credentials (password, access keys)
2. AWS starts authorization process by evaluating all policies attached to the principal.

## What is an ARN?

- Amazon Resource Name (ARN) is a unique identifier for AWS resources.
- Format:
  - `arn:partition:service:region:account-id:resource-type/resource-id`
  - `arn:partition:service:region:account-id:resource-id`
- Example:
  - `arn:aws:s3:::catgif` => Refer to the bucket itself (You can perform actions on the bucket itself using this ARN, but not on the objects inside the bucket)
  - `arn:aws:s3:::catgif/*` => Refer to all objects in the bucket (You can't perform actions on the bucket itself using this ARN, only on the objects inside the bucket)

## Exam notes

- You cannot have more than 5000 IAM users in an AWS account.
- IAM user can be a member of maximum of 10 groups.
- Design impact: If your application needs to support more than 5000 users, you should consider using identity federation instead of creating IAM users.
