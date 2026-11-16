import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Al-Mizan · The Transmission & Integrity of the Quranic Text",
  description:
    "An interactive study of how the Quran was transmitted: manuscripts, radiocarbon dating, stemmatics, qira'at, and a 24-entry encyclopedia of critiques and responses.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="obsidian" suppressHydrationWarning>
      <body>
        <Nav />
        <main className="mx-auto max-w-7xl px-4 py-6 sm:py-8">{children}</main>
        <footer className="mx-auto max-w-7xl px-4 pb-10 pt-4 text-xs leading-relaxed text-muted">
          Al-Mizan presents the case for the faithful transmission of the Quranic text and cites its sources so that
          every claim can be checked. Each entry carries a “scholarly nuance” note stating where specialists disagree.
          Progress is stored only in this browser.
        </footer>
      </body>
    </html>
  );
}
