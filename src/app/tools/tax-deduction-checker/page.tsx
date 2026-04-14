"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [items, setItems] = useState([
    { name: "医療費", amount: "", checked: false },
    { name: "ふるさと納税", amount: "", checked: false },
    { name: "住宅ローン控除", amount: "", checked: false },
    { name: "生命保険料控除", amount: "", checked: false },
    { name: "地震保険料控除", amount: "", checked: false },
    { name: "iDeCo(小規模企業共済等)", amount: "", checked: false },
    { name: "寄附金控除", amount: "", checked: false },
    { name: "雑損控除(災害等)", amount: "", checked: false },
    { name: "配偶者控除/特別控除", amount: "", checked: false },
    { name: "扶養控除", amount: "", checked: false },
    { name: "障害者控除", amount: "", checked: false },
    { name: "ひとり親控除", amount: "", checked: false },
  ]);

  const checkedCount = items.filter(i => i.checked).length;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>確定申告控除チェック</span></nav>
      <h1 className="text-2xl font-bold mb-2">確定申告 控除チェックリスト</h1>
      <p className="text-muted mb-8">適用できる控除を一覧でチェック。見落としがちな控除を確認して節税しましょう。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-4 text-sm"><span className="font-bold">{checkedCount}</span>/{items.length} の控除をチェック済み</div>
        <div className="space-y-2">
          {items.map((item, i) => (
            <label key={item.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 cursor-pointer">
              <input type="checkbox" checked={item.checked} onChange={() => {
                const next = [...items];
                next[i] = { ...next[i], checked: !next[i].checked };
                setItems(next);
              }} className="rounded" />
              <span className={`text-sm flex-1 ${item.checked ? 'line-through text-muted' : ''}`}>{item.name}</span>
            </label>
          ))}
        </div>
        {checkedCount > 0 && (
          <div className="mt-4 bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-sm text-green-700 dark:text-green-300">
            {checkedCount}件の控除が適用できる可能性があります。確定申告ソフトで正確に計算しましょう。
          </div>
        )}
      </div>
      <AffiliateSection slug="tax-deduction-checker" category="日常ツール" />
      <RelatedTools currentSlug="tax-deduction-checker" category="日常ツール" />
    </div>
  );
}
