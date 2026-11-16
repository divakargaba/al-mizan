"use client";

import { useState } from "react";
import { qurra } from "@/data";
import { Arabic } from "./Arabic";

const CITY_COLOR: Record<string, string> = {
  Madinah: "var(--emerald)",
  Makkah: "var(--gold)",
  Basrah: "var(--azure)",
  Damascus: "var(--violet)",
  Kufah: "var(--crimson)",
  Baghdad: "var(--muted)",
};

/** The ten readers and their twenty transmitters, grouped as a transmission tree. */
export function QiraatStemma() {
  const readers = [...qurra].sort((a, b) => a.rank - b.rank);
  const [selectedId, setSelectedId] = useState(readers[0]?.id ?? "");
  const selected = readers.find((q) => q.id === selectedId) ?? readers[0];

  return (
    <section className="card p-4 sm:p-6" aria-label="The ten readings and twenty transmitters">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-lg font-semibold">Ten Readers · Twenty Transmitters</h2>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {Object.entries(CITY_COLOR).map(([city, color]) => (
            <span key={city} className="inline-flex items-center gap-1.5 text-xs text-muted">
              <span className="h-2 w-2 rounded-full" style={{ background: color }} />
              {city}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
        {readers.map((q) => {
          const active = q.id === selected?.id;
          return (
            <button
              key={q.id}
              type="button"
              onClick={() => setSelectedId(q.id)}
              aria-pressed={active}
              className={`rounded-xl border p-3 text-left transition-colors ${active ? "bg-gold-soft" : "bg-surface-2 hover:border-gold"}`}
              style={{ borderColor: active ? "var(--gold)" : CITY_COLOR[q.city] }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted">{q.rank}</span>
                <span className="font-mono text-[0.65rem] text-muted">d. {q.deathAH} AH</span>
              </div>
              <div className="mt-1 text-sm font-semibold leading-tight">{q.name}</div>
              <div className="text-xs" style={{ color: CITY_COLOR[q.city] }}>
                {q.city}
              </div>
            </button>
          );
        })}
      </div>

      {selected ? (
        <div className="mt-4 rounded-xl border border-line p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold">{selected.name}</h3>
              <span className="chip mt-1">{selected.canon === "seven" ? "One of Ibn Mujahid's Seven" : "One of the three completing the Ten"}</span>
            </div>
            <Arabic className="text-3xl text-gold">{selected.arabicName}</Arabic>
          </div>

          <ol className="mt-4 flex flex-wrap items-center gap-2 text-sm">
            <li className="rounded-lg border border-gold bg-gold-soft px-3 py-1.5 font-medium text-gold">The Prophet ﷺ</li>
            {selected.chainToProphet.map((name) => (
              <li key={name} className="flex items-center gap-2">
                <span className="text-muted" aria-hidden>
                  →
                </span>
                <span className="rounded-lg border border-line bg-surface-2 px-3 py-1.5">{name}</span>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <span className="text-muted" aria-hidden>
                →
              </span>
              <span className="rounded-lg border px-3 py-1.5 font-semibold" style={{ borderColor: CITY_COLOR[selected.city] }}>
                {selected.name}
              </span>
            </li>
          </ol>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {selected.ruwat.map((r) => (
              <div key={r.id} className="rounded-lg border border-line bg-surface-2 p-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted">Transmitter (rāwī)</div>
                    <div className="text-sm font-semibold">{r.name}</div>
                  </div>
                  <Arabic className="text-2xl">{r.arabicName}</Arabic>
                </div>
                <div className="font-mono text-xs text-muted">d. {r.deathAH} AH</div>
                <p className="mt-1 text-sm text-muted">{r.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">{selected.note}</p>
        </div>
      ) : null}
    </section>
  );
}
