## Overview

Layer 3 (Network Layer) enables **host-to-host communication** across different networks and locations.

## Limitations of Layer 2 Only

- Requires expensive point-to-point links between networks.
- Cannot connect networks using different Layer 2 protocols (e.g., Ethernet vs. Wi-Fi).
- Not scalable for connecting multiple networks.

## Layer 3 Solution

- Adds **IP addressing** and **routing** to enable communication between networks without direct point-to-point links.
- Works across different Layer 2 protocols.
- Uses **packets** for multi-hop data transfer across intermediate networks.

## Internet Protocol (IP)

- Standard Layer 3 protocol for routing data between networks.
- Packets are encapsulated in different Layer 2 frames as they travel through networks.

## Packet Structure

### IPv4

- **Source IP Address**
- **Destination IP Address**
- **Protocol:** Specifies Layer 4 protocol (TCP, UDP, etc.)
- **Time to Live (TTL):** Limits hop count to prevent infinite loops.
- **Data:** Payload from Layer 4.

### IPv6

- **Source IP Address**
- **Destination IP Address**
- **Hop Limit:** Limits hop count to prevent infinite loops.
- **Data:** Payload from Layer 4.

## IPv4 Addressing

### Format and Structure

- Dotted-decimal with 4 numbers (0-255) separated by dots.
- IP addresses are actually binary, 32 bits total (4 sets of 8 bits), represented in decimal for readability.

### Network vs. Host Portions

- **Network portion:** Identifies which network the device is on.
- **Host portion:** Identifies the device on that network.
- Same network portion = same network; different network portions = different networks.

### CIDR Notation (Prefix)

- **Prefix** (e.g., /16): Number of bits used for the network portion; remaining bits are host portion.
- **Example:** 133.3.3.7/16 → first 16 bits (133.3) are network, last 16 bits (3.7) are host.

### Subnet Masks

- Determines if an IP is local or remote (affects routing decisions). It's the same as the prefix but in dotted-decimal format.
- **Explain/Example:** 255.255.0.0 = 11111111.11111111.00000000.00000000. The portion with 1s indicates the network part, and the portion with 0s indicates the host part (1s = network, 0s = host). There are 16 1s, so this corresponds to /16.

### Network Boundaries

- **Starting address:** All 0s in the host portion.  
  Example: `133.33.0.0`  
  Binary: `10000101.00100001.00000000.00000000`

- **Ending address:** All 1s in the host portion.  
  Example: `133.33.255.255`  
  Binary: `10000101.00100001.11111111.11111111`

### IP Assignment

- **Static:** Manually configured.
- **Dynamic:** Via DHCP.

## Routing

- Router compares destination IP against the routing table (known networks and next hops).
- Selects the best matching route (more specific prefixes preferred: /32 most specific, /0 least specific).
- Default route 0.0.0.0/0 matches all addresses.
- Packet forwarded to next hop using appropriate Layer 2 protocol.

## ARP (Address Resolution Protocol)

- ARP is used to discover the MAC address associated with an IP address.
