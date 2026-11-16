import { Arena } from "@/components/Arena";
import { PageHeader } from "@/components/PageHeader";

export const metadata = { title: "Critique & Refutation Arena · Al-Mizan" };

export default function ArenaPage() {
  return (
    <div>
      <PageHeader title="Critique & Refutation Arena" arabic="ميدان المناظرة">
        Twenty-four objections raised against the integrity of the Quranic text — each stated in its strongest form,
        answered step by step from primary sources, and marked with what specialists still debate.
      </PageHeader>
      <Arena />
    </div>
  );
}
