"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [hourly, setHourly] = useState("1200");
  const [hoursDay, setHoursDay] = useState("8");
  const [daysWeek, setDaysWeek] = useState("5");

  const h = parseFloat(hourly) || 0;
  const hd = parseFloat(hoursDay) || 0;
  const dw = parseFloat(daysWeek) || 0;
  const daily = h * hd;
  const weekly = daily * dw;
  const monthly = weekly * 4.33;
  const annual = monthly * 12;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>時給から年収計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">時給から年収・月収を計算</h1>
      <p className="text-muted mb-8">パート・アルバイトの時給から年収・月収・週収・日収を計算。扶養内で働く際の収入管理に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">時給(円)</label><input type="number" value={hourly} onChange={e => setHourly(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">1日の勤務時間</label><input type="number" step="0.5" value={hoursDay} onChange={e => setHoursDay(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">週の勤務日数</label><input type="number" value={daysWeek} onChange={e => setDaysWeek(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">日収</div><div className="text-lg font-bold">¥{Math.round(daily).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">週収</div><div className="text-lg font-bold">¥{Math.round(weekly).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月収</div><div className="text-xl font-bold text-primary">¥{Math.round(monthly).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年収</div><div className="text-lg font-bold">¥{Math.round(annual).toLocaleString()}</div></div>
        </div>
        <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 text-xs text-yellow-800 dark:text-yellow-200">
          扶養内目安: 年収103万円以下(所得税非課税) / 130万円以下(社保扶養)
        </div>
      </div>
      <ToolFAQSection
        toolName="時給から年収計算"
        howTo={[
          "時給（円）を入力する",
          "1日の勤務時間（通常6〜8時間）を入力する",
          "週の勤務日数（通常3〜5日）を入力する",
          "日収・週収・月収・年収が自動計算、扶養内判定の目安も表示される",
        ]}
        faqs={[
          {
            question: "扶養内（103万円・130万円の壁）とは？",
            answer: "年収103万円：所得税の配偶者控除対象（所得税非課税）。年収130万円：社会保険の被扶養者対象（健康保険・年金の配偶者負担ゼロ）。年収150万円：配偶者特別控除最大額の境界。2022年以降、年収106万円で社会保険加入義務化（従業員101人以上企業）も始まり、扶養内で働く戦略は複雑化しています。",
          },
          {
            question: "パート・アルバイトの税金は？",
            answer: "年収103万円以下：所得税ゼロ。103万円超：超過分に所得税5%〜。年収150万円：配偶者特別控除38万円。年収201万円：配偶者特別控除対象外。住民税は年収100万円超から発生（自治体により差あり）。共働き世帯は「年収130万円以内で働く」or「大幅に超えて150万円以上」の2択が節税的に有利です。",
          },
          {
            question: "都道府県別の最低賃金は？",
            answer: "2024年10月改定：東京1,163円・大阪1,114円・愛知1,077円・神奈川1,162円・千葉1,076円・埼玉1,078円が上位、沖縄・青森・秋田等地方は900円前後。最低賃金は毎年10月改定、パート・アルバイトの時給は最低賃金以上が法的義務。地域格差は30%程度あり、転職・引越し時の参考に。",
          },
          {
            question: "扶養内で働くメリット・デメリットは？",
            answer: "メリット：①所得税・住民税・社会保険料ゼロ（実質手取り＝収入）②配偶者控除38万円で夫の税金も減③家事・育児時間確保。デメリット：①キャリア形成の機会逃す②将来の年金額少ない③昇給・賞与なし。年収200万円以上稼げるなら扶養を外れた方が世帯収入UP、40代以降は正社員復帰検討が合理的です。",
          },
        ]}
      />
      <AffiliateSection slug="annual-income-from-hourly" category="日常ツール" />
      <RelatedTools currentSlug="annual-income-from-hourly" category="日常ツール" />
    </div>
  );
}
