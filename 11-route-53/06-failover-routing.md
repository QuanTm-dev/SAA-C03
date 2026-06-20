# Route53 Failover Routing

- With failover routing, you can specify a primary and multiple secondary resources.
- If the primary resource is healthy, Route 53 routes traffic to it.
- If the primary resource is unhealthy, Route 53 routes traffic to the secondary resources.
- Use case: When you want to configure active-passive failover.
- Example: Route the traffic to a maintainance S3 static website when the primary website is down for maintenance.
