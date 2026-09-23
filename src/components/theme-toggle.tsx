"use client";

import { Moon, Sun } from "lucide-react";
import { usePortfolioTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = usePortfolioTheme();

  return (
    <button type="button" className="icon-button" aria-label="Toggle color theme" title="Toggle color theme" onClick={toggleTheme}>
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}