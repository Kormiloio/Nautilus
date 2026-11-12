# Design: Remove the published prototype page

## Approach

Delete the file rather than move it to another directory in the repository. Git history already preserves the exact artifact, and `docs/archive/PROTOTYPE_SPEC.md` records its observable behavior, so a second copy in the tree adds nothing. Moving it elsewhere in the repo would also keep it inside Marina's repository scan.

## Build

`vite.config.js` keeps `emptyOutDir: false`. Only its comment changes, because it no longer exists to protect `prototype.html`. Changing the flag would alter how `web/` is rebuilt and is out of scope.

## References

Every document that described `web/prototype.html` as the preserved location now points to `2918c96:web/prototype.html` in git history. Historical narrative ("the prototype was audited and preserved") stays as written.
