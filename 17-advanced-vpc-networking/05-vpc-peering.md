# VPC Peering

- VPC allows you to create a private network link between **two VPCs**. In other words, VPC peering allows 2 private VPCs to communicate with each other as if they are on the same network.
- VPC connection can be created between VPCs in the same region or cross regions.
- VPC connection can be created in the same account or across different accounts.
- When you create a VPC, you can enable a setting that makes an instance’s public DNS hostname resolve to its private IP address instead of its public IP when queried from within the VPC.
- Security groups of the peered VPCs can reference each other if they're in the same region.
- VPC Peering is not **transitive**. If VPC A is peered with VPC B, and VPC B is peered with VPC C, VPC A cannot communicate with VPC C through VPC B. You must create a separate peering connection between VPC A and VPC C if you want them to communicate.
- To enable connection between 2 VPC:
  - You need to add a route in each VPC’s route table pointing to the other VPC’s CIDR.
  - Allow the peer VPC’s CIDR in both security group rules and NACLs.
- Communication is encrypted during transit.
