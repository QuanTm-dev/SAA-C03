# DataSync

## Overview

- Data transfer service that moves data from and to AWS
- Designed to work at huge scales
- Pay as you use product

## Scale limits

- Each agent can handle up to 10 Gbps
- Each job in Basic mode can handle up to 50 million files

## Data handling

- Support transfering metadata (e.g. permissions, timestamps)
- Includes built-in validation
- Supports compression
- Supports encryption

## Transfer control

- Supports incremental transfers — only changes are transferred after the initial transfer
- Supports scheduled transfers
- Bandwidth limiters avoid saturating the network
- Automatically recovers from transit errors

## Integrations

- Integrates with S3, EFS, and FSx for Windows servers
- Talks with on-premises storage via NFS or SMB protocol

## Components

### Agent

- Software component that runs on-premises as a virtual machine (VM)
- Reads and writes data to and from on-premises storage
- Communicates with AWS via DataSync endpoint

### Task

- Configuration unit that defines the source and destination locations
- Also defines other transfer options

### Locations

- Source and destination locations for the data transfer
