# What is IAM Role?

See also: [IAM Objects Overview](../02-course-fundamentals-and-aws-accounts/04-identity-and-access-management-iam-basics.md#iam-objects)

## Key Characteristics

- **Definition**: IAM Roles represent a set of permissions, not a person or application. Multiple principals can assume the same role to access AWS resources.
- **Temporary Access**: When an entity assumes a role, AWS generates temporary security credentials with a limited lifespan—renewal is required to maintain access.
- **Two Policy Types**:
  - **Identity Policies**: Define what actions are allowed. See [IAM Identity Policies](../05-iam-accounts-and-aws-organisations/01-iam-identity-policies.md#what-is-an-iam-identity-policy)
  - **Trust Policies**: Define who can assume the role and under what conditions.
- **Permission Isolation**: An entity assuming a role only gets the role's permissions, not their original identity's permissions.

## When to Use IAM Roles

1. **AWS Services Access**
   - **Example**: An EC2 instance needs to read objects from S3 and write logs to CloudWatch.
   - **Why Roles**: Roles eliminate the need to store access keys on the instance. AWS automatically provides temporary credentials that rotate, reducing security risks from compromised long-term credentials.

2. **Cross-Account Access**
   - **Example**: Users in Account A need to access resources in Account B without sharing passwords or creating IAM users in Account B.
   - **Why Roles**: Trust relationships between accounts allow users to assume a role in another account, maintaining audit trails and precise permission control without exposing long-term credentials.

3. **Federated/External Identity Provider Access**
   - **Example**: Company employees using corporate LDAP or social identity (Google, GitHub) need to access AWS resources.
   - **Why Roles**: Roles integrate with external identity providers, eliminating the need to create and manage individual IAM users for each person. Eliminates the 5000 IAM user limit.

4. **Temporary and Emergency Access**
   - **Example**: A contractor needs temporary access to debug production issues for 24 hours.
   - **Why Roles**: Temporary credentials automatically expire, preventing accidental long-term access. This is safer than managing password resets or credential revocation.

## Service-Linked Roles

- **Definition**: Service-linked roles are IAM roles predefined by an AWS service with all permissions needed for that service to operate on your behalf. They are directly linked to and managed by that specific service.
- **Management**: The service creates and deletes the role automatically, or you can create it during service setup. You cannot modify trust policies or delete a service-linked role while it's actively being used by the service.

### Role Separation

- **Principle**: Separate the ability to create/edit a role from the ability to use it. Use `PassRole` permission to allow users to pass roles to AWS services without granting permission to modify the role.
- **Example**: A developer can deploy CloudFormation stacks that use predefined IAM roles (PassRole permission) but cannot create or modify the roles themselves, preventing privilege escalation through role modification.
- **Why It Matters**: This enforces least privilege by restricting users from granting themselves additional permissions.
