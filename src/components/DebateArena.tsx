"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Heart, MessageSquareWarning, RotateCcw, Shuffle, Trophy } from "lucide-react";
import { refutations, type DebateCounterCard, type Refutation } from "@/data";
import { createRng, sample, shuffle } from "@/lib/random";
import { useHydrated, useProgress } from "@/store/progress";
import { EVIDENCE } from "./Encyclopedia";

const COMPOSURE = 3;
const DISTRACTORS = 4;

interface HandCard extends DebateCounterCard {
  /** Critique this card actually belongs to. */
  ownerId: string;
  ownerTitle: string;
}

interface LogLine {
  ok: boolean;
  title: string;
  text: string;
}

function dealHand(target: Refutation, seed: number): HandCard[] {
  const rng = createRng(seed);
  const own: HandCard[] = target.debateCounterCards.map((c) => ({ ...c, ownerId: target.id, ownerTitle: target.title }));
  const others = refutations
    .filter((r) => r.id !== target.id)
    .flatMap((r) => r.debateCounterCards.map<HandCard>((c) => ({ ...c, ownerId: r.id, ownerTitle: r.title })));
  // Prefer distractors from other categories so that a wrong card is unambiguously wrong.
  const far = others.filter((c) => refutations.find((r) => r.id === c.ownerId)?.category !== target.category);
  return shuffle([...own, ...sample(far.length >= DISTRACTORS ? far : others, DISTRACTORS, rng)], rng);
}

export function DebateArena({ initialId }: { initialId: string | null }) {
  const hydrated = useHydrated();
  const defeated = useProgress((s) => s.defeatedCritiques);
  const markDefeated = useProgress((s) => s.markDefeated);

  const [targetId, setTargetId] = useState<string | null>(initialId);
  const [hand, setHand] = useState<HandCard[]>([]);
  const [played, setPlayed] = useState<string[]>([]);
  const [composure, setComposure] = useState(COMPOSURE);
  const [log, setLog] = useState<LogLine[]>([]);
  const [awarded, setAwarded] = useState(false);

  const target = refutations.find((r) => r.id === targetId) ?? null;

  const begin = (id: string) => {
    const t = refutations.find((r) => r.id === id);
    if (!t) return;
    setTargetId(id);
    setHand(dealHand(t, Date.now()));
    setPlayed([]);
    setComposure(COMPOSURE);
    setLog([]);
    setAwarded(false);
  };

  useEffect(() => {
    if (initialId) begin(initialId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialId]);

  const total = target ? target.debateCounterCards.reduce((n, c) => n + c.strength, 0) : 1;
  const dealt = target
    ? target.debateCounterCards.filter((c) => played.includes(c.id)).reduce((n, c) => n + c.strength, 0)
    : 0;
  const standing = Math.max(0, 1 - dealt / total);
  const won = target !== null && hand.length > 0 && target.debateCounterCards.every((c) => played.includes(c.id));
  const lost = composure <= 0 && !won;

  useEffect(() => {
    if (won && target && !awarded) {
      markDefeated(target.id, composure);
      setAwarded(true);
    }
  }, [won, target, awarded, composure, markDefeated]);

  const playCard = (card: HandCard) => {
    if (!target || won || lost || played.includes(card.id)) return;
    setPlayed((p) => [...p, card.id]);
    if (card.ownerId === target.id) {
      setLog((l) => [{ ok: true, title: card.title, text: card.text }, ...l]);
    } else {
      setComposure((c) => c - 1);
      setLog((l) => [
        { ok: false, title: card.title, text: `Sound evidence, wrong debate — this card answers “${card.ownerTitle}”. The skeptic points out it does not address the objection.` },
        ...l,
      ]);
    }
  };

  const randomUndefeated = () => {
    const pool = refutations.filter((r) => !defeated.includes(r.id));
    const pick = sample(pool.length ? pool : refutations, 1, createRng(Date.now()))[0];
    if (pick) begin(pick.id);
  };

  if (!target || hand.length === 0) {
    return (
      <section className="card p-5" aria-label="Debate arena">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold">Choose an objection to answer</h2>
            <p className="text-sm text-muted">
              A skeptic states the critique. Play the evidence cards that actually answer it — three misplays and you lose the floor.
            </p>
          </div>
          <button type="button" className="btn btn-gold" onClick={randomUndefeated}>
            <Shuffle className="h-4 w-4" aria-hidden /> Random challenge
          </button>
        </div>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {refutations.map((r) => {
            const done = hydrated && defeated.includes(r.id);
            return (
              <li key={r.id}>
                <button type="button" onClick={() => begin(r.id)} className={`flex h-full w-full items-start gap-2 rounded-xl border p-3 text-left transition-colors hover:border-gold ${done ? "border-emerald/60 bg-emerald/5" : "border-line bg-surface-2"}`}>
                  <span className="font-mono text-xs text-gold">{String(r.number).padStart(2, "0")}</span>
                  <span className="flex-1 text-sm leading-snug">{r.title}</span>
                  {done ? <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald" aria-label="answered" /> : null}
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  return (
    <section className="space-y-4" aria-label="Debate arena">
      <div className="card p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-crimson">
            <MessageSquareWarning className="h-5 w-5" aria-hidden /> The Skeptic · critique {String(target.number).padStart(2, "0")}
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1" aria-label={`Composure ${composure} of ${COMPOSURE}`}>
              {Array.from({ length: COMPOSURE }, (_, i) => (
                <Heart key={i} className={`h-4 w-4 ${i < composure ? "fill-current text-crimson" : "text-line"}`} aria-hidden />
              ))}
            </span>
            <button type="button" className="btn text-xs" onClick={() => setTargetId(null)}>
              Change critique
            </button>
          </div>
        </div>
        <h2 className="mt-2 text-lg font-semibold">{target.title}</h2>
        <blockquote className="mt-2 rounded-xl border border-crimson/40 bg-crimson/5 p-4 text-sm leading-relaxed">“{target.steelmanObjection}”</blockquote>
        <div className="mt-3">
          <div className="flex justify-between text-xs text-muted">
            <span>Objection standing</span>
            <span className="font-mono">{Math.round(standing * 100)}%</span>
          </div>
          <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-surface-2">
            <motion.div className="h-full rounded-full bg-crimson" animate={{ width: `${standing * 100}%` }} transition={{ duration: 0.4 }} />
          </div>
        </div>
      </div>

      {won || lost ? (
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className={`card p-5 ${won ? "!border-emerald" : "!border-crimson"}`} role="status">
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            {won ? <Trophy className="h-5 w-5 text-gold" aria-hidden /> : null}
            {won ? "Objection answered" : "You lost the floor"}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {won ? target.coreRefutationSummary : "Three cards missed the point of the objection. Review the entry's step-by-step breakdown in the encyclopedia and try again."}
          </p>
          {won ? (
            <p className="mt-2 rounded-lg border border-line bg-surface-2 p-3 text-xs leading-relaxed text-muted">
              <strong className="text-ink">What remains debated: </strong>
              {target.scholarlyNuance}
            </p>
          ) : null}
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" className="btn" onClick={() => begin(target.id)}>
              <RotateCcw className="h-4 w-4" aria-hidden /> Replay
            </button>
            <button type="button" className="btn btn-gold" onClick={randomUndefeated}>
              <Shuffle className="h-4 w-4" aria-hidden /> Next challenge
            </button>
          </div>
        </motion.div>
      ) : null}

      <div>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">Your evidence deck</h3>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {hand.map((card) => {
            const used = played.includes(card.id);
            const ok = card.ownerId === target.id;
            const ev = EVIDENCE[card.type];
            return (
              <li key={card.id}>
                <motion.button
                  type="button"
                  whileHover={used || won || lost ? undefined : { y: -4 }}
                  disabled={used || won || lost}
                  onClick={() => playCard(card)}
                  className={`flex h-full w-full flex-col rounded-xl border-2 bg-surface p-3 text-left ${used ? (ok ? "opacity-70" : "opacity-40") : ""}`}
                  style={{ borderColor: used ? (ok ? "var(--emerald)" : "var(--crimson)") : ev.color }}
                >
                  <span className="flex items-center justify-between font-mono text-[0.65rem] uppercase" style={{ color: ev.color }}>
                    <span>{ev.label}</span>
                    <span aria-label={`strength ${card.strength}`}>{"●".repeat(card.strength)}</span>
                  </span>
                  <span className="mt-1 text-sm font-semibold leading-snug">{card.title}</span>
                  <span className="mt-1 text-xs leading-relaxed text-muted">{card.text}</span>
                </motion.button>
              </li>
            );
          })}
        </ul>
      </div>

      {log.length > 0 ? (
        <div className="card p-4">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">Exchange</h3>
          <ul className="space-y-2">
            <AnimatePresence initial={false}>
              {log.map((l, i) => (
                <motion.li key={`${log.length - i}-${l.title}`} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className={`rounded-lg border-l-2 p-2.5 text-sm ${l.ok ? "border-emerald bg-emerald/5" : "border-crimson bg-crimson/5"}`}>
                  <span className="font-semibold">{l.title}. </span>
                  <span className="text-muted">{l.text}</span>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      ) : null}
    </section>
  );
}
