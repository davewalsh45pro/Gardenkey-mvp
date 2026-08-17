# GardenKey PILOT V30.0.13 upload

## Mobile GitHub upload
Upload/replace the **root files listed below** in the repository root. Do not upload the ZIP itself or a containing GardenKey folder.

The historical `docs/` folder is included in the Golden Source ZIP for recovery completeness but is unchanged and does **not** need to be uploaded again.

### Materially changed live files
- `myplant.html`
- `border.html`
- `version.js`

### Release documentation changed
- `CHANGELOG.md`
- `README.md`
- `GOLDEN-SOURCE.md`
- `UPLOAD-FIRST.md`
- `REGRESSION-V30.0.13.md`
- `TESTER-FEEDBACK-MASTER-LOG.md`
- `SHA256SUMS.txt`

## After GitHub Pages finishes successfully
1. Homepage displays V30.0.13.
2. Open an existing My Plant record with photos/details and confirm everything is still present.
3. Enter a Pruning routine, save, reopen the record and confirm it persists.
4. Change a field without saving, then try to navigate away and confirm an unsaved-changes warning appears.
5. Save and confirm the prominent **Saved** message appears.
6. Collapse and reopen major My Plant sections; confirm data remains unchanged.
7. Open an existing Border, edit and save it, and confirm the prominent **Saved** message appears.
8. Change a Border field without saving, navigate away and confirm the warning appears.
9. Confirm Eimear's existing Hydrangea, Parahebe, Cordyline, Shuttlecock Fern, Hellebore, Cosmos, Heuchera, Brunnera and Hosta records remain available.
10. Confirm tester feedback and Create Tester Plant email hand-offs still work as before.

Cache-busted homepage:
`https://davewalsh45pro.github.io/Gardenkey-mvp/?v=30013`

Suggested commit message:
`Deploy GardenKey PILOT V30.0.13 tester feedback UX`
