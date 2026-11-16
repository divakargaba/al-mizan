"use client";

import { useEffect, useState } from "react";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { addDays, dayKey, review, type SrsCard } from "@/lib/srs";
import { XP } from "@/lib/ranks";

export type ThemeId = "obsidian" | "parchment";

export interface ProgressData {
  xp: number;
  streak: number;
  bestStreak: number;
  lastActiveDay: string | null;
  theme: ThemeId;
  /** Question ids answered correctly at least once. */
  correctQuestions: string[];
  readProofs: string[];
  defeatedCritiques: string[];
  srs: Record<string, SrsCard>;
  scribeBest: number;
  scribeRounds: number;
  examBest: number | null;
  examPassed: boolean;
  /** Timeline milestone ids the user has opened. */
  visitedMilestones: string[];
}

interface ProgressActions {
  setTheme: (theme: ThemeId) => void;
  addXp: (amount: number) => void;
  /** Records a quiz/review answer: updates SRS, XP (first correct only) and streak. */
  recordAnswer: (questionId: string, correct: boolean, xp?: number) => void;
  markProofRead: (proofId: string) => void;
  markDefeated: (refutationId: string, composureLeft: number) => void;
  recordScribe: (correct: number, total: number) => void;
  recordExam: (score: number, passed: boolean) => void;
  visitMilestone: (id: string) => void;
  reset: () => void;
}

const initial: ProgressData = {
  xp: 0,
  streak: 0,
  bestStreak: 0,
  lastActiveDay: null,
  theme: "obsidian",
  correctQuestions: [],
  readProofs: [],
  defeatedCritiques: [],
  srs: {},
  scribeBest: 0,
  scribeRounds: 0,
  examBest: null,
  examPassed: false,
  visitedMilestones: [],
};

function touch(state: ProgressData): Pick<ProgressData, "streak" | "bestStreak" | "lastActiveDay"> {
  const today = dayKey();
  if (state.lastActiveDay === today) {
    return { streak: state.streak, bestStreak: state.bestStreak, lastActiveDay: today };
  }
  const continued = state.lastActiveDay !== null && addDays(state.lastActiveDay, 1) === today;
  const streak = continued ? state.streak + 1 : 1;
  return { streak, bestStreak: Math.max(state.bestStreak, streak), lastActiveDay: today };
}

const add = (list: string[], id: string) => (list.includes(id) ? list : [...list, id]);

export const useProgress = create<ProgressData & ProgressActions>()(
  persist(
    (set) => ({
      ...initial,
      setTheme: (theme) => set({ theme }),
      addXp: (amount) => set((s) => ({ xp: s.xp + amount, ...touch(s) })),
      recordAnswer: (questionId, correct, xp = XP.quizCorrect) =>
        set((s) => {
          const first = correct && !s.correctQuestions.includes(questionId);
          return {
            ...touch(s),
            xp: s.xp + (first ? xp : correct ? Math.round(xp / 3) : 0),
            correctQuestions: correct ? add(s.correctQuestions, questionId) : s.correctQuestions,
            srs: { ...s.srs, [questionId]: review(s.srs[questionId], correct, dayKey()) },
          };
        }),
      markProofRead: (proofId) =>
        set((s) =>
          s.readProofs.includes(proofId)
            ? s
            : { ...touch(s), xp: s.xp + XP.proofRead, readProofs: [...s.readProofs, proofId] },
        ),
      markDefeated: (refutationId, composureLeft) =>
        set((s) => {
          const first = !s.defeatedCritiques.includes(refutationId);
          const gain = (first ? XP.debateWin : 15) + composureLeft * XP.debateComposureBonus;
          return {
            ...touch(s),
            xp: s.xp + gain,
            defeatedCritiques: add(s.defeatedCritiques, refutationId),
          };
        }),
      recordScribe: (correct, total) =>
        set((s) => ({
          ...touch(s),
          xp: s.xp + correct * XP.scribeCorrect,
          scribeRounds: s.scribeRounds + 1,
          scribeBest: Math.max(s.scribeBest, total > 0 ? Math.round((correct / total) * 100) : 0),
        })),
      recordExam: (score, passed) =>
        set((s) => ({
          ...touch(s),
          xp: s.xp + (passed && !s.examPassed ? XP.examPass : passed ? 40 : 10),
          examBest: s.examBest === null ? score : Math.max(s.examBest, score),
          examPassed: s.examPassed || passed,
        })),
      visitMilestone: (id) => set((s) => ({ visitedMilestones: add(s.visitedMilestones, id) })),
      reset: () => set((s) => ({ ...initial, theme: s.theme })),
    }),
    {
      name: "al-mizan-progress-v1",
      storage: createJSONStorage(() => localStorage),
      version: 1,
    },
  ),
);

/** True once the persisted state has been read on the client (avoids hydration mismatch). */
export function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}
