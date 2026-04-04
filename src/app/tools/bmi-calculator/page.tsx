"use client";

import { useState } from "react";
import Link from "next/link";

type BmiCategory = {
  label: string;
  color: string;
  bg: string;
  range: string;
};

function getCategory(bmi: number): BmiCategory {
  if (bmi < 18.5)
    return { label: "やせ", color: "text-blue-500", bg: "bg-blue-500", range: "18.5未満" };
  if (bmi < 25.0)
    return { label: "普通体重", color: "text-green-600", bg: "bg-green-500", range: "18.5〜25.0未満" };
  if (bmi < 30.0)
    return { label: "肥満（1度）", color: "text-yellow-500", bg: "bg-yellow-400", range: "25.0〜30.0未満" };
  if (bmi < 35.0)
    return { label: "肥満（2度）", color: "text-orange-500", bg: "bg-orange-400", range: "30.0〜35.0未満" };
  if (bmi < 40.0)
    return { label: "肥満（3度）", color: "text-red-500", bg: "bg-red-400", range: "35.0〜40.0未満" };
  return { label: "肥満（4度）", color: "text-red-700", bg: "bg-red-600", range: "40.0以上" };
}

// Map BMI to a percentage 0-100 for the visual bar (cap at 40)
function bmiToPercent(bmi: number): number {
  return Math.min(100, Math.max(0, ((bmi - 10) / 30) * 100));
}

export default function BmiCalculatorPage() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const h = Number(height);
    const w = Number(weight);
    if (!height || !weight || isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      setError("有効な身長と体重を入力してください");
      setBmi(null);
      return;
    }
    if (h < 50 || h > 300) {
      setError("身長は50〜300cmの範囲で入力してください");
      setBmi(null);
      return;
    }
    if (w < 1 || w > 500) {
      setError("体重は1〜500kgの範囲で入力してください");
      setBmi(null);
      return;
    }
    setError("");
    const hm = h / 100;
    setBmi(w / (hm * hm));
  };

  const reset = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setError("");
  };

  const category = bmi !== null ? getCategory(bmi) : null;
  const percent = bmi !== null ? bmiToPercent(bmi) : 0;

  const idealWeightLow = height ? ((18.5 * (Number(height) / 100) ** 2)).toFixed(1) : null;
  const idealWeightHigh = height ? ((24.9 * (Number(height) / 100) ** 2)).toFixed(1) : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>BMI計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">BMI計算ツール</h1>
      <p className="text-muted mb-8">
        身長と体重を入力してBMI（体格指数）を計算します。日本肥満学会の基準で判定を表示します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">身長 (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="例: 170"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">体重 (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="例: 65"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
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

        {bmi !== null && category && (
          <div className="mt-8">
            {/* BMI value */}
            <div className="text-center mb-6">
              <p className="text-sm text-muted mb-1">あなたのBMI</p>
              <p className={`text-5xl font-bold ${category.color}`}>{bmi.toFixed(1)}</p>
              <p className={`text-xl font-semibold mt-2 ${category.color}`}>{category.label}</p>
              <p className="text-xs text-muted mt-1">判定基準: {category.range}</p>
            </div>

            {/* Visual bar */}
            <div className="mb-6">
              <div className="relative h-4 bg-gradient-to-r from-blue-400 via-green-400 via-yellow-400 via-orange-400 to-red-600 rounded-full overflow-visible">
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-gray-700 rounded-full shadow-md transition-all duration-500"
                  style={{ left: `calc(${percent}% - 8px)` }}
                />
              </div>
              <div className="flex justify-between text-xs text-muted mt-2">
                <span>やせ</span>
                <span>普通</span>
                <span>肥満1</span>
                <span>肥満2</span>
                <span>肥満3+</span>
              </div>
            </div>

            {/* Ideal weight */}
            {idealWeightLow && idealWeightHigh && (
              <div className="bg-background rounded-lg p-4 text-sm">
                <p className="font-medium mb-1">標準体重の目安</p>
                <p className="text-muted">
                  身長 {height}cm の場合: <span className="font-semibold text-foreground">{idealWeightLow}〜{idealWeightHigh} kg</span>
                </p>
              </div>
            )}

            {/* BMI table */}
            <div className="mt-4 overflow-hidden rounded-lg border border-card-border text-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-background text-left">
                    <th className="px-4 py-2 font-medium text-muted">BMI</th>
                    <th className="px-4 py-2 font-medium text-muted">判定</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-card-border">
                  {[
                    { range: "18.5未満", label: "やせ", color: "text-blue-500" },
                    { range: "18.5〜25.0未満", label: "普通体重", color: "text-green-600" },
                    { range: "25.0〜30.0未満", label: "肥満（1度）", color: "text-yellow-500" },
                    { range: "30.0〜35.0未満", label: "肥満（2度）", color: "text-orange-500" },
                    { range: "35.0〜40.0未満", label: "肥満（3度）", color: "text-red-500" },
                    { range: "40.0以上", label: "肥満（4度）", color: "text-red-700" },
                  ].map((row) => (
                    <tr key={row.range} className={category.range === row.range ? "bg-primary/5" : ""}>
                      <td className="px-4 py-2 font-mono">{row.range}</td>
                      <td className={`px-4 py-2 font-medium ${row.color}`}>{row.label}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">BMI計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 身長（cm）と体重（kg）を入力します。</p>
          <p>2. 「計算する」ボタンをクリックするとBMIが計算され、日本肥満学会の基準による判定が表示されます。</p>
          <p>BMIは体重(kg) ÷ 身長(m)² で計算される体格指数です。18.5〜25.0未満が「普通体重」とされています。</p>
          <p>この計算は参考値です。健康状態の診断には医師にご相談ください。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
