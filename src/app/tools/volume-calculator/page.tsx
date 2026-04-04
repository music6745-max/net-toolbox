"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

type Shape = "cuboid" | "sphere" | "cylinder" | "cone";

const SHAPES: { id: Shape; label: string }[] = [
  { id: "cuboid", label: "直方体" },
  { id: "sphere", label: "球" },
  { id: "cylinder", label: "円柱" },
  { id: "cone", label: "円錐" },
];

export default function VolumeCalculatorPage() {
  const [shape, setShape] = useState<Shape>("cuboid");
  const [w, setW] = useState("");
  const [h, setH] = useState("");
  const [d, setD] = useState("");
  const [r, setR] = useState("");
  const [result, setResult] = useState<{ value: number; formula: string } | null>(null);
  const [error, setError] = useState("");

  const reset = () => { setW(""); setH(""); setD(""); setR(""); setResult(null); setError(""); };

  const calculate = () => {
    setError("");
    setResult(null);
    const parse = (v: string) => parseFloat(v);
    if (shape === "cuboid") {
      const wv = parse(w), hv = parse(h), dv = parse(d);
      if (!w || isNaN(wv) || wv <= 0 || !h || isNaN(hv) || hv <= 0 || !d || isNaN(dv) || dv <= 0) { setError("縦・横・高さをすべて入力してください"); return; }
      setResult({ value: wv * hv * dv, formula: `${w} × ${h} × ${d}` });
    } else if (shape === "sphere") {
      const rv = parse(r);
      if (!r || isNaN(rv) || rv <= 0) { setError("有効な半径を入力してください"); return; }
      setResult({ value: (4 / 3) * Math.PI * rv * rv * rv, formula: `(4/3) × π × ${r}³` });
    } else if (shape === "cylinder") {
      const rv = parse(r), hv = parse(h);
      if (!r || isNaN(rv) || rv <= 0 || !h || isNaN(hv) || hv <= 0) { setError("半径と高さを入力してください"); return; }
      setResult({ value: Math.PI * rv * rv * hv, formula: `π × ${r}² × ${h}` });
    } else {
      const rv = parse(r), hv = parse(h);
      if (!r || isNaN(rv) || rv <= 0 || !h || isNaN(hv) || hv <= 0) { setError("半径と高さを入力してください"); return; }
      setResult({ value: (1 / 3) * Math.PI * rv * rv * hv, formula: `(1/3) × π × ${r}² × ${h}` });
    }
  };

  const inputClass = "w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>体積計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">体積計算ツール</h1>
      <p className="text-muted mb-8">直方体・球・円柱・円錐の体積を計算します。各辺や半径を入力するだけで即座に計算できます。</p>

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
          {shape === "cuboid" && (
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">横 (幅)</label>
                <input type="number" value={w} onChange={(e) => setW(e.target.value)} placeholder="例: 10" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">縦 (奥行き)</label>
                <input type="number" value={d} onChange={(e) => setD(e.target.value)} placeholder="例: 5" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">高さ</label>
                <input type="number" value={h} onChange={(e) => setH(e.target.value)} placeholder="例: 3" className={inputClass} />
              </div>
              <p className="col-span-3 text-xs text-muted">体積 = 横 × 縦 × 高さ</p>
            </div>
          )}
          {shape === "sphere" && (
            <div>
              <label className="block text-sm font-medium mb-2">半径 (r)</label>
              <input type="number" value={r} onChange={(e) => setR(e.target.value)} placeholder="例: 5" className={inputClass} />
              <p className="text-xs text-muted mt-1">体積 = (4/3) × π × r³</p>
            </div>
          )}
          {(shape === "cylinder" || shape === "cone") && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">半径 (r)</label>
                <input type="number" value={r} onChange={(e) => setR(e.target.value)} placeholder="例: 3" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">高さ (h)</label>
                <input type="number" value={h} onChange={(e) => setH(e.target.value)} placeholder="例: 8" className={inputClass} />
              </div>
              <p className="col-span-2 text-xs text-muted">
                {shape === "cylinder" ? "体積 = π × r² × h" : "体積 = (1/3) × π × r² × h"}
              </p>
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
            <p className="text-sm text-muted mb-2">体積</p>
            <p className="text-4xl font-bold text-primary">{result.value.toFixed(4)}</p>
            <p className="text-sm text-muted mt-2">（入力した単位の三乗）</p>
            <p className="text-xs text-muted mt-1">= {result.formula} ≈ {result.value.toFixed(6)}</p>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">体積計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>上のボタンで計算したい立体の種類を選択し、各辺や半径を入力して「計算する」をクリックします。</p>
          <p>【直方体】横・縦・高さを入力：横 × 縦 × 高さ</p>
          <p>【球】半径を入力：(4/3) × π × r³</p>
          <p>【円柱】半径と高さを入力：π × r² × h</p>
          <p>【円錐】半径と高さを入力：(1/3) × π × r² × h</p>
          <p>単位は問いません。cmで入力すればcm³、mで入力すればm³（= kL）で結果が得られます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <RelatedTools currentSlug="volume-calculator" category="日常ツール" />
    </div>
  );
}
