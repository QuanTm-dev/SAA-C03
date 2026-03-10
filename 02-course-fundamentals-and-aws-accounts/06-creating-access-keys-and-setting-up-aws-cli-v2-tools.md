# Checking AWS CLI Version

```
aws --version
```

# Configure AWS CLI credentials

```
aws configure
```

- `--profile <profile_name>`: create or update a named profile
- Without the `--profile` option, the default profile is created or updated.

# Verify AWS CLI Configuration

```
aws s3 ls
```

- Return a list of S3 buckets in the account
- `--profile <profile_name>`: use a named profile to run the command
