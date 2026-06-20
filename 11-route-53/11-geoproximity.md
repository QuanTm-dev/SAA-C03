# Geoproximity

- Geoproximity routing directs traffic to resources **closest to the end user**.
- You define:
  - **AWS regions** where **AWS resources** are located.
  - Or **latitude/longitude** for external (non-AWS) resources.
- You can apply a **bias**:
  - Expands or shrinks the size of a region.
  - Useful for routing more traffic to a resource that performs better.

## How it works

1. Route 53 determines the user's location via **IP lookup**.
2. Route 53 calculates the distance between the user and the resources (including bias).
3. Route 53 returns the record for the resource that is closest to the user.

## Use Case

- When you want to route users to the physically closest server.
