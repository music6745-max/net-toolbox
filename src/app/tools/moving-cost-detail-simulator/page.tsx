"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [size, setSize] = useState("1k");
  const [distance, setDistance] = useState("close");
  const [season, setSeason] = useState("normal");
  const [people, setPeople] = useState("1");

  const sizeBase: Record<string, number> = {
    "1k": 40000, "1ldk": 55000, "2ldk": 75000, "3ldk": 100000, "4ldk": 140000,
  };
  const sizeLabel: Record<string, string> = {
    "1k": "単身（1K/1R）", "1ldk": "1LDK", "2ldk": "2LDK", "3ldk": "3LDK", "4ldk": "4LDK以上",
  };
  const distRate: Record<string, { mult: number; label: string }> = {
    close: { mult: 1.0, label: "同市区内（〜15km）" },
    mid: { mult: 1.3, label: "同都道府県内（〜50km）" },
    far: { mult: 1.8, label: "近隣県（〜200km）" },
    longDistance: { mult: 2.5, label: "長距離（500km超）" },
  };
  const seasonRate: Record<string, { mult: number; label: string }> = {
    offpeak: { mult: 0.85, label: "閑散期（6-8・11-1月）" },
    normal: { mult: 1.0, label: "通常期" },
    peak: { mult: 1.6, label: "繁忙期（3-4月）" },
  };

  const base = sizeBase[size];
  const d = distRate[distance];
  const s = seasonRate[season];
  const total = Math.round(base * d.mult * s.mult);
  const optionPack = parseInt(people) * 5000;
  const totalWithOption = total + optionPack;
  const low = Math.round(totalWithOption * 0.85);
  const high = Math.round(totalWithOption * 1.2);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>引越し費用詳細見積もり</span></nav>
      <h1 className="text-2xl font-bold mb-2">引越し費用詳細見積もりシミュレーター</h1>
      <p className="text-muted mb-8">荷物量（間取り）・距離・時期から引越し費用の概算と見積もりレンジを算出します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">荷物量（間取り）</label>
            <select value={size} onChange={e => setSize(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg focus:outline-none focus:ring-2 focus:ring-primary/30">
              {Object.entries(sizeLabel).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </div>
          <div><label className="block text-sm font-medium mb-2">移動距離</label>
            <select value={distance} onChange={e => setDistance(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg focus:outline-none focus:ring-2 focus:ring-primary/30">
              {Object.entries(distRate).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
          </div>
          <div><label className="block text-sm font-medium mb-2">時期</label>
            <select value={season} onChange={e => setSeason(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg focus:outline-none focus:ring-2 focus:ring-primary/30">
              {Object.entries(seasonRate).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
          </div>
          <div><label className="block text-sm font-medium mb-2">世帯人数</label><input type="number" value={people} onChange={e => setPeople(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">最安見積もり</div><div className="text-xl font-bold">¥{low.toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">中央値</div><div className="text-xl font-bold text-primary">¥{totalWithOption.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">上限見積もり</div><div className="text-xl font-bold">¥{high.toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted mt-4">※ 大型家具・エアコン着脱・不用品処分などのオプションは含みません。複数社相見積もりで20〜40%下がるケースが多いです。</p>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/moving-company-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">引越し業者比較ガイド</span>
            <p className="text-xs text-muted mt-1">安く抑えるコツと一括見積もり</p>
          </Link>
        </div>
      </section>

      <AffiliateSection slug="moving-cost-detail-simulator" category="日常ツール" />
      <RelatedTools currentSlug="moving-cost-detail-simulator" category="日常ツール" />
    </div>
  );
}
