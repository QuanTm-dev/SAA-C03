# Custom VPC

> VPCs are regional, isolated networks that support hybrid cloud connectivity and custom tenancy options.

## Core Characteristics

- VPC is a region-resilient service.
- VPC allows you to create isolated network within a region. A region can have multiple VPCs.
- Supports hybrid cloud: connect on-premises or other cloud networks to VPC via VPN or Direct Connect.
- Supports both private CIDR blocks and public IPs.

## Tenancy Options

- **Default tenancy**: EC2 instances run on shared hardware (cost-effective).
- **Dedicated tenancy**: EC2 instances run on dedicated hardware (higher cost).
- Tenancy can only be changed from Dedicated to Default after VPC creation—cannot change from Default to Dedicated.
- Always choose Default unless specific requirements for Dedicated isolation.

## IP Addressing

### IPv4 CIDR Blocks

- 1 primary CIDR block per VPC: must be between /16 and /28.
- Secondary CIDR blocks: default quota is 5 total IPv4 CIDR blocks per VPC (1 primary + up to 4 secondary). Can be increased to 50 total via AWS Service Quotas.
- Non-overlapping CIDR blocks required.

### IPv6 CIDR Blocks

- Optional IPv6 CIDR block per VPC.
- Can provide your own IPv6 CIDR block or let AWS assign one.

## DNS Configuration

- Provided by Amazon Route 53 Resolver (integrated into each Availability Zone).
- DNS server is reachable at the base of VPC primary CIDR + 2 (e.g., 10.0.0.0/16 → 10.0.0.2).

### DNS Attributes (both must be true for full functionality)

- `enableDnsHostnames`: Allows instances with public IP addresses to receive corresponding public DNS hostnames. Default is `false` for custom VPCs (true for default VPCs).
- `enableDnsSupport`: Enables DNS resolution through the Amazon-provided DNS server. Default is `true`. Required for Route 53 Resolver to work.
