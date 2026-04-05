"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const HEADERS = [
  { name: "Content-Type", desc: "\u30EA\u30BD\u30FC\u30B9\u306EMIME\u30BF\u30A4\u30D7\u3092\u793A\u3059", example: "application/json; charset=utf-8", category: "\u30B3\u30F3\u30C6\u30F3\u30C4" },
  { name: "Content-Length", desc: "\u30EC\u30B9\u30DD\u30F3\u30B9\u30DC\u30C7\u30A3\u306E\u30D0\u30A4\u30C8\u6570", example: "348", category: "\u30B3\u30F3\u30C6\u30F3\u30C4" },
  { name: "Content-Encoding", desc: "\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u5727\u7E2E\u5F62\u5F0F", example: "gzip", category: "\u30B3\u30F3\u30C6\u30F3\u30C4" },
  { name: "Cache-Control", desc: "\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u52D5\u4F5C\u3092\u5236\u5FA1", example: "max-age=3600, public", category: "\u30AD\u30E3\u30C3\u30B7\u30E5" },
  { name: "ETag", desc: "\u30EA\u30BD\u30FC\u30B9\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u8B58\u5225\u5B50", example: "\"33a64df551425fcc55e4d42a148795d9f25f89d4\"", category: "\u30AD\u30E3\u30C3\u30B7\u30E5" },
  { name: "Last-Modified", desc: "\u30EA\u30BD\u30FC\u30B9\u306E\u6700\u7D42\u66F4\u65B0\u65E5\u6642", example: "Wed, 21 Oct 2025 07:28:00 GMT", category: "\u30AD\u30E3\u30C3\u30B7\u30E5" },
  { name: "Authorization", desc: "\u8A8D\u8A3C\u60C5\u5831\u3092\u9001\u4FE1", example: "Bearer eyJhbGciOiJIUzI...", category: "\u8A8D\u8A3C" },
  { name: "WWW-Authenticate", desc: "\u8A8D\u8A3C\u65B9\u6CD5\u3092\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u901A\u77E5", example: "Bearer realm=\"example\"", category: "\u8A8D\u8A3C" },
  { name: "Cookie", desc: "\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304B\u3089\u30B5\u30FC\u30D0\u30FC\u3078Cookie\u3092\u9001\u4FE1", example: "session_id=abc123; theme=dark", category: "\u8A8D\u8A3C" },
  { name: "Set-Cookie", desc: "\u30B5\u30FC\u30D0\u30FC\u304B\u3089Cookie\u3092\u8A2D\u5B9A", example: "session_id=abc123; Path=/; HttpOnly", category: "\u8A8D\u8A3C" },
  { name: "Access-Control-Allow-Origin", desc: "CORS\u3067\u8A31\u53EF\u3059\u308B\u30AA\u30EA\u30B8\u30F3", example: "*", category: "CORS" },
  { name: "Access-Control-Allow-Methods", desc: "CORS\u3067\u8A31\u53EF\u3059\u308BHTTP\u30E1\u30BD\u30C3\u30C9", example: "GET, POST, PUT, DELETE", category: "CORS" },
  { name: "X-Content-Type-Options", desc: "MIME\u30B9\u30CB\u30C3\u30D5\u30A3\u30F3\u30B0\u3092\u9632\u6B62", example: "nosniff", category: "\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3" },
  { name: "Strict-Transport-Security", desc: "HTTPS\u3092\u5F37\u5236", example: "max-age=31536000; includeSubDomains", category: "\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3" },
  { name: "X-Frame-Options", desc: "iframe\u3067\u306E\u57CB\u3081\u8FBC\u307F\u3092\u5236\u5FA1", example: "DENY", category: "\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3" },
  { name: "User-Agent", desc: "\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u60C5\u5831", example: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)", category: "\u30EA\u30AF\u30A8\u30B9\u30C8" },
  { name: "Accept", desc: "\u53D7\u3051\u5165\u308C\u53EF\u80FD\u306AMIME\u30BF\u30A4\u30D7", example: "text/html, application/json", category: "\u30EA\u30AF\u30A8\u30B9\u30C8" },
  { name: "Host", desc: "\u30EA\u30AF\u30A8\u30B9\u30C8\u5148\u306E\u30DB\u30B9\u30C8\u540D", example: "www.example.com", category: "\u30EA\u30AF\u30A8\u30B9\u30C8" },
];

export default function HttpHeaderViewerPage() {
  const [filter, setFilter] = useState("");
  const [copied, setCopied] = useState("");
  const categories = Array.from(new Set(HEADERS.map((h) => h.category)));

  const filtered = HEADERS.filter((h) =>
    h.name.toLowerCase().includes(filter.toLowerCase()) || h.desc.includes(filter)
  );

  const copy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => { setCopied(text); setTimeout(() => setCopied(""), 2000); });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">{"\u30C8\u30C3\u30D7"}</Link><span className="mx-2">/</span><span>{"HTTP\u30D8\u30C3\u30C0\u30FC\u78BA\u8A8D"}</span></nav>
      <h1 className="text-2xl font-bold mb-2">{"HTTP\u30D8\u30C3\u30C0\u30FC\u78BA\u8A8D"}</h1>
      <p className="text-muted mb-8">{"\u3088\u304F\u4F7F\u308F\u308C\u308BHTTP\u30D8\u30C3\u30C0\u30FC\u306E\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u4E00\u89A7\u3067\u3059\u3002\u30AF\u30EA\u30C3\u30AF\u3067\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3059\u3002"}</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} className="w-full p-3 border border-card-border rounded-lg bg-base text-sm" placeholder={"\u30D8\u30C3\u30C0\u30FC\u540D\u3067\u691C\u7D22..."} />
        {categories.map((cat) => {
          const items = filtered.filter((h) => h.category === cat);
          if (items.length === 0) return null;
          return (
            <div key={cat} className="mt-6">
              <h3 className="text-sm font-bold text-primary mb-2">{cat}</h3>
              <div className="space-y-2">
                {items.map((h) => (
                  <div key={h.name} className="p-3 border border-card-border rounded-lg cursor-pointer hover:bg-base" onClick={() => copy(h.name + ": " + h.example)}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-medium">{h.name}</span>
                      <span className="text-xs text-muted">{copied === h.name + ": " + h.example ? "\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F" : "\u30AF\u30EA\u30C3\u30AF\u3067\u30B3\u30D4\u30FC"}</span>
                    </div>
                    <p className="text-xs text-muted mt-1">{h.desc}</p>
                    <p className="text-xs font-mono mt-1 text-primary/70">{h.example}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">{"\u4F7F\u3044\u65B9"}</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>{"\u4E00\u89A7\u304B\u3089HTTP\u30D8\u30C3\u30C0\u30FC\u3092\u691C\u7D22\u30FB\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u30D8\u30C3\u30C0\u30FC\u540D\u3068\u4F8B\u304C\u30B3\u30D4\u30FC\u3055\u308C\u307E\u3059\u3002"}</p></div></section>
      <AffiliateSection slug="http-header-viewer" category="\u958B\u767A\u30C4\u30FC\u30EB" />
      <RelatedTools currentSlug="http-header-viewer" category="\u958B\u767A\u30C4\u30FC\u30EB" />
    </div>
  );
}
