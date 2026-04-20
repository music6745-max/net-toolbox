"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";
import { ToolFAQSection } from "@/components/ToolFAQSection";

function calcAge(birth: string) {
  const b = new Date(birth);
  const now = new Date();
  let age = now.getFullYear() - b.getFullYear();
  const m = now.getMonth() - b.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < b.getDate())) age--;
  const totalDays = Math.floor((now.getTime() - b.getTime()) / (1000 * 60 * 60 * 24));
  const totalMonths = age * 12 + (m < 0 ? 12 + m : m);
  const nextBday = new Date(now.getFullYear(), b.getMonth(), b.getDate());
  if (nextBday <= now) nextBday.setFullYear(nextBday.getFullYear() + 1);
  const daysUntilBday = Math.ceil((nextBday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return { age, totalDays, totalMonths, daysUntilBday };
}

export default function AgeCalculatorPage() {
  const [birth, setBirth] = useState("2000-01-01");
  const info = calcAge(birth);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>年齢計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">年齢計算ツール</h1>
      <p className="text-muted mb-8">生年月日から現在の年齢、生まれてからの日数、次の誕生日までの日数を計算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">生年月日</label>
        <input type="date" value={birth} onChange={(e) => setBirth(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          {[
            { label: "年齢", value: `${info.age}歳` },
            { label: "生まれてからの日数", value: `${info.totalDays.toLocaleString()}日` },
            { label: "生まれてからの月数", value: `${info.totalMonths}ヶ月` },
            { label: "次の誕生日まで", value: `${info.daysUntilBday}日` },
          ].map((s) => (
            <div key={s.label} className="bg-background rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-primary">{s.value}</div>
              <div className="text-xs text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <ToolFAQSection
        toolName="年齢計算ツール"
        howTo={[
          "入力欄に生年月日を選択する",
          "現在の年齢、生まれてからの日数、次の誕生日までの日数が自動計算される",
          "結婚・退職・保険加入時の年齢確認、親族の歳の確認、記念日の計算に活用する",
          "書類記入前に日付基準の年齢を確認する場合は、入力日の変更機能で対応可能",
        ]}
        faqs={[
          {
            question: "年齢計算は「満年齢」と「数え年」どちらで表示されますか？",
            answer: "このツールは日本で一般的な「満年齢」で表示します。生まれた日を0歳として、誕生日ごとに1歳加算する方式です。数え年（生まれた時点で1歳、正月ごとに1歳加算）は日本の一部伝統行事や厄年計算で使用されます。",
          },
          {
            question: "保険・税金の年齢計算は何を基準にしますか？",
            answer: "保険契約は「契約日時点の満年齢」、税金（所得税・住民税）は「12月31日時点の満年齢」が原則です。例えば12月30日生まれの方は、12月31日時点で誕生日を迎えた年齢で計算されます。",
          },
          {
            question: "次の誕生日までの日数は正確ですか？",
            answer: "うるう年も含めて日数を正確に計算しています。2月29日生まれの方は、うるう年以外は3月1日を誕生日として扱うのが一般的です。",
          },
          {
            question: "還暦・古希・喜寿などの計算はできますか？",
            answer: "このツールでは現在の満年齢を表示します。還暦（60歳）・古希（70歳）・喜寿（77歳）・傘寿（80歳）・米寿（88歳）の到達日を知りたい場合は、生年月日＋各歳数で誕生日を計算してください。",
          },
        ]}
      />

      <AffiliateSection slug="age-calculator" category="日常ツール" />
      <RelatedTools currentSlug="age-calculator" category="日常ツール" />
    </div>
  );
}
