# Elasticache

- Elasticache is a managed in-memory cache service.
- Support Redis and Memcached.
- When to use Elasticache:
  - Used to cache data for read heavy workloads with low latency requirements.
  - Used to store session data for stateless applications.
- Benefits of using Elasticache:
  - Reduce database load, allows cost savings of the database.
  - Improve application performance.

## Memcached vs Redis

### Memcached

- Only support simple data structure.
- No replication.
- No backup.
- Support multi-threading, which can improve performance for read-heavy workloads.

### Redis

- Support complex data structure.
- Support multi-AZ replication.
- Support backup and restore.
- Support transactions.
