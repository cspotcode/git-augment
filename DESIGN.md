## Overview

I want to make custom changes to a repo's working tree that make my life easier.

- Tweak config files
- Add new scripts

Run a command to pack all those changes into a branch or commit somewhere.

When I clone the repo again, run a command to restore all those changes.

If a tracked file is modified, then modification must be applied to the working tree, and possibility of conflicts.
If an untracked file is modified, then it should be placed into the working tree, *not* staged in the index.

Ability to `.ignore` files for this package.

Convention for pushing these refs somewhere safe, outside of the target repo.

Use fancy smudge/clean filters to help git ignore our augment changes, but allow committing other changes?

---

Layout of the augments repo:

/bithub/blive/monitoring/HEAD <- commit revision upon which this patch was generated, it should always apply cleanly back to that revision
/bithub/blive/monitoring/PATCH <- the patch file

---

Example:

I modify the Makefile to add useful commands. (modified tracked file)
I add a justfile with useful commands (untracked file)
I add a script that I can use to rewrite `pyproject.toml` into a different format.
    `.augments/myscript.js`
    `.augments/pathspec` -- matches all files tracked by the augments
    `.augments/attributes`
    `.augments/exclude`
    `.augments/config`
    `.augments/filters/*`
    `.augments/hooks/restore` <-- run after restore, to do any post-processing

```
### BEGIN AUGMENTS
### END AUGMENTS
```

`git augments sync` sync configs
`git augments save` -- regenerate the patch, commit, and push it
`git augments restore` -- apply the patch
`git augments revert` -- apply inverse of the patch, might have the effect of removing the augments but leaving all other changes untouched
