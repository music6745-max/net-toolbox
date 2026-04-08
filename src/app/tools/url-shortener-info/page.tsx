"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type Service = {
  name: string;
  url: string;
  features: string[];
  pros: string[];
  cons: string[];
  free: string;
};

const SERVICES: Service[] = [
  {
    name: "Bitly",
    url: "https://bitly.com/",
    features: ["クリック解析", "カスタムドメイン", "QRコード生成"],
    pros: ["世界シェアトップクラス", "詳細なアクセス解析", "API充実"],
    cons: ["無料枠は月50リンクまで", "カスタムは有料プラン"],
    free: "月50リンク（要登録）",
  },
  {
    name: "TinyURL",
    url: "https://tinyurl.com/",
    features: ["登録不要", "カスタムエイリアス可"],
    pros: ["登録なしで即利用", "シンプルで永続"],
    cons: ["解析機能が弱い", "スパム対策で警告表示が出ることも"],
    free: "完全無料・登録不要",
  },
  {
    name: "is.gd",
    url: "https://is.gd/",
    features: ["超短ドメイン", "プレビュー機能"],
    pros: ["極めて短いURL", "プライバシー重視"],
    cons: ["カスタマイズ少なめ"],
    free: "完全無料・登録不要",
  },
  {
    name: "v.gd",
    url: "https://v.gd/",
    features: ["プレビュー必須型"],
    pros: ["クリック前にリンク先確認可", "セキュリティ重視"],
    cons: ["1ステップ余分"],
    free: "完全無料・登録不要",
  },
  {
    name: "x.gd",
    url: "https://x.gd/",
    features: ["短ドメイン", "API提供"],
    pros: ["シンプル", "登録不要"],
    cons: ["知名度は低い"],
    free: "完全無料",
  },
];

export default function Page() {
  const [longUrl, setLongUrl] = useState("");
  const [copied, setCopied] = useState("");

  const copy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    } catch {}
  };

  const isValid = /^https?:\/\/.+/.test(longUrl);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>URL短縮サービス比較</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">URL短縮サービス比較ツール</h1>
      <p className="text-muted mb-8">
        代表的なURL短縮サービスの特徴を一覧で比較できます。短縮したい元URLを入力すると、各サービスの作成ページへワンクリックで遷移できます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <label className="block text-sm font-medium mb-2">短縮したい元URL</label>
        <div className="flex gap-2">
          <input type="url" value={longUrl} onChange={(e) => setLongUrl(e.target.value)}
            placeholder="https://example.com/very/long/url"
            className="flex-1 border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          <button onClick={() => copy(longUrl, "main")} disabled={!isValid}
            className="px-4 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background disabled:opacity-50">
            {copied === "main" ? "コピー済" : "コピー"}
          </button>
        </div>
        {longUrl && !isValid && <p className="text-xs text-red-500 mt-2">http(s):// で始まる有効なURLを入力してください</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {SERVICES.map((s) => (
          <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold">{s.name}</h2>
              <span className="text-xs text-muted">{s.free}</span>
            </div>
            <div className="text-xs space-y-2 mb-4">
              <div>
                <p className="font-medium text-muted mb-1">特徴</p>
                <div className="flex flex-wrap gap-1">
                  {s.features.map((f) => <span key={f} className="px-2 py-0.5 bg-background rounded">{f}</span>)}
                </div>
              </div>
              <div>
                <p className="font-medium text-green-600">メリット</p>
                <ul className="list-disc list-inside text-muted">{s.pros.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
              <div>
                <p className="font-medium text-orange-500">デメリット</p>
                <ul className="list-disc list-inside text-muted">{s.cons.map((c) => <li key={c}>{c}</li>)}</ul>
              </div>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer"
              className="block text-center bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">
              {s.name} を開く
            </a>
          </div>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">URL短縮サービスを使うときの注意点</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>短縮URLはクリック先が見えないため、信頼できるサービスを選びましょう。</p>
          <p>解析機能を使う場合は無料枠の上限と利用規約を確認してください。</p>
          <p>このツールは外部APIを呼び出さず、各社の公式ページへ誘導するだけのため安全です。</p>
        </div>
      </section>

      <AffiliateSection slug="url-shortener-info" category="開発ツール" />
      <RelatedTools currentSlug="url-shortener-info" category="開発ツール" />
    </div>
  );
}
