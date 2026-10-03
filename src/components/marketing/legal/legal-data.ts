export type LegalSection = {
  id: string;
  title: string;
  content: string[];
  bullets?: string[];
};

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: [
      "When you use MIERU, we may collect information that you provide directly to us, information generated through your use of the service, and limited technical information required to operate and secure the platform.",
      "This may include account information such as your name, email address, workspace information, and authentication details.",
    ],
    bullets: [
      "Account and profile information",
      "Project and website information you choose to monitor",
      "Keywords, competitors, and search configuration",
      "Usage and product interaction data",
      "Device, browser, and basic technical information",
    ],
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Information",
    content: [
      "We use collected information to provide, maintain, secure, and improve MIERU and its features.",
      "We may also use information to communicate with you about your account, service updates, security events, and important changes to our terms or policies.",
    ],
    bullets: [
      "Provide and operate the MIERU service",
      "Generate SEO and AI visibility insights",
      "Maintain account and workspace functionality",
      "Detect and prevent abuse or security incidents",
      "Improve product performance and reliability",
      "Provide support and service communications",
    ],
  },
  {
    id: "data-storage-security",
    title: "3. Data Storage & Security",
    content: [
      "We use reasonable technical and organizational measures designed to protect information against unauthorized access, alteration, disclosure, or destruction.",
      "No internet-based service can guarantee absolute security. You are responsible for maintaining the security of your account credentials and notifying us of suspected unauthorized access.",
    ],
  },
  {
    id: "third-party-services",
    title: "4. Third-Party Services",
    content: [
      "MIERU may rely on third-party infrastructure, analytics, authentication, hosting, or data providers to operate parts of the service.",
      "These providers may process information only as necessary to provide their services to us and are subject to their own terms and privacy policies.",
    ],
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    content: [
      "We retain information for as long as reasonably necessary to provide the service, maintain legitimate business records, resolve disputes, enforce agreements, and meet applicable legal obligations.",
      "Retention periods may vary depending on the type of information and the purpose for which it is processed.",
    ],
  },
  {
    id: "your-rights",
    title: "6. Your Rights",
    content: [
      "Depending on applicable law, you may have rights relating to your personal information, including rights to access, correct, delete, or request a copy of certain information.",
      "Requests may be subject to verification and applicable legal limitations.",
    ],
  },
  {
    id: "cookies",
    title: "7. Cookies & Similar Technologies",
    content: [
      "MIERU may use cookies and similar technologies to maintain sessions, remember preferences, understand product usage, and improve the service.",
      "You may be able to control certain cookies through your browser settings. Disabling required cookies may affect parts of the service.",
    ],
  },
  {
    id: "children",
    title: "8. Children's Privacy",
    content: [
      "MIERU is intended for business and professional use and is not directed toward children. We do not knowingly collect personal information from children where prohibited by applicable law.",
    ],
  },
  {
    id: "policy-changes",
    title: "9. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in the service, legal requirements, or our practices.",
      "When material changes are made, we may provide an appropriate notice through the service or other communication channels.",
    ],
  },
  {
    id: "contact",
    title: "10. Contact",
    content: [
      "If you have questions about this Privacy Policy or how MIERU handles information, please contact the MIERU team through the official support or contact channel associated with your account.",
    ],
  },
];

export const TERMS_SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: [
      "These Terms of Service govern your access to and use of MIERU. By creating an account or using the service, you agree to be bound by these Terms.",
      "If you do not agree with these Terms, you should not use the service.",
    ],
  },
  {
    id: "the-service",
    title: "2. The MIERU Service",
    content: [
      "MIERU provides software for monitoring and analyzing search visibility, SEO performance, keywords, competitors, reports, and AI search visibility.",
      "Features may change over time as the service develops. We may add, modify, suspend, or discontinue features where reasonably necessary.",
    ],
  },
  {
    id: "accounts",
    title: "3. Accounts",
    content: [
      "You are responsible for providing accurate account information and maintaining the confidentiality of your authentication credentials.",
      "You are responsible for activity that occurs through your account unless caused by circumstances outside your reasonable control.",
    ],
    bullets: [
      "Keep your login credentials confidential",
      "Provide accurate account information",
      "Notify us of suspected unauthorized access",
      "Do not share access in a way that violates your plan or agreement",
    ],
  },
  {
    id: "acceptable-use",
    title: "4. Acceptable Use",
    content: [
      "You agree to use MIERU lawfully and in accordance with these Terms. You must not use the service in a manner that could damage, disable, overburden, or interfere with the service or other users.",
    ],
    bullets: [
      "Do not attempt to gain unauthorized access",
      "Do not abuse APIs, infrastructure, or rate limits",
      "Do not introduce malicious code or harmful content",
      "Do not use the service for unlawful activity",
      "Do not interfere with other customers' use of the platform",
    ],
  },
  {
    id: "your-content",
    title: "5. Your Content & Data",
    content: [
      "You retain ownership of content and information that you submit to MIERU, subject to the rights necessary for us to operate the service.",
      "You are responsible for ensuring that you have the necessary rights and permissions to submit websites, keywords, datasets, or other information to the platform.",
    ],
  },
  {
    id: "third-party-data",
    title: "6. Third-Party Data & Services",
    content: [
      "Some MIERU functionality may depend on external search engines, AI platforms, data providers, APIs, hosting providers, or other third-party services.",
      "Availability, accuracy, coverage, and behavior of third-party services may change independently of MIERU.",
    ],
  },
  {
    id: "plans-billing",
    title: "7. Plans & Billing",
    content: [
      "Paid plans, limits, pricing, billing periods, and included features are described in the applicable pricing information or order agreement.",
      "If you subscribe to a paid plan, you authorize the applicable payment provider to charge the selected payment method according to the billing terms presented at purchase.",
    ],
  },
  {
    id: "intellectual-property",
    title: "8. Intellectual Property",
    content: [
      "The MIERU service, including its software, interfaces, branding, designs, and original materials, is owned by or licensed to MIERU and is protected by applicable intellectual property laws.",
      "These Terms do not transfer ownership of MIERU intellectual property to you.",
    ],
  },
  {
    id: "availability",
    title: "9. Service Availability",
    content: [
      "We aim to keep MIERU available and reliable, but we do not guarantee uninterrupted or error-free operation.",
      "Maintenance, infrastructure issues, third-party dependencies, security events, or circumstances outside our reasonable control may temporarily affect availability.",
    ],
  },
  {
    id: "disclaimers",
    title: "10. Disclaimers",
    content: [
      "MIERU provides analytics and visibility information for informational and operational purposes. Search rankings, AI responses, traffic, and third-party platform behavior can change and may not be fully predictable.",
      "You should independently evaluate important business decisions rather than relying exclusively on MIERU data.",
    ],
  },
  {
    id: "limitation",
    title: "11. Limitation of Liability",
    content: [
      "To the maximum extent permitted by applicable law, MIERU and its operators will not be liable for indirect, incidental, special, consequential, or punitive damages arising from or related to use of the service.",
      "Any additional limitations applicable to a paid plan or written agreement will be governed by that agreement.",
    ],
  },
  {
    id: "termination",
    title: "12. Termination",
    content: [
      "You may stop using MIERU at any time. We may suspend or terminate access where reasonably necessary to protect the service, comply with law, address abuse, or enforce these Terms.",
      "Where appropriate, we may provide notice before termination or suspension.",
    ],
  },
  {
    id: "changes",
    title: "13. Changes to These Terms",
    content: [
      "We may update these Terms as the service evolves or legal requirements change. Updated Terms will be made available through the service.",
      "Continued use of MIERU after an effective update constitutes acceptance of the updated Terms to the extent permitted by applicable law.",
    ],
  },
  {
    id: "contact",
    title: "14. Contact",
    content: [
      "Questions regarding these Terms should be directed to the MIERU team through the official contact or support channel associated with the service.",
    ],
  },
];