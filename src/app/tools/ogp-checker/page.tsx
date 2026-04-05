"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function OgpCheckerPage() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const check = () => {
    if (!url) return;
    setResult(`OGPプレビュー機能はクライアントサイドでは直接取得できないため、以下のURLでご確認ください。`);
  };

  const externalUrl = url ? `https://cards-dev.twitter.com/validator` : "";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>OGP確認ツール</span></nav>
      <h1 className="text-2xl font-bold mb-2">OGP確認ツール</h1>
      <p className="text-muted mb-8">URLのOGPタグ（タイトル・説明・画像）を確認。SNSシェア時の表示確認に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">確認したいURL</label>
          <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com" className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>
        <div className="space-y-3">
          <p className="text-sm font-medium">OGP確認サービス</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href={`https://ogp.me/`} target="_blank" rel="noopener noreferrer" className="block bg-background rounded-lg p-4 text-center hover:border-primary border border-card-border">
              <div className="text-lg font-bold">OGP公式仕様</div>
              <div className="text-xs text-muted mt-1">Open Graph Protocol仕様書</div>
            </a>
            <a href={`https://developers.facebook.com/tools/debug/${url ? `?q=${encodeURIComponent(url)}` : ""}`} target="_blank" rel="noopener noreferrer" className="block bg-background rounded-lg p-4 text-center hover:border-primary border border-card-border">
              <div className="text-lg font-bold">Facebook Debugger</div>
              <div className="text-xs text-muted mt-1">Facebook OGPデバッガー</div>
            </a>
          </div>
        </div>
        <div className="bg-background rounded-lg p-4 space-y-2">
          <p className="text-sm font-medium">必須OGPタグ一覧</p>
          <div className="text-xs text-muted font-mono space-y-1">
            <p>&lt;meta property=&quot;og:title&quot; content=&quot;ページタイトル&quot; /&gt;</p>
            <p>&lt;meta property=&quot;og:description&quot; content=&quot;説明文&quot; /&gt;</p>
            <p>&lt;meta property=&quot;og:image&quot; content=&quot;画像URL&quot; /&gt;</p>
            <p>&lt;meta property=&quot;og:url&quot; content=&quot;ページURL&quot; /&gt;</p>
            <p>&lt;meta property=&quot;og:type&quot; content=&quot;website&quot; /&gt;</p>
          </div>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">OGP確認ツールの使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>OGP（Open Graph Protocol）は、SNSでURLをシェアした際の表示内容を制御するメタタグです。</p><p>Facebook DebuggerでURLを入力すると、実際のOGP表示を確認できます。</p></div></section>
      <AffiliateSection slug="ogp-checker" category="開発ツール" />
      <RelatedTools currentSlug="ogp-checker" category="開発ツール" />
    </div>
  );
}
