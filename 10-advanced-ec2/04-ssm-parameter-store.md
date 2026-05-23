# SSM Parameter Store

> Centralized, secure service for storing configuration data as key-value pairs with versioning, encryption, and IAM access control.

## Core Concepts

- Parameter Store stores configuration data as encrypted or plaintext key-value pairs.
- Supports three parameter types: **String** (plain text), **StringList** (comma-separated values), **SecureString** (KMS-encrypted).
- SecureString parameters are encrypted using AWS Key Management Service (KMS).
  .

## Organization & Access

- Support hierarchical storage with path-like structure (e.g., `/myapp/dev/db/password`, `/myapp/prod/db/password`).
- Retrieve all parameters under a path (e.g., GetParameters for `/myapp/dev/`).
- Permissions can be applied at individual parameter or path level via IAM.

## Features

- Configuration changes trigger EventBridge events for automation and notifications.
- SSM also has public parameters which are created and maintained by AWS and can be used by anyone. For example, the latest Amazon Linux 2 AMI ID is available as a public parameter at `/aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2`and is used in the EC2 launch template.
