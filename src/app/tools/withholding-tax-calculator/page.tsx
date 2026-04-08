"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [amount, setAmount] = useState("500000");
  const [type, setType] = useState("under100");

  const a = parseFloat(amount) || 0;
  // 報酬・料金等の源泉徴収: 100万円以下 10.21%, 100万円超は (支払金額-100万円)*20.42% + 102,100円
  let tax = 0;
  if (type === "under100") {
    tax = a <= 1000000 ? Math.floor(a * 0.1021) : Math.floor((a - 1000000) * 0.2042) + 102100;
  } else if (type === "salary") {
    // 司法書士等 (支払金額-1万円)*10.21%
    tax = Math.max(0, Math.floor((a - 10000) * 0.1021));
  } else if (type === "dividend") {
    // 配当金 20.315% (所得税15.315% + 住民税5%)
    tax = Math.floor(a * 0.20315);
  }
  const netAmount = a - tax;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>源泉徴収税額計算</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">源泉徴収税額計算ツール</h1>
      <p className="text-muted mb-8">報酬・料金等から源泉徴収すべき所得税額を自動計算。フリーランスへの支払い、司法書士・税理士への報酬、配当金の源泉税など複数パターンに対応しています。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">支払金額（税抜・円）</label>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">報酬の種類</label>
            <select value={type} onChange={e => setType(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background">
              <option value="under100">原稿料・講演料・デザイン料等（10.21%）</option>
              <option value="salary">司法書士・土地家屋調査士・海事代理士（1万円控除後10.21%）</option>
              <option value="dividend">配当金（20.315%）</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">支払金額</div>
            <div className="text-xl font-bold">¥{a.toLocaleString()}</div>
          </div>
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">源泉徴収税額</div>
            <div className="text-xl font-bold text-primary">¥{tax.toLocaleString()}</div>
          </div>
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">差引支払額</div>
            <div className="text-xl font-bold">¥{netAmount.toLocaleString()}</div>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>原稿料やデザイン料などの報酬は、100万円以下なら10.21%、100万円超は超過分に20.42%を乗じて源泉徴収税額を計算します（復興特別所得税を含む）。</p>
          <p>司法書士等への報酬は1万円控除後に10.21%。配当金は20.315%（所得税15.315%＋住民税5%）です。</p>
          <p>消費税を別途請求される場合は、税抜金額に対して源泉徴収するのが原則です。</p>
        </div>
      </section>

      <section className="mt-10 mb-10">
        <Link href="/guide/tax-software-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">確定申告ソフト比較ガイド</div>
          <p className="text-xs text-muted">源泉徴収税の管理・納付書作成に対応したソフトを比較 →</p>
        </Link>
      </section>

      <AffiliateSection slug="withholding-tax-calculator" category="日常ツール" />
      <RelatedTools currentSlug="withholding-tax-calculator" category="日常ツール" />
    </div>
  );
}
