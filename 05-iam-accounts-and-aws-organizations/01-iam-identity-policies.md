## What is an IAM Identity Policy?

An identity-based policy attached to an IAM user, group, or role that grants or denies access to AWS resources.

See [IAM Basics](../02-course-fundamentals-and-aws-accounts/04-identity-and-access-management-iam-basics.md#iam-objects) for introduction.

## Policy Structure

IAM policies are JSON documents containing one or more statements. Each statement requires:

- **Effect**: `Allow` or `Deny`
- **Action**: Service action in format `service:action` (e.g., `s3:GetObject`; wildcards allowed)
- **Resource**: AWS resource in ARN format (e.g., `arn:aws:s3:::mybucket/*`; wildcards allowed)

Optional elements:

- **Condition**: Limits when the statement applies
- **Sid**: Statement identifier for reference

Example:

```json
{
  "Effect": "Allow",
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::mybucket/*"
}
```

## Policy Types

| Type               | Attached To                       | Reusable? | Use Case                                                      |
| ------------------ | --------------------------------- | --------- | ------------------------------------------------------------- |
| Inline             | Single identity (user/group/role) | No        | One-off or exceptional permissions; deleted with the identity |
| Managed (AWS)      | Multiple identities               | Yes       | Predefined policies maintained by AWS                         |
| Managed (Customer) | Multiple identities               | Yes       | Custom policies you maintain and version                      |

## Policy Evaluation Logic

When an identity requests an action on a resource, AWS evaluates attached policies in this order (highest to lowest priority):

1. **Explicit Deny**: Blocks all access. A single deny statement overrides all allows.
2. **Explicit Allow**: Grants access if no deny exists.
3. **Default Deny**: Access denied unless explicitly allowed.

### Action & Resource Matching

Both must match the request for the policy to apply:

- **Action**: `s3:GetObject` matches `s3:GetObject` or `s3:*` or `*:*`
- **Resource**: `arn:aws:s3:::mybucket/myobject` matches `arn:aws:s3:::mybucket/*` or `arn:aws:s3:::*` or `*`
