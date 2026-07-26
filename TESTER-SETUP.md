# GardenKey V27 — Tester setup

Each tester has a unique code. Their personalised Create Plant link stores that code on their device and includes it in every draft they email to Dave.

## Personalised links

- Elaine Fitzmaurice — TST-ELAINE-001  
  https://davewalsh45pro.github.io/Gardenkey-mvp/create.html?tester=TST-ELAINE-001
- Christine Orford — TST-CHRISTINE-002  
  https://davewalsh45pro.github.io/Gardenkey-mvp/create.html?tester=TST-CHRISTINE-002
- Eimear Cremen — TST-EIMEAR-003  
  https://davewalsh45pro.github.io/Gardenkey-mvp/create.html?tester=TST-EIMEAR-003
- Emer Harte — TST-EMER-004  
  https://davewalsh45pro.github.io/Gardenkey-mvp/create.html?tester=TST-EMER-004
- Karen Foley — TST-KAREN-005  
  https://davewalsh45pro.github.io/Gardenkey-mvp/create.html?tester=TST-KAREN-005
- Troy Hopkins — TST-TROY-006  
  https://davewalsh45pro.github.io/Gardenkey-mvp/create.html?tester=TST-TROY-006
- Dili — TST-DILI-007  
  https://davewalsh45pro.github.io/Gardenkey-mvp/create.html?tester=TST-DILI-007
- Kelly — TST-KELLY-008  
  https://davewalsh45pro.github.io/Gardenkey-mvp/create.html?tester=TST-KELLY-008

## Pilot workflow

1. Give each person only their own personalised link, or write that link to their GardenKey.
2. The page displays their name and tester code before they enter a plant.
3. Their emailed draft contains `testerId` and `testerName` as well as the draft and plant details.
4. Keep the tester fields when approving the draft and adding it to `personal-drafts.json`.
5. The approved personal record remains separate from `plants.json`, but links to the relevant general library record through `plantLibraryId`.
6. When imported on the tester's device, the record retains the tester name, tester code, source draft ID and library link.

This is identification for the pilot, not secure login. Records still live in the browser on the individual device until GardenKey gains cloud accounts.
