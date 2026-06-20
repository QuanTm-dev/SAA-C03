# Multi Value Routing

- With multi-value routing, you can specify multiple resources for the same record.
- Each record has a health check associated with it.
- Up to 8 **healthy** records are randomly chosen and returned in response to DNS queries.
- Client chooses one of the returned healthy records to route traffic to.
- Multi-value improves availability.
- Multi-value is not a true load balancer.
- Key difference from failover routing: Multi-value can return multiple healthy records, while failover routing only returns one primary or one secondary record based on health.
- Use case: When you want have multiple servers for the same application and want to improve availability (active - active pattern).
