"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

type Industry = { name: string; avg: number; p25: number; p75: number };

const INDUSTRIES: Industry[] = [
  { name: "IT・通信", avg: 520, p25: 400, p75: 700 },
  { name: "金融・保険", avg: 590, p25: 420, p75: 800 },
  { name: "メーカー（機械・電機）", avg: 480, p25: 370, p75: 620 },
  { name: "商社", avg: 560, p25: 400, p75: 780 },
  { name: "コンサルティング", avg: 640, p25: 480, p75: 900 },
  { name: "医療・福祉", avg: 410, p25: 320, p75: 520 },
  { name: "小売・流売", avg: 380, p25: 300, p75: 480 },
  { name: "建設・不動産", avg: 490, p25: 370, p75: 640 },
  { name: "教育・学習支援", avg: 420, p25: 330, p75: 540 },
  { name: "運輸・物流", avg: 420, p25: 340, p75: 520 },
  { name: "サービス業", avg: 390, p25: 310, p75: 490 },
  { name: "マスコミ・広告", avg: 530, p25: 400, p75: 700 },
];

export default function Page() {
  const [my, setMy] = useState("500");
  const [selected, setSelected] = useState("IT・通信");
  const ind = INDUSTRIES.find((i) => i.name === selected)!;
  const myNum = parseFloat(my) || 0;
  const diff = myNum - ind.avg;
  const pct = ind.avg > 0 ? (diff / ind.avg) * 100 : 0;
  const position = myNum < ind.p25 ? "下位25%以下" : myNum < ind.avg ? "平均より下" : myNum < ind.p75 ? "平均より上" : "上位25%以上";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>業界別年収比較</span></nav>
      <h1 className="text-2xl font-bold mb-2">業界別年収比較ツール</h1>
      <p className="text-muted mb-8">自分の年収を業界平均と比較。転職時の年収交渉の参考に活用できます。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">あなたの年収（万円）</label>
            <input type="number" value={my} onChange={(e) => setMy(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">業界</label>
            <select value={selected} onChange={(e) => setSelected(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30">
              {INDUSTRIES.map((i) => <option key={i.name} value={i.name}>{i.name}</option>)}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          <div className="bg-background rounded-lg p-3 text-center"><div className="text-xs text-muted">業界平均</div><div className="text-lg font-bold">{ind.avg}万円</div></div>
          <div className="bg-background rounded-lg p-3 text-center"><div className="text-xs text-muted">下位25%</div><div className="text-lg font-bold">{ind.p25}万円</div></div>
          <div className="bg-background rounded-lg p-3 text-center"><div className="text-xs text-muted">上位25%</div><div className="text-lg font-bold">{ind.p75}万円</div></div>
          <div className="bg-primary/10 rounded-lg p-3 text-center"><div className="text-xs text-muted">あなたの位置</div><div className="text-sm font-bold text-primary">{position}</div></div>
        </div>

        <div className="mt-4 bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm text-slate-800 dark:text-slate-100">業界平均との差：<span className="font-bold">{diff >= 0 ? "+" : ""}{diff}万円</span>（{pct >= 0 ? "+" : ""}{pct.toFixed(1)}%）</p>
        </div>
      </div>

      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>あなたの年収と業界を選択すると、業界平均および上位・下位の目安と比較できます。数値は一般的な国内統計を参考にした目安値です。転職時の希望年収設定や交渉材料としてご活用ください。</p></div></section>

      <section className="mt-10 mb-6">
        <Link href="/guide/it-job-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">転職で年収アップを目指すガイドを読む</div>
          <p className="text-xs text-muted">業界別の転職戦略を網羅 →</p>
        </Link>
      </section>

      <AffiliateSection slug="salary-comparison" category="日常ツール" />
      <RelatedTools currentSlug="salary-comparison" category="日常ツール" />
    </div>
  );
}
