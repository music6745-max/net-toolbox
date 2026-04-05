"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { tools } from "@/lib/tools";

function SearchResults() {
  const searchParams = useSearchParams();
  const q = (searchParams.get("q") || "").toLowerCase();

  const results = q
    ? tools.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.slug.includes(q) ||
          t.category.toLowerCase().includes(q)
      )
    : [];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>検索結果</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">
        「{searchParams.get("q")}」の検索結果
      </h1>
      <p className="text-muted mb-8">{results.length}件のツールが見つかりました</p>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="block bg-card-bg border border-card-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
            >
              <div className="text-3xl mb-3">{tool.icon}</div>
              <h2 className="text-lg font-semibold mb-1">{tool.name}</h2>
              <p className="text-sm text-muted leading-relaxed mb-2">{tool.description}</p>
              <span className="text-xs text-muted">{tool.category}</span>
            </Link>
          ))}
        </div>
      ) : q ? (
        <div className="text-center py-16">
          <p className="text-4xl mb-4">{"\uD83D\uDD0D"}</p>
          <p className="text-muted mb-4">「{searchParams.get("q")}」に一致するツールが見つかりませんでした</p>
          <Link href="/" className="text-primary hover:underline">トップページに戻る</Link>
        </div>
      ) : null}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="max-w-5xl mx-auto px-4 py-10 text-center text-muted">検索中...</div>}>
      <SearchResults />
    </Suspense>
  );
}
