"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

const FONTS = [
  { name: "serif", label: "Serif（明朝体系）" },
  { name: "sans-serif", label: "Sans-serif（ゴシック体系）" },
  { name: "monospace", label: "Monospace（等幅）" },
  { name: "cursive", label: "Cursive（筆記体）" },
  { name: "fantasy", label: "Fantasy（装飾）" },
  { name: "Georgia, serif", label: "Georgia" },
  { name: "Palatino Linotype, serif", label: "Palatino Linotype" },
  { name: "Arial, sans-serif", label: "Arial" },
  { name: "Helvetica, sans-serif", label: "Helvetica" },
  { name: "Verdana, sans-serif", label: "Verdana" },
  { name: "Trebuchet MS, sans-serif", label: "Trebuchet MS" },
  { name: "Impact, fantasy", label: "Impact" },
  { name: "Courier New, monospace", label: "Courier New" },
  { name: "Lucida Console, monospace", label: "Lucida Console" },
];

const WEIGHTS = [
  { value: "300", label: "Light (300)" },
  { value: "400", label: "Regular (400)" },
  { value: "600", label: "SemiBold (600)" },
  { value: "700", label: "Bold (700)" },
  { value: "900", label: "Black (900)" },
];

export default function FontPreviewPage() {
  const [text, setText] = useState("The quick brown fox jumps over the lazy dog. あいうえお漢字テスト");
  const [size, setSize] = useState(20);
  const [weight, setWeight] = useState("400");
  const [selected, setSelected] = useState<Set<string>>(new Set(FONTS.slice(0, 6).map((f) => f.name)));

  const toggleFont = (name: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const selectAll = () => setSelected(new Set(FONTS.map((f) => f.name)));
  const clearAll = () => setSelected(new Set());

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>フォントプレビュー</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">フォントプレビューツール</h1>
      <p className="text-muted mb-8">
        テキストを入力して、様々なフォントでの表示を比較できます。サイズや太さも調整可能です。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">プレビューテキスト</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={2}
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">フォントサイズ: {size}px</label>
            <input
              type="range"
              min={10}
              max={60}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">フォントウェイト</label>
            <select
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {WEIGHTS.map((w) => (
                <option key={w.value} value={w.value}>{w.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-2">
            <label className="text-sm font-medium">表示するフォント</label>
            <button onClick={selectAll} className="text-xs text-primary">すべて選択</button>
            <button onClick={clearAll} className="text-xs text-muted">クリア</button>
          </div>
          <div className="flex flex-wrap gap-2">
            {FONTS.map((f) => (
              <button
                key={f.name}
                onClick={() => toggleFont(f.name)}
                className={`px-3 py-1 rounded-full text-xs border transition-colors ${
                  selected.has(f.name)
                    ? "bg-primary text-white border-primary"
                    : "border-card-border text-muted hover:border-primary"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {FONTS.filter((f) => selected.has(f.name)).map((f) => (
          <div key={f.name} className="bg-card-bg border border-card-border rounded-xl p-5">
            <p className="text-xs text-muted mb-2 font-mono">{f.label}</p>
            <p
              style={{
                fontFamily: f.name,
                fontSize: `${size}px`,
                fontWeight: weight,
                lineHeight: 1.5,
                wordBreak: "break-word",
              }}
            >
              {text || "（テキストを入力してください）"}
            </p>
          </div>
        ))}
        {selected.size === 0 && (
          <p className="text-center text-muted py-10 text-sm">フォントを選択してください</p>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">フォントプレビューツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>プレビューテキスト欄に確認したいテキストを入力します。</p>
          <p>フォントサイズとウェイト（太さ）を調整できます。</p>
          <p>表示するフォントのボタンをクリックしてON/OFFを切り替えられます。</p>
          <p>システムフォントとよく使われるWebセーフフォントを比較できます。</p>
        </div>
      </section>


      <RelatedTools currentSlug="font-preview" category="デザイン" />
    </div>
  );
}
