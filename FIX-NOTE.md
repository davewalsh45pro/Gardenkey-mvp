# V29.1 final tester identity repair

- Fixes the missing `setIndex` helper.
- Treats the personalised draft as authoritative for both tester name and tester ID.
- Finds old records by either `sourceDraftId` or the draft's fixed `recordId`.
- Repairs existing records without deleting notes or photos.
- Adds a cache-busting query when reloading repaired records.
