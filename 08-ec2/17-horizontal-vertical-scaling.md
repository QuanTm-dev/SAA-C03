# Horizontal and Vertical Scaling

- Scaling is the process of increasing or decreasing the capacity of a system to handle more or less load.

## Vertical Scaling

- Vertical scaling involves adding more resources (CPU, RAM, storage) to an existing server to increase its capacity.
- Each resize requires a reboot of the instance, which can lead to disruption.
- Larger instances also more expensive compared to smaller ones.
- There are limits to how much you can scale vertically.
- No application changes are needed when scaling vertically.
- Work for all applications, even monolithic.

## Horizontal Scaling

- Horizontal scaling involves adding more instances to a system to distribute the load across multiple servers. A load balancer is often used to distribute traffic among the instances.
- Application Session are not shared across instances.
- Need application changes or off-host session like database.
- No disruption when scaling.
- No real limits to scaling.
- More cost-effective than vertical scaling.
- More granular scaling, the smaller the instance, the more granular the scaling.
