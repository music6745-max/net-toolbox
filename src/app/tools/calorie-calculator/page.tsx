"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

type Gender = "male" | "female";

const ACTIVITY_LEVELS = [
  { label: "ほとんど運動しない", multiplier: 1.2 },
  { label: "軽い運動（週1〜3日）", multiplier: 1.375 },
  { label: "中程度の運動（週3〜5日）", multiplier: 1.55 },
  { label: "激しい運動（週6〜7日）", multiplier: 1.725 },
  { label: "非常に激しい運動・肉体労働", multiplier: 1.9 },
];

function calcBMR(gender: Gender, age: number, heightCm: number, weightKg: number): number {
  // Harris-Benedict (revised)
  if (gender === "male") {
    return 88.362 + 13.397 * weightKg + 4.799 * heightCm - 5.677 * age;
  }
  return 447.593 + 9.247 * weightKg + 3.098 * heightCm - 4.330 * age;
}

export default function CalorieCalculatorPage() {
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState(0);
  const [result, setResult] = useState<{ bmr: number; tdee: number } | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const a = parseInt(age, 10);
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!age || isNaN(a) || a < 1 || a > 120) { setError("年齢は1〜120の範囲で入力してください"); setResult(null); return; }
    if (!height || isNaN(h) || h < 50 || h > 300) { setError("身長は50〜300cmの範囲で入力してください"); setResult(null); return; }
    if (!weight || isNaN(w) || w < 1 || w > 500) { setError("体重は1〜500kgの範囲で入力してください"); setResult(null); return; }
    setError("");
    const bmr = calcBMR(gender, a, h, w);
    const tdee = bmr * ACTIVITY_LEVELS[activity].multiplier;
    setResult({ bmr, tdee });
  };

  const reset = () => { setAge(""); setHeight(""); setWeight(""); setActivity(0); setResult(null); setError(""); };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>基礎代謝計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">基礎代謝計算ツール</h1>
      <p className="text-muted mb-8">ハリス・ベネディクト式で基礎代謝量（BMR）と1日の総消費カロリー（TDEE）を計算します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">性別</label>
          <div className="flex gap-3">
            {(["male", "female"] as Gender[]).map((g) => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium border transition-colors ${gender === g ? "bg-primary text-white border-primary" : "border-card-border hover:bg-background"}`}
              >
                {g === "male" ? "男性" : "女性"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">年齢</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="例: 30" className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">身長 (cm)</label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="例: 170" className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">体重 (kg)</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="例: 65" className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">活動レベル</label>
          <select
            value={activity}
            onChange={(e) => setActivity(parseInt(e.target.value, 10))}
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-card-bg"
          >
            {ACTIVITY_LEVELS.map((l, i) => (
              <option key={i} value={i}>{l.label}（×{l.multiplier}）</option>
            ))}
          </select>
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

        {result && (
          <div className="mt-8 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background rounded-xl p-5 text-center">
                <p className="text-xs text-muted mb-1">基礎代謝量（BMR）</p>
                <p className="text-3xl font-bold text-primary">{Math.round(result.bmr).toLocaleString()}</p>
                <p className="text-sm text-muted mt-1">kcal/日</p>
              </div>
              <div className="bg-background rounded-xl p-5 text-center">
                <p className="text-xs text-muted mb-1">1日の総消費カロリー（TDEE）</p>
                <p className="text-3xl font-bold text-primary">{Math.round(result.tdee).toLocaleString()}</p>
                <p className="text-sm text-muted mt-1">kcal/日</p>
              </div>
            </div>
            <div className="bg-background rounded-lg p-4 text-sm">
              <p className="font-medium mb-2">カロリー摂取の目安</p>
              <div className="space-y-1 text-muted">
                <p>減量目標（−500kcal）: 約 <span className="font-semibold text-foreground">{Math.round(result.tdee - 500).toLocaleString()} kcal/日</span></p>
                <p>現状維持: 約 <span className="font-semibold text-foreground">{Math.round(result.tdee).toLocaleString()} kcal/日</span></p>
                <p>増量目標（+500kcal）: 約 <span className="font-semibold text-foreground">{Math.round(result.tdee + 500).toLocaleString()} kcal/日</span></p>
              </div>
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">基礎代謝計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 性別・年齢・身長・体重と活動レベルを入力して「計算する」をクリックします。</p>
          <p>2. 基礎代謝量（BMR）と1日の総消費カロリー（TDEE）が表示されます。</p>
          <p>基礎代謝量とは、安静にしているだけで消費されるカロリーです。ハリス・ベネディクト改訂式を使用しています。</p>
          <p>TDEEは活動レベルを考慮した1日の総消費カロリーです。ダイエットや増量の目標カロリー設定にご活用ください。</p>
          <p>この計算は参考値です。健康管理には医師や専門家にご相談ください。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <RelatedTools currentSlug="calorie-calculator" category="日常ツール" />
    </div>
  );
}
