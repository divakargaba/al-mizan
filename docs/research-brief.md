# Shared brief for knowledge-base writers

You are acting as the `deep-researcher` agent for the Al-Mizan project (repo root: /home/user/al-mizan).

Read first, in full: `CLAUDE.md`, `.claude/agents/deep-researcher.md`, `src/data/types.ts`.

## Ground rules
- Verify citations with WebSearch/WebFetch (museum records, DOI pages, sunnah.com, publisher pages). Do not cite from memory alone. If web tools fail, fall back to what you know with careful hedged phrasing and say so in your report.
- Accuracy outranks the brief. The project argues that the Quran's text has been transmitted with exceptional fidelity; make that case with what the sources really support. Where the brief overstates (examples below), write the accurate version and explain in `scholarlyNuance`.
- Keep three layers distinct: (a) what manuscripts/stemmatics demonstrate, (b) what Muslim tradition reports, (c) theological claims. Never attribute (c) to secular academics.
- Steelman objections fairly; refute arguments, not people. Respectful toward Sunni, Shi'i and non-Muslim scholars alike.
- Full prose. No placeholders, no "...", no TODO/TBD. Respect the minimum lengths in the type comments. Every `Source.detail` says what the source establishes.
- Arabic must be accurate, fully vocalized where the type says so. For Quran verses copy the standard Hafs text precisely (fetch from api.alquran.cloud or quran.com if reachable; if unsure of exact tashkeel, quote a shorter span you are sure of).
- Quiz questions: exactly 4 options, one correct, distractors plausible; explanation >= 80 chars.
- IDs: unique, kebab-case, prefixed as told in your task.
- Write ONLY the files assigned to you. Do not touch package.json, src/app, src/components, src/lib, other data files, and do not run git, npm install or npm run build.
- When done run `npx tsc --noEmit -p .` and fix any errors in YOUR files (ignore errors elsewhere; other agents are working concurrently).
- Final report (short): files written; list of brief claims you corrected and why; anything you could not verify.

## Known corrections to brief claims (apply these; verify details)
- Birmingham Mingana Islamic Arabic 1572a: C-14 dates the PARCHMENT to 568–645 CE (95.4%); the writing may be somewhat later. Two folios with parts of surahs 18–20; same codex as BnF Arabe 328c. It does NOT contain Q 9:128–129.
- Topkapi (H.S. 32) and the Samarkand/Tashkent codex are not 7th-century autograph copies of Uthman; specialists date them to roughly the late 1st–2nd century AH (8th–early 9th c. CE). Present them as early Kufic witnesses, not as "Uthman's own".
- Tübingen Ma VI 165: C-14 649–675 CE (95.4%).
- The Zuhayr inscription (24 AH) is a dated Arabic graffito mentioning the death of Umar; it is not a Quranic quotation. Its value: dated Arabic script with consonantal dotting in the Prophet's generation.
- Sidky, "On the Regionality of Qur'anic Codices", JIQSA 5 (2020): stemmatic study of the regional (Syrian, Medinan, Basran, Kufan) codices; he does not argue the regional variants are "ahruf from the Prophet" — that is a traditional interpretation. The Q 2:132 variant is wa-waṣṣā / wa-awṣā.
- Van Putten, "'The Grace of God' as evidence for a written Uthmanic archetype", BSOAS 82/2 (2019). Van Putten also argues things the tradition does not (e.g. about the original phonology and that the reading traditions are not purely oral); do not misrepresent him.
- Sadeghi: "The Chronology of the Qur'ān: A Stylometric Research Program", Arabica 58 (2011); Sadeghi & Bergmann, Arabica 57 (2010); Sadeghi & Goudarzi, "Ṣan'ā' 1 and the Origins of the Qur'ān", Der Islam 87 (2012).
- Fasl al-Khitab is by Mirza Husayn al-Nuri al-Tabarsi (d. 1320/1902), not the classical exegete al-Tabrisi.
- Stemmatics shows a single written archetype with high probability; say "demonstrates"/"strong evidence", not "mathematically proves 100%".
