"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const PATTERNS = [
  { label: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9", pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}", category: "\u3088\u304F\u4F7F\u3046" },
  { label: "URL", pattern: "https?://[\w\-]+(\.[\w\-]+)+[/\w\-.?&=%]*", category: "\u3088\u304F\u4F7F\u3046" },
  { label: "\u96FB\u8A71\u756A\u53F7\uFF08\u65E5\u672C\uFF09", pattern: "0\d{1,4}-\d{1,4}-\d{4}", category: "\u3088\u304F\u4F7F\u3046" },
  { label: "\u90F5\u4FBF\u756A\u53F7", pattern: "\d{3}-\d{4}", category: "\u3088\u304F\u4F7F\u3046" },
  { label: "IP\u30A2\u30C9\u30EC\u30B9\uFF08IPv4\uFF09", pattern: "\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}", category: "\u3088\u304F\u4F7F\u3046" },
  { label: "\u65E5\u4ED8\uFF08YYYY-MM-DD\uFF09", pattern: "\d{4}-\d{2}-\d{2}", category: "\u65E5\u4ED8\u30FB\u6642\u523B" },
  { label: "\u65E5\u4ED8\uFF08YYYY/MM/DD\uFF09", pattern: "\d{4}/\d{2}/\d{2}", category: "\u65E5\u4ED8\u30FB\u6642\u523B" },
  { label: "\u6642\u523B\uFF08HH:MM:SS\uFF09", pattern: "\d{2}:\d{2}:\d{2}", category: "\u65E5\u4ED8\u30FB\u6642\u523B" },
  { label: "\u534A\u89D2\u6570\u5B57\u306E\u307F", pattern: "^\d+$", category: "\u6587\u5B57\u30BF\u30A4\u30D7" },
  { label: "\u534A\u89D2\u82F1\u6570\u5B57", pattern: "^[a-zA-Z0-9]+$", category: "\u6587\u5B57\u30BF\u30A4\u30D7" },
  { label: "\u3072\u3089\u304C\u306A\u306E\u307F", pattern: "^[\u3040-\u309F]+$", category: "\u6587\u5B57\u30BF\u30A4\u30D7" },
  { label: "\u30AB\u30BF\u30AB\u30CA\u306E\u307F", pattern: "^[\u30A0-\u30FF]+$", category: "\u6587\u5B57\u30BF\u30A4\u30D7" },
  { label: "HTML\u30BF\u30B0", pattern: "<[^>]+>", category: "\u305D\u306E\u4ED6" },
  { label: "\u7A7A\u767D\u884C", pattern: "^\s*$", category: "\u305D\u306E\u4ED6" },
  { label: "\u5148\u982D\u30FB\u672B\u5C3E\u306E\u7A7A\u767D", pattern: "^\s+|\s+$", category: "\u305D\u306E\u4ED6" },
  { label: "16\u9032\u6570\u30AB\u30E9\u30FC\u30B3\u30FC\u30C9", pattern: "#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})", category: "\u305D\u306E\u4ED6" },
];

export default function RegexCheatsheetPage() {
  const [copied, setCopied] = useState("");
  const [filter, setFilter] = useState("");
  const categories = Array.from(new Set(PATTERNS.map((p) => p.category)));

  const filtered = PATTERNS.filter((p) =>
    p.label.toLowerCase().includes(filter.toLowerCase()) || p.pattern.includes(filter)
  );

  const copy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => { setCopied(text); setTimeout(() => setCopied(""), 2000); });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">{"\u30C8\u30C3\u30D7"}</Link><span className="mx-2">/</span><span>{"\u6B63\u898F\u8868\u73FE\u30C1\u30FC\u30C8\u30B7\u30FC\u30C8"}</span></nav>
      <h1 className="text-2xl font-bold mb-2">{"\u6B63\u898F\u8868\u73FE\u30C1\u30FC\u30C8\u30B7\u30FC\u30C8"}</h1>
      <p className="text-muted mb-8">{"\u3088\u304F\u4F7F\u308F\u308C\u308B\u6B63\u898F\u8868\u73FE\u30D1\u30BF\u30FC\u30F3\u306E\u4E00\u89A7\u3067\u3059\u3002\u30AF\u30EA\u30C3\u30AF\u3067\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3059\u3002"}</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} className="w-full p-3 border border-card-border rounded-lg bg-base text-sm" placeholder={"\u30D1\u30BF\u30FC\u30F3\u3092\u691C\u7D22..."} />
        {categories.map((cat) => {
          const items = filtered.filter((p) => p.category === cat);
          if (items.length === 0) return null;
          return (
            <div key={cat} className="mt-6">
              <h3 className="text-sm font-bold text-primary mb-2">{cat}</h3>
              <div className="space-y-2">
                {items.map((p) => (
                  <div key={p.label} className="p-3 border border-card-border rounded-lg cursor-pointer hover:bg-base flex items-center justify-between" onClick={() => copy(p.pattern)}>
                    <div>
                      <span className="text-sm font-medium">{p.label}</span>
                      <p className="font-mono text-xs text-primary/70 mt-1">{p.pattern}</p>
                    </div>
                    <span className="text-xs text-muted whitespace-nowrap ml-2">{copied === p.pattern ? "\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F" : "\u30B3\u30D4\u30FC"}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">{"\u4F7F\u3044\u65B9"}</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>{"\u4E00\u89A7\u304B\u3089\u5FC5\u8981\u306A\u6B63\u898F\u8868\u73FE\u3092\u63A2\u3057\u3001\u30AF\u30EA\u30C3\u30AF\u3067\u30D1\u30BF\u30FC\u30F3\u3092\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3059\u3002\u691C\u7D22\u30DC\u30C3\u30AF\u30B9\u3067\u7D5E\u308A\u8FBC\u307F\u3082\u53EF\u80FD\u3067\u3059\u3002"}</p></div></section>
      <AffiliateSection slug="regex-cheatsheet" category="\u958B\u767A\u30C4\u30FC\u30EB" />
      <RelatedTools currentSlug="regex-cheatsheet" category="\u958B\u767A\u30C4\u30FC\u30EB" />
    </div>
  );
}
