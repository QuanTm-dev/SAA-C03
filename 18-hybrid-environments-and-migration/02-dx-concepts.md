# Direct Connect (DX) Concepts

- DX is a physical connection between your on-premises network and an AWS Region.
- The connection can be 1 Gbps, 10 Gbps, or 100 Gbps.
- Connection Flow: On-premises network → DX Location → AWS Region.
- When you order DX, you're really ordering a Port Allocation at the DX Location.
- Cost is charged hourly and based on the Outbound data transfer.
- DX takes time to provision, can take weeks to months.
- There is no built-in resiliency, so you should consider using multiple DX connections for high availability.
- DX provides low and concistent latency with high speed.
- DX cannot access public internet, only AWS services (both public and private).

## Architecture

- There are 2 types of cages within a DX location:
  - AWS cage: contains the AWS infra and routers (AKA DX Endpoints). This is where your Port Allocation is provisioned.
  - Customer or Partner cage: contains the customer's or partner's infra and routers. Your on-premises network connects to this cage.
- You can either pay for a dedicated Customer cage or purchase a port capacity in a shared Partner cage.
- Your on-premises network connects to the AWS cage via a cross-connect, which is a physical cable that connects AWS cage and the Customer/Partner cage.
- Your on-premises network communicates with AWS Services via Virtual Interfaces (VIFs) that are created on the DX Endpoints. There are 2 **main** types of VIFs:
  - Private VIF: connects to a VPC via a VGW (Virtual Gateway).
  - Public VIF: connects to AWS public services via an AWS public endpoint.
