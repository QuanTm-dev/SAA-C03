# Securing CloudFront and S3 using OAC

## What OAC is

- CloudFront Origin Access Control (OAC) lets CloudFront authenticate itself to S3. S3 can then restrict access to only requests coming from CloudFront
- OAC is a signing configuration that lets CloudFront sign requests to S3 using AWS Signature Version 4 (SigV4)

## OAC vs OAI

- OAC is the successor to OAI
- OAC is recommended for new distributions
- OAC supports more features than OAI

## Reuse and management

- One OAC can be associated with multiple distributions
- Using one OAC per distribution is recommended for easier management

## How to set up OAC

1. Create an OAC in CloudFront
2. Associate the OAC with an S3 origin within a distribution
   - Example S3 origin: `my-bucket.s3.us-east-1.amazonaws.com`
3. Update the S3 bucket policy to allow access only from the distribution

## How OAC works

### Authentication and authorization

- OAC involves two separate concepts: authentication and authorization
- Authentication: S3 verifies the request signature to confirm the request came from CloudFront
- Authorization: S3 checks the bucket policy to determine whether the distribution in the request may access the object

### Request flow

1. User requests an object from CloudFront
2. CloudFront checks whether the object is in its cache
3. On a cache miss, CloudFront forwards the request to S3
4. CloudFront signs the request to S3 using the OAC
5. S3 verifies the signature
6. S3 checks the bucket policy to see whether the request is allowed
