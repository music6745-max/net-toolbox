"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

interface Item {
  id: string;
  label: string;
  description: string;
  estimate: number; // 想定節税額（年）
}

const items: Item[] = [
  { id: "furusato", label: "ふるさと納税", description: "実質2,000円で返礼品が貰える。所得に応じて上限あり。", estimate: 30000 },
  { id: "ideco", label: "iDeCo（個人型確定拠出年金）", description: "掛金が全額所得控除。月23,000円拠出で年間約55,000円節税。", estimate: 55000 },
  { id: "nisa", label: "新NISA", description: "運用益が非課税。年間最大360万円まで投資可能。", estimate: 20000 },
  { id: "medical", label: "医療費控除", description: "年間10万円超の医療費が控除対象。", estimate: 15000 },
  { id: "seimei", label: "生命保険料控除", description: "最大12万円の所得控除。", estimate: 24000 },
  { id: "jishin", label: "地震保険料控除", description: "最大5万円の所得控除。", estimate: 10000 },
  { id: "kyoeki", label: "寄付金控除", description: "認定NPO等への寄付が所得控除に。", estimate: 5000 },
  { id: "fuyo", label: "扶養控除", description: "16歳以上の扶養親族がいる場合。", estimate: 76000 },
  { id: "shogai", label: "障害者控除", description: "本人・配偶者・扶養親族が障害者の場合。", estimate: 27000 },
  { id: "kibetu", label: "ひとり親控除・寡婦控除", description: "条件を満たすひとり親・寡婦。", estimate: 35000 },
  { id: "small", label: "小規模企業共済", description: "フリーランス・経営者の退職金制度。掛金全額控除。", estimate: 100000 },
  { id: "house", label: "住宅ローン控除", description: "住宅ローン残高の0.7%が13年間税額控除。", estimate: 200000 },
];

export default function Page() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => setChecked({ ...checked, [id]: !checked[id] });
  const totalChecked = items.filter(i => checked[i.id]).reduce((s, i) => s + i.estimate, 0);
  const totalUnchecked = items.filter(i => !checked[i.id]).reduce((s, i) => s + i.estimate, 0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>節税チェックリスト</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">節税チェックリスト</h1>
      <p className="text-muted mb-8">所得控除を網羅的にチェック。あなたが見落としている節税策がないか確認できます。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-3">
          {items.map(item => (
            <label key={item.id} className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-background/50">
              <input type="checkbox" checked={!!checked[item.id]} onChange={() => toggle(item.id)} className="mt-1 w-5 h-5" />
              <div className="flex-1">
                <div className="font-semibold flex items-center justify-between flex-wrap gap-2">
                  <span>{item.label}</span>
                  <span className="text-xs text-primary">想定節税: ¥{item.estimate.toLocaleString()}/年</span>
                </div>
                <div className="text-xs text-muted mt-1">{item.description}</div>
              </div>
            </label>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">活用済の節税額（合計）</div>
            <div className="text-xl font-bold text-primary">¥{totalChecked.toLocaleString()}</div>
          </div>
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">未活用の節税ポテンシャル</div>
            <div className="text-xl font-bold">¥{totalUnchecked.toLocaleString()}</div>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">関連ガイド</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/guide/tax-software-comparison" className="block bg-card-bg border border-card-border rounded-lg p-4 hover:border-primary transition-colors">
            <div className="font-semibold mb-1">確定申告ソフト比較</div>
            <div className="text-xs text-muted">控除を漏れなく申告するには</div>
          </Link>
          <Link href="/guide/furusato-tax-comparison" className="block bg-card-bg border border-card-border rounded-lg p-4 hover:border-primary transition-colors">
            <div className="font-semibold mb-1">ふるさと納税サイト比較</div>
            <div className="text-xs text-muted">主要ポータルを徹底比較</div>
          </Link>
        </div>
      </section>

      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>※ 想定節税額は一般的な目安です。実際の節税効果は所得・家族構成により変わります。</p></div></section>
      <AffiliateSection slug="smart-tax-saving-checker" category="日常ツール" />
      <RelatedTools currentSlug="smart-tax-saving-checker" category="日常ツール" />
    </div>
  );
}
