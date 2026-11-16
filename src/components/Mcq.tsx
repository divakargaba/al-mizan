"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { Arabic } from "./Arabic";

interface McqProps {
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  arabic?: string;
  topic?: string;
  /** Called once, when the user commits an answer. */
  onAnswer?: (correct: boolean) => void;
  /** Marks the question as already mastered (shown as a subtle tick). */
  mastered?: boolean;
}

/** Single multiple-choice question with immediate scholarly feedback. */
export function Mcq({ prompt, options, answerIndex, explanation, arabic, topic, onAnswer, mastered }: McqProps) {
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;

  return (
    <div className="rounded-xl border border-line bg-surface-2 p-4">
      <div className="mb-2 flex items-center justify-between gap-2">
        {topic ? <span className="chip">{topic}</span> : <span />}
        {mastered ? (
          <span className="inline-flex items-center gap-1 text-xs text-emerald">
            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden /> answered
          </span>
        ) : null}
      </div>
      <p className="text-sm font-medium leading-relaxed">{prompt}</p>
      {arabic ? (
        <Arabic as="p" variant="quran" className="mt-2 text-center text-2xl">
          {arabic}
        </Arabic>
      ) : null}
      <div className="mt-3 grid gap-2">
        {options.map((opt, i) => {
          const isAnswer = i === answerIndex;
          const state = !answered
            ? "border-line hover:border-gold"
            : isAnswer
              ? "border-emerald bg-emerald/10"
              : i === picked
                ? "border-crimson bg-crimson/10"
                : "border-line opacity-60";
          return (
            <button
              key={`${i}-${opt}`}
              type="button"
              disabled={answered}
              onClick={() => {
                setPicked(i);
                onAnswer?.(isAnswer);
              }}
              className={`flex items-start gap-2 rounded-lg border px-3 py-2 text-left text-sm transition-colors ${state}`}
            >
              <span className="mt-0.5 font-mono text-xs text-muted">{String.fromCharCode(65 + i)}</span>
              <span className="flex-1">{opt}</span>
              {answered && isAnswer ? <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald" aria-hidden /> : null}
              {answered && i === picked && !isAnswer ? <XCircle className="h-4 w-4 shrink-0 text-crimson" aria-hidden /> : null}
            </button>
          );
        })}
      </div>
      {answered ? (
        <p className="mt-3 rounded-lg border border-line bg-surface p-3 text-sm text-muted" role="status">
          <span className={`font-semibold ${picked === answerIndex ? "text-emerald" : "text-crimson"}`}>
            {picked === answerIndex ? "Correct. " : "Not quite. "}
          </span>
          {explanation}
        </p>
      ) : null}
    </div>
  );
}
