# DataSync

- DataSync is a data transfer service which moves data FROM and TO AWS.
- Designed to work at huge scales. Each **agent** can handle 10 GB and each **job** can handle 50 million files.
- It also handles the transfer of metadata (e.g permissions, timestamps).
- Include built-in validation.
- Can use bandwidth limiters to avoid saturating the network.
- Support incremental transfers, which means that only the changes are transferred after the initial transfer.
- Support scheduled transfers.
- Support compression and encryption.
- Support automatic recovery from transit error.
- AWS service integration with S3, EFS, FSx for Windows servers.
- Pay as you use product.
- DataSync agent runs on-premises as a virtual machine (VM) and communicates with AWS via DataSync endpoint.
- Talk with on-premises storage via NFS or SMB protocol.

## Components

- Task: A task is a configuration unit that defines the source and destination locations and other transfer options.
- Agent: A software component that runs on-premises, used to read and write data to and from the on-premises storage.
- Locations: source and destination locations for the data transfer.
