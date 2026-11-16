"use client";

import { pillars } from "@/data";
import { pillarMastery } from "@/lib/mastery";
import { useHydrated, useProgress } from "@/store/progress";

const SIZE = 300;
const C = SIZE / 2;
const R = 100;

function point(i: number, n: number, r: number): [number, number] {
  const a = (Math.PI * 2 * i) / n - Math.PI / 2;
  return [C + Math.cos(a) * r, C + Math.sin(a) * r];
}

/** Six-pillar mastery radar. */
export function MasteryRadar() {
  const hydrated = useHydrated();
  const state = useProgress();
  const mastery = pillarMastery(state);
  const n = pillars.length;
  const values = pillars.map((p) => (hydrated ? mastery[p.id] : 0));
  const poly = values.map((v, i) => point(i, n, Math.max(0.03, v) * R).join(",")).join(" ");

  return (
    <div>
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="mx-auto w-full max-w-xs" role="img" aria-label="Mastery across the six pillars">
        {[0.25, 0.5, 0.75, 1].map((ring) => (
          <polygon
            key={ring}
            points={pillars.map((_, i) => point(i, n, ring * R).join(",")).join(" ")}
            fill="none"
            stroke="var(--line)"
            strokeWidth={1}
          />
        ))}
        {pillars.map((p, i) => {
          const [x, y] = point(i, n, R);
          const [lx, ly] = point(i, n, R + 26);
          return (
            <g key={p.id}>
              <line x1={C} y1={C} x2={x} y2={y} stroke="var(--line)" strokeWidth={1} />
              <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" fontSize={11} fill="var(--muted)">
                {p.short}
              </text>
            </g>
          );
        })}
        <polygon points={poly} fill="var(--gold-soft)" stroke="var(--gold)" strokeWidth={2} strokeLinejoin="round" />
        {values.map((v, i) => {
          const [x, y] = point(i, n, Math.max(0.03, v) * R);
          return <circle key={i} cx={x} cy={y} r={3.5} fill="var(--gold)" />;
        })}
      </svg>
      <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5">
        {pillars.map((p, i) => (
          <li key={p.id} className="text-xs">
            <div className="flex justify-between gap-2">
              <span className="truncate text-muted">
                {p.number}. {p.short}
              </span>
              <span className="font-mono">{Math.round((values[i] ?? 0) * 100)}%</span>
            </div>
            <div className="mt-0.5 h-1 overflow-hidden rounded-full bg-surface-2">
              <div className="h-full rounded-full bg-gold" style={{ width: `${(values[i] ?? 0) * 100}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
