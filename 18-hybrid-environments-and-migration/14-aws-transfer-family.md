# AWS Transfer Family

## Overview

- Fully managed service for moving files into and out of S3 or EFS
- Provides managed servers (endpoints) that clients use to transfer files
- Servers run on multi AZ

## Protocols

- Servers support the following protocols:
  - FTP
  - FTPS
  - SFTP
  - AS2
- FTP can only run within a private VPC
- AS2 can only run within a VPC (public or private)

## Authentication

- Supported identity providers:
  - Directory Service
  - Custom identity provider (via Lambda)
  - Service-managed users — users managed within AWS Transfer Family itself
- FTP and FTPS only support Directory Service and custom identity provider

## Core concepts

### Servers (endpoints)

- Managed endpoint that uses one or more protocols
- You choose the protocol, identity provider, and backend storage
- Clients use these endpoints to interact with the service

### Managed File Transfer Workflows

- Fully managed, serverless, automated workflows
- Process files after they are uploaded to the service

## Endpoint types

- There are 3 endpoint types: Public, Public VPC, and Private VPC

### Public

- Dynamic public IPs
- Only supports SFTP

### Public VPC

- Static IPs, both private and public
- Supports SFTP, FTPS, and AS2
- Access controlled with security groups and NACLs

### Private VPC

- Static private IPs
- Supports SFTP, FTPS, AS2, and FTP
- Access controlled with security groups and NACLs

## Why use AWS Transfer Family?

### Scenario (No Anki cards needed)

- Example application:
  - On-prem SFTP server running on a Linux VM
  - Suppliers upload CSV/XML files every night
  - A cron job moves files into a local folder
  - A custom Python script parses the files and loads them into a database
- Changing the application to integrate natively with S3 and EFS takes time and money

### Solution

- Keep the existing workflows while moving storage and automation to AWS
- Use S3 for storage
- Optionally use Lambda to process the files
