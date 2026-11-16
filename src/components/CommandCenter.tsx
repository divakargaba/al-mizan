"use client";

import Link from "next/link";
import { Award, ArrowRight, Flame, GraduationCap, Lock, PenTool, Scroll, Swords } from "lucide-react";
import { interactiveVerses, proofs, refutations } from "@/data";
import { BADGES } from "@/lib/mastery";
import { RANKS, rankForXp } from "@/lib/ranks";
import { dayKey, isDue } from "@/lib/srs";
import { useHydrated, useProgress } from "@/store/progress";
import { Arabic } from "./Arabic";
import { MasteryRadar } from "./MasteryRadar";
import { PageHeader } from "./PageHeader";
import { Timeline } from "./Timeline";

export function CommandCenter() {
  const hydrated = useHydrated();
  const state = useProgress();
  const xp = hydrated ? state.xp : 0;
  const { rank, next, progress } = rankForXp(xp);
  const today = dayKey();
  const due = hydrated ? Object.values(state.srs).filter((c) => isDue(c, today)).length : 0;

  const modules = [
    { href: "/vault", icon: Scroll, title: "Proof Vault & Stylometry Lab", stat: `${hydrated ? state.readProofs.length : 0} / ${proofs.length} proofs read` },
    { href: "/sandbox", icon: PenTool, title: "Rasm & Qira'at Sandbox", stat: `${interactiveVerses.length} verses · best ${hydrated ? state.scribeBest : 0}%` },
    { href: "/arena", icon: Swords, title: "Refutation Arena", stat: `${hydrated ? state.defeatedCritiques.length : 0} / ${refutations.length} critiques answered` },
    { href: "/mastery", icon: GraduationCap, title: "Mastery & Certification", stat: due > 0 ? `${due} reviews due` : hydrated && state.examPassed ? "Certified" : "No reviews due" },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Command Center" arabic="إِنَّا نَحْنُ نَزَّلْنَا ٱلذِّكْرَ">
        Trace how the Quranic text travelled from first recitation to the page in front of you — through memory,
        parchment, stone and scholarship — and test every claim against its sources.
      </PageHeader>

      <div className="grid gap-6 lg:grid-cols-[1fr_20rem]">
        <section className="card p-5" aria-label="Rank and progress">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted">Scholarly rank</div>
              <div className="mt-1 flex items-baseline gap-3">
                <span className="text-2xl font-semibold text-gold">{rank.name}</span>
                <Arabic className="text-2xl text-gold">{rank.arabic}</Arabic>
              </div>
              <div className="text-sm text-muted">{rank.meaning}</div>
            </div>
            <div className="flex gap-6 font-mono">
              <div>
                <div className="text-2xl font-semibold">{xp}</div>
                <div className="text-xs text-muted">XP</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-2xl font-semibold">
                  <Flame className="h-5 w-5 text-crimson" aria-hidden />
                  {hydrated ? state.streak : 0}
                </div>
                <div className="text-xs text-muted">day streak</div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="h-2 overflow-hidden rounded-full bg-surface-2">
              <div className="h-full rounded-full bg-gold transition-[width] duration-700" style={{ width: `${progress * 100}%` }} />
            </div>
            <div className="mt-1 text-xs text-muted">
              {next ? (
                <>
                  <span className="font-mono">{next.minXp - xp}</span> XP to {next.name}
                </>
              ) : (
                "Highest rank reached"
              )}
            </div>
          </div>

          <ol className="mt-5 grid grid-cols-5 gap-1.5">
            {RANKS.map((r) => {
              const reached = xp >= r.minXp;
              return (
                <li
                  key={r.id}
                  className={`rounded-lg border px-1.5 py-2 text-center ${reached ? "border-gold bg-gold-soft" : "border-line opacity-60"}`}
                >
                  <div className={`text-[0.7rem] font-semibold leading-tight sm:text-xs ${reached ? "text-gold" : ""}`}>{r.name}</div>
                  <div className="mt-0.5 font-mono text-[0.65rem] text-muted">{r.minXp}</div>
                </li>
              );
            })}
          </ol>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {modules.map(({ href, icon: Icon, title, stat }) => (
              <Link key={href} href={href} className="group flex items-center gap-3 rounded-xl border border-line bg-surface-2 p-3 transition-colors hover:border-gold">
                <Icon className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium">{title}</div>
                  <div className="font-mono text-xs text-muted">{stat}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            ))}
          </div>
        </section>

        <section className="card p-5" aria-label="Six-pillar mastery">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted">Six-pillar mastery</h2>
          <MasteryRadar />
        </section>
      </div>

      <Timeline />

      <section className="card p-5" aria-label="Badges">
        <h2 className="mb-3 text-lg font-semibold">Badges</h2>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {BADGES.map((b) => {
            const earned = hydrated && b.earned(state);
            return (
              <li key={b.id} className={`flex items-center gap-3 rounded-xl border p-3 ${earned ? "border-gold bg-gold-soft" : "border-line"}`}>
                {earned ? <Award className="h-5 w-5 shrink-0 text-gold" aria-hidden /> : <Lock className="h-5 w-5 shrink-0 text-muted" aria-hidden />}
                <div>
                  <div className={`text-sm font-semibold ${earned ? "text-gold" : ""}`}>{b.title}</div>
                  <div className="text-xs text-muted">{b.description}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
