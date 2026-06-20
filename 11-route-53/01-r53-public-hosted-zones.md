# R53 Public Hosted Zones

## R53 Hosted Zones

- Hosted Zone is a DNS Database (zone file) for a domain.
- Hosted Zones are created automatically when you register a domain with R53.
- You can also create Hosted Zones separately for domains registered elsewhere.
- There is a fee for hosting a zone, and a fee for each DNS query.
- Hosted Zones are authoritative for the domain they are created for (meaning they contain the DNS records that define how to route traffic for that domain).

## R53 Public Hosted Zones

- R53 Public Hosted Zones is a zone hosted by R53 (Public Name Servers).
- Accessible from the public internet and VPC.
- Access from VPC is direct via the R53 Resolver at the VPC CIDR block +2 IP address.
- R53 Resolver allows querying R53 public and internet hosted zones.
- Externally registered domains can be associated with R53 Public Hosted Zones.
