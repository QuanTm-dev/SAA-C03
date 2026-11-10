# Direct Connect (DX) - Public VIF + VPN (Encryption)

- Note: VPN in this lesson refers to Site-to-Site VPN

## Site-to-Site VPN basics

- Logical connection between your on-premises network and your AWS VPC
- Encrypted in transit using IPsec
- Transit agnostic — can be used over either DX or the public internet

## DX encryption

- Neither public nor private VIFs offer any form of encryption
- Public VIFs+IPSec VPN is a way to provide access to private VPC resources, using an encrypted IPSEC tunnel for transit.

## Public VIF + VPN

- Uses a public VIF with the public endpoint of a Virtual Private Gateway (VGW) or Transit Gateway (TGW)
- Provides encryption for DX traffic
- Still provides low latency and high throughput
- Allows connections to the VPC from other regions

## VPN vs MACsec

### VPN

- End-to-end encryption solution
- Wider vendor support than MACsec
- More encryption overhead than MACsec, which can impact throughput and latency

### MACsec

- Provides encryption between 2 hops only

## Common pattern

- Use VPN as the initial setup while DX is being provisioned
- Once DX is provisioned, use VPN as backup
- Alternatively, once DX is provisioned, use VPN to provide encryption for DX traffic
