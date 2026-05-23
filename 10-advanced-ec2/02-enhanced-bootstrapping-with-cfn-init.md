# Enhanced Bootstrapping with CFN-INIT

## AWS::CloudFormation::Init

- cfn-init is a helper script that is installed on EC2 OS.
- cfn-init can also be considered a simple configuration management system.
- Script types:
  - Procedure(user-data): Run line by line.
  - Desired State(cfn-init): You define the desired state of the system, and cfn-init will figure out how to get there.
- cfn-init can both procedure and desired state, but it is more commonly used for desired state.
- cfn-init can manage packages, OS permissions, files, and services.
- cfn-init is executed via User data.
- Instructions for cfn-init are defined in the CloudFormation template under the AWS::CloudFormation::Init/Metadata section.
- cfn-init can be configured to watch for stack updates. For example, if you add a new package to the cfn-init instructions and then update the stack, cfn-init will install that new package on the instance without having to stop and start the instance.

### How it works

1. You pass in the stackid and region to cfn-init.
2. cfn-init will then query the CloudFormation API to get the instructions for that stack and region.
3. cfn-init will then execute those instructions to configure the instance.

## CreatetionPolicy and Signals

- Problem: CloudFormation does not know when an instance is ready to use. It only knows when the instance is created. For example, your EC2 instance might be in complete state although the user-data script has not finished or failed to execute.
- Solution: Use CreationPolicy and Signals to tell CloudFormation when the instance is ready to use.
- How cfn-signal works:
  1. You define a CreationPolicy in your CloudFormation template that specifies how many signals to wait for and how long to wait.
  2. In your cfn-init instructions, you use the cfn-signal helper script to send a signal back to CloudFormation when the instance is ready.
  3. CloudFormation will wait until it receives the specified number of signals or until the timeout is reached before it considers the instance creation complete.
