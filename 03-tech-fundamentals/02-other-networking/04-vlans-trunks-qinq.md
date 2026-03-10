# Problems VLAN Solves

## Without VLANs (Single Broadcast Domain)

- All broadcast messages reach every device → security and performance issues
- Example: Salary data meant for accounting reaches all departments

## With Multiple Physical Networks (Different Switches)

- Creating separate network segments limits flexibility: For 2 network segments to communicate, we need to connect the switches, which lead to the first architecture - The first problem.
- Devices moving between segments require physical switch reconnection → not scalable

# VLAN Solutions

## 802.1Q (Single-Provider VLAN Tagging)

### What It Does

- Adds a 32-bit S-tag (service tag) to frame headers; 12 bits store the VLAN ID
- Supports up to 2^12 = 4,096 VLANs
- Allows multiple VLANs on the same physical network with separate broadcast domains

### Port Types

- **ACCESS ports**: Assigned to a single VLAN ID; removes VLAN tags on exit
- **TRUNK ports**: Connect to other 802.1Q-capable devices; carry all VLAN tags

### How It Works

- Incoming frame on ACCESS port → VLAN ID is added (tagged)
- Outgoing tagged frame on ACCESS port → VLAN ID is removed
- Tagged frames only reach ACCESS ports with matching VLAN or TRUNK ports
- Cross-VLAN communication requires Layer 3 devices (routers)

Note: VLAN 0 = untagged, VLAN 1 = Management VLAN

## 802.1AD (Provider Bridging for Multi-Customer Networks)

### Problem

- ISPs serve multiple clients, each with their own VLANs
- Issue: Multiple clients may use the same VLAN ID (e.g., both use VLAN 1000), causing conflicts

### Solution

- Adds a second 32-bit C-tag (customer tag) to frame headers
- S-tag identifies the service provider's VLAN
- C-tag identifies the customer's internal VLAN
- The combination allows complete isolation between customers even if they use identical VLAN IDs
