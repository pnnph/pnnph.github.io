# Design references — what the owner sent, and what to take from each

Collected 2026-09-19. The owner sent two SaaS landing-page templates first, then seven
Pinterest/Dribbble references. The second batch is the honest signal: the templates were about
**layout** (a phone mockup beside the hero text), the pins are about **taste**.

## The references

| # | What it is | What to take | What to leave |
|---|---|---|---|
| 1 | **Brainwave — AI Landing Page Kit** (Dribbble, UI8) | Near-black navy ground, violet glow behind elements, huge white headline with one accent word underlined, small muted subhead, pill CTA, floating glass panels holding short feature lines | The AI-robot 3D render; the "product launch" energy |
| 2 | **Stoicism landing page** (Behance) | The strongest reference. Deep navy, gold accent, enormous thin display type, sculptures as hero objects, vertical side labels, hairline rules, huge negative space. Calm and expensive | Serif display type has no easy Persian equivalent — see below |
| 3 | **Devialet** (product site) | Light, minimal, editorial grid; product photography carrying the page | Pure white + hard black; too cold for this site |
| 4 | **City Arcade** (real estate) | Oversized condensed uppercase headline, glass cards sitting **on photography**, stat numbers as design elements | The dense marketing copy blocks |
| 5 | **ТОЧКА ОПОРЫ** (Russian psychotherapy site) | High-contrast black-and-white portraits, grid lines, one acid accent colour, quiet emotional copy | Belongs to the owner's **future therapy site**, not this one — this site is portfolio only |
| 6 | **Explore My Portfolio** | Closest to this site's job: giant portfolio headline, portrait photo, big stat numbers (5M+ / 3K+ / 24+), "Featured project" with category tabs, dark "Let's talk" footer | Invented stats. His numbers must be real or absent |
| 7 | **Green Valley** and **Bilcer (Web3 Identity)** | Soft misty gradients, frosted glass cards over imagery, serif + sans pairing, unhurried pacing. Bilcer is the calmest thing in the set | Nothing much — this is the light-theme direction |

## What they have in common

1. **Typography leads.** The headline is the hero, not an accessory. Everything else falls quiet
   around it. These are editorial pages, not product pages.
2. **Imagery carries weight**, usually monochrome or tonally restrained — sculpture, portraits,
   architecture.
3. **Glass sits on photographs**, not on flat colour. Maqzino's glass card already exists; here
   it earns its blur because there is something behind it.
4. **Calm.** Nothing is crowded, nothing shouts, nothing animates for its own sake.

## The direction this sets

Editorial and typographic, calm, with glass over imagery — somewhere between **Stoicism** and
**Bilcer**, built on the Maqzino palette. It suits both halves of the owner: the psychologist
and the designer/developer.

**Both themes are first-class** (his decision, 2026-09-19): dark is night mode, light is light
mode, neither is an afterthought.

**Night mode must be soft, not harsh.** His words: not too dark, no severe contrast, soft dark
colours. The Maqzino app's `#0B1020` is darker than that brief wants — the site's dark ground
should be lifted a little and the glow kept gentle. Check the result at night, on a phone, not
just on a bright monitor.

## The Persian display-type problem

This editorial look rests on very large display headings. English has endless display faces;
Vazirmatn is a UI sans and at 80px it reads competent, not grand. Two ways:

1. Vazirmatn Bold, very large, tight composition — modern and clean, less majestic.
2. A Persian display face for headings only (Estedad, Morabba and similar exist under open
   licences — verify the licence before shipping any of them), with Vazirmatn for body.

Show both side by side at real size and let the owner pick with his eyes, rather than arguing
it in words. Whatever wins, it is named in one token (`--font-fa-display`) so it stays
swappable, as with `--font-fa`.
