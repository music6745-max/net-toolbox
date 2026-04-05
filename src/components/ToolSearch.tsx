"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { tools } from "@/lib/tools";

export function ToolSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
    }
  }

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return tools
      .filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.slug.includes(q)
      )
      .slice(0, 12);
  }, [query]);

  return (
    <div className="relative max-w-xl mx-auto mb-10">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="ツールを検索...（例: QRコード、JSON、パスワード）"
          className="w-full border border-card-border rounded-xl px-5 py-3.5 pl-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-card-bg"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {query.trim() && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card-bg border border-card-border rounded-xl shadow-lg z-40 max-h-80 overflow-y-auto">
          {results.length > 0 ? (
            results.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="flex items-center gap-3 px-4 py-3 hover:bg-background transition-colors border-b border-card-border last:border-0"
                onClick={() => setQuery("")}
              >
                <span className="text-xl">{tool.icon}</span>
                <div className="min-w-0">
                  <div className="text-sm font-medium">{tool.name}</div>
                  <div className="text-xs text-muted truncate">
                    {tool.description}
                  </div>
                </div>
                <span className="ml-auto text-xs text-muted whitespace-nowrap">
                  {tool.category}
                </span>
              </Link>
            ))
          ) : (
            <div className="px-4 py-6 text-center text-sm text-muted">
              「{query}」に一致するツールが見つかりませんでした
            </div>
          )}
        </div>
      )}
    </div>
  );
}
