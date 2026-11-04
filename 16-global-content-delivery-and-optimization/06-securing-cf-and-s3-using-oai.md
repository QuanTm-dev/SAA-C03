# Securing CF and S3 using OAI

## OAI applicability

- Origin Access Identity (OAI) only applies to S3 buckets used solely as the origin for CloudFront distributions. Meaning, the S3 bucket must not be used for static website hosting
- A bucket used for static website hosting is treated as a custom origin

## OAI mechanics

- An OAI is a type of identity
- An OAI can be associated with a CloudFront distribution. CloudFront then "becomes" the OAI
- An OAI can be used in bucket policies

## OAI bucket policy pattern

- Common pattern: allow access to the bucket only from CloudFront
- How it works:
  - Configure an explicit allow statement for the OAI in the bucket policy
  - All other anonymous traffic is denied by the implicit deny rule

## OAI best practice

- Use 1 OAI per distribution
- This makes permissions easier to manage in the long term

## Securing custom origins

- There are 2 common ways to secure a custom origin

### Custom header and HTTPS

- CloudFront sends a custom header to the origin, used together with HTTPS
- The origin checks whether the custom header is present
- The origin rejects the request if the header is missing

### CloudFront IP range allowlist

- The origin allowlists only the CloudFront IP ranges
- The origin checks the request's source IP
- The origin rejects the request if it is not from CloudFront
