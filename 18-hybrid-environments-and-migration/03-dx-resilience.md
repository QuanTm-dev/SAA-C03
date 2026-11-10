# Direct Connect (DX) Resilience

## None

### Components

- 1 DX location
- 1 AWS DX router
- 1 Customer or Partner DX router
- 1 cross connect between the AWS DX router and the Customer or Partner DX router
- 1 connection between the Customer or Partner DX router and the on-premises network
- 1 on-premises router
- 1 on-premises physical location

### Single points of failure

- Has no DX resilience
- Has 7 single points of failure:
  - DX location
  - AWS DX router
  - Customer or Partner DX router
  - Cross connect between the AWS DX router and the Customer or Partner DX router
  - Connection between the Customer or Partner DX router and the on-premises network
  - On-premises router
  - On-premises physical location

## OK

### Changes from None

- Use 2 AWS DX routers in the same DX location
- Use 2 Customer or Partner DX routers in the same DX location
- Use 2 on-premises routers in the same on-premises physical location
- Use 2 cross connects between the AWS DX routers and the Customer or Partner DX routers
- Use 2 connections between the Customer or Partner DX routers and the on-premises network

### Remaining single points of failure

- DX location
- On-premises physical location

## Better

### Changes from OK

- Use 2 DX locations
- Use 1 AWS DX router in each DX location
- Use 1 Customer or Partner DX router in each DX location
- Use 1 cross connect between the AWS DX router and the Customer or Partner DX router in each DX location
- Use 2 on-premises physical locations
- Use 1 on-premises router in each on-premises physical location
- Use 1 connection between the Customer or Partner DX router and the on-premises network for each on-premises physical location

### Resilience

- Solves all single points of failure

## Great (Recommended)

### Changes from Better

- Use 2 DX locations
- Use 2 AWS DX routers in each DX location
- Use 2 Customer or Partner DX routers in each DX location
- Use 2 cross connects between the AWS DX routers and the Customer or Partner DX routers in each DX location
- Use 2 on-premises physical locations
- Use 2 on-premises routers in each on-premises physical location
- Use 2 connections between the Customer or Partner DX routers and the on-premises network for each on-premises physical location

### Why it is recommended

- While the Better architecture can solve all single points of failure, the Great architecture is recommended because it provides additional redundancy in case of a failure of one of the routers or connections.
