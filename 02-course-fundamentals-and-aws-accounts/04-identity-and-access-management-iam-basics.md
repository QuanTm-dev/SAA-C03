# Problems

- Account Root User has unrestricted access to all resources in the AWS account.
- In real world scenarios, we only want to grant required permissions to users to perform a job (Least Privilege).
- Having only one user is also problematic. If the credentials get leaked, all resources are at risk.

# IAM characteristics

- Every AWS account comes with a copy instance of IAM with a dedicated database.
- IAM is a global service. Users created in one region can access resources in other regions.

## IAM objects

- **User**: Represent a person or service that needs access to AWS resources.
- **Group**: A collection of related users
- **Role**: An identity which can be used by AWS services or external users to access AWS resources.
- **Policy**: A document that allows or denies access to AWS resources when they are attached to users, groups, or roles. Policy by itself does nothing.

## IAM jobs

- Manage identities (users, groups, roles)
- Authentication
- Authorization

## Additional characteristics:

- No cost
- No direct control to external accounts
- Can make use of identity federation (use existing external identity like facebook/google/etc... to access AWS resources) and MFA.
