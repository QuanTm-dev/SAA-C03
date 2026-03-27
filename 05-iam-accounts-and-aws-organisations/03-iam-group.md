# IAM Groups

> Container for organizing users and applying policies to multiple users at once. Groups have no credentials and cannot be assumed.

## Characteristics

- Users can belong to multiple groups simultaneously (max 10 groups per user)
- Unlimited users per group
- Default quota: 300 groups per account (expandable to 500 via Service Quotas)

## Benefits

- Centralize permissions: Assign policies once, apply to all members
- Represent organizational structure: Teams, departments, functional roles
- Simplify scaling: Add/remove users without modifying policies

## Limitations

- **No nesting**: Cannot create groups within groups
- **Not true identities**: Cannot be assumed as a principal or referenced in resource-based policies
- **Identity policies only**: Can attach identity-based policies, not resource-based policies
