# RDS Proxy

## Why use RDS Proxy?

- Opening/closing DB connections is slow and resource-intensive (e.g. AWS Lambda opens a new connection per invocation and closes it at the end).
- Handling connection failures yourself is hard (how long to wait? what to do while waiting?).
- Building a database proxy yourself is non-trivial.

## How it works

- RDS Proxy maintains a pool of long-lived connections to the database.
- Connection flow: **Application → RDS Proxy → Database**.
- Applications connect via a **Proxy Endpoint**, not the DB directly.

## Key characteristics

**Connections & pooling**

- Connecting to RDS Proxy is faster than connecting directly to the database.
- **Multiplexing**: RDS Proxy reuses a database connection once a client's transaction finishes, so many client connections can share a smaller pool of underlying DB connections — reducing time/resources spent opening and closing connections.

**Resilience**

- Connection to the database is abstracted away from the app. If a DB connection fails, RDS Proxy automatically retries — the app just waits for reconnection instead of handling retry logic itself.
- Can reduce failover time by **up to 66%**.

**Management & security**

- Fully managed — AWS handles scaling, availability, etc.
- Only accessible from within a VPC (never publicly accessible).
- Supports SSL/TLS.

## When to use it

- Hitting "too many connections" errors.
- Using AWS Lambda.
- Need low-latency database connections.
- Resilience to connection failures matters.

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
