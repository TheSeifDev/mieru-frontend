import { LegalPage } from "@/src/components/marketing/legal/LegalPage";
import { COOKIES_SECTIONS } from "@/src/components/marketing/legal/cookies-sections";

export const metadata = {
  title: "Cookie Policy — MIERU",
  description:
    "Learn how MIERU uses cookies and similar technologies, and how you can control them.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      type="cookies"
      title="Cookie Policy"
      description="How MIERU uses cookies and similar technologies, and the choices you have."
      updated="October 3, 2026"
      sections={COOKIES_SECTIONS}
    />
  );
}