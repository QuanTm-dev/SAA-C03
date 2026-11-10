# AWS Secrets Manager

## Overview

- Manages secrets within AWS
- Specialised for storing and managing secrets
- Overlaps with SSM Parameter Store (SecureString)

## Automatic rotation

- Supports automatic rotation of secrets using Lambda
- Rotation is the key difference compared to SSM Parameter Store

## Integration with AWS services

- Integrates directly with some AWS products
- Example: RDS credentials can be stored in Secrets Manager
- When Secrets Manager rotates RDS credentials, it also updates the credentials saved within RDS

## Security

- Access to secrets is restricted using IAM
- Secrets are encrypted using KMS
