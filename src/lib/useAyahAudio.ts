"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ayahAudioUrl, type AudioRiwayah } from "./audio";

export type AudioStatus = "idle" | "loading" | "playing" | "error";

/** Plays one ayah at a time; any failure resolves to an "error" status instead of throwing. */
export function useAyahAudio() {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [status, setStatus] = useState<AudioStatus>("idle");
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const stop = useCallback(() => {
    const el = ref.current;
    if (el) {
      el.pause();
      el.src = "";
    }
    ref.current = null;
    setStatus("idle");
    setActiveKey(null);
  }, []);

  const play = useCallback(
    (riwayah: AudioRiwayah, surah: number, ayah: number) => {
      const key = `${riwayah}-${surah}-${ayah}`;
      if (ref.current && activeKey === key) {
        stop();
        return;
      }
      stop();
      if (typeof navigator !== "undefined" && navigator.onLine === false) {
        setActiveKey(key);
        setStatus("error");
        return;
      }
      const el = new Audio(ayahAudioUrl(riwayah, surah, ayah));
      ref.current = el;
      setActiveKey(key);
      setStatus("loading");
      el.addEventListener("playing", () => setStatus("playing"));
      el.addEventListener("ended", () => {
        setStatus("idle");
        setActiveKey(null);
      });
      el.addEventListener("error", () => setStatus("error"));
      el.play().catch(() => setStatus("error"));
    },
    [activeKey, stop],
  );

  useEffect(() => () => ref.current?.pause(), []);

  return { play, stop, status, activeKey };
}
