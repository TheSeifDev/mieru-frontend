import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import DashboardPreview from "./Dashboardpreview";

const perks = ["No credit card required", "Setup in minutes", "Free forever plan"];

const Hero = () => {
  return (
    <section className="relative isolate w-full overflow-hidden">
      {/* Backgrounds (swap with the theme via the `dark` class) */}
      <Image
        src="/home/light.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-top-right dark:hidden"
      />
      <Image
        src="/home/dark.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 hidden object-cover object-top-right dark:block"
      />
      {/* Fade the bottom edge into the page background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-b from-transparent to-background" />

      <div className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-14 px-6 pb-20 pt-32 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-8 lg:pt-28">
        {/* Copy */}
        <div className="max-w-xl">
          <Link
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/60 py-1 pl-1 pr-3 text-xs text-foreground/80 backdrop-blur transition-colors hover:bg-white/90 dark:border-blue-400/20 dark:bg-white/5 dark:hover:bg-white/10"
          >
            <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-semibold text-white">
              NEW
            </span>
            AI &amp; GEO tracking now available
            <ArrowRight className="size-3" />
          </Link>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            See more.
            <br />
            Rank higher.
            <br />
            Be <span className="text-blue-600 dark:text-blue-500">everywhere.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            MIERU helps you track your SEO performance and AI search visibility
            — all in one place.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/signup"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get started free
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex h-12 items-center rounded-xl border border-border bg-white/80 px-6 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-blue-400/40 dark:bg-transparent dark:hover:bg-blue-500/10"
            >
              See live demo
            </Link>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-1.5">
                <Check className="size-3.5 text-blue-600 dark:text-blue-400" />
                {perk}
              </li>
            ))}
          </ul>
        </div>

        {/* Dashboard mockup */}
        <div className="relative lg:-mr-24 xl:-mr-32">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
};

export default Hero;