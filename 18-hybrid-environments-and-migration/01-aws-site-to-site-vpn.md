# AWS Site-to-Site VPN

## Core concepts

- Site-to-Site VPN is a logical connection between your on-premises network and your AWS VPC.
- The VPN connection is encrypted in transit using IPsec.
- The VPN connection runs over on public internet.
- Site-to-Site VPN is highly available (If the on-premises network is configured correctly, check `Problem with single on-premises router` section below).
- Site-to-Site VPN is quick to provision, typically less than an hour.

## Components

- The AWS VPC your on-premise network needs to connect to.
- Virtual Private Gateway (VGW): The target of one or more route tables. Traffic from the VPC to the on-premises network is routed to the VGW, which then sends it to the on-premises network via the VPN connection.
- Customer Gateway (CGW): Logical piece of config and the thing that the config represents - your on-premises router.
- VPN Connection itself.

## Architecture

- CGW needs to be configured with the on-premises router public IP address.
- VGW provides 2 physical endpoints for each on-premises router, each router represents 1 VPN connection. Each endpoint is in a different Availability Zone (AZ). Each endpoint has a different public IP address. Each endpoint has a diffrent tunnel to the on-premises router.
- AWS side needs to know the IP range of the on-premises network, and the on-premises side needs to know the IP range of the AWS VPC.

### Problem with single on-premises router

- If the on-premises network only has a single router, the Site-to-Site VPN connection will be down if that router goes down - This is single point of failure.
- To avoid this, the on-premises network should have at least 2 routers, preferably in different physical locations. Site-to-Site VPN will then be configured with 2 VPN connections, one for each router.

## Static vs Dynamic VPN

### Static

- Routes for on-premises side added to route tables as **static route**.
- Network for on-premises side is statically configured on the VPN connection.
- No load balancing and multi-connection failover.

### Dynamic

- Dynamic VPN uses BGP protocol. Make sure your on-premises network support BGP, otherwise, it cannot use dynamic VPN. Networks information between each side are exchanged via BGP.
- Support multiple VPN connections, provide HA and load balancing.
- Routes for on-premises side can be added to route tables statically or dynamically via **route propagation**.
- **Route propagation** automatically adds any routes of any connected networks that the VPN is aware of to route tables.

## VPN Considerations

- A VPN connection has maximum throughput at 1.25 Gbps.
- Virtual Private Gateway has maximum aggregated throughput at 1.25 Gbps for all connected VPN connection.
- The above limit is from AWS side, you still need to check for the limit from on-premises side.
- Latency is inconsistent as it is through Public Internet. If need low latency, use Direct Connect.
- Cost: hourly charged, per GB out.
- Can be used as backup for Direct Connect.
- Can be used as initial setup as it's quick to setup, then migrate to Direct Connect later.
