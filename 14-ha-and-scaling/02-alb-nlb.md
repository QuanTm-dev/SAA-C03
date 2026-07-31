# Application Load Balancer (ALB) vs Network Load Balancer (NLB)

## Load Balancer Consolidation

- **IMPORTANT**: DO NOT CREATE ANKI CARDS FOR THIS SECTION. This section is meant to be a reference for you to understand.
- Classic Load Balancer (CLB) requires an individual load balancer for each domain name. This is not scalable and can be expensive.
- ALB and NLB support multiple domain names on a single load balancer. This is called **Load Balancer Consolidation**.

## Application Load Balancer (ALB)

**Protocol support**

- ALB is a Layer 7 load balancer.
- Supports HTTP and HTTPS only.
- Does not support other Layer 7 protocols (SSH, SMTP, etc.) or Layer 4 protocols (TCP, UDP, TLS).
- Understands Layer 7 content: cookies, headers, etc.

**Connection behavior**

- HTTP/HTTPS always terminates at the ALB — it opens a _new_ connection to the backend. This means no _unbroken SSL_ connection (which means that the backend server will not see the original SSL connection from the client).
- SSL certificate must be installed on the ALB if HTTPS is used.
- Slower than NLB — more of the network stack to process.
- Supports application-aware health checks.

### ALB Rules

- Rules direct connections arriving at a listener.
- Processed in priority order, **lowest number evaluated first**.
- The default rule is the catch-all, applied when no other rule matches.
- Rule conditions define whether a rule applies to a request. Conditions can be based on:
  - Host header
  - Path
  - HTTP header
  - HTTP method
  - Query string
  - Source IP address
- Rule actions define what happens when a rule is applied to a request. Actions can be:
  - Forward to target group
  - Redirect to another URL
  - Return a fixed response

## Network Load Balancer (NLB)

**Protocol support**

- NLB is a Layer 4 load balancer.
- Supports TCP, TLS, UDP.
- Does not support Layer 7 protocols (HTTP, HTTPS, SSH, SMTP, etc.) — no understanding of cookies, headers, etc.
- Good fit for SMTP, SSH, game servers, and financial apps that don't use web protocols.

**Performance**

- NLBs are super fast, about 25% of ALB latency.

**Health checks**

- Health checks are not aware of application health, only check network connectivity.

**Networking features**

- Supports Elastic IP addresses — useful for IP whitelisting with third parties. For example, sending the IP address of the NLB to a third party to whitelist it for access to their service.
- Can forward TCP directly to the instance → supports unbroken SSL (backend sees the original client connection).
- Can be used with PrivateLink to expose services to other VPCs.

## ALB vs NLB — when to use which?

| Requirement                                          | Choice |
| ---------------------------------------------------- | ------ |
| Unbroken encryption                                  | NLB    |
| Static IP for whitelisting                           | NLB    |
| Best raw performance                                 | NLB    |
| Non-HTTP/S protocols                                 | NLB    |
| PrivateLink                                          | NLB    |
| Everything else (content-based routing, HTTP/S apps) | ALB    |
