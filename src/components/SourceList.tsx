import { BookOpen, ExternalLink, FileText, Landmark, Mountain, ScrollText, Sparkles } from "lucide-react";
import type { Source, SourceKind } from "@/data";

const ICON: Record<SourceKind, typeof BookOpen> = {
  quran: Sparkles,
  hadith: ScrollText,
  manuscript: Landmark,
  inscription: Mountain,
  classical: BookOpen,
  academic: FileText,
};

const LABEL: Record<SourceKind, string> = {
  quran: "Quran",
  hadith: "Hadith",
  manuscript: "Manuscript",
  inscription: "Inscription",
  classical: "Classical",
  academic: "Academic",
};

export function SourceList({ sources, title = "Sources" }: { sources: Source[]; title?: string }) {
  return (
    <div>
      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">{title}</h4>
      <ul className="space-y-2">
        {sources.map((s, i) => {
          const Icon = ICON[s.kind];
          return (
            <li key={`${s.citation}-${i}`} className="flex gap-3 rounded-lg border border-line bg-surface-2 p-3">
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[0.7rem] uppercase text-muted">{LABEL[s.kind]}</span>
                  <span className="text-sm font-medium break-words">{s.citation}</span>
                  {s.url ? (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-azure hover:underline"
                    >
                      open <ExternalLink className="h-3 w-3" aria-hidden />
                    </a>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-muted">{s.detail}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
