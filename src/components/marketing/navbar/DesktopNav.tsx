"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { AUTH_LINKS, NAV_LINKS } from "./constants";
import { FeaturesMenu } from "./FeaturesMenu";
import { ThemeToggle } from "./ThemeToggle";

export function DesktopNav() {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!featuresOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        featuresRef.current &&
        !featuresRef.current.contains(event.target as Node)
      ) {
        setFeaturesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFeaturesOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [featuresOpen]);

  return (
    <div className="hidden min-w-0 flex-1 items-center lg:flex">
      {/* Center navigation */}
      <div className="mx-auto flex items-center gap-0.5">
        {/* Features */}
        <div
          ref={featuresRef}
          className="relative"
          onMouseEnter={() => setFeaturesOpen(true)}
          onMouseLeave={() => setFeaturesOpen(false)}
        >
          <button
            type="button"
            onClick={() => setFeaturesOpen((open) => !open)}
            aria-expanded={featuresOpen}
            aria-haspopup="menu"
            className={`
              flex items-center gap-1.5
              rounded-lg
              px-3 py-2
              text-[13px] font-medium
              transition-colors duration-200
              ${
                featuresOpen
                  ? "bg-primary/8 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }
            `}
          >
            Features

            <ChevronDown
              className={`
                size-3.5
                transition-transform duration-200
                ${featuresOpen ? "rotate-180" : ""}
              `}
            />
          </button>

          {featuresOpen && (
            <div
              className="
                absolute left-1/2 top-full z-50
                -translate-x-1/2
                pt-3
              "
            >
              <FeaturesMenu />
            </div>
          )}
        </div>

        {/* Main links */}
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="
              rounded-lg
              px-3 py-2
              text-[13px] font-medium
              text-muted-foreground
              transition-colors duration-200
              hover:bg-muted
              hover:text-foreground
            "
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right actions */}
      <div className="ml-auto flex shrink-0 items-center gap-1.5">
        <ThemeToggle />

        <div className="mx-1.5 h-5 w-px bg-border" />

        <Link
          href={AUTH_LINKS.signIn.href}
          className="
            rounded-lg
            px-3 py-2
            text-[13px] font-medium
            text-muted-foreground
            transition-colors duration-200
            hover:bg-muted
            hover:text-foreground
          "
        >
          {AUTH_LINKS.signIn.label}
        </Link>

        <Link
          href={AUTH_LINKS.getStarted.href}
          className="
            group flex items-center gap-2
            rounded-xl
            bg-primary
            px-4 py-2.5
            text-[13px] font-semibold
            text-primary-foreground
            shadow-sm shadow-primary/20
            transition-all duration-200
            hover:bg-(--mieru-blue-hover)
            hover:shadow-md
            hover:shadow-primary/20
          "
        >
          {AUTH_LINKS.getStarted.label}

          <ArrowRight
            className="
              size-3.5
              transition-transform duration-200
              group-hover:translate-x-0.5
            "
          />
        </Link>
      </div>
    </div>
  );
}