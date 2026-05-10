# Instance Status Checks & Auto Recovery

## Status Checks

EC2 instances have three types of status checks:

- **System status checks**: Detects infrastructure issues requiring AWS intervention. Examples: loss of network connectivity, loss of system power, hardware or software issues on the physical host.
- **Instance status checks**: Detects OS and application issues requiring user intervention. Examples: corrupted file system, incorrect networking configuration, incompatible kernel, exhausted memory.
- **Attached EBS status checks**: Monitors if attached EBS volumes can reach the instance and complete I/O operations. Examples: storage subsystem failures, connectivity problems between instance and volumes.

## Auto Recovery

Auto Recovery automatically restarts a failed instance on a new host when a system status check fails, preserving its configuration (IP addresses, EBS volumes, etc.).

**Limitations:**

- Does not protect against Availability Zone failures.
- Requires spare capacity in the same AZ.
- Supported only on specific instance type families.
- Instance store volumes are not preserved during recovery.
