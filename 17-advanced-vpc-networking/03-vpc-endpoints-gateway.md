# VPC Endpoints (Gateway)

- Gateway Endpoints provides private access to public AWS services without using Internet Gateway or NAT Gateway.
- Supported services: S3 and DynamoDB.
- Gateway Endpoint is a regional service.

## How it works

- Gateway Endpoints doesn't actually go into VPC subnets.
- When a Gateway Endpoint is associated with a VPC, it adds a prefix list to the route table of the subnets that point to the endpoint.
- The destination of the prefix list is not an IP address, but a logical representation of the service (e.g., pl-12345678 for S3).
- Endpoint policy can be attached to the endpoint to control access to the service. For example, only allow the endpoint to connect to a particular S3 bucket.
- A Gateway Endpoint can only be accessed from the VPC it's associated with.

## When to use VPC Endpoints

- When you want to access particular public AWS Services without allowing other public access.
- Prevent Leaky Buckets: Keep a bucket private by updating the bucket policy to only allow access from a particular Gateway Endpoint.
