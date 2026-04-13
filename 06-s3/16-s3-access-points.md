# S3 Access Points

- S3 Access Points simplifies managing data access at scale for applications using shared data sets on S3.

## Example Scenario

Animal4Life organization uses a S3 bucket to store medical data of animals and their staff. There are 3 teams in the organization that need to access the data in the S3 bucket:

- Admin staff: Need access to all data in the S3 bucket.
- Vet staff: Need access to medical data of animals only.
- Field Workers: Need access to medical data of animals only, but only for the animals they are responsible for.

The organization also running an analytics application on VPC that needs to access the S3 bucket.

Currently, the organization is using bucket policies to manage access to the S3 bucket, which is becoming complex and difficult to manage as the number of teams and access requirements grow.

## Solution

- S3 Access Points create many access points, each with different policies and different network access controls. Each access point has a unique DNS name and can be used to perform S3 object operations.

- Access points can be created via Console UI or `aws s3control create-access-point --bucket <bucket-name> --name <access-point-name> --account-id <account-id> ` CLI command.

- Access points policy can restrict identities to certain prefix(s), tags, or actions.
- Access points can be used to restrict access to specific VPCs (require VPC endpoint) or IP address ranges. From the VPC side, you can configure VPC endpoint policies to restrict access to specific access points instead of the general S3 endpoint.
- Any permission defined in the access point policy must also be allowed by the bucket policy. Best practice is to allow all actions in the bucket policy as long as access points are used, and then use access point policies to restrict access.
