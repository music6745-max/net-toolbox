"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [oneWay, setOneWay] = useState("500");
  const [daysMonth, setDaysMonth] = useState("22");
  const [passMonth, setPassMonth] = useState("10000");

  const ow = parseFloat(oneWay) || 0;
  const dm = parseInt(daysMonth) || 0;
  const pm = parseFloat(passMonth) || 0;
  const withoutPass = ow * 2 * dm;
  const saving = withoutPass - pm;
  const yearlyWithout = withoutPass * 12;
  const yearlyPass = pm * 12;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>通勤費計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">通勤費・定期券お得度計算</h1>
      <p className="text-muted mb-8">片道運賃と出勤日数から通勤費を計算。定期券と切符購入を比較してお得な方を判定。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div><label className="block text-sm font-medium mb-2">片道運賃(円)</label><input type="number" value={oneWay} onChange={e => setOneWay(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">月の出勤日数</label><input type="number" value={daysMonth} onChange={e => setDaysMonth(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">定期代(月額)</label><input type="number" value={passMonth} onChange={e => setPassMonth(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">切符(月)</div><div className="text-sm font-bold">¥{withoutPass.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">定期(月)</div><div className="text-sm font-bold">¥{pm.toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月の節約額</div><div className="text-lg font-bold text-primary">¥{Math.round(saving).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">{saving > 0 ? '定期がお得' : '切符がお得'}</div><div className="text-sm font-bold">{saving > 0 ? '定期券推奨' : '切符推奨'}</div></div>
        </div>
      </div>
      <ToolFAQSection
        toolName="通勤費・定期券お得度計算"
        howTo={[
          "片道運賃（円）を入力する",
          "月の出勤日数を入力する（リモートワーク日数を除いた実出勤日数）",
          "定期代（月額）を入力する（鉄道会社のサイトで検索可能）",
          "切符購入vs定期券購入どちらがお得か自動判定される",
        ]}
        faqs={[
          {
            question: "リモートワーク時代の定期券判断は？",
            answer: "月10日以下の出勤ならIC切符が有利、月11〜14日なら微妙、月15日以上は定期券が有利。例：片道500円・月10日出勤なら月10,000円（切符）vs 12,000円（定期）。ただし定期券は途中下車自由・休日利用可の付加価値あり、仕事以外でも頻繁に使う区間なら定期がお得です。",
          },
          {
            question: "6ヶ月定期は本当にお得？",
            answer: "6ヶ月定期は1ヶ月定期の約5.5〜5.7ヶ月分（2〜10%割引）。転職・引っ越し予定なし確実なら購入、予定あるなら3ヶ月or1ヶ月定期が安全。会社の通勤手当が「定期券代一括支給」の場合は6ヶ月定期でキャッシュフロー有利、「実費清算」の場合は差額分のみ自己負担になります。",
          },
          {
            question: "自転車通勤のメリットは？",
            answer: "①通勤費ゼロ（年10〜20万円節約）②健康維持（毎日30分の運動）③電車ストレスからの解放④渋滞回避で早着。ただし①雨天時の代替手段⑤駐輪場代（月2,000〜5,000円）⑥メンテナンス費用（年1〜2万円）も考慮。月10km以内の通勤ならコスパ最強、シェアサイクル（月5,000円〜）も選択肢です。",
          },
          {
            question: "通勤手当の税金はかかる？",
            answer: "月15万円までは非課税（所得税・住民税ゼロ）、15万円超は超過分が課税対象。電車通勤なら大抵非課税範囲内、新幹線通勤は課税対象になりやすい。マイカー通勤は距離別非課税枠（2〜15km：4,200〜24,400円）、超過分は課税対象。給与明細で確認して、確定申告時に注意してください。",
          },
        ]}
      />
      <AffiliateSection slug="commute-cost-calc" category="日常ツール" />
      <RelatedTools currentSlug="commute-cost-calc" category="日常ツール" />
    </div>
  );
}
