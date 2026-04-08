"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

// 文部科学省「子供の学習費調査」等を参考にした年額目安（円）
const COSTS = {
  kinder: { public: 223000, private: 527000, years: 3, label: "幼稚園" },
  elementary: { public: 321000, private: 1599000, years: 6, label: "小学校" },
  junior: { public: 489000, private: 1406000, years: 3, label: "中学校" },
  high: { public: 457000, private: 970000, years: 3, label: "高校" },
  univ: { public: 2425000 / 4, private: 4690000 / 4, years: 4, label: "大学" },
} as const;

type Stage = keyof typeof COSTS;
type Kind = "public" | "private";

export default function Page() {
  const [choices, setChoices] = useState<Record<Stage, Kind>>({
    kinder: "public", elementary: "public", junior: "public", high: "public", univ: "public",
  });

  const rows = (Object.keys(COSTS) as Stage[]).map(s => {
    const c = COSTS[s];
    const annual = c[choices[s]];
    const subtotal = annual * c.years;
    return { stage: s, label: c.label, kind: choices[s], annual, years: c.years, subtotal };
  });
  const total = rows.reduce((a, b) => a + b.subtotal, 0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>教育費シミュレーター</span></nav>
      <h1 className="text-2xl font-bold mb-2">教育費シミュレーター</h1>
      <p className="text-muted mb-8">幼稚園から大学までの進路を公立／私立で選択し、累積の教育費目安を計算します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          {(Object.keys(COSTS) as Stage[]).map(s => (
            <div key={s}>
              <label className="block text-sm font-medium mb-2">{COSTS[s].label}</label>
              <select value={choices[s]} onChange={e => setChoices({ ...choices, [s]: e.target.value as Kind })} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background">
                <option value="public">公立（年額 ¥{COSTS[s].public.toLocaleString()}）</option>
                <option value="private">私立（年額 ¥{COSTS[s].private.toLocaleString()}）</option>
              </select>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-primary/10 rounded-lg p-5 text-center">
          <div className="text-xs text-muted mb-1">累積教育費の目安</div>
          <div className="text-3xl font-bold text-primary">¥{Math.round(total).toLocaleString()}</div>
        </div>

        <div className="mt-4 space-y-1 text-xs text-muted">
          {rows.map(r => (
            <div key={r.stage} className="flex justify-between"><span>{r.label}（{r.kind === "public" ? "公立" : "私立"} × {r.years}年）</span><span>¥{r.subtotal.toLocaleString()}</span></div>
          ))}
        </div>
      </div>

      <section className="mt-8">
        <Link href="/guide/insurance-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">教育費の備えに学資保険・生命保険を比較</div>
          <p className="text-xs text-muted">主要生命保険・学資保険を保障と保険料で比較するガイドを見る →</p>
        </Link>
      </section>

      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>各段階で公立／私立を選択すると、累計の教育費目安が自動計算されます。金額は文部科学省「子供の学習費調査」等の公表データを参考にした目安です。</p></div></section>

      <AffiliateSection slug="education-cost-simulator" category="日常ツール" />
      <RelatedTools currentSlug="education-cost-simulator" category="日常ツール" />
    </div>
  );
}
