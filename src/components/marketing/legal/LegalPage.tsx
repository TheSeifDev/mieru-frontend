import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Check,
  Clock,
  Cookie,
  CreditCard,
  Cog,
  Database,
  Info,
  FileText,
  ListChecks,
  ListTree,
  LockKeyhole,
  Scale,
  ShieldCheck,
  SlidersHorizontal,
  User,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { LegalSection } from "./legal-data";
import { LegalToc } from "./LegalToc";
import { ReadingProgress } from "./ReadingProgress";

type LegalType = "privacy" | "terms" | "cookies";

type LegalPageProps = {
  type: LegalType;
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
};

/** Everything that differs between the two documents lives here. */
const CONFIG: Record<
  LegalType,
  {
    icon: LucideIcon;
    label: string;
    noteIcon: LucideIcon;
    noteTitle: string;
    note: string;
    highlights: { id: string; icon: LucideIcon }[];
    other: { href: string; label: string };
  }
> = {
  privacy: {
    icon: ShieldCheck,
    label: "Privacy",
    noteIcon: LockKeyhole,
    noteTitle: "Your privacy matters.",
    note: "This policy explains the types of information MIERU may collect and how that information may be used to operate and improve the service.",
    highlights: [
      { id: "information-we-collect", icon: Database },
      { id: "how-we-use-information", icon: Cog },
      { id: "your-rights", icon: UserCheck },
    ],
    other: { href: "/terms", label: "Terms of Service" },
  },
  terms: {
    icon: FileText,
    label: "Terms",
    noteIcon: Check,
    noteTitle: "Before using MIERU.",
    note: "Please read these Terms carefully before creating an account or using the MIERU service.",
    highlights: [
      { id: "accounts", icon: User },
      { id: "acceptable-use", icon: Scale },
      { id: "plans-billing", icon: CreditCard },
    ],
    other: { href: "/privacy", label: "Privacy Policy" },
  },
  cookies: {
    icon: Cookie,
    label: "Cookies",
    noteIcon: Info,
    noteTitle: "About cookies on MIERU.",
    note: "This policy explains what cookies and similar technologies are, how MIERU may use them, and the choices you have.",
    highlights: [
      { id: "how-we-use-cookies", icon: Cog },
      { id: "types-of-cookies", icon: ListChecks },
      { id: "managing-preferences", icon: SlidersHorizontal },
    ],
    other: { href: "/privacy", label: "Privacy Policy" },
  },
};

const parseTitle = (value: string) => {
  const match = value.match(/^(\d+)\.\s*(.*)$/);
  return match ? { number: match[1].padStart(2, "0"), text: match[2] } : { number: null, text: value };
};

const readingMinutes = (sections: LegalSection[]) => {
  const words = sections
    .flatMap((s) => [...s.content, ...(s.bullets ?? [])])
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
};

export function LegalPage({ type, title, description, updated, sections }: LegalPageProps) {
  const config = CONFIG[type];
  const HeroIcon = config.icon;
  const NoteIcon = config.noteIcon;
  const minutes = readingMinutes(sections);

  const highlights = config.highlights
    .map(({ id, icon }) => ({ icon, section: sections.find((s) => s.id === id) }))
    .filter((h): h is { icon: LucideIcon; section: LegalSection } => h.section !== undefined);

  return (
    <div id="top" className="min-h-screen bg-background">
      <ReadingProgress />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="group flex items-center gap-2.5">
            <Image
              src="/logo.webp"
              alt=""
              width={30}
              height={30}
              className="size-7 object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <span className="text-lg font-bold tracking-[-0.055em]">MIERU</span>
          </Link>

          <div className="flex items-center gap-1">
            <Link
              href={config.other.href}
              className="hidden rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:block"
            >
              {config.other.label}
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" />
              Back to MIERU
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden border-b border-border/60">
          <div aria-hidden className="absolute inset-0 -z-10">
            <Image
              src="/home/light.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-top opacity-50 dark:hidden"
            />
            <Image
              src="/home/dark.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="hidden object-cover object-top opacity-60 dark:block"
            />
            <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/60 to-background" />
          </div>

          <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:py-24">
            <div className="flex items-center justify-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <HeroIcon className="size-5" />
              </span>
              <span className="text-sm font-medium text-primary">{config.label}</span>
            </div>

            <h1 className="mt-6 text-balance text-4xl font-bold tracking-[-0.055em] text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-7 text-muted-foreground">
              {description}
            </p>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
              {[
                `Last updated ${updated}`,
                `${sections.length} sections`,
                `${minutes} min read`,
              ].map((item, i) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 backdrop-blur"
                >
                  {i === 2 && <Clock className="size-3" />}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Body */}
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              {/* Mobile: collapsible */}
              <details className="group rounded-xl border border-border/70 bg-background/70 lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium text-foreground [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-2">
                    <ListTree className="size-4 text-primary" />
                    On this page
                  </span>
                  <ArrowRight className="size-4 text-muted-foreground transition-transform group-open:rotate-90" />
                </summary>
                <div className="border-t border-border/60 p-2">
                  <LegalToc sections={sections} />
                </div>
              </details>

              {/* Desktop */}
              <div className="hidden lg:block">
                <p className="mb-3 flex items-center gap-2 px-3 text-xs font-medium text-muted-foreground">
                  <ListTree className="size-3.5" />
                  On this page
                </p>
                <LegalToc sections={sections} />
              </div>
            </aside>

            {/* Article */}
            <article className="min-w-0 max-w-3xl">
              {/* Note */}
              <div className="flex gap-4 rounded-2xl border border-primary/15 bg-primary/5 p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                  <NoteIcon className="size-4.5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{config.noteTitle}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{config.note}</p>
                </div>
              </div>

              {/* At a glance */}
              {highlights.length > 0 && (
                <div className="mt-8">
                  <p className="text-xs font-medium text-muted-foreground">Jump to a key section</p>
                  <ul className="mt-3 grid gap-3 sm:grid-cols-3">
                    {highlights.map(({ icon: Icon, section }) => {
                      const { text } = parseTitle(section.title);
                      return (
                        <li key={section.id}>
                          <a
                            href={`#${section.id}`}
                            className="group flex h-full flex-col gap-3 rounded-2xl border border-border/70 bg-background/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
                          >
                            <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                              <Icon className="size-4" />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-foreground">
                                {text}
                              </span>
                              <span className="mt-1 line-clamp-2 block text-xs leading-5 text-muted-foreground">
                                {section.content[0]}
                              </span>
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Sections */}
              <div className="mt-12">
                {sections.map((section, index) => {
                  const { number, text } = parseTitle(section.title);
                  return (
                    <section
                      key={section.id}
                      id={section.id}
                      className={`scroll-mt-24 ${index > 0 ? "mt-10 border-t border-border/60 pt-10" : ""}`}
                    >
                      <div className="flex items-baseline gap-3">
                        {number && (
                          <span className="text-sm font-semibold tabular-nums text-primary">
                            {number}
                          </span>
                        )}
                        <h2 className="text-xl font-bold tracking-[-0.03em] text-foreground sm:text-2xl">
                          {text}
                        </h2>
                      </div>

                      <div className="mt-4 space-y-4">
                        {section.content.map((paragraph) => (
                          <p key={paragraph} className="text-[15px] leading-7 text-muted-foreground">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {section.bullets && (
                        <ul className="mt-5 space-y-3 rounded-xl border border-border/60 bg-muted/30 p-5">
                          {section.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-start gap-3 text-sm leading-6 text-foreground/90"
                            >
                              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Check className="size-3" strokeWidth={3} />
                              </span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  );
                })}
              </div>

              {/* End */}
              <div className="mt-14 flex flex-col gap-4 rounded-2xl border border-border/70 bg-background/70 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">Also worth reading</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Continue to our {config.other.label}.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="#top"
                    className="inline-flex h-10 items-center gap-2 rounded-lg border border-border px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    <ArrowUp className="size-4" />
                    Top
                  </a>
                  <Link
                    href={config.other.href}
                    className="group inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-(--mieru-blue-hover)"
                  >
                    {config.other.label}
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-7 text-xs text-muted-foreground sm:px-8 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} MIERU. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="/cookies" className="transition-colors hover:text-foreground">
              Cookies
            </Link>
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}