# GardenKey Changelog

## PILOT V30.0.13 — tester-feedback UX correction
- Added an unmistakable temporary **✓ Plant saved** / **✓ Border saved** toast after successful local saves, with visible failure feedback if browser storage rejects the write.
- Added unsaved-change protection to My Plant and Border, including internal-link confirmation plus a browser `beforeunload` fallback.
- Added a backward-compatible personal **Pruning routine** field to My Plant. Existing records load with it blank; no record migration or key rename occurs.
- Added collapsible sections to My Plant and Border to reduce scrolling; lower-priority sections start collapsed while core editing sections remain open.
- Reduced redundant explanatory copy inside the newly collapsible areas.
- Fixed the general plant-profile **+ Add to pot / border** action by restoring a working chooser route into the existing collection logic.
- Preserved all V30.0.12 tester records, personal drafts, shared plant data, photos, tester IDs and localStorage key names.
- Corrected the earlier V30.0.13 packaging error in which the release label changed but the intended My Plant/Border implementation was not actually included.

## PILOT V30.0.12 — Eimear shade-border tester records
- Added three unique Eimear Cremen tester submissions: Heuchera 'Forever Purple' (`GK-DRAFT-289457` / `USR-EIM-0007`), Brunnera 'Alexander's Great' (`GK-DRAFT-997201` / `USR-EIM-0008`) and Hosta (unknown cultivar) (`GK-DRAFT-159768` / `USR-EIM-0009`).
- Added shared `GK-HEU-001` Heuchera and `GK-BRU-001` Brunnera profiles; the Hosta record links to existing `GK-HOS-001`.
- No existing personal record IDs, tester records, localStorage keys, photo arrays or prior library entries were overwritten or migrated.
