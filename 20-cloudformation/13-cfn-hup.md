# CloudFormation cfn-hup

- Problem: cfn-init only runs once on instance launch. If you update your CloudFormation stack, and update the resource metadata, cfn-init will not run again.
- This is where cfn-hup comes in. It is a daemon that runs on the instance and checks for changes to the metadata. If it detects a change, it will run configurable actions, such as running cfn-init again.
- cfn-hup needs to be installed and configured on the instance.
- cfn-hup periodically checks the metadata for changes.
