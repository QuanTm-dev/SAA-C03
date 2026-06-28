# Amazon RDS Architecture

## Overview

- RDS is a **managed database server service** (not full DBaaS).
- Multiple databases can run on a single RDS instance.
- Supported engines: **MySQL, PostgreSQL, MariaDB, Oracle, SQL Server**.
- **Amazon Aurora** is a separate AWS-built engine, compatible with MySQL & PostgreSQL.
- No OS or SSH access to RDS instances.
- **RDS Custom** allows limited low-level access.

## Architecture Components

- **Subnet Groups**
  - Define which subnets RDS can use.
  - Can span multiple Availability Zones (AZs).

- **Instances**
  - **Primary instance**: handles read/write traffic.
  - **Standby instance**: synchronous replica for failover.
  - Standby usually resides in a different AZ.

- **Storage**
  - Each RDS instance uses dedicated **EBS storage**.

- **Replication**
  - Primary → Standby: synchronous replication (always up-to-date).
  - **Read Replicas**: asynchronous replication for scaling reads.
    - Can be in same or different regions.

- **Access**
  - Accessible from VPC or connected private networks (VPN, Direct Connect).
  - Public internet access possible if enabled (not recommended).

- **Backups**
  - Automated backups stored in AWS-managed S3 (not user-accessible).
  - In Multi-AZ setups, backups taken from Standby to reduce load on Primary.

## Costs

- Pricing factors:
  - Instance type & size
  - Storage type & size
  - Backup storage
  - Data transfer (in/out)
  - Extra features:
    - Multi-AZ deployments
    - Read Replicas
    - Licensing for commercial engines
