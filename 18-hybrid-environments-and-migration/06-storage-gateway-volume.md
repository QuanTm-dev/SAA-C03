# Storage Gateway - Volume

## Storage Gateway core concepts

- Storage Gateway is a product that integrates local infrastructure and AWS storage such as S3, EBS
- Can be deployed as a virtual machine (VM) on-premises (preferred) or as a hardware appliance.
- Presents storage using industry-standard storage protocols such as iSCSI, NFS, and SMB.
- Use for:
  - Migration of infrastructure to AWS.
  - Extending on-premises storage to the cloud.
  - Backup and disaster recovery.

## Storage Gateway - Volume Stored

- Presents a **volume** to on-premises applications over iSCSI.
- Data is stored locally in the on-premises **Local storage**.
- Data is also stored temporarily in the on-premises **Upload buffer**, then asynchronously uploaded to AWS S3 using **Storage Gateway Endpoint**.
- Data is stored in S3 as **EBS snapshots**.

### Use cases

- Great for **backup and disaster recovery**.
- Note: This mode doesn't improve on-premises datacenter capacity, as the data is stored locally in the on-premises storage.

## Storage Gateway - Volume Cached

- Presents a **volume** to on-premises applications over iSCSI.
- Data is stored primarily in AWS S3, and only a **cache** of the most frequently accessed data is stored locally in the on-premises **Cache storage**.
- Data is also stored temporarily in the on-premises **Upload buffer**, then asynchronously uploaded to AWS S3 using **Storage Gateway Endpoint**.
- Data is stored in S3 as **EBS snapshots**.

### Use cases

- Great for extending on-premises datacenter capacity, as the data is stored primarily in AWS S3.
