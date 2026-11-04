# Global Accelerator

## Overview

- Improves global application performance by directing user traffic to the nearest edge location. The traffic is then routed to the origin server over the AWS global network.
- Works with any TCP and UDP traffic

## Anycast IP

- Global Accelerator uses anycast IP
- Anycast IP allows a single IP address to be in multiple locations
- Users are automatically routed to the nearest edge location based on their geographic location when sending traffic to the anycast IP address

## Static IP addresses

- Creating a Global Accelerator gives you two static anycast IP addresses
- Any edge location can use the anycast IP addresses
- Clients use the anycast IP addresses to communicate with your application

## CloudFront vs Global Accelerator use cases

### Global Accelerator

- Use when you need non-HTTP(S) traffic
- Use to improve performance for compute applications

### CloudFront

- Use when you need to cache content
