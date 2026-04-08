"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

// 月額料金（円）/ データ容量別。実勢価格に基づく概算。
const carriers: { name: string; type: string; tiers: Record<string, number> }[] = [
  { name: "ドコモ（eximo）", type: "大手キャリア", tiers: { "3": 5665, "20": 7315, "unlimited": 7315 } },
  { name: "au（使い放題MAX）", type: "大手キャリア", tiers: { "3": 5588, "20": 7238, "unlimited": 7238 } },
  { name: "ソフトバンク（メリハリ無制限）", type: "大手キャリア", tiers: { "3": 5478, "20": 7238, "unlimited": 7238 } },
  { name: "楽天モバイル", type: "第4キャリア", tiers: { "3": 1078, "20": 2178, "unlimited": 3278 } },
  { name: "ahamo", type: "オンライン", tiers: { "3": 2970, "20": 2970, "unlimited": 4950 } },
  { name: "povo", type: "オンライン", tiers: { "3": 990, "20": 2700, "unlimited": 3000 } },
  { name: "LINEMO", type: "オンライン", tiers: { "3": 990, "20": 2728, "unlimited": 2728 } },
  { name: "mineo（マイピタ）", type: "MVNO", tiers: { "3": 1518, "20": 2178, "unlimited": 2178 } },
  { name: "IIJmio", type: "MVNO", tiers: { "3": 990, "20": 2000, "unlimited": 2000 } },
  { name: "OCNモバイルONE", type: "MVNO", tiers: { "3": 990, "20": 1760, "unlimited": 1760 } },
];

export default function Page() {
  const [data, setData] = useState("3");
  const [familyLines, setFamilyLines] = useState("1");

  const lines = Math.max(1, parseInt(familyLines) || 1);
  const sorted = [...carriers]
    .map((c) => ({ ...c, monthly: c.tiers[data] }))
    .sort((a, b) => a.monthly - b.monthly);
  const cheapest = sorted[0];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>携帯料金シミュレーター</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">携帯料金シミュレーター</h1>
      <p className="text-muted mb-8">大手キャリア・オンライン専用ブランド・MVNOの月額料金をデータ容量別に比較します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">データ容量</label>
            <select value={data} onChange={e => setData(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background">
              <option value="3">3GB前後（ライトユーザー）</option>
              <option value="20">20GB前後（標準）</option>
              <option value="unlimited">無制限（ヘビーユーザー）</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">回線数（家族構成）</label>
            <input type="number" min="1" max="10" value={familyLines} onChange={e => setFamilyLines(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>

        <div className="mt-6 space-y-2">
          {sorted.map((c) => (
            <div key={c.name} className={`flex items-center justify-between rounded-lg p-3 text-sm ${c.name === cheapest.name ? "bg-primary/10 border border-primary/30" : "bg-background"}`}>
              <div>
                <span className="font-medium">{c.name}</span>
                <span className="text-xs text-muted ml-2">{c.type}</span>
              </div>
              <div className="text-right">
                <div className={`font-bold ${c.name === cheapest.name ? "text-primary" : ""}`}>¥{(c.monthly * lines).toLocaleString()}/月</div>
                <div className="text-xs text-muted">年間 ¥{(c.monthly * lines * 12).toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-xs text-muted">
          最安: {cheapest.name}（{lines}回線で月額 ¥{(cheapest.monthly * lines).toLocaleString()}）
        </div>
      </div>

      <section className="mt-8">
        <Link href="/guide/sim-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">格安SIM・キャリア徹底比較ガイド</div>
          <p className="text-xs text-muted">通信品質・料金・キャンペーンから自分に合うSIMを選ぶための完全ガイド →</p>
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>データ容量と回線数を選ぶと、主要キャリアと格安SIM10社の月額・年間コストを比較表示します。料金は2026年春時点の公式料金に基づく概算で、各種割引・キャンペーンは含みません。</p>
        </div>
      </section>

      <AffiliateSection slug="mobile-rate-simulator" category="日常ツール" />
      <RelatedTools currentSlug="mobile-rate-simulator" category="日常ツール" />
    </div>
  );
}
