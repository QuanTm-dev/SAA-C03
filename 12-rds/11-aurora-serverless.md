# Aurora Serverless

- Aurora Serverless (AS) allows you to provision a database instance with dynamic compute capacity.
- AS uses ACU (Aurora Capacity Unit) to measure the compute capacity.
- ACU represents a certain amount of CPU and memory.
- You can set a minimum and maximum ACU for your Aurora Serverless database. The database will automatically scale up or down between the values based on the workload. It can scale down to 0 and be paused when there is no activity.
- Consumption billing per-second basis
- Same resilience as Aurora (6 copies across AZs)
- ACUs are allocated from a shared pool.
- ACUs are stateless and shared across many AWS customers and have no local storage. Once allocated, they have access to cluster storage in the same way as Aurora Provisioned.
- When the load increases, Aurora Serverless will automatically allocate more ACUs to your AS instances. When the load decreases, Aurora Serverless will automatically deallocate ACUs from your AS instances.
- Applications connect to AS via an endpoint, the endpoint point to a **proxy fleet**.
- The proxy fleet holds your connection open so your application never experiences a dropped connection. When a scaling event occurs, the proxy fleet will automatically redirect your application to a new newly scaled compute resources.

## Use cases

- Infrequently used applications. You only pay for resources as you consume them on a per second basis.
- New applications whose workload is unknown.
- Great for variable workloads. It can scale in and out based on demand
- Applications with unpredictable workloads.
- It can be used for development and test databases because it can scale back when not needed.
- Great for multi-tenant applications. Your revenue is tied to the customer workload. You can charge customers based on their usage of the database.
