"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [income, setIncome] = useState("500000");
  const [expense, setExpense] = useState("50000");
  const [type, setType] = useState("zatsu"); // zatsu = 雑所得, jigyo = 事業所得

  const inc = parseFloat(income) || 0;
  const exp = parseFloat(expense) || 0;
  const profit = Math.max(0, inc - exp);

  const needsKakutei = profit > 200000;
  const additionalResidentTax = Math.round(profit * 0.1);
  const additionalIncomeTax = Math.round(profit * 0.2); // 概算（税率は本業所得による）

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>副業バレない収入シミュレーター</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">副業バレない収入シミュレーター</h1>
      <p className="text-muted mb-8">副業所得から確定申告の要否・追加で発生する税金・会社にバレないための対策を判定します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">副業の年間収入（円）</label>
            <input type="number" value={income} onChange={e => setIncome(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">副業の年間経費（円）</label>
            <input type="number" value={expense} onChange={e => setExpense(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">所得区分</label>
            <select value={type} onChange={e => setType(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option value="zatsu">雑所得</option>
              <option value="jigyo">事業所得</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">副業所得</div><div className="text-lg font-bold">¥{profit.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">追加住民税（概算）</div><div className="text-lg font-bold">¥{additionalResidentTax.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">追加所得税（概算）</div><div className="text-lg font-bold">¥{additionalIncomeTax.toLocaleString()}</div></div>
        </div>

        <div className={`mt-4 p-4 rounded-lg ${needsKakutei ? "bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700" : "bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700"}`}>
          <div className="font-bold mb-1">{needsKakutei ? "確定申告が必要です" : "確定申告は不要（住民税の申告は必要）"}</div>
          <div className="text-sm text-muted">
            {needsKakutei
              ? "所得が20万円を超えるため、確定申告の義務があります。住民税は『自分で納付（普通徴収）』を選ぶことで会社への通知を回避できます。"
              : "所得が20万円以下のため所得税の確定申告は不要ですが、住民税の申告は別途必要です。"}
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">関連ガイド</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/guide/side-business-tools" className="block bg-card-bg border border-card-border rounded-lg p-4 hover:border-primary transition-colors">
            <div className="font-semibold mb-1">副業向けツール比較</div>
            <div className="text-xs text-muted">副業を始める人のおすすめツール</div>
          </Link>
          <Link href="/guide/accounting-software-comparison" className="block bg-card-bg border border-card-border rounded-lg p-4 hover:border-primary transition-colors">
            <div className="font-semibold mb-1">確定申告ソフト比較</div>
            <div className="text-xs text-muted">freee・弥生・マネーフォワード</div>
          </Link>
        </div>
      </section>

      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>※ 副業バレ対策は確定申告書第二表で「住民税は自分で納付」を選択することが基本です。本ツールは概算であり実際の税額は所得状況により変わります。</p></div></section>
      <AffiliateSection slug="side-business-tax-calculator" category="日常ツール" />
      <RelatedTools currentSlug="side-business-tax-calculator" category="日常ツール" />
    </div>
  );
}
