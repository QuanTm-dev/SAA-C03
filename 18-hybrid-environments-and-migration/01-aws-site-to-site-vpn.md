# AWS Site-to-Site VPN

## Overview

- Logical connection between your on-premises network and your AWS VPC
- Encrypted in transit using IPsec
- Runs over the public internet
- Quick to provision, typically less than an hour
- Highly available if the on-premises network is configured correctly (check `Problem with single on-premises router` section below)

## Components

- **VPC**: the AWS VPC the on-premises network connects to
- **Virtual Private Gateway (VGW)**: target of one or more route tables
  - Traffic from the VPC to on-premises is routed to the VGW
  - VGW sends it to on-premises via the VPN connection
- **Customer Gateway (CGW)**: logical piece of config representing your on-premises router
- **VPN connection**: the connection itself between the VGW and CGW

## Architecture

- CGW is configured with the on-premises router's public IP address
- Each on-premises router represents 1 VPN connection
- VGW provides 2 physical endpoints per on-premises router
- Each endpoint is in a different Availability Zone (AZ)
- Each endpoint has a different public IP address
- Each endpoint has its own tunnel to the on-premises router
- AWS side must know the IP range of the on-premises network
- On-premises side must know the IP range of the AWS VPC

### Problem with single on-premises router

- If the on-premises network only has a single router, the Site-to-Site VPN connection will be down if that router goes down - This is single point of failure.
- To avoid this, the on-premises network should have at least 2 routers, preferably in different physical locations. Site-to-Site VPN will then be configured with 2 VPN connections, one for each router.

## Static vs Dynamic VPN

### Static

- On-premises routes are added to route tables as **static routes**
- On-premises network is statically configured on the VPN connection
- No load balancing
- No multi-connection failover

### Dynamic

- Uses the BGP protocol
- On-premises network must support BGP, otherwise dynamic VPN cannot be used
- Network information is exchanged between both sides via BGP
- Supports multiple VPN connections
- Provides HA and load balancing
- On-premises routes can be added to route tables statically or dynamically via **route propagation**
- **Route propagation** automatically adds routes of any connected networks the VPN is aware of to route tables

## Throughput

- Maximum throughput of a VPN connection is 1.25 Gbps per tunnel
- VGW maximum aggregated throughput is 1.25 Gbps across all connected VPN connections
- These limits are from the AWS side, you still need to check the limit on the on-premises side

## Latency

- Latency is inconsistent because traffic goes over the public internet
- If you need low latency, use Direct Connect

## Cost

- Charged hourly
- Charged per GB out

## Use cases

- Backup for Direct Connect
- Initial setup, since it is quick to provision, then migrate to Direct Connect later
