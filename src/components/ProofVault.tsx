"use client";

import { useState } from "react";
import { AlertTriangle, BookCheck, CheckCircle2 } from "lucide-react";
import { pillars, proofsByPillar, type PillarId, type Proof } from "@/data";
import { useHydrated, useProgress } from "@/store/progress";
import { Arabic } from "./Arabic";
import { Mcq } from "./Mcq";
import { SourceList } from "./SourceList";

function ProofDetail({ proof }: { proof: Proof }) {
  const hydrated = useHydrated();
  const read = useProgress((s) => s.readProofs.includes(proof.id));
  const correct = useProgress((s) => s.correctQuestions);
  const markRead = useProgress((s) => s.markProofRead);
  const recordAnswer = useProgress((s) => s.recordAnswer);

  return (
    <article className="card p-5 sm:p-6">
      <header>
        <h3 className="text-xl font-semibold">{proof.title}</h3>
        {proof.arabicTitle ? (
          <Arabic as="p" className="text-2xl text-gold">
            {proof.arabicTitle}
          </Arabic>
        ) : null}
        <p className="mt-2 text-sm leading-relaxed text-muted">{proof.summary}</p>
      </header>

      {proof.arabicQuotes.length > 0 ? (
        <div className="mt-4 space-y-3">
          {proof.arabicQuotes.map((q) => (
            <figure key={`${q.reference}-${q.text.slice(0, 12)}`} className="rounded-xl border border-line bg-surface-2 p-4">
              <Arabic as="p" variant="quran" className="text-center text-2xl sm:text-3xl">
                {q.text}
              </Arabic>
              <figcaption className="mt-2 text-center text-sm text-muted">
                “{q.translation}” <span className="font-mono text-xs text-gold">— {q.reference}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}

      <div className="prose-al mt-5 text-[0.95rem] leading-relaxed">
        {proof.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-line p-4">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">Key facts</h4>
          <ul className="space-y-2">
            {proof.keyFacts.map((f, i) => (
              <li key={i} className="flex gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" aria-hidden />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-line p-4">
          <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
            <AlertTriangle className="h-3.5 w-3.5 text-gold" aria-hidden /> Scholarly nuance
          </h4>
          <p className="text-sm leading-relaxed text-muted">{proof.scholarlyNuance}</p>
        </div>
      </div>

      <div className="mt-5">
        <SourceList sources={proof.sources} />
      </div>

      <div className="mt-5">
        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">Micro-verification</h4>
        <div className="grid gap-3">
          {proof.quiz.map((q) => (
            <Mcq
              key={q.id}
              prompt={q.prompt}
              options={q.options}
              answerIndex={q.answerIndex}
              explanation={q.explanation}
              mastered={hydrated && correct.includes(q.id)}
              onAnswer={(ok) => recordAnswer(q.id, ok)}
            />
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-end">
        <button type="button" className={`btn ${read && hydrated ? "btn-active" : "btn-gold"}`} disabled={hydrated && read} onClick={() => markRead(proof.id)}>
          <BookCheck className="h-4 w-4" aria-hidden />
          {hydrated && read ? "Marked as studied" : "Mark as studied (+10 XP)"}
        </button>
      </div>
    </article>
  );
}

export function ProofVault() {
  const hydrated = useHydrated();
  const readProofs = useProgress((s) => s.readProofs);
  const [pillarId, setPillarId] = useState<PillarId>("internal-quranic");
  const list = proofsByPillar[pillarId];
  const [proofId, setProofId] = useState<string | null>(null);
  const proof = list.find((p) => p.id === proofId) ?? list[0];
  const pillar = pillars.find((p) => p.id === pillarId);

  return (
    <section aria-label="Proof vault">
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Pillars">
        {pillars.map((p) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={p.id === pillarId}
            onClick={() => {
              setPillarId(p.id);
              setProofId(null);
            }}
            className={`btn shrink-0 ${p.id === pillarId ? "btn-active" : ""}`}
          >
            <span className="font-mono text-xs">{p.number}</span> {p.short}
          </button>
        ))}
      </div>

      {pillar ? (
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold">
              Pillar {pillar.number}: {pillar.title}
            </h2>
            <p className="text-sm text-muted">{pillar.blurb}</p>
          </div>
          <Arabic className="text-2xl text-gold">{pillar.arabic}</Arabic>
        </div>
      ) : null}

      <div className="grid gap-4 lg:grid-cols-[17rem_1fr]">
        <ul className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
          {list.map((p, i) => {
            const active = p.id === proof?.id;
            return (
              <li key={p.id} className="shrink-0 lg:shrink">
                <button
                  type="button"
                  onClick={() => setProofId(p.id)}
                  className={`w-56 rounded-xl border p-3 text-left transition-colors lg:w-full ${active ? "border-gold bg-gold-soft" : "border-line bg-surface hover:border-gold"}`}
                >
                  <div className="flex items-center justify-between font-mono text-xs text-muted">
                    <span>
                      {pillar?.number}.{i + 1}
                    </span>
                    {hydrated && readProofs.includes(p.id) ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald" aria-label="studied" /> : null}
                  </div>
                  <div className="mt-1 text-sm font-medium leading-snug">{p.title}</div>
                </button>
              </li>
            );
          })}
        </ul>
        {proof ? <ProofDetail key={proof.id} proof={proof} /> : null}
      </div>
    </section>
  );
}
