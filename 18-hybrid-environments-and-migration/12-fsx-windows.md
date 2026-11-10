# FSx for Windows File Server

## Overview

- Fully managed native Windows file server (file share)
- Designed for integration with Windows environments

## Directory integration

- Can integrate with AWS Managed Microsoft AD of AWS Directory Service
- Can integrate with self-managed AD (on-premises AD)

## Availability

- Can be deployed as single-AZ or multi-AZ

## Access

- Accessible using VPC
- Accessed using the SMB protocol
- Uses the Windows permission model

## Encryption

- Uses KMS for encryption at rest
- Enforces encryption in transit

## Backup and recovery

- Support on-demand and scheduled backup.

### Volume Shadow Copies (VSS)

- Supports volume shadow copies (VSS)
- Users can see multiple versions of a file or folder
- Users can restore a file or folder to a specific version

## Distributed File System (DFS)

- Supports DFS (Distributed File System)
- Groups shared folders across multiple servers into a single logical namespace
