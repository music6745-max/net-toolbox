"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [annual, setAnnual] = useState("4500000");
  const [workDays, setWorkDays] = useState("245");
  const [workHours, setWorkHours] = useState("8");

  const a = parseFloat(annual) || 0;
  const d = parseFloat(workDays) || 1;
  const h = parseFloat(workHours) || 1;
  const monthly = a / 12;
  const daily = a / d;
  const hourly = a / (d * h);
  const minutely = hourly / 60;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>時給換算計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">年収・時給換算計算ツール</h1>
      <p className="text-muted mb-8">年収から時給・日給・月給を逆算。転職時の年収交渉や働き方を考える材料に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">年収(円)</label><input type="number" value={annual} onChange={e => setAnnual(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">年間労働日数</label><input type="number" value={workDays} onChange={e => setWorkDays(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">1日の労働時間</label><input type="number" value={workHours} onChange={e => setWorkHours(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月給</div><div className="text-xl font-bold">¥{Math.round(monthly).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">日給</div><div className="text-xl font-bold">¥{Math.round(daily).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">時給</div><div className="text-2xl font-bold text-primary">¥{Math.round(hourly).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">分給</div><div className="text-xl font-bold">¥{Math.round(minutely).toLocaleString()}</div></div>
        </div>
      </div>
      <ToolFAQSection
        toolName="年収・時給換算計算"
        howTo={[
          "年収（円）を入力する",
          "年間労働日数を入力する（通常245日＝月20日×12ヶ月強）",
          "1日の労働時間を入力する（通常8時間）",
          "月給・日給・時給・分給が自動計算される",
        ]}
        faqs={[
          {
            question: "年収300〜1000万円の時給換算は？",
            answer: "年収300万円：時給1,530円・日給12,245円・月給25万円。年収500万円：時給2,551円・日給20,408円・月給41.7万円。年収800万円：時給4,082円・日給32,653円・月給66.7万円。年収1000万円：時給5,102円・日給40,816円・月給83.3万円。年245日×8時間労働換算です。",
          },
          {
            question: "残業代の計算方法は？",
            answer: "通常賃金（月給÷月労働時間）×1.25倍（時間外）。月給30万円・月160時間なら時給1,875円、残業代2,344円/時。深夜（22時〜翌5時）は+25%で2,813円/時、休日出勤は+35%で2,531円/時。60時間超残業は割増率1.5倍に。正確な残業代請求には給与明細と労働時間記録の保存が重要です。",
          },
          {
            question: "正社員とフリーランスの時給比較は？",
            answer: "正社員の実質時給は額面の70〜80%（社会保険料・税金控除後）、フリーランスは手取りベースで設定。フリーランスの妥当時給は正社員の1.5〜2倍が目安（退職金・社会保険・有給なし分を補填）。年収500万円正社員と同等の生活水準を保つには、フリーランスは年収700〜1000万円必要、時給5,000〜7,000円が目安です。",
          },
          {
            question: "年収交渉のコツは？",
            answer: "①市場相場リサーチ（エン転職・doda・OpenWorkで同業界同年数の相場）②貢献度の数値化（売上・コスト削減・プロジェクト成功）③交渉タイミング（昇給時・転職時・新ポジション就任時）④具体的な希望額提示（現在年収+10〜20%が現実的）⑤代替案（賞与UP・有給増・リモート可等）。転職エージェント活用で年収+20〜30%も可能です。",
          },
        ]}
      />
      <AffiliateSection slug="hourly-wage-calculator" category="日常ツール" />
      <RelatedTools currentSlug="hourly-wage-calculator" category="日常ツール" />
    </div>
  );
}
