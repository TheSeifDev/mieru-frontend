import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FinalCta = () => {
  return (
    <section className="w-full bg-background px-6 py-16">
      <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-3xl border border-blue-400/40 bg-blue-700 px-6 py-16 text-center sm:py-20 dark:bg-blue-800/80">
        {/* background light */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_90%_at_50%_0%,rgba(96,165,250,0.45),transparent)]"
        />
        {/* glass shapes */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
          <div className="absolute -left-8 bottom-0 h-44 w-32 rotate-12 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm" />
          <div className="absolute left-20 -bottom-6 h-36 w-28 -rotate-6 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm" />
          <div className="absolute -right-6 bottom-0 h-48 w-36 -rotate-12 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm" />
          <div className="absolute right-24 -bottom-8 h-40 w-28 rotate-6 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm" />
        </div>

        <span className="text-sm font-medium tracking-wide text-blue-100">Get started</span>
        <h2 className="mx-auto mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Ready to get more visibility?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty text-sm text-blue-100 sm:text-base">
          Join thousands of teams using MIERU to track, grow, and stay ahead.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/signup"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get started free
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/demo"
            className="inline-flex h-12 items-center rounded-xl border border-white/40 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            See live demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;