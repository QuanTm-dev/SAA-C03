# CloudHSM

- With KMS, you share the underlying hardware with other accounts.
- CloudHSM provides dedicated HSM for your account, which can be used to generate and store cryptographic keys.
- AWS is responsible for hardware maintenance, but you are responsible for managing the HSM cluster and the keys stored in it.
- CloudHSM is FIPS 140-3 Level 3 HSM.
- How to access CloudHSM: Use the industry standard API such as PKCS#11, Java JCE, etc...
- KMS can use CloudHSM as a custom key store. By using CloudHSM as a custom key store for KMS, you keep full control over dedicated, single‑tenant HSMs while still leveraging all native KMS integrations with AWS services.

## Architecture

- CloudHSM is not highly available and runs within one AZ.
- To make CloudHSM highly available, you need to create a Cluster and have at least 2 HSM in different AZs.
- CloudHSM keeps keys and policies in sync between HSM in a Cluster.
- CloudHSM operates in an **AWS-Managed VPC** and are injected to your VPC via ENI.
- To achieve high avaibility, use load balancer to load balance between HSM's ENI.
- CloudHSM client needs be installed on the client to interact with CloudHSM.
- HSM needs an endpoint in the subnet of the VPC to allow other resources access to the cluster.

## Use cases

- No native AWS integration with AWS products.
- Can be used to offload the SSL/TLS processing for the webservers. CloudHSM is much more efficent to do these encryption processes.
- Oracle Databases can use CloudHSM to enable transparent data encryption (TDE)
- This can be used to protect the private keys for an issuing certificate authority.
