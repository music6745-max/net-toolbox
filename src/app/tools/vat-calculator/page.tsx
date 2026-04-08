"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [amount, setAmount] = useState("10000");
  const [rate, setRate] = useState("10");
  const [mode, setMode] = useState<"exclusive" | "inclusive">("exclusive");

  const a = parseFloat(amount) || 0;
  const r = (parseFloat(rate) || 0) / 100;

  let baseAmount = 0;
  let taxAmount = 0;
  let total = 0;

  if (mode === "exclusive") {
    // 外税: 入力値が税抜
    baseAmount = a;
    taxAmount = Math.round(a * r);
    total = baseAmount + taxAmount;
  } else {
    // 内税: 入力値が税込
    total = a;
    baseAmount = Math.round(a / (1 + r));
    taxAmount = a - baseAmount;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>消費税計算</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">消費税計算ツール（内税・外税対応）</h1>
      <p className="text-muted mb-8">税抜金額から税込金額、または税込金額から税抜金額を計算します。標準税率10%・軽減税率8%の両方に対応。請求書作成や経費精算に。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">計算モード</label>
            <div className="flex gap-2">
              <button onClick={() => setMode("exclusive")} className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium ${mode === "exclusive" ? "bg-primary text-white" : "bg-background border border-card-border"}`}>外税（税抜→税込）</button>
              <button onClick={() => setMode("inclusive")} className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium ${mode === "inclusive" ? "bg-primary text-white" : "bg-background border border-card-border"}`}>内税（税込→税抜）</button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{mode === "exclusive" ? "税抜金額（円）" : "税込金額（円）"}</label>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">消費税率（%）</label>
            <select value={rate} onChange={e => setRate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background">
              <option value="10">10%（標準税率）</option>
              <option value="8">8%（軽減税率：飲食料品・新聞）</option>
              <option value="5">5%（旧税率）</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">税抜金額</div>
            <div className="text-xl font-bold">¥{baseAmount.toLocaleString()}</div>
          </div>
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">消費税</div>
            <div className="text-xl font-bold text-primary">¥{taxAmount.toLocaleString()}</div>
          </div>
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">税込金額</div>
            <div className="text-xl font-bold">¥{total.toLocaleString()}</div>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>外税モードでは税抜金額を入力すると消費税と税込金額を計算します。内税モードでは税込金額から税抜金額と消費税を逆算します。</p>
          <p>飲食料品（外食を除く）と新聞は軽減税率8%が適用されます。一回の取引で標準税率と軽減税率が混在する場合、税率ごとに区分して計算する必要があります。</p>
        </div>
      </section>

      <section className="mt-10 mb-10">
        <Link href="/guide/invoice-system-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">請求書サービス比較ガイド</div>
          <p className="text-xs text-muted">税率混在の請求書も自動作成できるサービスを比較 →</p>
        </Link>
      </section>

      <AffiliateSection slug="vat-calculator" category="日常ツール" />
      <RelatedTools currentSlug="vat-calculator" category="日常ツール" />
    </div>
  );
}
