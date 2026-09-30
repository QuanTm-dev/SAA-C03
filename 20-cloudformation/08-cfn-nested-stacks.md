# CloudFormation Nested Stacks

## Background

- Problems with single stacks: Single stacks have a limit of 500 resources. To overcome this, you can break your template into multiple stacks.
- There are 2 ways to create a multi-stack architecture in CloudFormation: Nested Stacks and Cross-Stack References.

## Core concepts

- Nested stacks allow you to create a stack as part of another stack. This allows you to break up your template into smaller, reusable components.
- A parent stack can contain and create nested stacks, each of which can be passed parameters and provide back outputs to the parent stack.
- Nested stacks are normal logical resources in the parent stack. We can use `Dependson` to control the order of creation of nested stacks and other resources in the parent stack.
- Nested only reuses templates, while cross-stack references only reuses actual resources.
- Nested stacks should be used when the resources being provisioned **share a lifecycle**. Meaning create together, update together, and delete together.
