# AWS Shared Responsibility Model

> Security responsibilities are divided between AWS and the customer. AWS secures the infrastructure; customers secure their data and applications.

## AWS Responsibilities: Security of the Cloud

- Physical infrastructure (data centers, servers, networking hardware).
- Network and hypervisor layer.
- AWS managed services (database engines, storage, etc.).

## Customer Responsibilities: Security in the Cloud

- Data and encryption.
- Applications and code.
- Operating systems and patches.
- Access management and authentication.
- Network configuration and firewalls.

## Key Principle

AWS manages the foundation; customers manage what they deploy on it. The line varies by service type:

- **IaaS** (EC2): Customer manages more (OS, patches, applications).
- **PaaS** (RDS): Customer manages less (only data and access).
- **SaaS** (S3): AWS manages most (customer focuses on access control).
