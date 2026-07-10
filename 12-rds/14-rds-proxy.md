# RDS Proxy

## Why should you use RDS Proxy?

- Opening and Closing database connections takes time and resources. Example with AWS Lambda: Every function invocation opens a new connection and closes it at the end of the invocation.
- Handling faliure of database connections is hard. Example: How long should you wait for a connection to work? What should you do while waiting?
- Build a database proxy yourself is not a trivial task.

## How does RDS Proxy work?

- RDS Proxy maintains a pool of long-term established connections to the database. Applications will connect to the proxy instead of the database directly.
- Connection Flow: Application → RDS Proxy → Database.

## RDS Proxy Characteristics

- Connect to RDS Proxy is much faster than connecting to the database directly.
- RDS Proxy's connection pool can be shared across multiple applications. This is called **multiplexing**. This reduces the time and resources needed to establish/terminate new connections.
- Connection to database is abstracted away from the application. If a database connection fails, RDS Proxy will automatically retry the connection to the database. If the application has connected to the RDS Proxy, it just needs to wait for the connection to be re-established.
- Fully managed service. AWS handles the scaling, availability, etc...
- Only accessible from a VPC.
- Applications use Proxy Endpoint to connect to RDS Proxy.
- Support SSL/TLS.
- Can reduce upto 60% of failover time.

## When should you use RDS Proxy?

- When you hit too many database connections errors.
- When you use AWS Lambda
- When you need low latency database connections.
- When resilience to database connection failures is important.

## How RDS Proxy Improves Resilience

- **IMPORTANT**: Do not create Anki cards for this section. This is just for understanding the benefits of RDS Proxy.

- **Without RDS Proxy**:
  - Application connects directly to DB endpoint.
  - Failover requires DNS TTL expiration & propagation (~30–35s).
  - Application may see connection errors during this time.
- **With RDS Proxy**:
  - Application connects to Proxy endpoint.
  - Proxy retries failed connections automatically.
  - Application avoids DNS TTL delays.
  - Failover is faster and more transparent to the application.
