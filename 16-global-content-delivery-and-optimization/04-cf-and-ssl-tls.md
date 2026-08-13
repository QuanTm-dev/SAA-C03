# Cloudfront and SSL/TLS

## Default Domain Name

- Each CF distribution has a default domain name. It's a CNAME DNS record which your custom domain name can point to.
- Default domain format: `<random_string>.cloudfront.net`
- SSL supported by default for the default domain name. The certificate use `*.cloudfront.net` as its domain name.

## Alternate Domain Names

- When using an alternate domain name, you need to provide an SSL certificate to the distribution to verify the domain ownership and optionally use HTTPS.
- A certificate can be generated or imported into AWS Certificate Manager (ACM).
- The certificate must be in `us-east-1` region to be used with CloudFront.

## How CF handle HTTP/HTTPS

- CF provides 3 ways to handle HTTP/HTTPS:
  - Allow both HTTP and HTTPS
  - Redirect HTTP to HTTPS
  - HTTPS only
- There are 2 SSL Connections:
  - Viewer to CF
  - CF to Origin
- Both connections need valid **public** certificates.

## How SSL evolved over time (NO ANKI CARDS NEEDED)

- Before 2003, each HTTPS website usually needed its own public IP address.
- The problem was that SSL/TLS is negotiated before the web server can read the Host header, so the server could not tell which website the client was trying to reach.
- As a result, if multiple websites shared one IP address, the server could not decide which SSL certificate to present.
- To solve this, an extension called SNI was added to TLS.
- SNI allows the client to send the hostname during the TLS handshake, so the server can choose the correct certificate for that website.
- This made it possible for many HTTPS websites to share one IP address while using different certificates.
- Older browsers that do not support SNI still need a dedicated IP address for each website.

## CF IP Modes

- Support 2 modes:
  - SNI: Shared IP with other websites, free of charge
  - Dedicated IP: Cost extra
