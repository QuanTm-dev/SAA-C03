# Redshift Architecture

- Redshift is a column based (data are stored in columns instead of rows), petabyte scale, data warehousing product within AWS.
- Redshift is an OLAP (Online Analytical Processing) database.
- OLAP vs OLTP (Online Transaction Processing) databases: OLAP is used for analytical queries and reporting, while OLTP is used for transactional operations (e.g. processing orders, payments, etc.).
- Generally, data needs to be loaded into Redshift before it can be queried.
- Redshift Spectrum allows you to query data in S3 without loading it into Redshift.
- Federated Query allows you to query data in other databases (e.g. RDS, Aurora, etc.) without loading it into Redshift.
- Redshift uses SQL-like syntax for querying data.
- Support standard JDBC and ODBC drivers (standard SQL database drivers) for connecting to Redshift.
- Redshift is not Serverless, you're provided a cluster of nodes (a server). It took time to provision the server, unlike Athena.
- By default, run in one AZ.
- There are 2 types of nodes in Redshift:
  - Leader node: Plans and coordinates queries, aggregates results from compute nodes.
  - Compute node: Executes queries assigned by the leader node and returns results to the leader node.
- Compute Nodes are partitioned into slices, each slice has its own memory and disk space.
- Redshift Enhanced VPC Routing allows you to route traffic between your Redshift cluster and other AWS services through your VPC instead of the default public internet.
- Data in each compute node is replicated to another compute node in the cluster for high availability.
- Backups can be taken automatically or manually, and are stored in S3. Automated backups have a retention period, while manual backups can be retained indefinitely. Snapshots are incremental, meaning that only the data that has changed since the last snapshot is saved.
- Firehouse or DMS can be used to load data into Redshift.
