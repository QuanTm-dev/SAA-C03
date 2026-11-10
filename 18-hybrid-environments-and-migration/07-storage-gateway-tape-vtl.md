# Storage Gateway - Tape (VTL)

## Tape backup core concepts (No Anki cards needed)

### Backup approaches

- Enterprise backup usually runs in one of three ways:
  - Backup to disk
  - Backup to tape
  - Backup to a remote facility over a network

### Tape hardware

- All tape backup solutions have at least one **tape drive**
- A tape drive can be empty or have a tape inserted
- A tape drive with a tape inserted reads or writes data on the tape sequentially
- **Tape loader (robot)**: inserts, removes, and swaps tapes to and from tape drives
- **Tape library**: equipment containing multiple drives, loaders, and slots
- **Slot**: physical location in a tape library holding a tape when no tape drive is using it
- **Tape shelf**: physical location outside a tape library holding tapes when no library is using them

## Problems with traditional tape backup (No Anki cards needed)

- Enterprise tape backup solutions are expensive to purchase and maintain:
  - Purchase costs cover tape drives, tape libraries, tape loaders, and tapes
  - Maintenance costs cover tape drives, tape libraries, tape loaders, and tapes
  - Operating costs cover staff, power, cooling, and similar overheads
  - Moving tapes offsite is expensive and time-consuming

## Storage Gateway - Tape (VTL) core concepts

- Presents a virtual tape library to on-premises backup applications
- Uses the iSCSI protocol
- Uses **Cache Storage** and **Upload Buffer**, similar to Storage Gateway - Volume Cached
- Tapes are stored in the VTL
- Tapes can move to the VTS when no longer needed for immediate access

## Components

- There are 2 main components:
  - **Virtual Tape Library (VTL)**: Backed by S3.
  - **Virtual Tape Shelf (VTS)**:
    - Backed by S3 Glacier Flexible Retrieval or S3 Glacier Deep Archive
    - Represents a tape shelf (offsite storage)
    - Holds tapes no longer needed for immediate access

## Use cases

- Migrate on-premises tape backup to AWS
- Extend on-premises tape backup with AWS
- Run traditional on-premises and AWS tape backup solutions in parallel
