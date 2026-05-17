# ECS Cluster Mode

> ECS supports 2 primary launch types for running containers

- Both EC2 and Fargate mode contains ECS Management components includes:
  - Scheduling and Orchestration
  - Cluster manager
  - Placement engine

## EC2 Launch Type

- You manage EC2 instances directly within a VPC
- Clusters use Auto Scaling Groups for capacity management.
- You pay for EC2 instances regardless of whether containers are running.
- You are responsible for EC2 instance management.
- Good for large workloads if price-conscious; enables Spot Instances and prepayment options.
- Provides full control over instance types and configurations.

## Fargate Launch Type

- Serverless compute: containers run on AWS-managed shared infrastructure.
- Containers are injected into your VPC via ENI and function like other VPC resources.
- AWS manages the container host infrastructure.
- Pay only for container resources (CPU/memory) used, not the host.
- Ideal for variable/unpredictable workloads, burst jobs, and minimizing operational overhead.

## When to Use Each

- If you already are using containers, use ECS and choose either EC2 or Fargate mode.
- EC2 mode is good for a large workload if you are price conscious. This allows for spot pricing and prepayment.
- Fargate is great if you:
  - Have a large workload but are overhead conscious.
  - Have small or burst style workloads.
  - Use batch or periodic workloads.
