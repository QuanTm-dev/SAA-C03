# Databases on EC2

- Generally not recommended unless you have very specific needs.

## When you might consider EC2

- You need access to the OS of the Database. You should question if a client requests this, it rarely is needed.
- You require advanced DB tuning that need root access. However, RDS does allow you to control the parameters for DB tuning, even without root access. This is typically a vendor that demands this.
- You need a DB or DB version that AWS doesn't provide.
- You might need a specific version of an OS and DB that AWS doesn't provide.
- You need a custom replication/resiliency architecture beyond what RDS offers.

## Why you should not do this

- More admin overhead, you have to manage the EC2 instance and the DB yourself. For example, keeping the OS and DB patched, monitoring, compatibility, etc...
- Backup and Disaster Management adds addtional complexity.
- EC2 is running in a single AZ. If the zone fails, access to the database fails.
- Will miss out on features from AWS DB products.
- EC2 is ON or OFF, there is no way to scale easily.
- Replication: Require skills, setup time, monitoring and more to do it right.
- Performance: Can be slower than using RDS as AWS has spent a lot of effort to optimize the RDS product.
