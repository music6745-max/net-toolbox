"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

interface RubyPair {
  kanji: string;
  ruby: string;
}

export default function RubyGeneratorPage() {
  const [pairs, setPairs] = useState<RubyPair[]>([{ kanji: "", ruby: "" }]);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const addPair = () => {
    setPairs([...pairs, { kanji: "", ruby: "" }]);
  };

  const removePair = (index: number) => {
    if (pairs.length <= 1) return;
    setPairs(pairs.filter((_, i) => i !== index));
  };

  const updatePair = (index: number, field: keyof RubyPair, value: string) => {
    const newPairs = [...pairs];
    newPairs[index] = { ...newPairs[index], [field]: value };
    setPairs(newPairs);
  };

  const generate = () => {
    const html = pairs
      .filter((p) => p.kanji.trim())
      .map((p) => {
        if (p.ruby.trim()) {
          return `<ruby>${p.kanji}<rp>(</rp><rt>${p.ruby}</rt><rp>)</rp></ruby>`;
        }
        return p.kanji;
      })
      .join("");
    setOutput(html);
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const previewHtml = pairs
    .filter((p) => p.kanji.trim())
    .map((p) => {
      if (p.ruby.trim()) {
        return `<ruby>${p.kanji}<rp>(</rp><rt>${p.ruby}</rt><rp>)</rp></ruby>`;
      }
      return p.kanji;
    })
    .join("");

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>ふりがなHTML生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">ふりがなHTML生成ツール</h1>
      <p className="text-muted mb-8">
        漢字にふりがな（ルビ）を付けるHTMLのrubyタグを自動生成します。Webサイトやブログでのルビ振りに便利です。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-4">
          漢字とふりがなを入力
        </label>
        <div className="space-y-3">
          {pairs.map((pair, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="text"
                value={pair.kanji}
                onChange={(e) => updatePair(index, "kanji", e.target.value)}
                placeholder="漢字（例：東京）"
                className="flex-1 border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
              <input
                type="text"
                value={pair.ruby}
                onChange={(e) => updatePair(index, "ruby", e.target.value)}
                placeholder="ふりがな（例：とうきょう）"
                className="flex-1 border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
              {pairs.length > 1 && (
                <button
                  onClick={() => removePair(index)}
                  className="shrink-0 text-red-500 hover:text-red-700 px-2 py-1 text-lg"
                  title="削除"
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-4">
          <button
            onClick={addPair}
            className="bg-foreground/10 text-foreground px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-foreground/20 transition-colors"
          >
            + 行を追加
          </button>
          <button
            onClick={generate}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            HTMLを生成
          </button>
        </div>
      </div>

      {previewHtml && (
        <div className="mt-6 bg-card-bg border border-card-border rounded-xl p-6">
          <h3 className="text-sm font-medium mb-3">プレビュー</h3>
          <div
            className="text-2xl leading-loose p-4 bg-white rounded-lg border border-card-border"
            dangerouslySetInnerHTML={{ __html: previewHtml }}
          />
        </div>
      )}

      {output && (
        <div className="mt-6 bg-card-bg border border-card-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium">生成されたHTMLコード</h3>
            <button
              onClick={copyOutput}
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              {copied ? "コピー済み" : "コピー"}
            </button>
          </div>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto whitespace-pre-wrap break-all">
            {output}
          </pre>
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">ふりがなHTML生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 左側に漢字、右側にふりがなを入力します。</p>
          <p>2. 複数の漢字がある場合は「+ 行を追加」で行を増やします。</p>
          <p>3. 「HTMLを生成」ボタンをクリックすると、rubyタグ付きのHTMLが生成されます。</p>
          <p>4. 生成されたHTMLコードをコピーして、Webサイトやブログに貼り付けてください。</p>
          <p>
            入力したデータはブラウザ内で処理されるため、サーバーに送信されることはありません。安心してご利用ください。
          </p>
        </div>
      </section>

      <AffiliateSection slug="ruby-generator" category="テキスト" />
      <RelatedTools currentSlug="ruby-generator" category="テキスト" />
    </div>
  );
}
