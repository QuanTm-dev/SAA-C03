# AWS Backup

- Fully managed backup/restore service.
- Centralizes backup management across AWS services, accounts, and regions.

## Backup Plan

- A set of rules defining when/how backups are created and retained.
- Common configurations include:
  - **Frequency**: e.g., daily, weekly
  - **Backup window**: specific time of day
  - **Lifecycle policy**: e.g., transition to cold storage after X days
  - **Vault**: where backups are stored
  - **Region copy**: optionally copy backups to another region for DR

## Resources

- What gets backed up (EC2, RDS, EFS, etc.)

## Vault (backup destination)

- Every vault is encrypted with a KMS key.
- **Vault Lock** prevents deletion of backups for a set retention period.
  - **Compliance mode**: has a cooling-off period (min. **72 hours**). Once it expires, the lock is permanent — cannot be deleted by anyone, including AWS.
  - **Governance mode**: no mandatory cooling-off; users with sufficient IAM permissions can remove the lock at any time.

## Other

- Backups can be taken on-demand.
- Some services support **point-in-time recovery (PITR)** for continuous backups.
