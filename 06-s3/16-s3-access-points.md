# S3 Access Points

> Named network endpoints with customized policies simplifying access control at scale across teams and applications.

## Use Case

Animal4Life stores medical data with different access needs:

- Admin staff: all data
- Vet staff: animal medical data only
- Field workers: medical data for assigned animals only
- Analytics application in VPC: filtered data access

Managing this with a single bucket policy becomes complex. Access points solve this by creating separate entry points with individual policies.

## How It Works

- Each access point has a unique DNS name and can perform S3 object operations (GetObject, PutObject, etc.).
- Access points work with buckets, FSx for NetApp ONTAP, and FSx for OpenZFS.
- Cannot use access points for non-object operations (bucket deletion, bucket policy changes, etc.).

## Access Control

### Policy Restrictions

- Restrict by S3 object prefixes, tags, or specific actions.
- Combine with bucket policy: access point policy must not grant more than bucket policy allows.
- Best practice: Allow all actions in bucket policy, use access points to enforce restrictions.

### Network Controls

- Restrict access to specific VPC (requires VPC endpoint).
- Configure VPC endpoint policies to restrict access to specific access points only.
- Each access point can have custom block public access settings.

## Creating Access Points

```bash
aws s3control create-access-point \
  --bucket <bucket-name> \
  --name <access-point-name> \
  --account-id <account-id>
```

Or use S3 Console.
