"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { KaigoToolCta } from "@/components/KaigoToolCta";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const TOOL_SLUG = "kaigo-short-stay-prep-memo";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=short_stay_prep";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/short-stay-before-use-family-checklist?utm_source=net-toolbox&utm_medium=referral&utm_campaign=short_stay_prep";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8426647";

const prepLabels = {
  clothes: "衣類・下着・上着",
  toiletries: "洗面用品・タオル",
  medicine: "薬・お薬手帳",
  meals: "食事・水分・むせ",
  toilet: "排泄・夜間トイレ",
  sleep: "睡眠・不安になりやすい時間",
  communication: "声かけ・呼び方・本人の好み",
  pickup: "送迎時間・乗降場所",
  emergencyContact: "緊急連絡先",
  facilityRules: "持ち込みルール・洗濯物の扱い",
} as const;

type PrepKey = keyof typeof prepLabels;

const initialPrep: Record<PrepKey, boolean> = {
  clothes: true,
  toiletries: true,
  medicine: true,
  meals: true,
  toilet: true,
  sleep: true,
  communication: false,
  pickup: true,
  emergencyContact: true,
  facilityRules: true,
};

export default function KaigoShortStayPrepMemoPage() {
  const [prepItems, setPrepItems] = useState(initialPrep);
  const [stayDates, setStayDates] = useState("来週火曜から1泊2日");
  const [facilityName, setFacilityName] = useState("利用予定のショートステイ事業所");
  const [familyMembers, setFamilyMembers] = useState("本人、長女、ケアマネジャー");
  const [healthMemo, setHealthMemo] = useState("最近は夜間トイレの立ち上がりが不安。薬は朝夕に声かけが必要。");
  const [routineMemo, setRoutineMemo] = useState("朝はゆっくり説明すると落ち着く。水分は声かけしないと少なくなりやすい。");
  const [careManagerMemo, setCareManagerMemo] = useState("持ち込みルール、薬の預け方、急変時の連絡方法を確認したい。");
  const [emergencyContact, setEmergencyContact] = useState("まず長女、つながらない場合は長男へ連絡");
  const [nextAction, setNextAction] = useState("施設へ持ち物表と薬の扱いを電話で確認する");

  const result = useMemo(() => {
    const selectedItems = (Object.keys(prepLabels) as PrepKey[])
      .filter((key) => prepItems[key])
      .map((key) => prepLabels[key]);

    const belongings = [
      ...selectedItems,
      "名前記入が必要なもの、施設で借りられるもの、持ち込みできないものを分ける",
      "薬やお薬手帳の扱いは、施設と担当ケアマネジャーの案内に従う",
    ];

    const handoff = [
      `本人の最近の様子: ${healthMemo}`,
      `生活リズム・声かけ: ${routineMemo}`,
      `緊急連絡: ${emergencyContact}`,
      "診断や評価ではなく、家族が普段見ている事実として短く伝える",
    ];

    const familyCheck = [
      `利用予定: ${stayDates}`,
      `施設名: ${facilityName}`,
      `共有する人: ${familyMembers}`,
      `施設・ケアマネへ確認したいこと: ${careManagerMemo}`,
      `次にやること: ${nextAction}`,
    ];

    const memoText = [
      "ショートステイ利用前メモ",
      "",
      "持ち物・当日準備",
      ...belongings.map((item) => `- ${item}`),
      "",
      "施設への申し送り",
      ...handoff.map((item) => `- ${item}`),
      "",
      "家族が確認すること",
      ...familyCheck.map((item) => `- ${item}`),
      "",
      "注意: このメモではショートステイの受け入れ可否、医療対応、薬の管理方法、介護サービスの判断、契約内容の確認はできません。利用条件、費用、持ち込みルール、薬の扱いは担当ケアマネジャー、利用予定施設、市区町村窓口などへ確認してください。保険証番号、口座番号、暗証番号、マイナンバーなどは入力しないでください。",
    ].join("\n");

    return { belongings, familyCheck, handoff, memoText };
  }, [
    careManagerMemo,
    emergencyContact,
    facilityName,
    familyMembers,
    healthMemo,
    nextAction,
    prepItems,
    routineMemo,
    stayDates,
  ]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">ツール</Link>
        <span className="mx-2">/</span>
        <span>ショートステイ利用前メモメーカー</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">ショートステイ前の家族共有メモ</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">ショートステイ利用前メモメーカー</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          ショートステイ利用前に、持ち物、施設への申し送り、緊急連絡先、確認事項を整理します。
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
                  value={stayDates}
                  onChange={(event) => setStayDates(event.target.value)}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">施設名</span>
                <input
                  value={facilityName}
                  onChange={(event) => setFacilityName(event.target.value)}
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
              <span className="mb-1 block text-sm font-medium">施設・ケアマネへ確認したいこと</span>
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
              <h2 className="text-base font-bold">施設への申し送り</h2>
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
          <span className="mb-2 block text-sm font-bold">ショートステイ利用前メモ</span>
          <textarea
            readOnly
            value={result.memoText}
            rows={18}
            className="min-h-[360px] w-full rounded-lg border border-card-border bg-background px-4 py-3 text-sm leading-relaxed"
          />
        </label>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          このツールは施設の受け入れ可否、医療対応、薬の扱い、介護サービスの判断を行うものではありません。利用条件や持ち込みルールは、担当ケアマネジャーや利用予定施設へ確認してください。
        </p>
      </section>

      <KaigoToolCta
        toolSlug={TOOL_SLUG}
        title="ショートステイ前メモを記事とテンプレートへつなげる"
        description="無料ツールで持ち物と申し送りを整理したら、記事で考え方を確認し、継続記録はBOOTHのテンプレートへ転記できます。"
        links={[
          { label: "親のこと整理ナビで診断する", href: KAIGO_NAVI_URL, eventName: "kaigo_navi_click", position: "short_stay", variant: "primary" },
          { label: "ショートステイ前の記事を読む", href: GUIDE_URL, eventName: "guide_click", position: "short_stay_guide" },
          { label: "ショートステイ利用前テンプレートを見る", href: BOOTH_URL, eventName: "booth_click", position: "short_stay_template" },
        ]}
      />

      <ToolFAQSection
        toolName="ショートステイ利用前メモメーカー"
        howTo={[
          "準備・確認したい項目を選びます",
          "利用予定、本人の様子、施設へ確認したいことを入力します",
          "生成されたメモを、家族共有や施設・ケアマネへの確認前整理に使います",
        ]}
        faqs={[
          {
            question: "このツールでショートステイの利用可否を判断できますか？",
            answer:
              "判断できません。受け入れ可否、医療対応、薬の扱い、持ち込みルール、費用や契約内容は施設や制度によって異なります。担当ケアマネジャーや利用予定施設へ確認してください。",
          },
          {
            question: "施設への申し送りには何を書けばよいですか？",
            answer:
              "食事、水分、排泄、睡眠、声かけ、緊急連絡など、当日の安全と生活リズムに関係する事実を短く書きます。診断や評価ではなく、普段の様子として残します。",
          },
          {
            question: "薬や医療情報も入力してよいですか？",
            answer:
              "詳しい医療情報、保険証番号、口座番号、暗証番号、マイナンバーなどは入力しないでください。薬の預け方や服薬確認は、施設や担当者の案内に従ってください。",
          },
          {
            question: "利用後も使えますか？",
            answer:
              "使えます。持ち物が足りたか、本人の様子、次回確認することを残しておくと、次回の準備漏れを減らしやすくなります。",
          },
        ]}
      />

      <AffiliateSection slug={TOOL_SLUG} category="日常ツール" />
      <RelatedTools currentSlug={TOOL_SLUG} category="日常ツール" />
    </div>
  );
}
