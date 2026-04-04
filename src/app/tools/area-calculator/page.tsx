"use client";
import { useState } from "react";
import Link from "next/link";

type Shape = "circle" | "rectangle" | "triangle" | "trapezoid";

const SHAPES: { id: Shape; label: string }[] = [
  { id: "circle", label: "円" },
  { id: "rectangle", label: "長方形" },
  { id: "triangle", label: "三角形" },
  { id: "trapezoid", label: "台形" },
];

export default function AreaCalculatorPage() {
  const [shape, setShape] = useState<Shape>("circle");
  const [radius, setRadius] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [base, setBase] = useState("");
  const [top, setTop] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const reset = () => { setRadius(""); setWidth(""); setHeight(""); setBase(""); setTop(""); setResult(null); setError(""); };

  const calculate = () => {
    setError("");
    setResult(null);
    if (shape === "circle") {
      const r = parseFloat(radius);
      if (!radius || isNaN(r) || r <= 0) { setError("有効な半径を入力してください"); return; }
      setResult(Math.PI * r * r);
    } else if (shape === "rectangle") {
      const w = parseFloat(width);
      const h = parseFloat(height);
      if (!width || isNaN(w) || w <= 0 || !height || isNaN(h) || h <= 0) { setError("有効な縦・横を入力してください"); return; }
      setResult(w * h);
    } else if (shape === "triangle") {
      const b = parseFloat(base);
      const h = parseFloat(height);
      if (!base || isNaN(b) || b <= 0 || !height || isNaN(h) || h <= 0) { setError("有効な底辺・高さを入力してください"); return; }
      setResult((b * h) / 2);
    } else {
      const b = parseFloat(base);
      const t = parseFloat(top);
      const h = parseFloat(height);
      if (!base || isNaN(b) || b <= 0) { setError("有効な下底を入力してください"); return; }
      if (!top || isNaN(t) || t <= 0) { setError("有効な上底を入力してください"); return; }
      if (!height || isNaN(h) || h <= 0) { setError("有効な高さを入力してください"); return; }
      setResult(((b + t) * h) / 2);
    }
  };

  const inputClass = "w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>面積計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">面積計算ツール</h1>
      <p className="text-muted mb-8">円・長方形・三角形・台形の面積を計算します。各辺や半径を入力するだけで即座に計算できます。</p>

      <div className="flex gap-2 mb-6">
        {SHAPES.map((s) => (
          <button
            key={s.id}
            onClick={() => { setShape(s.id); reset(); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${shape === s.id ? "bg-primary text-white border-primary" : "border-card-border hover:bg-background"}`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4 mb-6">
          {shape === "circle" && (
            <div>
              <label className="block text-sm font-medium mb-2">半径 (r)</label>
              <input type="number" value={radius} onChange={(e) => setRadius(e.target.value)} placeholder="例: 5" className={inputClass} />
              <p className="text-xs text-muted mt-1">面積 = π × r²</p>
            </div>
          )}
          {shape === "rectangle" && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">横 (幅)</label>
                <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="例: 10" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">縦 (高さ)</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="例: 5" className={inputClass} />
              </div>
              <p className="col-span-2 text-xs text-muted">面積 = 横 × 縦</p>
            </div>
          )}
          {shape === "triangle" && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">底辺</label>
                <input type="number" value={base} onChange={(e) => setBase(e.target.value)} placeholder="例: 8" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">高さ</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="例: 6" className={inputClass} />
              </div>
              <p className="col-span-2 text-xs text-muted">面積 = 底辺 × 高さ ÷ 2</p>
            </div>
          )}
          {shape === "trapezoid" && (
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">下底 (a)</label>
                <input type="number" value={base} onChange={(e) => setBase(e.target.value)} placeholder="例: 10" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">上底 (b)</label>
                <input type="number" value={top} onChange={(e) => setTop(e.target.value)} placeholder="例: 6" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">高さ (h)</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="例: 4" className={inputClass} />
              </div>
              <p className="col-span-3 text-xs text-muted">面積 = (a + b) × h ÷ 2</p>
            </div>
          )}
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="flex gap-3">
          <button onClick={calculate} className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">
            計算する
          </button>
          <button onClick={reset} className="px-5 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors">
            リセット
          </button>
        </div>

        {result !== null && (
          <div className="mt-8 bg-background rounded-xl p-6 text-center">
            <p className="text-sm text-muted mb-2">面積</p>
            <p className="text-4xl font-bold text-primary">{result.toFixed(4)}</p>
            <p className="text-sm text-muted mt-2">（入力した単位の二乗）</p>
            {shape === "circle" && (
              <p className="text-xs text-muted mt-1">= π × {radius}² ≈ {result.toFixed(6)}</p>
            )}
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">面積計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>上のボタンで計算したい図形の種類を選択し、各辺や半径を入力して「計算する」をクリックします。</p>
          <p>【円】半径を入力：π × r²</p>
          <p>【長方形】横と縦を入力：横 × 縦</p>
          <p>【三角形】底辺と高さを入力：底辺 × 高さ ÷ 2</p>
          <p>【台形】上底・下底・高さを入力：（上底 + 下底）× 高さ ÷ 2</p>
          <p>単位は問いません。cmで入力すればcm²、mで入力すればm²で結果が得られます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
