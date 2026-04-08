"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type Sex = "male" | "female";
type Activity = "sedentary" | "light" | "moderate" | "active" | "veryActive";

const ACTIVITY_FACTOR: Record<Activity, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
};

const ACTIVITY_LABEL: Record<Activity, string> = {
  sedentary: "ほぼ運動なし（デスクワーク中心）",
  light: "軽い運動（週1〜3回）",
  moderate: "中程度の運動（週3〜5回）",
  active: "激しい運動（週6〜7回）",
  veryActive: "非常に激しい運動／肉体労働",
};

function bmiCategory(bmi: number) {
  if (bmi < 18.5) return { label: "やせ", color: "text-blue-500" };
  if (bmi < 25) return { label: "普通体重", color: "text-green-600" };
  if (bmi < 30) return { label: "肥満（1度）", color: "text-yellow-500" };
  if (bmi < 35) return { label: "肥満（2度）", color: "text-orange-500" };
  return { label: "肥満（3度以上）", color: "text-red-600" };
}

export default function Page() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState<Sex>("male");
  const [activity, setActivity] = useState<Activity>("light");
  const [error, setError] = useState("");
  const [result, setResult] = useState<null | {
    bmi: number;
    bodyFat: number;
    bmr: number;
    tdee: number;
  }>(null);

  const calculate = () => {
    const h = Number(height);
    const w = Number(weight);
    const a = Number(age);
    if (!h || !w || !a || h <= 0 || w <= 0 || a <= 0) {
      setError("身長・体重・年齢をすべて正しく入力してください");
      setResult(null);
      return;
    }
    if (h < 50 || h > 250 || w < 1 || w > 400 || a < 1 || a > 120) {
      setError("入力値が範囲外です");
      setResult(null);
      return;
    }
    setError("");
    const hm = h / 100;
    const bmi = w / (hm * hm);
    // Deurenberg formula for body fat % estimation
    const sexFactor = sex === "male" ? 1 : 0;
    const bodyFat = 1.2 * bmi + 0.23 * a - 10.8 * sexFactor - 5.4;
    // Mifflin-St Jeor BMR
    const bmr =
      sex === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;
    const tdee = bmr * ACTIVITY_FACTOR[activity];
    setResult({ bmi, bodyFat: Math.max(0, bodyFat), bmr, tdee });
  };

  const reset = () => {
    setHeight("");
    setWeight("");
    setAge("");
    setSex("male");
    setActivity("light");
    setResult(null);
    setError("");
  };

  const cat = result ? bmiCategory(result.bmi) : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>BMI詳細計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">BMI詳細計算ツール</h1>
      <p className="text-muted mb-8">
        BMI・体脂肪率（推定）・基礎代謝量（BMR）・1日の必要カロリー（TDEE）をまとめて計算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-2">身長 (cm)</label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="例: 170"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">体重 (kg)</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="例: 65"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">年齢</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="例: 30"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">性別</label>
            <select value={sex} onChange={(e) => setSex(e.target.value as Sex)}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm bg-card-bg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
              <option value="male">男性</option>
              <option value="female">女性</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">活動レベル</label>
          <select value={activity} onChange={(e) => setActivity(e.target.value as Activity)}
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm bg-card-bg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
            {(Object.keys(ACTIVITY_LABEL) as Activity[]).map((k) => (
              <option key={k} value={k}>{ACTIVITY_LABEL[k]}</option>
            ))}
          </select>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="flex gap-3">
          <button onClick={calculate} className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">計算する</button>
          <button onClick={reset} className="px-5 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors">リセット</button>
        </div>

        {result && cat && (
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-background rounded-lg p-4">
              <p className="text-xs text-muted">BMI</p>
              <p className={`text-2xl font-bold ${cat.color}`}>{result.bmi.toFixed(1)}</p>
              <p className={`text-xs mt-1 ${cat.color}`}>{cat.label}</p>
            </div>
            <div className="bg-background rounded-lg p-4">
              <p className="text-xs text-muted">推定体脂肪率</p>
              <p className="text-2xl font-bold">{result.bodyFat.toFixed(1)}%</p>
              <p className="text-xs text-muted mt-1">Deurenberg式</p>
            </div>
            <div className="bg-background rounded-lg p-4">
              <p className="text-xs text-muted">基礎代謝 BMR</p>
              <p className="text-2xl font-bold">{Math.round(result.bmr)}</p>
              <p className="text-xs text-muted mt-1">kcal/日</p>
            </div>
            <div className="bg-background rounded-lg p-4">
              <p className="text-xs text-muted">必要カロリー TDEE</p>
              <p className="text-2xl font-bold">{Math.round(result.tdee)}</p>
              <p className="text-xs text-muted mt-1">kcal/日</p>
            </div>
          </div>
        )}
      </div>

      <section className="mt-10 bg-card-bg border border-card-border rounded-xl p-6">
        <h2 className="text-lg font-bold mb-3">関連ガイド</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <Link href="/guide/personal-gym-comparison" className="block p-4 rounded-lg border border-card-border hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-medium">パーソナルジム比較</p>
            <p className="text-muted text-xs mt-1">BMI改善・ダイエットを本気で目指すなら</p>
          </Link>
          <Link href="/guide/online-fitness-comparison" className="block p-4 rounded-lg border border-card-border hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-medium">オンラインフィットネス比較</p>
            <p className="text-muted text-xs mt-1">自宅で続ける運動習慣に</p>
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方と計算式について</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>BMI = 体重(kg) ÷ 身長(m)²</p>
          <p>体脂肪率は Deurenberg 式（1.2×BMI + 0.23×年齢 − 10.8×性別 − 5.4）による推定値です。</p>
          <p>基礎代謝（BMR）は Mifflin-St Jeor 式、必要カロリー（TDEE）は活動係数を掛けて算出します。</p>
          <p>すべての計算はブラウザ内で完結し、データは外部送信されません。健康指導には医師にご相談ください。</p>
        </div>
      </section>

      <AffiliateSection slug="bmi-detail-calculator" category="日常ツール" />
      <RelatedTools currentSlug="bmi-detail-calculator" category="日常ツール" />
    </div>
  );
}
