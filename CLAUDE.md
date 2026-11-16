# Al-Mizan (الميزان) — Project Brain

Interactive platform on the transmission history and textual integrity of the Quran:
proofs, manuscripts, qira'at, and a 24-entry critique/refutation encyclopedia, with
gamified learning. Next.js 15 (App Router) · React 19 · TypeScript strict · Tailwind v4 ·
Framer Motion · Zustand.

## Commands

- `npm run dev` — dev server
- `npm run typecheck` — `tsc --noEmit` (must be clean)
- `npm run audit:kb` — knowledge-base completeness audit (must exit 0)
- `npm run build` — production build (must be clean)

## TypeScript rules

- `strict` + `noUncheckedIndexedAccess`. No `any`, no `@ts-ignore`, no non-null `!` on data lookups — narrow instead.
- All knowledge-base entries conform to `src/data/types.ts`. Change the type first, then the data.
- Data modules are pure: `export const x: Type[] = [...]`. No logic, no side effects, no React.
- Components are client components only when they need state/effects; pages stay thin.
- Imports use the `@/` alias.

## Data partitioning (anti-truncation)

- **Never more than 4–5 deep scholarly entries per file.** Refutations are one entry per file
  in `src/data/refutations/entries/rNN.ts`; the four category files only aggregate.
- Each proof pillar file holds 4 proofs. Timeline is split into `timeline/part-*.ts` and
  aggregated by `timeline.ts`.
- Every entry is written in full. No `TODO`, `TBD`, "coming soon", lorem ipsum, or `...` elisions.
  The audit script fails the build on these.
- `src/data/index.ts` is the only import surface for the UI.

## Citation & verification standards

- Never cite from memory alone. Shelfmarks, radiocarbon ranges, hadith numbers, journal
  volume/year/pages must be checked against a source (museum record, DOI page, sunnah.com).
- Hadith: collection + number (sunnah.com numbering), plus the grading when it is not in the
  two Sahihs. Weak or disputed reports are labelled as such — never presented as sound.
- Manuscripts: holding institution + shelfmark; distinguish the date of the **parchment**
  (C-14) from the date of the **writing**; give the lab's stated confidence interval.
- Academic work: author, venue, year. Report what the author actually argues, including the
  parts that do not help the preservation case. Do not attribute traditional theological
  conclusions to academics who do not hold them.
- Every proof and refutation has a `scholarlyNuance` field stating the limits of the evidence
  and live specialist disagreements. Steelman objections must be recognisable to their proponents.
- Distinguish clearly: (a) what manuscripts and stemmatics show (a single written archetype,
  mid-7th century, transmitted with high stability), (b) what the Muslim tradition reports
  about the period before it, and (c) theological claims. Do not present (c) as (a).
- Respectful tone toward all traditions and toward critics; refute arguments, not people.

## Arabic / RTL typography

- Quranic text: `font-quran` (Amiri Quran). Unpointed rasm and scholarly Arabic: `font-arabic`
  (Scheherazade New). Always set `dir="rtl"` and `lang="ar"` on Arabic elements.
- Tashkeel must never clip: Arabic blocks use `leading-[2.2]` or looser and vertical padding;
  never `overflow-hidden` or `truncate` on a vocalized line; never `letter-spacing` on Arabic.
- Mixed-direction lines wrap the Arabic run in `<bdi>` or the `<Arabic>` component.
- The undotted rasm is **derived** by `src/lib/rasm.ts` from `dottedSkeleton`; do not hand-type
  dotless code points in data files.
- Fonts are self-hosted via `@fontsource/*` (no build-time network dependency).
  UI font: Inter. Metrics, folio IDs, dates: JetBrains Mono (`font-mono`).

## UI

- Two themes via `data-theme` on `<html>`: Scholarly Obsidian (dark, default) and Parchment (light).
  Use the CSS variables in `globals.css` (`--bg`, `--surface`, `--ink`, `--gold`, …), not raw hex.
- All progress (XP, rank, streak, badges, SRS intervals, defeated critiques) lives in the Zustand
  store `src/store/progress.ts`, persisted to `localStorage`. Guard against hydration mismatch.
- Audio (everyayah.com) is an enhancement: any failure degrades silently to a "audio unavailable" state.

## Subagents

- `deep-researcher` — verifies citations and writes data entries.
- `gamification-engineer` — game loops, XP economy, SRS, debate arena.
- `ui-systems-architect` — Next.js views, SVG visualisations, themes, audio hooks.
