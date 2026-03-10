# Terms

- Infrastructure Stack (from bottom to top):
  - Facilities: Physical buildings, networking.
  - Storage: Storage devices (e.g. hard drives, SSDs).
  - Servers: Physical servers
  - Virtualization: Software that allows multiple virtual machines to run on a single physical server + Virtual Machines.
  - Operating System
  - Containers: Docker container
  - Runtime: Language runtime (e.g. Java, Python)
  - Data: Data that applications use.
  - Application: Software applications.
    **Note:**: There are parts in the stack that you managed and there are parts managed by the vendors.
- Unit of consumption: The part of the stack where from that point upwards you're responsible for management and payment.

# Cloud Service Models

- On-Premises: You manage and pay for everything in the infrastructure stack.
- DC hosted: The vendor manages the facilities, you manage and pay for everything else.
- IaaS (Infrastructure as a Service): The vendor manages up to the virtualization layer, you manage and pay for everything else.
- PaaS (Platform as a Service): The vendor manages up to the containers layer, you manage and pay for everything else.
- SaaS (Software as a Service): The vendor manages everything, you just use the application and pay for it.
