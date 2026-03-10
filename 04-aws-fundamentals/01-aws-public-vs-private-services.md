# AWS Services: Public vs Private

## Service Types

- **Public Services**: Accessible from the public internet (e.g., S3, DynamoDB, SNS).
- **Private Services**: Run within a VPC and are isolated from the internet by default (e.g., EC2 instances in private subnets).

## AWS Network Zones

- **Public Internet Zone**: The unrestricted internet outside AWS.
- **AWS Public Zone**: Where AWS public services operate; accessible from the internet.
- **AWS Private Zone (VPC)**: Isolated networks within AWS; VPCs cannot communicate with each other or the internet by default.

## Connectivity

Private zone resources can access the public internet and AWS public services through:

- **Internet Gateway (IGW)**.
- **Public IP**: Assigns a public address to a private resource.
