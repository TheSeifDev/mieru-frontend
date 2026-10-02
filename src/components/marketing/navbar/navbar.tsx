import Image from "next/image";
import Link from "next/link";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className="
          relative mx-auto flex h-16 max-w-7xl items-center
          rounded-2xl border border-border
          bg-background/80
          px-4
          shadow-sm shadow-black/3
          backdrop-blur-2xl
          transition-colors
          dark:bg-background/75
          dark:shadow-black/20
          sm:px-5
        "
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="MIERU home"
          className="
            group flex shrink-0 items-center gap-2.5
            rounded-xl
            pr-4
          "
        >
          <Image
            src="/logo.webp"
            alt=""
            width={32}
            height={32}
            priority
            className="
              size-8
              object-contain
              transition-transform duration-200
              group-hover:scale-[1.04]
            "
          />

          <span
            className="
              text-[18px]
              font-bold
              tracking-[-0.055em]
              text-foreground
            "
          >
            MIERU
          </span>
        </Link>

        <DesktopNav />

        <MobileNav />
      </nav>
    </header>
  );
}