"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { KaigoToolCta } from "@/components/KaigoToolCta";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const TOOL_SLUG = "kaigo-discharge-home-return-plan";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=discharge_home_return";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/hospital-discharge-home-return-family-checklist?utm_source=net-toolbox&utm_medium=referral&utm_campaign=discharge_home_return";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8340434";

const supportLabels = {
  outpatient: "次回受診・通院付き添い",
  medicine: "服薬確認",
  meals: "食事・買い物",
  bathing: "入浴・着替え",
  toilet: "トイレ・夜間動線",
  service: "介護サービス再開・調整",
  payment: "入院費・領収書・手続き",
  familyShare: "家族への申し送り",
} as const;

type SupportKey = keyof typeof supportLabels;

const initialSupport: Record<SupportKey, boolean> = {
  outpatient: true,
  medicine: true,
  meals: true,
  bathing: false,
  toilet: true,
  service: true,
  payment: true,
  familyShare: true,
};

function clampNumber(value: number, min: number, max: number) {
  if (Number.isNaN(value)) return min;
  return Math.min(Math.max(value, min), max);
}

export default function KaigoDischargeHomeReturnPlanPage() {
  const [support, setSupport] = useState(initialSupport);
  const [daysUntilDischarge, setDaysUntilDischarge] = useState(7);
  const [familyMembers, setFamilyMembers] = useState(2);
  const [firstWeekVisits, setFirstWeekVisits] = useState(3);
  const [nextOutpatient, setNextOutpatient] = useState("退院後1週間以内に次回受診予定を確認");
  const [medicinePlan, setMedicinePlan] = useState("薬局の説明書を家族で確認し、飲む時間だけ共有する");
  const [homeConcern, setHomeConcern] = useState("段差、トイレ、夜間の移動、食事準備が不安");
  const [servicePlan, setServicePlan] = useState("ケアマネへ退院日と在宅サービス再開予定を確認する");

  const result = useMemo(() => {
    const selectedSupport = (Object.keys(supportLabels) as SupportKey[])
      .filter((key) => support[key])
      .map((key) => supportLabels[key]);

    const beforeDischarge = [
      `退院までの目安: ${daysUntilDischarge}日`,
      `家族で動ける人数: ${familyMembers}人`,
      `退院後1週間の訪問目安: ${firstWeekVisits}回`,
      `次回受診: ${nextOutpatient}`,
      `服薬確認: ${medicinePlan}`,
      `自宅環境の不安: ${homeConcern}`,
      `サービス予定: ${servicePlan}`,
    ];

    const familyRoles = [
      "退院当日の迎えと支払いを担当する人を決める",
      "次回受診の付き添い、予約票、紹介状の保管担当を決める",
      "薬の説明書を保管し、家族が確認する範囲を決める",
      "買い物、食事、夜間連絡、費用記録を別々に担当する",
      "退院後1週間で再確認する日を家族で決める",
    ];

    const questions = [
      "退院後に注意して見る生活場面は何か",
      "次回受診までに家族が記録しておくことは何か",
      "介護サービス、福祉用具、訪問看護などで確認すべき窓口はどこか",
      "薬の飲み方で迷った時、どの薬局または医療機関へ確認するか",
      "入院費、領収書、保険や公的制度の確認先はどこか",
    ];

    const memoText = [
      "退院後の在宅復帰メモ",
      "",
      "家族が確認したいこと",
      ...(selectedSupport.length > 0 ? selectedSupport.map((item) => `- ${item}`) : ["- 未選択"]),
      "",
      "退院前に整理すること",
      ...beforeDischarge.map((item) => `- ${item}`),
      "",
      "家族の役割案",
      ...familyRoles.map((item) => `- ${item}`),
      "",
      "病院・薬局・ケアマネへ確認したいこと",
      ...questions.map((item) => `- ${item}`),
      "",
      "注意: 退院可否、医療方針、服薬変更、介護サービスの要否はこのメモで判断しないでください。病院、薬局、ケアマネ、自治体などの窓口へ確認してください。保険証番号、口座番号、暗証番号、詳しい病名などの個人情報は入力しないでください。",
    ].join("\n");

    return { beforeDischarge, familyRoles, memoText, questions, selectedSupport };
  }, [
    daysUntilDischarge,
    familyMembers,
    firstWeekVisits,
    homeConcern,
    medicinePlan,
    nextOutpatient,
    servicePlan,
    support,
  ]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">ツール</Link>
        <span className="mx-2">/</span>
        <span>退院後の在宅復帰メモメーカー</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">退院前後の家族共有メモ</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">退院後の在宅復帰メモメーカー</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          親が退院して自宅へ戻る前に、通院、服薬、自宅環境、介護サービス、費用手続き、家族分担を整理します。
          個人情報は保存せず、ブラウザ上で確認メモだけを生成します。
        </p>
      </header>

      <section className="rounded-xl border border-card-border bg-card-bg p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <div>
              <p className="text-sm font-bold">家族が確認したいこと</p>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {(Object.keys(supportLabels) as SupportKey[]).map((key) => (
                  <label key={key} className="flex items-center gap-2 rounded-lg border border-card-border bg-background px-3 py-2 text-sm">
                    <input
                      type="checkbox"
                      checked={support[key]}
                      onChange={(event) => setSupport((current) => ({ ...current, [key]: event.target.checked }))}
                    />
                    {supportLabels[key]}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <label className="block">
                <span className="mb-1 block text-sm font-medium">退院までの日数</span>
                <input
                  type="number"
                  min={0}
                  max={60}
                  value={daysUntilDischarge}
                  onChange={(event) => setDaysUntilDischarge(clampNumber(Number(event.target.value), 0, 60))}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">動ける家族人数</span>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={familyMembers}
                  onChange={(event) => setFamilyMembers(clampNumber(Number(event.target.value), 1, 10))}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">退院後1週間の訪問回数</span>
                <input
                  type="number"
                  min={0}
                  max={14}
                  value={firstWeekVisits}
                  onChange={(event) => setFirstWeekVisits(clampNumber(Number(event.target.value), 0, 14))}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-1 block text-sm font-medium">次回受診</span>
              <input
                value={nextOutpatient}
                onChange={(event) => setNextOutpatient(event.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium">服薬確認</span>
              <input
                value={medicinePlan}
                onChange={(event) => setMedicinePlan(event.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium">自宅環境の不安</span>
              <input
                value={homeConcern}
                onChange={(event) => setHomeConcern(event.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium">介護サービス予定</span>
              <input
                value={servicePlan}
                onChange={(event) => setServicePlan(event.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">退院前に整理すること</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {result.beforeDischarge.map((item) => <li key={item}>・{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">家族の役割案</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {result.familyRoles.map((item) => <li key={item}>・{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">確認したいこと</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {result.questions.map((item) => <li key={item}>・{item}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <label className="mt-6 block">
          <span className="mb-2 block text-sm font-bold">家族共有用メモ</span>
          <textarea
            readOnly
            value={result.memoText}
            rows={18}
            className="min-h-[360px] w-full rounded-lg border border-card-border bg-background px-4 py-3 text-sm leading-relaxed"
          />
        </label>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          退院可否、医療方針、服薬変更、介護サービスの要否はこのツールでは判断できません。病院、薬局、ケアマネ、自治体などで確認してください。
        </p>
      </section>

      <KaigoToolCta
        toolSlug={TOOL_SLUG}
        title="在宅復帰メモを記事とテンプレートへつなげる"
        description="無料ツールで退院後の確認項目を整理したら、記事で考え方を確認し、継続的に残す内容はBOOTHのテンプレートへ転記できます。"
        links={[
          { label: "親のこと整理ナビで診断する", href: KAIGO_NAVI_URL, eventName: "kaigo_navi_click", position: "discharge_home_return", variant: "primary" },
          { label: "在宅復帰前の記事を読む", href: GUIDE_URL, eventName: "guide_click", position: "discharge_home_return_guide" },
          { label: "入院・退院・在宅復帰テンプレートを見る", href: BOOTH_URL, eventName: "booth_click", position: "discharge_home_return_template" },
        ]}
      />

      <ToolFAQSection
        toolName="退院後の在宅復帰メモメーカー"
        howTo={[
          "退院後に家族が確認したい項目を選びます",
          "退院までの日数、通院、服薬、自宅環境、介護サービス予定を入力します",
          "生成された家族共有用メモを、家族会議や病院・ケアマネへの相談前メモとして確認します",
        ]}
        faqs={[
          {
            question: "このツールで退院できるか判断できますか？",
            answer:
              "判断できません。退院可否や医療方針は病院へ確認してください。このツールは、家族が退院後の生活準備と確認事項を整理するためのメモです。",
          },
          {
            question: "薬の飲み方を管理できますか？",
            answer:
              "薬の内容や飲み方の判断はできません。薬局や病院から受け取った説明をもとに、家族が確認する範囲や質問したいことを整理する用途に使ってください。",
          },
          {
            question: "介護サービスの必要性を決められますか？",
            answer:
              "決められません。サービス利用や福祉用具の要否は、ケアマネ、地域包括支援センター、病院の相談員などへ確認してください。",
          },
          {
            question: "個人情報を入力してよいですか？",
            answer:
              "入力しないでください。保険証番号、口座番号、暗証番号、詳しい病名などは扱わず、確認先や家族の担当だけを整理してください。",
          },
        ]}
      />

      <AffiliateSection slug={TOOL_SLUG} category="日常ツール" />
      <RelatedTools currentSlug={TOOL_SLUG} category="日常ツール" />
    </div>
  );
}
