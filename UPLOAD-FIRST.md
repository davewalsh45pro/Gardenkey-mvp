# GardenKey PILOT V30.0.13 — GitHub upload

Upload/replace the files from the V30.0.13 GitHub-upload ZIP in the **repository root**. Do not upload the ZIP itself or a containing folder.

The historical `docs/` folder is unchanged and does not need to be uploaded.

## Critical changed live files
- `myplant.html`
- `border.html`
- `plant.html`
- `version.js`

The deployment ZIP also includes the complete current root baseline so it can be uploaded as one controlled replacement set.

## Post-deployment checks
1. Homepage displays V30.0.13.
2. My Plant shows **Pruning routine**.
3. Save a My Plant record and see **✓ Plant saved** near the bottom of the screen.
4. Edit without saving, then tap GardenKey home; a leave-without-saving confirmation appears.
5. My Plant sections have Show/Hide controls.
6. Save a Border and see **✓ Border saved**.
7. Edit a Border without saving and try to leave; confirmation appears.
8. Border sections have Show/Hide controls.
9. Existing personal records/photos and existing borders still open unchanged.
10. From a general plant profile, **+ Add to pot / border** offers pot vs border and then the saved collection chooser.

Cache-busted homepage:
`https://davewalsh45pro.github.io/Gardenkey-mvp/?v=30013`
