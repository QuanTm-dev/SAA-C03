# CloudFront Private Distribution

## Distribution modes

- CloudFront serves content in one of two modes: public or private
- Private mode requires signed cookies or signed URLs to access content

## Signing methods

- Signed cookies and URLs can be generated in two ways: trusted signer (old) or trusted key group (new)

### Trusted signer (old way)

- Root user creates a CloudFront key pair for an AWS account
- The account is added to a distribution
- The account then becomes a trusted signer for that distribution
- The private key generates signed cookies or URLs for the distribution

### Trusted key group (new way)

- A user with the right permissions creates a key pair
- The public key is added to a key group
- The key group is added to a distribution
- The private key generates signed cookies or URLs for the distribution

### Why prefer trusted key groups

- Does not require the account root user to create the key pair
- Gives more flexibility in managing and using the keys

## Signed URL vs signed cookie

### Signed URL

- Provides access to one object
- Use when the client doesn't support cookies
- Provides a custom URL, so the application URL changes
  - Original: `https://d123.cloudfront.net/video.mp4`
  - Signed: `https://d123.cloudfront.net/video.mp4?Expires=1728300000&Signature=abc123&Key-Pair-Id=APKAXXXXX`

### Signed cookie

- Provides access to a group of objects
- Use when you want to keep the application URL unchanged

## CloudFront + API Gateway + Lambda + Signed Cookies Flow (No Anki Card Needed)

1. **App → CloudFront (default behavior)**
   - Request routed to API Gateway origin.

2. **CloudFront → API Gateway → Lambda**
   - Lambda generates CloudFront signed cookies.
   - Cookies returned to client in response headers.

3. **App → CloudFront (private content behavior)**
   - Client sends request with signed cookies.
   - CloudFront validates cookies.
   - If valid → serves private content from S3/private origin.

### Behaviors

- **Default Behavior**
  - Origin: API Gateway
  - Path: `/api/*` (or `*`)
  - Caching: Disabled/minimal
  - Forward headers/cookies

- **Private Content Behavior**
  - Origin: S3/private bucket
  - Path: `/content/*`
  - Restrict Viewer Access: Require signed cookies
  - Caching: Enabled
