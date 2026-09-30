# CloudFormation Cross-Stack References

- Cross stack references allow one stack to reference resources in another stack. This is useful for sharing resources between stacks, such as VPCs.

## How it works

### Problem

- Output values from one stack cannot be directly referenced in another stack.

### Solution

- Outputs from one stack can be exported, making them visible to other stacks.
- Exported Outputs must have a unique name within the AWS account and region.
- Other stacks can then import these values using the `Fn::ImportValue` function.

### Example

- Stack A (Provider):

```yaml
Outputs:
  VpcIdExport:
    Value: !Ref VPC
    Export:
      Name: MyVpcId
```

- Stack B (Consumer):

```yaml
Resources:
  MySubnet:
    Type: AWS::EC2::Subnet
    Properties:
      VpcId:
        Fn::ImportValue: MyVpcId
      CidrBlock: 10.0.1.0/24
```

## When to use

- When you want to reuse resources across stacks without coupling their lifecycles.
