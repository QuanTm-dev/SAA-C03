# Aurora Serverless

## Core Concepts

- **Aurora Serverless** provides on-demand, autoscaling database capacity.
- Uses **Aurora Capacity Units (ACUs)** to measure compute capacity.
- ACU represents a certain amount of CPU and memory.
- You set a **minimum and maximum ACU range**; Aurora scales within that range.
- **Billing:** charged per second for actual usage.
- **Resilience:** same as provisioned Aurora — six copies of data across three AZs.
- Aurora automatically allocates more ACUs when load increases and reduces them when demand drops.

## Use Cases

- **Infrequent workloads:** pay only when active.
- **New applications:** no need to guess capacity.
- **Variable/unpredictable workloads:** scales up/down automatically.
- **Development & testing:** scales back when idle.
- **Multi-tenant applications:** Application revenue is tied to the customer workload, can charge customers based on their usage of the database.
