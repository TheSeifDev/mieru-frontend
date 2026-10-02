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
    description: "Track your brand presence across ChatGPT, Gemini, Claude and other AI platforms.",
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
    <section id="features" className="relative isolate w-full bg-background px-6 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(37,99,235,0.12),transparent)]" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Benefits"
          title="More visibility. More opportunities."
          description="Track your traditional SEO and AI search performance, understand your audience, and stay ahead of the competition."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-white/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 dark:bg-white/3"
            >
              {/* corner glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-blue-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex size-11 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 ring-1 ring-blue-500/20 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/15 dark:text-blue-400 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
                <Icon className="size-5" />
              </div>

              <h3 className="relative mt-5 text-base font-semibold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;