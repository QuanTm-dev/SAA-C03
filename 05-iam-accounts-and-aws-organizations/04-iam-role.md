# IAM Roles

> Set of permissions that can be assumed by any entity to gain temporary, limited access to AWS resources.

## Core Concepts

- **Not a person**: Multiple entities can assume the same role
- **Temporary credentials**: AWS generates short-lived credentials; renewal required to maintain access
- **Two policy types**:
  - _Identity policies_: Define allowed actions
  - _Trust policies_: Define who can assume the role
- **Permission isolation**: Role assumes clean session (no original identity permissions carry over)

## Common Use Cases

### AWS Services

- EC2, Lambda, ECS, etc. need AWS access without hardcoded keys
- Risk: Keys stored on instance = compromise exposure
- **Solution**: Attach role; AWS rotates temporary credentials automatically

### Cross-Account Access

- Team in Account A needs Account B resources without creating separate IAM users
- **Solution**: Trust relationship allows account switching; maintains audit trails

### Identity Federation

- Employees use corporate LDAP, Google, GitHub authentication
- Risk: Creating IAM user per employee hits 5000 user limit
- **Solution**: Role bridges external identity provider; eliminates user limit

### Temporary/Emergency Access

- Contractor debugs production issue for 24 hours only
- **Solution**: Credentials auto-expire; safer than manual revocation

## Service-Linked Roles

- Predefined roles created by AWS services with necessary permissions already configured
- Service manages lifecycle (creation/deletion); you cannot modify trust policies while in use
- Reduces setup burden; ensures service has required permissions

## Principle of Least Privilege: PassRole

- **Separate concerns**: Distinguish _who can create/edit roles_ from _who can use roles_
- **PassRole permission**: Allow developer to pass existing role to CloudFormation without letting them create/modify roles
- **Prevents escalation**: Developer cannot grant themselves elevated permissions by modifying roles
- **Example**: CI/CD pipeline can deploy with role X but cannot change role X
