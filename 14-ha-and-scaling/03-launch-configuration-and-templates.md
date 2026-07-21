# Launch Configuration and Templates

- Both allow you to define the configuration of an EC2 instance in advance.
- Some of the parameters you can define include:
  - AMI, Instance Type, Storage, Key Pair.
  - Networking and Security Groups.
  - User Data, IAM Role.
- Configs are NOT editable; defined one. But, Launch Templates have versions
- LT came after LC so it has newr features like T2/T3 unlimited, placement ggroups, capacity reserveations, elastic graphics
- NOTE: AWS recommends using Launch Templates over LCs
- LC's have one use: only used as part of Auto Scaling groups when it launches new instances.
- LT can be used in Auto Scaling groups, or in console UI or CLI to launch instances directly.
