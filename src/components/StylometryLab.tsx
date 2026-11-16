"use client";

import { useMemo, useState } from "react";
import { createRng } from "@/lib/random";
import { Arabic } from "./Arabic";

/* ----------------------------- PCA schematic ----------------------------- */

const W = 520;
const H = 320;
const PHASES = 7;

interface Pt {
  x: number;
  y: number;
  phase: number;
}

/** Schematic point clouds: one smooth trajectory vs. unrelated clusters. Not empirical data. */
function buildClouds(): { single: Pt[]; multi: Pt[]; centroidsSingle: Pt[]; centroidsMulti: Pt[] } {
  const rng = createRng(19);
  const jitter = (s: number) => (rng() - 0.5) * s;
  const single: Pt[] = [];
  const multi: Pt[] = [];
  const centroidsSingle: Pt[] = [];
  const centroidsMulti: Pt[] = [];
  const scattered: [number, number][] = [
    [110, 70], [400, 250], [150, 250], [430, 80], [260, 160], [60, 170], [330, 40],
  ];
  for (let p = 0; p < PHASES; p++) {
    const t = p / (PHASES - 1);
    const cx = 60 + t * 400;
    const cy = 250 - Math.sin(t * Math.PI * 0.95) * 170 + t * 30;
    centroidsSingle.push({ x: cx, y: cy, phase: p });
    const m = scattered[p] ?? [W / 2, H / 2];
    centroidsMulti.push({ x: m[0], y: m[1], phase: p });
    for (let i = 0; i < 9; i++) {
      single.push({ x: cx + jitter(46), y: cy + jitter(40), phase: p });
      multi.push({ x: m[0] + jitter(60), y: m[1] + jitter(54), phase: p });
    }
  }
  return { single, multi, centroidsSingle, centroidsMulti };
}

const PHASE_COLORS = ["var(--gold)", "var(--emerald)", "var(--azure)", "var(--violet)", "var(--crimson)", "var(--muted)", "var(--ink)"];

function PcaChart() {
  const [mode, setMode] = useState<"single" | "multi">("single");
  const clouds = useMemo(buildClouds, []);
  const pts = mode === "single" ? clouds.single : clouds.multi;
  const cents = mode === "single" ? clouds.centroidsSingle : clouds.centroidsMulti;
  const path = cents.map((c, i) => `${i === 0 ? "M" : "L"}${c.x},${c.y}`).join(" ");
  const jump = cents.slice(1).reduce((sum, c, i) => {
    const prev = cents[i];
    return prev ? sum + Math.hypot(c.x - prev.x, c.y - prev.y) : sum;
  }, 0);

  return (
    <div className="card p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">Stylometric trajectory</h3>
          <p className="text-sm text-muted">After Sadeghi, “The Chronology of the Qurʾān”, Arabica 58 (2011)</p>
        </div>
        <div className="flex gap-2" role="tablist">
          <button type="button" role="tab" aria-selected={mode === "single"} className={`btn ${mode === "single" ? "btn-active" : ""}`} onClick={() => setMode("single")}>
            Observed pattern
          </button>
          <button type="button" role="tab" aria-selected={mode === "multi"} className={`btn ${mode === "multi" ? "btn-active" : ""}`} onClick={() => setMode("multi")}>
            Multi-author expectation
          </button>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="mt-4 w-full" role="img" aria-label={mode === "single" ? "Seven phase clusters lying along one smooth curve" : "Seven phase clusters scattered with no smooth path"}>
        <rect x={0} y={0} width={W} height={H} fill="var(--surface-2)" rx={10} />
        <line x1={30} y1={H - 26} x2={W - 14} y2={H - 26} stroke="var(--line)" />
        <line x1={30} y1={14} x2={30} y2={H - 26} stroke="var(--line)" />
        <text x={W - 16} y={H - 8} textAnchor="end" fontSize={11} fill="var(--muted)" fontFamily="var(--font-mono)">
          PC1
        </text>
        <text x={12} y={22} fontSize={11} fill="var(--muted)" fontFamily="var(--font-mono)">
          PC2
        </text>
        <path d={path} fill="none" stroke="var(--gold)" strokeWidth={2} strokeDasharray={mode === "multi" ? "5 5" : undefined} opacity={0.8} />
        {pts.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={3.6} fill={PHASE_COLORS[p.phase]} opacity={0.75} />
        ))}
        {cents.map((c) => (
          <g key={c.phase}>
            <circle cx={c.x} cy={c.y} r={11} fill="var(--bg)" stroke={PHASE_COLORS[c.phase]} strokeWidth={2} />
            <text x={c.x} y={c.y + 4} textAnchor="middle" fontSize={11} fontWeight={600} fill="var(--ink)" fontFamily="var(--font-mono)">
              {c.phase + 1}
            </text>
          </g>
        ))}
      </svg>

      <div className="mt-3 grid gap-3 sm:grid-cols-[auto_1fr]">
        <div className="rounded-lg border border-line px-4 py-2 text-center">
          <div className="font-mono text-xl font-semibold text-gold">{Math.round(jump)}</div>
          <div className="text-xs text-muted">path length (arbitrary units)</div>
        </div>
        <p className="text-sm leading-relaxed text-muted">
          {mode === "single"
            ? "Sadeghi divided the text into seven groups along a proposed chronological sequence and measured several independent stylistic markers (common morphemes, word frequencies, verse length). Each marker moves gradually from one group to the next — “smoothness” — and the markers agree with each other. He argues this concurrent, continuous drift is what one expects from a single source whose style evolved over time."
            : "If the corpus had been stitched together from the work of several authors or communities, adjacent groups would have no reason to resemble each other: independent markers would jump erratically and disagree about the ordering. That is the pattern Sadeghi reports not finding."}
        </p>
      </div>
      <p className="mt-3 rounded-lg border border-line bg-surface-2 p-3 text-xs leading-relaxed text-muted">
        <strong className="text-ink">Schematic.</strong> The points above are an illustration of the shape of the argument, not
        Sadeghi’s dataset; consult the paper for the actual figures. Stylometry speaks to unity of style and relative
        chronology — it cannot by itself identify the author or settle theological questions.
      </p>
    </div>
  );
}

/* --------------------------------- Stemma -------------------------------- */

interface StemmaNode {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
  kind: "oral" | "reported" | "archetype" | "regional" | "witness" | "other";
  detail: string;
}

const NODES: StemmaNode[] = [
  { id: "prophet", label: "Prophetic recitation", sub: "610–632 CE", x: 300, y: 36, kind: "oral",
    detail: "The starting point in every account: the text as recited and dictated during the Prophet's lifetime. This stage is known through the Muslim historical tradition; no manuscript can be securely placed here, though the Birmingham parchment's radiocarbon range (568–645 CE) overlaps it." },
  { id: "suhuf", label: "Abu Bakr's ṣuḥuf", sub: "c. 633 CE · reported", x: 190, y: 112, kind: "reported",
    detail: "The collection made by Zayd ibn Thabit after Yamamah (Sahih al-Bukhari 4986), kept by Abu Bakr, then 'Umar, then Hafsah. It is attested by reports rather than by a surviving artefact, which is why it is drawn with a dashed outline." },
  { id: "c1", label: "Ṣanʿāʾ 1 lower text", sub: "non-ʿUthmānic", x: 480, y: 150, kind: "other",
    detail: "The erased lower writing of the Sana'a palimpsest (DAM 01-27.1) is the one substantial manuscript witness to a text type outside the Uthmanic family. Sadeghi and Goudarzi argue that it and the Uthmanic text descend independently from a common Prophetic prototype; its variants are small-scale (synonyms, word order, short pluses and minuses)." },
  { id: "arch", label: "ʿUthmānic archetype", sub: "c. 650 CE", x: 300, y: 196, kind: "archetype",
    detail: "Van Putten (BSOAS 2019) showed that early manuscripts share the same arbitrary spellings in the same places — e.g. niʿmat written with open tāʾ (نعمت) in specific verses and with tāʾ marbūṭah (نعمة) in others. Such agreement in non-functional detail cannot arise from independent dictation; it requires copying from one written exemplar." },
  { id: "medina", label: "Medina", sub: "regional exemplar", x: 90, y: 286, kind: "regional",
    detail: "One of four regional exemplars whose roughly forty small skeletal differences (a wāw here, a huwa there) were catalogued by classical rasm authors such as al-Dani and analysed stemmatically by Cook (2004) and Sidky (2020)." },
  { id: "syria", label: "Syria", sub: "regional exemplar", x: 230, y: 286, kind: "regional",
    detail: "The Syrian exemplar. Early manuscripts such as the Codex Parisino-Petropolitanus and British Library Or. 2165 carry characteristically Syrian skeletal variants, as noted by Déroche and Dutton." },
  { id: "basra", label: "Basra", sub: "regional exemplar", x: 370, y: 286, kind: "regional",
    detail: "The Basran exemplar. Sidky found that surviving first- and second-century manuscripts sort cleanly into the four regional families by their skeletal variants, confirming the literary reports with physical evidence." },
  { id: "kufa", label: "Kufa", sub: "regional exemplar", x: 510, y: 286, kind: "regional",
    detail: "The Kufan exemplar, the textual base of the readings of 'Asim, Hamzah and al-Kisa'i — and so, through Hafs, of the most widely printed text today." },
  { id: "mss", label: "Surviving early manuscripts", sub: "1st–2nd c. AH", x: 300, y: 372, kind: "witness",
    detail: "Hijazi and early Kufic codices and fragments — among them Birmingham Mingana 1572a / BnF Arabe 328c, Codex Parisino-Petropolitanus, Tübingen Ma VI 165, BL Or. 2165 and the upper text of the Sana'a palimpsest — all belong to the Uthmanic text type and each aligns with a regional family." },
];

const EDGES: [string, string, boolean][] = [
  ["prophet", "suhuf", true],
  ["suhuf", "arch", true],
  ["prophet", "c1", true],
  ["arch", "medina", false],
  ["arch", "syria", false],
  ["arch", "basra", false],
  ["arch", "kufa", false],
  ["medina", "mss", false],
  ["syria", "mss", false],
  ["basra", "mss", false],
  ["kufa", "mss", false],
];

const KIND_COLOR: Record<StemmaNode["kind"], string> = {
  oral: "var(--gold)",
  reported: "var(--muted)",
  archetype: "var(--gold)",
  regional: "var(--emerald)",
  witness: "var(--azure)",
  other: "var(--violet)",
};

function StemmaTree() {
  const [selected, setSelected] = useState("arch");
  const node = NODES.find((n) => n.id === selected) ?? NODES[0];
  const byId = new Map(NODES.map((n) => [n.id, n]));

  return (
    <div className="card p-5">
      <h3 className="text-lg font-semibold">Stemma of the written text</h3>
      <p className="text-sm text-muted">After Cook (2004), van Putten (2019), Sidky (2020), Sadeghi &amp; Goudarzi (2012). Select a node.</p>
      <svg viewBox="0 0 600 410" className="mt-3 w-full" role="img" aria-label="Stemma from Prophetic recitation through the Uthmanic archetype to regional exemplars and surviving manuscripts">
        {EDGES.map(([a, b, dashed]) => {
          const na = byId.get(a);
          const nb = byId.get(b);
          if (!na || !nb) return null;
          return <line key={`${a}-${b}`} x1={na.x} y1={na.y + 18} x2={nb.x} y2={nb.y - 18} stroke="var(--line)" strokeWidth={1.5} strokeDasharray={dashed ? "5 4" : undefined} />;
        })}
        {NODES.map((n) => {
          const active = n.id === selected;
          const w = n.kind === "witness" ? 200 : n.kind === "regional" ? 116 : 156;
          return (
            <g key={n.id} onClick={() => setSelected(n.id)} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelected(n.id)} tabIndex={0} role="button" aria-pressed={active} aria-label={n.label} style={{ cursor: "pointer" }}>
              <rect
                x={n.x - w / 2}
                y={n.y - 18}
                width={w}
                height={36}
                rx={9}
                fill={active ? "var(--gold-soft)" : "var(--surface-2)"}
                stroke={KIND_COLOR[n.kind]}
                strokeWidth={active ? 2.5 : 1.5}
                strokeDasharray={n.kind === "reported" ? "5 4" : undefined}
              />
              <text x={n.x} y={n.y - 2} textAnchor="middle" fontSize={11.5} fontWeight={600} fill="var(--ink)">
                {n.label}
              </text>
              <text x={n.x} y={n.y + 11} textAnchor="middle" fontSize={9} fill="var(--muted)" fontFamily="var(--font-mono)">
                {n.sub}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-4 rounded-sm border" style={{ borderColor: "var(--emerald)" }} /> attested by manuscripts</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-4 rounded-sm border border-dashed" style={{ borderColor: "var(--muted)" }} /> known from reports</span>
      </div>
      {node ? (
        <div className="mt-3 rounded-lg border-l-2 border-gold bg-gold-soft p-3">
          <div className="text-sm font-semibold">{node.label}</div>
          <p className="mt-1 text-sm leading-relaxed text-muted">{node.detail}</p>
        </div>
      ) : null}
    </div>
  );
}

/* --------------------------- "Grace of God" table ------------------------- */

const NIMAT: { ref: string; open: boolean }[] = [
  { ref: "2:231", open: true },
  { ref: "3:103", open: true },
  { ref: "5:7", open: false },
  { ref: "5:11", open: true },
  { ref: "14:6", open: false },
  { ref: "14:28", open: true },
  { ref: "14:34", open: true },
  { ref: "16:18", open: false },
  { ref: "16:72", open: true },
  { ref: "16:83", open: true },
  { ref: "16:114", open: true },
  { ref: "31:31", open: true },
  { ref: "35:3", open: true },
];

function NimatTable() {
  return (
    <div className="card p-5">
      <h3 className="text-lg font-semibold">The “Grace of God” test</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted">
        The same word in the same grammatical construction — <em>niʿmat Allāh</em>, “the grace of God” — is spelled two
        ways in the Uthmanic rasm. Nothing in pronunciation or grammar predicts which verse gets which spelling, yet the
        early manuscripts van Putten examined agree on the distribution. Shared arbitrary spelling is the fingerprint of
        a common written ancestor.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
        {NIMAT.map((n) => (
          <div key={n.ref} className={`rounded-lg border p-2 text-center ${n.open ? "border-gold bg-gold-soft" : "border-line bg-surface-2"}`}>
            <div className="font-mono text-xs text-muted">Q {n.ref}</div>
            <Arabic className="text-2xl">{n.open ? "نعمت" : "نعمة"}</Arabic>
            <div className="text-[0.65rem] text-muted">{n.open ? "open tāʾ" : "tāʾ marbūṭah"}</div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted">
        Spellings as recorded in the classical rasm literature and printed in the Madinah mushaf; a selection of the
        occurrences discussed in van Putten, BSOAS 82/2 (2019), 271–288.
      </p>
    </div>
  );
}

export function StylometryLab() {
  return (
    <section aria-label="Stylometry and stemmatics lab" className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Stylometry &amp; Stemmatics Lab</h2>
        <p className="text-sm text-muted">Two independent quantitative lines of evidence: how the style behaves, and how the manuscripts are related.</p>
      </div>
      <div className="grid gap-4 xl:grid-cols-2">
        <PcaChart />
        <StemmaTree />
      </div>
      <NimatTable />
    </section>
  );
}
