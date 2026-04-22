# VPC Sizing and Structure

## Key Constraints

- **VPC CIDR block range**: /16 (65,536 IP addresses) to /28 (16 IP addresses) minimum.
- **IP address conflicts**: Identify existing on-premises and other cloud network ranges to avoid overlaps.
- **RFC 1918 private ranges** (recommended): 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. Consider starting with 10.16.y.z.
- **Commonly used ranges** (less preferred to avoid overlap): 10.0.y.z, 192.168.y.z, 172.16.y.z

## Design Principles

When designing a VPC, plan for:

- **Scope**: How many AWS accounts and regions will you use? This determines the overall IP space needed.
- **Availability**: Use 3 availability zones plus 1 reserved for future expansion = 4 AZ allocations per region.
- **Tiers**: Allocate 3 tiers (database, application, web) plus 1 spare = 4 tiers per AZ.
- **Subnets per region**: 4 AZs × 4 tiers = 16 subnets.
- **Reservation**: Reserve 2 networks per region per account.

## Example: Animal4Life VPC Design

### Existing Network Ranges

Animal4Life operates across multiple locations and cloud platforms with the following CIDR ranges already in use:

- **Brisbane Head Office**: 192.168.10.0/24
- **London Office**: 192.168.15.0/24
- **New York Office**: 192.168.20.0/24
- **Seattle Office**: 192.168.25.0/24
- **AWS Pilot**: 10.0.0.0/16
- **Azure Pilot**: 172.31.0.0/16
- **GCP Pilot**: 10.128.0.0/9 (10.128.0.0 – 10.255.255.255)

### Design Requirements

- **Regions**: US (3 regions), EU (1 region), Australia (1 region) = 5 regions total.
- **Accounts**: General, Prod, Dev, plus 1 reserved for future expansion = 4 accounts total.
- **Per-account allocation**: Each region needs 4 /16 CIDR blocks (2 reserved per region per account), subdivided into 16 /20 subnets each.

### Solution

Use a /16 range per region per account, starting with:

- **US Region 1**: 10.16.0.0/16
- **US Region 2**: 10.32.0.0/16
- **US Region 3**: 10.48.0.0/16
- **EU Region**: 10.64.0.0/16
- **AU Region**: 10.80.0.0/16

Each /16 block subdivides into 16 /20 subnets (4 AZs × 4 tiers), providing sufficient capacity for current operations while avoiding conflicts with on-premises networks and other cloud pilots.
