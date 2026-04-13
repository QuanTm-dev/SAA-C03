# S3 Lifecycle Configuration

## Core Concepts

- **Lifecycle configuration** = automated rules for transitioning objects to lower storage classes or deleting them.
- **Filter** = selects which objects the rule applies to (by prefix, tags, or both).
- **Transition actions** = move objects to a lower storage class after a specified time (e.g., Standard → Standard-IA after 30 days).
- **Expiration actions** = permanently delete objects after a specified time (e.g., delete after 365 days).

## Transition Rules & Constraints

- **One-way transitions**: Can transition to lower classes only, never reverse (Standard-IA cannot go back to Standard).
- **Direct transitions allowed**: Can skip intermediate classes (Standard → Glacier Deep Archive directly).
- **30-day minimum**: Objects must be stored ≥30 days before transitioning to Standard-IA or One Zone-IA.
- **Minimum storage duration**: Each storage class has a minimum billable duration; early transitions incur charges for the remainder (e.g., 90 days for Glacier Instant Retrieval).
- **Single rule limitation**: Cannot create one rule with multiple transitions that violate minimum storage requirements; create separate rules if needed (e.g., Rule 1: Standard → Standard-IA after 30 days, Rule 2: Standard-IA → Glacier after 60 days).

## Small Object Handling

- **Default behavior**: Objects <128 KB are prevented from transitioning to any storage class.
- **Override with filters**: Use `ObjectSizeGreaterThan` or `ObjectSizeLessThan` filters to allow small object transitions.
- **Cost consideration**: Transition requests cost money; for small objects, transition costs can exceed storage savings.

## When to Use vs. Intelligent-Tiering

- **Lifecycle Configuration**: Time-based transitions based on object age.
- **Intelligent-Tiering**: Access-based
