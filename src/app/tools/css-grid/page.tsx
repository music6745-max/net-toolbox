"use client";

import { useState } from "react";
import Link from "next/link";

export default function CssGridPage() {
  const [columns, setColumns] = useState("repeat(3, 1fr)");
  const [rows, setRows] = useState("auto");
  const [columnGap, setColumnGap] = useState(8);
  const [rowGap, setRowGap] = useState(8);
  const [cellCount, setCellCount] = useState(9);
  const [justifyItems, setJustifyItems] = useState("stretch");
  const [alignItems, setAlignItems] = useState("stretch");
  const [copied, setCopied] = useState(false);

  const containerStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: columns,
    gridTemplateRows: rows,
    columnGap: `${columnGap}px`,
    rowGap: `${rowGap}px`,
    justifyItems: justifyItems as React.CSSProperties["justifyItems"],
    alignItems: alignItems as React.CSSProperties["alignItems"],
    minHeight: "160px",
  };

  const cssCode = `.container {
  display: grid;
  grid-template-columns: ${columns};
  grid-template-rows: ${rows};
  column-gap: ${columnGap}px;
  row-gap: ${rowGap}px;
  justify-items: ${justifyItems};
  align-items: ${alignItems};
}`;

  const copy = async () => {
    await navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const presets = [
    { label: "3列均等", value: "repeat(3, 1fr)" },
    { label: "4列均等", value: "repeat(4, 1fr)" },
    { label: "サイドバー", value: "250px 1fr" },
    { label: "Holy Grail", value: "200px 1fr 200px" },
    { label: "自動折返し", value: "repeat(auto-fit, minmax(120px, 1fr))" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>CSS Gridプレイグラウンド</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">CSS Gridプレイグラウンド</h1>
      <p className="text-muted mb-8">
        CSS Gridのプロパティを設定してグリッドレイアウトを視覚的に確認し、CSSコードを生成します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">列プリセット</label>
          <div className="flex flex-wrap gap-2">
            {presets.map((p) => (
              <button key={p.value} onClick={() => setColumns(p.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${columns === p.value ? "bg-primary text-white border-primary" : "border-card-border hover:border-primary hover:text-primary"}`}>
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">grid-template-columns</label>
            <input type="text" value={columns} onChange={(e) => setColumns(e.target.value)}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">grid-template-rows</label>
            <input type="text" value={rows} onChange={(e) => setRows(e.target.value)}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">column-gap（px）</label>
            <input type="number" min={0} max={40} value={columnGap} onChange={(e) => setColumnGap(Number(e.target.value))}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">row-gap（px）</label>
            <input type="number" min={0} max={40} value={rowGap} onChange={(e) => setRowGap(Number(e.target.value))}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">justify-items</label>
            <select value={justifyItems} onChange={(e) => setJustifyItems(e.target.value)}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
              {["stretch", "start", "end", "center"].map((v) => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">align-items</label>
            <select value={alignItems} onChange={(e) => setAlignItems(e.target.value)}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
              {["stretch", "start", "end", "center"].map((v) => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">セル数: {cellCount}</label>
          <input type="range" min={1} max={16} value={cellCount} onChange={(e) => setCellCount(Number(e.target.value))} className="w-full" />
        </div>

        <div>
          <span className="block text-sm font-medium mb-2">プレビュー</span>
          <div className="bg-background rounded-lg p-4 overflow-auto">
            <div style={containerStyle} className="border-2 border-dashed border-card-border rounded-lg p-2">
              {Array.from({ length: cellCount }, (_, i) => (
                <div key={i} className="bg-primary/80 text-white rounded flex items-center justify-center text-sm font-bold"
                  style={{ minHeight: "48px", minWidth: "0" }}>
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
          <p>1. プリセットボタンから列テンプレートを選択するか、直接入力してカスタマイズします。</p>
          <p>2. gap・justify-items・align-items などのプロパティを調整します。</p>
          <p>3. スライダーでセル数を変更してグリッドの変化を確認します。</p>
          <p>4. 「コピー」ボタンで生成されたCSSコードをコピーします。</p>
        </div>
      </section>
    </div>
  );
}
