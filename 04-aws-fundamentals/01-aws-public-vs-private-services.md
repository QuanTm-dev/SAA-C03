# AWS Services: Public vs Private

> AWS services and resources exist in distinct network zones. Understanding which zone a service operates in determines how it can be accessed and how it communicates with other resources.

## Service Types

- **Public Services**: Accessible from the public internet (S3, DynamoDB, SNS).
- **Private Services**: Run within VPCs and isolated from the internet by default (EC2 in private subnets).

## Network Zones

- **Public Internet Zone**: The unrestricted internet outside AWS.
- **AWS Public Zone**: Where AWS public services operate; accessible from the public internet.
- **AWS Private Zone (VPC)**: Isolated networks within AWS; VPCs cannot communicate with other VPCs or the internet unless explicitly configured.

## Connectivity from Private Zone

Private zone resources access public services and the internet through:

- **Internet Gateway (IGW)**: Enables bidirectional communication between a VPC and the public internet.
- **Public IP/Elastic IP**: Assigns a publicly routable address to a private resource.
