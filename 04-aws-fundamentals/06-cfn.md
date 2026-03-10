# CloudFormation Basics

CloudFormation (CFN) is a service that lets you create, update, and delete AWS resources using templates. Templates can be written in JSON or YAML format.

# CFN Template Sections

CloudFormation templates have 8 main sections:

- **Resources** (required): Defines the AWS resources to create, update, or delete.
- **Description**: Describes the template. Must come immediately after `AWSTemplateFormatVersion` if both are present.
- **AWSTemplateFormatVersion**: Specifies the template version
- **Parameters**: Defines input parameters with type, default value, and allowed values.
- **Mappings**: Defines fixed key-value pairs (e.g., region to AMI ID mappings) for lookup.
- **Conditions**: Defines logic to control whether certain resources are created or properties are set.
- **Metadata**: Stores arbitrary data about the template (e.g., UI presentation hints).
- **Outputs**: Returns output values after the stack is created or updated.

# How CloudFormation Works

- **Logical Resources**: Resources defined in the CFN template are called logical resources.
- **Stack Creation**: When you deploy a template, CloudFormation creates a stack (a collection of AWS resources), from the stack physical resources (actual AWS instances) are created.
- **Change Detection**: CloudFormation compares the template against the current stack and creates, updates, or deletes physical resources accordingly.

# Benefits of CloudFormation

- Template can be reused to create multiple stacks with the same configuration.
- Delete stacks to remove all associated resources in one action.
