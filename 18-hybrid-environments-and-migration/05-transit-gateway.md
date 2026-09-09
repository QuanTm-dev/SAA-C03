# Transite Gateway

## Core concepts

- Transit Gateway is a **network transit hub** that you can use to interconnect your virtual private clouds (VPCs) and on-premises networks.
- It reduces the complexity of managing multiple connections between VPCs and on-premises networks by providing a central hub for connectivity.
- It's highly available and scalable by default.
- It uses **attachments** to connect to other network types, such as VPCs, VPNs, and Direct Connect gateways. Think of **attachments** as a connection between the Transit Gateway and another network resource.
- Attachments are configured with a subnet in each AZ where they're deployed to.
- Transite Gateway can connect to other Transit Gateways in different AWS accounts or regions using **peering**.
- Transite Gateway can integrate with Direct Connect using **transit virtual interfaces** (transit VIFs).
- Transit Gateway has a default **route tables** to control how to route traffics between attachments. Each attachment can be associated with a specific route table, allowing for granular control over routing.

## Problem without Transit Gateway (No Anki Cards needed)

- Assume we have 4 VPCs (VPC A, VPC B, VPC C, and VPC D) and an on-premises network with 2 routers (2 Customer Gateways).
- What we want:
  - To ensure all VPCs can communicate with each other and with the on-premises network.
  - Ensure the connectivity is highly available and scalable.
- Without Transit Gateway:
  - We need 6 VPC peering connections to connect all 4 VPCs (VPC A <-> VPC B, VPC A <-> VPC C, VPC A <-> VPC D, VPC B <-> VPC C, VPC B <-> VPC D, VPC C <-> VPC D).
  - 16 VPN connections to connect all 4 VPCs to the on-premises network (VPC A <-> On-Prem, VPC B <-> On-Prem, VPC C <-> On-Prem, VPC D <-> On-Prem) with 2 Customer Gateways.
- The more we scale, the more complex the network becomes, and it becomes harder to manage.

## With Transit Gateway (No Anki Cards needed)

- With Transit Gateway, we can simplify the network architecture:
  - We create a single Transit Gateway.
  - We attach all 4 VPCs to the Transit Gateway using VPC attachments.
  - We create a single VPN connection from the Transit Gateway to each of the on-premises Customer Gateway (2 VPN connections in total).

## Transit Gateway Consideration

- Support **transitive routing** - Transit Gateway acts as a central hub which allows attachments to communicate with each other.
- Can be used to create global network via cross region peering.
- Transit Gateway can be shared between AWS Account using AWS RAM.
- Transit Gateway reduces the complexity of network architecture.
