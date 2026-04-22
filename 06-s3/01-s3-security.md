# S3 Security

## Default Access Model

- S3 buckets are **private by default**—only the AWS account that owns the bucket has access
- The account root user and identities with granted permissions can access the bucket and its contents
- All others are denied access unless explicitly granted via policies or ACLs

## Access Control Mechanisms

### Identity-Based Policies (IAM)

- Attach to **identities** (users, roles, groups) in the same AWS account
- Use when managing permissions for identities across multiple AWS services

### Bucket Policies (Resource-Based)

- Resource policy attached to a bucket
- JSON documents that include a **Principal** element (unlike identity policies)
- Can grant access to:
  - Other AWS accounts
  - Anonymous users (public access)
- Use when managing S3-only permissions across accounts or for public access

### Access Control Lists (ACLs)

- Original S3 access control mechanism—**inflexible and obsolete**
- Only use as a last resort if bucket policies and IAM policies cannot meet requirements
- Not recommended for new architectures

## S3 Block Public Access

Security settings that prevent public access to buckets and objects:

- Block new public ACLs
- Block existing public ACLs
- Block new public bucket/access point policies
- Block public and cross-account access through any public bucket/access point policies

Can be applied at the account level or individual bucket level.

## Security Best Practices

| Scenario                                           | Recommended Approach                              |
| -------------------------------------------------- | ------------------------------------------------- |
| Cross-service permission management in one account | IAM policies                                      |
| Same-account identity permissions                  | IAM policies                                      |
| S3-only permissions across accounts                | Bucket policies                                   |
| Public S3 access                                   | Bucket policies + S3 Block Public Access settings |
