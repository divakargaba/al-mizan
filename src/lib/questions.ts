import {
  interactiveVerses,
  pillars,
  proofs,
  refutations,
  refutationCategories,
  timeline,
  type PillarId,
} from "@/data";
import { sample, shuffle } from "./random";

export type QuestionFormat = "quiz" | "dating" | "rebuttal" | "qiraat";

export interface McqItem {
  kind: "mcq";
  id: string;
  format: QuestionFormat;
  topic: string;
  prompt: string;
  /** Optional Arabic shown above the options. */
  arabic?: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  pillar?: PillarId;
}

export interface OrderItem {
  kind: "order";
  id: string;
  format: "ordering";
  topic: string;
  prompt: string;
  /** Presented (shuffled) order. */
  items: { id: string; label: string }[];
  /** Ids in the correct chronological order. */
  correctOrder: string[];
  explanation: string;
}

export type ExamItem = McqItem | OrderItem;

const pillarTitle = (id: PillarId) => pillars.find((p) => p.id === id)?.short ?? id;
const categoryTitle = (id: string) => refutationCategories.find((c) => c.id === id)?.short ?? id;

/** Every authored micro-quiz question in the knowledge base (stable ids; used by SRS). */
export const authoredQuestions: McqItem[] = [
  ...proofs.flatMap((p) =>
    p.quiz.map<McqItem>((q) => ({
      kind: "mcq",
      id: q.id,
      format: "quiz",
      topic: `Pillar · ${pillarTitle(p.pillar)}`,
      prompt: q.prompt,
      options: q.options,
      answerIndex: q.answerIndex,
      explanation: q.explanation,
      pillar: p.pillar,
    })),
  ),
  ...refutations.flatMap((r) =>
    r.quiz.map<McqItem>((q) => ({
      kind: "mcq",
      id: q.id,
      format: "quiz",
      topic: `Critique · ${categoryTitle(r.category)}`,
      prompt: q.prompt,
      options: q.options,
      answerIndex: q.answerIndex,
      explanation: q.explanation,
    })),
  ),
];

export const questionById = new Map(authoredQuestions.map((q) => [q.id, q]));

/** Proof/quiz ownership, for pillar mastery. */
export const quizIdsByPillar: Record<PillarId, string[]> = Object.fromEntries(
  pillars.map((p) => [p.id, proofs.filter((x) => x.pillar === p.id).flatMap((x) => x.quiz.map((q) => q.id))]),
) as Record<PillarId, string[]>;

function withShuffledOptions(
  base: Omit<McqItem, "options" | "answerIndex">,
  correct: string,
  distractors: string[],
  rng: () => number,
): McqItem {
  const options = shuffle([correct, ...distractors], rng);
  return { ...base, options, answerIndex: options.indexOf(correct) };
}

function datingQuestion(rng: () => number): McqItem | null {
  const pool = timeline.filter((m) => m.category === "manuscript" || m.category === "epigraphy" || m.category === "compilation");
  const [target] = sample(pool, 1, rng);
  if (!target) return null;
  const others = sample(
    timeline.filter((m) => m.id !== target.id && m.dateLabel !== target.dateLabel),
    3,
    rng,
  ).map((m) => m.dateLabel);
  if (others.length < 3) return null;
  return withShuffledOptions(
    {
      kind: "mcq",
      id: `gen-dating-${target.id}`,
      format: "dating",
      topic: "Manuscript & milestone identification",
      prompt: `Which date belongs to: “${target.title}”?`,
      explanation: `${target.dateLabel} (${target.hijriLabel}). ${target.significance}`,
    },
    target.dateLabel,
    others,
    rng,
  );
}

function rebuttalQuestion(rng: () => number): McqItem | null {
  const [target] = sample(refutations, 1, rng);
  if (!target) return null;
  const [card] = sample(target.debateCounterCards, 1, rng);
  if (!card) return null;
  const distractors = sample(
    refutations.filter((r) => r.id !== target.id && r.category !== target.category),
    3,
    rng,
  )
    .map((r) => sample(r.debateCounterCards, 1, rng)[0]?.title)
    .filter((t): t is string => typeof t === "string" && t !== card.title);
  if (distractors.length < 3) return null;
  return withShuffledOptions(
    {
      kind: "mcq",
      id: `gen-rebuttal-${card.id}`,
      format: "rebuttal",
      topic: "Critique rebuttal",
      prompt: `Objection: “${target.title}”. Which piece of evidence directly answers it?`,
      explanation: `${card.title}: ${card.text}`,
    },
    card.title,
    distractors,
    rng,
  );
}

const CONDITION_LABEL = {
  rasm: "It does not fit the Uthmanic rasm",
  nahw: "It breaks Arabic grammar",
  isnad: "It has no sound chain of transmission",
} as const;

function qiraatQuestion(rng: () => number): McqItem | null {
  const withInvalid = interactiveVerses.filter((v) => v.invalidReadings.length > 0);
  const [verse] = sample(withInvalid, 1, rng);
  const invalid = verse ? sample(verse.invalidReadings, 1, rng)[0] : undefined;
  if (!verse || !invalid) return null;
  const options = [
    CONDITION_LABEL.rasm,
    CONDITION_LABEL.nahw,
    CONDITION_LABEL.isnad,
    "None — it is a canonical reading",
  ];
  return {
    kind: "mcq",
    id: `gen-qiraat-${verse.id}-${invalid.transliteration}`,
    format: "qiraat",
    topic: "Qira'at rules",
    prompt: `At ${verse.reference}, why is the reading “${invalid.transliteration}” not accepted as canonical?`,
    arabic: invalid.arabic,
    options,
    answerIndex: options.indexOf(CONDITION_LABEL[invalid.violates]),
    explanation: invalid.whyInvalid,
  };
}

function orderingQuestion(rng: () => number, n: number): OrderItem | null {
  const picked = sample(timeline, timeline.length, rng).reduce<typeof timeline>((acc, m) => {
    if (acc.length < 4 && acc.every((x) => Math.abs(x.yearCE - m.yearCE) >= 8)) acc.push(m);
    return acc;
  }, []);
  if (picked.length < 4) return null;
  const sorted = [...picked].sort((a, b) => a.yearCE - b.yearCE);
  return {
    kind: "order",
    id: `gen-order-${n}-${sorted.map((m) => m.id).join("-")}`,
    format: "ordering",
    topic: "Compilation & transmission chronology",
    prompt: "Arrange these milestones from earliest to latest.",
    items: shuffle(picked, rng).map((m) => ({ id: m.id, label: m.title })),
    correctOrder: sorted.map((m) => m.id),
    explanation: sorted.map((m) => `${m.dateLabel} — ${m.title}`).join("  →  "),
  };
}

function unique<T extends { id: string }>(items: (T | null)[]): T[] {
  const seen = new Set<string>();
  const out: T[] = [];
  for (const it of items) {
    if (it && !seen.has(it.id)) {
      seen.add(it.id);
      out.push(it);
    }
  }
  return out;
}

export const EXAM_LENGTH = 20;
export const EXAM_PASS_RATIO = 0.8;

/** Builds a mixed-format certification exam. Deterministic for a given rng. */
export function buildExam(rng: () => number): ExamItem[] {
  const authored = sample(authoredQuestions, 9, rng);
  const generated = unique<ExamItem>([
    ...Array.from({ length: 6 }, () => datingQuestion(rng)).slice(0, 6),
    ...Array.from({ length: 6 }, () => rebuttalQuestion(rng)),
    ...Array.from({ length: 6 }, () => qiraatQuestion(rng)),
  ]);
  const dating = generated.filter((g) => g.format === "dating").slice(0, 3);
  const rebuttal = generated.filter((g) => g.format === "rebuttal").slice(0, 3);
  const qiraat = generated.filter((g) => g.format === "qiraat").slice(0, 3);
  const ordering = unique<ExamItem>([orderingQuestion(rng, 1), orderingQuestion(rng, 2)]);
  const core = [...dating, ...rebuttal, ...qiraat, ...ordering];
  const fill = sample(
    authoredQuestions.filter((q) => !authored.includes(q)),
    Math.max(0, EXAM_LENGTH - core.length - authored.length),
    rng,
  );
  return shuffle<ExamItem>([...authored, ...fill, ...core], rng).slice(0, EXAM_LENGTH);
}
