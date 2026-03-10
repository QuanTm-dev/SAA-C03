## Definition

Distributed Denial of Service (DDoS) attacks overload internet services using malicious traffic from compromised devices (botnets).

## How It Works

- Attackers control botnets (infected devices) to generate massive traffic volume
- Malicious traffic competes with legitimate traffic to consume server resources

## Why It's Difficult to Block

- Traffic originates from many different IPs
- Some attacks exploit legitimate services (like DNS), so blocking them breaks service provider (our app) functionality

## Attack Types

### 1. Application Layer - HTTP Flood

- Exploits client-server computational imbalance
- Requests are cheap to send but expensive to process
- Botnets flood server with HTTP requests

### 2. Protocol Attack - SYN Flood

- Sends spoofed SYN packets with fake source IPs
- Server responds with SYN-ACK to fake addresses
- SYN-ACK Responses hang and consume resources before discarded

### 3. Volumetric - DNS Amplification

- Exploits DNS response imbalance (small request = large response)
- Botnets send DNS requests spoofing the target server's IP
- DNS servers send large responses to the target, overwhelming it
