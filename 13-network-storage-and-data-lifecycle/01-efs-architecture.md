# EFS Architectures

## Basics

- EFS is a network-based file system, an implementation of **NFSv4.1**.
- Uses **POSIX permissions**.
- Supports **Linux and macOS**.
- File systems can be mounted on **multiple EC2 instances** simultaneously.

## Networking

- EFS is a **private service**, only accessible from within a VPC via mount targets.
- EFS can be accessed from on-premises servers via **Direct Connect or VPN**.
- Each mount target gets an IP from its subnet and is tied to a **single AZ**.
- Create multiple mount targets in **multiple AZs** for high availability.
- EC2 instances mount the EFS through mount targets.

## Performance Modes

| Mode                          | Use case                                                  |
| ----------------------------- | --------------------------------------------------------- |
| **General Purpose** (default) | Latency-sensitive like web serving, CMS, home directories |
| **Max I/O**                   | High aggregate throughput/ops: big data, analytics        |

## Throughput Modes

- **Bursting**: like EBS GP2 bursting — scales with storage size.
- **Provisioned**: like EBS GP3 provisioned — set a fixed throughput level.
- **Elastic** (default/recommended): auto-scales throughput to match workload demand, no need to provision or monitor burst credits.

## Storage Classes

| Class                      | Use case                                                                    |
| -------------------------- | --------------------------------------------------------------------------- |
| **Standard** (default)     | Frequently accessed files                                                   |
| **Infrequent Access (IA)** | Rarely accessed files; lower storage cost, retrieval fee applies            |
| **Archive**                | Accessed a few times a year or less; cheaper than IA, retrieval fee applies |

- **Lifecycle Policies** automatically move files between storage classes: Standard → IA → Archive based on access patterns.
