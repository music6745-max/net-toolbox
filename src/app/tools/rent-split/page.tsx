"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function RentSplitPage() {
  const [total, setTotal] = useState(10000);
  const [people, setPeople] = useState(3);

  const perPerson = Math.ceil(total / people);
  const remainder = total - perPerson * (people - 1);
  const lastPerson = total - perPerson * (people - 1);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>割り勘計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">割り勘計算ツール</h1>
      <p className="text-muted mb-8">金額と人数で均等割り。端数の処理も自動で行います。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">合計金額（円）</label>
            <input type="number" value={total} onChange={(e) => setTotal(Number(e.target.value))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">人数</label>
            <input type="number" min={1} value={people} onChange={(e) => setPeople(Math.max(1, Number(e.target.value)))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">¥{perPerson.toLocaleString()}</div>
            <div className="text-xs text-muted mt-1">1人あたり</div>
          </div>
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">¥{(total % people === 0 ? 0 : perPerson * people - total).toLocaleString()}</div>
            <div className="text-xs text-muted mt-1">端数（多く集まる額）</div>
          </div>
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">¥{total.toLocaleString()}</div>
            <div className="text-xs text-muted mt-1">合計金額</div>
          </div>
        </div>
        {total % people !== 0 && (
          <p className="text-sm text-muted text-center">※ 割り切れないため、{people - 1}人が¥{perPerson.toLocaleString()}、1人が¥{lastPerson.toLocaleString()}を支払うと丁度になります。</p>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">割り勘計算の使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>合計金額と人数を入力すると、1人あたりの金額と端数を計算します。</p><p>飲み会やイベントの精算にお使いください。</p></div></section>
      <AffiliateSection slug="rent-split" category="日常ツール" />
      <RelatedTools currentSlug="rent-split" category="日常ツール" />
    </div>
  );
}
