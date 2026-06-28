# Relational Database Service (RDS) Architecture

- RDS is not a Database-as-Service (DBaaS) but more of DatabaseServer-as-a-service. That means you can have multiple databases running on one DB server instance.
- There are multiple database engines supported by RDS, including MySQL, PostgreSQL, MariaDB, Oracle, and Microsoft SQL Server.
- Amazon Aurora is a separated product. It's a custom database engine built by AWS that is compatible with MySQL and PostgreSQL.
- RDS is a managed DB server.
- In general, you don't have access to the underlying OS or SSH access. However, you RDS Custom allows you to have some low-level access.

## Architecture

- Subnet Groups: What subnets can be used for RDS instances. A subnet group can span accross multiple AZs.
- There are 2 instances: Primary and Standby. The primary instance is the one that handles all the read/write traffic, while the standby instance is a replica that can take over in case of failure. Unless configured otherwise, the standby instance is in a different AZ than the primary instance.
- RDS can be accessed from a VPC or any connected private networks (via VPN or Direct Connect).
- RDS can also be accessed from the public internet if the instance is configured to be publicly accessible. It's not recommended to do this.
- A RDS instance can have multiple databases running on it.
- Each RBS instance has its own dedicated EBS storage.
- Primary instance replicates data to the Standby instance synchronously. This means the Standby instance is always up-to-date with the Primary instance.
- You can also use Read Replicas to scale read load. Read Replicas use asynchronous replication. The replicated instance can be in the same region or in a different region.
- Backups are taken automatically by RDS. The backup data is stored in a AWS-managed S3 bucket so it's not accessible to you. If you use multi-AZ deployments, backups are taken from the Standby instance to avoid performance impact on the Primary instance.

## Costs

- Costs are calculated from the following components:
  - Instance type and size
  - Storage type and size
  - Backup storage
  - Data transfer (in/out of RDS)
  - Additional features (like Multi-AZ deployments, Read Replicas, licensing for commercial database engines, etc.)
