# RDS Custom

- Problems:
  - RDS is fully managed, you have limited access to underlying OS.
  - DB on EC2 is self managed, but require more admin overhead.
- Solution: RDS Custom solves the problem by providing a middle ground between RDS and DB on EC2. It allows you to have more control over the underlying OS while still benefiting from some of the managed features of RDS.
- Only supports MySQL and Oracle engines.
- Can connect to the RDS Host using SSH, RDP, Session Manager.
- RDS Custom runs on your AWS account. Meaning the EC2 instance it runs on, Backups, EBS volumes are visible to the corresponding server console, unlike RDS where you cannot see them.
- To perform customization, you need to pause the **Database Automation**, perform the customization, and then resume the **Database Automation**. This is because RDS Custom uses automation to manage the database, and pausing it allows you to make changes without interference.
- **IMPORTANT**: You rarely have to use RDS Custom. For now, just know that it exists.
