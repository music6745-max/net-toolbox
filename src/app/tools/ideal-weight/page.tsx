"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type FormulaResult = {
  name: string;
  description: string;
  weight: number;
  formula: string;
};

function calcIdealWeight(heightCm: number): FormulaResult[] {
  const h = heightCm / 100;

  return [
    {
      name: "BMI22法",
      description: "BMI（体格指数）が22（普通体重の中央値）になる体重",
      weight: 22 * h * h,
      formula: `22 × ${h.toFixed(2)}² = ${(22 * h * h).toFixed(1)} kg`,
    },
    {
      name: "ブローカ式",
      description: "日本でよく使われる簡易計算式",
      weight: heightCm >= 166
        ? (heightCm - 100) * 0.9
        : (heightCm - 100) * 0.92,
      formula: heightCm >= 166
        ? `(${heightCm} - 100) × 0.9 = ${((heightCm - 100) * 0.9).toFixed(1)} kg`
        : `(${heightCm} - 100) × 0.92 = ${((heightCm - 100) * 0.92).toFixed(1)} kg`,
    },
    {
      name: "デバイン式（男性）",
      description: "薬学分野で使われる計算式（男性向け）",
      weight: 50 + 2.3 * ((heightCm - 152.4) / 2.54),
      formula: `50 + 2.3 × ((${heightCm} - 152.4) / 2.54) = ${(50 + 2.3 * ((heightCm - 152.4) / 2.54)).toFixed(1)} kg`,
    },
    {
      name: "デバイン式（女性）",
      description: "薬学分野で使われる計算式（女性向け）",
      weight: 45.5 + 2.3 * ((heightCm - 152.4) / 2.54),
      formula: `45.5 + 2.3 × ((${heightCm} - 152.4) / 2.54) = ${(45.5 + 2.3 * ((heightCm - 152.4) / 2.54)).toFixed(1)} kg`,
    },
  ];
}

export default function IdealWeightPage() {
  const [height, setHeight] = useState("");
  const [results, setResults] = useState<FormulaResult[] | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const h = Number(height);
    if (!height || isNaN(h)) {
      setError("身長を入力してください");
      setResults(null);
      return;
    }
    if (h < 100 || h > 250) {
      setError("身長は100〜250cmの範囲で入力してください");
      setResults(null);
      return;
    }
    setError("");
    setResults(calcIdealWeight(h));
  };

  const reset = () => {
    setHeight("");
    setResults(null);
    setError("");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>適正体重計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">適正体重計算ツール</h1>
      <p className="text-muted mb-8">
        身長を入力して、3つの計算式による適正体重の目安を表示します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-6 max-w-xs">
          <label className="block text-sm font-medium mb-2">身長 (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="例: 170"
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="flex gap-3">
          <button
            onClick={calculate}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            計算する
          </button>
          <button
            onClick={reset}
            className="px-5 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors"
          >
            リセット
          </button>
        </div>

        {results && (
          <div className="mt-8 space-y-3">
            {results.map((r) => (
              <div key={r.name} className="bg-background rounded-lg p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{r.name}</p>
                    <p className="text-xs text-muted mt-0.5">{r.description}</p>
                    <p className="text-xs text-muted mt-1 font-mono">{r.formula}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-2xl font-bold text-primary">{r.weight.toFixed(1)}</p>
                    <p className="text-xs text-muted">kg</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-background rounded-lg p-4 text-sm">
              <p className="font-medium mb-2">BMI参考値（身長 {height}cm）</p>
              <div className="grid grid-cols-2 gap-2 text-xs text-muted">
                {[18.5, 22, 25, 30].map((bmi) => {
                  const h = Number(height) / 100;
                  const w = (bmi * h * h).toFixed(1);
                  return (
                    <div key={bmi} className="flex justify-between">
                      <span>BMI {bmi}（{bmi === 18.5 ? "やせ境界" : bmi === 22 ? "標準" : bmi === 25 ? "肥満境界" : "肥満"}）</span>
                      <span className="font-medium">{w} kg</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">適正体重計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 身長（cm）を入力します。</p>
          <p>2. 「計算する」ボタンを押すと、3種類の計算式による適正体重が表示されます。</p>
          <p>BMI22法: BMIが22になる体重。日本では最も普及した標準体重の算出法です。</p>
          <p>ブローカ式: (身長cm - 100) × 0.9 で算出する簡便な方法。</p>
          <p>デバイン式: 主に薬学分野で使用される計算式。男女別に異なる係数を使います。</p>
          <p>※ 適正体重はあくまで目安です。健康状態の判断には医師にご相談ください。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="ideal-weight" category="日常ツール" />
      <RelatedTools currentSlug="ideal-weight" category="日常ツール" />
    </div>
  );
}
