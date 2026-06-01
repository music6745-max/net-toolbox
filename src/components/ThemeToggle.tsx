"use client";

import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";

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

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const id = window.setTimeout(() => {
      const saved = localStorage.getItem("theme") as Theme | null;
      if (saved) {
        setTheme(saved);
        applyTheme(saved);
      }
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    let observer: MutationObserver | null = null;

    function tagBoothLinks() {
      try {
        const path = window.location.pathname;
        if (!path.startsWith("/tools/kaigo-")) return;

        const campaign = path.split("/").filter(Boolean).pop() || "kaigo-tool";
        document.querySelectorAll<HTMLAnchorElement>('a[href*="kaigo-okane.booth.pm/items/"]').forEach((anchor) => {
          const url = new URL(anchor.href);
          if (url.searchParams.has("utm_source")) return;

          const itemId = url.pathname.match(/\/items\/(\d+)/)?.[1];
          const content =
            itemId === "8383441"
              ? "full_pack"
              : itemId === "8383305" ||
                  itemId === "8383384" ||
                  itemId === "8383387" ||
                  itemId === "8383391" ||
                  itemId === "8383396" ||
                  itemId === "8383402" ||
                  itemId === "8383405" ||
                  itemId === "8383412" ||
                  itemId === "8383417" ||
                  itemId === "8383420" ||
                  itemId === "8383424"
                ? "starter_pack"
                : "single_template";
          url.searchParams.set("utm_source", "net-toolbox");
          url.searchParams.set("utm_medium", "tool");
          url.searchParams.set("utm_campaign", campaign);
          url.searchParams.set("utm_content", content);
          anchor.href = url.toString();
        });
      } catch {
        // Link tagging should never block the tool page.
      }
    }

    tagBoothLinks();
    if (document.body) {
      observer = new MutationObserver(tagBoothLinks);
      observer.observe(document.body, { childList: true, subtree: true });
    }

    return () => observer?.disconnect();
  }, []);

  function cycle() {
    const next: Theme = theme === "system" ? "dark" : theme === "dark" ? "light" : "system";
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  }

  return (
    <button
      onClick={cycle}
      className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-full transition-colors"
      style={{
        background: theme === "dark" ? "#1e293b" : theme === "light" ? "#f8fafc" : "linear-gradient(135deg, #f8fafc 50%, #1e293b 50%)",
        color: theme === "dark" ? "#e2e8f0" : theme === "light" ? "#1e293b" : "#64748b",
        border: "1.5px solid",
        borderColor: theme === "dark" ? "#475569" : theme === "light" ? "#cbd5e1" : "#94a3b8",
      }}
      title={`\u30AF\u30EA\u30C3\u30AF\u3067\u80CC\u666F\u8272\u3092\u5207\u308A\u66FF\u3048`}
    >
      <span style={{ fontSize: "14px" }}>
        {theme === "dark" ? "\u{1F319}" : theme === "light" ? "\u2600\uFE0F" : "\u{1F504}"}
      </span>
      <span className="hidden sm:inline font-medium">
        {theme === "dark" ? "\u30C0\u30FC\u30AF" : theme === "light" ? "\u30E9\u30A4\u30C8" : "\u81EA\u52D5"}
      </span>
    </button>
  );
}
