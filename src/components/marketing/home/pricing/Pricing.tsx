"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeading from "../SectionHeading";

const plans = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    description: "Perfect for individuals getting started.",
    features: ["1 project", "100 keywords", "SEO tracking", "AI visibility (limited)", "Basic reports"],
    href: "/signup?plan=starter",
    popular: false,
  },
  {
    name: "Pro",
    monthly: 29,
    yearly: 23,
    description: "For growing teams and businesses.",
    features: [
      "10 projects",
      "2,000 keywords",
      "Full SEO & GEO tracking",
      "Competitor analysis",
      "Advanced reports",
      "Email support",
    ],
    href: "/signup?plan=pro",
    popular: true,
  },
  {
    name: "Business",
    monthly: 79,
    yearly: 63,
    description: "For agencies and large teams.",
    features: [
      "Unlimited projects",
      "10,000+ keywords",
      "Full features",
      "White-label reports",
      "Team members",
      "Priority support",
    ],
    href: "/signup?plan=business",
    popular: false,
  },
];

const BillingToggle = ({
  yearly,
  onChange,
}: {
  yearly: boolean;
  onChange: (yearly: boolean) => void;
}) => (
  <div
    role="group"
    aria-label="Billing period"
    className="relative mx-auto mt-8 grid w-fit grid-cols-2 rounded-full border border-border/70 bg-foreground/5 p-1"
  >
    <span
      aria-hidden
      className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-blue-600 transition-transform duration-300 ease-out ${
        yearly ? "translate-x-full" : "translate-x-0"
      }`}
    />
    <button
      type="button"
      aria-pressed={!yearly}
      onClick={() => onChange(false)}
      className={`relative z-10 rounded-full px-5 py-1.5 text-sm font-medium transition-colors ${
        !yearly ? "text-white" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      Monthly
    </button>
    <button
      type="button"
      aria-pressed={yearly}
      onClick={() => onChange(true)}
      className={`relative z-10 flex items-center gap-2 rounded-full px-5 py-1.5 text-sm font-medium transition-colors ${
        yearly ? "text-white" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      Yearly
      <span
        className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold transition-colors ${
          yearly ? "bg-white/20 text-white" : "bg-blue-500/15 text-blue-600 dark:text-blue-400"
        }`}
      >
        -20%
      </span>
    </button>
  </div>
);

const Pricing = () => {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative isolate w-full bg-background px-6 py-24">
      {/* faint grid + glow backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(127,127,127,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(127,127,127,0.08)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(60%_55%_at_50%_45%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-2xl -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="mx-auto max-w-5xl">
        <SectionHeading
          badge="Pricing"
          title="Simple, transparent pricing."
          description="Choose the plan that fits your goals. Upgrade or downgrade anytime."
        />

        <BillingToggle yearly={yearly} onChange={setYearly} />

        <div className="mt-20 grid gap-6 md:grid-cols-3 md:items-stretch">
          {plans.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly;

            return (
              <article
                key={plan.name}
                className={`group relative flex flex-col rounded-2xl border p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? "z-10 border-blue-500 bg-white/90 p-7 shadow-[0_0_60px_-20px_rgba(37,99,235,0.6)] ring-1 ring-blue-500/30 md:-my-6 md:py-10 dark:bg-[#07102a]/90"
                    : "border-border/70 bg-white/70 hover:border-blue-500/50 dark:bg-white/3"
                }`}
              >
                {/* glow layer (clipped separately so the badge can overflow the card) */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                  {plan.popular ? (
                    <div className="absolute inset-0 bg-[radial-gradient(80%_45%_at_50%_0%,rgba(37,99,235,0.22),transparent)]" />
                  ) : (
                    <div className="absolute -right-10 -top-10 size-36 rounded-full bg-blue-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  )}
                </div>

                {plan.popular && (
                  <span className="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-blue-600 px-3.5 py-1 text-xs font-semibold text-white">
                    <Sparkles className="size-3" />
                    Most Popular
                  </span>
                )}

                <h3 className="relative text-sm font-semibold text-foreground">{plan.name}</h3>

                <p className="relative mt-3 flex items-baseline gap-1">
                  <span
                    className={`font-bold tracking-tight text-foreground tabular-nums ${
                      plan.popular ? "text-5xl" : "text-4xl"
                    }`}
                  >
                    ${price}
                  </span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </p>
                <p className="relative mt-1 h-4 text-xs text-muted-foreground">
                  {plan.monthly === 0
                    ? "Free forever"
                    : yearly
                      ? `Billed $${price * 12} yearly`
                      : "Billed monthly"}
                </p>

                <p className="relative mt-3 min-h-10 text-sm leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>

                <Link
                  href={plan.href}
                  className={`relative mt-5 flex h-11 w-full items-center justify-center rounded-lg text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-500"
                      : "border border-border bg-foreground/5 text-foreground hover:bg-foreground/10"
                  }`}
                >
                  Get started
                </Link>

                <div className="relative my-6 h-px bg-border/70" />

                <ul className="relative space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground/90">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <p className="mt-16 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
          <ShieldCheck className="size-4 text-blue-600 dark:text-blue-400" />
          No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Pricing;