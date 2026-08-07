# Amazon AppFlow

- AWS AppFlow allows you to exchange data between applications.
- AppFlow is a fully managed **integration** service.
- Use cases examples:
  - Sync data across applications.
  - Aggregate data from different sources to avoid data silo.
- Default uses Public Endpoint, but supports PrivateLink.
- Have many connectors for multiple popular applications.
- Can build custom connector with SDK.
- There are 3 main components:
  - Flow: A pipeline that moves and transforms data between a source and a destination.
  - Connector: A plug‑in that lets AppFlow communicate with other applications.
  - Connection: A resource that stores the credentials and configuration for a connector.
- Connection can be reused across multiple flows.
- Source and Field mapping needs to be defined in the flow.
- Data Transformation, Filtering, and Validation can optionally be applied in the flow.
