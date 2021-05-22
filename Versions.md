# Versioning Strategy

## Statblock Version

Version of 5e Statblock Generator.
Increment with **every change** to PF2e Character Builder.

- MAJOR: Changes to Interface
- MINOR: New Feature added (but no changes to existing interface)
  - New fields or funcs for statblock
- PATCH: Bug Fixes
  - Changes to calculations

## Builder Version

Indicates changes for users. May need data migrations for characters built on previous versions.
Increment with **every change** to PF2e Character Builder.

- MAJOR: Changes to Interface
- MINOR: New Feature added (but no changes to existing interface)
  - Addition of new PF content
  - New Builder Features, like feats, equipment, subclasses, etc.
- PATCH: Bug Fixes
  - Changes to calculations
  - Correcting data or behavior of features for certain classes/backgrounds/ancestries etc

## Package.json Version

Overall version for RPG Workshop application.
Increments with **every DEPLOYMENT** of application to production
This number will likely be BEHIND both application versions to allow for multiple versions of them between deployments.

- MAJOR: At least one sub-application has a major bump
- MINOR: At least one sub-application has a minor bumb
- PATCH: At least one sub-application has a patch bump
