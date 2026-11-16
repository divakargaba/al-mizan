/**
 * Al-Mizan knowledge-base schema.
 * Every data module in src/data/ must conform to these types. Do not widen them
 * with `any`; if an entry needs a new field, add it here first.
 */

export type PillarId =
  | "internal-quranic"
  | "sunnah-tawatur"
  | "compilation-history"
  | "manuscripts-epigraphy"
  | "stylometry-info-theory"
  | "ahruf-qiraat";

export type SourceKind =
  | "quran"
  | "hadith"
  | "manuscript"
  | "inscription"
  | "classical"
  | "academic";

/** One verifiable citation. `citation` must be specific enough to look up. */
export interface Source {
  kind: SourceKind;
  /** e.g. "Sahih al-Bukhari 4986", "Sadeghi & Goudarzi, Der Islam 87 (2012), 1–129" */
  citation: string;
  /** What this source actually establishes for the entry (one or two sentences). */
  detail: string;
  /** Stable public URL when one exists (DOI, museum record, sunnah.com). */
  url?: string;
}

export interface ArabicQuote {
  /** Fully vocalized Arabic text. */
  text: string;
  /** e.g. "Q 15:9" or "Sahih al-Bukhari 4986" */
  reference: string;
  translation: string;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  /** Exactly four options. */
  options: string[];
  answerIndex: number;
  /** Scholarly feedback shown after answering (>= 80 chars). */
  explanation: string;
}

export interface Proof {
  id: string;
  pillar: PillarId;
  title: string;
  arabicTitle?: string;
  /** 1–2 sentence abstract (>= 80 chars). */
  summary: string;
  /** 3–6 full paragraphs of exposition. */
  body: string[];
  arabicQuotes: ArabicQuote[];
  /** 3–6 crisp, checkable facts. */
  keyFacts: string[];
  /**
   * Honest limits of the evidence: what it does NOT show, where specialists
   * disagree, and how the traditional and academic framings differ.
   */
  scholarlyNuance: string;
  sources: Source[];
  /** 2–3 micro-verification questions. */
  quiz: QuizQuestion[];
}

export type TimelineCategory =
  | "revelation"
  | "compilation"
  | "manuscript"
  | "epigraphy"
  | "scholarship"
  | "modern";

export interface TimelineMilestone {
  id: string;
  /** Numeric CE year used for ordering and the scrubber (midpoint for ranges). */
  yearCE: number;
  /** Display label, e.g. "c. 610 CE" or "568–645 CE (C-14)". */
  dateLabel: string;
  /** Hijri label, e.g. "13 BH", "25 AH". */
  hijriLabel: string;
  title: string;
  arabicTitle?: string;
  category: TimelineCategory;
  /** What happened (>= 80 chars). */
  description: string;
  /** Why it matters for the transmission history of the text (>= 80 chars). */
  significance: string;
  sources: Source[];
}

export type RefutationCategory =
  | "manuscripts-variants"
  | "hadith-abrogation"
  | "orientalist-revisionism"
  | "linguistics-canon-sectarian";

export type EvidenceType =
  | "manuscript"
  | "isnad"
  | "usul"
  | "linguistic"
  | "stylometric"
  | "historical";

export interface DebateCounterCard {
  /** Globally unique, e.g. "r01-c1". */
  id: string;
  type: EvidenceType;
  /** Short card title (<= 60 chars). */
  title: string;
  /** The evidence itself, 1–3 sentences (>= 80 chars). */
  text: string;
  /** 1 = supporting, 2 = strong, 3 = decisive. */
  strength: 1 | 2 | 3;
}

export interface RefutationStep {
  heading: string;
  /** A full analytical paragraph (>= 200 chars). */
  analysis: string;
}

export interface Refutation {
  /** e.g. "r01-sanaa-palimpsest" */
  id: string;
  /** 1–24, matching the encyclopedia numbering. */
  number: number;
  title: string;
  category: RefutationCategory;
  eraOrOrigin: string;
  /** The objection in its strongest fair form, as its best proponents state it. */
  steelmanObjection: string;
  coreRefutationSummary: string;
  /** 3–5 steps. */
  stepByStepBreakdown: RefutationStep[];
  /** What remains genuinely debated among specialists; never overclaim. */
  scholarlyNuance: string;
  /** >= 3 sources, mixing primary texts and academic studies. */
  primarySources: Source[];
  /** 3–4 cards. */
  debateCounterCards: DebateCounterCard[];
  /** 2 questions. */
  quiz: QuizQuestion[];
}

/* ------------------------------- Qira'at -------------------------------- */

export type RiwayahId = "hafs" | "warsh" | "qalun" | "duri-abu-amr";

export interface ReadingVariant {
  id: string;
  /** Fully vocalized Arabic of the variant word/phrase only. */
  arabic: string;
  transliteration: string;
  meaning: string;
  /** Canonical readers who read this way, e.g. ["'Asim", "al-Kisa'i"]. */
  readers: string[];
}

export interface InvalidReading {
  arabic: string;
  transliteration: string;
  /** Which of Ibn al-Jazari's conditions it fails. */
  violates: "rasm" | "nahw" | "isnad";
  whyInvalid: string;
}

export type VariantKind =
  | "vowels"
  | "dotting"
  | "vowels-and-dotting"
  | "long-vowel"
  | "skeletal";

export interface InteractiveVerse {
  id: string;
  surah: number;
  ayah: number;
  /** "Q 1:4" */
  reference: string;
  surahName: string;
  /**
   * The variant word in Uthmanic consonantal spelling WITH i'jam dots but
   * WITHOUT vowels (e.g. "ملك" for Q 1:4). The undotted rasm is derived in code.
   * For skeletal variants give the Hafs-codex spelling here.
   */
  dottedSkeleton: string;
  /** For regional-codex (skeletal) variants: the alternative codex spelling. */
  alternateSkeleton?: string;
  /** Short surrounding phrase, fully vocalized per Hafs, containing the word. */
  contextArabic: string;
  contextTranslation: string;
  kind: VariantKind;
  /** 2+ canonical (mutawatir) readings. */
  variants: ReadingVariant[];
  /** Which variant id each of the four showcased riwayat follows. */
  riwayat: Record<RiwayahId, string>;
  /** 1–2 plausible-looking readings that are NOT canonical, for Scribe's Eye. */
  invalidReadings: InvalidReading[];
  /** How the readings relate in meaning; why both are held to be revealed. */
  explanation: string;
  sources: Source[];
}

export interface Rawi {
  id: string;
  name: string;
  arabicName: string;
  /** Death year AH. */
  deathAH: number;
  note: string;
}

export interface Qari {
  id: string;
  /** 1–10 in the traditional order. */
  rank: number;
  name: string;
  arabicName: string;
  city: "Madinah" | "Makkah" | "Basrah" | "Damascus" | "Kufah" | "Baghdad";
  deathAH: number;
  /** In the Seven of Ibn Mujahid, or added in the Ten by Ibn al-Jazari. */
  canon: "seven" | "three-completing-ten";
  /** Named teachers linking the reader back to the Companions. */
  chainToProphet: string[];
  ruwat: [Rawi, Rawi];
  note: string;
}
