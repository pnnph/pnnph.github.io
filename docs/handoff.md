# Handoff from the Maqzino project (2026-09-17)

This file carries over everything the portfolio site needs from the Maqzino app work,
so a new session can continue without the old conversation.

Original locations:
- Maqzino app repo: `D:\Maqzino Project\Android App\1` (git, branch `main`)
- Brand/ad package: `D:\Maqzino Project\Android App\Maqzino-brand\`
- Brand generators (single geometry source): `D:\Maqzino Project\Android App\1\tools\brand\`
- Do **not** touch `D:\Maqzino Project\Android App\3d brain` (the owner's separate web
  project; standing instruction).

---

## 1. The owner

- **Name:** Peiman Asgari / پیمان عسگری. GitHub: `pnnph`.
- **Emails:**
  - `pnnph1991@gmail.com` is the account email, used for the privacy policy and store accounts.
  - `peimanasgari@gmail.com` is the address on the Maqzino in-app Contact screen.
  - Ask which one the site should show publicly.
- **Language and rules:** writes Persian. Wants proposals and approval before every action,
  and step-by-step guidance for anything he does himself (store panels, GitHub web UI).
- **Location:** Iran. Google Play developer registration is unavailable to him (Iran is not
  a supported location, and he has no international payment). Don't suggest workarounds
  such as virtual cards, someone else's card or a fake address.
- **Domain:** `pnnph.ir` does **not** exist yet ("هنوز ساخته نشده").

---

## 2. This project: the portfolio site

**Requested so far:** a portfolio site with a "My works" section (کارهای من), focused on
Maqzino. The owner said he will describe what he wants in this project.

**Earlier proposal from the Maqzino session.** The owner answered "let's do the app first",
so none of this is approved:

- **Hosting:** GitHub Pages user site. The repo must be named `pnnph.github.io`, which gives
  the URL `https://pnnph.github.io`. On 2026-09-15 that URL returned 404, so the name was free.
- **Sections:** hero (name, title, one-line intro), about, works (Maqzino as the large
  featured card plus smaller cards), contact.
- **Maqzino page:** a dedicated `/maqzino/` page with description, screenshots, store
  buttons, Z-Anatomy credit and the privacy link.
- **Build:** hand-written HTML/CSS/JS with no build tools; light, fast, easy to update.
- **Language and theme:** Persian and English with a switch, correct RTL, light and dark.
- **Look:** matches Maqzino: glass, dark gradient, glowing blobs (see §5).
- **Workflow:** preview locally, then the owner uploads via the GitHub web UI.

**Open questions the owner has not answered yet:**
1. Job title line under his name (e.g. «توسعه‌دهندهٔ اندروید», «طراح و توسعه‌دهنده»).
2. A 2–3 sentence bio, or notes for you to write one.
3. Works besides Maqzino, each with name, one-liner and image or link.
4. Public email: `pnnph1991@gmail.com` or `peimanasgari@gmail.com`. Social links: Telegram,
   Instagram, LinkedIn, GitHub?
5. A personal photo, or logo only?
6. Does he own or plan to buy `pnnph.ir`? It can later point at GitHub Pages through a CNAME.

---

## 3. Publishing constraints

- **Keep the privacy URL working.** The Maqzino privacy policy is live at
  **`https://pnnph.github.io/maqzino-privacy/`**, served from the public repo
  `pnnph/maqzino-privacy` (single `index.html` at the root, Pages from `main`/root).
  Both stores have this URL. A user site at `pnnph.github.io` does not break it, because
  project repos still serve under `/<repo>/`. Never create a `maqzino-privacy/` folder
  inside the user-site repo; it would shadow the project site.
- **How the owner uploads:**
  1. On github.com: New repository → name → Public → Add README.
  2. Add file → Upload files (drag folders to keep structure) → Commit.
  3. Settings → Pages → Deploy from a branch → `main` / `/ (root)` → Save.
  4. The site is live after 1–2 minutes.
- **Tools:** `gh` CLI is not installed. Pushing with git is possible only if the owner sets
  up credentials himself; don't handle tokens.
- **Check from outside Iran:** after publishing, verify the URL with a fetch. The Iranian
  hosts the owner might use can block foreign traffic, and Play reviewers need access.

**The site is live at `https://pnnph.github.io` (published 2026-09-21).**

**Follow-ups in the Maqzino app now that the site is live:**
- `app/src/main/java/ir/pnnph/maqzino/core/AppConfig.kt` → `WEBSITE_URL` currently points
  to the privacy page as a stopgap (commit `50aeb56`). Switch it to the site.
- Cafe Bazaar developer profile: the website fields were left empty. Add the site URL there.

---

## 4. Maqzino facts (for the works section and the Maqzino page)

**What it is:** an interactive 3D atlas of the human brain for Android. Package
`ir.pnnph.maqzino`, version 1.0.0 (versionCode 1), minSdk 26, targetSdk 35. Built with
Kotlin, Jetpack Compose, Hilt, Room, DataStore and SceneView/Filament.

**Features (verified in the app):**
- 3D brain inside a translucent body, with **21 regions and 38 tappable structures**
- Tap to select, with English and Persian names and English pronunciation playback
- Info panel with Latin, English and Persian names, pronunciation, function, explanation,
  and four scientific angles: evolutionary, biological, neurological, anatomical
- Fade, hide, fade others, and isolate (only this) — see deep structures like the amygdala
  and hippocampus
- Explode mode: a slider pulls the brain apart piece by piece
- Search, bookmarks, reading list, studied markers and study time
- Persian and English UI with full RTL; light and dark themes
- Fully offline: the INTERNET permission is removed, there are no ads or analytics, and
  optional local accounts can be deleted in-app
- 1.5 s brand intro animation on launch

**Stores:**

| Store | Status | Expected listing URL (once approved) |
|---|---|---|
| Cafe Bazaar | submitted 2026-09-16, still queued — URL returned 404 on 2026-09-21 | `https://cafebazaar.ir/app/ir.pnnph.maqzino` |
| Myket | **published** — verified live 2026-09-21, linked from the site | `https://myket.ir/app/ir.pnnph.maqzino` |
| Google Play | not available (see §1) | — |

Check the URLs actually resolve before linking them.

**Privacy:** `https://pnnph.github.io/maqzino-privacy/`. The source copy is in
`reference/maqzino-privacy-index.html` (bilingual, dark/light). Its canonical source lives in
the app repo at `docs/privacy/index.html`.

**Required credit (CC BY-SA 4.0):** the 3D model is based on
[Z-Anatomy](https://www.z-anatomy.com/), derived from BodyParts3D. Suggested line:
- fa: «مدل سه‌بعدی بر پایهٔ پروژهٔ آزاد Z-Anatomy (مجوز CC BY-SA 4.0) ساخته شده است.»
- en: "3D model based on the open Z-Anatomy project (CC BY-SA 4.0)."

**Pending for the next app release (1.0.1):**
- category tabs fit on screen, full-width cards, drawer opens from the right in Persian
- info sheet no longer slides under the status bar, model preloading during the intro
- the versionCode must be bumped before uploading

### Store copy (approved and used in Bazaar/Myket)

- **Titles:** مغزینو / Maqzino.
- **Tagline** (Myket, max 26 chars, still empty there): «اطلس سه‌بعدی مغز انسان».
- **Short description:**
  - fa: «اطلس سه‌بعدی و تعاملی مغز انسان؛ لمس کنید و بشناسید»
  - en: "Interactive 3D atlas of the human brain — touch and learn"

**Full description (fa):**
```
مغزینو یک اطلس سه‌بعدی و تعاملی از مغز انسان است. مدل را بچرخانید، هر بخش را لمس کنید و دربارهٔ آن بخوانید.

• مدل سه‌بعدی مغز با ۲۱ ناحیه و ۳۸ ساختار قابل لمس
• توضیح هر ناحیه به زبان روان، از چهار زاویه: فرگشتی، زیستی، عصبی و آناتومیک
• محو، مخفی یا جدا کردن هر بخش، برای دیدن ساختارهای عمقی مثل هیپوکامپ
• حالت جداسازی اجزا: مغز را قطعه‌قطعه باز کنید
• شنیدن تلفظ انگلیسی نام هر ناحیه
• جستجو، نشان کردن نواحی و فهرست مطالعه
• دو زبانه: فارسی و انگلیسی، با پوستهٔ روشن و تیره
• کاملاً آفلاین؛ بدون نیاز به اینترنت و بدون تبلیغات
• حریم خصوصی: هیچ اطلاعاتی از گوشی شما خارج نمی‌شود

مناسب دانش‌آموزان، دانشجویان پزشکی و روان‌شناسی، و هر کسی که کنجکاو است بداند داخل سرش چه خبر است.

مدل سه‌بعدی بر پایهٔ پروژهٔ آزاد Z-Anatomy (مجوز CC BY-SA 4.0) ساخته شده است.
```

**Full description (en):**
```
Maqzino is an interactive 3D atlas of the human brain. Rotate the model, tap any part and read about it.

• 3D brain model with 21 regions and 38 tappable structures
• Clear explanations from four angles: evolutionary, biological, neurological and anatomical
• Fade, hide or isolate any part to reveal deep structures such as the hippocampus
• Explode mode: pull the brain apart piece by piece
• Hear the English pronunciation of every region
• Search, bookmarks and a reading list
• Persian and English, light and dark themes
• Fully offline — no internet needed, no ads
• Private: nothing ever leaves your phone

For students of medicine and psychology, and anyone curious about what goes on inside their head.

3D model based on the open Z-Anatomy project (CC BY-SA 4.0).
```

### Screenshots (`assets/maqzino/screenshots/`)

All are Persian UI, dark theme, with the status bar removed. They come in two sizes:
- `portrait-1x2/` is 1080×2160, uploaded to Bazaar.
- `portrait-9x16/` is 1080×1920 with a blurred side fill, uploaded to Myket.

| File | Shows |
|---|---|
| `maqzino-01.jpg` | Home: the full brain in the glass body, with the bottom action bar |
| `maqzino-02.jpg` | Left temporal lobe selected (green), with the name card and listen button |
| `maqzino-03.jpg` | Info panel: names, pronunciation, function, explanation, category tabs |
| `maqzino-04.jpg` | Left amygdala highlighted with "fade others" (glass brain) |
| `maqzino-05.jpg` | Explode mode at 100%, every piece separated |
| `maqzino-06.jpg` | Search for «لوب» with results |

Store upload order: 01, 02, 03, 04, 06, 05. Screenshot 03 predates the tab fix, so its
fourth tab (anatomical) is cut off. Retake it after 1.0.1 if it matters.

---

## 5. Brand system

**Mark (V2, chosen by the owner):**
- Style: symmetric two-hemisphere line brain, monoline with rounded caps; the owner
  referenced the ChatGPT icon's style.
- Detail: sulci sprout from the outline and curl inward; the central fissure is negative space.
- Colour: black `#111111` on white for the app icon, and white on the dark app background.
- The owner wants future pnnph works to share this style.

**Wordmark:**
- Text: «مغزینو» / "Maqzino".
- Font: Vazirmatn **Bold** v33.003 (SIL OFL 1.1), outlined to vector paths. The owner may
  buy a licensed font later, so the font must stay swappable.
- The generators in `tools/brand` rebuild everything with one command.

**Intro animation** (`assets/brand/animation/`, transparent, 1080×1080, 60 fps, 1.5 s, plays once):

| Time (s) | What happens |
|---|---|
| 0.00–0.60 | outline draws on from the fissure outward |
| 0.30–0.60 | sulci draw inward |
| 0.40–0.55 | wordmark fades in, dim (22%) |
| 0.50–1.15 | light sweep in reading direction (fa right→left, en left→right) |
| 1.15–1.50 | hold |

- `svg/` is animated SMIL SVG. It plays once and works directly on a web page, which makes
  it a good hero candidate.
- `webm/` is VP9 with alpha: tiny, and plays in Chrome, Firefox and Edge, but not Safari.
- The MOV (ProRes 4444) and the PNG sequences are **not** copied (≈35 MB). They are in
  `Maqzino-brand/animation/`.

**App palette (from `Color.kt` / `Theme.kt`):**

| Token | Dark | Light |
|---|---|---|
| background gradient top → bottom | `#0B1020` → `#1B1740` | `#F7F9FF` → `#E6ECFB` |
| primary | `#6C8CFF` | `#3D5AFE` |
| secondary | `#58C4B4` | `#00897B` |
| tertiary | `#A78BFA` | `#6C4BC4` |
| blobs A / B / C | `#6C8CFF` / `#58C4B4` / `#A78BFA` | `#8FA6FF` / `#7FD8CB` / `#C3AEFF` |
| glass tint | `#FFFFFF` @ 12% (`0x1F`) | `#FFFFFF` @ 60% (`0x99`) |
| glass border start → end | white 40% → white 8% | white 60% → black 10% |
| glow | `#6C8CFF` | `#3D5AFE` |
| onBackground / onSurface | `#E4E8F5` | `#1A1F2E` |
| onSurfaceVariant | `#B9C0D8` | `#454B5E` |
| surface | `#141A2E` | `#FFFFFF` |
| outline / outlineVariant | `#6E7796` / `#2A3352` | `#757C90` / `#C5CAD8` |

**UI language used in the app:**
- Glass cards: frosted blur, 1dp gradient border, large rounded corners (28dp sheets).
- Primary button: horizontal gradient primary→tertiary, soft glow, moving shimmer, and a
  press-shrink ("bouncy").
- Background: vertical gradient with slow drifting colour blobs.

`brand-kit/maqzino/README.md` holds the brand usage rules (clear space, minimum sizes, file formats).

---

## 6. Assets in this repo

```
brand-kit/maqzino/logo/svg/  maqzino-mark-{black,white}.svg, maqzino-lockup-{fa,en}-{black,white}.svg
brand-kit/maqzino/logo/png/  same as PNG at 512 / 1024 / 2048, transparent
brand-kit/maqzino/app-icon/  maqzino-store-icon.svg, -512.png, -1024.png (white tile)
brand-kit/maqzino/animation/ maqzino-{fa,en}-{black,white}: animated .svg and alpha .webm
brand-kit/pnnph/             Peiman's own mark, black and white, 32 to 1024
public/assets/brand/         the only two brand files the site serves: pnnph-mark.png, maqzino-icon.png
public/assets/maqzino/screenshots/phone/  see §4
reference/                   maqzino-privacy-index.html
```

The kits sit outside `public/` on purpose. Everything under `public/` is copied verbatim
into `out/` and published, so 2.9 MB that no page ever requested was being uploaded on
every deploy and was readable by anyone who guessed the path. Only two brand files are
actually loaded, and they live in `public/assets/brand/`. See `brand-kit/README.md`.

---

## 7. Useful things already built in the Maqzino repo

- **`tools/brand/cdp.mjs`**
  - A dependency-free headless Chrome driver over the DevTools protocol (Node 24 has
    built-in `WebSocket` and `fetch`).
  - Takes transparent screenshots and frame-by-frame exports.
  - Good for rendering site previews to PNG and checking them visually.
  - `chrome --headless --screenshot` alone did not wait for async content; the CDP
    script does.
- **`tools/brand/lib.mjs`:** HarfBuzz (`harfbuzzjs` 1.6.1) shaping, for correct Persian text
  → SVG paths.
- **`tools/brand/README.md`:** how to get Vazirmatn and ffmpeg, and rebuild everything.

---

## 8. Environment notes

- **This project lives at** `D:\All My Web sites\A-Langing Page\pnnph.github.io` (moved off the
  Desktop on 2026-09-18; the old Desktop copy was deleted by the owner).
- **OS and shells:** Windows 11, Git Bash and PowerShell.
  - Git Bash mangles `/sdcard`-style args, so set `MSYS_NO_PATHCONV=1` when passing
    device paths to adb.
  - A Bash heredoc with complex quoting failed once; writing a script file and running
    it was reliable.
- **Node and npm:** Node 24. npm registry reachable. Python is not installed.
- **Network:**
  - github.com downloads work.
  - gyan.dev failed TLS (revocation check offline); use GitHub (BtbN) builds for ffmpeg.
  - WebFetch runs from outside Iran, which is useful to confirm a published page is
    reachable internationally.
- **Browser preview:** the in-app Browser pane cannot drive local `file://` pages. Serve
  locally, e.g. `npx http-server`, or render with the CDP script.
- **Git:** there is no global identity; set it per repo (`git config user.name "Peiman Asgari"`, `git config user.email pnnph1991@gmail.com`). This repo already has it. Commit trailer used:
  `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`.
- **Phone** (for app screenshots only): Xiaomi/MIUI, adb serial `7a39bc8b`.
  - Input injection is blocked, so the owner taps; `exec-out screencap` works.
  - Fresh APK installs are blocked (updates work).
