# GardenKey PILOT V30.0.3 — Golden Source

This package is the authoritative GardenKey source after the Android tester-email hand-off fix.

Build rules:
- Future releases must start from this complete package.
- Shared plant knowledge lives in `plants.json`.
- Tester-specific approved records live in `personal-drafts.json`.
- Tester identity is persisted locally and carried into tester-aware pages.
- Tester submissions are backed up locally before email hand-off.
