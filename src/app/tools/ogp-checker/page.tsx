"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

interface OgpTag {
  property: string;
  content: string;
}

const ogpReference = [
  { tag: "og:title", desc: "ページのタイトル", required: true },
  { tag: "og:description", desc: "ページの説明文", required: true },
  { tag: "og:image", desc: "シェア時に表示される画像URL", required: true },
  { tag: "og:url", desc: "ページのURL（正規URL）", required: true },
  { tag: "og:type", desc: "コンテンツの種類（website, article等）", required: false },
  { tag: "og:site_name", desc: "サイト名", required: false },
  { tag: "og:locale", desc: "言語・地域（ja_JP等）", required: false },
  { tag: "twitter:card", desc: "Twitterカードの種類（summary, summary_large_image等）", required: false },
  { tag: "twitter:title", desc: "Twitter用タイトル", required: false },
  { tag: "twitter:description", desc: "Twitter用説明文", required: false },
  { tag: "twitter:image", desc: "Twitter用画像URL", required: false },
];

const exampleHtml = `<head>
  <meta property="og:title" content="ページタイトル" />
  <meta property="og:description" content="ページの説明文をここに記述" />
  <meta property="og:image" content="https://example.com/image.png" />
  <meta property="og:url" content="https://example.com/page" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="サイト名" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="ページタイトル" />
  <meta name="twitter:description" content="ページの説明文" />
  <meta name="twitter:image" content="https://example.com/image.png" />
</head>`;

function extractOgpTags(html: string): OgpTag[] {
  const tags: OgpTag[] = [];
  const metaRegex = /<meta\s+[^>]*?(?:property|name)\s*=\s*["']([^"']+)["'][^>]*?content\s*=\s*["']([^"']+)["'][^>]*?\/?>/gi;
  const metaRegex2 = /<meta\s+[^>]*?content\s*=\s*["']([^"']+)["'][^>]*?(?:property|name)\s*=\s*["']([^"']+)["'][^>]*?\/?>/gi;

  let match;
  while ((match = metaRegex.exec(html)) !== null) {
    const prop = match[1];
    if (prop.startsWith("og:") || prop.startsWith("twitter:")) {
      tags.push({ property: prop, content: match[2] });
    }
  }
  while ((match = metaRegex2.exec(html)) !== null) {
    const prop = match[2];
    if (prop.startsWith("og:") || prop.startsWith("twitter:")) {
      const existing = tags.find((t) => t.property === prop);
      if (!existing) {
        tags.push({ property: prop, content: match[1] });
      }
    }
  }
  return tags;
}

export default function Page() {
  const [htmlInput, setHtmlInput] = useState("");
  const [extracted, setExtracted] = useState<OgpTag[]>([]);
  const [analyzed, setAnalyzed] = useState(false);
  const [copiedExample, setCopiedExample] = useState(false);

  const analyze = () => {
    const tags = extractOgpTags(htmlInput);
    setExtracted(tags);
    setAnalyzed(true);
  };

  const copyExample = async () => {
    await navigator.clipboard.writeText(exampleHtml);
    setCopiedExample(true);
    setTimeout(() => setCopiedExample(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>OGPチェッカー</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">OGPチェッカー</h1>
      <p className="text-muted mb-8">
        OGPメタタグのリファレンスと、HTMLからOGPタグを抽出するツールです。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-3">OGPタグ一覧</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border text-left">
                  <th className="py-2 px-2">タグ</th>
                  <th className="py-2 px-2">説明</th>
                  <th className="py-2 px-2 text-center">必須</th>
                </tr>
              </thead>
              <tbody>
                {ogpReference.map((ref) => (
                  <tr key={ref.tag} className="border-b border-card-border/50">
                    <td className="py-2 px-2 font-mono text-primary text-xs">{ref.tag}</td>
                    <td className="py-2 px-2 text-muted">{ref.desc}</td>
                    <td className="py-2 px-2 text-center">{ref.required ? "○" : "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">HTMLコード例</h3>
            <button onClick={copyExample} className="text-sm text-primary hover:text-primary-hover font-medium">
              {copiedExample ? "コピー済み" : "コピー"}
            </button>
          </div>
          <pre className="bg-background rounded-lg p-4 text-xs font-mono overflow-x-auto whitespace-pre-wrap max-h-48 overflow-y-auto">
            {exampleHtml}
          </pre>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">HTMLからOGPタグを抽出</h3>
          <textarea
            value={htmlInput}
            onChange={(e) => setHtmlInput(e.target.value)}
            placeholder="HTMLコードを貼り付けてください..."
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={6}
          />
          <button
            onClick={analyze}
            className="mt-3 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            抽出する
          </button>
        </div>

        {analyzed && (
          <div>
            <h3 className="text-sm font-medium mb-2">抽出結果</h3>
            {extracted.length === 0 ? (
              <p className="text-sm text-muted">OGPタグが見つかりませんでした。</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-card-border text-left">
                      <th className="py-2 px-2">プロパティ</th>
                      <th className="py-2 px-2">値</th>
                    </tr>
                  </thead>
                  <tbody>
                    {extracted.map((tag, i) => (
                      <tr key={i} className="border-b border-card-border/50">
                        <td className="py-2 px-2 font-mono text-primary text-xs">{tag.property}</td>
                        <td className="py-2 px-2 text-xs break-all">{tag.content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {extracted.length > 0 && (
              <div className="mt-3 space-y-1">
                {ogpReference
                  .filter((r) => r.required)
                  .map((r) => {
                    const found = extracted.find((t) => t.property === r.tag);
                    return (
                      <div key={r.tag} className="text-xs flex items-center gap-2">
                        <span className={found ? "text-green-600" : "text-red-500"}>
                          {found ? "✓" : "✗"}
                        </span>
                        <span className="font-mono">{r.tag}</span>
                        {!found && <span className="text-red-500">（未設定）</span>}
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">OGPチェッカーの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>OGP（Open Graph Protocol）は、SNSでURLをシェアした時の表示を制御するためのメタタグです。</p>
          <p>HTMLコードを貼り付けて「抽出する」をクリックすると、設定されているOGPタグを一覧表示します。</p>
          <p>必須タグの設定状況もチェックできます。サンプルコードをコピーしてご利用ください。</p>
        </div>
      </section>

      <AffiliateSection slug="ogp-checker" category="開発ツール" />


      <RelatedTools currentSlug="ogp-checker" category="開発ツール" />
    </div>
  );
}
