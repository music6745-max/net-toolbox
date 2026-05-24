"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { KaigoToolCta } from "@/components/KaigoToolCta";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const TOOL_SLUG = "kaigo-emergency-info";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=kaigo_emergency_info";

export default function KaigoEmergencyInfoPage() {
  const [livingAlone, setLivingAlone] = useState(true);
  const [medication, setMedication] = useState(true);
  const [hasCar, setHasCar] = useState(false);
  const [petOrPlants, setPetOrPlants] = useState(false);

  const sections = useMemo(() => {
    const base = [
      { title: "基本連絡先", items: ["家族の緊急連絡先", "かかりつけ医", "薬局", "ケアマネ・地域包括支援センター"] },
      { title: "医療・介護", items: ["保険証・介護保険証の保管場所", "既往歴を確認できる資料", "通院予定", "介護サービス利用状況"] },
      { title: "お金と支払い", items: ["入院費の支払い方法", "年金・口座の確認先", "公共料金・家賃・保険料の支払い状況"] },
    ];
    return [
      ...base,
      ...(medication ? [{ title: "服薬", items: ["薬局の説明書", "お薬手帳", "服薬時間", "飲み忘れ時の確認先"] }] : []),
      ...(livingAlone ? [{ title: "一人暮らし対応", items: ["鍵の所在", "近隣連絡先", "宅配・新聞・郵便", "冷蔵庫や火元の確認"] }] : []),
      ...(hasCar ? [{ title: "車・免許", items: ["車の鍵", "自動車保険", "駐車場", "免許更新・返納の相談状況"] }] : []),
      ...(petOrPlants ? [{ title: "家の世話", items: ["ペットの世話", "植物・庭", "ゴミ出し", "定期購入や配達"] }] : []),
    ];
  }, [livingAlone, medication, hasCar, petOrPlants]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">ツール</Link>
        <span className="mx-2">/</span>
        <span>緊急連絡先・服薬メモ生成</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">もしもの時の確認項目</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">親の緊急連絡先・服薬メモ生成</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          救急搬送、急な入院、連絡不能時に家族が探す項目を整理します。実際の個人情報は入力せず、手元で記入するための項目だけを作ります。
        </p>
      </header>

      <section className="rounded-xl border border-card-border bg-card-bg p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {[
            ["medication", "服薬・通院がある", medication, setMedication],
            ["livingAlone", "親が一人暮らし", livingAlone, setLivingAlone],
            ["hasCar", "車・免許・駐車場がある", hasCar, setHasCar],
            ["petOrPlants", "ペット・植物・家の世話がある", petOrPlants, setPetOrPlants],
          ].map(([key, label, checked, setter]) => (
            <label key={key as string} className="flex items-center gap-3 rounded-lg border border-card-border bg-background p-3 text-sm">
              <input
                type="checkbox"
                checked={checked as boolean}
                onChange={(e) => (setter as (value: boolean) => void)(e.target.checked)}
              />
              <span>{label as string}</span>
            </label>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">{section.title}</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary">□</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <KaigoToolCta
        toolSlug={TOOL_SLUG}
        title="実際の連絡先と服薬情報は専用ノートへ"
        description="このページは入力欄を持たない安全な確認用です。実際の連絡先、服薬、保険、口座などは、手元のテンプレートに記入して家族内で共有してください。"
        links={[
          { label: "親のこと整理ナビで診断する", href: KAIGO_NAVI_URL, eventName: "kaigo_navi_click", position: "emergency_tool", variant: "primary" },
          { label: "親のもしも準備ノートを見る", href: "https://kaigo-okane.booth.pm/items/8382816", eventName: "booth_click", position: "emergency_note" },
          { label: "はじめの3点セットを見る", href: "https://kaigo-okane.booth.pm/items/8340473", eventName: "booth_click", position: "starter_set" },
        ]}
      />

      <ToolFAQSection
        toolName="親の緊急連絡先・服薬メモ"
        howTo={[
          "親の状況に近い項目を選ぶ",
          "表示された確認項目を印刷やメモに転記する",
          "実際の個人情報はこのページに入力せず、家族内で管理する",
        ]}
        faqs={[
          { question: "実際の電話番号や薬名を入力できますか？", answer: "入力しないでください。このツールは項目生成だけを行い、個人情報を扱わない設計です。" },
          { question: "最低限まとめるべき項目は何ですか？", answer: "緊急連絡先、かかりつけ医、薬局、保険証の所在、服薬、お金の支払い方法です。" },
          { question: "一人暮らしの場合に追加すべき項目はありますか？", answer: "鍵、近隣連絡先、宅配、新聞、公共料金、冷蔵庫や火元の確認先を追加すると安心です。" },
          { question: "このメモは医療機関への提出用ですか？", answer: "提出用ではなく家族の確認用です。医療機関へ渡す資料は病院の指示に従ってください。" },
        ]}
      />

      <AffiliateSection slug={TOOL_SLUG} category="日常ツール" />
      <RelatedTools currentSlug={TOOL_SLUG} category="日常ツール" />
    </div>
  );
}
