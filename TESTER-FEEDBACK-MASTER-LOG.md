# GardenKey Tester Feedback Master Log

**Checkpoint: V30.0.13 · 17 August 2026**

This log separates raw tester evidence from implementation decisions. Tester wording should be preserved except for obvious spelling mistakes; do not rewrite whole words, phrases or sentences for style.

| ID | Tester | Evidence / observation | Area | Significance | Decision |
|---|---|---|---|---|---|
| TF-001 | Eimear | Kept key in kitchen rather than at pot because bending to scan was inconvenient. | Physical ergonomics | High | Product-design evidence; test scan height/placement. |
| TF-002 | Christine | Kept keys in kitchen because scanning in the ground was awkward. | Physical ergonomics | High | Product-design evidence. |
| TF-003 | Christine | Needed several attempts unless key was held flat against phone. | NFC / physical | High | Controlled scan/orientation testing. |
| TF-004 | Christine | Had to pick keys up from ground/pot to scan. | NFC / ergonomics | High | Physical Concept Round 1. |
| TF-005 | Christine | Largest key scanned most successfully. | NFC / form factor | High | Compare tag/key size and antenna geometry. |
| TF-006 | Christine | Indoor keys were easier to scan but easier to forget about. | Behaviour | High | Supports permanent/contextual garden placement. |
| TF-007 | Christine | Was unsure whether changes were saved after spending time building a border. | UX / data confidence | High | **Implemented V30.0.13**: prominent save confirmation + unsaved warning. |
| TF-008 | Christine | Plants entered while building a border do not become My Plants automatically. | Data architecture | High | Separate Border → My Plants build. |
| TF-009 | Christine | Wants Pruning Routine beside Watering and Feeding. | My Plant | Medium | **Implemented V30.0.13**. |
| TF-010 | Christine | Pruning should cover shrubs/trees, Chelsea chop and cutting back perennials/grasses. | My Plant | Medium | Covered by free-text Pruning routine field. |
| TF-011 | Christine | Wants plant/border-specific to-do lists. | Jobs / planning | High | Separate Jobs Engine design. |
| TF-012 | Christine | Main problem is remembering when gardening jobs need doing. | Product need | High | Product Blueprint / Jobs Engine evidence. |
| TF-013 | Christine | Automatic suggestions and manual tasks could both be useful. | Jobs | High | Future curated/sourced + manual task architecture. |
| TF-014 | Christine | Jobs By Season was only found after scrolling. | Information architecture | Medium/High | **Partially addressed V30.0.13** through collapsible sections; Jobs Engine remains separate. |
| TF-015 | Christine | Drop-down/collapsible information could reduce scrolling. | UX | Medium/High | **Implemented V30.0.13** on major My Plant/Border sections. |
| TF-016 | Christine | Opportunities exist to remove self-explanatory descriptive copy. | Content UX | Medium | Targeted copy reduction; continue reviewing with further feedback. |
| TF-017 | Christine | Can see GardenKey being useful, particularly in winter planning. | Product validation | High | Preserve as qualitative validation. |
| TF-018 | Christine | Expects an initial data-entry/setup hurdle before the value emerges. | Onboarding | High | Investigate after feedback round. |
| TF-019 | Christine | Intends to continue using/exploring GardenKey voluntarily. | Engagement | Positive | Observe continued behaviour. |
| TF-020 | Elaine | Previously accessed GardenKey but later could not find/get back into it and asked for a link. | Access / discoverability | High | Track recurrence; future persistent entry-point/PWA/bookmark/NFC behaviour. |

## V30.0.13 scope boundary
This release deliberately does **not** implement Border → My Plants conversion or the Jobs Engine. Both affect product/data architecture and will be designed as separate builds after the immediate tester-feedback UX patch.
