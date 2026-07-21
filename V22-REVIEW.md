# GardenKey V22 review

## V21 findings
1. **Bugs:** quick-created personal plants could lose their explicit species link; loaded status used the record ID; personal record IDs were editable; photo-plan cards had no action.
2. **UX:** the core flows are now understandable, but local-only storage should remain clearly labelled and export reminders should be prominent during testing.
3. **Vision alignment:** GardenKey is now a connected plant identity and personal-history system, not merely an NFC care page. The general guide → personal plant → pot/seedling relationship is the strongest differentiator.
4. **Scalability:** `plants.json` remains suitable for pilot testing, but user-generated records and images will eventually need a real database, authentication and image storage.
5. **Roadmap:** validate the NFC-to-personal-record journey first; then add backup/export prompts and structured activity logs; defer accounts/cloud sync until tester behaviour proves the need.

## Quick wins included
- Actionable photo prompts.
- Same-species personal plant links with thumbnails.
- Read-only IDs and clearer loaded nickname.
- 15 additional plants across underrepresented categories.
