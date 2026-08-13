# Lambda@Edge

- Lambda@Edge allows you to run lightweight Lambda functions at AWS Edge locations.
- Can adjust data between the Viewer and the origin.
- Only supports Node.js and Python runtimes.
- Can only run in AWS Public Zones.
- Layers are not supported in Lambda@Edge.
- Have different time limits versus standard Lambda functions.

## Architecure

- Lambda@Edge can run in response to CloudFront events:
  - Viewer Request
  - Viewer Response
  - Origin Request
  - Origin Response
- Think of Lambda@Edge as a middleware that can modify requests and responses as they pass through CloudFront.

## Use Cases

- A/B testing: use viewer request to return different content for testing without changing the URL (we only use the CF URL).
- Migration between S3 Origins: use Origin Request to redirect requests to a new S3 Origin without changing the URL.
- Different content for different devices: use Origin Request to return different content based on the User-Agent header.
- Content by country: use Origin Request to return different content based on the CloudFront-Viewer-Country header.
