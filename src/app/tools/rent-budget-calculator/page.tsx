"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [income, setIncome] = useState("5000000");
  const [ratio, setRatio] = useState("25");

  const annual = parseFloat(income) || 0;
  // 年収から手取りをざっくり80%で試算
  const netAnnual = annual * 0.8;
  const monthlyNet = netAnnual / 12;
  const r = (parseFloat(ratio) || 0) / 100;
  const recommended = monthlyNet * r;
  const safe = monthlyNet * 0.25;
  const upper = monthlyNet * 0.33;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>家賃適正額計算ツール</span></nav>
      <h1 className="text-2xl font-bold mb-2">家賃適正額計算ツール</h1>
      <p className="text-muted mb-8">年収から無理のない家賃の目安を計算します。手取りの25%が安全圏、33%が上限の目安です。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">年収（額面・円）</label><input type="number" value={income} onChange={e => setIncome(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">家賃比率（手取りの%）</label><input type="number" value={ratio} onChange={e => setRatio(e.target.value)} step="1" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">推奨家賃（入力比率）</div><div className="text-xl font-bold text-primary">¥{Math.round(recommended).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">安全圏（25%）</div><div className="text-xl font-bold">¥{Math.round(safe).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">上限目安（33%）</div><div className="text-xl font-bold">¥{Math.round(upper).toLocaleString()}</div></div>
        </div>
        <div className="mt-4 text-xs text-muted">手取り月収の試算：¥{Math.round(monthlyNet).toLocaleString()}（年収の約80%で計算）</div>
      </div>

      <section className="mt-8">
        <Link href="/guide/housing-loan-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">賃貸から持ち家に切り替えるなら住宅ローン比較</div>
          <p className="text-xs text-muted">主要住宅ローンの金利・総返済額を比較するガイドを見る →</p>
        </Link>
      </section>

      <ToolFAQSection
        toolName="家賃適正額計算"
        howTo={[
          "年収（額面・円）を入力",
          "希望の家賃比率（%）を入力（25%が安全圏）",
          "推奨家賃・安全圏（25%）・上限（33%）が計算",
          "引越し・更新のタイミングで家賃見直し",
        ]}
        faqs={[
          {
            question: "家賃は年収の何割が適正？",
            answer: "手取り月収の25%が安全圏、30%超は危険圏。額面年収500万なら手取り月33万円、適正家賃8〜10万円。生活費・貯蓄・娯楽のバランスを考慮し、25%以内を維持すると家計が安定。家賃が高すぎると投資・貯蓄に回せない悪循環、慎重な物件選びが重要です。",
          },
          {
            question: "首都圏の家賃相場は？",
            answer: "東京23区：1R 8〜12万円、1LDK 12〜18万円、2LDK 18〜30万円。都心3区（千代田・中央・港）：1R 12〜15万円。郊外（23区外・神奈川・埼玉）：1R 6〜9万円。会社から遠いと通勤手当もらえる範囲で家賃節約、徒歩10分以内駅近で利便性確保する選択が多数派です。",
          },
          {
            question: "家賃節約のコツは？",
            answer: "①駅徒歩10〜15分物件で1〜2割安く②築15年以上で2〜3割安く③UR賃貸（敷礼・更新料・仲介なし）④都営住宅・公社住宅（所得制限内）⑤フリーレント物件（初月家賃無料）⑥更新時の家賃交渉（周辺相場下落時）。月1万円の家賃削減で年12万円、新NISAに回せば資産形成加速します。",
          },
          {
            question: "賃貸vs持家どっち？",
            answer: "子育て前・転勤族なら賃貸、定住＆資産形成なら持家。30年ローン3500万円の住宅（月10万円返済）vs 賃貸12万円の比較、ローン控除・住宅資産価値を入れると持家が20〜30年で有利。ただし住宅ローンは固定費で身動き取りにくい、柔軟性重視なら賃貸も有力です。",
          },
        ]}
      />

      <AffiliateSection slug="rent-budget-calculator" category="日常ツール" />
      <RelatedTools currentSlug="rent-budget-calculator" category="日常ツール" />
    </div>
  );
}
