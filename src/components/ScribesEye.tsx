"use client";

import { useState } from "react";
import { CheckCircle2, Eye, RotateCcw, XCircle } from "lucide-react";
import { interactiveVerses, type InteractiveVerse } from "@/data";
import { createRng, sample, shuffle } from "@/lib/random";
import { toRasm } from "@/lib/rasm";
import { useProgress } from "@/store/progress";
import { Arabic } from "./Arabic";

const ROUNDS = 5;

interface Candidate {
  key: string;
  arabic: string;
  transliteration: string;
  canonical: boolean;
  note: string;
}

interface Round {
  verse: InteractiveVerse;
  candidates: Candidate[];
}

const CONDITION = {
  rasm: "Fails condition 1 — does not fit the Uthmanic rasm.",
  nahw: "Fails condition 2 — not sound Arabic grammar.",
  isnad: "Fails condition 3 — no sound, widely transmitted chain.",
} as const;

function buildRounds(seed: number): Round[] {
  const rng = createRng(seed);
  const pool = interactiveVerses.filter((v) => v.invalidReadings.length > 0);
  return sample(pool, ROUNDS, rng).map((verse) => ({
    verse,
    candidates: shuffle<Candidate>(
      [
        ...verse.variants.map((v) => ({
          key: v.id,
          arabic: v.arabic,
          transliteration: v.transliteration,
          canonical: true,
          note: `Canonical — read by ${v.readers.join(", ")}.`,
        })),
        ...verse.invalidReadings.map((r, i) => ({
          key: `${verse.id}-x${i}`,
          arabic: r.arabic,
          transliteration: r.transliteration,
          canonical: false,
          note: `${CONDITION[r.violates]} ${r.whyInvalid}`,
        })),
      ],
      rng,
    ),
  }));
}

export function ScribesEye() {
  const recordScribe = useProgress((s) => s.recordScribe);
  const [rounds, setRounds] = useState<Round[] | null>(null);
  const [index, setIndex] = useState(0);
  const [marks, setMarks] = useState<Record<string, boolean>>({});
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [done, setDone] = useState(false);

  const start = () => {
    setRounds(buildRounds(Date.now()));
    setIndex(0);
    setMarks({});
    setChecked(false);
    setScore({ correct: 0, total: 0 });
    setDone(false);
  };

  if (!rounds) {
    return (
      <section className="card p-6 text-center" aria-label="Scribe's Eye mini-game">
        <Eye className="mx-auto h-8 w-8 text-gold" aria-hidden />
        <h2 className="mt-2 text-xl font-semibold">Mini-game: Scribe’s Eye</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          You are shown a bare, undotted skeleton from the Uthmanic rasm. For each candidate vocalization decide whether
          it is a canonical reading — or whether it breaks one of Ibn al-Jazari’s three conditions: agreement with the
          rasm, sound Arabic, and a sound chain of transmission. A reading that merely <em>fits</em> the skeleton is not
          enough.
        </p>
        <button type="button" className="btn btn-gold mt-4" onClick={start}>
          Begin {ROUNDS} rounds
        </button>
      </section>
    );
  }

  if (done) {
    const pct = score.total ? Math.round((score.correct / score.total) * 100) : 0;
    return (
      <section className="card p-6 text-center" aria-label="Scribe's Eye result">
        <h2 className="text-xl font-semibold">Session complete</h2>
        <div className="mt-2 font-mono text-4xl font-semibold text-gold">{pct}%</div>
        <p className="mt-1 text-sm text-muted">
          {score.correct} of {score.total} judgements correct
        </p>
        <button type="button" className="btn btn-gold mt-4" onClick={start}>
          <RotateCcw className="h-4 w-4" aria-hidden /> Play again
        </button>
      </section>
    );
  }

  const round = rounds[index];
  if (!round) return null;
  const allMarked = round.candidates.every((c) => marks[c.key] !== undefined);

  const check = () => {
    const correct = round.candidates.filter((c) => marks[c.key] === c.canonical).length;
    setScore((s) => ({ correct: s.correct + correct, total: s.total + round.candidates.length }));
    setChecked(true);
  };

  const next = () => {
    if (index + 1 >= rounds.length) {
      recordScribe(score.correct, score.total);
      setDone(true);
      return;
    }
    setIndex(index + 1);
    setMarks({});
    setChecked(false);
  };

  return (
    <section className="card p-4 sm:p-6" aria-label="Scribe's Eye mini-game">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <Eye className="h-5 w-5 text-gold" aria-hidden /> Scribe’s Eye
        </h2>
        <span className="font-mono text-xs text-muted">
          round {index + 1}/{rounds.length} · {score.correct}/{score.total}
        </span>
      </div>

      <div className="mt-3 rounded-xl border border-line bg-surface-2 p-5 text-center">
        <div className="font-mono text-xs text-muted">
          {round.verse.reference} · {round.verse.surahName} · bare rasm
        </div>
        <Arabic as="div" className="text-6xl">
          {toRasm(round.verse.dottedSkeleton)}
        </Arabic>
        <p className="text-sm text-muted">“{round.verse.contextTranslation}”</p>
      </div>

      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {round.candidates.map((c) => {
          const mark = marks[c.key];
          const right = checked && mark === c.canonical;
          return (
            <li key={c.key} className={`rounded-xl border p-3 ${checked ? (right ? "border-emerald" : "border-crimson") : "border-line"}`}>
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm italic">{c.transliteration}</div>
                <Arabic variant="quran" className="text-3xl">
                  {c.arabic}
                </Arabic>
              </div>
              <div className="mt-2 flex gap-2">
                <button type="button" disabled={checked} className={`btn flex-1 text-xs ${mark === true ? "btn-active" : ""}`} onClick={() => setMarks({ ...marks, [c.key]: true })}>
                  Canonical
                </button>
                <button type="button" disabled={checked} className={`btn flex-1 text-xs ${mark === false ? "btn-active" : ""}`} onClick={() => setMarks({ ...marks, [c.key]: false })}>
                  Not canonical
                </button>
              </div>
              {checked ? (
                <p className="mt-2 flex gap-2 text-xs leading-relaxed text-muted" role="status">
                  {right ? <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald" aria-hidden /> : <XCircle className="h-4 w-4 shrink-0 text-crimson" aria-hidden />}
                  <span>{c.note}</span>
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>

      <div className="mt-4 flex justify-end">
        {checked ? (
          <button type="button" className="btn btn-gold" onClick={next}>
            {index + 1 >= rounds.length ? "Finish" : "Next skeleton"}
          </button>
        ) : (
          <button type="button" className="btn btn-gold" disabled={!allMarked} onClick={check}>
            Check judgements
          </button>
        )}
      </div>
    </section>
  );
}
