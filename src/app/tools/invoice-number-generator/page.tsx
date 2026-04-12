"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [prefix, setPrefix] = useState("INV");
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [month, setMonth] = useState((new Date().getMonth() + 1).toString().padStart(2, '0'));
  const [seq, setSeq] = useState("001");

  const invoiceNumber = `${prefix}-${year}${month}-${seq}`;
  const today = new Date();
  const dueDate = new Date(today);
  dueDate.setDate(dueDate.getDate() + 30);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>請求書番号生成</span></nav>
      <h1 className="text-2xl font-bold mb-2">請求書番号ジェネレーター</h1>
      <p className="text-muted mb-8">プレフィックス・年月・連番から請求書番号を自動生成。フリーランスの請求書作成に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-4 gap-3">
          <div><label className="block text-sm font-medium mb-2">接頭辞</label><input type="text" value={prefix} onChange={e => setPrefix(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">年</label><input type="text" value={year} onChange={e => setYear(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">月</label><input type="text" value={month} onChange={e => setMonth(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">連番</label><input type="text" value={seq} onChange={e => setSeq(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm" /></div>
        </div>
        <div className="bg-primary/10 rounded-lg p-6 text-center">
          <div className="text-xs text-muted mb-1">請求書番号</div>
          <div className="text-2xl font-bold text-primary font-mono">{invoiceNumber}</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-background rounded-lg p-3 text-center text-sm"><div className="text-xs text-muted mb-1">発行日</div><div className="font-bold">{today.toLocaleDateString('ja-JP')}</div></div>
          <div className="bg-background rounded-lg p-3 text-center text-sm"><div className="text-xs text-muted mb-1">支払期限(30日後)</div><div className="font-bold">{dueDate.toLocaleDateString('ja-JP')}</div></div>
        </div>
        <button onClick={() => {navigator.clipboard.writeText(invoiceNumber)}} className="w-full py-2 bg-card-bg border border-card-border rounded-lg text-sm">番号をコピー</button>
      </div>
      <AffiliateSection slug="invoice-number-generator" category="日常ツール" />
      <RelatedTools currentSlug="invoice-number-generator" category="日常ツール" />
    </div>
  );
}
