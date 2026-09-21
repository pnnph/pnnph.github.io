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
CLAUDE.md                     this file
docs/handoff.md               full context carried over from the Maqzino project
docs/site-brief.md            the owner's answers: identity, contact, scope, assets
docs/design-references.md     the references he sent and the direction they set
.claude/skills/site-design/   the design system — read it before touching markup or CSS
app/(en)/, app/(fa)/          pages. English is the default at /, Persian at /fa/
                              /, /maqzino/, /blog/ and /blog/<slug>/ — each mirrored under /fa/
components/                   UI pieces, each with its own .module.css
content/en.ts, fa.ts          every string on the site, kept out of the components
content/posts.ts              the blog posts, both languages in one object per post
content/site.ts               email, social links, resume path, store URLs
styles/tokens.css             every colour, font, space and radius — the only place for them
public/assets/                only what a page actually loads — it is all published verbatim
brand-kit/                    the Maqzino and pnnph brand kits, deliberately outside public/
tools/preview/                headless-Chrome screenshots and a tiny static server
reference/                    copy of the live Maqzino privacy page source
```

## Stack and deployment

Next.js 16 + React 19 with `output: "export"`, so `npm run build` produces plain static files
in `out/` that run on GitHub Pages or any Iranian shared host — neither can run a Node server.
GSAP, Motion and Lenis for animation; Three.js only where a 3D element earns its weight, and
always lazily loaded. CSS Modules plus the tokens file, not Tailwind, because the owner needs
to read and change the styles himself.

`.github/workflows/deploy.yml` builds and publishes on every push to `main`, so the owner can
edit a string on github.com and the site updates itself. It writes `out/.nojekyll`, without
which GitHub Pages silently drops the `_next/` folder and the site loads unstyled. He still
has to set Settings → Pages → Source → GitHub Actions once.

Preview locally with `npm run build`, then `node tools/preview/serve.mjs out 4321` and
`node tools/preview/shot.mjs http://localhost:4321/fa/ --phone`. Check both languages and both
themes before showing him anything.

## Environment

Windows 11. Shells are Git Bash and PowerShell; the owner's terminal is PowerShell, so give
him PowerShell commands. Node 24 is installed and npm registry access works. Python is
**not** installed. Google Chrome is at `C:\Program Files\Google\Chrome\Application\chrome.exe`.
Details and gotchas are in `docs/handoff.md` §8.
