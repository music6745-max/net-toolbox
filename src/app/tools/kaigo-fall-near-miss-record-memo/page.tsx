"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { KaigoToolCta } from "@/components/KaigoToolCta";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const TOOL_SLUG = "kaigo-fall-near-miss-record-memo";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=fall_near_miss";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-fall-near-miss-record-family-memo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=fall_near_miss";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8426965";

const situationLabels = {
  standing: "立ち上がり・座り込み",
  walking: "歩行・方向転換",
  toilet: "夜間トイレ・廊下移動",
  bathing: "浴室・脱衣所",
  entrance: "玄関・段差",
  outdoor: "屋外・通院や買い物",
  fatigue: "疲れ・眠気・ふらつき",
  lighting: "照明・足元・敷物",
} as const;

type SituationKey = keyof typeof situationLabels;

const initialSituations: Record<SituationKey, boolean> = {
  standing: false,
  walking: true,
  toilet: true,
  bathing: false,
  entrance: true,
  outdoor: false,
  fatigue: true,
  lighting: true,
};

export default function KaigoFallNearMissRecordMemoPage() {
  const [situations, setSituations] = useState(initialSituations);
  const [dateTime, setDateTime] = useState("昨日の夜22時ごろ");
  const [place, setPlace] = useState("寝室からトイレへ向かう廊下");
  const [whatHappened, setWhatHappened] = useState("ふらついて壁に手をついた。転倒はしていない。");
  const [personState, setPersonState] = useState("本人は少し怖がっていた。翌朝の痛みの訴えはなし。");
  const [familyAction, setFamilyAction] = useState("夜間トイレ時の声かけと足元確認を家族で共有した。");
  const [environmentMemo, setEnvironmentMemo] = useState("廊下の照明、マット、スリッパ、トイレまでの動線を確認したい。");
  const [consultTarget, setConsultTarget] = useState("担当ケアマネジャー、かかりつけ医");
  const [nextQuestion, setNextQuestion] = useState("同じ場面が続く場合の相談先と、環境確認の進め方を聞きたい。");

  const result = useMemo(() => {
    const selectedSituations = (Object.keys(situationLabels) as SituationKey[])
      .filter((key) => situations[key])
      .map((key) => situationLabels[key]);

    const eventMemo = [
      `日時: ${dateTime}`,
      `場所: ${place}`,
      `起きたこと: ${whatHappened}`,
      `本人の様子: ${personState}`,
      "原因を決めつけず、見たこと・聞いたこと・対応したことを分ける",
    ];

    const familyMemo = [
      `家族の対応: ${familyAction}`,
      `生活環境の現状確認: ${environmentMemo}`,
      "段差、照明、手すり、敷物、スリッパ、ベッドまわり、トイレまでの動線を事実として書き出す",
      "痛み、けが、意識の変化、急な体調変化がある場合は家族内で判断しない",
    ];

    const consultMemo = [
      `相談先候補: ${consultTarget}`,
      `次に聞きたいこと: ${nextQuestion}`,
      "転倒原因、受診要否、服薬との関係、住宅改修や福祉用具の必要性は専門職へ確認する",
      "記録は相談時に伝え漏れを減らすための材料として使う",
    ];

    const memoText = [
      "転倒・ヒヤリハット記録メモ",
      "",
      "気になった場面",
      ...(selectedSituations.length > 0 ? selectedSituations.map((item) => `- ${item}`) : ["- 未選択"]),
      "",
      "起きたこと",
      ...eventMemo.map((item) => `- ${item}`),
      "",
      "家族内で共有すること",
      ...familyMemo.map((item) => `- ${item}`),
      "",
      "医師・ケアマネへ確認したいこと",
      ...consultMemo.map((item) => `- ${item}`),
      "",
      "注意: このメモでは転倒原因の医学的分析、受診要否の判断、転倒予防指導、服薬管理、住宅改修や福祉用具の必要性判定はできません。けが、痛み、意識の変化、急な体調変化が気になる場合は、医療機関、救急相談窓口、担当医師、ケアマネジャー、リハビリ専門職などへ確認してください。保険証番号、口座番号、暗証番号、マイナンバーなどは入力しないでください。",
    ].join("\n");

    return { consultMemo, eventMemo, familyMemo, memoText, selectedSituations };
  }, [
    consultTarget,
    dateTime,
    environmentMemo,
    familyAction,
    nextQuestion,
    personState,
    place,
    situations,
    whatHappened,
  ]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">ツール</Link>
        <span className="mx-2">/</span>
        <span>転倒ヒヤリハット記録メモメーカー</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">転倒・ヒヤリハットの相談前メモ</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">転倒ヒヤリハット記録メモメーカー</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          親が転んだ、転びそうになった場面を、日時・場所・状況・本人の様子・相談先への質問に分けて整理します。
          個人情報は保存せず、ブラウザ上で相談前メモだけを生成します。
        </p>
      </header>

      <section className="rounded-xl border border-card-border bg-card-bg p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <div>
              <p className="text-sm font-bold">気になった場面</p>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {(Object.keys(situationLabels) as SituationKey[]).map((key) => (
                  <label key={key} className="flex items-center gap-2 rounded-lg border border-card-border bg-background px-3 py-2 text-sm">
                    <input
                      type="checkbox"
                      checked={situations[key]}
                      onChange={(event) => setSituations((current) => ({ ...current, [key]: event.target.checked }))}
                    />
                    {situationLabels[key]}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-sm font-medium">日時</span>
                <input
                  value={dateTime}
                  onChange={(event) => setDateTime(event.target.value)}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">場所</span>
                <input
                  value={place}
                  onChange={(event) => setPlace(event.target.value)}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-1 block text-sm font-medium">起きたこと</span>
              <input
                value={whatHappened}
                onChange={(event) => setWhatHappened(event.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium">本人の様子</span>
              <input
                value={personState}
                onChange={(event) => setPersonState(event.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium">家族の対応</span>
              <input
                value={familyAction}
                onChange={(event) => setFamilyAction(event.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium">生活環境の現状確認</span>
              <input
                value={environmentMemo}
                onChange={(event) => setEnvironmentMemo(event.target.value)}
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
                <span className="mb-1 block text-sm font-medium">次に聞きたいこと</span>
                <input
                  value={nextQuestion}
                  onChange={(event) => setNextQuestion(event.target.value)}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">起きたこと</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {result.eventMemo.map((item) => <li key={item}>・{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">家族内で共有すること</h2>
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
          <span className="mb-2 block text-sm font-bold">転倒・ヒヤリハット記録メモ</span>
          <textarea
            readOnly
            value={result.memoText}
            rows={18}
            className="min-h-[360px] w-full rounded-lg border border-card-border bg-background px-4 py-3 text-sm leading-relaxed"
          />
        </label>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          このツールは転倒原因の分析、受診要否の判断、転倒予防指導、服薬管理、住宅改修や福祉用具の必要性判定を行うものではありません。
          気になる症状や急な変化がある場合は、医療機関や専門職へ確認してください。
        </p>
      </section>

      <KaigoToolCta
        toolSlug={TOOL_SLUG}
        title="転倒記録メモを記事とテンプレートへつなげる"
        description="無料ツールで転倒・ヒヤリハット場面を整理したら、記事で考え方を確認し、継続記録はBOOTHのテンプレートへ転記できます。"
        links={[
          { label: "親のこと整理ナビで診断する", href: KAIGO_NAVI_URL, eventName: "kaigo_navi_click", position: "fall_near_miss", variant: "primary" },
          { label: "転倒記録の記事を読む", href: GUIDE_URL, eventName: "guide_click", position: "fall_near_miss_guide" },
          { label: "転倒ヒヤリハット記録テンプレートを見る", href: BOOTH_URL, eventName: "booth_click", position: "fall_near_miss_template" },
        ]}
      />

      <ToolFAQSection
        toolName="転倒ヒヤリハット記録メモメーカー"
        howTo={[
          "気になった場面を選びます",
          "日時、場所、起きたこと、本人の様子、家族の対応を入力します",
          "生成されたメモを、家族共有や医師・ケアマネへの相談前整理に使います",
        ]}
        faqs={[
          {
            question: "このツールで転倒原因を判断できますか？",
            answer:
              "判断できません。原因の医学的分析、服薬との関係、受診要否、住宅改修や福祉用具の必要性は、医療機関、ケアマネジャー、リハビリ専門職などへ確認してください。",
          },
          {
            question: "けがや痛みがある場合もメモだけでよいですか？",
            answer:
              "メモだけで判断しないでください。痛み、腫れ、出血、頭を打った可能性、意識の変化、急な体調変化が気になる場合は、医療機関や救急相談窓口へ確認してください。",
          },
          {
            question: "生活環境の確認には何を書けばよいですか？",
            answer:
              "段差、照明、手すり、敷物、スリッパ、ベッドまわり、トイレまでの動線などを事実として書きます。改修の必要性は専門職へ確認してください。",
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
