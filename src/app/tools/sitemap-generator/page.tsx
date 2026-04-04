"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const CHANGEFREQ_OPTIONS = ["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"];
const PRIORITY_OPTIONS = ["1.0", "0.9", "0.8", "0.7", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1"];

function generateSitemap(
  urls: string[],
  changefreq: string,
  priority: string,
  includeLastmod: boolean
): string {
  const today = new Date().toISOString().split("T")[0];
  const entries = urls
    .map((url) => url.trim())
    .filter((url) => url.length > 0)
    .map((url) => {
      const lines = [`  <url>`, `    <loc>${url}</loc>`];
      if (includeLastmod) lines.push(`    <lastmod>${today}</lastmod>`);
      lines.push(`    <changefreq>${changefreq}</changefreq>`);
      lines.push(`    <priority>${priority}</priority>`);
      lines.push(`  </url>`);
      return lines.join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;
}

export default function SitemapGeneratorPage() {
  const [urlsText, setUrlsText] = useState("");
  const [changefreq, setChangefreq] = useState("weekly");
  const [priority, setPriority] = useState("0.5");
  const [includeLastmod, setIncludeLastmod] = useState(true);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const urls = urlsText.split("\n").filter((u) => u.trim().length > 0);

  const generate = () => {
    const xml = generateSitemap(urls, changefreq, priority, includeLastmod);
    setResult(xml);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const download = () => {
    const blob = new Blob([result], { type: "application/xml" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "sitemap.xml";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>サイトマップ生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">サイトマップ生成ツール</h1>
      <p className="text-muted mb-8">
        URLを入力してXML形式のサイトマップを生成します。SEO対策に役立てください。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">
            URLを入力（1行に1つ）
            <span className="text-muted font-normal ml-2">{urls.length} URL</span>
          </label>
          <textarea
            value={urlsText}
            onChange={(e) => setUrlsText(e.target.value)}
            placeholder={"https://example.com/\nhttps://example.com/about\nhttps://example.com/contact"}
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none font-mono"
            rows={6}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">更新頻度 (changefreq)</label>
            <select
              value={changefreq}
              onChange={(e) => setChangefreq(e.target.value)}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
            >
              {CHANGEFREQ_OPTIONS.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">優先度 (priority)</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
            >
              {PRIORITY_OPTIONS.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>
        </div>

        <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
          <input
            type="checkbox"
            checked={includeLastmod}
            onChange={(e) => setIncludeLastmod(e.target.checked)}
            className="rounded"
          />
          lastmod（最終更新日）を含める（本日: {new Date().toISOString().split("T")[0]}）
        </label>

        <button
          onClick={generate}
          disabled={urls.length === 0}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          サイトマップを生成
        </button>

        {result && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">生成されたXML</span>
              <div className="flex gap-2">
                <button
                  onClick={copy}
                  className="text-xs text-primary hover:text-primary-hover font-medium border border-card-border rounded px-3 py-1"
                >
                  {copied ? "コピー済み" : "コピー"}
                </button>
                <button
                  onClick={download}
                  className="text-xs text-primary hover:text-primary-hover font-medium border border-card-border rounded px-3 py-1"
                >
                  ダウンロード
                </button>
              </div>
            </div>
            <textarea
              readOnly
              value={result}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-xs font-mono bg-background resize-none"
              rows={12}
            />
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>URLを1行に1つずつ入力し、更新頻度と優先度を設定して「サイトマップを生成」をクリックします。</p>
          <p>生成されたXMLをコピーするか、ダウンロードボタンでsitemap.xmlとして保存できます。</p>
          <p>作成したsitemap.xmlはサーバーのルートに配置し、Google Search Consoleに登録することを推奨します。</p>
          <p>すべての処理はブラウザ内で完結します。</p>
        </div>
      </section>


      <AffiliateSection slug="sitemap-generator" category="開発ツール" />
      <RelatedTools currentSlug="sitemap-generator" category="開発ツール" />
    </div>
  );
}
