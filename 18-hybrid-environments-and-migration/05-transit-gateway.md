# Transit Gateway

## Overview

- Network transit hub that interconnects VPCs and on-premises networks
- Provides a central hub for connectivity, reducing the complexity of managing multiple connections
- Highly available by default
- Scalable by default

## Attachments

- Connect Transit Gateway to other network types: VPCs, VPNs, and Direct Connect gateways
- Mental model: an attachment is a connection between the Transit Gateway and another network resource
- VPC attachments are configured with a subnet in each AZ where they're deployed

## Routing

- Supports transitive routing
- Acts as a central hub, allowing attachments to communicate with each other
- Has a default route table to control routing of traffic between attachments
- Each attachment can be associated with a specific route table
- Per-attachment route table association gives granular control over routing

## Connectivity and Sharing

### Peering

- Connects to other Transit Gateways in different AWS accounts or regions using peering
- Cross-region peering can be used to create a global network

### Direct Connect

- Integrates with Direct Connect using transit virtual interfaces (transit VIFs)

### Sharing

- Can be shared between AWS accounts using AWS RAM

## Problem without Transit Gateway (No Anki Cards needed)

### Scenario

- 4 VPCs (VPC A, VPC B, VPC C, and VPC D)
- On-premises network with 2 routers (2 Customer Gateways)
- Goal: all VPCs can communicate with each other and with the on-premises network
- Goal: connectivity is highly available and scalable

### Connections required

- 6 VPC peering connections are needed to connect all 4 VPCs
  - VPC A <-> VPC B, VPC A <-> VPC C, VPC A <-> VPC D
  - VPC B <-> VPC C, VPC B <-> VPC D, VPC C <-> VPC D
- 16 VPN connections are needed to connect all 4 VPCs to the on-premises network with 2 Customer Gateways
  - VPC A <-> On-Prem, VPC B <-> On-Prem, VPC C <-> On-Prem, VPC D <-> On-Prem
- The more we scale, the more complex and harder to manage the network becomes

## With Transit Gateway (No Anki Cards needed)

- Create a single Transit Gateway
- Attach all 4 VPCs to the Transit Gateway using VPC attachments
- Create a single VPN connection from the Transit Gateway to each on-premises Customer Gateway (2 VPN connections in total)
