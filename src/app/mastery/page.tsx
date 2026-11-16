import { Mastery } from "@/components/Mastery";
import { PageHeader } from "@/components/PageHeader";

export const metadata = { title: "Mastery & Certification · Al-Mizan" };

export default function MasteryPage() {
  return (
    <div>
      <PageHeader title="Mastery Engine & Certification" arabic="الإتقان والإجازة">
        Keep what you have learned with spaced review, then sit a mixed-format exam covering manuscripts, chronology,
        qira&apos;at rules and critique rebuttal.
      </PageHeader>
      <Mastery />
    </div>
  );
}
