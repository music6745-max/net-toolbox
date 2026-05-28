"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { KaigoToolCta } from "@/components/KaigoToolCta";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const TOOL_SLUG = "kaigo-day-service-prep-memo";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=day_service_prep";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/day-service-before-use-family-checklist?utm_source=net-toolbox&utm_medium=referral&utm_campaign=day_service_prep";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8426705";

const prepLabels = {
  clothes: "着替え・タオル・連絡帳",
  medicine: "薬・お薬手帳",
  meals: "食事・水分・むせ",
  bathing: "入浴・着替え",
  toilet: "排泄・トイレ誘導",
  pickup: "送迎時間・乗降場所",
  fatigue: "疲れやすい時間",
  communication: "声かけ・呼び方・本人の好み",
  emergencyContact: "緊急連絡先",
  absenceRules: "欠席連絡・持ち込みルール",
} as const;

type PrepKey = keyof typeof prepLabels;

const initialPrep: Record<PrepKey, boolean> = {
  clothes: true,
  medicine: true,
  meals: true,
  bathing: true,
  toilet: true,
  pickup: true,
  fatigue: true,
  communication: false,
  emergencyContact: true,
  absenceRules: true,
};

export default function KaigoDayServicePrepMemoPage() {
  const [prepItems, setPrepItems] = useState(initialPrep);
  const [useSchedule, setUseSchedule] = useState("毎週火曜・金曜、朝9時ごろ送迎予定");
  const [officeName, setOfficeName] = useState("利用予定のデイサービス事業所");
  const [familyMembers, setFamilyMembers] = useState("本人、長女、ケアマネジャー");
  const [healthMemo, setHealthMemo] = useState("昼食後に疲れやすい。水分は声かけしないと少なくなりやすい。");
  const [routineMemo, setRoutineMemo] = useState("短い説明のほうが伝わりやすい。入浴後は冷えないよう上着を確認したい。");
  const [careManagerMemo, setCareManagerMemo] = useState("送迎範囲、薬の預け方、欠席連絡、連絡帳の使い方を確認したい。");
  const [emergencyContact, setEmergencyContact] = useState("まず長女、つながらない場合は長男へ連絡");
  const [nextAction, setNextAction] = useState("事業所へ持ち物表と送迎時刻を確認する");

  const result = useMemo(() => {
    const selectedItems = (Object.keys(prepLabels) as PrepKey[])
      .filter((key) => prepItems[key])
      .map((key) => prepLabels[key]);

    const belongings = [
      ...selectedItems,
      "名前記入が必要なもの、事業所で借りられるもの、持ち込みできないものを分ける",
      "薬やお薬手帳の扱いは、事業所と担当ケアマネジャーの案内に従う",
    ];

    const handoff = [
      `本人の最近の様子: ${healthMemo}`,
      `生活リズム・声かけ: ${routineMemo}`,
      `緊急連絡: ${emergencyContact}`,
      "診断や評価ではなく、家族が普段見ている事実として短く伝える",
    ];

    const familyCheck = [
      `利用予定: ${useSchedule}`,
      `事業所名: ${officeName}`,
      `共有する人: ${familyMembers}`,
      `事業所・ケアマネへ確認したいこと: ${careManagerMemo}`,
      `次にやること: ${nextAction}`,
    ];

    const memoText = [
      "デイサービス利用前メモ",
      "",
      "持ち物・当日準備",
      ...belongings.map((item) => `- ${item}`),
      "",
      "事業所への申し送り",
      ...handoff.map((item) => `- ${item}`),
      "",
      "家族が確認すること",
      ...familyCheck.map((item) => `- ${item}`),
      "",
      "注意: このメモではデイサービスの受け入れ可否、送迎範囲、医療対応、薬の管理方法、介護サービスの判断、契約内容の確認はできません。利用条件、費用、持ち込みルール、薬の扱いは担当ケアマネジャー、利用予定事業所、市区町村窓口などへ確認してください。保険証番号、口座番号、暗証番号、マイナンバーなどは入力しないでください。",
    ].join("\n");

    return { belongings, familyCheck, handoff, memoText };
  }, [
    careManagerMemo,
    emergencyContact,
    familyMembers,
    healthMemo,
    nextAction,
    officeName,
    prepItems,
    routineMemo,
    useSchedule,
  ]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">ツール</Link>
        <span className="mx-2">/</span>
        <span>デイサービス利用前メモメーカー</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">デイサービス前の家族共有メモ</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">デイサービス利用前メモメーカー</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          デイサービス利用前に、持ち物、送迎、事業所への申し送り、緊急連絡先、確認事項を整理します。
          個人情報は保存せず、ブラウザ上で相談前メモだけを生成します。
        </p>
      </header>

      <section className="rounded-xl border border-card-border bg-card-bg p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <div>
              <p className="text-sm font-bold">準備・確認したい項目</p>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {(Object.keys(prepLabels) as PrepKey[]).map((key) => (
                  <label key={key} className="flex items-center gap-2 rounded-lg border border-card-border bg-background px-3 py-2 text-sm">
                    <input
                      type="checkbox"
                      checked={prepItems[key]}
                      onChange={(event) => setPrepItems((current) => ({ ...current, [key]: event.target.checked }))}
                    />
                    {prepLabels[key]}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-sm font-medium">利用予定</span>
                <input
                  value={useSchedule}
                  onChange={(event) => setUseSchedule(event.target.value)}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">事業所名</span>
                <input
                  value={officeName}
                  onChange={(event) => setOfficeName(event.target.value)}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-1 block text-sm font-medium">共有する人</span>
              <input
                value={familyMembers}
                onChange={(event) => setFamilyMembers(event.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium">本人の最近の様子</span>
              <input
                value={healthMemo}
                onChange={(event) => setHealthMemo(event.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium">生活リズム・声かけ</span>
              <input
                value={routineMemo}
                onChange={(event) => setRoutineMemo(event.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium">事業所・ケアマネへ確認したいこと</span>
              <input
                value={careManagerMemo}
                onChange={(event) => setCareManagerMemo(event.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-sm font-medium">緊急連絡</span>
                <input
                  value={emergencyContact}
                  onChange={(event) => setEmergencyContact(event.target.value)}
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
              <h2 className="text-base font-bold">持ち物・当日準備</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {result.belongings.map((item) => <li key={item}>・{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">事業所への申し送り</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {result.handoff.map((item) => <li key={item}>・{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">家族が確認すること</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {result.familyCheck.map((item) => <li key={item}>・{item}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <label className="mt-6 block">
          <span className="mb-2 block text-sm font-bold">デイサービス利用前メモ</span>
          <textarea
            readOnly
            value={result.memoText}
            rows={18}
            className="min-h-[360px] w-full rounded-lg border border-card-border bg-background px-4 py-3 text-sm leading-relaxed"
          />
        </label>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          このツールは事業所の受け入れ可否、送迎範囲、医療対応、薬の扱い、介護サービスの判断を行うものではありません。利用条件や持ち込みルールは、担当ケアマネジャーや利用予定事業所へ確認してください。
        </p>
      </section>

      <KaigoToolCta
        toolSlug={TOOL_SLUG}
        title="デイサービス前メモを記事とテンプレートへつなげる"
        description="無料ツールで持ち物と申し送りを整理したら、記事で考え方を確認し、継続記録はBOOTHのテンプレートへ転記できます。"
        links={[
          { label: "親のこと整理ナビで診断する", href: KAIGO_NAVI_URL, eventName: "kaigo_navi_click", position: "day_service", variant: "primary" },
          { label: "デイサービス前の記事を読む", href: GUIDE_URL, eventName: "guide_click", position: "day_service_guide" },
          { label: "デイサービス利用前テンプレートを見る", href: BOOTH_URL, eventName: "booth_click", position: "day_service_template" },
        ]}
      />

      <ToolFAQSection
        toolName="デイサービス利用前メモメーカー"
        howTo={[
          "準備・確認したい項目を選びます",
          "利用予定、本人の様子、事業所へ確認したいことを入力します",
          "生成されたメモを、家族共有や事業所・ケアマネへの確認前整理に使います",
        ]}
        faqs={[
          {
            question: "このツールでデイサービスの利用可否を判断できますか？",
            answer:
              "判断できません。受け入れ可否、送迎範囲、医療対応、薬の扱い、持ち込みルール、費用や契約内容は事業所や制度によって異なります。担当ケアマネジャーや利用予定事業所へ確認してください。",
          },
          {
            question: "事業所への申し送りには何を書けばよいですか？",
            answer:
              "食事、水分、入浴、排泄、疲れやすい時間、声かけ、緊急連絡など、当日の安全と生活リズムに関係する事実を短く書きます。",
          },
          {
            question: "薬や医療情報も入力してよいですか？",
            answer:
              "詳しい医療情報、保険証番号、口座番号、暗証番号、マイナンバーなどは入力しないでください。薬の預け方や服薬確認は、事業所や担当者の案内に従ってください。",
          },
          {
            question: "定期利用の記録にも使えますか？",
            answer:
              "使えます。利用後の疲れ、持ち物、入浴や食事の様子、次回確認することを残しておくと、毎回の準備漏れを減らしやすくなります。",
          },
        ]}
      />

      <AffiliateSection slug={TOOL_SLUG} category="日常ツール" />
      <RelatedTools currentSlug={TOOL_SLUG} category="日常ツール" />
    </div>
  );
}
