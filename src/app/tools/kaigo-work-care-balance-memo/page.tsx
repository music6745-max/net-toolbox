"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { KaigoToolCta } from "@/components/KaigoToolCta";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const TOOL_SLUG = "kaigo-work-care-balance-memo";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=care_work_balance";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/care-work-balance-office-consultation-memo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=care_work_balance";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8425543";

const taskLabels = {
  hospital: "入退院・病院説明",
  outpatient: "通院付き添い",
  careManager: "ケアマネ・地域包括との連絡",
  paperwork: "申請書類・保険証・支払い確認",
  familyMeeting: "家族会議・きょうだい連絡",
  emergencyCall: "急な電話対応",
} as const;

type TaskKey = keyof typeof taskLabels;

const initialTasks: Record<TaskKey, boolean> = {
  hospital: true,
  outpatient: true,
  careManager: true,
  paperwork: false,
  familyMeeting: true,
  emergencyCall: true,
};

function clampNumber(value: number, min: number, max: number) {
  if (Number.isNaN(value)) return min;
  return Math.min(Math.max(value, min), max);
}

export default function KaigoWorkCareBalanceMemoPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [weeklyHours, setWeeklyHours] = useState(6);
  const [monthlyDays, setMonthlyDays] = useState(3);
  const [familyMembers, setFamilyMembers] = useState(2);
  const [workImpact, setWorkImpact] = useState("平日の日中に通院や電話対応が入り、半休や中抜けが必要になりそう");
  const [desiredWorkStyle, setDesiredWorkStyle] = useState("まずは休暇・中抜け・在宅勤務の使い分けを相談したい");
  const [consultTarget, setConsultTarget] = useState("直属上司と人事担当");
  const [familyConstraint, setFamilyConstraint] = useState("きょうだいの予定が合わず、書類と費用記録が自分に寄りやすい");

  const result = useMemo(() => {
    const selectedTasks = (Object.keys(taskLabels) as TaskKey[])
      .filter((key) => tasks[key])
      .map((key) => taskLabels[key]);

    const officeMemo = [
      `介護に使っている時間の目安: 週${weeklyHours}時間程度`,
      `仕事へ影響しそうな日数: 月${monthlyDays}日程度`,
      `主な影響: ${workImpact}`,
      `希望・相談したい働き方: ${desiredWorkStyle}`,
      `最初の相談先: ${consultTarget}`,
    ];

    const familyMemo = [
      `支援に関わる家族人数: ${familyMembers}人`,
      `家族内の制約: ${familyConstraint}`,
      "職場相談の前に、通院、連絡、書類、費用記録を誰が担うか仮決めする",
      "自分が仕事中に対応できない時間帯を家族へ共有する",
      "職場相談後に、家族分担をもう一度見直す日を決める",
    ];

    const questions = [
      "介護に関する休暇や勤務調整は、どこへ最初に相談すればよいか",
      "半日単位、時間単位、在宅勤務、時差出勤など、確認できる選択肢はあるか",
      "急な電話対応や通院付き添いが出た場合、どのタイミングで連絡すればよいか",
      "正式な手続きが必要な場合、どの書類や期限を確認すればよいか",
      "相談内容を上司、人事、チーム内でどこまで共有するか",
    ];

    const memoText = [
      "介護と仕事 両立相談前メモ",
      "",
      "介護で発生していること",
      ...(selectedTasks.length > 0 ? selectedTasks.map((item) => `- ${item}`) : ["- 未選択"]),
      "",
      "職場へ相談する前の整理",
      ...officeMemo.map((item) => `- ${item}`),
      "",
      "家族内で確認すること",
      ...familyMemo.map((item) => `- ${item}`),
      "",
      "勤務先へ確認したいこと",
      ...questions.map((item) => `- ${item}`),
      "",
      "注意: このメモは相談前の自己整理用です。介護休業、介護休暇、給付金、正式な手続きの判断は、勤務先人事、ハローワーク、自治体などの窓口で確認してください。親の病名、住所、口座番号、保険証番号、暗証番号などは入力しないでください。",
    ].join("\n");

    return { familyMemo, memoText, officeMemo, questions, selectedTasks };
  }, [
    desiredWorkStyle,
    familyConstraint,
    familyMembers,
    monthlyDays,
    consultTarget,
    tasks,
    weeklyHours,
    workImpact,
  ]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">ツール</Link>
        <span className="mx-2">/</span>
        <span>介護と仕事 両立メモメーカー</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">職場相談前の自己整理メモ</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">介護と仕事 両立メモメーカー</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          親の介護が仕事に影響し始めたとき、職場へ相談する前に、介護の現状、仕事への影響、休み方の希望、家族分担を整理します。
          個人情報は保存せず、ブラウザ上で相談前メモだけを生成します。
        </p>
      </header>

      <section className="rounded-xl border border-card-border bg-card-bg p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <div>
              <p className="text-sm font-bold">介護で発生していること</p>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {(Object.keys(taskLabels) as TaskKey[]).map((key) => (
                  <label key={key} className="flex items-center gap-2 rounded-lg border border-card-border bg-background px-3 py-2 text-sm">
                    <input
                      type="checkbox"
                      checked={tasks[key]}
                      onChange={(event) => setTasks((current) => ({ ...current, [key]: event.target.checked }))}
                    />
                    {taskLabels[key]}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <label className="block">
                <span className="mb-1 block text-sm font-medium">週あたりの介護時間</span>
                <input
                  type="number"
                  min={0}
                  max={80}
                  value={weeklyHours}
                  onChange={(event) => setWeeklyHours(clampNumber(Number(event.target.value), 0, 80))}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">月の影響日数</span>
                <input
                  type="number"
                  min={0}
                  max={31}
                  value={monthlyDays}
                  onChange={(event) => setMonthlyDays(clampNumber(Number(event.target.value), 0, 31))}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">関わる家族人数</span>
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
              <span className="mb-1 block text-sm font-medium">仕事への影響</span>
              <input
                value={workImpact}
                onChange={(event) => setWorkImpact(event.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium">希望・相談したい働き方</span>
              <input
                value={desiredWorkStyle}
                onChange={(event) => setDesiredWorkStyle(event.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-sm font-medium">最初の相談先</span>
                <input
                  value={consultTarget}
                  onChange={(event) => setConsultTarget(event.target.value)}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">家族内の制約</span>
                <input
                  value={familyConstraint}
                  onChange={(event) => setFamilyConstraint(event.target.value)}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">職場相談前の整理</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {result.officeMemo.map((item) => <li key={item}>・{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">家族内で確認すること</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {result.familyMemo.map((item) => <li key={item}>・{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">勤務先へ確認したいこと</h2>
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
          このメモは制度判断や申請書類ではありません。取得可否、給付金、正式な手続きは勤務先人事、ハローワーク、自治体などで確認してください。
        </p>
      </section>

      <KaigoToolCta
        toolSlug={TOOL_SLUG}
        title="相談前メモを記事とテンプレートへつなげる"
        description="無料ツールで現状を整理したら、記事で相談前の考え方を確認し、継続的に残す内容はBOOTHのテンプレートへ転記できます。"
        links={[
          { label: "親のこと整理ナビで診断する", href: KAIGO_NAVI_URL, eventName: "kaigo_navi_click", position: "work_care_balance", variant: "primary" },
          { label: "職場相談前の記事を読む", href: GUIDE_URL, eventName: "guide_click", position: "work_care_balance_guide" },
          { label: "介護と仕事 両立整理メモを見る", href: BOOTH_URL, eventName: "booth_click", position: "work_care_balance_template" },
        ]}
      />

      <ToolFAQSection
        toolName="介護と仕事 両立メモメーカー"
        howTo={[
          "介護で発生している予定や連絡を選びます",
          "仕事への影響、希望する働き方、家族内の制約を入力します",
          "職場相談前メモを確認し、必要に応じて家族や勤務先への相談材料にします",
        ]}
        faqs={[
          {
            question: "このツールで介護休業を取れるか判断できますか？",
            answer:
              "判断できません。介護休業、介護休暇、給付金、勤務先の制度利用可否は、勤務先人事、ハローワーク、自治体などの窓口で確認してください。このツールは相談前の自己整理用です。",
          },
          {
            question: "職場へそのまま提出できますか？",
            answer:
              "正式な提出書類ではありません。上司や人事へ相談する前に、自分の状況と確認したいことを整理するためのメモとして使ってください。",
          },
          {
            question: "親の病名や住所を入力してよいですか？",
            answer:
              "入力しないでください。病名、住所、保険証番号、口座番号、暗証番号などの個人情報は、このツールには入れず、必要に応じて手元資料で管理してください。",
          },
          {
            question: "家族の分担も決められますか？",
            answer:
              "分担の結論を決めるツールではありません。自分が担えること、担えないこと、職場相談後に家族で再確認することを分けるためのメモです。",
          },
        ]}
      />

      <AffiliateSection slug={TOOL_SLUG} category="日常ツール" />
      <RelatedTools currentSlug={TOOL_SLUG} category="日常ツール" />
    </div>
  );
}
