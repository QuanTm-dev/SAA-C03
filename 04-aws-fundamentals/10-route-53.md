# Route53 basics

- Route53 helps us:
  - Register domain names
  - Host Zone files
- Route53 is a global service and globally resilient.
- There are usually 4 name servers for each hosted zone, and they are distributed globally.
- Hosted zones can be public or private:
  - Public hosted zones are used to route traffic on the internet.
  - Private hosted zones are used to route traffic within a VPC.

# DNS record types

## Name Server (NS) record

- NS records are used to delegate a domain to a set of name servers.

Example: example.com NS ns-123.awsdns-45.com

## A and AAAA records

- A records map a domain name to an IPv4 address.
- AAAA records map a domain name to an IPv6 address.

Example: www.example.com A 172.217.25.36, www.example.com AAAA 2607:f8b0:4005:805::2004

## CNAME record

- CNAME records map a domain name to another domain name.

Example: A server performs multiple tasks: fpt, mail, web services:

- ftp.example.com CNAME server1.example.com
- mail.example.com CNAME server1.example.com
- www.example.com CNAME server1.example.com

## MX record

- MX records specify the mail servers responsible for receiving email on behalf of a domain.
- Lower priority values indicate higher priority mail servers.
- A value can be a host or a fully qualified domain name (FQDN).

Example: example.com MX 10 mail1.example.com, example.com MX 20 mail2.example.com

## TXT record

- TXT records are used to store text information for various purposes, such as domain ownership verification.

Example: An email service provider may require you to add a TXT record to verify domain ownership: example.com TXT "v=spf1 include:mailservice.com ~all". After adding this record, the email service provider can verify that you own the domain by querying the record.

## Time to Live (TTL)

- TTL is the duration (in seconds) that a DNS record is cached by DNS resolvers.
