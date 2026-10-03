"use client";

import { ArrowLeft } from "lucide-react";

export function BackButton() {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className="
        inline-flex h-11
        items-center justify-center gap-2
        rounded-xl
        border border-border
        bg-background
        px-5
        text-sm font-semibold
        text-foreground
        transition-colors
        hover:bg-muted
      "
    >
      <ArrowLeft className="size-4" />
      Go back
    </button>
  );
}