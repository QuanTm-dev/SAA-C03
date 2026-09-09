# Direct Connect (DX) - Public VIF + VPN (Encryption)

- Note: VPN refers to Site-to-Site VPN, which is a logical connection between your on-premises network and your AWS VPC. The VPN connection is encrypted in transit using IPsec.
- Neither public or private VIFS offer any form of encryption.
- Public VIFs+IPSec VPN is a way to provide access to private VPC resources, using an encrypted IPSEC tunnel for transit.

## Public VIF + VPN

- Use public VIF and Virtual Private Gateway (VGW) or Transit Gateway (TGW) public endpoint.
- VPN is transit agnostic, meaning it can be used with either DX or public internet.
- Using VPN with DX (public VIF) provides encryption for DX traffic while still providing low latency and high throughput.
- Difference between VPN and MacSec:
  - VPN is an End-to-End encryption solution. MacSec provides encryption between 2 hops only.
  - VPN has wider vendor support than MacSec.
  - VPN has more encryption overhead than MacSec, which can impact throughput and latency.
- Common pattern: Use VPN as intial setup, then when DX is provisioned, either use VPN as backup or to provide encryption for DX traffic.
- VPN can be used to allows connections to VPC from other regions.
