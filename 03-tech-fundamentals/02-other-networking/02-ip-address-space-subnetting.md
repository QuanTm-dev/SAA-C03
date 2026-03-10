## IPv4 Address Space

**Management & Allocation**

- Public IPv4 addresses must be allocated by IANA and regional internet registries (RIRs) to be used on the internet
- Part of the address space is reserved for private use

**Address Classes (Public)**

- Class A: 0.0.0.0–127.255.255.255 (128 networks, 16.7M addresses each)
- Class B: 128.0.0.0–191.255.255.255 (16,384 networks, 65.5K addresses each)
- Class C: 192.0.0.0–239.255.255.255 (2.1M networks, 256 addresses each)
- Class D & E: Reserved for other purposes

**Private Address Ranges** (not routable on internet)

- Class A: 10.0.0.0–10.255.255.255 (16.7M addresses)
- Class B: 172.16.0.0–172.31.255.255 (1M addresses)
- Class C: 192.168.0.0–192.168.255.255 (65.5K addresses)

## IPv6

- Vastly larger address pool than IPv4

## Subnetting

**Definition**: Dividing a network into smaller subnetworks (subnets)

**How to Subnet**:

1. Find the start and end addresses of the original network
2. Split in half and increment the prefix by 1
3. Subnet 1 starts at the original start; Subnet 2 starts at the midpoint
4. Repeat as needed (typically in powers of 2: 2, 4, 8, 16...)

**Example**: Subnetting

- Original Network:
  - Address: `192.168.1.0/24`
  - Start: `192.168.1.0`
  - End: `192.168.1.255`
- Split into 2 Subnets:
  - Subnet 1:
    - Address: `192.168.1.0/25`
    - Start: `192.168.1.0`
    - End: `192.168.1.127`
  - Subnet 2:
    - Address: `192.168.1.128/25`
    - Start: `192.168.1.128`
    - End: `192.168.1.255`
