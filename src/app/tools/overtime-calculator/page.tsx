"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [hourly, setHourly] = useState("1500");
  const [hours, setHours] = useState("20");
  const [nightHours, setNightHours] = useState("0");
  const [holidayHours, setHolidayHours] = useState("0");

  const h = parseFloat(hourly) || 0;
  const reg = parseFloat(hours) || 0;
  const night = parseFloat(nightHours) || 0;
  const holiday = parseFloat(holidayHours) || 0;
  const regPay = h * 1.25 * reg;
  const nightPay = h * 1.5 * night;
  const holidayPay = h * 1.35 * holiday;
  const total = regPay + nightPay + holidayPay;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>残業代計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">残業代・深夜・休日労働計算ツール</h1>
      <p className="text-muted mb-8">通常時給から残業代(1.25倍)・深夜手当(1.5倍)・休日手当(1.35倍)を計算。給与明細のチェックに。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">時給(円)</label><input type="number" value={hourly} onChange={e => setHourly(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-3 gap-4">
          <div><label className="block text-sm font-medium mb-2">残業(h)</label><input type="number" value={hours} onChange={e => setHours(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">深夜(h)</label><input type="number" value={nightHours} onChange={e => setNightHours(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">休日(h)</label><input type="number" value={holidayHours} onChange={e => setHolidayHours(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">残業代</div><div className="text-lg font-bold">¥{Math.round(regPay).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">深夜手当</div><div className="text-lg font-bold">¥{Math.round(nightPay).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">休日手当</div><div className="text-lg font-bold">¥{Math.round(holidayPay).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">合計</div><div className="text-xl font-bold text-primary">¥{Math.round(total).toLocaleString()}</div></div>
        </div>
      </div>
      <ToolFAQSection
        toolName="残業代・深夜・休日労働計算"
        howTo={[
          "通常時給（円）を入力",
          "残業時間・深夜時間・休日労働時間（時）を入力",
          "それぞれの法定割増賃金と合計が計算される",
          "給与明細の数字が正しいかチェックに活用",
        ]}
        faqs={[
          {
            question: "残業代の割増率は？",
            answer: "法定時間外労働：1.25倍（通常の25%増）。深夜労働（22時〜翌5時）：1.5倍（50%増、時間外深夜なら1.5倍）。休日労働（法定休日）：1.35倍（35%増、休日深夜なら1.6倍）。60時間超残業：1.5倍（大企業・中小企業とも2023年4月から適用）。法律で定められた最低基準です。",
          },
          {
            question: "サービス残業は違法？",
            answer: "違法。労働基準法37条で時間外労働の割増賃金支払い義務あり、違反は6ヶ月以下の懲役or30万円以下の罰金。対処法：①タイムカード・PCログ・LINE履歴等で証拠確保②労働基準監督署に匿名相談（無料）③弁護士相談（過去2年分の残業代請求可）。泣き寝入りせず権利主張を。",
          },
          {
            question: "管理職は残業代もらえない？",
            answer: "「管理監督者」のみ適用除外。ただし厳格な要件があり、肩書きだけの「名ばかり管理職」は違法。要件：①経営者と一体的立場②労働時間・出退勤の自由③一般社員より相当高い給与④重要決定権限あり。部長・課長でも要件満たさなければ残業代請求可能、過去2年分遡って請求できます。",
          },
          {
            question: "残業代の時効は？",
            answer: "2020年以前は2年、2020年4月以降発生分から段階的に延長され現在は3年（将来的に5年）。2年前の残業代も請求可能、弁護士や労働基準監督署に相談することで数十〜数百万円の未払い請求例多数あり。証拠保全が重要、タイムカード・メール記録等を必ず保存しましょう。",
          },
        ]}
      />
      <AffiliateSection slug="overtime-calculator" category="日常ツール" />
      <RelatedTools currentSlug="overtime-calculator" category="日常ツール" />
    </div>
  );
}
