# Weighted Routing

- With weighted routing, you can specify multiple resources for the same record and assign a weight to each resource.
- Route 53 routes traffic to the resources based on the weights assigned to them versus the total weight.
- Example: You have 3 records with the following weights:
  - Record A: weight 50
  - Record B: weight 30
  - Record C: weight 20
  - In this case, Route 53 will route approximately 50% of the traffic to Record A, 30% to Record B, and 20% to Record C.
- If a record has 0 weight, it will never be returned in response to DNS queries.
- If all records have 0 weight, Route 53 will route traffic to all records with equal probability.
- If the chosen request is unhealthy, Route 53 will route traffic to the next available resource based on the weights of the remaining healthy resources.
- Use case: Simple load balancing, testing new versions of applications.
