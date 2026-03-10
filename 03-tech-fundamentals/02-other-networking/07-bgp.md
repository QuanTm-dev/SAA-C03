# BGP (Border Gateway Protocol)

## Basics

- **BGP** connects multiple Autonomous Systems (AS) together
- **Autonomous System (AS)**: A self-contained network controlled by a single entity (can be one large network or a collection of routers)
- **ASN**: Unique number assigned to each AS
- Operates over **TCP**

## Peering

- Connections between different AS require **manual configuration**
- **iBGP** (internal BGP): Routing within the same AS
- **eBGP** (external BGP): Routing between different AS

## Path Selection

- **BGP** is a path-vector protocol that exchanges ASPATH (the route to a destination)
- By default, it chooses the **shortest path**, regardless of link quality
- **AS Path Prepending**: Repeat an ASN multiple times in the path to discourage use of that route (e.g., `201, 201, 201,i` makes it less preferred than `201,i`). `i` mean original - the current network itself.
