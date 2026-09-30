# CloudFormation Outputs

- Example:

```yaml
Outputs:
  VpcId:
    Description: VPC ID
    Value: !Ref MyVPC

  PublicSubnetId:
    Description: Public subnet ID
    Value: !Ref PublicSubnetA
```

Deploying a stack with the above output definitions will produce CLI output similar to:

```yaml
{
  "Stacks":
    [
      {
        "StackName": "MyNetworkStack",
        "StackId": "arn:aws:cloudformation:ap-northeast-1:123456789012:stack/MyNetworkStack/abc12345-6789-def0-1234-56789abcdef0",
        "CreationTime": "2026-09-18T05:10:22.123Z",
        "StackStatus": "CREATE_COMPLETE",
        "Outputs":
          [
            {
              "OutputKey": "VpcId",
              "OutputValue": "vpc-0a12bc34d56ef7890",
              "Description": "VPC ID",
            },
            {
              "OutputKey": "PublicSubnetId",
              "OutputValue": "subnet-0123abcd4567ef890",
              "Description": "Public subnet ID",
            },
          ],
      },
    ],
}
```
