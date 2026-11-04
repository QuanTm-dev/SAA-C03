# CloudFront and SSL/TLS

## Default domain name

- Each CloudFront distribution has a default domain name. It's a DNS name that a custom domain name can point to using a CNAME record
- Format: `<random_string>.cloudfront.net`
- SSL is supported by default for the default domain name
- The default certificate uses `*.cloudfront.net` as its domain name

## Alternate domain names

- Requires an SSL certificate on the distribution to verify domain ownership
- Using HTTPS with an alternate domain name is optional
- The certificate can be generated in, or imported into, AWS Certificate Manager (ACM)
- The certificate must be in `us-east-1` to be used with CloudFront

## SSL connections

- There are 2 SSL connections:
  - Viewer to CloudFront
  - CloudFront to origin
- A valid **public** certificate is required on any connection that uses HTTPS

## HTTP/HTTPS handling

- Viewer Protocol Policy controls the viewer to CloudFront connection, with 3 options:
  - Allow both HTTP and HTTPS
  - Redirect HTTP to HTTPS
  - HTTPS only
- Origin Protocol Policy controls the CloudFront to origin connection, with 3 options:
  - HTTP only
  - HTTPS only
  - Match Viewer

## How SSL evolved over time (NO ANKI CARDS NEEDED)

- Before 2003, each HTTPS website usually needed its own public IP address
- SSL/TLS is negotiated before the web server can read the Host header
- The server could not tell which website the client was trying to reach
- With multiple websites on one IP address, the server could not decide which SSL certificate to present
- SNI, an extension to TLS, was added to solve this
- SNI lets the client send the hostname during the TLS handshake
- The server uses the hostname to choose the correct certificate for that website
- SNI lets many HTTPS websites share one IP address while using different certificates
- Older browsers without SNI support still need a dedicated IP address for each website

## CloudFront IP modes

- CloudFront supports 2 IP modes
- SNI mode:
  - Shares an IP with other websites
  - Free of charge
- Dedicated IP mode:
  - Costs extra
