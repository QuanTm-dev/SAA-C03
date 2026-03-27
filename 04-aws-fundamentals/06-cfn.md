# CloudFormation (CFN)

> Service for creating, updating, and deleting AWS resources using templates (JSON or YAML). Enables Infrastructure as Code (IaC).

## Template Sections

| Section                      | Required | Purpose                                                                     |
| ---------------------------- | -------- | --------------------------------------------------------------------------- |
| **Resources**                | Yes      | AWS resources to create/update/delete                                       |
| **Parameters**               | No       | Input variables with type and defaults                                      |
| **Mappings**                 | No       | Fixed key-value lookup tables (e.g., region → AMI ID)                       |
| **Conditions**               | No       | Logic to control resource creation                                          |
| **Outputs**                  | No       | Values returned after stack deployment                                      |
| **Metadata**                 | No       | Template metadata (e.g., UI hints)                                          |
| **Description**              | No       | Template description (must follow AWSTemplateFormatVersion if both present) |
| **AWSTemplateFormatVersion** | No       | Template version                                                            |

## How It Works

- **Logical Resources**: Resources defined in the template.
- **Physical Resources**: Actual AWS resources created by CloudFormation.
- **Stack**: Collection of logical and physical resources.
- **Change Detection**: CFN compares template against current stack; creates/updates/deletes resources as needed.

## Benefits

- Reuse templates to provision identical stacks.
- Delete stacks to remove all associated resources in one action.
