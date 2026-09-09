# Directory Service

## Directory Fundementals (No Anki Cards needed)

- Directories store identities and their related assets information.
- They store information in a hierarchical, tree-like structure called a domain.
- Multiple domains can be grouped together to form a forest.
- Directories provide centralized authentication and management of identities and resources. Multiple devices can sign in with the same identity, and IT staff can manage access to resources from a single location.
- There are 2 popular directory services:
  - Microsoft Active Directory (AD): Microsoft's implementation of a directory service.
  - Samba 4 (Samba): An open-source implementation of a directory service that is partly compatible with Microsoft Active Directory.

## AWS Directory Service

- AWS Directory Service is AWS implementation of a directory service.
- The service is fully managed by AWS, which reduces the administrative overhead of managing a directory service.
- Runs within a VPC.
- To implement High Availability, you can deploy the directory service across multiple Availability Zones (AZs).
- Some AWS Services can integrate with AWS Directory Service, such as Amazon WorkSpaces.
- There are 3 types of AWS Directory Service:
  - AWS Managed Microsoft AD.
  - Simple AD.
  - AD Connector.

## Simple AD

- A standalone directory that is powered by Samba 4 and is partly compatible with Microsoft Active Directory
- It's not designed to integrate with an existing on-premises directory service.

## AWS Managed Microsoft AD

- A managed Microsoft Active Directory hosted on the AWS Cloud
- A trust relationship can be established between your on-premises Microsoft Active Directory and AWS Managed Microsoft AD via VPN or Direct Connect, allowing users to sign in to AWS applications using their existing on-premises credentials.
- When the VPN fails, AWS Services which use the AD will still be able to authenticate users as long as the users are AWS AD users, not on-premises AD users.

## AD Connector

- A proxy service that connects your existing on-premises Active Directory.
- This type allows users to sign in to AWS applications using their existing on-premises directory without creating a new directory in the cloud.
- A VPN or Direct Connect is required to connect to the on-premises Active Directory.
- If the VPN fails, the AD Connector won't function.

## Picking the Modes

- Simple AD should be default.

- Microsoft AD - Use this if you need a full Microsoft Active Directory in the cloud, or if you need to establish a trust relationship with your on-premises Microsoft Active Directory.

- AD Connector - Use AWS services without storing any directory info in the cloud, it proxies to your on-prem directory.
