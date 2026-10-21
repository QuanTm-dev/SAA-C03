# AWS Lambda

## Fundamentals

- Lambda is a Function as a Service (FaaS) — you provide short-running, focused code and AWS runs it for you.
- A Lambda function requires a runtime (managed or custom) to execute.
- Allocated memory determines the CPU power given to a function.
- Billing is based on requests plus execution duration × allocated memory.
- Lambda functions are stateless — don't assume state persists between invocations.
- Deployment packages are either a .zip file (code + dependencies) or a container image (up to 10 GB).

## Execution Environment & Startup

- Cold start sets up the execution context, including downloading function code, before the function can run.
- Warm start reuses an existing execution context and skips setup — but reuse isn't guaranteed by default, so code should handle a fresh context gracefully.
- Execution context lifecycle follows Init → Invoke → Shutdown phases.
- Idle execution contexts are eventually removed by AWS.
- Concurrent executions may spin up multiple, potentially new, execution contexts.
- Provisioned concurrency pre-warms execution contexts in advance.
- Ephemeral storage at /tmp (512 MB–10,240 MB, configurable) can share files across warm-start invocations.
- Place reusable objects (e.g. DB connections) outside the handler to share them across warm starts, but initialize defensively in case the context is new.
- Function timeout can be set up to 15 minutes (900 seconds max).

## Networking

### Public zone (default)

- By default, Lambda functions run in the AWS-managed public zone, not inside a VPC.
- Public-zone functions can reach the internet and public AWS services.
- Public-zone functions can't reach private VPC resources unless those resources have a public IP and allowing security controls.

### VPC-attached

- VPC-attached functions can reach private resources inside that VPC.
- VPC-attached functions need a NAT gateway or VPC endpoints to reach the internet or public AWS services.
- The execution role needs permission to create an ENI in the VPC.
- AWS shares one ENI per subnet + security-group combination across all functions using that combination (Hyperplane ENI model).
- ENI setup takes time.
- ENI creation or update only happens when a function's network configuration is created or changed.

## Security & Permissions

- The execution role (an IAM role) grants a function permission to access other AWS services.
- A resource-based policy controls which principals can invoke the function.

## Logging & Monitoring

- Logs are sent to CloudWatch Logs, which requires specific IAM permissions on the execution role.
- Success/failure and other metrics are published to CloudWatch.
- Lambda integrates with X-Ray for distributed tracing.

## Invocation Types

### Synchronous

- Client invokes the function and waits for the response.
- Errors and retries are handled entirely by the calling client.

### Asynchronous

- Client generates an event and doesn't wait for the response.
- Lambda retries a failed event 0–2 times (configurable).
- Function must be idempotent, since retries can reprocess the same event.
- Idempotent : Re-processing the same event provides the same result without duplicate side effects. Example: if a Lambda writes an order record to DynamoDB, it should first check whether that order ID already exists—so retries don’t create duplicate entries. IMPORTANT: No Anki cards need for Idempotent explanation
- Failed events can be sent to a Dead Letter Queue after retries are exhausted.
- Successful or failed events can be forwarded to destinations like SQS or SNS.

### Event source mapping

- Used for services that don't push events themselves (e.g. Kinesis, DynamoDB Streams, SQS).
- Polls the source and groups records into batches; one invocation can process a full batch.
- Requires the execution role to have permission to read from the source service.
- Failed batches can be sent to a Dead Letter Queue for diagnostics.

## Versions & Aliases

- A function can have multiple versions, each including both code and configuration.
- A published version is immutable.
- $LATEST always points to the most recent version.
- Aliases (e.g. DEV, PROD) point to a specific version and can be repointed as needed.

## Common Use Cases

- Serverless applications, e.g. with S3 and API Gateway.
- File processing triggered by S3 events.
- Database triggers, e.g. via DynamoDB Streams.
- Serverless cron jobs via EventBridge or CloudWatch Events.
- Real-time stream processing, e.g. via Kinesis.
