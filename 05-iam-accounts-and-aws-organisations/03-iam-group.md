# IAM Groups

## Definition

- IAM Group is a container for organizing IAM users and applying policies to multiple users at once. Groups don't have their own credentials—you cannot log in as a group.

## Key Characteristics

- A user can be a member of multiple groups simultaneously.
- No limit on the number of users in a group, but each user can belong to a maximum of 10 groups.
- An AWS account can have up to 300 groups.

## Benefits

- **Simplified Management**: Groups can represent a team, department, or role, making it easier to manage permissions at scale.
- **Permission Inheritance**: All users in a group automatically inherit the permissions assigned to that group.

## Limitations

- Groups don't support nesting (you can't create groups within groups).
- Groups are not true identities and cannot be referenced as principals in policies. Only identity-based policies can be attached to groups, not resource-based policies.
