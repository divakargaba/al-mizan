"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Flame, Landmark, Moon, PenTool, Scale, Scroll, Swords, GraduationCap, Sun } from "lucide-react";
import { rankForXp } from "@/lib/ranks";
import { dayKey, addDays } from "@/lib/srs";
import { useHydrated, useProgress } from "@/store/progress";
import { Arabic } from "./Arabic";

const LINKS = [
  { href: "/", label: "Command Center", short: "Home", icon: Landmark },
  { href: "/vault", label: "Proof Vault", short: "Vault", icon: Scroll },
  { href: "/sandbox", label: "Rasm Sandbox", short: "Rasm", icon: PenTool },
  { href: "/arena", label: "Refutation Arena", short: "Arena", icon: Swords },
  { href: "/mastery", label: "Mastery", short: "Mastery", icon: GraduationCap },
] as const;

export function Nav() {
  const pathname = usePathname();
  const hydrated = useHydrated();
  const xp = useProgress((s) => s.xp);
  const streak = useProgress((s) => s.streak);
  const lastActiveDay = useProgress((s) => s.lastActiveDay);
  const theme = useProgress((s) => s.theme);
  const setTheme = useProgress((s) => s.setTheme);

  useEffect(() => {
    if (hydrated) document.documentElement.dataset.theme = theme;
  }, [hydrated, theme]);

  const { rank, next, progress } = rankForXp(hydrated ? xp : 0);
  const today = dayKey();
  const liveStreak =
    hydrated && lastActiveDay && (lastActiveDay === today || addDays(lastActiveDay, 1) === today) ? streak : 0;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-2.5">
        <Link href="/" className="flex items-center gap-2">
          <Scale className="h-5 w-5 text-gold" aria-hidden />
          <span className="text-base font-semibold tracking-tight">Al-Mizan</span>
          <Arabic className="text-lg text-gold !leading-none">الميزان</Arabic>
        </Link>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden min-w-44 sm:block" title={next ? `${next.minXp - xp} XP to ${next.name}` : "Highest rank"}>
            <div className="flex items-baseline justify-between gap-2 text-xs">
              <span className="font-semibold text-gold">{rank.name}</span>
              <span className="font-mono text-muted">{hydrated ? xp : 0} XP</span>
            </div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-surface-2">
              <div className="h-full rounded-full bg-gold transition-[width] duration-500" style={{ width: `${progress * 100}%` }} />
            </div>
          </div>
          <span className="chip sm:hidden">
            <span className="font-semibold text-gold">{rank.name}</span>
            <span className="font-mono">{hydrated ? xp : 0}</span>
          </span>
          <span className="chip" title="Daily streak">
            <Flame className={`h-3.5 w-3.5 ${liveStreak > 0 ? "text-crimson" : ""}`} aria-hidden />
            <span className="font-mono">{liveStreak}</span>
          </span>
          <button
            type="button"
            className="btn !p-2"
            aria-label={theme === "obsidian" ? "Switch to Parchment theme" : "Switch to Obsidian theme"}
            onClick={() => setTheme(theme === "obsidian" ? "parchment" : "obsidian")}
          >
            {theme === "obsidian" ? <Sun className="h-4 w-4" aria-hidden /> : <Moon className="h-4 w-4" aria-hidden />}
          </button>
        </div>

        <nav className="order-last flex w-full gap-1 overflow-x-auto lg:order-none lg:w-auto" aria-label="Primary">
          {LINKS.map(({ href, label, short, icon: Icon }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm transition-colors ${
                  active ? "bg-gold-soft text-gold" : "text-muted hover:text-ink"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden />
                <span className="hidden md:inline">{label}</span>
                <span className="md:hidden">{short}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
