# VPC Basics

- A VPC (Virtual Private Cloud) is an isolated virtual network within an AWS region, operating across all availability zones.
- VPCs are isolated by default—they cannot communicate with other VPCs or the internet unless you configure networking services (gateways, peering, etc.).
- Every VPC has an IP address range called a CIDR block (e.g., 172.31.0.0/16). VPCs are divided into subnets, each in a single availability zone.

# VPC Types

- **Default VPC**: Automatically created per region, pre-configured, and limited to 1 per region.
- **Custom VPC**: User-created and fully customizable; you can have multiple per region.

# Default VPC Configuration

- Automatically created when you set up an AWS account; cannot be customized but can be deleted and recreated.
- **CIDR block**: Always 172.31.0.0/16
- **Subnets**: Each AZ receives a /20 subnet
- **Networking**: Includes an internet gateway, security group, and NACL
- **IP assignment**: Services deployed to default VPC receive public IPv4 addresses
