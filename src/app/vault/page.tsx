import { PageHeader } from "@/components/PageHeader";
import { ProofVault } from "@/components/ProofVault";
import { StylometryLab } from "@/components/StylometryLab";

export const metadata = { title: "Proof Vault · Al-Mizan" };

export default function VaultPage() {
  return (
    <div className="space-y-10">
      <div>
        <PageHeader title="Preservation Proof Vault" arabic="خزانة الأدلة">
          Six pillars of evidence, each with primary texts, citations you can follow, an honest statement of limits,
          and short verification questions.
        </PageHeader>
        <ProofVault />
      </div>
      <StylometryLab />
    </div>
  );
}
