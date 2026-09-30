# CloudFormation Stack Roles

- Background: By default, CloudFormation uses the permissions of the user who is creating or updating the stack to perform actions on resources. The user must have the necessary permissions to create, update, or delete the stack and the physical resources it manages. However, in some cases, you may want to allow users to create or update stacks without granting them full permissions to manage the actual physical resources.
- Solution: CloudFormation stack roles allow you to specify an IAM role that CloudFormation assumes when executing stack operations. This way, you can grant users the ability to create or update stacks while restricting their permissions on the underlying resources.
- To pass a stack role to CFN, The caller needs to have the PassRole permission and necessary permissions to create or update the stack .
