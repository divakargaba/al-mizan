/**
 * Recitation audio from everyayah.com (per-ayah MP3s). Purely an enhancement:
 * callers must tolerate load failures (offline, blocked host, missing file).
 */
export type AudioRiwayah = "hafs" | "warsh";

const RECITERS: Record<AudioRiwayah, { path: string; label: string }> = {
  hafs: { path: "Husary_128kbps", label: "Hafs ʿan ʿĀṣim — Mahmud Khalil al-Husary" },
  warsh: {
    path: "warsh/warsh_ibrahim_aldosary_128kbps",
    label: "Warsh ʿan Nāfiʿ — Ibrahim al-Dosary",
  },
};

const pad = (n: number) => String(n).padStart(3, "0");

export function ayahAudioUrl(riwayah: AudioRiwayah, surah: number, ayah: number): string {
  return `https://everyayah.com/data/${RECITERS[riwayah].path}/${pad(surah)}${pad(ayah)}.mp3`;
}

export function reciterLabel(riwayah: AudioRiwayah): string {
  return RECITERS[riwayah].label;
}
