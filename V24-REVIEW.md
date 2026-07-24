# GardenKey V24 — shared repository records, matching workflow and event timeline

## Implemented
- Added Acidanthera / *Gladiolus murielae* to the main plant library as `GK-ACI-001`.
- Added Dili’s tester submission unchanged as a personal record in `user-plants.json`, linked to the Acidanthera library entry.
- Preserved the tester nickname `AcidantheraDilia`, source, observations and original photo.
- Added match statuses: `matched`, `provisional`, and `unmatched`.
- Added `admin-review.html` for provisional and unmatched submissions.
- Added automatic structured events from Date Acquired, Last Divided and Last Repotted.
- Division events are marked as propagation events without overwriting the tester’s written propagation history.
- Imported and newly added photos default to `progress` and `isHero: false`.
- Removed repeated Save buttons from each My Plant section. One local save action remains in Save & Share.
- My Plant now checks local browser storage first, then loads a published shared record from `user-plants.json` by Record ID.

## Important deployment behaviour
GitHub Pages remains a static host. `user-plants.json` is the shared pilot repository and becomes available across devices after it is committed and deployed. Browser edits still do not write back to GitHub automatically. Updated tester records must be exported, reviewed and added to `user-plants.json` until a cloud backend is introduced.

## Dili key URL
`myplant.html?id=USR-37545588`
