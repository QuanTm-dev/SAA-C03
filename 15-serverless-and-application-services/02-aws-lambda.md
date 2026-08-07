# AWS Lambda

## Lambda basic

- Lambda is a Function as a Service (FaaS).
- You provide a short running, focused code to lambda, and it takes care of running it for you.
- Lambda function is a piece of code that Lambda runs.
- Functions need a runtime.
- Functions are loaded and run in a runtime environment.
- The runtime environment has a direct memory, based on the memory, a certain amount of CPU is allocated to the function.
- Lambda only charges you for the duration of the function execution based on the allocated memory.
- Lambda is a key part of serverless architecture.
- Every lambda function has a deployment package, which is a .zip file that contains the function code and dependencies.
- You can use Docker images as deployment packages for Lambda functions.
- Lambda function is stateless.
- By default, a lambda function is called in a new runtime environment.
- Lambda function lifecycle: Created -> Invoked -> Terminated.
- Runtime environment also has a temporary disk at /tmp. The disk has a size of 512 MB and can scale upto 10240 MB.
- Lambda function timeout can be set upto 15 minutes.

## Lambda common use cases

- Serverless applications (with S3, API Gateway, etc.)
- File processing (e.g. upload a file to S3 and trigger a lambda function to process it. With S3, S3 Events, etc...)
- Database triggers (with DynamoDB, Streams, etc...)
- Serverless Cron (with EventBridge or CloudWatch Events, etc...)
- Realtime stream processing (with Kinesis, etc...)

## Lambda networking

- Lambda function can be run in a VPC or AWS public zone.
- By default, Lambda functions run in AWS public zone.
- When running in AWS public zone, Lambda function can access the internet and public AWS services. But it cannot access private resources in a VPC unless those services has a public IP and the security controls allow it.
- When running in a VPC, Lambda function can access private resources in the VPC. But it cannot access the internet or public AWS services unless you configure a NAT gateway or VPC endpoints.

### Lambda in VPC

- You need to give Lambda functions execution role the permission to create the ENI within VPC.
- AWS analyzes all the functions in a region and for each combination of subnet and security group, an ENI will be created and shared across all functions in that combination.
- Lamnda in VPC works similar to ECS Fargate, it runs on a dedicated hardware and network. Then it's injected to the VPC via ENI.
- An ENI is created when you configure a Lambda function can take upto 90s to finish. The creation process only happens 1 when you create or update the network configuration of a Lambda function.

## Lambda Security

- You can use Execution role (which is an IAM role) to give permissions to your lambda function to access other AWS services.
- Lambda also has resource policy to control "who" can invoke the lambda function.
- Resource policy can only be changed via CLI or API, not from the AWS Console.

## Logging

- Logs from Lambda go to CloudwatchLogs. It requires the Lambda to have specific permissions.
- Metrics (e.g success/failure count) are stored in CloudWatch.
- Lambda can be integrated with X-Ray for Distributed Tracing.

## Lambda Invocation

- There are 3 ways a lambda function can be invoked:
  - Synchronous invocation
  - Asynchronous invocation
  - Using Event Source mapping

### Synchronous Invocation

- Clients invoke a Lambda function and wait for the response.
- Errors or Retries are entirely handled within the client.

### Asynchronous Invocation

- Clients invoke a Lambda function by generating an event.
- After generating the event, the client doesn't wait for the response from the Lambda invocation.
- If the event processing fails, Lambda will retry between 0 or 2 times. This is configurable.
- Lambda handles the retry logic.
- Lambda function needs to be **idempotent** when reprocess a result.
- Idempotent : Re-processing the same event provides the same result without duplicate side effects. Example: if a Lambda writes an order record to DynamoDB, it should first check whether that order ID already exists—so retries don’t create duplicate entries. IMPORTANT: No Anki cards need for Idempotent explanation
- Lambda can be configured to send those events it can't process after those retries to Dead Letter Queue for diagnostic.
- Event processed by Lambda can be forward to other destination like SQS, SNS, etc...

### Event Source Mapping

- Usually use for services that don't generate events.
- Event Source Mapping will poll new data from services. Data is group into batches based on batch size and send to Lambda as event batches. 1 invocation can contain multiple events (a batch).
- Event source mapping requires lambda Execution Role to have necessary permissions to interact with the data from the services.
- Failed event batches can be sent to Dead Letter Queue for diagnostic.

## Lambda Versions

- Lambda function can have multiple versions.
- A version includes the code and configurations.
- A version once published is immutable.
- $Latest points at the latest version.
- You can use aliases (DEV/PROD) to point at different versions. Alias can be changed to point to other version.

## Lambda Startup Time

- Runtime environment is also know as execution context.
- Cold start is the process of setting up the execution context including the function code download before the function can be executed.
- If the function is invoked again without too much gap, it will be execute in the same execution context. This is called a warm start. With warm start, the execution context setup can be skipped. However, as a best practice, you should expect a Lambda might run in a new context.
- After a period of idle, the execution context will be removed.
- Concurrent executions will use multiple (potentially new) contexts.
- Provisioned concurrency can be used to provide the execution context in advance.
- You can use /tmp folder to share files between warm starts invocation. However, as a best practice, you should expect a Lambda might run in a new context.
- From code perspective, place reusable objects (e.g., database connections) outside the Lambda handler so they can be shared across warm starts in the same execution context. However, always design defensively—these resources may not exist if the function runs in a fresh context, so your code must handle initialization gracefully.
