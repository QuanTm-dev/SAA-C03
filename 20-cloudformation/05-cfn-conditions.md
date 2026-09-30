# CloudFormation Conditions

- Example:

```yaml
Parameters:
  EnvType:
    Type: String
    AllowedValues: ["dev", "stage", "prod"]

  EnableLogging:
    Type: String
    AllowedValues: ["true", "false"]

Conditions:
  IsProd: !Equals [!Ref EnvType, "prod"]
  LoggingEnabled: !Equals [!Ref EnableLogging, "true"]

  # Combine multiple conditions
  ProdWithLogging: !And
    - !Condition IsProd
    - !Condition LoggingEnabled

Resources:
  ProdLogGroup:
    Type: AWS::Logs::LogGroup
    Condition: ProdWithLogging
    Properties:
      LogGroupName: !Sub "/app/prod/${AWS::StackName}"
```
