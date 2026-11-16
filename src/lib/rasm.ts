/**
 * Derives the bare (undotted, unvowelled) consonantal skeleton — the rasm — from
 * dotted Arabic, approximating how early Hijazi manuscripts look. Homographic
 * letters collapse onto a shared archigrapheme using Unicode dotless forms.
 */

const DIACRITICS = /[ؐ-ًؚ-ٰٟۖ-ۭـ]/g;
const ARABIC_LETTER = /[ء-يٮ-ۓ]/;

const SIMPLE: Record<string, string> = {
  "ب": "ٮ", "ت": "ٮ", "ث": "ٮ", "پ": "ٮ",
  "ج": "ح", "خ": "ح",
  "ذ": "د",
  "ز": "ر",
  "ش": "س",
  "ض": "ص",
  "ظ": "ط",
  "غ": "ع",
  "ف": "ڡ",
  "ة": "ه",
  "أ": "ا", "إ": "ا", "آ": "ا", "ٱ": "ا",
  "ؤ": "و",
  "ء": "",
};

/** Removes vowel signs, shaddah, sukun, dagger alif, Quranic annotation marks, tatweel. */
export function stripVowels(text: string): string {
  return text.normalize("NFC").replace(DIACRITICS, "");
}

export function toRasm(text: string): string {
  const chars = Array.from(stripVowels(text));
  let out = "";
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i] ?? "";
    const next = chars[i + 1];
    const isFinal = next === undefined || !ARABIC_LETTER.test(next);
    if (ch === "ن") out += isFinal ? "ں" : "ٮ";
    else if (ch === "ي" || ch === "ئ" || ch === "ى") out += isFinal ? "ى" : "ٮ";
    else if (ch === "ق") out += isFinal ? "ٯ" : "ڡ";
    else if (ch in SIMPLE) out += SIMPLE[ch] ?? "";
    else out += ch;
  }
  return out;
}

/** True when two spellings share the same undotted skeleton. */
export function sameRasm(a: string, b: string): boolean {
  return toRasm(a) === toRasm(b);
}
