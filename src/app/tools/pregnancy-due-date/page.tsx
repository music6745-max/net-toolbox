"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [lmp, setLmp] = useState("");
  const calc = () => { if(!lmp) return null; const d = new Date(lmp); d.setDate(d.getDate()+280); return d; };
  const due = calc();
  const weeksCalc = () => { if(!lmp) return null; const d = new Date(lmp); const now = new Date(); const diff = Math.floor((now.getTime()-d.getTime())/(1000*60*60*24)); return { weeks: Math.floor(diff/7), days: diff%7, trimester: diff<84?1:diff<196?2:3 }; };
  const weeks = weeksCalc();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>出産予定日計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">出産予定日計算ツール</h1>
      <p className="text-muted mb-8">最終月経日から出産予定日を計算。妊娠週数・月数も表示。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">最終月経開始日</label><input type="date" value={lmp} onChange={e=>setLmp(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          {due && <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">出産予定日</div><div className="text-xl font-bold text-primary">{due.toLocaleDateString("ja-JP")}</div></div>
            {weeks && <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">現在の妊娠週数</div><div className="text-xl font-bold">{weeks.weeks}週{weeks.days}日</div><div className="text-xs text-muted mt-1">第{weeks.trimester}三半期</div></div>}
          </div>}
          <p className="text-xs text-muted">※ネーゲレの概算法（最終月経日+280日）による計算です。正確な予定日は産婦人科にてご確認ください。</p>
        </div>
      </div>
      <ToolFAQSection
        toolName="出産予定日計算"
        howTo={[
          "最終月経開始日を入力する",
          "ネーゲレの法則（最終月経日＋280日）で出産予定日が自動計算される",
          "現在の妊娠週数・三半期（1st/2nd/3rd）も表示される",
          "正確な予定日は超音波検査で修正されるため、産婦人科での確認が必須",
        ]}
        faqs={[
          {
            question: "ネーゲレの法則とは何ですか？",
            answer: "最終月経開始日から280日（40週）後を出産予定日とする計算方法です。排卵日を月経開始から14日目と仮定し、受精から266日（38週）を胎児期間として加算する方式。全妊婦の約5%が予定日ぴったりに出産、約70%が予定日±2週間以内に出産します。",
          },
          {
            question: "妊娠週数の数え方は？",
            answer: "最終月経開始日を「妊娠0週0日」として週単位で数えます。「妊娠○ヶ月」は4週ごとに1ヶ月（妊娠4週＝2ヶ月、8週＝3ヶ月）。三半期は第1三半期（0〜13週）・第2三半期（14〜27週）・第3三半期（28週〜出産）に分かれ、母体・胎児の発達段階によって注意点が異なります。",
          },
          {
            question: "予定日が月経周期によって変わりますか？",
            answer: "月経周期が28日より長い場合（35日周期等）、実際の排卵は遅れるため予定日も遅くなる可能性があります。産婦人科では胎児の頭臀長（CRL）を超音波で測定し、より正確な予定日を決定します。妊娠8〜11週の超音波検査で判明する予定日が最も信頼性高いです。",
          },
          {
            question: "出産準備はいつから始めるべき？",
            answer: "妊娠20週（5ヶ月）頃から産院・出産方法の検討開始、妊娠28週（8ヶ月）頃にベビー用品購入、妊娠34週（9ヶ月）頃に入院準備完了が一般的なタイムライン。予定日1ヶ月前には産休取得、出産育児一時金（50万円）・出産手当金の申請準備も始めましょう。",
          },
        ]}
      />
      <AffiliateSection slug="pregnancy-due-date" category="日常ツール" />

      <RelatedTools currentSlug="pregnancy-due-date" category="日常ツール" />
    </div>
  );
}