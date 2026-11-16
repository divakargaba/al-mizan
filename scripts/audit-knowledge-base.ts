/**
 * Knowledge-base completeness audit. Run: `npx tsx scripts/audit-knowledge-base.ts`
 * Exits 0 only if every structural and content check passes.
 */
import * as kb from "../src/data/index";
import { sameRasm, stripVowels } from "../src/lib/rasm";

const errors: string[] = [];
const fail = (msg: string) => errors.push(msg);
const check = (cond: boolean, msg: string) => {
  if (!cond) fail(msg);
};

const PLACEHOLDER = /\b(TODO|TBD|FIXME|coming soon|lorem ipsum|placeholder)\b/i;
const ELISION = /(\.\.\.|…)\s*$/;

/** Walks every string in a value, reporting placeholders with their path. */
function scan(value: unknown, path: string): void {
  if (typeof value === "string") {
    if (PLACEHOLDER.test(value)) fail(`${path}: placeholder text → "${value.slice(0, 60)}"`);
    if (ELISION.test(value.trim())) fail(`${path}: ends with an elision → "…${value.slice(-40)}"`);
    if (value.trim().length === 0) fail(`${path}: empty string`);
  } else if (Array.isArray(value)) {
    value.forEach((v, i) => scan(v, `${path}[${i}]`));
  } else if (value && typeof value === "object") {
    for (const [k, v] of Object.entries(value)) scan(v, `${path}.${k}`);
  }
}

const minLen = (s: string, n: number, path: string) =>
  check(s.trim().length >= n, `${path}: ${s.trim().length} chars (minimum ${n})`);

function unique(ids: string[], label: string) {
  const seen = new Set<string>();
  for (const id of ids) {
    if (seen.has(id)) fail(`${label}: duplicate id "${id}"`);
    seen.add(id);
  }
}

function checkSources(sources: kb.Source[], path: string, min: number) {
  check(sources.length >= min, `${path}: ${sources.length} sources (minimum ${min})`);
  sources.forEach((s, i) => {
    minLen(s.citation, 6, `${path}[${i}].citation`);
    minLen(s.detail, 30, `${path}[${i}].detail`);
    if (s.url !== undefined) check(/^https:\/\//.test(s.url), `${path}[${i}].url: must be https`);
  });
}

function checkQuiz(quiz: kb.QuizQuestion[], path: string, min: number) {
  check(quiz.length >= min, `${path}: ${quiz.length} quiz questions (minimum ${min})`);
  quiz.forEach((q, i) => {
    const p = `${path}[${i}]`;
    check(q.options.length === 4, `${p}: ${q.options.length} options (need exactly 4)`);
    check(new Set(q.options).size === q.options.length, `${p}: duplicate options`);
    check(Number.isInteger(q.answerIndex) && q.answerIndex >= 0 && q.answerIndex < q.options.length, `${p}: answerIndex out of range`);
    minLen(q.prompt, 20, `${p}.prompt`);
    minLen(q.explanation, 80, `${p}.explanation`);
  });
}

/* ------------------------------- Refutations ------------------------------ */

check(kb.refutations.length >= 24, `refutations: ${kb.refutations.length} (minimum 24)`);
unique(kb.refutations.map((r) => r.id), "refutations");
const numbers = kb.refutations.map((r) => r.number).sort((a, b) => a - b);
for (let n = 1; n <= 24; n++) check(numbers.includes(n), `refutations: critique number ${n} is missing`);

const perCategory: Record<string, number> = {};
for (const r of kb.refutations) {
  const p = `refutation ${r.id}`;
  perCategory[r.category] = (perCategory[r.category] ?? 0) + 1;
  minLen(r.title, 10, `${p}.title`);
  minLen(r.eraOrOrigin, 10, `${p}.eraOrOrigin`);
  minLen(r.steelmanObjection, 200, `${p}.steelmanObjection`);
  minLen(r.coreRefutationSummary, 200, `${p}.coreRefutationSummary`);
  minLen(r.scholarlyNuance, 150, `${p}.scholarlyNuance`);
  check(r.stepByStepBreakdown.length >= 3 && r.stepByStepBreakdown.length <= 5, `${p}: ${r.stepByStepBreakdown.length} steps (need 3–5)`);
  r.stepByStepBreakdown.forEach((s, i) => {
    minLen(s.heading, 8, `${p}.step[${i}].heading`);
    minLen(s.analysis, 200, `${p}.step[${i}].analysis`);
  });
  checkSources(r.primarySources, `${p}.primarySources`, 2);
  check(r.debateCounterCards.length >= 3, `${p}: ${r.debateCounterCards.length} debate cards (minimum 3)`);
  r.debateCounterCards.forEach((c, i) => {
    minLen(c.title, 5, `${p}.card[${i}].title`);
    minLen(c.text, 80, `${p}.card[${i}].text`);
    check([1, 2, 3].includes(c.strength), `${p}.card[${i}]: strength must be 1–3`);
  });
  checkQuiz(r.quiz, `${p}.quiz`, 2);
}
for (const c of kb.refutationCategories) {
  check((perCategory[c.id] ?? 0) >= 6, `refutations: category ${c.id} has ${perCategory[c.id] ?? 0} entries (minimum 6)`);
}
unique(kb.refutations.flatMap((r) => r.debateCounterCards.map((c) => c.id)), "debate cards");

/* --------------------------------- Proofs --------------------------------- */

check(kb.proofs.length >= 24, `proofs: ${kb.proofs.length} (minimum 24)`);
unique(kb.proofs.map((p) => p.id), "proofs");
for (const pillar of kb.pillars) {
  const list = kb.proofsByPillar[pillar.id];
  check(list.length >= 4, `pillar ${pillar.id}: ${list.length} proofs (minimum 4)`);
  for (const pr of list) {
    const p = `proof ${pr.id}`;
    check(pr.pillar === pillar.id, `${p}: pillar field "${pr.pillar}" does not match its file (${pillar.id})`);
    minLen(pr.title, 10, `${p}.title`);
    minLen(pr.summary, 80, `${p}.summary`);
    minLen(pr.scholarlyNuance, 150, `${p}.scholarlyNuance`);
    check(pr.body.length >= 3, `${p}: ${pr.body.length} body paragraphs (minimum 3)`);
    pr.body.forEach((b, i) => minLen(b, 200, `${p}.body[${i}]`));
    check(pr.keyFacts.length >= 3, `${p}: ${pr.keyFacts.length} key facts (minimum 3)`);
    pr.arabicQuotes.forEach((q, i) => {
      check(/[؀-ۿ]/.test(q.text), `${p}.arabicQuotes[${i}]: no Arabic script`);
      minLen(q.translation, 10, `${p}.arabicQuotes[${i}].translation`);
    });
    checkSources(pr.sources, `${p}.sources`, 2);
    checkQuiz(pr.quiz, `${p}.quiz`, 2);
  }
}

unique(
  [...kb.proofs.flatMap((p) => p.quiz.map((q) => q.id)), ...kb.refutations.flatMap((r) => r.quiz.map((q) => q.id))],
  "quiz questions",
);

/* -------------------------------- Timeline -------------------------------- */

check(kb.timeline.length >= 18, `timeline: ${kb.timeline.length} milestones (minimum 18)`);
unique(kb.timeline.map((t) => t.id), "timeline");
for (const t of kb.timeline) {
  const p = `timeline ${t.id}`;
  check(Number.isFinite(t.yearCE) && t.yearCE >= 500 && t.yearCE <= 2100, `${p}: implausible yearCE ${t.yearCE}`);
  minLen(t.description, 80, `${p}.description`);
  minLen(t.significance, 80, `${p}.significance`);
  checkSources(t.sources, `${p}.sources`, 1);
}
check(kb.timeline.some((t) => t.yearCE <= 612), "timeline: must begin with the first revelation (c. 610 CE)");
check(kb.timeline.some((t) => t.yearCE >= 2015), "timeline: must reach modern radiocarbon/stemmatic research");

/* --------------------------------- Qira'at -------------------------------- */

check(kb.interactiveVerses.length >= 15, `interactive verses: ${kb.interactiveVerses.length} (minimum 15)`);
unique(kb.interactiveVerses.map((v) => v.id), "interactive verses");
for (const v of kb.interactiveVerses) {
  const p = `verse ${v.id}`;
  check(v.variants.length >= 2, `${p}: ${v.variants.length} variants (minimum 2)`);
  check(v.surah >= 1 && v.surah <= 114 && v.ayah >= 1, `${p}: bad surah/ayah`);
  check(stripVowels(v.dottedSkeleton) === v.dottedSkeleton, `${p}: dottedSkeleton must not contain vowel marks`);
  check(v.invalidReadings.length >= 1, `${p}: needs at least one invalid reading for Scribe's Eye`);
  minLen(v.explanation, 80, `${p}.explanation`);
  minLen(v.contextTranslation, 10, `${p}.contextTranslation`);
  checkSources(v.sources, `${p}.sources`, 1);
  const variantIds = new Set(v.variants.map((x) => x.id));
  for (const [riwayah, id] of Object.entries(v.riwayat)) {
    check(variantIds.has(id), `${p}: riwayat.${riwayah} → unknown variant "${id}"`);
  }
  for (const x of v.variants) check(x.readers.length >= 1, `${p}: variant ${x.id} lists no readers`);
  if (v.kind === "skeletal") {
    check(typeof v.alternateSkeleton === "string" && v.alternateSkeleton.length > 0, `${p}: skeletal variant needs alternateSkeleton`);
    if (v.alternateSkeleton) check(!sameRasm(v.alternateSkeleton, v.dottedSkeleton), `${p}: alternateSkeleton has the same rasm as dottedSkeleton`);
  }
  for (const r of v.invalidReadings) minLen(r.whyInvalid, 40, `${p}.invalidReadings.whyInvalid`);
}

check(kb.qurra.length === 10, `qurra: ${kb.qurra.length} readers (need 10)`);
check(kb.qurra.reduce((n, q) => n + q.ruwat.length, 0) === 20, "qurra: need exactly 20 transmitters");
unique([...kb.qurra.map((q) => q.id), ...kb.qurra.flatMap((q) => q.ruwat.map((r) => r.id))], "readers/transmitters");
for (const q of kb.qurra) {
  check(q.chainToProphet.length >= 1, `qari ${q.id}: empty chainToProphet`);
  minLen(q.note, 80, `qari ${q.id}.note`);
}

/* ------------------------- Placeholder / truncation ------------------------ */

scan(kb.refutations, "refutations");
scan(kb.proofs, "proofs");
scan(kb.timeline, "timeline");
scan(kb.interactiveVerses, "interactiveVerses");
scan(kb.qurra, "qurra");

/* --------------------------------- Report --------------------------------- */

const words = (v: unknown): number =>
  typeof v === "string"
    ? v.split(/\s+/).filter(Boolean).length
    : Array.isArray(v)
      ? v.reduce<number>((n, x) => n + words(x), 0)
      : v && typeof v === "object"
        ? Object.values(v).reduce<number>((n, x) => n + words(x), 0)
        : 0;

console.log("Al-Mizan knowledge-base audit");
console.log("─".repeat(44));
console.log(`refutations        ${kb.refutations.length}  (${words(kb.refutations).toLocaleString()} words)`);
console.log(`proofs             ${kb.proofs.length}  (${words(kb.proofs).toLocaleString()} words)`);
for (const pillar of kb.pillars) console.log(`  · ${pillar.short.padEnd(14)} ${kb.proofsByPillar[pillar.id].length}`);
console.log(`timeline           ${kb.timeline.length}`);
console.log(`interactive verses ${kb.interactiveVerses.length}`);
console.log(`readers / ruwat    ${kb.qurra.length} / ${kb.qurra.reduce((n, q) => n + q.ruwat.length, 0)}`);
console.log(`quiz questions     ${kb.proofs.reduce((n, p) => n + p.quiz.length, 0) + kb.refutations.reduce((n, r) => n + r.quiz.length, 0)}`);
console.log(`debate cards       ${kb.refutations.reduce((n, r) => n + r.debateCounterCards.length, 0)}`);
console.log("─".repeat(44));

if (errors.length > 0) {
  console.error(`FAILED — ${errors.length} problem(s):`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}
console.log("PASSED — all checks green.");
