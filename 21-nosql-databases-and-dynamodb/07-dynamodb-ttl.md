# DynamoDB - TTL

- Amazon DynamoDB Time to Live (TTL) allows you to define a per-item timestamp to determine when an item is no longer needed and can be automatically deleted from the table.

## How TTL Works

1. You enable TTL on a DynamoDB table and specify the attribute that will store the expiration timestamp in seconds since the epoch (Unix time).
2. A background process periodically scans the table for items with expired timestamps and marks them for deletion. The items can still be read until they are deleted.
3. Another background process then scans the table for items marked for deletion and removes them from the table.

- Delete operations caused by TTL don't impact table performance or consume/charge RCU/WCU.
- Delete operations are added to the DynamoDB Streams.
- Beside the default DynamoDB Streams, you can also configure a dedicated stream to capture the items that are deleted due to TTL expiration. The stream stores the deletion events in last 24 hours.
