import { pillars, proofsByPillar, refutations, timeline, type PillarId } from "@/data";
import { quizIdsByPillar } from "./questions";
import type { ProgressData } from "@/store/progress";

/** 0–1 mastery per pillar: half from proofs read, half from micro-quizzes answered correctly. */
export function pillarMastery(state: ProgressData): Record<PillarId, number> {
  const out = {} as Record<PillarId, number>;
  for (const p of pillars) {
    const proofIds = proofsByPillar[p.id].map((x) => x.id);
    const quizIds = quizIdsByPillar[p.id];
    const read = proofIds.filter((id) => state.readProofs.includes(id)).length;
    const right = quizIds.filter((id) => state.correctQuestions.includes(id)).length;
    const a = proofIds.length ? read / proofIds.length : 0;
    const b = quizIds.length ? right / quizIds.length : 0;
    out[p.id] = a * 0.5 + b * 0.5;
  }
  return out;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  earned: (s: ProgressData) => boolean;
}

export const BADGES: Badge[] = [
  { id: "first-step", title: "Bismillah", description: "Earn your first XP.", earned: (s) => s.xp > 0 },
  { id: "chronicler", title: "Chronicler", description: "Open every milestone on the timeline.", earned: (s) => s.visitedMilestones.length >= timeline.length },
  { id: "vault-reader", title: "Keeper of the Vault", description: "Read 12 proofs in the Proof Vault.", earned: (s) => s.readProofs.length >= 12 },
  { id: "six-pillars", title: "Six Pillars", description: "Reach 60% mastery in every pillar.", earned: (s) => Object.values(pillarMastery(s)).every((v) => v >= 0.6) },
  { id: "scribe-eye", title: "Scribe's Eye", description: "Score 100% in a Scribe's Eye session.", earned: (s) => s.scribeBest >= 100 },
  { id: "debater", title: "Munazir", description: "Defeat 6 critiques in the Debate Arena.", earned: (s) => s.defeatedCritiques.length >= 6 },
  { id: "all-critiques", title: "The Balance Holds", description: "Defeat all critiques in the Debate Arena.", earned: (s) => s.defeatedCritiques.length >= refutations.length },
  { id: "week-streak", title: "Seven Nights", description: "Keep a 7-day study streak.", earned: (s) => s.bestStreak >= 7 },
  { id: "certified", title: "Ijazah", description: "Pass the certification exam.", earned: (s) => s.examPassed },
];
