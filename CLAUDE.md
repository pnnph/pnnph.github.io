# pnnph.github.io — personal portfolio site

Portfolio website for **Peiman Asgari (پیمان عسگری)**, GitHub user `pnnph`. The
first featured work is **Maqzino (مغزینو)**, an interactive 3D brain atlas for Android.

**Read `docs/handoff.md` before doing anything.** It carries everything decided in the
Maqzino project: the brand system, app facts, store status, hosting plan and the
open questions for this site. The owner wants to state the site requirements in this
project, so nothing has been built yet.

## Working rules (from the owner — follow exactly)

- **Reply in Persian.** The owner writes Persian; code and commit messages stay English.
- **Propose first, then wait for approval, for every piece of work.** List what you
  intend to do and why, and ask. Only start after a clear yes. The original instruction
  was «قبل از هر کاری پیشنهاداتت رو بده و ازم تایید بگیر برای هر کاری».
- **Never handle credentials.** Don't create keys, don't take passwords, don't write
  secrets to files. The owner does those steps himself, and you give instructions.
- **Show before publishing.** Build and preview locally first. The owner uploads to
  GitHub himself; `gh` is not installed.
- Keep the visual language consistent with Maqzino: dark navy/violet gradients, soft
  glowing blobs, frosted-glass cards, the V2 line-brain mark. See `docs/handoff.md` §5.
- Screenshots or recordings from the owner's phone can show other apps and personal
  data. Capture only while the target app is in front, and delete recordings after use.

## Layout

```
CLAUDE.md                 this file
docs/handoff.md           full context carried over from the Maqzino project
assets/brand/             Maqzino logo, icon and intro animation (copied, see its README)
assets/maqzino/           store screenshots (1:2 and 9:16 JPEGs)
reference/                copy of the live Maqzino privacy page source
```

The site itself does not exist yet. The earlier proposal (not approved) was hand-written
HTML/CSS with no build step; see `docs/handoff.md` §2.

## Environment

Windows 11. Shells are Git Bash and PowerShell; the owner's terminal is PowerShell, so give
him PowerShell commands. Node 24 is installed and npm registry access works. Python is
**not** installed. Google Chrome is at `C:\Program Files\Google\Chrome\Application\chrome.exe`.
Details and gotchas are in `docs/handoff.md` §8.
