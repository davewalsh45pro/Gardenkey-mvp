# GardenKey PILOT V30.0.13 upload

## Mobile GitHub upload
Upload/replace the **root files** from this ZIP in the repository root.

No historical documentation/archive folder needs to be uploaded for this release.

For the smallest safe V30.0.13 update, the materially changed root files are:
- `personal-drafts.json`
- `version.js`
- `CHANGELOG.md`
- `README.md`
- `GOLDEN-SOURCE.md`
- `UPLOAD-FIRST.md`
- `SHA256SUMS.txt`

`plants.json` is intentionally unchanged because Elaine's Parahebe links to the existing shared `GK-PAR-001` profile.

After GitHub Pages finishes successfully, test:
1. Homepage version displays V30.0.13.
2. Elaine opens her personalised homepage and sees `Welcome back, Elaine Fitzmaurice` / `TST-ELAINE-001`.
3. Elaine's My Plants contains her existing Tetrapanax record and the new Parahebe 'Avalanche' record.
4. Opening the Parahebe personal record shows Elaine's own: Large pot on patio; Full sun; Twice weekly; Occasionally; Compost/ Hort. Sand.
5. The generic Parahebe profile remains shared/general and does not display Elaine's personal observations.

Cache-busted homepage:
`https://davewalsh45pro.github.io/Gardenkey-mvp/?v=30013`

Elaine personalised homepage:
`https://davewalsh45pro.github.io/Gardenkey-mvp/?tester=TST-ELAINE-001&v=30013`
