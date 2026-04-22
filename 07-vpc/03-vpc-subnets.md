# VPC Subnets

> Subnets are logical divisions of a VPC's IP address range.

## Subnet Basics

- Subnets are AZ-resilient.
- Each subnet is a range of IPv4 and/or IPv6 addresses within a VPC.
- Each subnet is associated with a single Availability Zone.
- You can have multiple subnets in the same AZ.
- Subnets can communicate with each other in the same VPC.
- By default, subnets have no direct route to an internet gateway; they are private unless configured with internet access.

## Subnet IP Structure

- Subnets must have CIDR blocks that are subsets of the VPC CIDR block.
- Subnet CIDR blocks within the same VPC must not overlap.
- You can optionally assign an IPv6 CIDR block to a subnet in addition to IPv4.

## Reserved IP Addresses

Each subnet reserves 5 IP addresses that cannot be assigned to resources:

- **First IP (Network address)**: Identifies the subnet.
- **Second IP (VPC router)**: Used by AWS for routing.
- **Third IP (DNS server)**: Used by AWS for the DNS server.
- **Fourth IP (Future use)**: Reserved by AWS for future use.
- **Last IP (Broadcast address)**: Reserved (broadcast not supported in VPCs).

## DHCP Options Set

- DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and network configuration to instances in a subnet.
- Each VPC uses exactly one DHCP options set, shared by all subnets in the VPC.
- DHCP option sets cannot be modified after creation; create a new set and associate it to update VPC DHCP settings.

## Subnet Settings

- **Auto-assign public IPv4 address**: Configure whether instances launched in the subnet receive public IPv4 addresses automatically.
- **Auto-assign IPv6 address**: Configure whether instances launched in the subnet receive IPv6 addresses automatically.
