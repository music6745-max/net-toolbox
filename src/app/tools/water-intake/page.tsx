"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const ACTIVITY_LEVELS = [
  {
    value: "sedentary",
    label: "座り仕事が多い",
    description: "デスクワーク中心、運動ほぼなし",
    multiplier: 30,
  },
  {
    value: "light",
    label: "軽度活動",
    description: "週1〜2回の軽い運動",
    multiplier: 35,
  },
  {
    value: "moderate",
    label: "中程度活動",
    description: "週3〜4回の運動・立ち仕事",
    multiplier: 40,
  },
  {
    value: "active",
    label: "活発",
    description: "毎日運動・肉体労働",
    multiplier: 45,
  },
  {
    value: "very_active",
    label: "非常に活発",
    description: "激しい運動・アスリート",
    multiplier: 50,
  },
];

export default function WaterIntakePage() {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("sedentary");
  const [result, setResult] = useState<{
    dailyMl: number;
    dailyL: number;
    glasses: number;
    perHour: number;
  } | null>(null);
  const [error, setError] = useState("");

  const selectedActivity = ACTIVITY_LEVELS.find((a) => a.value === activity)!;

  const calculate = () => {
    const w = Number(weight);
    if (!weight || isNaN(w) || w <= 0) {
      setError("有効な体重を入力してください");
      setResult(null);
      return;
    }
    if (w > 300) {
      setError("体重は300kg以下で入力してください");
      setResult(null);
      return;
    }
    setError("");
    const dailyMl = w * selectedActivity.multiplier;
    const dailyL = dailyMl / 1000;
    const glasses = dailyMl / 200; // 200ml per glass
    const perHour = dailyMl / 16; // 16 waking hours
    setResult({ dailyMl, dailyL, glasses, perHour });
  };

  const reset = () => {
    setWeight("");
    setActivity("sedentary");
    setResult(null);
    setError("");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>水分摂取量計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">水分摂取量計算ツール</h1>
      <p className="text-muted mb-8">
        体重と活動レベルを入力して、1日に必要な水分摂取量の目安を計算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">体重 (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="例: 65"
            className="w-full max-w-xs border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">活動レベル</label>
          <div className="space-y-2">
            {ACTIVITY_LEVELS.map((level) => (
              <label
                key={level.value}
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                  activity === level.value
                    ? "border-primary bg-primary/5"
                    : "border-card-border hover:bg-background"
                }`}
              >
                <input
                  type="radio"
                  name="activity"
                  value={level.value}
                  checked={activity === level.value}
                  onChange={() => setActivity(level.value)}
                  className="accent-primary"
                />
                <div>
                  <p className="text-sm font-medium">{level.label}</p>
                  <p className="text-xs text-muted">{level.description}</p>
                </div>
                <span className="ml-auto text-xs text-muted">{level.multiplier} ml/kg</span>
              </label>
            ))}
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

        {result && (
          <div className="mt-8 space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-background rounded-lg p-4 text-center">
                <p className="text-xs text-muted mb-1">1日の水分量</p>
                <p className="text-2xl font-bold text-primary">{result.dailyL.toFixed(2)}</p>
                <p className="text-xs text-muted">リットル</p>
              </div>
              <div className="bg-background rounded-lg p-4 text-center">
                <p className="text-xs text-muted mb-1">ミリリットル</p>
                <p className="text-2xl font-bold text-green-600">{Math.round(result.dailyMl).toLocaleString()}</p>
                <p className="text-xs text-muted">ml</p>
              </div>
              <div className="bg-background rounded-lg p-4 text-center">
                <p className="text-xs text-muted mb-1">コップ数（200ml）</p>
                <p className="text-2xl font-bold text-orange-500">{result.glasses.toFixed(1)}</p>
                <p className="text-xs text-muted">杯</p>
              </div>
              <div className="bg-background rounded-lg p-4 text-center">
                <p className="text-xs text-muted mb-1">1時間あたり</p>
                <p className="text-2xl font-bold text-purple-500">{Math.round(result.perHour)}</p>
                <p className="text-xs text-muted">ml/h</p>
              </div>
            </div>
            <div className="bg-background rounded-lg p-4 text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-muted">体重</span>
                <span className="font-medium">{weight} kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">活動レベル</span>
                <span className="font-medium">{selectedActivity.label}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">計算式</span>
                <span className="font-medium">{weight} kg × {selectedActivity.multiplier} ml/kg</span>
              </div>
              <div className="flex justify-between border-t border-card-border pt-1 mt-1">
                <span className="text-muted">1日必要水分量</span>
                <span className="font-bold">{result.dailyL.toFixed(2)} L ({Math.round(result.dailyMl)} ml)</span>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm">
              <p className="font-medium text-blue-700 dark:text-blue-400 mb-1">水分補給のヒント</p>
              <ul className="text-muted space-y-1 text-xs list-disc list-inside">
                <li>朝起きたらコップ1杯（200ml）の水を飲みましょう</li>
                <li>食事と一緒に水分を摂ると自然に補給できます</li>
                <li>運動中は15〜20分おきに補給しましょう</li>
                <li>カフェイン飲料・アルコールは利尿作用があるため別途補給が必要です</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">水分摂取量計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 体重（kg）を入力します。</p>
          <p>2. 日常の活動レベルを選択します。</p>
          <p>3. 「計算する」ボタンを押すと、1日に必要な水分量の目安が表示されます。</p>
          <p>計算式: 1日水分量(ml) = 体重(kg) × 活動係数(ml/kg)</p>
          <p>活動係数は安静時30ml/kg〜激しい運動時50ml/kgで設定しています。</p>
          <p>食事から摂取する水分も含まれるため、飲み物だけで全量を摂る必要はありません。</p>
          <p>※ 高齢者・持病がある方は医師にご相談の上でご利用ください。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="water-intake" category="日常ツール" />
      <RelatedTools currentSlug="water-intake" category="日常ツール" />
    </div>
  );
}
