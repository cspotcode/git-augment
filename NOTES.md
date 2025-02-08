---

How does stash work?

Creates 2x commits describing:
- index
- working tree (changes to tracked files)

---


How to store the augments?
- as a commit in the repo
  - Pros: native git
  - Cons: requires pushing entire git history to a different repo?
- as a patch file
  - can still be pushed to a git repo somewhere
  - full version history! if you break something, restore from old copy
- as a two-commit chain tracking only modified and added files?
  - CUT THE TAIL can't think about this now

---

How to setup git filter

`.git/config`
```
[filter "foo"]
	# Use "$(pwd) instead?
	smudge = "\"$(git rev-parse --show-toplevel)/.augments/filters/foo\" smudge %f"
	clean = "\"$(git rev-parse --show-toplevel)/.augments/filters/foo\" clean %f"
```

Then in `.git/info/attributes` or `.gitattributes`:
```
*.txt filter=foo
```