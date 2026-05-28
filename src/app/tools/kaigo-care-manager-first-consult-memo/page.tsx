"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { KaigoToolCta } from "@/components/KaigoToolCta";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const TOOL_SLUG = "kaigo-care-manager-first-consult-memo";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=care_manager_first_consult";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/care-manager-first-consultation-family-memo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=care_manager_first_consult";

const concernLabels = {
  meals: "食事・買い物",
  bathing: "入浴・着替え",
  medicine: "服薬・通院",
  money: "支払い・郵便物",
  memory: "もの忘れ",
  fall: "転倒・歩行",
  contact: "電話・連絡",
  family: "家族の負担",
} as const;

type ConcernKey = keyof typeof concernLabels;

const initialConcerns: Record<ConcernKey, boolean> = {
  meals: true,
  bathing: false,
  medicine: true,
  money: true,
  memory: true,
  fall: false,
  contact: true,
  family: true,
};

function clampNumber(value: number, min: number, max: number) {
  if (Number.isNaN(value)) return min;
  return Math.min(Math.max(value, min), max);
}

export default function KaigoCareManagerFirstConsultMemoPage() {
  const [concerns, setConcerns] = useState(initialConcerns);
  const [livingAlone, setLivingAlone] = useState(true);
  const [needsCertification, setNeedsCertification] = useState(true);
  const [familyNotAligned, setFamilyNotAligned] = useState(true);
  const [hospitalDischargeSoon, setHospitalDischargeSoon] = useState(false);
  const [supporters, setSupporters] = useState(2);
  const [visitFrequency, setVisitFrequency] = useState("週1回程度");
  const [mainGoal, setMainGoal] = useState("家族だけで抱え込まない支援の選択肢を確認したい");

  const result = useMemo(() => {
    const selectedConcerns = (Object.keys(concernLabels) as ConcernKey[])
      .filter((key) => concerns[key])
      .map((key) => concernLabels[key]);

    const beforeConsult = [
      "本人が困っていることと、家族が困っていることを分けて書く",
      "できる日とできない日の差を、日付や場面で1行ずつ残す",
      "かかりつけ医、通院頻度、服薬、お薬手帳の場所を確認する",
      ...(livingAlone ? ["一人暮らしのため、連絡が取れない時の順番と訪問できる人を仮決めする"] : []),
      ...(needsCertification ? ["介護認定の申請状況、申請予定、認定調査で伝えたいことを整理する"] : []),
      ...(hospitalDischargeSoon ? ["退院予定日、退院後の生活場所、病院から言われている注意点を確認する"] : []),
    ];

    const familyRoles = [
      `相談窓口へ連絡する人: 家族${supporters}人のうち1人を主担当にする`,
      "相談結果を家族へ共有する人: メモ担当を決める",
      `訪問・付き添い: 現在の訪問頻度は${visitFrequency}として、増やせるか確認する`,
      "費用記録: 交通費、立替、親本人の支払いを分けて残す",
      ...(familyNotAligned ? ["未決事項: きょうだい間で意見が違う点を、決めることと保留することに分ける"] : []),
    ];

    const questions = [
      "今の困りごとで、介護保険サービスや地域の相談先につながるものはあるか",
      "介護認定を申請する前に、家族が記録しておくとよい生活場面は何か",
      "本人がサービス利用を嫌がる場合、どのように説明するとよいか",
      "家族ができる支援と外部へ相談したほうがよい支援をどう分けるか",
      "費用、通院、見守り、緊急時対応で次回までに確認することは何か",
    ];

    const memoText = [
      "ケアマネ初回相談メモ",
      `相談の目的: ${mainGoal}`,
      `家族の支援人数: ${supporters}人`,
      `現在の訪問頻度: ${visitFrequency}`,
      "",
      "気になっていること",
      ...(selectedConcerns.length > 0 ? selectedConcerns.map((item) => `- ${item}`) : ["- 未選択"]),
      "",
      "相談前に確認すること",
      ...beforeConsult.map((item) => `- ${item}`),
      "",
      "家族の役割案",
      ...familyRoles.map((item) => `- ${item}`),
      "",
      "相談時に聞きたいこと",
      ...questions.map((item) => `- ${item}`),
      "",
      "注意: 住所、保険証番号、病名、薬名、口座情報、暗証番号などの個人情報はこのメモへ入力しない。必要な具体情報は窓口の案内に沿って手元資料で確認する。",
    ].join("\n");

    return { beforeConsult, familyRoles, memoText, questions, selectedConcerns };
  }, [
    concerns,
    familyNotAligned,
    hospitalDischargeSoon,
    livingAlone,
    mainGoal,
    needsCertification,
    supporters,
    visitFrequency,
  ]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">ツール</Link>
        <span className="mx-2">/</span>
        <span>ケアマネ初回相談メモメーカー</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">介護相談前の家族共有メモ</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">ケアマネ初回相談メモメーカー</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          ケアマネや地域包括支援センターへ初めて相談するときに、生活状況、困りごと、家族の役割、聞きたいことを整理します。
          個人情報は保存せず、ブラウザ上で相談前メモだけを生成します。
        </p>
      </header>

      <section className="rounded-xl border border-card-border bg-card-bg p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <label className="block">
              <span className="mb-1 block text-sm font-medium">相談の目的</span>
              <input
                value={mainGoal}
                onChange={(event) => setMainGoal(event.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>

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

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-sm font-medium">支援に関わる家族人数</span>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={supporters}
                  onChange={(event) => setSupporters(clampNumber(Number(event.target.value), 1, 10))}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">現在の訪問頻度</span>
                <input
                  value={visitFrequency}
                  onChange={(event) => setVisitFrequency(event.target.value)}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
            </div>

            <div className="rounded-lg bg-background p-4">
              <p className="text-sm font-bold">追加条件</p>
              <label className="mt-3 flex items-center gap-2 text-sm">
                <input type="checkbox" checked={livingAlone} onChange={(event) => setLivingAlone(event.target.checked)} />
                親が一人暮らし
              </label>
              <label className="mt-2 flex items-center gap-2 text-sm">
                <input type="checkbox" checked={needsCertification} onChange={(event) => setNeedsCertification(event.target.checked)} />
                介護認定の申請も相談したい
              </label>
              <label className="mt-2 flex items-center gap-2 text-sm">
                <input type="checkbox" checked={hospitalDischargeSoon} onChange={(event) => setHospitalDischargeSoon(event.target.checked)} />
                入院中または退院が近い
              </label>
              <label className="mt-2 flex items-center gap-2 text-sm">
                <input type="checkbox" checked={familyNotAligned} onChange={(event) => setFamilyNotAligned(event.target.checked)} />
                家族の意見がまだまとまっていない
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">相談前に確認すること</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {result.beforeConsult.map((item) => <li key={item}>・{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">家族の役割案</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {result.familyRoles.map((item) => <li key={item}>・{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">相談時に聞きたいこと</h2>
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
          このツールは相談前の整理用です。医療、介護制度、契約、税務、相続の判断は、自治体、地域包括支援センター、医療機関、専門窓口へ確認してください。
        </p>
      </section>

      <KaigoToolCta
        toolSlug={TOOL_SLUG}
        title="初回相談メモを記事とテンプレートへつなげる"
        description="相談前に伝えることを整理したら、親のこと整理ナビの記事で進め方を確認し、入院・退院・ケアマネ相談パックへ残せます。"
        links={[
          { label: "親のこと整理ナビで診断する", href: KAIGO_NAVI_URL, eventName: "kaigo_navi_click", position: "care_manager_tool", variant: "primary" },
          { label: "初回相談の記事を読む", href: GUIDE_URL, eventName: "guide_click", position: "care_manager_guide" },
          { label: "入院・退院・ケアマネ相談パックを見る", href: "https://kaigo-okane.booth.pm/items/8424970", eventName: "booth_click", position: "hospital_care_manager_pack" },
        ]}
      />

      <ToolFAQSection
        toolName="ケアマネ初回相談メモメーカー"
        howTo={[
          "相談の目的と気になっている生活場面を選びます",
          "一人暮らし、認定申請、退院予定、家族の意見差などの条件を選びます",
          "生成された相談前メモ、家族の役割案、聞きたいことを控えます",
        ]}
        faqs={[
          {
            question: "このツールだけで介護サービスを決められますか？",
            answer: "決められません。家族が相談前に状況を整理するためのツールです。具体的なサービス利用や制度判断は、ケアマネ、地域包括支援センター、自治体窓口へ確認してください。",
          },
          {
            question: "本人がサービス利用を嫌がっていても使えますか？",
            answer: "使えます。本人が嫌がっていること、家族が困っていること、今はできていることを分けて相談材料にする用途です。無理に結論を出すためのものではありません。",
          },
          {
            question: "個人情報を入力してもよいですか？",
            answer: "入力しないでください。住所、保険証番号、病名、薬名、口座情報、暗証番号などは扱いません。具体情報は手元資料として管理し、必要な場面で窓口の案内に沿って確認してください。",
          },
          {
            question: "家族の意見がまとまっていなくても相談できますか？",
            answer: "相談できます。結論ではなく未決事項として持っていけば十分です。誰が連絡係か、誰が記録係か、次回までに何を確認するかを仮で置くと話し合いやすくなります。",
          },
        ]}
      />

      <AffiliateSection slug={TOOL_SLUG} category="日常ツール" />
      <RelatedTools currentSlug={TOOL_SLUG} category="日常ツール" />
    </div>
  );
}
