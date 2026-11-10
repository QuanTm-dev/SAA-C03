# Direct Connect (DX)

## Overview

- Physical connection between your on-premises network and an AWS Region
- Connection speed can be 1, 10, 100, or 400 Gbps
- Connection flow: On-premises network → DX Location → AWS Region
- Ordering DX means ordering a Port Allocation at the DX Location

## Characteristics

- Provides low and consistent latency with high speed
- Takes weeks to months to provision
- Has no built-in resiliency. Use multiple DX connections for high availability
- Cannot access the public internet
- Can only access AWS services, both public and private

## Cost

- Charged hourly
- Based on outbound data transfer

## Architecture

### Cages in a DX Location

- Two cage types exist within a DX Location: AWS cage and Customer/Partner cage
- AWS cage contains the AWS infrastructure and routers (AKA DX Endpoints)
- Your Port Allocation is provisioned in the AWS cage
- Customer/Partner cage contains the customer's or partner's infrastructure and routers
- You can either pay for a dedicated Customer cage or purchase a port capacity in a shared Partner cage.

### Connectivity

- Your on-premises network connects to the AWS cage via a cross-connect
- A cross-connect is a physical cable connecting the AWS cage and the Customer/Partner cage

## Virtual Interfaces (VIFs)

- Your on-premises network communicates with AWS services via VIFs
- VIFs are created on the DX Endpoints
- There are 2 **main** types of VIFs: Private VIF and Public VIF:
  - Private VIF: connects to a VPC via a VGW (Virtual Gateway).
  - Public VIF: connects to AWS public services via an AWS public endpoint.
