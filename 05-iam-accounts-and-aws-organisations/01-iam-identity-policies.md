## What is an IAM Identity Policy?

- Please refer to [this lesson](../02-course-fundamentals-and-aws-accounts/04-identity-and-access-management-iam-basics.md#iam-objects)

### Policy Structure

IAM policies are JSON documents with one or more statements. Each statement contains:

- **Effect**: Allow or Deny
- **Action**: The AWS service action (format: `service:action`, wildcards allowed)
- **Resource**: The AWS resource in ARN format (wildcards allowed)
- **Condition**: (Optional) Condition that must be met
- **Sid**: (Optional) Unique statement identifier

Example policy statement:

```json
{
  "Effect": "Allow",
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::mybucket/*"
}
```

### Policy Types

- **Inline Policy**: Embedded directly in a single user, group, or role. Not reusable; deleted with the identity. Use for one-off or exceptional permissions.
- **Managed Policy**: Standalone policy attachable to multiple identities. Reusable and independently updatable. Use for common permissions. Includes AWS managed (AWS-maintained) and customer managed (you-maintained) types.

## How IAM Identity Policy Works

- When an identity attempts to perform an action on an AWS resource, AWS authenticates the identity and evaluates all attached policies.
- AWS matches the requested **action** and **resource** against the policy statement. Both must match for the policy to apply:
  - Requested action must match at least one action in the policy statement (e.g., `s3:GetObject` matches `s3:*`).
  - Requested resource must match at least one resource in the policy statement (e.g., `arn:aws:s3:::mybucket/myobject` matches `arn:aws:s3:::mybucket/*`).
- Wildcards are supported (e.g., `s3:*`, `arn:aws:s3:::mybucket/*`) for flexible matching.

### Policy Evaluation Logic

1. **Explicit Deny**: Overrides any allow (highest priority). A single deny blocks access.
2. **Explicit Allow**: Overrides the default deny.
3. **Default**: All requests are denied unless explicitly allowed.
