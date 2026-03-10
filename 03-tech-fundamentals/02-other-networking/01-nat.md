## What is NAT?

Network Address Translation translates private IP addresses to public IP addresses to overcome IPV4 shortages and improve security by hiding internal addresses.

## Why NAT Matters

- IPV4 addresses must be globally unique (limited supply)
- NAT hides internal network structure from outside access

## NAT Methods

- **Static NAT**: One-to-one mapping (private IP ↔ public IP)
- **Dynamic NAT**: Many-to-many mapping using a pool of public IPs
- **PAT (Port Address Translation)**: Many-to-one mapping with different port numbers (e.g., all home devices share one public IP)

## IPV6

NAT is only used with IPV4. IPV6 has enough addresses to eliminate the need for NAT.
