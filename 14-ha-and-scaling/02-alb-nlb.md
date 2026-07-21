# Application Load balancing (ALB) vs Network Load Balancing (NLB)

## Load Balancer Consolidation

- **IMPORTANT**: DO NOT CREATE ANKI CARDS FOR THIS SECTION. This section is meant to be a reference for you to understand.
- Classic Load Balancer (CLB) requires an individual load balancer for each domain name. This is not scalable and can be expensive.
- ALB and NLB support multiple domain names on a single load balancer. This is called **Load Balancer Consolidation**.

## Application Load Balancer (ALB)

- ALB is a Layer 7 load balancer.
- Supports HTTP and HTTPS protocols.
- Does not support other layer 7 protocols like SSH, SMTP,...
- Does not support Layer 4 protocols like TCP, UDP, TLS, etc.
- Understand Layer 7 content like cookies, headers, etc...
- HTTP/HTTPS always terminate at the ALB, ALB makes a new HTTP/HTTPS connection to the backend server. This means no _unbroken SSL_ connection (which means that the backend server will not see the original SSL connection from the client).
- Must have SSL certificate installed on the ALB if HTTPS is used.
- ALB is slower than NLB because it has more network stack to process.
- Support application health checks.

### ALB Rules

- Rules direct connections which arrive at a listener.
- Processed in priority order, from the lowest to the highest.
- Lowest priority rule is the default rule, which is catch-all rule.
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

- NLB is a Layer 4 load balancer.
- Supports TCP, TLS, UDP protocols.
- Does not support Layer 7 protocols like HTTP, HTTPS, SSH, SMTP,...
- Does not understand Layer 7 content like cookies, headers, etc...
- NLBs are super fast, about 25% of ALB latency.
- Good for SMTP, SSH, game servers which don't use web protocols, financial apps which don't use web protocols.
- Health checks are not aware of application health, only check IMCP/TCP/UDP connectivity.
- NLB supports elastic IP addresses which is useful for whitelistin. For example, sending the IP address of the NLB to a third party to whitelist it for access to their service.
- Can forward TCP to the instance => Supports unbroken SSL connection (which means that the backend server will see the original SSL connection from the client).
- Can be used with private link to provide services to other VPCs.

## ALB vs NLB, when to use which?

- Need unbroken encryption? NLB
- Static IP for whitelisting? NLB
- Best performance? NLB
- Operate on non-HTTP/S? NLB
- Private Link? NLB
- Otherwise... ALB
