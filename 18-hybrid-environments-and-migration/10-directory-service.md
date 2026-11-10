# Directory Service

## Directory Fundamentals (No Anki Cards needed)

- Directories store identities and their related asset information
- Information is stored in a hierarchical, tree-like structure called a domain
- Multiple domains can be grouped together to form a forest
- Provide centralized authentication and management of identities and resources
- Multiple devices can sign in with the same identity
- IT staff can manage access to resources from a single location
- There are 2 popular directory services:
  - Microsoft Active Directory (AD): Microsoft's implementation of a directory service
  - Samba 4 (Samba): open-source implementation, partly compatible with Microsoft AD

## AWS Directory Service

- AWS's implementation of a directory service
- Fully managed by AWS, reducing the administrative overhead of managing a directory service
- Runs within a VPC
- Integrates with some AWS services, such as Amazon WorkSpaces

## Types of AWS Directory Service

- There are 3 types of AWS Directory Service:
  - AWS Managed Microsoft AD
  - Simple AD (deprecated)
  - AD Connector

## High Availability

- To implement High Availability, you must deploy the directory service across at least 2 different AZs

## Simple AD

- Standalone directory powered by Samba 4
- Partly compatible with Microsoft AD
- Not designed to integrate with an existing on-premises directory service
- Deprecated

## AWS Managed Microsoft AD

- Managed Microsoft Active Directory hosted on the AWS Cloud

### Trust with on-premises AD

- A trust relationship can be established between on-premises Microsoft AD and AWS Managed Microsoft AD
- The trust is established via VPN or Direct Connect
- Users can sign in to AWS applications using their existing on-premises credentials

### VPN failure behavior

- AWS services using the AD can still authenticate AWS AD users
- On-premises AD users cannot be authenticated

## AD Connector

- Proxy service that connects to your existing on-premises Active Directory
- Users sign in to AWS applications using their existing on-premises directory
- No new directory needs to be created in the cloud
- A VPN or Direct Connect is required to connect to the on-premises AD
- Does not function if the VPN fails

## Picking the Modes

- Simple AD should be the default choice (Legacy)
- Use Managed Microsoft AD for a full Microsoft Active Directory in the cloud
- Use Managed Microsoft AD to establish a trust relationship with your on-premises Microsoft AD
- Use AD Connector to use AWS services without storing any directory info in the cloud
