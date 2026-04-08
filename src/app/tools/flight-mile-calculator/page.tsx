"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

const AIRLINES = [
  { key: "ana", name: "ANA（スターアライアンス）" },
  { key: "jal", name: "JAL（ワンワールド）" },
  { key: "delta", name: "デルタ航空（スカイチーム）" },
  { key: "united", name: "ユナイテッド航空" },
  { key: "singapore", name: "シンガポール航空" },
];

const CLASSES = [
  { key: "economy_saver", label: "エコノミー（割引運賃）", rate: 0.5 },
  { key: "economy_flex", label: "エコノミー（普通運賃）", rate: 1.0 },
  { key: "premium", label: "プレミアムエコノミー", rate: 1.25 },
  { key: "business", label: "ビジネスクラス", rate: 1.5 },
  { key: "first", label: "ファーストクラス", rate: 1.75 },
];

export default function Page() {
  const [airline, setAirline] = useState("ana");
  const [distance, setDistance] = useState("1000");
  const [classKey, setClassKey] = useState("economy_flex");
  const [elite, setElite] = useState("0");

  const d = parseFloat(distance) || 0;
  const cls = CLASSES.find(c => c.key === classKey) || CLASSES[1];
  const base = d * cls.rate;
  const bonus = base * (parseFloat(elite) / 100 || 0);
  const total = base + bonus;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>マイル計算ツール</span></nav>
      <h1 className="text-2xl font-bold mb-2">マイル計算ツール</h1>
      <p className="text-muted mb-8">航空会社・区間距離・座席クラスから貯まるフライトマイルの概算を算出します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">航空会社</label>
            <select value={airline} onChange={e => setAirline(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-card-bg">
              {AIRLINES.map(a => <option key={a.key} value={a.key}>{a.name}</option>)}
            </select>
          </div>
          <div><label className="block text-sm font-medium mb-2">区間距離（マイル）</label><input type="number" value={distance} onChange={e => setDistance(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">座席クラス・運賃種別</label>
            <select value={classKey} onChange={e => setClassKey(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-card-bg">
              {CLASSES.map(c => <option key={c.key} value={c.key}>{c.label}（積算率{Math.round(c.rate * 100)}%）</option>)}
            </select>
          </div>
          <div><label className="block text-sm font-medium mb-2">上級会員ボーナス（%）</label><input type="number" value={elite} onChange={e => setElite(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">基礎マイル</div><div className="text-xl font-bold">{Math.round(base).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">ボーナスマイル</div><div className="text-xl font-bold">{Math.round(bonus).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">合計マイル</div><div className="text-xl font-bold text-primary">{Math.round(total).toLocaleString()}</div></div>
        </div>
      </div>
      <section className="mt-8 bg-card-bg border border-card-border rounded-xl p-6">
        <h2 className="text-lg font-bold mb-3">マイルを効率よく貯めるには</h2>
        <p className="text-sm text-muted mb-4">陸マイラーに人気のクレジットカードや旅行アプリもチェックしましょう。</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/guide/credit-card-comparison" className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90">クレジットカード比較</Link>
          <Link href="/guide/travel-app-comparison" className="inline-flex items-center px-4 py-2 border border-card-border rounded-lg text-sm font-medium hover:bg-background">旅行アプリ比較</Link>
        </div>
      </section>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>航空会社・区間距離・座席クラスを選択し、上級会員ボーナスがあれば入力すると貯まるマイル数の概算を表示します。積算率は主要航空会社の一般的な目安です。</p></div></section>
      <AffiliateSection slug="flight-mile-calculator" category="日常ツール" />
      <RelatedTools currentSlug="flight-mile-calculator" category="日常ツール" />
    </div>
  );
}
