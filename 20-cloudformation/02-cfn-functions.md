# CloudFormation Functions

- AWS CloudFormation provides several built-in functions that help you manage your stacks.
- Use functions in your templates to assign values to properties that are not available until runtime.

## !Ref & Fn::GetAtt

- !Ref: Returns the value of a resource or parameter. For parameters, it gives the parameter value; for resources, it usually gives the physical ID.

- Fn::GetAtt: Returns the value of an attribute from a resource (like an ARN, DNS name, etc.).

- Example:

```yaml
Resources:
  MyBucket:
    Type: AWS::S3::Bucket

Outputs:
  BucketName:
    Value: !Ref MyBucket # Returns bucket name
  BucketArn:
    Value: !GetAtt MyBucket.Arn # Returns bucket ARN
```

## Fn::Join & Fn::Split

- Fn::Join: Concatenates values into a single string, separated by a specified delimiter.

- Fn::Split: Splits a string into a list using a delimiter.

- Example:

```yaml
Outputs:
  JoinedString:
    Value: !Join ["-", ["Hello", "World", "2026"]]
    # Produces "Hello-World-2026"

  SplitString:
    Value: !Select [1, !Split [",", "apple,banana,cherry"]]
    # Produces "banana"
```

## Fn::GetAZs & Fn::Select

- Fn::GetAZs: Returns a list of Availability Zones for a region.

- Fn::Select: Picks a specific item from a list.

- Example:

```yaml
Resources:
  MySubnet:
    Type: AWS::EC2::Subnet
    Properties:
      VpcId: !Ref MyVpc
      AvailabilityZone: !Select [0, !GetAZs !Ref "AWS::Region"]
      CidrBlock: 10.0.0.0/24
```

## Conditions (Fn::If, Fn::And, Fn::Equals, Fn::Not, Fn::Or)

- Fn::If: Returns one value if a condition is true, another if false.

- Fn::And: Returns true if all conditions are true.

- Fn::Equals: Compares two values.

- Fn::Not: Negates a condition.

- Fn::Or: Returns true if any condition is true.

- Example:

```yaml
Conditions:
  IsProd: !Equals [!Ref EnvType, "prod"]

Resources:
  ProdBucket:
    Type: AWS::S3::Bucket
    Condition: IsProd

Outputs:
  BucketName:
    Value: !If [IsProd, !Ref ProdBucket, "No bucket created"]
```

## Fn::Base64 & Fn::Sub

- Fn::Base64: Encodes a string into Base64 (often used for UserData scripts).

- Fn::Sub: Substitutes variables within a string (like ${VarName})..

- Example:

```yaml
Resources:
  MyInstance:
    Type: AWS::EC2::Instance
    Properties:
      UserData: !Base64 !Sub |
        #!/bin/bash
        echo "Hello from ${EnvType}" > /var/tmp/message.txt
```

## Fn::Cidr

- Fn::Cidr: Returns a list of CIDR blocks based on an IP range and subnet count.

- Example:

```yaml
Outputs:
  SubnetCidr:
    Value: !Select [0, !Cidr ["10.0.0.0/16", 4, 8]] # Parameters are CIDR block, number of subnet, subnet size.
    # Produces "10.0.0.0/24" (first subnet)
```
