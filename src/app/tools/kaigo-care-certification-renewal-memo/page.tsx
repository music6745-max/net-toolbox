"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { KaigoToolCta } from "@/components/KaigoToolCta";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const TOOL_SLUG = "kaigo-care-certification-renewal-memo";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=certification_renewal";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/care-certification-renewal-before-check?utm_source=net-toolbox&utm_medium=referral&utm_campaign=certification_renewal";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8426543";

const changeLabels = {
  mobility: "移動・転倒・外出",
  meals: "食事・買い物・調理",
  bathing: "入浴・着替え",
  toiletSleep: "排泄・夜間・睡眠",
  communication: "もの忘れ・説明の理解",
  medicine: "通院・服薬",
  paperwork: "郵便物・支払い",
  familyBurden: "家族の対応が増えた",
} as const;

type ChangeKey = keyof typeof changeLabels;

const initialChanges: Record<ChangeKey, boolean> = {
  mobility: true,
  meals: false,
  bathing: true,
  toiletSleep: true,
  communication: true,
  medicine: true,
  paperwork: false,
  familyBurden: true,
};

function clampNumber(value: number, min: number, max: number) {
  if (Number.isNaN(value)) return min;
  return Math.min(Math.max(value, min), max);
}

export default function KaigoCareCertificationRenewalMemoPage() {
  const [changes, setChanges] = useState(initialChanges);
  const [previousPeriod, setPreviousPeriod] = useState("前回認定のころは一部見守りで生活できていた");
  const [recentChange, setRecentChange] = useState("最近は夜間の移動と服薬確認で家族の声かけが増えた");
  const [familyMembers, setFamilyMembers] = useState(2);
  const [familySupport, setFamilySupport] = useState("通院付き添い、買い物、服薬確認を家族で分担している");
  const [careManagerMemo, setCareManagerMemo] = useState("更新時期、認定調査の日程、事前に共有したいメモの扱いを確認したい");
  const [consultTarget, setConsultTarget] = useState("担当ケアマネジャー、市区町村の介護保険窓口");
  const [nextAction, setNextAction] = useState("今週中に最近困った場面を3件書き出し、家族へ共有する");

  const result = useMemo(() => {
    const selectedChanges = (Object.keys(changeLabels) as ChangeKey[])
      .filter((key) => changes[key])
      .map((key) => changeLabels[key]);

    const beforeAfter = [
      `前回認定のころ: ${previousPeriod}`,
      `最近の変化: ${recentChange}`,
      "できる日と難しい日を分けて、日付・場面・家族の対応を残す",
      "認定区分の予測ではなく、生活の変化を相談先へ伝える材料として整理する",
    ];

    const familyMemo = [
      `共有する家族人数: ${familyMembers}人`,
      `家族が担っている対応: ${familySupport}`,
      "近くの家族と遠方の家族で見えている場面を分ける",
      "通院、服薬、買い物、夜間対応、費用記録の担当を仮決めする",
      "次回確認日と、誰が何を見るかを残す",
    ];

    const consultMemo = [
      `相談先候補: ${consultTarget}`,
      `ケアマネ・窓口へ確認したいこと: ${careManagerMemo}`,
      "更新申請の時期、有効期間、必要書類、認定調査の日程を確認する",
      "メモを提出書類として扱うかどうかは、担当窓口の案内に従う",
      `次にやること: ${nextAction}`,
    ];

    const memoText = [
      "要介護認定 更新前メモ",
      "",
      "前回から変わったこと",
      ...(selectedChanges.length > 0 ? selectedChanges.map((item) => `- ${item}`) : ["- 未選択"]),
      "",
      "前回から最近までの変化",
      ...beforeAfter.map((item) => `- ${item}`),
      "",
      "家族が担っていること",
      ...familyMemo.map((item) => `- ${item}`),
      "",
      "ケアマネ・窓口へ確認したいこと",
      ...consultMemo.map((item) => `- ${item}`),
      "",
      "注意: このメモでは認定区分の予測、点数換算、結果への影響、申請代行、医療・介護判断はできません。更新手続きの詳細は市区町村窓口、担当ケアマネジャー、地域包括支援センターなどへ確認してください。保険証番号、口座番号、暗証番号、マイナンバーなどは入力しないでください。",
    ].join("\n");

    return { beforeAfter, consultMemo, familyMemo, memoText, selectedChanges };
  }, [
    careManagerMemo,
    changes,
    consultTarget,
    familyMembers,
    familySupport,
    nextAction,
    previousPeriod,
    recentChange,
  ]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">ツール</Link>
        <span className="mx-2">/</span>
        <span>要介護認定 更新前メモメーカー</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">認定更新前の家族共有メモ</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">要介護認定 更新前メモメーカー</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          要介護認定の更新が近づいたとき、前回からの生活変化、家族が担っている対応、ケアマネや窓口へ確認したいことを整理します。
          個人情報は保存せず、ブラウザ上で相談前メモだけを生成します。
        </p>
      </header>

      <section className="rounded-xl border border-card-border bg-card-bg p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <div>
              <p className="text-sm font-bold">前回から変わったこと</p>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {(Object.keys(changeLabels) as ChangeKey[]).map((key) => (
                  <label key={key} className="flex items-center gap-2 rounded-lg border border-card-border bg-background px-3 py-2 text-sm">
                    <input
                      type="checkbox"
                      checked={changes[key]}
                      onChange={(event) => setChanges((current) => ({ ...current, [key]: event.target.checked }))}
                    />
                    {changeLabels[key]}
                  </label>
                ))}
              </div>
            </div>

            <label className="block">
              <span className="mb-1 block text-sm font-medium">前回認定のころ</span>
              <input
                value={previousPeriod}
                onChange={(event) => setPreviousPeriod(event.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium">最近の変化</span>
              <input
                value={recentChange}
                onChange={(event) => setRecentChange(event.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <label className="block">
                <span className="mb-1 block text-sm font-medium">共有する家族人数</span>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={familyMembers}
                  onChange={(event) => setFamilyMembers(clampNumber(Number(event.target.value), 1, 10))}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1 block text-sm font-medium">家族が担っている対応</span>
                <input
                  value={familySupport}
                  onChange={(event) => setFamilySupport(event.target.value)}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-1 block text-sm font-medium">ケアマネ・窓口へ確認したいこと</span>
              <input
                value={careManagerMemo}
                onChange={(event) => setCareManagerMemo(event.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-sm font-medium">相談先候補</span>
                <input
                  value={consultTarget}
                  onChange={(event) => setConsultTarget(event.target.value)}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">次にやること</span>
                <input
                  value={nextAction}
                  onChange={(event) => setNextAction(event.target.value)}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">前回から最近までの変化</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {result.beforeAfter.map((item) => <li key={item}>・{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">家族が担っていること</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {result.familyMemo.map((item) => <li key={item}>・{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">確認したいこと</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {result.consultMemo.map((item) => <li key={item}>・{item}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <label className="mt-6 block">
          <span className="mb-2 block text-sm font-bold">更新前メモ</span>
          <textarea
            readOnly
            value={result.memoText}
            rows={18}
            className="min-h-[360px] w-full rounded-lg border border-card-border bg-background px-4 py-3 text-sm leading-relaxed"
          />
        </label>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          このツールは認定区分の予測や申請代行を行うものではありません。更新手続きの詳細は、市区町村窓口や担当ケアマネジャーへ確認してください。
        </p>
      </section>

      <KaigoToolCta
        toolSlug={TOOL_SLUG}
        title="更新前メモを記事とテンプレートへつなげる"
        description="無料ツールで生活の変化を整理したら、記事で考え方を確認し、継続記録はBOOTHのテンプレートへ転記できます。"
        links={[
          { label: "親のこと整理ナビで診断する", href: KAIGO_NAVI_URL, eventName: "kaigo_navi_click", position: "certification_renewal", variant: "primary" },
          { label: "認定更新前の記事を読む", href: GUIDE_URL, eventName: "guide_click", position: "certification_renewal_guide" },
          { label: "要介護認定 更新前テンプレートを見る", href: BOOTH_URL, eventName: "booth_click", position: "certification_renewal_template" },
        ]}
      />

      <ToolFAQSection
        toolName="要介護認定 更新前メモメーカー"
        howTo={[
          "前回から変わった生活場面を選びます",
          "前回認定のころ、最近の変化、家族が担っている対応を入力します",
          "生成された更新前メモを、家族共有やケアマネ・市区町村窓口への相談前整理に使います",
        ]}
        faqs={[
          {
            question: "このツールで認定区分を予測できますか？",
            answer:
              "予測できません。認定区分、点数換算、結果への影響は判断できません。生活の変化を家族で整理し、相談先へ伝えやすくするためのメモです。",
          },
          {
            question: "更新手続きの期限や必要書類も分かりますか？",
            answer:
              "分かりません。更新申請の期限、有効期間、必要書類、認定調査の日程は市区町村窓口または担当ケアマネジャーへ確認してください。",
          },
          {
            question: "家族が対応していることも書いてよいですか？",
            answer:
              "書いてよいです。通院付き添い、買い物、服薬確認、夜間の見守りなど、家族が実際に担っていることを頻度と場面で残すと共有しやすくなります。",
          },
          {
            question: "個人情報を入力してよいですか？",
            answer:
              "入力しないでください。氏名、住所、保険証番号、口座番号、暗証番号、マイナンバー、詳しい医療情報などはこのツールには入れず、必要に応じて手元資料で管理してください。",
          },
        ]}
      />

      <AffiliateSection slug={TOOL_SLUG} category="日常ツール" />
      <RelatedTools currentSlug={TOOL_SLUG} category="日常ツール" />
    </div>
  );
}
