# CloudFormation Mappings

## Core Concepts

- A mapping typically has a top-level key and then a second-level key, such as Region -> Environment -> Value.
- Use Fn::FindInMap to extract the value from the mapping at runtime.

## Example

```yaml
Mappings:
  RegionMap:
    us-east-1:
      HVM64: ami-12345678
      HVMG2: ami-87654321
    us-west-2:
      HVM64: ami-abcdef12
      HVMG2: ami-12abcdef

Resources:
  MyInstance:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: !FindInMap [RegionMap, !Ref "AWS::Region", HVM64]
```
