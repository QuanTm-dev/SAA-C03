# CloudFormation Custom Resources

- Custom resources let CloudFormation execute custom logic during stack operations. They’re used when you need functionality not natively supported by CloudFormation or when extra provisioning/configuration steps are required.
- Examples:
  - Populate an S3 bucket during stack creation.
  - Call an external API and use the returned data in your template.
  - Manage third‑party resources or perform cleanup on deletion.
- How it works:
  - You declare a custom resource and provide a service token (an endpoint of sort).
  - CloudFormation sends **Create**, **Update**, and **Delete** events to the endpoint.
  - The endpoint handler performs the required logic and sends a response back to CloudFormation The response may include **Data** attributes that can be referenced via `!GetAtt`.
- The endpoint can be implemented using:
  - AWS Lambda
  - Amazon SNS topic
