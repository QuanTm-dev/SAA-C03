# Lambda@Edge

## Overview

- Runs lightweight Lambda functions at AWS Edge locations
- Adjusts data between the viewer and the origin
- Acts as middleware, modifying requests and responses as they pass through CloudFront

## Triggers

- Runs in response to CloudFront events:
  - Viewer Request
  - Viewer Response
  - Origin Request
  - Origin Response

## Limitations

- Supports only Node.js and Python runtimes
- Runs only in AWS Public Zones
- Does not support Lambda layers
- Has different time limits than standard Lambda functions

## Use cases

### A/B testing

- Use Viewer Request to return different content for testing without changing the URL
- Viewers only ever use the CloudFront URL, so the variant is invisible to them

### Migration between S3 origins

- Use Origin Request to redirect requests to a new S3 origin without changing the URL

### Device-based content

- Use Origin Request to return different content based on request headers
- Common headers to inspect:
  - `User-Agent`
  - `CloudFront-Is-Mobile-Viewer`
  - `CloudFront-Is-Tablet-Viewer`
  - `CloudFront-Is-Desktop-Viewer`
  - `CloudFront-Is-SmartTV-Viewer`

### Country-based content

- Use Origin Request to return different content based on the `CloudFront-Viewer-Country` header
