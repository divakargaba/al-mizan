"use client";

import { useState } from "react";
import { BookOpen, Swords } from "lucide-react";
import { DebateArena } from "./DebateArena";
import { Encyclopedia } from "./Encyclopedia";

export function Arena() {
  const [tab, setTab] = useState<"encyclopedia" | "debate">("encyclopedia");
  const [debateId, setDebateId] = useState<string | null>(null);
  const [nonce, setNonce] = useState(0);

  return (
    <div>
      <div className="mb-5 flex gap-2" role="tablist">
        <button type="button" role="tab" aria-selected={tab === "encyclopedia"} className={`btn ${tab === "encyclopedia" ? "btn-active" : ""}`} onClick={() => setTab("encyclopedia")}>
          <BookOpen className="h-4 w-4" aria-hidden /> Encyclopedia
        </button>
        <button type="button" role="tab" aria-selected={tab === "debate"} className={`btn ${tab === "debate" ? "btn-active" : ""}`} onClick={() => setTab("debate")}>
          <Swords className="h-4 w-4" aria-hidden /> Debate Arena
        </button>
      </div>
      {tab === "encyclopedia" ? (
        <Encyclopedia
          onDebate={(id) => {
            setDebateId(id);
            setNonce((n) => n + 1);
            setTab("debate");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      ) : (
        <DebateArena key={nonce} initialId={debateId} />
      )}
    </div>
  );
}
