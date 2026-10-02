"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { AUTH_LINKS, NAV_LINKS } from "./constants";
import { ThemeToggle } from "./ThemeToggle";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="relative ml-auto flex items-center gap-2 lg:hidden">
      <ThemeToggle />

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        className="
          flex size-10 items-center justify-center
          rounded-full
          border border-border
          bg-background/70
          text-foreground
          transition-colors duration-200
          hover:bg-muted
        "
      >
        {open ? (
          <X className="size-4.5" />
        ) : (
          <Menu className="size-4.5" />
        )}
      </button>

      {open && (
        <div
          className="
            absolute right-0 top-[calc(100%+12px)]
            w-[min(360px,calc(100vw-32px))]
            overflow-hidden
            rounded-2xl
            border border-border
            bg-background/95
            p-2
            shadow-2xl shadow-black/10
            backdrop-blur-2xl
            dark:shadow-black/40
          "
        >
          <div className="space-y-0.5">
            <Link
              href="#features"
              onClick={closeMenu}
              className="
                block rounded-xl
                px-4 py-3
                text-sm font-medium
                text-foreground
                transition-colors
                hover:bg-muted
              "
            >
              Features
            </Link>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="
                  block rounded-xl
                  px-4 py-3
                  text-sm font-medium
                  text-muted-foreground
                  transition-colors
                  hover:bg-muted
                  hover:text-foreground
                "
              >
                {link.label}
              </Link>
            ))}

            <div className="my-2 h-px bg-border" />

            <Link
              href={AUTH_LINKS.signIn.href}
              onClick={closeMenu}
              className="
                block rounded-xl
                px-4 py-3
                text-sm font-medium
                text-muted-foreground
                transition-colors
                hover:bg-muted
                hover:text-foreground
              "
            >
              {AUTH_LINKS.signIn.label}
            </Link>

            <Link
              href={AUTH_LINKS.getStarted.href}
              onClick={closeMenu}
              className="
                mt-1 block rounded-xl
                bg-primary
                px-4 py-3
                text-center
                text-sm font-semibold
                text-primary-foreground
                transition-colors
                hover:bg-(--mieru-blue-hover)
              "
            >
              {AUTH_LINKS.getStarted.label}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}