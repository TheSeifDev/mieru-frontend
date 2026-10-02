import {
  FileText,
  Gem,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "../SectionHeading";

const benefits: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "SEO Tracking",
    description: "Monitor keyword rankings, search visibility, and organic growth in real-time.",
    icon: TrendingUp,
  },
  {
    title: "AI & GEO Visibility",
    description:
      "Track your brand presence across ChatGPT, Gemini, Claude and other AI platforms.",
    icon: Sparkles,
  },
  {
    title: "Competitor Insights",
    description: "See what your competitors rank for and where they appear in AI search.",
    icon: ShieldCheck,
  },
  {
    title: "Keyword Research",
    description: "Discover high-value keywords and content opportunities.",
    icon: Gem,
  },
  {
    title: "Automated Reports",
    description: "Get beautiful, shareable reports to track progress and results.",
    icon: FileText,
  },
  {
    title: "One Unified Dashboard",
    description: "Everything you need in one place — SEO, GEO, keywords, and more.",
    icon: LayoutDashboard,
  },
];

const Benefits = () => {
  return (
    <section id="features" className="w-full bg-background px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Benefits"
          title="More visibility. More opportunities."
          description="Track your traditional SEO and AI search performance, understand your audience, and stay ahead of the competition."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="flex items-start gap-4 rounded-2xl border border-border bg-white/70 p-5 shadow-sm transition-colors hover:border-blue-500/40 dark:bg-white/3 dark:shadow-none"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
                <Icon className="size-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;