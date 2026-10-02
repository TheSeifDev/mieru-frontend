import { BarChart3, Link2, TrendingUp, type LucideIcon } from "lucide-react";
import SectionHeading from "../SectionHeading";

const steps: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Add your project",
    description: "Enter your website and target keywords. We'll handle the rest.",
    icon: Link2,
  },
  {
    title: "We track & analyze",
    description: "MIERU monitors your SEO and AI visibility across multiple sources.",
    icon: BarChart3,
  },
  {
    title: "Get actionable insights",
    description: "See clear reports and opportunities to grow.",
    icon: TrendingUp,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative isolate w-full bg-background px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          badge="How it works"
          title="Get started in 3 simple steps."
          description="From setup to insights in minutes. No technical skills required."
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
          {/* line connecting the step badges */}
          <div
            aria-hidden
            className="absolute left-[16.67%] right-[16.67%] top-3 hidden h-px bg-linear-to-r from-blue-500/10 via-blue-500/60 to-blue-500/10 md:block"
          />

          {steps.map(({ title, description, icon: Icon }, i) => (
            <li key={title} className="relative flex flex-col items-center">
              <span className="relative z-10 flex size-6 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white ring-4 ring-background">
                {i + 1}
              </span>

              <div className="group relative mt-6 w-full overflow-hidden rounded-2xl border border-border/70 bg-white/70 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 dark:bg-white/3">
                {/* corner glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-blue-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative mx-auto flex size-12 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 ring-1 ring-blue-500/20 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/15 dark:text-blue-400 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
                  <Icon className="size-6" />
                </div>
                <h3 className="relative mt-6 text-base font-semibold tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="relative mx-auto mt-2 max-w-60 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;