import { LegalPage } from "@/src/components/marketing/legal/LegalPage";
import { TERMS_SECTIONS } from "@/src/components/marketing/legal/legal-data";

export const metadata = {
  title: "Terms of Service — MIERU",
  description:
    "The terms and conditions governing your use of the MIERU platform.",
};

export default function TermsPage() {
  return (
    <LegalPage
      type="terms"
      title="Terms of Service"
      description="The rules and conditions that apply when you access or use the MIERU platform."
      updated="October 3, 2026"
      sections={TERMS_SECTIONS}
    />
  );
}