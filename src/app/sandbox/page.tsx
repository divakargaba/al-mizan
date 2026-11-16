import { PageHeader } from "@/components/PageHeader";
import { QiraatStemma } from "@/components/QiraatStemma";
import { RasmSandbox } from "@/components/RasmSandbox";
import { ScribesEye } from "@/components/ScribesEye";

export const metadata = { title: "Rasm & Qira'at Sandbox · Al-Mizan" };

export default function SandboxPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Rasm & Qira'at Paleography Sandbox" arabic="الرسم والقراءات">
        Strip a verse back to its bare seventh-century skeleton, add the dots, then the vowels — and see exactly where
        the canonical readings part ways and where they cannot.
      </PageHeader>
      <RasmSandbox />
      <ScribesEye />
      <QiraatStemma />
    </div>
  );
}
