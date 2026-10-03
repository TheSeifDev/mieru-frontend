import { LegalPage } from "@/src/components/marketing/legal/LegalPage";
import { PRIVACY_SECTIONS } from "@/src/components/marketing/legal/legal-data";

export const metadata = {
  title: "Privacy Policy — MIERU",
  description:
    "Learn how MIERU collects, uses, protects, and handles information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      type="privacy"
      title="Privacy Policy"
      description="How MIERU handles information when you use our SEO and AI visibility platform."
      updated="October 3, 2026"
      sections={PRIVACY_SECTIONS}
    />
  );
}