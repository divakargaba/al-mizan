/** SM-2-style spaced repetition, reduced to a correct/incorrect signal. */
export interface SrsCard {
  reps: number;
  intervalDays: number;
  ease: number;
  /** ISO day (YYYY-MM-DD) on which the card is next due. */
  due: string;
}

export function dayKey(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function addDays(day: string, n: number): string {
  const d = new Date(`${day}T12:00:00`);
  d.setDate(d.getDate() + n);
  return dayKey(d);
}

export function dayDiff(a: string, b: string): number {
  const ms = new Date(`${b}T12:00:00`).getTime() - new Date(`${a}T12:00:00`).getTime();
  return Math.round(ms / 86_400_000);
}

export function review(card: SrsCard | undefined, correct: boolean, today: string): SrsCard {
  const prev: SrsCard = card ?? { reps: 0, intervalDays: 0, ease: 2.3, due: today };
  if (!correct) {
    return { reps: 0, intervalDays: 0, ease: Math.max(1.3, prev.ease - 0.2), due: today };
  }
  const reps = prev.reps + 1;
  const intervalDays =
    reps === 1 ? 1 : reps === 2 ? 3 : Math.max(4, Math.round(prev.intervalDays * prev.ease));
  return { reps, intervalDays, ease: Math.min(2.8, prev.ease + 0.05), due: addDays(today, intervalDays) };
}

export function isDue(card: SrsCard | undefined, today: string): boolean {
  return card !== undefined && card.due <= today;
}
