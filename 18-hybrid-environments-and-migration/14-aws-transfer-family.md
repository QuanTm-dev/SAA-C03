# AWS Transfer Family

- AWS Transfer Family is a fully managed service that lets you move files into and out of AWS S3 or EFS.
- It provides managed "servers" which support the following protocols:
  - FTP
  - FTPS
  - SFTP
  - AS2
- Supports the following identity providers for authentication:
  - Directory Service
  - Custom identity provider (via Lambda)
  - Service-Managed users - The users managed within AWS Transfer Family itself.
- FTP and FTPS only supports Directory Service and Custom identity provide.
- FTP can only run within a private VPC.
- AS2 can only run within a VPC (public or private).
- Run on multi AZ.

## Why use AWS Transfer Family?

### Scenario (No Anki cards needed)

- Imagine you have the following application:
  1. On‑prem SFTP server running on a Linux VM.
  2. Suppliers upload CSV/XML files every night.
  3. A cron job moves files into a local folder.
  4. A custom Python script parses the files and loads them into a database.
- Change the application to natively integrate with S3 and EFS take times and money.

### Solution

- AWS Transfer Family allows you to keep these workflows while moving storage and automation to AWS.
- In the above scenario: Use S3 for storage, and optionally use Lambda for processing the files.

## Core concepts

- Servers (Endpoints): managed endpoint that use one or more protocols. You choose the protocol, identity provider, and backend storage. Clients use these endpoints to interact with the product.
- Managed File Transfer Workflows: A feature of AWS Transfer Family that provides fully managed, serverless, automated workflows for processing files after they are uploaded to the product.
- There are 3 endpoint types:
  - Public: Dynamic IPs (both private and public), only support SFTP.
  - Public VPC: Static IPs (both private and public), support SFTP + FTPS + AS2, can use SG and NACL to control access.
  - Private VPC: Static IPs (both private and public), support SFTP + FTPS + AS2 + FTP, can use SG and NACL to control access.
