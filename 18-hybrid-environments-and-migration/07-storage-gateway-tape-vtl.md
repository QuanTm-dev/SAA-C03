# Storage Gateway - Tape (VTL)

## Tape Backup core concepts (No Anki cards needed)

- Enterprise backup usually run in one of 3 ways:
  - Backup to disk
  - Backup to tape
  - Backup to a remote facility over a network
- All tape backup solutions have at least 1 tape drive. A **tape drive** can be empty or have a tape inserted. If a tape is inserted, a tape drive can read or write data to the tape in a sequential manner.
- **Tape Loaders (Robots)**: Think of this as a robot that can insert, remove, swap tapes to/from tape drives.
- **Tape Libraries**: A tape library is a equipment that contains multiple drives, loaders and **slot**.
- **Slot**: A slot is a physical location in a tape library that can hold a tape when it is not in use by a tape drive.
- **Tape Shelf**: A tape shelf is a physical location outside of a tape library that can hold tapes when they are not in use by a library.

## Problems with traditional tape backup (No Anki cards needed)

- Enterprise tape backup solutions are expensive to purchase and maintain:
  - There are cost for purchasing the equipments (tape drives, tape libraries, tape loaders, tapes).
  - There are cost for maintaining the equipments (tape drives, tape libraries, tape loaders, tapes).
  - There are cost for operating the backup solution (staff, power, cooling, etc).
  - Moving tapes offsite is expensive and time consuming.

## Storage Gateway - Tape (VTL) core concepts

- Presents a virtual tape library to on-premises backup applications using the iSCSI protocol.
- There are 2 main components:
  - **Virtual Tape Library (VTL)**: Backed by S3.
  - **Virtual Tape Shelf (VTS)**: Backed by S3 Glacier or S3 Glacier Deep Archive. Represent a tape shelf (offsite storage) for tapes that are no longer needed for immediate access.
- Use **Cache Storage** and **Upload Buffer** similar to Storage Gateway - Volume Cached.
- Tapes are stored in VTL and can be moved to VTS if they are no longer needed for immediate access.

### Use cases

- Migrate on-premises tape backup to AWS.
- Extend on-premises tape backup with AWS. Running both traditional on-premises and AWS tape backup solutions.
