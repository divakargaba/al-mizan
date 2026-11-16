"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, ChevronDown, Search, ShieldCheck, Swords } from "lucide-react";
import { refutationCategories, refutations, type EvidenceType, type Refutation, type RefutationCategory } from "@/data";
import { useHydrated, useProgress } from "@/store/progress";
import { Mcq } from "./Mcq";
import { SourceList } from "./SourceList";

export const EVIDENCE: Record<EvidenceType, { label: string; color: string }> = {
  manuscript: { label: "Manuscript", color: "var(--azure)" },
  isnad: { label: "Isnad", color: "var(--emerald)" },
  usul: { label: "Usul", color: "var(--gold)" },
  linguistic: { label: "Linguistic", color: "var(--violet)" },
  stylometric: { label: "Stylometric", color: "var(--crimson)" },
  historical: { label: "Historical", color: "var(--muted)" },
};

function Entry({ r, open, onToggle, onDebate }: { r: Refutation; open: boolean; onToggle: () => void; onDebate: (id: string) => void }) {
  const hydrated = useHydrated();
  const defeated = useProgress((s) => s.defeatedCritiques.includes(r.id));
  const correct = useProgress((s) => s.correctQuestions);
  const recordAnswer = useProgress((s) => s.recordAnswer);
  const category = refutationCategories.find((c) => c.id === r.category);

  return (
    <li className="card overflow-visible" id={r.id}>
      <button type="button" onClick={onToggle} aria-expanded={open} className="flex w-full items-start gap-3 p-4 text-left">
        <span className="mt-0.5 w-7 shrink-0 font-mono text-sm font-semibold text-gold">{String(r.number).padStart(2, "0")}</span>
        <span className="min-w-0 flex-1">
          <span className="block text-base font-semibold leading-snug">{r.title}</span>
          <span className="mt-1 flex flex-wrap gap-1.5">
            <span className="chip">{category?.short}</span>
            <span className="chip !whitespace-normal">{r.eraOrOrigin}</span>
            {hydrated && defeated ? (
              <span className="chip" style={{ color: "var(--emerald)", borderColor: "var(--emerald)" }}>
                <CheckCircle2 className="h-3 w-3" aria-hidden /> answered in debate
              </span>
            ) : null}
          </span>
        </span>
        <ChevronDown className={`mt-1 h-4 w-4 shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>

      {open ? (
        <div className="space-y-5 border-t border-line p-4 sm:p-5">
          <div className="rounded-xl border border-crimson/50 bg-crimson/5 p-4">
            <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-crimson">The objection, at its strongest</h4>
            <p className="text-sm leading-relaxed">{r.steelmanObjection}</p>
          </div>

          <div className="rounded-xl border border-emerald/50 bg-emerald/5 p-4">
            <h4 className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden /> Core response
            </h4>
            <p className="text-sm leading-relaxed">{r.coreRefutationSummary}</p>
          </div>

          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">Step-by-step breakdown</h4>
            <ol className="space-y-3">
              {r.stepByStepBreakdown.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold font-mono text-xs text-gold">{i + 1}</span>
                  <div>
                    <div className="text-sm font-semibold">{s.heading}</div>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{s.analysis}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-xl border border-line p-4">
            <h4 className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
              <AlertTriangle className="h-3.5 w-3.5 text-gold" aria-hidden /> Scholarly nuance
            </h4>
            <p className="text-sm leading-relaxed text-muted">{r.scholarlyNuance}</p>
          </div>

          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">Evidence cards</h4>
            <ul className="grid gap-2 md:grid-cols-2">
              {r.debateCounterCards.map((c) => (
                <li key={c.id} className="rounded-lg border bg-surface-2 p-3" style={{ borderColor: EVIDENCE[c.type].color }}>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold">{c.title}</span>
                    <span className="font-mono text-[0.65rem] uppercase" style={{ color: EVIDENCE[c.type].color }}>
                      {EVIDENCE[c.type].label} · {"●".repeat(c.strength)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{c.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <SourceList sources={r.primarySources} title="Primary sources & studies" />

          <div className="grid gap-3 lg:grid-cols-2">
            {r.quiz.map((q) => (
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

          <div className="flex justify-end">
            <button type="button" className="btn btn-gold" onClick={() => onDebate(r.id)}>
              <Swords className="h-4 w-4" aria-hidden /> Debate this critique
            </button>
          </div>
        </div>
      ) : null}
    </li>
  );
}

export function Encyclopedia({ onDebate }: { onDebate: (id: string) => void }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<RefutationCategory | "all">("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return refutations.filter((r) => {
      if (category !== "all" && r.category !== category) return false;
      if (!q) return true;
      const hay = [
        r.title,
        r.eraOrOrigin,
        r.steelmanObjection,
        r.coreRefutationSummary,
        ...r.stepByStepBreakdown.flatMap((s) => [s.heading, s.analysis]),
        ...r.primarySources.map((s) => s.citation),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [query, category]);

  return (
    <section aria-label="Critique and refutation encyclopedia">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <label className="relative min-w-56 flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search critiques, sources, names…"
            aria-label="Search the encyclopedia"
            className="w-full rounded-xl border border-line bg-surface py-2 pl-9 pr-3 text-sm outline-none placeholder:text-muted focus:border-gold"
          />
        </label>
        <div className="flex gap-2 overflow-x-auto">
          <button type="button" className={`btn shrink-0 ${category === "all" ? "btn-active" : ""}`} onClick={() => setCategory("all")}>
            All
          </button>
          {refutationCategories.map((c) => (
            <button key={c.id} type="button" className={`btn shrink-0 ${category === c.id ? "btn-active" : ""}`} onClick={() => setCategory(c.id)}>
              {c.short}
            </button>
          ))}
        </div>
      </div>
      <p className="mb-3 font-mono text-xs text-muted">
        {results.length} of {refutations.length} entries
      </p>
      <ul className="space-y-3">
        {results.map((r) => (
          <Entry key={r.id} r={r} open={openId === r.id} onToggle={() => setOpenId(openId === r.id ? null : r.id)} onDebate={onDebate} />
        ))}
      </ul>
      {results.length === 0 ? <p className="card p-6 text-center text-sm text-muted">No entries match that search.</p> : null}
    </section>
  );
}
