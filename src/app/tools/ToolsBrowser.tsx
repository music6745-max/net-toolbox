"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { type Tool } from "@/lib/tools";
import { categories } from "@/lib/categories";

const popularSlugs = [
  "qr-code",
  "character-count",
  "password-generator",
  "json-formatter",
  "color-picker",
  "bmi-calculator",
  "base64",
  "url-encode",
  "image-compressor",
  "markdown-preview",
  "regex-tester",
  "timestamp-converter",
];

export default function ToolsBrowser({ allTools }: { allTools: Tool[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");

  const filtered = useMemo(() => {
    const query = q.toLowerCase().trim();
    return allTools.filter((t) => {
      if (cat !== "all" && t.category !== cat) return false;
      if (!query) return true;
      return (
        t.name.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query) ||
        t.slug.includes(query) ||
        t.category.toLowerCase().includes(query)
      );
    });
  }, [allTools, q, cat]);

  const byCategory = useMemo(() => {
    return categories.map((c) => ({
      ...c,
      tools: filtered.filter((t) => t.category === c.slug),
    }));
  }, [filtered]);

  const popularTools = useMemo(
    () => popularSlugs.map((s) => allTools.find((t) => t.slug === s)).filter(Boolean) as Tool[],
    [allTools]
  );

  return (
    <>
      {/* Search box */}
      <div className="mb-6">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="ツール名・説明・カテゴリで検索..."
          className="w-full px-4 py-3 rounded-xl bg-card-bg border border-card-border focus:border-primary/50 focus:outline-none text-base"
        />
      </div>

      {/* Popular tags */}
      {!q && cat === "all" && (
        <section className="mb-8">
          <h2 className="text-sm font-bold text-muted mb-3">🔥 人気のツール</h2>
          <div className="flex flex-wrap gap-2">
            {popularTools.map((t) => (
              <Link
                key={t.slug}
                href={`/tools/${t.slug}`}
                className="inline-flex items-center gap-1.5 bg-card-bg border border-card-border rounded-full px-3 py-1.5 text-xs hover:border-primary/40 hover:text-primary transition-all"
              >
                <span>{t.icon}</span>
                <span>{t.name}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setCat("all")}
          className={`px-3 py-1.5 rounded-full text-xs border transition-all ${
            cat === "all"
              ? "bg-primary text-white border-primary"
              : "bg-card-bg border-card-border hover:border-primary/40"
          }`}
        >
          すべて ({allTools.length})
        </button>
        {categories.map((c) => {
          const count = allTools.filter((t) => t.category === c.slug).length;
          return (
            <button
              key={c.slug}
              onClick={() => setCat(c.slug)}
              className={`px-3 py-1.5 rounded-full text-xs border transition-all ${
                cat === c.slug
                  ? "bg-primary text-white border-primary"
                  : "bg-card-bg border-card-border hover:border-primary/40"
              }`}
            >
              {c.icon} {c.slug} ({count})
            </button>
          );
        })}
      </div>

      <p className="text-sm text-muted mb-6">{filtered.length}件のツール</p>

      {/* Results */}
      {cat === "all" ? (
        byCategory.map((c) =>
          c.tools.length > 0 ? (
            <section key={c.slug} className="mb-10">
              <h2 className="text-xl font-bold mb-4">
                {c.icon} {c.name}{" "}
                <span className="text-sm text-muted font-normal">({c.tools.length})</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {c.tools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </section>
          ) : null
        )
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-4xl mb-4">{"\uD83D\uDD0D"}</p>
          <p className="text-muted">該当するツールが見つかりませんでした</p>
        </div>
      )}
    </>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="block bg-card-bg border border-card-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
    >
      <div className="text-2xl mb-2">{tool.icon}</div>
      <h3 className="text-base font-semibold mb-1">{tool.name}</h3>
      <p className="text-sm text-muted leading-relaxed line-clamp-2">{tool.description}</p>
    </Link>
  );
}
