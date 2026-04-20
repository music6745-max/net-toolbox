"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [distance, setDistance] = useState("1000");
  const [fuelEff, setFuelEff] = useState("15");
  const [price, setPrice] = useState("175");

  const d = parseFloat(distance) || 0;
  const f = parseFloat(fuelEff) || 1;
  const p = parseFloat(price) || 0;
  const liters = d / f;
  const cost = liters * p;
  const yearly = cost * 12;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>月間ガソリン代計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">月間ガソリン代計算ツール</h1>
      <p className="text-muted mb-8">月間走行距離・燃費・ガソリン単価からガソリン代を計算。家計管理・車購入検討に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">月間走行距離(km)</label><input type="number" value={distance} onChange={e => setDistance(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">燃費(km/L)</label><input type="number" step="0.1" value={fuelEff} onChange={e => setFuelEff(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">ガソリン単価(円/L)</label><input type="number" value={price} onChange={e => setPrice(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月間使用量</div><div className="text-lg font-bold">{liters.toFixed(1)} L</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月間ガソリン代</div><div className="text-xl font-bold text-primary">¥{Math.round(cost).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年間</div><div className="text-lg font-bold">¥{Math.round(yearly).toLocaleString()}</div></div>
        </div>
      </div>
      <ToolFAQSection
        toolName="月間ガソリン代計算"
        howTo={[
          "月間走行距離（km）を入力する（通勤・買い物・週末ドライブの合計）",
          "車の燃費（km/L）を入力する（カタログ値や給油時の実測値）",
          "ガソリン単価（円/L）を入力する（レギュラー価格の目安）",
          "月間・年間のガソリン代が自動計算される",
        ]}
        faqs={[
          {
            question: "平均的な月間走行距離は？",
            answer: "日本の乗用車平均走行距離は年間約1万km（月833km）、通勤あり世帯は年1.2〜1.5万km（月1000〜1250km）、地方の2台持ちは年1.5〜2万km（月1250〜1666km）。都市部の週末ドライバーは年3000〜5000km（月250〜416km）と少なめ。自分の使い方に合わせて入力してください。",
          },
          {
            question: "車種別の燃費相場は？",
            answer: "軽自動車：18〜25km/L（燃費最強）、コンパクトカー：16〜22km/L、セダン：12〜18km/L、ミニバン：10〜15km/L、SUV：10〜15km/L、スポーツカー：8〜12km/L、ハイブリッド：20〜30km/L、EV：電気代換算で実質20〜30km/L相当。実燃費はカタログ値の7〜8割が目安です。",
          },
          {
            question: "ガソリン代を節約するには？",
            answer: "①燃費向上運転（急発進・急ブレーキ避ける、エコモード活用）で+10〜20%②タイヤ空気圧の適正維持③不要な荷物を降ろす④プリペイドカード・ポイントカード活用（ENEOS・出光・コスモで還元）⑤燃費の良い車種への乗り換え（軽・ハイブリッド）で年間3〜5万円節約可能です。",
          },
          {
            question: "EVへの乗り換えで節約できる？",
            answer: "年1.5万km走行・ガソリン代20万円/年なら、EV電気代換算で5〜10万円/年（50〜70%節約）。ただし初期投資（EV200〜500万円）・充電インフラ費・電池劣化リスクあり。長距離走行少ない人・充電環境整っている人はEV検討価値あり、補助金（最大65万円）も活用可能です。",
          },
        ]}
      />
      <AffiliateSection slug="monthly-gas-cost" category="日常ツール" />
      <RelatedTools currentSlug="monthly-gas-cost" category="日常ツール" />
    </div>
  );
}
