"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, Award, CalendarClock, CheckCircle2, ClipboardCheck, RotateCcw, XCircle } from "lucide-react";
import { authoredQuestions, buildExam, EXAM_LENGTH, EXAM_PASS_RATIO, questionById, type ExamItem, type McqItem, type OrderItem } from "@/lib/questions";
import { createRng, sample } from "@/lib/random";
import { XP } from "@/lib/ranks";
import { dayKey, isDue } from "@/lib/srs";
import { useHydrated, useProgress } from "@/store/progress";
import { Mcq } from "./Mcq";

/* ------------------------------ Review queue ----------------------------- */

const SESSION = 8;

function ReviewEngine() {
  const hydrated = useHydrated();
  const srs = useProgress((s) => s.srs);
  const recordAnswer = useProgress((s) => s.recordAnswer);
  const [queue, setQueue] = useState<McqItem[] | null>(null);
  const [pos, setPos] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [right, setRight] = useState(0);

  const today = dayKey();
  const stats = useMemo(() => {
    const seen = authoredQuestions.filter((q) => srs[q.id] !== undefined);
    const due = seen.filter((q) => isDue(srs[q.id], today));
    const mature = seen.filter((q) => (srs[q.id]?.intervalDays ?? 0) >= 7);
    return { seen: seen.length, due, fresh: authoredQuestions.filter((q) => srs[q.id] === undefined), mature: mature.length };
  }, [srs, today]);

  const start = () => {
    const rng = createRng(Date.now());
    const due = sample(stats.due, Math.min(SESSION, stats.due.length), rng);
    const fresh = sample(stats.fresh, Math.max(0, SESSION - due.length), rng);
    setQueue([...due, ...fresh]);
    setPos(0);
    setAnswered(false);
    setRight(0);
  };

  const current = queue?.[pos];
  const finished = queue !== null && pos >= queue.length;

  return (
    <section className="card p-4 sm:p-6" aria-label="Spaced-repetition review">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <CalendarClock className="h-5 w-5 text-gold" aria-hidden /> Spaced-repetition review
        </h2>
        <div className="flex gap-4 font-mono text-xs text-muted">
          <span>
            <span className="text-base font-semibold text-crimson">{hydrated ? stats.due.length : 0}</span> due
          </span>
          <span>
            <span className="text-base font-semibold text-ink">{hydrated ? stats.fresh.length : authoredQuestions.length}</span> new
          </span>
          <span>
            <span className="text-base font-semibold text-emerald">{hydrated ? stats.mature : 0}</span> mature
          </span>
        </div>
      </div>

      {queue === null || finished ? (
        <div className="mt-4 text-center">
          {finished ? (
            <p className="mb-3 text-sm" role="status">
              Session complete — <span className="font-mono font-semibold text-gold">{right}/{queue?.length ?? 0}</span> correct. Missed
              questions return today; correct ones are scheduled further out each time (1 day → 3 days → longer).
            </p>
          ) : (
            <p className="mx-auto mb-3 max-w-2xl text-sm leading-relaxed text-muted">
              Every question you answer anywhere in Al-Mizan enters this queue. Due questions come first, then new
              material. Intervals grow with each correct recall and reset when you miss.
            </p>
          )}
          <button type="button" className="btn btn-gold" onClick={start} disabled={!hydrated}>
            {finished ? "Another session" : `Start session (${SESSION} questions)`}
          </button>
        </div>
      ) : current ? (
        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between font-mono text-xs text-muted">
            <span>
              {pos + 1} / {queue.length}
            </span>
            <span>{srs[current.id] ? `interval ${srs[current.id]?.intervalDays ?? 0}d` : "new"}</span>
          </div>
          <Mcq
            key={`${current.id}-${pos}`}
            topic={current.topic}
            prompt={current.prompt}
            options={current.options}
            answerIndex={current.answerIndex}
            explanation={current.explanation}
            onAnswer={(ok) => {
              recordAnswer(current.id, ok, XP.reviewCorrect);
              if (ok) setRight((r) => r + 1);
              setAnswered(true);
            }}
          />
          <div className="mt-3 flex justify-end">
            <button
              type="button"
              className="btn btn-gold"
              disabled={!answered}
              onClick={() => {
                setPos(pos + 1);
                setAnswered(false);
              }}
            >
              {pos + 1 >= queue.length ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}

/* ---------------------------------- Exam --------------------------------- */

const FORMAT_LABEL: Record<ExamItem["format"], string> = {
  quiz: "Knowledge",
  dating: "Identification",
  rebuttal: "Rebuttal",
  qiraat: "Qira'at rules",
  ordering: "Chronology",
};

function OrderQuestion({ item, onAnswer }: { item: OrderItem; onAnswer: (correct: boolean) => void }) {
  const [order, setOrder] = useState(item.items);
  const [submitted, setSubmitted] = useState(false);
  const correct = order.every((it, i) => it.id === item.correctOrder[i]);

  const move = (i: number, d: -1 | 1) => {
    const j = i + d;
    const a = order[i];
    const b = order[j];
    if (!a || !b) return;
    const next = [...order];
    next[i] = b;
    next[j] = a;
    setOrder(next);
  };

  return (
    <div className="rounded-xl border border-line bg-surface-2 p-4">
      <span className="chip mb-2">{item.topic}</span>
      <p className="text-sm font-medium">{item.prompt}</p>
      <ol className="mt-3 space-y-2">
        {order.map((it, i) => {
          const ok = submitted && it.id === item.correctOrder[i];
          return (
            <li key={it.id} className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${submitted ? (ok ? "border-emerald" : "border-crimson") : "border-line"}`}>
              <span className="font-mono text-xs text-muted">{i + 1}</span>
              <span className="flex-1">{it.label}</span>
              <button type="button" className="btn !p-1.5" disabled={submitted || i === 0} onClick={() => move(i, -1)} aria-label={`Move “${it.label}” earlier`}>
                <ArrowUp className="h-3.5 w-3.5" aria-hidden />
              </button>
              <button type="button" className="btn !p-1.5" disabled={submitted || i === order.length - 1} onClick={() => move(i, 1)} aria-label={`Move “${it.label}” later`}>
                <ArrowDown className="h-3.5 w-3.5" aria-hidden />
              </button>
            </li>
          );
        })}
      </ol>
      {submitted ? (
        <p className="mt-3 rounded-lg border border-line bg-surface p-3 text-sm text-muted" role="status">
          <span className={`font-semibold ${correct ? "text-emerald" : "text-crimson"}`}>{correct ? "Correct. " : "Not quite. "}</span>
          {item.explanation}
        </p>
      ) : (
        <button
          type="button"
          className="btn mt-3"
          onClick={() => {
            setSubmitted(true);
            onAnswer(correct);
          }}
        >
          Lock in order
        </button>
      )}
    </div>
  );
}

function Exam() {
  const hydrated = useHydrated();
  const examBest = useProgress((s) => s.examBest);
  const examPassed = useProgress((s) => s.examPassed);
  const recordExam = useProgress((s) => s.recordExam);
  const recordAnswer = useProgress((s) => s.recordAnswer);
  const [items, setItems] = useState<ExamItem[] | null>(null);
  const [pos, setPos] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);

  const start = () => {
    setItems(buildExam(createRng(Date.now())));
    setPos(0);
    setResults([]);
    setDone(false);
  };

  const item = items?.[pos];
  const answered = results.length > pos;
  const score = results.filter(Boolean).length;
  const total = items?.length ?? EXAM_LENGTH;
  const pct = Math.round((score / total) * 100);
  const passed = score / total >= EXAM_PASS_RATIO;

  const answer = (ok: boolean) => {
    setResults((r) => [...r, ok]);
    // Authored questions also feed the review queue (no extra XP inside the exam).
    if (item && questionById.has(item.id)) recordAnswer(item.id, ok, 0);
  };

  const advance = () => {
    if (!items) return;
    if (pos + 1 >= items.length) {
      recordExam(pct, passed);
      setDone(true);
    } else {
      setPos(pos + 1);
    }
  };

  return (
    <section className="card p-4 sm:p-6" aria-label="Certification exam">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <ClipboardCheck className="h-5 w-5 text-gold" aria-hidden /> Certification exam
        </h2>
        <div className="flex items-center gap-3 font-mono text-xs text-muted">
          {hydrated && examBest !== null ? <span>best {examBest}%</span> : null}
          {hydrated && examPassed ? (
            <span className="chip" style={{ color: "var(--gold)", borderColor: "var(--gold)" }}>
              <Award className="h-3 w-3" aria-hidden /> Ijazah earned
            </span>
          ) : null}
        </div>
      </div>

      {items === null ? (
        <div className="mt-4 text-center">
          <p className="mx-auto mb-3 max-w-2xl text-sm leading-relaxed text-muted">
            {EXAM_LENGTH} questions in mixed formats — knowledge of the proofs, manuscript and milestone identification,
            chronological ordering, qira&apos;at rules, and matching evidence to objections. Pass mark{" "}
            {Math.round(EXAM_PASS_RATIO * 100)}%. Every answer comes with its scholarly explanation.
          </p>
          <button type="button" className="btn btn-gold" onClick={start}>
            Begin exam
          </button>
        </div>
      ) : done ? (
        <div className="mt-4 text-center" role="status">
          <div className={`font-mono text-5xl font-semibold ${passed ? "text-gold" : "text-crimson"}`}>{pct}%</div>
          <p className="mt-1 text-sm text-muted">
            {score} of {total} correct — {passed ? "passed. The Ijazah badge is yours." : `the pass mark is ${Math.round(EXAM_PASS_RATIO * 100)}%. Review the vault and encyclopedia, then retake.`}
          </p>
          <ol className="mx-auto mt-4 flex max-w-md flex-wrap justify-center gap-1.5">
            {results.map((ok, i) => (
              <li key={i} title={`Question ${i + 1}: ${FORMAT_LABEL[items[i]?.format ?? "quiz"]}`}>
                {ok ? <CheckCircle2 className="h-5 w-5 text-emerald" aria-label={`Question ${i + 1} correct`} /> : <XCircle className="h-5 w-5 text-crimson" aria-label={`Question ${i + 1} incorrect`} />}
              </li>
            ))}
          </ol>
          <button type="button" className="btn btn-gold mt-4" onClick={start}>
            <RotateCcw className="h-4 w-4" aria-hidden /> New exam
          </button>
        </div>
      ) : item ? (
        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between font-mono text-xs text-muted">
            <span>
              question {pos + 1} / {total} · {FORMAT_LABEL[item.format]}
            </span>
            <span>score {score}</span>
          </div>
          <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-surface-2">
            <div className="h-full rounded-full bg-gold transition-[width]" style={{ width: `${(results.length / total) * 100}%` }} />
          </div>
          {item.kind === "mcq" ? (
            <Mcq key={`${item.id}-${pos}`} topic={item.topic} prompt={item.prompt} arabic={item.arabic} options={item.options} answerIndex={item.answerIndex} explanation={item.explanation} onAnswer={answer} />
          ) : (
            <OrderQuestion key={`${item.id}-${pos}`} item={item} onAnswer={answer} />
          )}
          <div className="mt-3 flex justify-end">
            <button type="button" className="btn btn-gold" disabled={!answered} onClick={advance}>
              {pos + 1 >= total ? "See result" : "Next question"}
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export function Mastery() {
  const reset = useProgress((s) => s.reset);
  return (
    <div className="space-y-6">
      <ReviewEngine />
      <Exam />
      <div className="flex justify-end">
        <button
          type="button"
          className="btn text-xs"
          onClick={() => {
            if (window.confirm("Reset all XP, badges, streaks and review history stored in this browser?")) reset();
          }}
        >
          Reset progress
        </button>
      </div>
    </div>
  );
}
