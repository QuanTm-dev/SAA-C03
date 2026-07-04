# RDS Data Security

## Encryption in Transit

- SSL/TLS is used by RDS to encrypt data in transit between the database and the application.
- Can be set to mandatory on a per user basis.

## Encryption at Rest

### Using EBS and KMS

- RDS supports EBS volume encryption using KMS.
- Encryption is handled by the RDS Host.
- You select a KMS key to use, can be AWS-managed or customer-managed to generate a DEK for the volume.
- DEK is then used for encryption operations.
- Storage, Logs, Snapshots, and replicas are all encrypted using the same DEK.
- Encryption can't be removed.

### Using RDS Native Encryption

- MSSQL and Oracle support native encryption at rest using TDE (Transparent Data Encryption).
- Encryption is handled within the database engine.
- Oracle supports TDE with CloudHSM. This is more secure as CloudHSM is fully managed by the customer, no key exposure to AWS.

## Authentication

- Beside the standard username/password authentication, RDS supports IAM database authentication.
- How IAM database authentication works:
  1. RDS Local DB Account configured to use AWS Authentication Token.
  2. Policy attached to IAM user/role map that IAM user/role to the RDS Local DB Account.
  3. IAM user/role requests an authentication token (expired in 15 minutes) using `generate-db-auth-token` operation.
  4. Application connects to the RDS using the authentication token instead of a password.
- Authorization is still handled by the DB engine. Permissions are assigned to the RDS Local DB Account. IAM does not involve in authorization, only authentication.
