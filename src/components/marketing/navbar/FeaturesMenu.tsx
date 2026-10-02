import {
  ArrowUpRight,
  BarChart3,
  Bot,
  FileText,
  Link2,
} from "lucide-react";
import Link from "next/link";

import { FEATURE_LINKS } from "./constants";

const FEATURE_ICONS = {
  "SEO Tracking": Link2,
  "AI Visibility": Bot,
  "Competitor Analysis": BarChart3,
  Reports: FileText,
} as const;

export function FeaturesMenu() {
  return (
    <div
      role="menu"
      className="
        w-76
        rounded-2xl
        border border-border
        bg-background/95
        p-2
        shadow-2xl shadow-black/10
        backdrop-blur-2xl
        dark:shadow-black/40
      "
    >
      {FEATURE_LINKS.map((feature) => {
        const Icon = FEATURE_ICONS[feature.title];

        return (
          <Link
            key={feature.title}
            href={feature.href}
            role="menuitem"
            className="
              group flex items-center gap-3
              rounded-lg
              p-3
              transition-colors duration-200
              hover:bg-primary/5
              dark:hover:bg-primary/10
            "
          >
            <span
              className="
                flex size-9 shrink-0
                items-center justify-center
                rounded-xl
                bg-primary/8
                text-primary
                dark:bg-primary/12
              "
            >
              <Icon className="size-4" />
            </span>

            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-foreground">
                {feature.title}
              </span>

              <span className="mt-0.5 block text-xs text-muted-foreground">
                {feature.description}
              </span>
            </span>

            <ArrowUpRight
              className="
                size-4
                text-muted-foreground
                transition-all duration-200
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-primary
              "
            />
          </Link>
        );
      })}
    </div>
  );
}