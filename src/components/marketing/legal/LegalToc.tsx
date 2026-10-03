"use client";

import { useEffect, useState } from "react";

import type { LegalSection } from "./legal-data";

/** Table of contents that highlights the section currently being read. */
export function LegalToc({ sections }: { sections: LegalSection[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -75% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="Table of contents" className="space-y-0.5">
      {sections.map((section) => {
        const isActive = section.id === active;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={isActive ? "location" : undefined}
            className={`block rounded-lg border-l-2 px-3 py-1.5 text-[13px] leading-5 transition-colors ${
              isActive
                ? "border-primary bg-primary/5 font-medium text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {section.title}
          </a>
        );
      })}
    </nav>
  );
}