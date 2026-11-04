# VPC Peering

## Overview

- Creates a private network link between two VPCs
- Lets two private VPCs communicate as if they are on the same network

## Supported scopes

- Works between VPCs in the same region or across regions
- Works between VPCs in the same account or across different accounts

## Transitivity

- Not transitive. If VPC A peers with VPC B and VPC B peers with VPC C, VPC A cannot reach VPC C through VPC B. A separate peering connection between VPC A and VPC C is required for them to communicate

## Enabling connectivity

- Add a route in each VPC's route table pointing to the other VPC's CIDR
- Allow the peer VPC's CIDR in the security group rules of both VPCs

## Security group references

- Security groups of peered VPCs can reference each other only if the VPCs are in the same region

## DNS resolution

- You can enable a setting that makes an instance's public DNS hostname resolve to its private IP when queried from within the peered VPC

## Encryption

- Cross-Region VPC peering traffic is automatically encrypted in transit.
- Same-Region VPC peering traffic is not automatically encrypted in transit by default. If encryption is required, use application-layer encryption such as TLS.
