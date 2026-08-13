# ACM

## HTTP Security

- HTTP is simple and insecure.
- HTTPS uses SSL/TLS to add an encryption layer to HTTP.
- Data is encrypted in-transit.
- SSL/TLS allows servers to prove their identity by using Certificates.
- Certificates can be signed by 1 of the CA trusted by the client.

## ACM Core Concepts

- ACM works with both public and private CAs:
  - Public CA: Issued and signed by Amazon Trust Services (ATS), a publicly trusted CA.
  - Private CA: Issued and signed by AWS Private CA, requiring clients to trust your private CA root.
- ACM can generate or import certificates.
- If ACM generates a certificate, it can also automatically renew the certificate.
- If imported, you're responsible for renewal.
- Certificates can only be deployed to supported AWS Service (e.g. CloudFront, ALB).
- EC2 is not supported by ACM.
- ACM is a regional service.
- Certs cannot leave the region in which they're generated or imported.
- An AWS Service that use an ACM Cert needs to be in the same region as the cert.
- CloudFront can only use `us-east-1` certs (Because global services are treated as they run on `us-east-1`).
- A certificate must be attached (deployed) to an AWS resource to take effect.
