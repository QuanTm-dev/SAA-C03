# Private Distribution & Behaviours

## Private Distribution

- Each distribution can serve content in 1 of 2 modes:
  - Public
  - Private: requests required signed cookies or urls to access

- Signed Cookies and urls can be generated in 2 ways:
  - Trusted Signer (Old way): Root User creates a CF Key Pair for an AWS Account. The public key is added to a distribution. The account then becomes a **trusted signer** for your distribution. The private key then can generate signed cookies or urls for your distribution.
  - Trusted Key Group (New way): An user with the right permissions can create a key pair and add the public key to a **key group**. The private keys can generate signed cookies or urls for your distribution.
- Prefer the new way because:
  - You don't need account root user to create the key pair.
  - Give you more flexibility in how to manage and use the keys.

## Signed URL vs Signed Cookie

- Signed URL provides access to **1 object**.
- Signed Cookies provides access to **group of object**.
- Use URL if your client doesn't support cookie.
- Use Cookie if you want to maintain application URL: Signed URL provide a custom URL. For example, if your original url is `https://d123.cloudfront.net/video.mp4`, then the signed url could be `https://d123.cloudfront.net/video.mp4?Expires=1728300000&Signature=abc123&Key-Pair-Id=APKAXXXXX`.

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
