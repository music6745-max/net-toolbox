"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type Unit = "deg" | "rad";

function toRad(angle: number, unit: Unit): number {
  return unit === "deg" ? (angle * Math.PI) / 180 : angle;
}

function formatVal(n: number): string {
  if (!isFinite(n)) return "未定義";
  if (Math.abs(n) < 1e-10) return "0";
  if (Math.abs(n - 1) < 1e-10) return "1";
  if (Math.abs(n + 1) < 1e-10) return "-1";
  return n.toPrecision(10).replace(/\.?0+$/, "");
}

function calcTrig(angle: number, unit: Unit) {
  const rad = toRad(angle, unit);
  const sinV = Math.sin(rad);
  const cosV = Math.cos(rad);
  const tanV = Math.tan(rad);
  return {
    sin: sinV,
    cos: cosV,
    tan: Math.abs(cosV) < 1e-10 ? Infinity : tanV,
    cot: Math.abs(sinV) < 1e-10 ? Infinity : cosV / sinV,
    sec: Math.abs(cosV) < 1e-10 ? Infinity : 1 / cosV,
    csc: Math.abs(sinV) < 1e-10 ? Infinity : 1 / sinV,
  };
}

const PRESETS = [
  { label: "0°", deg: 0 },
  { label: "30°", deg: 30 },
  { label: "45°", deg: 45 },
  { label: "60°", deg: 60 },
  { label: "90°", deg: 90 },
  { label: "120°", deg: 120 },
  { label: "180°", deg: 180 },
  { label: "270°", deg: 270 },
  { label: "360°", deg: 360 },
];

export default function TrigonometryPage() {
  const [angleInput, setAngleInput] = useState("45");
  const [unit, setUnit] = useState<Unit>("deg");
  const [result, setResult] = useState<ReturnType<typeof calcTrig> & { angle: number; unit: Unit } | null>(null);
  const [error, setError] = useState("");

  const calculate = (val?: string, u?: Unit) => {
    const a = Number(val ?? angleInput);
    const selectedUnit = u ?? unit;
    if (isNaN(a)) {
      setError("有効な数値を入力してください");
      setResult(null);
      return;
    }
    setError("");
    setResult({ ...calcTrig(a, selectedUnit), angle: a, unit: selectedUnit });
  };

  const setPreset = (deg: number) => {
    setUnit("deg");
    setAngleInput(String(deg));
    calculate(String(deg), "deg");
  };

  const rows: { label: string; key: keyof ReturnType<typeof calcTrig>; formula: string }[] = [
    { label: "sin θ", key: "sin", formula: "対辺 / 斜辺" },
    { label: "cos θ", key: "cos", formula: "隣辺 / 斜辺" },
    { label: "tan θ", key: "tan", formula: "対辺 / 隣辺" },
    { label: "cot θ", key: "cot", formula: "隣辺 / 対辺" },
    { label: "sec θ", key: "sec", formula: "斜辺 / 隣辺" },
    { label: "csc θ", key: "csc", formula: "斜辺 / 対辺" },
  ];

  const degRad = result
    ? result.unit === "deg"
      ? `${result.angle}° = ${((result.angle * Math.PI) / 180).toPrecision(6)} rad`
      : `${result.angle} rad = ${((result.angle * 180) / Math.PI).toPrecision(6)}°`
    : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>三角関数計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">三角関数計算ツール</h1>
      <p className="text-muted mb-8">
        角度を入力してsin・cos・tan・cot・sec・cscを計算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        {/* Unit toggle */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-sm font-medium">角度単位</span>
          <div className="flex rounded-lg overflow-hidden border border-card-border text-sm">
            <button
              onClick={() => setUnit("deg")}
              className={`px-4 py-2 ${unit === "deg" ? "bg-primary text-white" : "hover:bg-background"}`}
            >
              度数法 (°)
            </button>
            <button
              onClick={() => setUnit("rad")}
              className={`px-4 py-2 ${unit === "rad" ? "bg-primary text-white" : "hover:bg-background"}`}
            >
              弧度法 (rad)
            </button>
          </div>
        </div>

        {/* Input */}
        <div className="flex gap-3 mb-6">
          <input
            type="number"
            value={angleInput}
            onChange={(e) => setAngleInput(e.target.value)}
            placeholder={unit === "deg" ? "例: 45" : "例: 0.7854"}
            className="w-48 border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
          <span className="self-center text-muted text-sm">{unit === "deg" ? "°" : "rad"}</span>
          <button
            onClick={() => calculate()}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            計算する
          </button>
        </div>

        {/* Presets */}
        <div className="flex flex-wrap gap-2 mb-6">
          {PRESETS.map((p) => (
            <button
              key={p.deg}
              onClick={() => setPreset(p.deg)}
              className="text-xs px-3 py-1.5 rounded-lg border border-card-border hover:bg-background hover:border-primary transition-colors"
            >
              {p.label}
            </button>
          ))}
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {result && (
          <div className="mt-4">
            {degRad && (
              <p className="text-sm text-muted mb-4 font-mono">{degRad}</p>
            )}
            <div className="overflow-hidden rounded-lg border border-card-border text-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-background text-left">
                    <th className="px-4 py-2 font-medium text-muted">関数</th>
                    <th className="px-4 py-2 font-medium text-muted">値</th>
                    <th className="px-4 py-2 font-medium text-muted hidden sm:table-cell">定義</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-card-border">
                  {rows.map((row) => {
                    const val = result[row.key];
                    const display = formatVal(val);
                    const isUndefined = !isFinite(val);
                    return (
                      <tr key={row.key}>
                        <td className="px-4 py-3 font-mono font-semibold">{row.label}</td>
                        <td className={`px-4 py-3 font-mono ${isUndefined ? "text-red-500" : "text-primary font-bold"}`}>
                          {display}
                        </td>
                        <td className="px-4 py-3 text-muted hidden sm:table-cell">{row.formula}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">三角関数計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 度数法（°）または弧度法（rad）を選択します。</p>
          <p>2. 角度を入力して「計算する」をクリックします。よく使う角度はプリセットボタンからも選べます。</p>
          <p>3. sin・cos・tan・cot（余接）・sec（正割）・csc（余割）の値が表示されます。</p>
          <p>tan 90°のように「未定義」になる場合は「未定義」と表示されます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="trigonometry" category="日常ツール" />
      <RelatedTools currentSlug="trigonometry" category="日常ツール" />
    </div>
  );
}
