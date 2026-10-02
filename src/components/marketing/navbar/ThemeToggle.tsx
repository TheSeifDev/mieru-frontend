"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");
    const nextTheme = isDark ? "light" : "dark";

    root.classList.toggle("dark", nextTheme === "dark");
    root.style.colorScheme = nextTheme;

    localStorage.setItem("mieru-theme", nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full border border-border
        bg-background/70
        text-foreground
        backdrop-blur-md
        transition-all duration-200
        hover:border-primary/30
        hover:bg-primary/5
      "
    >
      <Sun className="hidden size-4.25 dark:block" />
      <Moon className="size-4.25 dark:hidden" />
    </button>
  );
}