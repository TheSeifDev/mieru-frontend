import { BarChart3, Lightbulb, Search, Sparkles, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Search,
    title: "SEO rankings in real time",
    description: "Follow every keyword and see how your visibility changes.",
  },
  {
    icon: BarChart3,
    title: "AI search visibility",
    description: "Know when ChatGPT, Gemini and Claude mention your brand.",
  },
  {
    icon: Lightbulb,
    title: "Insights you can act on",
    description: "Clear reports that turn search data into next steps.",
  },
];

export default function LoginBrandPanel() {
  return (
    <section className="relative hidden min-h-screen overflow-hidden border-r border-border lg:flex">
      {/* Background */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/home/light.webp"
          alt=""
          fill
          priority
          sizes="50vw"
          className="object-cover object-center dark:hidden"
        />
        <Image
          src="/home/dark.webp"
          alt=""
          fill
          priority
          sizes="50vw"
          className="hidden object-cover object-center dark:block"
        />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      <div className="relative z-10 flex w-full flex-col justify-between p-10 xl:p-14">
        {/* Logo */}
        <Link href="/" className="group inline-flex w-fit items-center gap-2.5">
          <Image
            src="/logo.webp"
            alt=""
            width={34}
            height={34}
            className="size-8 object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <span className="text-xl font-bold tracking-[-0.055em]">MIERU</span>
        </Link>

        {/* Content */}
        <div className="max-w-md">
          {/* Head: icon tile + label */}
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
              <Sparkles className="size-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-foreground">SEO + AI visibility</p>
              <p className="text-sm text-muted-foreground">All in one place</p>
            </div>
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-[1.02] tracking-[-0.055em] text-foreground xl:text-6xl">
            See more.
            <br />
            <span className="text-primary">Grow smarter.</span>
          </h1>

          <p className="mt-5 text-base leading-7 text-muted-foreground">
            Track your search visibility, understand your competitors, and discover opportunities
            across traditional and AI search.
          </p>

          <ul className="mt-10 space-y-6">
            {features.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15">
                  <Icon className="size-4.5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} MIERU. All rights reserved.</p>
      </div>
    </section>
  );
}