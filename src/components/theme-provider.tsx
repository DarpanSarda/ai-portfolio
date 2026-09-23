"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: "dark",
  toggleTheme: () => undefined,
});

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("portfolio-theme-change", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("portfolio-theme-change", onStoreChange);
  };
}

function getTheme(): Theme {
  return localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore<Theme>(subscribe, getTheme, () => "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  function toggleTheme() {
    localStorage.setItem("portfolio-theme", theme === "dark" ? "light" : "dark");
    window.dispatchEvent(new Event("portfolio-theme-change"));
  }

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
}

export function usePortfolioTheme() {
  return useContext(ThemeContext);
}