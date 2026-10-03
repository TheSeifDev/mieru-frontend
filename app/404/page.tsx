import { ArrowRight, CreditCard, LifeBuoy, MessageCircle, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { BackButton } from "@/src/components/system/BackButton";

const quickLinks: { icon: LucideIcon; label: string; description: string; href: string }[] = [
  { icon: CreditCard, label: "Pricing", description: "Compare plans", href: "/#pricing" },
  { icon: LifeBuoy, label: "Help Center", description: "Guides and answers", href: "/help" },
  { icon: MessageCircle, label: "Contact", description: "Talk to our team", href: "/contact" },
];

export default function NotFoundPage() {
  return (
    <main className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 py-16">
      {/* Background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src="/home/light.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60 dark:hidden"
        />
        <Image
          src="/home/dark.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center opacity-70 dark:block"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/60 to-background" />
      </div>

      <div className="w-full max-w-2xl text-center">
        {/* Logo */}
        <Link href="/" className="group mx-auto inline-flex items-center gap-2.5">
          <Image
            src="/logo.webp"
            alt=""
            width={34}
            height={34}
            priority
            className="size-8 object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <span className="text-xl font-bold tracking-tighter text-foreground">MIERU</span>
        </Link>

        {/* 404 */}
        <p
          aria-hidden
          className="mt-14 bg-linear-to-b from-primary to-primary/5 bg-clip-text text-[120px] font-bold leading-none tracking-[-0.08em] text-transparent sm:text-[180px]"
        >
          404
        </p>

        <h1 className="-mt-2 text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
          This page disappeared.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist, was moved, or the URL may be
          incorrect.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-(--mieru-blue-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Back to home
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>

          <BackButton />
        </div>

        {/* Helpful links */}
        <div className="mt-14">
          <p className="text-xs font-medium text-muted-foreground">Or try one of these</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {quickLinks.map(({ icon: Icon, label, description, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-border/70 bg-background/70 p-5 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-primary"
                >
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-4.5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">{label}</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">{description}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 text-[11px] text-muted-foreground">Error code: MIERU_404</p>
      </div>
    </main>
  );
}