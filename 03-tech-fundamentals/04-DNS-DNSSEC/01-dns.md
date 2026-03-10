# What it does?

## Problems

- IP is not easy to remember, but networks use IP during transit

## Domain Name System (DNS)

- DNS is a system that map a human readable Domain Name to an IP address.

# Why not one DNS server?

- Single point of failure: if that server goes down, no one can access any website.
- Scalability: one server cannot handle all the requests from all over the world (high load), the data volume is also huge.

=> We can have multiple DNS servers with a complete copy of the DNS database. We can somewhat solve the problems above, but we still have huge data volume issue.

# Key terms

- DNS Zone: A DNS zone is the part of the domain name system that a DNS server manages. Example: example.com zone may include records for www.example.com, mail.example.com, etc.
- Zone file: A text file where the DNS records for a zone are written and stored.
- Name Server (NS): A server that stores DNS zone files and responds to DNS queries.
- Authoritative: A DNS server is authoritative for a domain if it has the original information for that domain.
- Non-authoritative/Cache: A DNS server is non-authoritative if it does not have the original information for a domain, but can provide information from its cache or by querying other authoritative servers. E.g., Home Wifi router

# DNS Hierarchy

1. Root DNS Servers
   - Highest level in DNS
   - Direct queries to TLD (Top level domain) servers
   - Examples of TLD: .com, .uk, .org

2. Top-Level Domain (TLD) Servers
   - Manage domains under a specific TLD
   - Point to authoritative servers for domains
   - Example of Authoritative server: example.com

3. Authoritative DNS Servers
   - Store actual DNS records for a domain
   - Answer queries with IP addresses or other records
   - Examples: www.example.com, mail.example.com

**Order**: Root → TLD → Authoritative → Answer

# DNS Query Process

1. Check local cache and host file
2. Query Resolver (ISP DNS server - Router)
3. Resolver queries Root DNS server
4. Root DNS server responds with TLD server address
5. Resolver queries TLD server
6. TLD server responds with Authoritative DNS server address
7. Resolver queries Authoritative DNS server
8. Authoritative DNS server responds with requested IP address
9. Resolver caches the response and returns it to the client

# Registering a Domain Process

## Entities Involved

1. Domain Registrar: A company authorized to sell domain names and manage their registration.
2. DNS Hosting Provider: A service that hosts DNS records for a domain.
3. TLD Registry: An organization that manages the database of domain names for a specific top-level domain (TLD).

## Steps

1. A user selects a domain name and registers it through a Domain Registrar.
2. The Domain Registrar asks DNS Hosting Provider to set up the DNS
3. DNS hosting provider communicates the DNS information to the TLD Registry.
4. The TLD Registry updates the TLD DNS servers with the authoritative DNS server information for the new domain.
