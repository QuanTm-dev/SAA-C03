# Network Interfaces, Instance IPs and DNS

Visit [EC2 Networking](./02-ec2-architecture-resilience.md#networking) for an overview of EC2 networking concepts.

## Network Interface (ENI) Basics

- Each ENI has a MAC address, primary private IPv4 address, and can have secondary private IPv4 addresses.
- Each ENI receives one public IPv4 address.
- Each ENI can have one Elastic IP per private IPv4 address.
- Each ENI can have one or more IPv6 addresses.
- Each ENI has one or more security groups attached.
- Source/destination checks can be enabled or disabled on an ENI (see [NAT Instance](../07-vpc/08-nat-nat-gateway.md#nat-instance-source-destination-check-requirement) for details).

## DNS Hostnames

- **Private DNS**: The primary private IPv4 address gets a private DNS hostname that resolves only to the private IP within the VPC.
- **Public DNS**: Any public IPv4 address gets a public DNS hostname that resolves to the public IP from the internet and to the private IP from within the VPC.

## Elastic IP Address Behavior

- When you assign an Elastic IP to an instance, AWS releases the existing public IPv4 address. **You cannot recover the original address**
- When you disassociate the Elastic IP, the instance receives a new public IPv4 address (not the original one).

## Exam Powerup

- **MAC Address Mobility**: Software licenses tied to MAC addresses can be moved between instances by detaching/reattaching ENIs.
- **Public IP Persistence**: Public IPv4 addresses are dynamic; use Elastic IPs for persistent public addresses.
- **OS Visibility**: The OS never sees the public IPv4 address directly.
- **Multi-ENI Isolation**: You can have multiple ENI, each with its own security group, attached to an instance. This allows you to have different network interfaces for different purposes (e.g., one for public traffic, one for private traffic).
