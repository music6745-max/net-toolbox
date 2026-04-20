"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [watts, setWatts] = useState("1000");
  const [hours, setHours] = useState("4");
  const [rate, setRate] = useState("31");

  const w = parseFloat(watts) || 0;
  const h = parseFloat(hours) || 0;
  const r = parseFloat(rate) || 0;
  const kwhPerDay = (w * h) / 1000;
  const daily = kwhPerDay * r;
  const monthly = daily * 30;
  const yearly = daily * 365;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>家電の電気代計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">家電の電気代計算ツール</h1>
      <p className="text-muted mb-8">消費電力・使用時間・電気料金単価から家電の電気代を計算。節約の検討材料に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">消費電力(W)</label><input type="number" value={watts} onChange={e => setWatts(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">1日の使用時間(h)</label><input type="number" step="0.5" value={hours} onChange={e => setHours(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div><label className="block text-sm font-medium mb-2">電気料金単価(円/kWh)</label><input type="number" value={rate} onChange={e => setRate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">1日</div><div className="text-lg font-bold">¥{Math.round(daily).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">1ヶ月</div><div className="text-xl font-bold text-primary">¥{Math.round(monthly).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">1年</div><div className="text-lg font-bold">¥{Math.round(yearly).toLocaleString()}</div></div>
        </div>
      </div>
      <ToolFAQSection
        toolName="家電の電気代計算"
        howTo={[
          "家電の消費電力（W）を入力する（本体ラベルまたは取説参照）",
          "1日の使用時間（h）を入力する",
          "電気料金単価（円/kWh）を入力する（デフォルト31円、請求書で確認）",
          "1日・1ヶ月・1年間の電気代が自動計算される",
        ]}
        faqs={[
          {
            question: "主要家電の消費電力目安は？",
            answer: "エアコン：500〜2000W（冷房500〜800W・暖房1000〜2000W）、冷蔵庫：30〜100W（24時間稼働）、電子レンジ：500〜1500W、ドライヤー：800〜1500W、テレビ：100〜300W、PC：50〜300W、LED電球：5〜15W。家電の本体ラベル・取説にW数が必ず記載されています。",
          },
          {
            question: "電気料金単価の計算方法は？",
            answer: "単価は電力会社・契約プラン・時間帯で異なります。従量電灯B（関東）：1段目(〜120kWh)30円・2段目(121〜300kWh)36円・3段目(301kWh〜)40円。オール電化プランは夜間17円・日中33円等。請求書の「総額÷使用量」で平均単価を算出、デフォルト31円は全国平均の目安です。",
          },
          {
            question: "節電効果の高い家電は？",
            answer: "エアコン設定温度1℃変更で10%節約（夏28℃・冬20℃推奨）、冷蔵庫温度設定「中」で適正（強より20%節約）、10年古い家電を最新型に買い替えで30〜50%削減。特にエアコン・冷蔵庫・給湯器が電気代の3大支出、省エネ家電への更新効果は大きいです。",
          },
          {
            question: "電気料金を下げる方法は？",
            answer: "①電力会社乗り換え（新電力で10〜20%削減）②契約アンペア見直し（使い方に合わせる）③太陽光発電導入（自家消費で年10〜20万円削減）④オール電化＋夜間電力活用⑤LED化（白熱電球の1/6、蛍光灯の1/2の電気代）。複合的な対策で年3〜10万円の節約可能です。",
          },
        ]}
      />
      <AffiliateSection slug="appliance-electricity-cost" category="日常ツール" />
      <RelatedTools currentSlug="appliance-electricity-cost" category="日常ツール" />
    </div>
  );
}
