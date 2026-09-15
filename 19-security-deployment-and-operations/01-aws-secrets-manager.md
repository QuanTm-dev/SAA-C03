# AWS Secrets Manager

- AWS Secrets manager is a product which can manage secrets within AWS.
- There is some overlap between it and the SSM Parameter Store (SecretString) - but Secrets manager is specialised for secrets.
- Supports the automatic rotation using Lambda. This is the key difference compared to SSM.
- Can directly integrate with some AWS products. For example, with RDS, you can store credentials inside AWS Secrets Manager, when AWS Secrets Manager rotates the credentials, it also update the credentials saved within the RDS.
- Use IAM to restrict access to secrets.
- Secrets are encrypted using KMS.
