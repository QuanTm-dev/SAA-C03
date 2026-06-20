# Route 53 Latency Routing

## Key Concepts

- Latency routing lets you associate **multiple resources** with the same DNS record.
- Each resource is tied to a specific **AWS region**.
- For a given record name, each region can only have **one record**.

## How It Works

- AWS maintains a database of **latency measurements** between user locations and AWS regions.
- When a DNS query is made:
  1. Route 53 determines the user's location via **IP lookup**.
  2. It selects the record with the **lowest latency** that is also **healthy**.
  3. If the lowest-latency record is unhealthy, Route 53 returns the next best healthy option.
- Latency measurement data is **not real-time** (periodically updated).

## Use Case

- Ideal when you want to **optimize performance** and **improve user experience** by directing traffic to the region with the lowest latency.
