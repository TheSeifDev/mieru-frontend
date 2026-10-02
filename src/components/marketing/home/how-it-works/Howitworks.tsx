import { ArrowRight, BarChart3, Link2, TrendingUp, type LucideIcon } from "lucide-react";
import { Fragment } from "react";
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
    <section id="how-it-works" className="w-full bg-background px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="How it works"
          title="Get started in 3 simple steps."
          description="From setup to insights in minutes. No technical skills required."
        />

        <ol className="mt-14 flex flex-col items-stretch gap-6 md:flex-row md:gap-0">
          {steps.map(({ title, description, icon: Icon }, i) => (
            <Fragment key={title}>
              <li className="relative flex flex-1 flex-col items-center rounded-2xl border border-border bg-white/70 px-6 pb-8 pt-10 text-center shadow-sm dark:bg-white/3 dark:shadow-none">
                <span className="absolute -top-3 flex size-6 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white shadow-md shadow-blue-600/30">
                  {i + 1}
                </span>
                <div className="flex size-16 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
                  <Icon className="size-7" />
                </div>
                <h3 className="mt-5 text-sm font-semibold text-foreground">{title}</h3>
                <p className="mt-2 max-w-52 text-xs leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </li>

              {i < steps.length - 1 && (
                <li
                  aria-hidden
                  className="flex shrink-0 items-center justify-center text-blue-600 md:w-12 dark:text-blue-400"
                >
                  <ArrowRight className="size-4 rotate-90 md:rotate-0" />
                </li>
              )}
            </Fragment>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;