"use client";

import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) {
      setTheme(saved);
      applyTheme(saved);
    }
  }, []);

  function applyTheme(t: Theme) {
    const root = document.documentElement;
    if (t === "dark") {
      root.setAttribute("data-theme", "dark");
    } else if (t === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function cycle() {
    const next: Theme = theme === "system" ? "dark" : theme === "dark" ? "light" : "system";
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  }

  const icon = theme === "dark" ? "\u{1F319}" : theme === "light" ? "\u2600\uFE0F" : "\u{1F4BB}";
  const label = theme === "dark" ? "\u30C0\u30FC\u30AF" : theme === "light" ? "\u30E9\u30A4\u30C8" : "\u81EA\u52D5";

  return (
    <button
      onClick={cycle}
      className="flex items-center gap-1 px-2 py-1 text-xs rounded-md border border-card-border bg-card-bg hover:border-primary/50 transition-colors"
      aria-label={`\u30C6\u30FC\u30DE: ${label}`}
      title={`\u73FE\u5728: ${label}\u30E2\u30FC\u30C9\u3000\u30AF\u30EA\u30C3\u30AF\u3067\u5207\u308A\u66FF\u3048`}
    >
      <span>{icon}</span>
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
