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

## 0. Where things stand (updated 2026-10-18)

**Live** at `https://pnnph.github.io` since 2026-09-21. Every push to `main` rebuilds and
publishes it through GitHub Actions (`docs/publish.md`). Claude commits locally, and the owner
publishes by pressing `Push origin` in GitHub Desktop.

**Built**, in English at `/` and in Persian at `/fa/`:
- Home: hero with the portrait, story, works (Maqzino is the featured card), contact and footer.
- `/maqzino/`: features, the four angles, ten phone screens in a gallery that enlarges them,
  the tech stack, store links, support, the privacy link and the Z-Anatomy credit.
- Support: the text and a button to `https://hamibash.com/maqzino` sit on the Maqzino page
  (gradient button) and on the home works card (quiet pill). The URL is
  `site.support.hamibash` in `content/site.ts`. The Hamibash page was checked from a
  signed-out browser and from outside Iran on 2026-10-19. Its one reward, "a cup of coffee",
  says plainly that nothing unlocks in the app, and it must stay that way: an in-app perk
  would break the stores' payment rules (see the message of commit `cd24ed7`). The page can
  take 20 seconds or more to load.
- `/blog/`, with one post so far, about where Maqzino came from.
- The CV in both languages (`public/assets/cv/`, built from `tools/cv/`), link-preview cards,
  sitemap, hreflang and a 404 page.
- The site opens in the light theme, and only the button switches it to dark.

**Stores:** both are live and both serve 1.0.1 (see §4).

**Still open:**
1. **Skills list.** `content/en.ts` still marks the skills under "My story" as a draft for the
   owner to check against reality.
2. **Other works** besides Maqzino (`docs/site-brief.md`).
3. **Cafe Bazaar developer profile:** nobody has confirmed that its website field now holds
   the site URL.
4. **Domain:** not bought yet. `docs/publish.md` covers what changes when it is.

Older conversations about this site survive on disk even though the Claude desktop app's
session list was lost in a reinstall on 2026-10-18. Claude's project memory says where they are.

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

The first request was a portfolio site with a "My works" section (کارهای من), focused on
Maqzino. It is a GitHub Pages user site: the repo is named `pnnph.github.io`, which gives the
URL `https://pnnph.github.io`.

The open questions carried over from the Maqzino session (title line, bio, other works,
public email and social links, photo, domain) were answered on 2026-09-18. The answers are
in `docs/site-brief.md`. The early idea of hand-written HTML with no build tools was dropped
for Next.js with a static export; `CLAUDE.md` says why. §0 lists what was built.

---

## 3. Publishing constraints

- **Keep the privacy URL working.** The Maqzino privacy policy is live at
  **`https://pnnph.github.io/maqzino-privacy/`**, served from the public repo
  `pnnph/maqzino-privacy` (single `index.html` at the root, Pages from `main`/root).
  Both stores have this URL. A user site at `pnnph.github.io` does not break it, because
  project repos still serve under `/<repo>/`. Never create a `maqzino-privacy/` folder
  inside the user-site repo; it would shadow the project site.
- **How the owner publishes:** by pressing `Push origin` in GitHub Desktop; GitHub Actions
  builds and deploys the site (Settings → Pages → Source → GitHub Actions). The one-time
  setup and the fallback of uploading by hand are in `docs/publish.md`.
- **Tools:** `gh` CLI is not installed. Don't push and don't handle tokens.
- **Check from outside Iran:** after publishing, verify the URL with a fetch. The Iranian
  hosts the owner might use can block foreign traffic, and Play reviewers need access.

**The site is live at `https://pnnph.github.io` (published 2026-09-21).**

**Follow-ups in the Maqzino app now that the site is live:**
- Done: `AppConfig.WEBSITE_URL` in the app points at `https://pnnph.github.io/` (app commit
  `409099a`, 2026-09-21). The privacy policy keeps its own URL, because the store forms
  register that one.
- Not confirmed: the website field in the Cafe Bazaar developer profile was empty. The site
  URL belongs there.

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

| Store | Status | Listing URL |
|---|---|---|
| Cafe Bazaar | **published**, serving 1.0.1, seen live 2026-10-18 and linked from the site | `https://cafebazaar.ir/app/ir.pnnph.maqzino` |
| Myket | **published**, serving 1.0.1 (updated 2026-09-24), linked from the site | `https://myket.ir/app/ir.pnnph.maqzino` |
| Google Play | not available (see §1) | — |

Both links live in `content/site.ts` (`site.maqzino`). Check that a URL actually resolves
before linking anything new.

**Privacy:** `https://pnnph.github.io/maqzino-privacy/`. The source copy is in
`reference/maqzino-privacy-index.html` (bilingual, dark/light). Its canonical source lives in
the app repo at `docs/privacy/index.html`.

**Required credit (CC BY-SA 4.0):** the 3D model is based on
[Z-Anatomy](https://www.z-anatomy.com/), derived from BodyParts3D. Suggested line:
- fa: «مدل سه‌بعدی بر پایهٔ پروژهٔ آزاد Z-Anatomy (مجوز CC BY-SA 4.0) ساخته شده است.»
- en: "3D model based on the open Z-Anatomy project (CC BY-SA 4.0)."

**Shipped in 1.0.1 (versionCode 2), now on both stores:**
- category tabs fit on screen, full-width cards, drawer opens from the right in Persian
- info sheet no longer slides under the status bar, model preloading during the intro

### Store copy (approved and used in Bazaar/Myket)

- **Titles:** مغزینو / Maqzino.
- **Tagline** (Myket, max 26 chars, live there): «اطلس سه‌بعدی مغز انسان».
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

### Screenshots

**On the site:** ten different screens of the English UI in the dark theme, cropped without
the status bar, as WebP in `public/assets/maqzino/screenshots/phone/maqzino-01…10.webp`. Their
captions are the `shots` list in `content/en.ts` and `content/fa.ts`, in the same order.

**In the stores:** the six screens below are no longer in this repo; the store sets live in
`Maqzino-brand/store-screenshots/`. All are Persian UI, dark theme, with the status bar
removed. They come in two sizes:
- `final/` is 1080×2160, uploaded to Bazaar.
- `final-myket/` is 1080×1920 with a blurred side fill, uploaded to Myket.

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
- **Git:** there is no global identity; set it per repo (`git config user.name "Peiman Asgari"`, `git config user.email pnnph1991@gmail.com`). This repo already has it. Commits end with the
  `Co-Authored-By:` trailer the current Claude session asks for (until 2026-10-17 that was
  `Claude Opus 5 <noreply@anthropic.com>`).
- **Phone** (for app screenshots only): Xiaomi/MIUI, adb serial `7a39bc8b`.
  - Input injection is blocked, so the owner taps; `exec-out screencap` works.
  - Fresh APK installs are blocked (updates work).
