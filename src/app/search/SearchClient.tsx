"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import Link from "next/link";
import { tools } from "@/lib/tools";
import { guides } from "@/app/guide/guides.data";

function highlight(text: string, q: string) {
  if (!q) return text;
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx < 0) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-yellow-200 dark:bg-yellow-500/40 text-inherit rounded px-0.5">
        {text.slice(idx, idx + q.length)}
      </mark>
      {text.slice(idx + q.length)}
    </>
  );
}

export default function SearchClient() {
  const searchParams = useSearchParams();
  const raw = searchParams.get("q") || "";
  const q = raw.toLowerCase().trim();
  const [tab, setTab] = useState<"all" | "tools" | "guides">("all");

  const toolResults = useMemo(
    () =>
      q
        ? tools.filter(
            (t) =>
              t.name.toLowerCase().includes(q) ||
              t.description.toLowerCase().includes(q) ||
              t.slug.includes(q) ||
              t.category.toLowerCase().includes(q)
          )
        : [],
    [q]
  );

  const guideResults = useMemo(
    () =>
      q
        ? guides.filter(
            (g) =>
              g.title.toLowerCase().includes(q) ||
              g.description.toLowerCase().includes(q) ||
              g.slug.includes(q) ||
              g.category.toLowerCase().includes(q)
          )
        : [],
    [q]
  );

  const total = toolResults.length + guideResults.length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>検索結果</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">
        「{raw}」の検索結果
      </h1>
      <p className="text-muted mb-6">
        ツール {toolResults.length}件 ・ ガイド {guideResults.length}件 ・ 合計 {total}件
      </p>

      {q && total > 0 && (
        <div className="flex gap-2 mb-8 border-b border-card-border">
          {([
            ["all", `すべて (${total})`],
            ["tools", `ツール (${toolResults.length})`],
            ["guides", `ガイド (${guideResults.length})`],
          ] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                tab === key
                  ? "border-primary text-primary"
                  : "border-transparent text-muted hover:text-primary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {(tab === "all" || tab === "tools") && toolResults.length > 0 && (
        <section className="mb-10">
          <h2 className="text-lg font-bold mb-4">🔧 ツール ({toolResults.length})</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolResults.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="block bg-card-bg border border-card-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
              >
                <div className="text-3xl mb-3">{tool.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{highlight(tool.name, q)}</h3>
                <p className="text-sm text-muted leading-relaxed mb-2">
                  {highlight(tool.description, q)}
                </p>
                <span className="text-xs text-muted">{tool.category}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {(tab === "all" || tab === "guides") && guideResults.length > 0 && (
        <section className="mb-10">
          <h2 className="text-lg font-bold mb-4">📚 ガイド記事 ({guideResults.length})</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {guideResults.map((g) => (
              <Link
                key={g.slug}
                href={`/guide/${g.slug}`}
                className="block bg-card-bg border border-card-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-200 group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl flex-shrink-0">{g.icon}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {g.category}
                      </span>
                      <span className="text-xs text-muted">{g.readTime}</span>
                    </div>
                    <h3 className="text-base font-semibold mb-1 group-hover:text-primary transition-colors">
                      {highlight(g.title, q)}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed line-clamp-2">
                      {highlight(g.description, q)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {q && total === 0 && (
        <div className="text-center py-16">
          <p className="text-4xl mb-4">{"\uD83D\uDD0D"}</p>
          <p className="text-muted mb-4">「{raw}」に一致する結果が見つかりませんでした</p>
          <div className="flex gap-3 justify-center">
            <Link href="/" className="text-primary hover:underline">トップへ</Link>
            <Link href="/tools" className="text-primary hover:underline">ツール一覧</Link>
            <Link href="/guide" className="text-primary hover:underline">ガイド一覧</Link>
          </div>
        </div>
      )}
    </div>
  );
}
