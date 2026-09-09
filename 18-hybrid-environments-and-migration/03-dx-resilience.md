# Direct Connect (DX) Resilience

## Direct Connect (DX) Resilience - NONE

- In the following architecture, there is no Direct Connect (DX) resilience:
  - 1 DX Location.
  - 1 AWS DX Router.
  - 1 Customer or Partner DX Router.
  - 1 Cross Connect between the AWS DX Router and the Customer or Partner DX Router.
  - 1 Connection between the Customer or Partner DX Router and the on-premises network.
  - 1 on-premises router.
  - 1 on-premises physical location.
- There are 7 single points of failure in this architecture:
  - DX Location.
  - AWS DX Router.
  - Customer or Partner DX Router.
  - Cross Connect between the AWS DX Router and the Customer or Partner DX Router.
  - Connection between the Customer or Partner DX Router and the on-premises network.
  - On-premises router.
  - On-premises physical location.

## Direct Connect (DX) Resilience - OK

- We can evolve the first architecture to a more resilient architecture:
  - Use 2 AWS DX Routers in the same DX Location.
  - Use 2 Customer or Partner DX Routers in the same DX Location.
  - Use 2 on-premises routers in the same on-premises physical location.
  - Use 2 Cross Connects between the AWS DX Routers and the Customer or Partner DX Routers.
  - Use 2 Connections between the Customer or Partner DX Routers and the on-premises network.
- The following single points of failure are still remain:
  - DX Location.
  - On-premises physical location.

## Direct Connect (DX) Resilience - Better

- We can evolve the second architecture to a more resilient architecture:
  - Use 2 DX Locations.
  - Use 1 AWS DX Routers in each DX Location.
  - Use 1 Customer or Partner DX Routers in each DX Location.
  - Use 1 Cross Connects between the AWS DX Routers and the Customer or Partner DX Routers for each DX Location.
  - Use 2 on-premises physical locations.
  - Use 1 on-premises router in each on-premises physical location.
  - Use 1 Connection between the Customer or Partner DX Routers and the on-premises network for each on-premises physical location.

## Direct Connect (DX) Resilience - Great (Recommended)

- We can evolve the third architecture to a more resilient architecture:
  - Use 2 DX Locations.
  - Use 2 AWS DX Routers in each DX Location.
  - Use 2 Customer or Partner DX Routers in each DX Location.
  - Use 2 Cross Connects between the AWS DX Routers and the Customer or Partner DX Routers for each DX Location.
  - Use 2 on-premises physical locations.
  - Use 2 on-premises routers in each on-premises physical location.
  - Use 2 Connections between the Customer or Partner DX Routers and the on-premises network for each on-premises physical location.
- Note: While the Better architecture can solve all single points of failure, the Great architecture is recommended because it provides additional redundancy in case of a failure of one of the routers or connections.
