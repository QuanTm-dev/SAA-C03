# CloudFormation DependsOn

## Background

- CloudFormation creates/updates/deletes resources in parallel by default. While doing this, it tries to determine the dependency order of the resources. It does it implicitly by looking at the references between resources.
- For example, we have VPC => Subnet => EC2 Instance. In this case, CloudFormation can determine the dependency order of the resources by looking at the references between them. It will create the VPC first, then the Subnet, and finally the EC2 Instance.
- DependsOn is an explicit way to tell CloudFormation the dependency order of the resources. It is useful when CloudFormation cannot determine the dependency order of the resources implicitly.

## Example

- Implicit dependency order of the resources:

```yaml
Resources:
  MyVPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: 10.0.0.0/16

  MySubnet:
    Type: AWS::EC2::Subnet
    Properties:
      VpcId: !Ref MyVPC
      CidrBlock: 10.0.1.0/24

  MyInstance:
    Type: AWS::EC2::Instance
    Properties:
      SubnetId: !Ref MySubnet
      InstanceType: t3.micro
      ImageId: ami-1234567890abcdef0
```

- Explicit dependency order of the resources:

```yaml
Resources:
  VPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: 10.0.0.0/16

  InternetGateway:
    Type: AWS::EC2::InternetGateway

  AttachGateway:
    Type: AWS::EC2::VPCGatewayAttachment
    Properties:
      VpcId: !Ref VPC
      InternetGatewayId: !Ref InternetGateway

  PublicInstance:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: ami-0abcdef1234567890
      InstanceType: t3.micro
      SubnetId: !Ref PublicSubnet

  EIPForInstance:
    Type: AWS::EC2::EIP
    DependsOn: AttachGateway
    Properties:
      Domain: vpc
      InstanceId: !Ref PublicInstance
```

- Why DependsOn is needed:
  - An EC2-VPC Elastic IP requires the VPC's Internet Gateway to be attached before the EIP is created.
  - `EIPForInstance` references `PublicInstance`, but it does not reference `AttachGateway`.
  - CloudFormation therefore cannot infer the dependency from the resource properties and may try to create the EIP too early.
  - `DependsOn: AttachGateway` explicitly makes CloudFormation create `AttachGateway` before `EIPForInstance`.
