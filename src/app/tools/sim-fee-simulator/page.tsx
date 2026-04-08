"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [data, setData] = useState("3");
  const [callOpt, setCallOpt] = useState("none");
  const [lines, setLines] = useState("1");

  const dataPrices: Record<string, { price: number; label: string }> = {
    "1": { price: 850, label: "1GB" },
    "3": { price: 1100, label: "3GB" },
    "5": { price: 1500, label: "5GB" },
    "10": { price: 1980, label: "10GB" },
    "20": { price: 2700, label: "20GB" },
    "unlimited": { price: 3300, label: "無制限" },
  };
  const callPrices: Record<string, { price: number; label: string }> = {
    none: { price: 0, label: "なし（従量 22円/30秒）" },
    "5min": { price: 550, label: "5分かけ放題" },
    "10min": { price: 880, label: "10分かけ放題" },
    unlimited: { price: 1650, label: "無制限かけ放題" },
  };

  const base = dataPrices[data].price + callPrices[callOpt].price;
  const n = Math.max(1, Math.min(10, parseInt(lines) || 1));
  const familyDiscountPerLine = n >= 2 ? 220 : 0;
  const perLine = Math.max(0, base - familyDiscountPerLine);
  const monthly = perLine * n;
  const yearly = monthly * 12;
  const savingVsMajor = Math.max(0, (7500 - perLine) * n);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>格安SIM料金シミュレーター</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">格安SIM料金シミュレーター</h1>
      <p className="text-muted mb-8">データ容量・通話オプション・家族回線数から月額料金と年間コストを試算します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">データ容量</label>
            <select value={data} onChange={e => setData(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background">
              {Object.entries(dataPrices).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">通話オプション</label>
            <select value={callOpt} onChange={e => setCallOpt(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background">
              {Object.entries(callPrices).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">家族回線数</label>
            <input type="number" min="1" max="10" value={lines} onChange={e => setLines(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            {n >= 2 && <p className="text-xs text-muted mt-1">※2回線以上で家族割 -¥220／回線を自動適用</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">月額合計</div>
            <div className="text-xl font-bold text-primary">¥{monthly.toLocaleString()}</div>
          </div>
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">年間コスト</div>
            <div className="text-xl font-bold">¥{yearly.toLocaleString()}</div>
          </div>
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">大手比節約（月）</div>
            <div className="text-xl font-bold">¥{savingVsMajor.toLocaleString()}</div>
          </div>
        </div>

        <div className="mt-4 text-xs text-muted">
          1回線あたり ¥{perLine.toLocaleString()} × {n}回線
        </div>
      </div>

      <section className="mt-8">
        <Link href="/guide/sim-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">格安SIMおすすめ比較ガイドを見る</div>
          <p className="text-xs text-muted">主要MVNOを料金・速度・かけ放題で徹底比較。乗り換え手順も解説 →</p>
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>データ容量・通話オプション・家族回線数を選ぶと月額と年間コスト、大手キャリア比の節約額を試算します。料金は主要格安SIMの相場に基づく参考値です。</p>
        </div>
      </section>

      <AffiliateSection slug="sim-fee-simulator" category="日常ツール" />
      <RelatedTools currentSlug="sim-fee-simulator" category="日常ツール" />
    </div>
  );
}
