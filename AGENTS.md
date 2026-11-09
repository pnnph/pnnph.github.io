# AGENTS.md: working on pnnph.github.io with any AI assistant

Read this first. It is the short brief for Codex, Cursor, Gemini, Copilot, ChatGPT or any other coding
assistant. The full handoff is `CLAUDE.md` plus `docs/handoff.md` (§0 says where the site stands); publishing,
for a person, is `docs/publish.md` (Persian). The design system is `.claude/skills/site-design/` — plain
Markdown, read it before touching markup or CSS whatever tool you use.

## What this is
The personal portfolio of Peiman Asgari (GitHub `pnnph`), live at `https://pnnph.github.io`, English at `/` and
Persian at `/fa/`. Its featured work is Maqzino (مغزینو), a 3D brain atlas app. Next.js 16 + React 19 with
`output: "export"`: `npm run build` writes static files to `out/`, and every push to `main` publishes them
through GitHub Actions (`.github/workflows/deploy.yml`).

## Talk to the owner in Persian
- Replies, plans and summaries in Persian; code and commit messages in English.
- **Propose first and wait for a clear yes before every piece of work.**
- **Never push.** Build and preview locally, commit locally; the owner pushes with "Push origin" in GitHub
  Desktop.
- **Never handle credentials.** Give the owner instructions instead.

## Non-negotiable rules
1. Every string lives in `content/en.ts` and `content/fa.ts`, URLs in `content/site.ts`; colours, fonts and
   spacing only in `styles/tokens.css`.
2. `public/app/` is **built output** of the Maqzino web version. Its source is `web/` in the private repo
   `pnnph/maqzino-android` (`D:\Maqzino Project\Android App\1`), and that repo's `web/tools/publish.mjs`
   rewrites this folder. Never edit it here.
3. **Never create a folder named `maqzino-privacy` in this repo.** The Maqzino privacy page is the separate
   repo `pnnph/maqzino-privacy`, registered in both app stores; a same-named folder here would break it.
4. Support for Maqzino is the Hami Bash link (`site.support.hamibash`); never promise supporters anything.
5. Check both languages and both themes before showing a change: `npm run build`,
   `node tools/preview/serve.mjs out 4321`, `node tools/preview/shot.mjs http://localhost:4321/fa/ --phone`.
