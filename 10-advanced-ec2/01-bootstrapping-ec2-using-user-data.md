# Bootstrapping EC2 using User Data

## What Is Bootstrapping

- Bootstrapping is a process which allow scripts to be run when the instance is launched.
- Enabled using EC2 User Data, delivered through the instance metadata service.
- Bootstraping allows EC2 Build Automation.
- EC2 scans for user data on launch and executes it via the instance OS.

## User Data Basics

- **Metadata Endpoint**: `http://169.254.169.254/latest/user-data/`
- Executed by the instance OS.
- By default, runs only on **initial launch**
- Can be configured to run on every restart with `<persist>true</persist>`.
- EC2 does not validate user data => unsafe scripts will be executed as-is.

## Constraints & Security

- **Size Limit**: 16 KB in raw form, before base64 encoding. For larger payloads, download external scripts and execute them.
- Not secure; never store passwords or sensitive credentials in user data.

## Modifying User Data

- Can modify user data only on stopped instances.
- Modified user data runs on next start only if `<persist>true</persist>` is configured.

## Boot-Time-To-Service-Time

- **Definition**: Time from instance launch until it is ready for use.
- Measure in minutes.

- **Optimization Strategy**:
  - Use AMI baking to front-load time-intensive configuration before launch.
  - Use user data only for final, minimal configuration.
  - This combination reduces post-launch time and accelerates boot-time-to-service.
