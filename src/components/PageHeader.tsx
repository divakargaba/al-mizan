import type { ReactNode } from "react";
import { Arabic } from "./Arabic";

export function PageHeader({ title, arabic, children }: { title: string; arabic: string; children: ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-3xl">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{children}</p>
      </div>
      <Arabic className="text-4xl text-gold">{arabic}</Arabic>
    </div>
  );
}
