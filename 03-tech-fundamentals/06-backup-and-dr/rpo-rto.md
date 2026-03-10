# Recovery Point Objective (RPO)

- **RPO** is the maximum acceptable amount of data loss, measured in time, during a disaster recovery event.
- Each backup represents a recovery point.
  - If you use full and incremental backups, recovery requires:
    - The last full backup
    - All incremental backups created after it
- **Example**:
  - Server crashes at 3:00 AM
  - Last successful backup was at 9:00 PM the previous day
  - Data loss = 6 hours
  - If the business can tolerate only 4 hours of data loss → RPO is not met
- Backups must run as frequently as (or more frequently than) the RPO requirement.
  - A failed or missed backup can cause an RPO violation.
- Lower RPO results in:
  - More frequent backups
  - Increased storage and network bandwidth usage
  - Higher costs

# Recovery Time Objective (RTO)

- **RTO** is the maximum acceptable amount of time a system can be unavailable after a failure or disaster.
- RTO is measured from the moment the outage occurs until the system is fully operational and returned to the business.
- RTO includes all recovery activities, such as:
  - Detecting the failure
  - Notifying the response team
  - Mobilizing personnel
  - Restoring data from backups
  - Testing restored systems
  - Bringing systems back online
- RTO can be reduced by:
  - Monitoring and automated alerts
  - Documented recovery procedures
  - Spare hardware or cloud resources
  - Regular disaster recovery testing
- **Example**:
  - Server crashes at 3:00 AM
  - System is fully operational at 9:00 AM
  - Downtime = 6 hours
  - If the business allows only 4 hours of downtime → RTO is not met
