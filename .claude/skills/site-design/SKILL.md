---
name: site-design
description: The design system for Peiman Asgari's portfolio site (pnnph) — colour tokens, typography, the Persian/English RTL rules, glass-card and gradient-button recipes, motion and accessibility limits. Read this before writing or editing any HTML, CSS or page copy in this repo, and before proposing visual changes, so every page matches the ones already built and the Maqzino brand it grew out of. It also covers the choices that must stay swappable later (font, domain, accent colour).
---

# The pnnph site design system

This site belongs to **Peiman Asgari (پیمان عسگری)** — psychologist and trauma therapist,
designer, web and mobile developer. Its first featured work is **Maqzino (مغزینو)**, an
interactive 3D brain atlas for Android, and the site's visual language grew out of that app:
deep navy that goes violet, soft glowing blobs behind frosted glass, one thin monoline mark.

The point of this file is that a page written six months from now, in a different session,
still looks like it belongs beside the first one. Read it before touching markup or styles.
The owner's answers about identity, contact and assets live in `docs/site-brief.md`; the
Maqzino brand and app facts are in `docs/handoff.md` §4–5.

## What the site is trying to feel like

Calm, dark, quiet and precise — closer to a well-made instrument than to a poster. The
owner's two worlds (therapy and software) meet in the same restraint: nothing shouts, colour
is used sparingly and only where it means something, and the reader is never rushed. When a
choice is ambiguous, pick the calmer one.

Three habits carry most of that feeling:

- **Space is the main material.** Generous vertical rhythm between sections, wide line
  spacing in Persian, a comfortable measure. Crowding reads as anxious.
- **Colour is an accent, not a surface.** The page is dark navy; the blue, teal and violet
  appear as glows, borders and a single gradient button — never as large filled blocks.
- **Motion is a whisper.** Slow drifting blobs, a gentle fade-in, a light press effect. Any
  animation that draws the eye away from reading is wrong here.

## Tokens

Define these once on `:root` and use them everywhere. Never write a raw hex value in a rule —
if a colour is needed that isn't here, add it as a token so it can be changed in one place.
These come from the Maqzino app's `Color.kt`, so the site and the app stay one family.

```css
:root {
  /* surfaces */
  --bg-top: #0B1020;          /* page gradient, top */
  --bg-bottom: #1B1740;       /* page gradient, bottom */
  --surface: #141A2E;         /* solid card, when glass is not appropriate */

  /* accents */
  --primary: #6C8CFF;         /* links, focus rings, the glow */
  --secondary: #58C4B4;       /* rare second accent (teal) */
  --tertiary: #A78BFA;        /* gradient end, violet */

  /* blobs behind the glass */
  --blob-a: #6C8CFF;
  --blob-b: #58C4B4;
  --blob-c: #A78BFA;

  /* text */
  --text: #E4E8F5;            /* body and headings */
  --text-muted: #B9C0D8;      /* captions, meta, secondary lines */
  --outline: #6E7796;
  --outline-soft: #2A3352;

  /* glass */
  --glass-tint: rgb(255 255 255 / 0.12);
  --glass-border-from: rgb(255 255 255 / 0.40);
  --glass-border-to: rgb(255 255 255 / 0.08);
}
```

**Light theme** (`:root[data-theme="light"]`, and the same values under
`@media (prefers-color-scheme: light)`): `--bg-top: #F7F9FF`, `--bg-bottom: #E6ECFB`,
`--surface: #FFFFFF`, `--primary: #3D5AFE`, `--secondary: #00897B`, `--tertiary: #6C4BC4`,
blobs `#8FA6FF` / `#7FD8CB` / `#C3AEFF`, `--text: #1A1F2E`, `--text-muted: #454B5E`,
`--outline: #757C90`, `--outline-soft: #C5CAD8`, `--glass-tint: rgb(255 255 255 / 0.60)`,
border from `rgb(255 255 255 / 0.60)` to `rgb(0 0 0 / 0.10)`.

Dark is the site's home ground and what to design for first; light must still be checked
before anything is called finished, because a visitor's phone decides which one they see.

### Spacing, radius, shadow

One scale, used for everything — mixed ad-hoc values are what make a page look homemade.

```css
--space-1: 0.25rem; --space-2: 0.5rem;  --space-3: 0.75rem; --space-4: 1rem;
--space-6: 1.5rem;  --space-8: 2rem;    --space-12: 3rem;   --space-16: 4rem;
--space-24: 6rem;   /* between major sections on desktop */

--radius-sm: 0.75rem; --radius-md: 1.25rem; --radius-lg: 1.75rem; --radius-pill: 999px;
--shadow-glow: 0 0 40px -10px var(--primary);
--shadow-card: 0 20px 60px -30px rgb(0 0 0 / 0.7);
```

Sections breathe at `--space-24` on desktop and `--space-12` on phones. Cards use
`--radius-lg`; buttons and chips use `--radius-pill`.

## Typography

**Persian: Vazirmatn.** Chosen by the owner, same family as the Maqzino wordmark, SIL OFL so
it can be self-hosted freely. **He may replace it later**, so it is named in exactly one
place — the `--font-fa` token — and every rule refers to that token. Never hard-code a font
family anywhere else.

```css
--font-fa: "Vazirmatn", system-ui, sans-serif;
--font-en: "Vazirmatn", system-ui, sans-serif;  /* its Latin set is clean and keeps one voice */
```

Self-host the woff2 files in `assets/fonts/` with `font-display: swap`. Do not link Google
Fonts or any other outside service: a visitor in Iran may not reach it, and the page would
sit there with no text.

**Rules that matter for Persian, and are easy to get wrong:**

- **Never apply `letter-spacing` to Persian text.** Arabic-script letters join; spacing them
  out breaks the joins and produces something close to gibberish. If a heading needs air, use
  `word-spacing` or a larger size instead. Latin headings may take a small negative tracking.
- **Persian needs more line height than English.** Body text at `line-height: 1.9`, headings
  around `1.4`. The ascenders and descenders in Vazirmatn are tall; tight leading looks
  cramped and reads slowly.
- **Keep numerals consistent.** Pick Persian digits (۱۲۳) for Persian pages and Latin ones for
  English pages, and don't mix within a sentence. Version numbers, package names and anything
  copied from a store listing stay Latin in both languages.
- **Measure:** 60–75 characters per line (`max-width: 38rem` for body copy). Long lines are
  the fastest way to make a calm page tiring.

Type scale (fluid, so phones aren't shouted at):

```css
--step-0: clamp(1rem, 0.96rem + 0.2vw, 1.0625rem);      /* body */
--step-1: clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem);      /* card titles */
--step-2: clamp(1.6rem, 1.4rem + 1vw, 2.25rem);         /* section headings */
--step-3: clamp(2.2rem, 1.7rem + 2.4vw, 3.5rem);        /* hero name */
```

## Bilingual and RTL

The site is Persian and English with a switch. Persian is the primary language and the default
the visitor lands on.

- Set `<html lang="fa" dir="rtl">` and `lang="en" dir="ltr"`, and let the browser do the
  mirroring. That only works if the CSS never fights it.
- **Use logical properties, not physical ones.** `margin-inline-start`, `padding-inline`,
  `inset-inline-start`, `border-inline-end`, `text-align: start`. A single `margin-left` will
  silently break the English page or the Persian one, and the bug is hard to see.
- Physical directions stay physical only when they truly are: `top`, `bottom`, box shadows,
  gradient angles.
- Icons that imply direction (arrows, chevrons) must flip: `[dir="rtl"] .icon-arrow
  { transform: scaleX(-1); }`. A "next" arrow pointing the wrong way is the classic tell of a
  site that was translated rather than designed bilingual.
- The Maqzino intro sweep runs in reading direction (fa right→left, en left→right); any
  similar effect on the site follows the same rule.
- Keep the two languages as **separate, complete pages** (`/` and `/en/`) rather than swapping
  strings with JavaScript. It keeps the markup honest, the pages indexable, and it means a
  broken script can't leave a visitor with empty text.
- Persian and English copy are written, not translated word for word. The Persian is the
  owner's own voice; the English says the same thing the way an English reader expects.

## Components

### Background

A vertical gradient from `--bg-top` to `--bg-bottom`, fixed, with two or three large blurred
blobs drifting slowly behind everything (`filter: blur(80px)`, opacity around 0.35, a 30–60s
`transform` loop). They belong in a `position: fixed` layer with `pointer-events: none` and
`z-index: -1` so they never interfere with reading or clicking.

### Glass card

The signature surface, straight out of the app:

```css
.card {
  background: var(--glass-tint);
  backdrop-filter: blur(20px) saturate(140%);
  border: 1px solid transparent;
  border-radius: var(--radius-lg);
  background-clip: padding-box;
  box-shadow: var(--shadow-card);
}
```

The 1px gradient border (from `--glass-border-from` to `--glass-border-to`, lit from the top)
is what sells the glass. Do it with a `::before` inset ring or a `border-image`; a flat grey
border looks cheap next to it. Always give the card a solid-ish fallback for browsers without
`backdrop-filter` — without it the text can land on the raw gradient and lose contrast.

### Primary button

Horizontal gradient `--primary` → `--tertiary`, pill radius, `--shadow-glow`, and a press
effect that shrinks it slightly (`transform: scale(0.97)`) — the app's "bouncy" feel. One
primary button per view; everything else is a quiet outline or text link.

### Sections

Every section is a `<section>` with a heading, a comfortable max width (`72rem` for the
layout, `38rem` for running text), and the same vertical rhythm. The page order is settled in
`docs/handoff.md` §2: hero, about, works, contact.

## Motion and accessibility

These are not decoration — they decide whether the site is usable by people the owner works
with professionally.

- Honour `prefers-reduced-motion: reduce`: stop the blobs, drop the entrance fades, keep only
  instant state changes. Vestibular sensitivity is common and the site loses nothing.
- Body text must clear **4.5:1** contrast, large text 3:1. `--text-muted` on the dark gradient
  is close to the line — check it rather than assuming, and never put muted text on glass over
  a bright blob.
- Every interactive element keeps a visible focus ring (`outline: 2px solid var(--primary);
  outline-offset: 3px`). Don't remove outlines.
- Real landmarks (`header`, `nav`, `main`, `footer`), headings in order, `alt` text on every
  image in the page's own language, and a skip link.
- Tap targets 44px minimum. The owner's audience is largely on phones.

## Things that must stay swappable

The site will outlive several of its current facts. Keep each of these in exactly one place:

- **The domain.** It will be bought, but the name and the TLD may both change (`.ir`, `.com`,
  `.info`). Every internal link is relative; canonical and Open Graph URLs come from one
  constant at the top of the head partial. Nothing else mentions a domain.
- **The font**, as described above — `--font-fa` only.
- **Store links.** Maqzino is queued at Cafe Bazaar and Myket and the URLs may not resolve
  yet. Check that a link actually loads before shipping it; a dead store button is worse than
  no button.
- **The personal logo.** A mark for Peiman himself still has to be designed — monoline,
  rounded caps, symmetric, the same family as the Maqzino V2 brain so his works read as one
  studio. Until it exists, leave the slot rather than substituting the Maqzino mark; they are
  not the same thing and mixing them confuses both.

## Build and workflow

Hand-written HTML and CSS, no build step, no framework, no npm dependency in the shipped page.
JavaScript only where it earns its place (theme toggle, gallery), written so the page still
works without it. This is a portfolio that must load fast on a phone on a slow connection and
still be editable by hand in three years.

Preview with `node tools/preview/shot.mjs <page> [--full] [--phone] [--light]`, which renders
the page in headless Chrome and writes a PNG to `.preview/`. Look at the result at phone
width and desktop width, in both themes, before showing the owner anything.

The owner reviews locally and uploads to GitHub himself. Never create a `maqzino-privacy/`
folder in this repo — it would shadow the live privacy page the app stores depend on.
