# CloudFront (CF) - Origin Types & Origin Architecture

## Origin types

- CF currently supports 5 origin types
  - S3 bucket
  - AWS MediaPackage channel endpoints
  - Custom origin (AKA custom web servers)
  - Lambda function URL
  - VPC origins

- IMPORTANT: S3 Static Website Hosting is treated as a web server (custom origin)

## S3 origin configuration

- Origin Domain: the domain contents are retrieved from
- Origin Path: optional path contents are retrieved from; defaults to root
- Custom Header: optional headers CF includes in requests to the origin
- Protocol between Viewer and CF must match the protocol between CF and the origin

### Origin Access

- Origin Access defines how CF can access the S3 bucket
  - Option 1: bucket allows public access
  - Option 2: restrict access to only CF
- S3 origins support restricting access to only CF out of the box, using origin access control (OAC)

## Custom origin configuration

- Origin Domain: the domain contents are retrieved from
- Origin Path: optional path contents are retrieved from; defaults to root
- Minimum origin SSL protocol: the minimum SSL protocol CF uses with the origin
- HTTP and HTTPS Port: the ports CF uses when making requests to the origin
- Custom Header: optional headers CF includes in requests to the origin
- Protocol: the protocol CF uses with the origin. Check [Origin Protocol Policy](./04-cf-and-ssl-tls.md#httphttps-handling).

### Restricting access to only CF

- Web servers can use a custom header to restrict access to only CF
- Custom origins don't support this out of the box; the server must implement it manually

## Exam power-up

- EXAM POWER UP: questions about custom port, configurable protocol or minimum SSL protocol → custom origin is the answer
