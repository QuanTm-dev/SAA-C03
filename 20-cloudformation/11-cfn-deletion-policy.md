# CloudFormation Deletion Policy

- Deletion Policy allows you to specify how AWS CloudFormation should handle a physical resource when its logical resource is deleted.
- There are three types of deletion policies:
  - **Delete**: The default behavior. AWS CloudFormation deletes the physical resource.
  - **Retain**: AWS CloudFormation keeps the physical resource and does not delete it.
  - **Snapshot**: AWS CloudFormation creates a snapshot of the resource before deleting it. This is applicable to resources that support snapshots, such as Amazon RDS databases.
- **DeletionPolicy** applies only when a resource is **Deleted** from the stack.
- **Replacement** ignores DeletionPolicy.
