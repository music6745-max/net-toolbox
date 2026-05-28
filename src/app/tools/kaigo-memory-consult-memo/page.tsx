"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { KaigoToolCta } from "@/components/KaigoToolCta";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const TOOL_SLUG = "kaigo-memory-consult-memo";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=memory_consult";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-memory-concern-consultation-memo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=memory_consult";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8382918";

const concernLabels = {
  repeatStory: "同じ話の繰り返し",
  searchItems: "探し物が増えた",
  scheduleConfusion: "予定・日付の混乱",
  medicineHospital: "服薬・通院の抜け",
  paymentMail: "支払い・郵便物の確認",
  shoppingGoingOut: "外出・買い物の変化",
  familyBurden: "家族の負担増",
  denial: "本人が困りごとを認めない",
} as const;

type ConcernKey = keyof typeof concernLabels;

const initialConcerns: Record<ConcernKey, boolean> = {
  repeatStory: true,
  searchItems: true,
  scheduleConfusion: true,
  medicineHospital: false,
  paymentMail: true,
  shoppingGoingOut: false,
  familyBurden: true,
  denial: false,
};

function clampNumber(value: number, min: number, max: number) {
  if (Number.isNaN(value)) return min;
  return Math.min(Math.max(value, min), max);
}

export default function KaigoMemoryConsultMemoPage() {
  const [concerns, setConcerns] = useState(initialConcerns);
  const [firstConcernDate, setFirstConcernDate] = useState("2〜3か月前から気になる場面が増えた");
  const [frequency, setFrequency] = useState("週1〜2回程度");
  const [familyMembers, setFamilyMembers] = useState(2);
  const [mainEvent, setMainEvent] = useState("予定を伝えた翌日に、同じ内容をもう一度確認された");
  const [familyTrouble, setFamilyTrouble] = useState("本人を責めずに、どこへ相談すればよいか家族で迷っている");
  const [consultTarget, setConsultTarget] = useState("地域包括支援センター、かかりつけ医、もの忘れ外来");
  const [nextAction, setNextAction] = useState("次に起きた出来事を日付つきで記録し、家族で共有する");

  const result = useMemo(() => {
    const selectedConcerns = (Object.keys(concernLabels) as ConcernKey[])
      .filter((key) => concerns[key])
      .map((key) => concernLabels[key]);

    const eventMemo = [
      `気になり始めた時期: ${firstConcernDate}`,
      `頻度の目安: ${frequency}`,
      `主な出来事: ${mainEvent}`,
      "日付、場所、起きたこと、家族が対応したことを分けて残す",
      "本人への評価や診断名ではなく、見たままの事実を短く書く",
    ];

    const familyMemo = [
      `共有する家族人数: ${familyMembers}人`,
      `家族の困りごと: ${familyTrouble}`,
      "同居家族と遠方家族で見えている場面が違う前提で話す",
      "電話だけで分かることと、実家で確認することを分ける",
      "次回の確認日と、誰が何を見るかを仮決めする",
    ];

    const checkBeforeConsult = [
      "薬、郵便物、支払い、冷蔵庫、外出、買い物、通院予定の変化を確認する",
      "本人が困っていることと、家族が困っていることを分ける",
      "受診や制度利用の判断は家族だけで決めず、相談先へ確認する",
      "暗証番号、口座番号、マイナンバー、詳しい医療情報はこのメモに入れない",
    ];

    const questions = [
      `最初に相談する先: ${consultTarget}`,
      "どの出来事をどのくらいの期間記録すればよいか",
      "本人へどう声をかけると相談につなげやすいか",
      "受診、地域包括支援センター、ケアマネ相談の順番はどう考えるか",
      `次の行動: ${nextAction}`,
    ];

    const memoText = [
      "もの忘れ相談前メモ",
      "",
      "気になっていること",
      ...(selectedConcerns.length > 0 ? selectedConcerns.map((item) => `- ${item}`) : ["- 未選択"]),
      "",
      "気になった出来事",
      ...eventMemo.map((item) => `- ${item}`),
      "",
      "家族が困っていること",
      ...familyMemo.map((item) => `- ${item}`),
      "",
      "相談前に確認すること",
      ...checkBeforeConsult.map((item) => `- ${item}`),
      "",
      "相談先へ聞きたいこと",
      ...questions.map((item) => `- ${item}`),
      "",
      "注意: このメモでは認知症かどうか、受診が必要か、薬や治療、運転、財産管理の判断はできません。医師、地域包括支援センター、自治体、専門家などへ確認してください。個人を特定できる情報や暗証番号、口座番号、詳しい医療情報は入力しないでください。",
    ].join("\n");

    return { checkBeforeConsult, eventMemo, familyMemo, memoText, questions, selectedConcerns };
  }, [
    concerns,
    consultTarget,
    familyMembers,
    familyTrouble,
    firstConcernDate,
    frequency,
    mainEvent,
    nextAction,
  ]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">ツール</Link>
        <span className="mx-2">/</span>
        <span>もの忘れ相談前メモメーカー</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">家族で相談前に整える記録メモ</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">もの忘れ相談前メモメーカー</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          親のもの忘れや生活の変化が気になり始めたとき、出来事、困りごと、家族共有、相談先への質問を整理します。
          個人情報は保存せず、ブラウザ上で相談前メモだけを生成します。
        </p>
      </header>

      <section className="rounded-xl border border-card-border bg-card-bg p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <div>
              <p className="text-sm font-bold">気になっていること</p>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {(Object.keys(concernLabels) as ConcernKey[]).map((key) => (
                  <label key={key} className="flex items-center gap-2 rounded-lg border border-card-border bg-background px-3 py-2 text-sm">
                    <input
                      type="checkbox"
                      checked={concerns[key]}
                      onChange={(event) => setConcerns((current) => ({ ...current, [key]: event.target.checked }))}
                    />
                    {concernLabels[key]}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <label className="block">
                <span className="mb-1 block text-sm font-medium">気になり始めた時期</span>
                <input
                  value={firstConcernDate}
                  onChange={(event) => setFirstConcernDate(event.target.value)}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">頻度の目安</span>
                <input
                  value={frequency}
                  onChange={(event) => setFrequency(event.target.value)}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
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
            </div>

            <label className="block">
              <span className="mb-1 block text-sm font-medium">主な出来事</span>
              <input
                value={mainEvent}
                onChange={(event) => setMainEvent(event.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium">家族が困っていること</span>
              <input
                value={familyTrouble}
                onChange={(event) => setFamilyTrouble(event.target.value)}
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
              <h2 className="text-base font-bold">気になった出来事</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {result.eventMemo.map((item) => <li key={item}>・{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">家族が困っていること</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {result.familyMemo.map((item) => <li key={item}>・{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">相談先へ聞きたいこと</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {result.questions.map((item) => <li key={item}>・{item}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <label className="mt-6 block">
          <span className="mb-2 block text-sm font-bold">相談前メモ</span>
          <textarea
            readOnly
            value={result.memoText}
            rows={18}
            className="min-h-[360px] w-full rounded-lg border border-card-border bg-background px-4 py-3 text-sm leading-relaxed"
          />
        </label>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          このツールは診断、受診判断、治療判断、運転や財産管理の判断を行うものではありません。出来事を整理し、専門窓口へ相談しやすくするためのメモです。
        </p>
      </section>

      <KaigoToolCta
        toolSlug={TOOL_SLUG}
        title="相談前メモを記事とテンプレートへつなげる"
        description="無料ツールで出来事を整理したら、記事で相談前の考え方を確認し、継続記録はBOOTHのテンプレートへ転記できます。"
        links={[
          { label: "親のこと整理ナビで診断する", href: KAIGO_NAVI_URL, eventName: "kaigo_navi_click", position: "memory_consult", variant: "primary" },
          { label: "もの忘れ相談前の記事を読む", href: GUIDE_URL, eventName: "guide_click", position: "memory_consult_guide" },
          { label: "もの忘れ相談前整理テンプレートを見る", href: BOOTH_URL, eventName: "booth_click", position: "memory_consult_template" },
        ]}
      />

      <ToolFAQSection
        toolName="もの忘れ相談前メモメーカー"
        howTo={[
          "親のもの忘れや生活の変化で気になっている項目を選びます",
          "気になり始めた時期、頻度、出来事、家族の困りごとを入力します",
          "生成された相談前メモを、家族共有や地域包括支援センター・医療機関への相談前整理に使います",
        ]}
        faqs={[
          {
            question: "このツールで認知症かどうか判断できますか？",
            answer:
              "判断できません。認知症かどうか、受診が必要か、薬や治療が必要かは医師や専門窓口へ確認してください。このツールは家族が出来事を整理するためのメモです。",
          },
          {
            question: "受診すべきかどうか決められますか？",
            answer:
              "決められません。受診判断は、かかりつけ医、もの忘れ外来、地域包括支援センターなどへ相談してください。相談前に起きたことを説明しやすくする用途で使ってください。",
          },
          {
            question: "本人がもの忘れを認めない場合も使えますか？",
            answer:
              "使えます。ただし本人を責める言葉ではなく、日付、場面、起きたこと、家族が対応したことを事実として残してください。",
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
