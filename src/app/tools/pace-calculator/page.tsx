"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [dist, setDist] = useState("42.195");
  const [hours, setHours] = useState("4");
  const [mins, setMins] = useState("0");
  const d = parseFloat(dist)||0;
  const totalMin = (parseInt(hours)||0)*60 + (parseInt(mins)||0);
  const pace = d > 0 ? totalMin / d : 0;
  const speed = totalMin > 0 ? (d / totalMin) * 60 : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>ランニングペース計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">ランニングペース計算ツール</h1>
      <p className="text-muted mb-8">距離・タイムからペース(分/km)を計算。マラソン・ジョギングの記録管理に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">距離 (km)</label><input type="number" value={dist} onChange={e=>setDist(e.target.value)} step="0.1" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium mb-2">時間</label><input type="number" value={hours} onChange={e=>setHours(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
            <div><label className="block text-sm font-medium mb-2">分</label><input type="number" value={mins} onChange={e=>setMins(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">ペース</div><div className="text-xl font-bold text-primary">{Math.floor(pace)}分{Math.round((pace%1)*60)}秒/km</div></div>
            <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">平均速度</div><div className="text-xl font-bold">{speed.toFixed(1)} km/h</div></div>
          </div>
        </div>
      </div>
      <ToolFAQSection
        toolName="ランニングペース計算"
        howTo={[
          "走った距離（km）を入力する（フルマラソン42.195km、ハーフ21.1km、10km等）",
          "タイム（時間・分）を入力する",
          "1kmあたりのペース（分/km）と平均速度（km/h）が自動計算される",
          "目標タイムから必要ペースを逆算して、トレーニングプランに活用する",
        ]}
        faqs={[
          {
            question: "フルマラソンの目標タイム別ペースは？",
            answer: "サブ3（2時間59分59秒以内）：ペース4分15秒/km・平均14.0km/h。サブ3.5：4分58秒/km・12.0km/h。サブ4（4時間以内）：5分41秒/km・10.6km/h。サブ4.5：6分24秒/km・9.4km/h。サブ5：7分06秒/km・8.5km/h。初心者の完走目標（6時間）：8分32秒/km・7.0km/h。練習時の目標ペースの目安として活用してください。",
          },
          {
            question: "ジョギングの理想ペースは？",
            answer: "初心者：6〜7分/km（9〜10km/h）が会話できる程度の有酸素運動ペース。中級者：5〜6分/km、上級者：4〜5分/km。「息が弾む程度＆会話できる」ペースが有酸素運動のスイートスポット、脂肪燃焼＆心肺機能向上に最適。最大心拍数の60〜70%（180-年齢を目安に）で走るのがジョギングです。",
          },
          {
            question: "ペースを上げるトレーニング方法は？",
            answer: "①インターバル走：1km全力×3〜5本＋ジョグ回復（週1回）②ビルドアップ走：徐々にペースを上げる（週1回）③閾値走：レースペースより10秒遅いペースで30〜60分（週1回）④ロング走：LSDペース（7〜8分/km）で90分以上（週1回）。週4〜5回の練習でサブ4達成まで6ヶ月〜1年、サブ3には2〜3年の継続が目安です。",
          },
          {
            question: "マラソンの世界記録・日本記録は？",
            answer: "世界記録（男子）：2時間00分35秒（ケルビン・キプタム・2023年シカゴ）、平均ペース2分51秒/km・21.0km/h。世界記録（女子）：2時間11分53秒（ルース・チェプンゲティッチ・2024年シカゴ）。日本記録（男子）：2時間04分56秒（鈴木健吾・2021年）、日本記録（女子）：2時間18分59秒（野口みずき・2005年）。人類の限界に挑戦する超人ペースです。",
          },
        ]}
      />
      <AffiliateSection slug="pace-calculator" category="日常ツール" />

      <RelatedTools currentSlug="pace-calculator" category="日常ツール" />
    </div>
  );
}