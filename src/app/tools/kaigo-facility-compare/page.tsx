"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { KaigoToolCta } from "@/components/KaigoToolCta";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const TOOL_SLUG = "kaigo-facility-compare";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=kaigo_facility_compare";

type Facility = {
  label: string;
  initial: number;
  monthly: number;
  care: number;
  meal: number;
  other: number;
};

const initialFacilities: Facility[] = [
  { label: "候補A", initial: 300000, monthly: 125000, care: 25000, meal: 45000, other: 15000 },
  { label: "候補B", initial: 0, monthly: 165000, care: 30000, meal: 52000, other: 20000 },
  { label: "候補C", initial: 600000, monthly: 98000, care: 28000, meal: 42000, other: 18000 },
];

function yen(value: number) {
  return `¥${Math.round(value).toLocaleString()}`;
}

export default function KaigoFacilityComparePage() {
  const [years, setYears] = useState(3);
  const [facilities, setFacilities] = useState<Facility[]>(initialFacilities);

  const results = useMemo(
    () =>
      facilities.map((facility) => {
        const monthlyTotal = facility.monthly + facility.care + facility.meal + facility.other;
        return {
          ...facility,
          monthlyTotal,
          periodTotal: facility.initial + monthlyTotal * years * 12,
        };
      }),
    [facilities, years],
  );
  const best = results.reduce((min, item) => (item.periodTotal < min.periodTotal ? item : min), results[0]);

  const updateFacility = (index: number, key: keyof Facility, value: string | number) => {
    setFacilities((current) =>
      current.map((facility, i) => (i === index ? { ...facility, [key]: value } : facility)),
    );
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">ツール</Link>
        <span className="mx-2">/</span>
        <span>施設見学・費用比較表メーカー</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">施設選びの費用比較</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">施設見学・費用比較表メーカー</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          入居一時金、月額費、介護費、食費、その他費用を候補ごとに入力し、月額合計と指定年数の総額を比較します。
        </p>
      </header>

      <section className="rounded-xl border border-card-border bg-card-bg p-5 sm:p-6">
        <label className="mb-5 block max-w-xs">
          <span className="mb-1 block text-sm font-medium">比較期間</span>
          <select
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
          >
            <option value={1}>1年</option>
            <option value={3}>3年</option>
            <option value={5}>5年</option>
          </select>
        </label>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {facilities.map((facility, index) => (
            <article key={facility.label} className="rounded-lg border border-card-border bg-background p-4">
              <input
                value={facility.label}
                onChange={(e) => updateFacility(index, "label", e.target.value)}
                className="mb-3 w-full rounded-md border border-card-border px-3 py-2 text-sm font-bold"
                aria-label="候補名"
              />
              {[
                ["initial", "入居一時金"],
                ["monthly", "家賃・管理費/月"],
                ["care", "介護サービス費/月"],
                ["meal", "食費/月"],
                ["other", "その他/月"],
              ].map(([key, label]) => (
                <label key={key} className="mb-3 block">
                  <span className="mb-1 block text-xs text-muted">{label}</span>
                  <input
                    type="number"
                    min={0}
                    step={1000}
                    value={facility[key as keyof Facility]}
                    onChange={(e) => updateFacility(index, key as keyof Facility, Number(e.target.value))}
                    className="w-full rounded-md border border-card-border px-3 py-2 text-sm"
                  />
                </label>
              ))}
            </article>
          ))}
        </div>

        <div className="mt-6 overflow-x-auto rounded-lg border border-card-border">
          <table className="min-w-full text-sm">
            <thead className="bg-background">
              <tr>
                <th className="px-4 py-3 text-left">候補</th>
                <th className="px-4 py-3 text-right">月額合計</th>
                <th className="px-4 py-3 text-right">{years}年総額</th>
              </tr>
            </thead>
            <tbody>
              {results.map((item) => (
                <tr key={item.label} className="border-t border-card-border">
                  <td className="px-4 py-3 font-bold">{item.label}</td>
                  <td className="px-4 py-3 text-right">{yen(item.monthlyTotal)}</td>
                  <td className="px-4 py-3 text-right font-bold text-primary">{yen(item.periodTotal)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 rounded-lg bg-primary/10 p-4 text-sm leading-relaxed">
          この条件では <strong>{best.label}</strong> が{years}年総額で最も低くなります。実際の判断では、医療対応、面会のしやすさ、退去条件、追加費用も確認してください。
        </p>
      </section>

      <KaigoToolCta
        toolSlug={TOOL_SLUG}
        title="見学メモと費用比較をテンプレートに残す"
        description="施設選びは費用だけでなく、医療対応、面会、退去条件、家族の通いやすさも比較軸に入れる必要があります。"
        links={[
          { label: "親のこと整理ナビで診断する", href: KAIGO_NAVI_URL, eventName: "kaigo_navi_click", position: "facility_tool", variant: "primary" },
          { label: "施設選び重点パックを見る", href: "https://kaigo-okane.booth.pm/items/8340642", eventName: "booth_click", position: "facility_pack" },
          { label: "総合パックを見る", href: "https://kaigo-okane.booth.pm/items/8383441", eventName: "booth_click", position: "full_pack" },
        ]}
      />

      <ToolFAQSection
        toolName="施設見学・費用比較表メーカー"
        howTo={[
          "候補ごとに入居一時金と月額費用を入力する",
          "介護サービス費、食費、その他費用を分けて入力する",
          "1年、3年、5年の総額を見て、家族で比較する",
        ]}
        faqs={[
          { question: "月額費だけ見れば十分ですか？", answer: "不十分です。入居一時金、退去条件、医療対応、追加サービス費、通いやすさも合わせて比較してください。" },
          { question: "食費や介護費は固定ですか？", answer: "施設や要介護度、利用サービスによって変わります。見学時に月額の内訳と変動条件を確認してください。" },
          { question: "一番安い施設を選ぶべきですか？", answer: "費用は重要ですが、医療対応、本人の生活環境、家族の通いやすさも判断材料です。金額は比較の入口として使ってください。" },
          { question: "この表を施設に提出できますか？", answer: "提出用ではなく家族内の比較用です。正式な見積もりは各施設から受け取ってください。" },
        ]}
      />

      <AffiliateSection slug={TOOL_SLUG} category="日常ツール" />
      <RelatedTools currentSlug={TOOL_SLUG} category="日常ツール" />
    </div>
  );
}
