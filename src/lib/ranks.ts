export interface Rank {
  id: string;
  name: string;
  arabic: string;
  meaning: string;
  minXp: number;
}

export const RANKS: Rank[] = [
  { id: "talib", name: "Talib", arabic: "طالب", meaning: "Seeker of knowledge", minXp: 0 },
  { id: "katib", name: "Katib", arabic: "كاتب", meaning: "Scribe", minXp: 300 },
  { id: "qari", name: "Qari'", arabic: "قارئ", meaning: "Reciter", minXp: 900 },
  { id: "muhaqqiq", name: "Muhaqqiq", arabic: "محقّق", meaning: "Critical verifier", minXp: 2000 },
  { id: "hafiz", name: "Hafiz al-Mizan", arabic: "حافظ الميزان", meaning: "Guardian of the Balance", minXp: 3600 },
];

export function rankForXp(xp: number): { rank: Rank; next: Rank | null; progress: number } {
  let rank = RANKS[0] as Rank;
  let next: Rank | null = null;
  for (let i = 0; i < RANKS.length; i++) {
    const r = RANKS[i] as Rank;
    if (xp >= r.minXp) {
      rank = r;
      next = RANKS[i + 1] ?? null;
    }
  }
  const progress = next ? (xp - rank.minXp) / (next.minXp - rank.minXp) : 1;
  return { rank, next, progress: Math.max(0, Math.min(1, progress)) };
}

export const XP = {
  quizCorrect: 15,
  proofRead: 10,
  scribeCorrect: 8,
  debateWin: 60,
  debateComposureBonus: 10,
  reviewCorrect: 10,
  examPass: 250,
} as const;
