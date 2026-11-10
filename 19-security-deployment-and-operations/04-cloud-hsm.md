# CloudHSM

## Overview

- Provides a dedicated HSM for your account
- Used to generate and store cryptographic keys
- Is a FIPS 140-3 Level 3 HSM

## CloudHSM vs KMS

- With KMS, you share the underlying hardware with other accounts
- With CloudHSM, the HSM is dedicated to your account

## Responsibilities

- AWS is responsible for hardware maintenance
- You are responsible for managing the HSM cluster and the keys stored in it

## Access

- Accessed using industry-standard APIs such as PKCS#11, Java JCE, etc.
- The CloudHSM client must be installed on the client to interact with CloudHSM

## AWS Integration

- No native AWS integration with AWS products
- KMS can use CloudHSM as a custom key store. You keeps full control over dedicated, single-tenant HSMs while still leverages all native KMS integrations with AWS services

## Architecture

### Networking

- CloudHSM operates in an **AWS-Managed VPC**
- HSMs are injected into your VPC via ENI. Each HSM has its own ENI

### High Availability

- CloudHSM is not highly available and runs within one AZ
- To make it highly available, create a Cluster with at least 2 HSMs in different AZs
- CloudHSM keeps keys and policies in sync between HSMs in a Cluster
- The client needs to load balance between the HSMs' ENIs

## Use Cases

- Offload SSL/TLS processing for web servers
- CloudHSM is much more efficient at these encryption processes
- Oracle Databases can use CloudHSM to enable transparent data encryption (TDE)
- Protect the private keys of an issuing certificate authority
