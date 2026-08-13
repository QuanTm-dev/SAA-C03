# Global Accelerator

- Global Accelerator improves the global performance of your applications by directing user traffic to the nearest edge location. The traffic is then routed to the origin server over the AWS global network.

## Key concepts

- Global Accelerator uses anycast IP.
- Anycast IP allows a single IP address to be in multiple locations. This means that users are automatically routed to the nearest edge location based on their geographic location.
- When creating a Global Accelerator, you get two static anycast IP addresses.
- The anycast IP addresses can be used by any edge locations.
- Clients will use the anycast IP addresses to communicate with your application.
- Can work with any TCP and UDP traffic.

## CloudFront vs Global Accelerator use cases

- Use Global Accelerator when you needs non-HTTP(S) traffic.
- Use Global Accelerator when you need to improve performance for compute applications.
- Use CloudFront when you need to cache content.
