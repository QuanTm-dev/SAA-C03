# EC2 Architecture and Resilience

## Core Concepts

- EC2 instances are virtual machines running on **EC2 Hosts**, which are physical hardware managed by AWS.
- EC2 is **AZ-resilient**. Multi-AZ resilience requires deploying instances in multiple AZs yourself.
- Two EC2 Host tenancy options:
  - **Shared** (default): Multiple customers share the same host; you pay per instance.
  - **Dedicated**: One customer per host; you pay for the entire host.

## Instance Storage & Persistence

- Each EC2 Host contains: CPU, memory, and instance store (temporary local storage).
- **Instance store**: Lost when instance moves to a different EC2 Host; physically attached to the host.
- **EBS volumes**: Persistent block storage; remains attached across host changes (same AZ required).

## Instance Behavior: Restart, Reboot vs. Stop/Start

- **Reboot**: Instance stays on same EC2 Host.
- **Stop/Start**: Instance moves to a new EC2 Host in the same AZ.
- **Host failure**: Instance is automatically moved to a new host in the same AZ.

## Networking

- Two types of networking:
  - **Storage Networking**: For connecting to storage resources like EBS.
  - **Data Networking**: For instance connectivity via ENI in the subnet.
- When launched, an instance receives a primary **Elastic Network Interface (ENI)** in its subnet, which maps to the Data Networking.
- Instances can have multiple ENIs, even in different subnets, as long as they are in the same AZ.
- You cannot connect an instance from one AZ to an ENI or EBS volume in another AZ.

## Use Cases for EC2

- **Traditional OS + applications**: Applications requiring a specific OS.
- **Long-running compute**: Applications with continuous workloads.
- **Server-style applications**: Web servers, application servers, database servers waiting for client connections.
- **Variable or predictable workloads**: Batch processing, data analysis, bursty workloads.
- **Monolithic applications**: Full stack running on a single instance.
- **Workload migration**: Legacy on-premises applications migrated without modification.
- **Disaster recovery**: EC2 instances as backup/DR for on-premises systems.
