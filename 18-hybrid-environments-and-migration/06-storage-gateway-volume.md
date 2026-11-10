# Storage Gateway - Volume

## Storage Gateway core concepts

- Integrates local infrastructure with AWS storage such as S3 and EBS
- Can be deployed as an on-premises virtual machine (VM) (preferred) or as a hardware appliance
- Presents storage using industry-standard protocols: iSCSI, NFS, and SMB

## Storage Gateway use cases

- Migration of infrastructure to AWS
- Extending on-premises storage to the cloud
- Backup and disaster recovery

## Storage Gateway - Volume Stored

- Presents a **volume** to on-premises applications over iSCSI
- Stores data locally in the on-premises **Local storage**
- Also stores data temporarily in the on-premises **Upload buffer**, then asynchronously uploads data from the Upload buffer to S3 using the **Storage Gateway Endpoint**
- Stores data in S3 as **EBS snapshots**

### Use cases

- Great for **backup and disaster recovery**
- Note: This mode doesn't improve on-premises datacenter capacity, as the data is stored locally in the on-premises storage.

## Storage Gateway - Volume Cached

- Presents a **volume** to on-premises applications over iSCSI
- Stores data primarily in AWS S3
- Keeps only a **cache** of the most frequently accessed data locally in the on-premises **Cache storage**
- Also stores data temporarily in the on-premises **Upload buffer**, then asynchronously uploads data from the Upload buffer to S3 using the **Storage Gateway Endpoint**
- Stores data in S3 as **EBS snapshots**

### Use cases

- Great for extending on-premises datacenter capacity, as data is stored primarily in AWS S3
