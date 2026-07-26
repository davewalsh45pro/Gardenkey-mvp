# GardenKey V26 — Tester-ready cleanup

## Main changes
- Restored Aeonium as a neutral shared species guide.
- Moved draft `GK-DRAFT-009436` into `personal-drafts.json` as a personal record linked to `GK-AEO-001`.
- Added a one-time import route: `myplant.html?draft=GK-DRAFT-009436`. It creates the personal record only on the device that opens the link and does not seed tester browsers.
- Removed repeated save buttons from individual sections and entries. Each editable page now uses its main **Save to this browser** action.
- Updated visible pilot labels to V0.26.
- Completed JSON, JavaScript, internal-link and storage-key checks before packaging.

## Before handing keys to testers
Open `myplant.html?draft=GK-DRAFT-009436` once on Dave's phone after deploying V26 to restore the personal Aeonium record.
