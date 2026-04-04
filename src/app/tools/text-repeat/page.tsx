"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function TextRepeatPage() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(3);
  const [separator, setSeparator] = useState("newline");
  const [copied, setCopied] = useState(false);

  const separatorMap: Record<string, string> = {
    newline: "\n",
    space: " ",
    comma: ",",
    none: "",
  };

  const result = text
    ? Array(Math.min(Math.max(count, 1), 1000))
        .fill(text)
        .join(separatorMap[separator] ?? "\n")
    : "";

  const handleCopy = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>テキスト繰り返し</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">テキスト繰り返しツール</h1>
      <p className="text-muted mb-8">
        テキストを指定した回数だけ繰り返して生成します。テストデータの作成やダミーテキストの生成に便利です。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">繰り返すテキスト</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="繰り返したいテキストを入力..."
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">繰り返し回数</label>
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              min={1}
              max={1000}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">区切り文字</label>
            <select
              value={separator}
              onChange={(e) => setSeparator(e.target.value)}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            >
              <option value="newline">改行</option>
              <option value="space">スペース</option>
              <option value="comma">カンマ</option>
              <option value="none">なし</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">結果</label>
          <textarea
            value={result}
            readOnly
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-background resize-none"
            rows={6}
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleCopy}
            disabled={!result}
            className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {copied ? "コピーしました!" : "コピー"}
          </button>
          <button
            onClick={() => {
              setText("");
              setCount(3);
            }}
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            クリア
          </button>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">テキスト繰り返しツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>繰り返したいテキストを入力し、回数と区切り文字を指定すると、自動的に結果が生成されます。</p>
          <p>最大1000回まで繰り返し可能。テストデータの作成やプログラミングの動作確認に便利です。</p>
        </div>
      </section>

      <AffiliateSection slug="text-repeat" category="テキスト" />
      <RelatedTools currentSlug="text-repeat" category="テキスト" />
    </div>
  );
}
