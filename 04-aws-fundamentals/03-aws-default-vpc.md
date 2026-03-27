# VPC: Virtual Private Cloud

> A VPC is an isolated virtual network within an AWS region. All resources in a VPC are isolated by default from the internet and other VPCs.

## VPC Basics

- Operates across all availability zones in a region.
- Configured with an IP address range (CIDR block, e.g., 172.31.0.0/16).
- Divided into subnets; each subnet is in a single AZ.
- Isolated by default; requires explicit configuration (IGW, peering, NAT) to reach the internet or other VPCs.

## VPC Types

**Default VPC**

- Automatically created per region.
- Pre-configured and limited to 1 per region.
- Can be deleted and recreated but not customized.

**Custom VPC**

- User-created and fully customizable.
- Multiple per region allowed.

## Default VPC Configuration

| Attribute        | Value                        |
| ---------------- | ---------------------------- |
| CIDR Block       | 172.31.0.0/16                |
| Subnets          | One /20 per AZ               |
| Internet Gateway | Included                     |
| Security Group   | Included                     |
| NACL             | Included                     |
| IP Assignment    | Public IPv4 to all resources |
