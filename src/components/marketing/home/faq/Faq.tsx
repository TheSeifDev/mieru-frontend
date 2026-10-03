import { Plus } from "lucide-react";
import SectionHeading from "../SectionHeading";

const faqs = [
  {
    question: "What is MIERU?",
    answer:
      "MIERU is a visibility platform that tracks your traditional SEO performance and your presence in AI search (ChatGPT, Gemini, Claude and more) from one dashboard.",
  },
  {
    question: "How does AI visibility tracking work?",
    answer:
      "We regularly ask AI platforms questions related to your keywords and brand, then measure how often and where you are mentioned compared with your competitors.",
  },
  {
    question: "Do I need technical skills to use MIERU?",
    answer:
      "No. Add your website and target keywords, and MIERU handles the rest. Reports are clear and shareable, with no setup or code required.",
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer:
      "Yes. You can change your plan at any time from your account settings, and changes apply to your next billing cycle.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. The Starter plan is free forever and includes 1 project, 100 keywords, SEO tracking and limited AI visibility. No credit card required.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className="relative isolate w-full overflow-hidden bg-background px-6 py-24">
      {/* decorative glass shapes (large screens only) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
        <div className="absolute -left-10 top-40 h-56 w-40 -rotate-12 rounded-3xl border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm" />
        <div className="absolute left-24 top-64 h-64 w-44 rotate-6 rounded-3xl border border-blue-500/20 bg-blue-500/15 backdrop-blur-sm" />
        <div className="absolute left-2 top-96 h-48 w-36 -rotate-6 rounded-3xl border border-blue-500/10 bg-blue-500/5" />
      </div>

      <div className="mx-auto max-w-3xl">
        <SectionHeading
          badge="FAQ"
          title="Frequently asked questions."
          description="Everything you need to know about MIERU."
        />

        <div className="mt-14 space-y-3">
          {faqs.map(({ question, answer }) => (
            <details
              key={question}
              name="faq"
              className="group rounded-xl border border-border/70 bg-white/70 transition-colors open:border-blue-500/40 hover:border-blue-500/40 dark:bg-white/3"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 text-sm font-medium text-foreground focus-visible:outline-2 focus-visible:outline-blue-600 [&::-webkit-details-marker]:hidden">
                {question}
                <Plus className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-45 group-open:text-blue-600 dark:group-open:text-blue-400" />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;