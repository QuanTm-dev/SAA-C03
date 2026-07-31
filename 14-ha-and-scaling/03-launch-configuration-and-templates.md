# Launch Configuration (LC) vs Launch Template (LT)

## What they are

- Both let you define an EC2 instance's configuration in advance.
- Some of the parameters you can define include:
  - AMI, Instance Type, Storage, Key Pair.
  - Networking and Security Groups.
  - User Data, IAM Role.
- Both are **immutable once created** — but LT supports **versioning**.

## Launch Configuration (LC)

- **Deprecated**.
- Only usable as part of an **Auto Scaling Group** — no other use case.

## Launch Template (LT)

- Usable in an **Auto Scaling Group**, or directly via **console/CLI** to launch instances.
- Supports extra features LC doesn't, e.g.:
  - T2/T3 Unlimited
  - Placement groups
  - Capacity reservationsƯ
