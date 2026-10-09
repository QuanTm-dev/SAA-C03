# DynamoDB - Accelerator (DAX)s

- DynamoDB Accelerator (DAX) is an in-memory cache designed specifically for DynamoDB

## Traditional Cache vs DAX

- DAX abtracts away the caching logic from the application code, reduces the code complexity. For example:

```ts
// Traditional cache (Redis or in‑memory)
const redis = require("redis");
const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb");

const redisClient = redis.createClient();
const dynamo = new DynamoDBClient({ region: "us-east-1" });

async function getUser(userId) {
  const cacheKey = `user:${userId}`;

  // 1. Check cache
  const cached = await redisClient.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }

  // 2. Fetch from DynamoDB
  const result = await dynamo.send(
    new GetItemCommand({
      TableName: "Users",
      Key: { userId: { S: userId } },
    }),
  );

  const user = result.Item;

  // 3. Write to cache
  await redisClient.set(cacheKey, JSON.stringify(user), { EX: 60 });

  return user;
}
```

```ts
// With DAX
const AmazonDaxClient = require("amazon-dax-client");
const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb");

// DAX endpoint
const dax = new AmazonDaxClient({
  endpoints: ["my-dax-cluster.abc123.clustercfg.dax.use1.amazonaws.com:8111"],
  region: "us-east-1",
});

// Drop-in replacement for DynamoDBClient
const dynamo = new DynamoDBClient({ region: "us-east-1", endpoint: dax });

async function getUser(userId) {
  const result = await dynamo.send(
    new GetItemCommand({
      TableName: "Users",
      Key: { userId: { S: userId } },
    }),
  );

  return result.Item;
}
```

## DAX Architecture

- DAX is deployed to multiple Availability Zones (AZs) within a VPC.
- There is 1 primary node and multiple read replicas. The primary node handles writes and propagates changes to the read replicas. Each node runs on different AZs.
- Item cache hold results of GetItem, BatchGetItem. You must specify the items partition or sort key.
- Query cache holds results of Query and Scan operations. Parameters used in the query are stored as cache key.
- DAX is accessed via an endpoint.
- DAX uses a write-through caching strategy. Data is written to DynamoDB and then to the cache.
- If a cache miss occurs, DAX fetches the data from DynamoDB, then write it to the primary node and propagates it to the read replicas.

## DAX Considerations

- Primary Node handles writes, Read Replicas handle reads.
- DAX can provide much faster read and reduce DynamoDB costs.
- With DAX you can scale up or scale out.

### When not to use DAX

- DAX is not suitable for applications that require strong consistency read.
- DAX is not suitable for write-heavy workloads.

### When to use DAX

- Use DAX when you have read-heavy workloads and repeatedly access the same items.
