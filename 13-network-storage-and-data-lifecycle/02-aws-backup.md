# AWS Backup

- AWS Backup is a fully managed backup/restore service.
- It allows you to centralize backup management across AWS services, accounts, and regions.

## Components

- Backup Plan: A set of rules that define when and how backups are created and retained. Common Backup Plan configurations include:
  - Backup frequency (e.g., daily, weekly)
  - Backup window (e.g., specific time of day)
  - Lifecycle policies (e.g., transition to cold storage after a certain period)
  - Vault: Where backups are stored.
  - Region Copy: Option to copy backups to another region for disaster recovery.
- Resources: What resources are being backed up (e.g., EC2 instances, RDS databases, EFS file systems).
- Vault: Backup destination, require KMS key for encryption.
- You can enable bault Lock which prevents deletion of backups for a specified retention period. It has 72 hours cool off, which you can delete the vault lock. After that, you cannot delete the vault lock.
- You can take a backup on-demand.
- Some services support point-in-time recovery (PITR) for continuous backups.
