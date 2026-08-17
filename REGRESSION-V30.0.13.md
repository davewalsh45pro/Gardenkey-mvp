# GardenKey V30.0.13 Regression Report

## Baseline
Built only from the 25 V30.0.12 root files uploaded in the GardenKey Tester Feedback thread. Historical `docs/archive` was subsequently supplied and verified against the V30.0.12 checksum manifest; all 20 historical files match exactly and are included in the complete Golden Source package.

## Implemented
- prominent save confirmation toast in My Plant and Border
- unsaved-change warning in My Plant and Border
- personal Pruning routine field in My Plant
- collapse/expand controls on major My Plant and Border sections
- tester wording rule documented: correct obvious spelling mistakes only; otherwise preserve tester wording

## Regression checks completed
- `plants.json`, `personal-drafts.json`, `testers.json`, and `user-plants.json` parse successfully
- those four data files are byte-for-byte unchanged from V30.0.12
- `pot.html`, `create.html`, `feedback.html`, `myplants.html`, `plant.html`, `seedling.html`, `index.html`, `icons.js`, `admin.html`, `admin-review.html`, `TESTER_GUIDE.md`, `PHOTO_WANTLIST.md`, and `PLANT_PROFILE_STRUCTURE.md` are byte-for-byte unchanged from V30.0.12
- localStorage key expressions in `myplant.html` and `border.html` are unchanged
- all active inline JavaScript passes `node --check` syntax validation
- HTML parse confirms one `personalPruning` field and one save-toast element on My Plant; one save-toast element on Border
- existing records without `personalPruning` load with a blank pruning field by backward-compatible fallback; no migration is performed
- dynamic Border plant rows are covered by delegated dirty-change tracking
- photo add/remove in My Plant marks the record as unsaved
- `version.js` is the only release source and now reports V30.0.13 / 30013

## Environment limitation
A headless Chromium end-to-end test was attempted, but localhost navigation is blocked by the execution environment administrator. Static syntax, schema, byte-integrity and storage-key regression checks therefore form the automated test evidence here. The post-deployment manual checks in `UPLOAD-FIRST.md` remain required.

## Golden Source status
Root release: ready for deployment testing.
Complete Golden Source archive: assembled with the verified unchanged historical `docs/archive` set.
