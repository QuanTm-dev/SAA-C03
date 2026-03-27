# Route 53

> AWS DNS service for domain registration, DNS hosting, and traffic management. Globally resilient.

## Capabilities

- Register domain names.
- Host DNS zones and manage DNS records.
- Route traffic based on policies (weighted, latency-based, failover, geolocation).

## Resilience

- **Global Service**: Available everywhere globally.
- **Globally Resilient**: Remains available even if all regions fail (zone data distributed across multiple AWS regions).
- **Name Servers**: Typically 4 per hosted zone, distributed globally for redundancy.

## Hosted Zones

**Public Hosted Zone**: Routes traffic on the internet for your domain.

**Private Hosted Zone**: Routes traffic within a VPC (internal DNS resolution).

## DNS Record Types

### A Record

Maps a domain name to an IPv4 address.

- Example: `www.example.com A 172.217.25.36`

### AAAA Record

Maps a domain name to an IPv6 address.

- Example: `www.example.com AAAA 2607:f8b0:4005:805::2004`

### NS Record (Name Server)

Delegates a domain to a set of name servers.

- Example: `example.com NS ns-123.awsdns-45.com`

### CNAME Record (Canonical Name)

Maps a domain name to another domain name (alias).

- Example: Multiple subdomains pointing to one server:
  - `ftp.example.com CNAME server1.example.com`
  - `mail.example.com CNAME server1.example.com`
  - `www.example.com CNAME server1.example.com`

### MX Record (Mail Exchange)

Specifies mail servers responsible for receiving email.

- Lower priority number = higher priority.
- Example: `example.com MX 10 mail1.example.com` (primary), `example.com MX 20 mail2.example.com` (secondary).

### TXT Record

Stores arbitrary text data; commonly used for domain verification and email authentication.

- Example: SPF verification: `example.com TXT "v=spf1 include:mailservice.com ~all"`

## Time to Live (TTL)

**Definition**: Duration (in seconds) that DNS resolvers cache a DNS record.

**Impact**: Lower TTL = more frequent lookups (slower, more accurate); higher TTL = fewer lookups (faster, stale data possible).

**Use case**: Lower TTL before migrations; normal (3600+) for stable records.
