import type { ReactNode } from "react";

interface ArabicProps {
  children: ReactNode;
  /** "quran" → Amiri Quran (vocalized scripture); "plain" → Scheherazade New (rasm, titles, prose). */
  variant?: "quran" | "plain";
  className?: string;
  as?: "span" | "p" | "div";
}

/** The only way Arabic is rendered in the app: sets dir/lang/font and clip-safe line height. */
export function Arabic({ children, variant = "plain", className = "", as: Tag = "span" }: ArabicProps) {
  return (
    <Tag
      dir="rtl"
      lang="ar"
      className={`arabic ${variant === "quran" ? "arabic-quran" : "arabic-plain"} ${Tag === "span" ? "inline-block" : "block"} ${className}`}
    >
      {children}
    </Tag>
  );
}
