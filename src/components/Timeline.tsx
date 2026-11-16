"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { timeline, type TimelineCategory } from "@/data";
import { useProgress } from "@/store/progress";
import { Arabic } from "./Arabic";
import { SourceList } from "./SourceList";

const CATEGORY: Record<TimelineCategory, { label: string; color: string }> = {
  revelation: { label: "Revelation", color: "var(--gold)" },
  compilation: { label: "Compilation", color: "var(--emerald)" },
  manuscript: { label: "Manuscript", color: "var(--azure)" },
  epigraphy: { label: "Epigraphy", color: "var(--violet)" },
  scholarship: { label: "Scholarship", color: "var(--crimson)" },
  modern: { label: "Modern research", color: "var(--muted)" },
};

export function Timeline() {
  const milestones = useMemo(() => [...timeline].sort((a, b) => a.yearCE - b.yearCE), []);
  const [index, setIndex] = useState(0);
  const visit = useProgress((s) => s.visitMilestone);
  const visited = useProgress((s) => s.visitedMilestones);
  const current = milestones[index];

  const go = (i: number) => {
    const clamped = Math.max(0, Math.min(milestones.length - 1, i));
    setIndex(clamped);
    const m = milestones[clamped];
    if (m) visit(m.id);
  };

  if (!current) return null;
  const cat = CATEGORY[current.category];

  return (
    <section className="card p-4 sm:p-6" aria-label="Revelation and transmission timeline">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">Revelation &amp; Transmission Timeline</h2>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {Object.entries(CATEGORY).map(([k, v]) => (
            <span key={k} className="inline-flex items-center gap-1.5 text-xs text-muted">
              <span className="h-2 w-2 rounded-full" style={{ background: v.color }} />
              {v.label}
            </span>
          ))}
        </div>
      </div>

      {/* Scrubber: evenly spaced stops (1,400 years would crush the first century on a linear scale). */}
      <div className="relative px-2 pb-2 pt-6">
        <div className="absolute left-2 right-2 top-[2.1rem] h-px bg-line" />
        <div className="relative flex justify-between">
          {milestones.map((m, i) => {
            const active = i === index;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => go(i)}
                aria-label={`${m.dateLabel}: ${m.title}`}
                aria-current={active ? "step" : undefined}
                className="group relative flex h-6 w-3 items-center justify-center"
              >
                <span
                  className="block rounded-full transition-all"
                  style={{
                    width: active ? 14 : 9,
                    height: active ? 14 : 9,
                    background: active || visited.includes(m.id) ? CATEGORY[m.category].color : "var(--surface-2)",
                    border: `2px solid ${CATEGORY[m.category].color}`,
                    boxShadow: active ? "0 0 0 4px var(--gold-soft)" : "none",
                  }}
                />
              </button>
            );
          })}
        </div>
        <input
          type="range"
          min={0}
          max={milestones.length - 1}
          value={index}
          onChange={(e) => go(Number(e.target.value))}
          className="mt-3 w-full accent-[var(--gold)]"
          aria-label="Scrub through the timeline"
        />
        <div className="flex justify-between font-mono text-[0.7rem] text-muted">
          <span>{milestones[0]?.dateLabel}</span>
          <span>
            {index + 1} / {milestones.length}
          </span>
          <span>{milestones[milestones.length - 1]?.dateLabel}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={current.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="mt-4 grid gap-5 lg:grid-cols-[1fr_22rem]"
        >
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-sm font-semibold text-gold">{current.dateLabel}</span>
              <span className="font-mono text-xs text-muted">{current.hijriLabel}</span>
              <span className="chip" style={{ color: cat.color, borderColor: cat.color }}>
                {cat.label}
              </span>
            </div>
            <h3 className="mt-2 text-xl font-semibold">{current.title}</h3>
            {current.arabicTitle ? (
              <Arabic as="p" className="text-2xl text-gold">
                {current.arabicTitle}
              </Arabic>
            ) : null}
            <p className="mt-2 text-sm leading-relaxed">{current.description}</p>
            <div className="mt-3 rounded-lg border-l-2 border-gold bg-gold-soft p-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-gold">Why it matters</div>
              <p className="mt-1 text-sm leading-relaxed">{current.significance}</p>
            </div>
            <div className="mt-4 flex gap-2">
              <button type="button" className="btn" onClick={() => go(index - 1)} disabled={index === 0}>
                <ChevronLeft className="h-4 w-4" aria-hidden /> Earlier
              </button>
              <button type="button" className="btn" onClick={() => go(index + 1)} disabled={index === milestones.length - 1}>
                Later <ChevronRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
          <SourceList sources={current.sources} />
        </motion.article>
      </AnimatePresence>
    </section>
  );
}
