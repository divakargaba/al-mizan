/**
 * Unified, typed entry point for the Al-Mizan knowledge base.
 * UI code imports from "@/data" only.
 */
import { internalQuranicProofs } from "./proofs/internal-quranic";
import { sunnahTawaturProofs } from "./proofs/sunnah-tawatur";
import { compilationHistoryProofs } from "./proofs/compilation-history";
import { manuscriptsEpigraphyProofs } from "./proofs/manuscripts-epigraphy";
import { stylometryInfoTheoryProofs } from "./proofs/stylometry-info-theory";
import { ahrufTheoryProofs } from "./qiraat/ahruf-theory";
import { interactiveVerses } from "./qiraat/interactive-verses";
import { qurra } from "./qiraat/readers";
import { manuscriptsVariantsRefutations } from "./refutations/manuscripts-variants";
import { hadithAbrogationRefutations } from "./refutations/hadith-abrogation";
import { orientalistRevisionismRefutations } from "./refutations/orientalist-revisionism";
import { linguisticsCanonSectarianRefutations } from "./refutations/linguistics-canon-sectarian";
import { timeline } from "./timeline";
import type { PillarId, Proof, Refutation, RefutationCategory } from "./types";

export * from "./types";

export interface PillarMeta {
  id: PillarId;
  number: number;
  title: string;
  short: string;
  arabic: string;
  blurb: string;
}

export const pillars: PillarMeta[] = [
  {
    id: "internal-quranic",
    number: 1,
    title: "Internal Quranic & Literary-Structural Evidence",
    short: "Internal",
    arabic: "الدليل الداخلي",
    blurb: "The text's own preservation claims, the inimitability challenge, and large-scale compositional structure.",
  },
  {
    id: "sunnah-tawatur",
    number: 2,
    title: "Prophetic Sunnah & Mass Oral Transmission",
    short: "Tawatur",
    arabic: "التواتر",
    blurb: "Annual reviews with Jibril, public liturgy, memorizers and scribes of revelation.",
  },
  {
    id: "compilation-history",
    number: 3,
    title: "Three-Stage Compilation & Standardization",
    short: "Compilation",
    arabic: "جمع القرآن",
    blurb: "From the Prophetic era through Abu Bakr's suhuf to the Uthmanic codices.",
  },
  {
    id: "manuscripts-epigraphy",
    number: 4,
    title: "Manuscripts, Radiocarbon Dating & Epigraphy",
    short: "Manuscripts",
    arabic: "المخطوطات",
    blurb: "First-century parchment, stemmatics of the Uthmanic archetype, inscriptions and coins.",
  },
  {
    id: "stylometry-info-theory",
    number: 5,
    title: "Stylometry & Information Theory",
    short: "Stylometry",
    arabic: "الأسلوبية",
    blurb: "Quantitative style analysis and the dual-channel (written + oral) transmission model.",
  },
  {
    id: "ahruf-qiraat",
    number: 6,
    title: "The Science of Ahruf & Qira'at",
    short: "Qira'at",
    arabic: "القراءات",
    blurb: "Seven ahruf, ten canonical readings, and the three conditions of a sound reading.",
  },
];

export const proofsByPillar: Record<PillarId, Proof[]> = {
  "internal-quranic": internalQuranicProofs,
  "sunnah-tawatur": sunnahTawaturProofs,
  "compilation-history": compilationHistoryProofs,
  "manuscripts-epigraphy": manuscriptsEpigraphyProofs,
  "stylometry-info-theory": stylometryInfoTheoryProofs,
  "ahruf-qiraat": ahrufTheoryProofs,
};

export const proofs: Proof[] = pillars.flatMap((p) => proofsByPillar[p.id]);

export const refutationCategories: { id: RefutationCategory; title: string; short: string }[] = [
  { id: "manuscripts-variants", title: "Manuscripts & Companion Codices", short: "Manuscripts" },
  { id: "hadith-abrogation", title: "Hadith Reports & Abrogation", short: "Hadith" },
  { id: "orientalist-revisionism", title: "Orientalist & Revisionist Theories", short: "Revisionism" },
  { id: "linguistics-canon-sectarian", title: "Language, Canon & Sectarian Claims", short: "Language & Canon" },
];

export const refutations: Refutation[] = [
  ...manuscriptsVariantsRefutations,
  ...hadithAbrogationRefutations,
  ...orientalistRevisionismRefutations,
  ...linguisticsCanonSectarianRefutations,
].sort((a, b) => a.number - b.number);

export {
  internalQuranicProofs,
  sunnahTawaturProofs,
  compilationHistoryProofs,
  manuscriptsEpigraphyProofs,
  stylometryInfoTheoryProofs,
  ahrufTheoryProofs,
  interactiveVerses,
  qurra,
  manuscriptsVariantsRefutations,
  hadithAbrogationRefutations,
  orientalistRevisionismRefutations,
  linguisticsCanonSectarianRefutations,
  timeline,
};
