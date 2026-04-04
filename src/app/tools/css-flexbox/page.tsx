"use client";

import { useState } from "react";
import Link from "next/link";

export default function CssFlexboxPage() {
  const [direction, setDirection] = useState("row");
  const [wrap, setWrap] = useState("nowrap");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");
  const [alignContent, setAlignContent] = useState("normal");
  const [gap, setGap] = useState(8);
  const [itemCount, setItemCount] = useState(5);
  const [copied, setCopied] = useState(false);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: direction as React.CSSProperties["flexDirection"],
    flexWrap: wrap as React.CSSProperties["flexWrap"],
    justifyContent,
    alignItems,
    alignContent,
    gap: `${gap}px`,
    minHeight: "160px",
  };

  const cssCode = `.container {
  display: flex;
  flex-direction: ${direction};
  flex-wrap: ${wrap};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  align-content: ${alignContent};
  gap: ${gap}px;
}`;

  const copy = async () => {
    await navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const colors = ["bg-primary", "bg-blue-400", "bg-green-400", "bg-yellow-400", "bg-pink-400", "bg-purple-400", "bg-orange-400", "bg-teal-400"];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>CSS Flexboxプレイグラウンド</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">CSS Flexboxプレイグラウンド</h1>
      <p className="text-muted mb-8">
        Flexboxのプロパティを設定してレイアウトをリアルタイムで確認し、CSSコードを生成します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">flex-direction</label>
            <select value={direction} onChange={(e) => setDirection(e.target.value)}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
              {["row", "row-reverse", "column", "column-reverse"].map((v) => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">flex-wrap</label>
            <select value={wrap} onChange={(e) => setWrap(e.target.value)}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
              {["nowrap", "wrap", "wrap-reverse"].map((v) => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">justify-content</label>
            <select value={justifyContent} onChange={(e) => setJustifyContent(e.target.value)}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
              {["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"].map((v) => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">align-items</label>
            <select value={alignItems} onChange={(e) => setAlignItems(e.target.value)}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
              {["stretch", "flex-start", "flex-end", "center", "baseline"].map((v) => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">align-content</label>
            <select value={alignContent} onChange={(e) => setAlignContent(e.target.value)}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
              {["normal", "flex-start", "flex-end", "center", "space-between", "space-around", "stretch"].map((v) => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">gap（px）</label>
            <input type="number" min={0} max={40} value={gap} onChange={(e) => setGap(Number(e.target.value))}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">アイテム数: {itemCount}</label>
          <input type="range" min={1} max={8} value={itemCount} onChange={(e) => setItemCount(Number(e.target.value))}
            className="w-full" />
        </div>

        <div>
          <span className="block text-sm font-medium mb-2">プレビュー</span>
          <div className="bg-background rounded-lg p-4 overflow-auto">
            <div style={containerStyle} className="border-2 border-dashed border-card-border rounded-lg p-2">
              {Array.from({ length: itemCount }, (_, i) => (
                <div key={i} className={`${colors[i % colors.length]} text-white rounded-lg flex items-center justify-center text-sm font-bold`}
                  style={{ width: "48px", height: "48px", flexShrink: 0 }}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">生成されたCSS</span>
            <button onClick={copy} className="text-sm text-primary hover:text-primary-hover font-medium">
              {copied ? "コピー済み" : "コピー"}
            </button>
          </div>
          <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
            {cssCode}
          </pre>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. flex-direction・flex-wrap・justify-content などのプロパティを選択します。</p>
          <p>2. スライダーでアイテム数を増減してレイアウトの変化を確認できます。</p>
          <p>3. 「コピー」ボタンで生成されたCSSをクリップボードにコピーします。</p>
          <p>wrap を有効にするとアイテムが折り返され、align-content が有効になります。</p>
        </div>
      </section>
    </div>
  );
}
