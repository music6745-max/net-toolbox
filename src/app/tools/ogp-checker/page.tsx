"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";
import { ToolFAQSection } from "@/components/ToolFAQSection";

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
      <ToolFAQSection
        toolName="OGP確認"
        howTo={[
          "確認したいURLを入力",
          "Facebook Debuggerで実際のOGP表示をチェック",
          "必須OGPタグの実装例を参照",
          "SNSシェア時の表示改善に活用",
        ]}
        faqs={[
          {
            question: "OGPタグが設定されないと？",
            answer: "SNSでURLシェア時、画像なしのテキストリンクのみ表示、クリック率が50%以上低下。Twitter/X、Facebook、LINE、Slack等で自動的にOGPデータ取得＆カード表示、CTR向上のため全Webサイトで必須設定。WordPressならYoast SEO・All in One SEOプラグインで自動設定可能です。",
          },
          {
            question: "画像サイズの推奨は？",
            answer: "1200×630px（1.91:1比率）、ファイルサイズ300KB以内が理想。Twitter/X：1200×675px、LinkedIn：1200×627px、WhatsApp：300×200px以上。デフォルト画像を用意＋記事ごとに個別画像（eyecatch）設定で、SNSでの視認性大幅向上、ブログ記事のCTR+20〜30%UP実証されています。",
          },
          {
            question: "必須タグは？",
            answer: "og:title（タイトル）、og:description（説明）、og:image（画像URL）、og:url（ページURL）、og:type（website・article等）。Twitter Cardも別途設定（twitter:card・twitter:site）、SNSプラットフォームごとの最適化が重要。最低限のOGPセット＋Twitter Card実装で、SNS経由トラフィック最大化できます。",
          },
          {
            question: "確認ツールは何を使う？",
            answer: "Facebook Sharing Debugger（最定番）、Twitter Card Validator（Twitter用）、LinkedIn Post Inspector、Open Graph Check（ogp.buka.jp）等。キャッシュクリア機能も重要、OGP更新後は「Scrape Again」でキャッシュリセット必須。本ツールから主要サービスへのリンク提供しています。",
          },
        ]}
      />
      <AffiliateSection slug="ogp-checker" category="開発ツール" />
      <RelatedTools currentSlug="ogp-checker" category="開発ツール" />
    </div>
  );
}
