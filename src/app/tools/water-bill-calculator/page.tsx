"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [usage, setUsage] = useState("20");
  const [meterSize, setMeterSize] = useState("13");

  const u = parseFloat(usage) || 0;

  const basicChargeMap: Record<string, number> = { "13": 860, "20": 1170, "25": 1460 };
  const basicCharge = basicChargeMap[meterSize] || 860;

  const calcWaterUsage = (m3: number) => {
    let charge = 0;
    if (m3 > 30) { charge += (m3 - 30) * 202; m3 = 30; }
    if (m3 > 20) { charge += (m3 - 20) * 163; m3 = 20; }
    if (m3 > 10) { charge += (m3 - 10) * 128; m3 = 10; }
    if (m3 > 5) { charge += (m3 - 5) * 22; }
    return charge;
  };

  const waterUsageCharge = calcWaterUsage(u);
  const sewageCharge = Math.round(u * 110);
  const total = basicCharge + waterUsageCharge + sewageCharge;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>水道料金計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">水道料金計算ツール</h1>
      <p className="text-muted mb-8">月間使用量から水道料金を概算。東京都の水道料金をベースに計算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">月間使用量(m³)</label><input type="number" value={usage} onChange={e => setUsage(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div>
            <label className="block text-sm font-medium mb-2">メーター口径</label>
            <select value={meterSize} onChange={e => setMeterSize(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
              <option value="13">13mm</option>
              <option value="20">20mm</option>
              <option value="25">25mm</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">基本料金</div><div className="text-lg font-bold">¥{basicCharge.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">従量料金</div><div className="text-lg font-bold">¥{waterUsageCharge.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">下水道料金</div><div className="text-lg font-bold">¥{sewageCharge.toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">合計</div><div className="text-xl font-bold text-primary">¥{total.toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted mt-2">※ 概算値です。実際の金額は条件により異なります。</p>
      </div>
      <ToolFAQSection
        toolName="水道料金計算"
        howTo={[
          "月間使用量（m³）を入力",
          "メーター口径（13・20・25mm）を選択",
          "基本料金＋従量料金＋下水道料金の合計が自動計算",
          "東京都水道局の料金体系に基づく概算",
        ]}
        faqs={[
          {
            question: "1人暮らしの水道代は？",
            answer: "月使用量5〜10m³、料金2,000〜3,000円／月（2ヶ月に1回請求で4,000〜6,000円）。シャワー20分・風呂毎日・洗濯週3回が目安。節水器具（節水シャワーヘッド・節水トイレ）導入で20〜30%削減可能、年間5,000〜15,000円の節約効果があります。",
          },
          {
            question: "4人家族の水道代は？",
            answer: "月使用量20〜30m³、料金5,000〜8,000円／月（2ヶ月12,000〜16,000円）。節水意識＋食洗機（手洗いより70%節水）・シャワー時間短縮で月1,000〜2,000円削減可能。年1.5万円の節約＋水不足の環境配慮、家族全体での習慣化が効果大きいです。",
          },
          {
            question: "水道代を安くする方法は？",
            answer: "①節水シャワーヘッド（3〜5千円、30%節水）②食洗機導入（手洗いの1/3の水量）③トイレ節水モード使用④洗濯物のまとめ洗い⑤歯磨き・皿洗い中のこまめな止水⑥メーター口径の見直し（13mm→20mmは基本料金UP注意）。全部実行で月1,000〜2,000円の節約が実現可能です。",
          },
          {
            question: "水道料金の地域差は？",
            answer: "都市部（東京・大阪）：月20m³で4,000〜5,000円。地方都市：月20m³で3,000〜4,000円。水源豊富な地域（山間部）は安く、島嶼部・離島は高い（海水淡水化等）。引越し先の水道料金は自治体サイトで事前確認、家計への影響10〜30%の差を把握しておきましょう。",
          },
        ]}
      />
      <AffiliateSection slug="water-bill-calculator" category="日常ツール" />
      <RelatedTools currentSlug="water-bill-calculator" category="日常ツール" />
    </div>
  );
}
