# CloudFormation Wait Conditions & cfn-signal

- Refer to [Enhanced Bootstrapping with CFN-INIT](../10-advanced-ec2/02-enhanced-bootstrapping-with-cfn-init.md) for more details on cfn-signal and CreationPolicy.

## Wait Conditions

- Wait conditions operates similarly to CreationPolicy - it pauses the stack creation until a specified number of success signals are received or a timeout occurs.
- Wait conditions is a logical resource, meaning it can depend on other resources and other resources can depend on wait conditions.
- Wait conditions requires a WaitConditionHandle resource to be created first, which is used to generate a presigned URL for the cfn-signal command to send signals to.

## Wait Conditions vs CreationPolicy

- Use CreationPolicy for most situations unless you need to pass back data to the stack.
- Use Wait Conditions when you want to pass back data to the stack, such as a URL or an IP address. That data can be used in other resources in the stack with the `Fn::GetAtt` function.
