"use client";

import { useState } from "react";
import { Loader2, Square, Volume2, VolumeX } from "lucide-react";
import { interactiveVerses, type InteractiveVerse, type ReadingVariant, type RiwayahId } from "@/data";
import { reciterLabel, type AudioRiwayah } from "@/lib/audio";
import { sameRasm, stripVowels, toRasm } from "@/lib/rasm";
import { useAyahAudio } from "@/lib/useAyahAudio";
import { Arabic } from "./Arabic";
import { SourceList } from "./SourceList";

type Layer = "rasm" | "dotted" | "vocalized";

const LAYERS: { id: Layer; label: string; hint: string }[] = [
  { id: "rasm", label: "Bare rasm", hint: "No dots, no vowels — as in the earliest Hijazi codices" },
  { id: "dotted", label: "Dotted (iʿjām)", hint: "Consonant dots distinguish homographs" },
  { id: "vocalized", label: "Vocalized (tashkīl)", hint: "Full vowel marks" },
];

const RIWAYAT: { id: RiwayahId; label: string; region: string }[] = [
  { id: "hafs", label: "Ḥafṣ ʿan ʿĀṣim", region: "Kufa" },
  { id: "warsh", label: "Warsh ʿan Nāfiʿ", region: "Medina" },
  { id: "qalun", label: "Qālūn ʿan Nāfiʿ", region: "Medina" },
  { id: "duri-abu-amr", label: "al-Dūrī ʿan Abī ʿAmr", region: "Basra" },
];

const KIND_LABEL: Record<InteractiveVerse["kind"], string> = {
  vowels: "Vowels only",
  dotting: "Consonant dotting",
  "vowels-and-dotting": "Dots and vowels",
  "long-vowel": "Long vowel (unwritten alif)",
  skeletal: "Regional codex spelling",
};

/** The dotted, unvowelled spelling appropriate to one variant. */
function dottedFor(verse: InteractiveVerse, variant: ReadingVariant, isBase: boolean): string {
  const stripped = stripVowels(variant.arabic);
  if (sameRasm(stripped, verse.dottedSkeleton)) return stripped;
  if (verse.kind === "skeletal" && !isBase && verse.alternateSkeleton) return verse.alternateSkeleton;
  // Vocalized form spells out a letter the rasm leaves unwritten (e.g. alif): keep the codex spelling.
  return verse.dottedSkeleton;
}

function render(verse: InteractiveVerse, variant: ReadingVariant, layer: Layer, isBase: boolean): string {
  if (layer === "vocalized") return variant.arabic;
  const dotted = dottedFor(verse, variant, isBase);
  return layer === "dotted" ? dotted : toRasm(dotted);
}

export function RasmSandbox() {
  const [verseId, setVerseId] = useState(interactiveVerses[0]?.id ?? "");
  const [layer, setLayer] = useState<Layer>("rasm");
  const audio = useAyahAudio();
  const verse = interactiveVerses.find((v) => v.id === verseId) ?? interactiveVerses[0];
  if (!verse) return null;

  const variantOf = (r: RiwayahId) => verse.variants.find((v) => v.id === verse.riwayat[r]) ?? verse.variants[0];
  const baseId = verse.riwayat.hafs;
  const skeletons = new Set(verse.variants.map((v) => toRasm(dottedFor(verse, v, v.id === baseId))));

  const audioButton = (r: AudioRiwayah) => {
    const key = `${r}-${verse.surah}-${verse.ayah}`;
    const mine = audio.activeKey === key;
    const Icon = mine && audio.status === "loading" ? Loader2 : mine && audio.status === "playing" ? Square : mine && audio.status === "error" ? VolumeX : Volume2;
    return (
      <button
        type="button"
        className="btn !px-2 !py-1 text-xs"
        onClick={() => audio.play(r, verse.surah, verse.ayah)}
        title={reciterLabel(r)}
        aria-label={`Play ${reciterLabel(r)}`}
      >
        <Icon className={`h-3.5 w-3.5 ${mine && audio.status === "loading" ? "animate-spin" : ""}`} aria-hidden />
        {mine && audio.status === "error" ? "Audio unavailable" : mine && audio.status === "playing" ? "Stop" : "Listen"}
      </button>
    );
  };

  return (
    <section className="card p-4 sm:p-6" aria-label="Rasm and qira'at sandbox">
      <div className="flex gap-2 overflow-x-auto pb-2" aria-label="Verses">
        {interactiveVerses.map((v) => (
          <button
            key={v.id}
            type="button"
            onClick={() => {
              setVerseId(v.id);
              audio.stop();
            }}
            className={`btn shrink-0 font-mono text-xs ${v.id === verse.id ? "btn-active" : ""}`}
          >
            {v.reference}
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">
            <span className="font-mono text-gold">{verse.reference}</span> · {verse.surahName}
          </h2>
          <span className="chip mt-1">{KIND_LABEL[verse.kind]}</span>
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Script layer">
          {LAYERS.map((l) => (
            <button key={l.id} type="button" role="tab" aria-selected={layer === l.id} title={l.hint} className={`btn ${layer === l.id ? "btn-active" : ""}`} onClick={() => setLayer(l.id)}>
              {l.label}
            </button>
          ))}
        </div>
      </div>

      <figure className="mt-4 rounded-xl border border-line bg-surface-2 p-4 text-center">
        <Arabic as="p" variant="quran" className="text-2xl sm:text-3xl">
          {verse.contextArabic}
        </Arabic>
        <figcaption className="mt-1 text-sm text-muted">“{verse.contextTranslation}”</figcaption>
      </figure>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {RIWAYAT.map((r) => {
          const variant = variantOf(r.id);
          if (!variant) return null;
          const tone = verse.variants.findIndex((v) => v.id === variant.id);
          const accent = ["var(--gold)", "var(--azure)", "var(--violet)", "var(--emerald)"][tone] ?? "var(--gold)";
          return (
            <div key={r.id} className="rounded-xl border bg-surface p-4 text-center" style={{ borderColor: accent }}>
              <div className="text-sm font-semibold">{r.label}</div>
              <div className="font-mono text-[0.7rem] text-muted">{r.region}</div>
              <Arabic as="div" variant={layer === "vocalized" ? "quran" : "plain"} className="my-2 text-5xl">
                {render(verse, variant, layer, variant.id === baseId)}
              </Arabic>
              <div className={`transition-opacity ${layer === "vocalized" ? "opacity-100" : "opacity-0"}`} aria-hidden={layer !== "vocalized"}>
                <div className="text-sm italic" style={{ color: accent }}>
                  {variant.transliteration}
                </div>
                <div className="text-xs text-muted">{variant.meaning}</div>
              </div>
              {r.id === "hafs" || r.id === "warsh" ? <div className="mt-2">{audioButton(r.id)}</div> : <div className="mt-2 h-[26px]" />}
            </div>
          );
        })}
      </div>

      <p className="mt-3 rounded-lg border-l-2 border-gold bg-gold-soft p-3 text-sm leading-relaxed">
        {layer === "rasm"
          ? skeletons.size === 1
            ? "With dots and vowels removed, all four transmissions show one identical skeleton. The readings differ only in what the bare rasm leaves open — and each was fixed by oral teaching, not guessed from the page."
            : "This is one of the few places where the regional Uthmanic codices themselves differ by a letter; each reading follows the codex of its own city."
          : layer === "dotted"
            ? "Dots separate letters that share a shape (ب ت ث ن ي; ج ح خ; ر ز …). Where readers differ in dotting, both dottings fit the same undotted stroke."
            : "Full vocalization shows each transmission as recited. Audio is the whole verse; listen for the highlighted word."}
      </p>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">Canonical readings</h3>
          <ul className="space-y-2">
            {verse.variants.map((v) => (
              <li key={v.id} className="rounded-lg border border-line bg-surface-2 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <span className="text-sm font-semibold italic">{v.transliteration}</span>
                    <span className="text-sm text-muted"> — {v.meaning}</span>
                  </div>
                  <Arabic variant="quran" className="text-2xl">
                    {v.arabic}
                  </Arabic>
                </div>
                <div className="mt-1 text-xs text-muted">Read by: {v.readers.join(", ")}</div>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-muted">{verse.explanation}</p>
        </div>
        <SourceList sources={verse.sources} />
      </div>
    </section>
  );
}
