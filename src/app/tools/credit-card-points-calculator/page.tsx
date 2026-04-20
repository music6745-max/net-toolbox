"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [monthly, setMonthly] = useState("100000");
  const [rate, setRate] = useState("1.0");

  const m = parseFloat(monthly) || 0;
  const r = parseFloat(rate) || 0;
  const monthlyPoints = m * r / 100;
  const yearlyPoints = monthlyPoints * 12;
  const fiveYearPoints = yearlyPoints * 5;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>クレカポイント還元計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">クレジットカードポイント還元計算</h1>
      <p className="text-muted mb-8">月の利用額と還元率から獲得ポイントを計算。クレカ選びの参考に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">月の利用額(円)</label><input type="number" value={monthly} onChange={e => setMonthly(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div><label className="block text-sm font-medium mb-2">還元率(%)</label><input type="number" step="0.1" value={rate} onChange={e => setRate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月間ポイント</div><div className="text-lg font-bold">{Math.round(monthlyPoints).toLocaleString()}pt</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年間ポイント</div><div className="text-xl font-bold text-primary">{Math.round(yearlyPoints).toLocaleString()}pt</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">5年間</div><div className="text-lg font-bold">{Math.round(fiveYearPoints).toLocaleString()}pt</div></div>
        </div>
      </div>
      <ToolFAQSection
        toolName="クレカポイント還元計算"
        howTo={[
          "月の利用額を入力する（クレカ請求書から平均値を参照）",
          "還元率（%）を入力する（カードの基本還元率）",
          "月間・年間・5年間の累計ポイント数が自動計算される",
          "複数カードの還元率を比較して、年間獲得ポイントが最大になるカードを選ぶ",
        ]}
        faqs={[
          {
            question: "高還元率カードのおすすめは？",
            answer: "基本還元率1%以上の定番カード：楽天カード（1%）・三井住友カードNL（0.5%・特定店で最大7%）・リクルートカード（1.2%）・P-oneカード（1%自動引き）・dカード（1%）。特定用途で還元率が上がるカード（SBI証券×三井住友プラチナプリファード3%等）も投資家に人気。年会費と還元率のバランスで選びましょう。",
          },
          {
            question: "還元率0.5%と1%で年間いくら差が出ますか？",
            answer: "月10万円利用の場合、0.5%なら月500pt・年6,000pt、1%なら月1,000pt・年12,000pt。差額は年6,000円（5年で30,000円）。月30万円の大口利用者なら年18,000円の差（5年で9万円）。10年以上利用するなら十万円単位のロスが発生するため、還元率は投資リターン以上の重要性があります。",
          },
          {
            question: "年会費と還元率どちらを優先すべき？",
            answer: "月利用額×年会費の壁で判断。月10万円利用なら年会費1,100円（通常カード）までがボーダー、月30万円なら年会費1万円（ゴールドカード）が元取れる。プラチナカード（年会費3〜5万円）は月50万円以上の大口利用者向け、空港ラウンジ・コンシェルジュサービス等の付帯特典も評価に加えます。",
          },
          {
            question: "ポイント還元の税金はどうなる？",
            answer: "個人使用分は「値引き」扱いで非課税。ただし以下のケースで課税対象になります：①事業用クレカ：経費計上額から還元分差引き②株式投資等の利益に対してポイント取得：一時所得扱い（年50万円超）③年間ポイント獲得額50万円超の高額利用者：一時所得として申告必要。通常利用の個人は気にしなくてOKです。",
          },
        ]}
      />
      <AffiliateSection slug="credit-card-points-calculator" category="日常ツール" />
      <RelatedTools currentSlug="credit-card-points-calculator" category="日常ツール" />
    </div>
  );
}
