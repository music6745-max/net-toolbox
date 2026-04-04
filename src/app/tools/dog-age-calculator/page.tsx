"use client";

import { useState } from "react";
import Link from "next/link";

function dogToHuman(dogAge: number): number {
  if (dogAge <= 0) return 0;
  if (dogAge <= 2) return dogAge * 10.5;
  return 2 * 10.5 + (dogAge - 2) * 4;
}

function getLifeStage(humanAge: number): { label: string; color: string } {
  if (humanAge < 13) return { label: "子ども期", color: "text-green-600" };
  if (humanAge < 20) return { label: "青年期", color: "text-blue-500" };
  if (humanAge < 40) return { label: "成年期", color: "text-indigo-500" };
  if (humanAge < 60) return { label: "中年期", color: "text-orange-500" };
  return { label: "高齢期", color: "text-red-500" };
}

export default function DogAgeCalculatorPage() {
  const [dogAge, setDogAge] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const age = Number(dogAge);
    if (!dogAge || isNaN(age) || age < 0) {
      setError("有効な年齢を入力してください");
      setResult(null);
      return;
    }
    if (age > 30) {
      setError("30歳以下の年齢を入力してください");
      setResult(null);
      return;
    }
    setError("");
    setResult(dogToHuman(age));
  };

  const reset = () => {
    setDogAge("");
    setResult(null);
    setError("");
  };

  const stage = result !== null ? getLifeStage(result) : null;

  // Build table rows for ages 1..Math.min(20, shown)
  const tableRows = Array.from({ length: 20 }, (_, i) => i + 1).map((a) => ({
    dog: a,
    human: dogToHuman(a),
  }));

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>犬の年齢計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">犬の年齢計算ツール</h1>
      <p className="text-muted mb-8">
        犬の年齢（歳）を入力すると、人間の年齢に換算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">犬の年齢（歳）</label>
          <input
            type="number"
            value={dogAge}
            onChange={(e) => setDogAge(e.target.value)}
            placeholder="例: 5"
            min="0"
            max="30"
            step="0.5"
            className="w-full sm:w-48 border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="flex gap-3">
          <button
            onClick={calculate}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            換算する
          </button>
          <button
            onClick={reset}
            className="px-5 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors"
          >
            リセット
          </button>
        </div>

        {result !== null && stage && (
          <div className="mt-8 text-center bg-background rounded-xl border border-card-border py-8 px-6">
            <p className="text-sm text-muted mb-1">犬齢 {dogAge} 歳 ≈ 人間年齢</p>
            <p className="text-5xl font-bold mb-2">{result.toFixed(1)} <span className="text-2xl font-normal">歳</span></p>
            <span className={`text-sm font-semibold ${stage.color}`}>{stage.label}</span>
          </div>
        )}

        <div className="mt-8">
          <h3 className="text-sm font-semibold mb-3">換算早見表（犬齢1〜20歳）</h3>
          <div className="overflow-hidden rounded-lg border border-card-border text-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-background text-left">
                  <th className="px-4 py-2 font-medium text-muted">犬の年齢</th>
                  <th className="px-4 py-2 font-medium text-muted">人間換算</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-card-border">
                {tableRows.map((row) => (
                  <tr
                    key={row.dog}
                    className={result !== null && row.dog === Math.round(Number(dogAge)) ? "bg-primary/5 font-semibold" : ""}
                  >
                    <td className="px-4 py-2">{row.dog} 歳</td>
                    <td className="px-4 py-2">{row.human.toFixed(1)} 歳</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">犬の年齢計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 犬の年齢（歳）を入力します。0.5歳など小数点も入力できます。</p>
          <p>2. 「換算する」ボタンをクリックすると、人間の年齢に換算した結果が表示されます。</p>
          <p>換算式: 最初の2年は1年あたり10.5歳、それ以降は1年あたり4歳として計算します。</p>
          <p>例: 犬齢5歳 = 2×10.5 + 3×4 = 33歳</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
