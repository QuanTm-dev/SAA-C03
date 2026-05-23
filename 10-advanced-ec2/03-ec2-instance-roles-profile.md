# EC2 Instance Roles & Profile

## Core Definitions

- **EC2 Instance Role** is an IAM role assigned to an EC2 instance.
- **Instance Profile:** A container that holds an IAM role and is attached to an EC2 instance.

## How It Works

- An IAM role is attached to an **Instance Profile**, which is then attached to the EC2 instance.
- The EC2 instance assumes the role and all applications on it inherit its permissions.

## Credential Access & Rotation

- Applications retrieve temporary credentials from instance metadata at `http://169.254.169.254/latest/meta-data/iam/security-credentials/role-name`.
- Credentials are temporary and rotated automatically by AWS.
- AWS CLI and SDKs automatically use these credentials when running on an EC2 instance with an attached role.
