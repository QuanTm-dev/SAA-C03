# Securing CF and S3 using OAI

## Origin Access Identity (OAI)

- This is only applicable to S3 buckets that are only being used as the origin for CloudFront distributions. Meaning, the s3 bucket is not being used for static website hosting. If the S3 bucket is being used for static website hosting, then it is treated as a custom origin.
- OAI is a type of identity.
- OAI can be associcated with a CloudFront distribution. CF then "become" the OAI.
- OAI is then can be used in bucket policies.
- A common pattern is only allow access to the bucket from CloudFront. This is done by configuring an explicit allow statement in the bucket policy that allows access to the OAI. The result is any other traffics will be deny by implicit deny rule.
- Best practice: Use 1 OAI for 1 distribution to make it easier to manage permissions in the long term.

## Securing Custom Origins

- There are 2 ways to secure a custom origin:
  - Use custom header and HTTPS: CF sends a custom header to the origin. The origin check if the custom header is present. If not, the origin rejects the request.
  - Whitelist only the CF IP ranges: The origin check if the request is from the CF using the IP. If not, the origin rejects the request.

## Origin Access Control (OAC)

- OAC is the replacement for OAI and is the recommended way to secure S3 origins behind CloudFront.
- OAC ties to a distribution.
- CloudFront uses the OAC to sign requests to S3. S3 then can verify if the request comes from CF.
- The S3 bucket policy is then updated to allow only CloudFront access through the distribution and implicitly deny all other access.
