# GardenKey V27 — tester identity update

The pilot now uses lightweight tester IDs rather than cloud accounts. Each personalised link saves the tester identity on that browser and includes it in submitted drafts. Approved personal records retain `testerId`, `testerName`, `sourceDraftId` and `plantLibraryId`, keeping the tester, submission and general plant guide connected.

This is reliable pilot attribution but not authentication or cross-device syncing. Those require a backend/account system later.

# GardenKey V27 — tester draft reliability fix

## Fixed
- `myplant.html?draft=<draft ID>` now genuinely imports a personal tester record from `personal-drafts.json`.
- Imported records receive a stable record ID, are saved to local storage, appear in **My Plants**, and remain linked to the neutral shared species guide.
- Importing the same draft twice opens the existing record instead of duplicating it.
- Added the missing personal growing-condition fields to My Plant records.
- Removed repeated section-level Save buttons; one Save action remains in **Save & share**.
- Added an owner-only import list at `myplants.html?imports=1`. This is not shown in normal tester navigation.

## Brian's Aeonium
After deployment, open either:
- `myplant.html?draft=GK-DRAFT-009436`
- or `myplants.html?imports=1` and tap **Brian's Aeonium**.

The record is saved only on the device that imports it. This is required because GitHub Pages cannot identify Dave's browser or write directly into its local storage during deployment.

## Corrected deployment package
- All visible pilot labels now read `PILOT V0.27`.
- The downloadable ZIP is packaged with website files at archive root, so GitHub root files can be replaced directly.
- Brian's Aeonium remains a personal draft and must be imported once on the intended browser using `myplant.html?draft=GK-DRAFT-009436`.
