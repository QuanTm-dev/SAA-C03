# Storage Refresher: Cheat Sheet

## 1. Connectivity & Lifecycle

- **Direct-Attached (DAS):** Physical disk on the host (e.g., EC2 Instance Store). **Fastest**, but **Ephemeral** (data dies with the instance/hardware failure or when the instance is moved to a different host).
- **Network-Attached (NAS):** Connected via network (e.g., EBS). Slower than DAS, but **Persistent**.

## 2. Storage Architecture

| Feature        | Block Storage          | File Storage                     | Object Storage                           |
| :------------- | :--------------------- | :------------------------------- | :--------------------------------------- |
| **Structure**  | Unstructured blocks    | Hierarchical (Folders)           | Flat                                     |
| **Access**     | Low-level (OS-managed) | Shared via network               | API/HTTP (Network)                       |
| **Bootable?**  | **Yes**                | No                               | No                                       |
| **Mountable?** | **Yes**                | **Yes**                          | No                                       |
| **Use Case**   | OS Disks               | Shared file systems over network | Store large amounts of unstructured data |

## 3. Performance Metrics

- **IO Size:** The size of a single data block (read/write).
- **IOPS:** Total Input/Output operations per second (how many blocks handled).
- **Throughput:** Total data volume per second (how much total data moved).

### The Golden Formula

> **Throughput = IO Size × IOPS**

- Note: To maximize throughput, you need to balance the size of the chunks with the speed at which you can move them.
