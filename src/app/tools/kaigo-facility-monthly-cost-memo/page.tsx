"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { KaigoToolCta } from "@/components/KaigoToolCta";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const TOOL_SLUG = "kaigo-facility-monthly-cost-memo";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=facility_monthly_cost_memo";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/care-facility-monthly-cost-estimate-check?utm_source=net-toolbox&utm_medium=referral&utm_campaign=facility_monthly_cost_memo";

const questionOptions = {
  medical: "医療対応や通院付き添いの追加費",
  laundry: "洗濯・理美容・日用品の扱い",
  night: "夜間対応や見守り体制",
  discharge: "入院時・退院時の費用と連絡",
  refund: "入居一時金や退去時精算",
  familyTravel: "家族の面会交通費",
} as const;

type QuestionKey = keyof typeof questionOptions;

const initialQuestions: Record<QuestionKey, boolean> = {
  medical: true,
  laundry: true,
  night: true,
  discharge: false,
  refund: true,
  familyTravel: true,
};

function yen(value: number) {
  return `${Math.max(0, Math.round(value)).toLocaleString("ja-JP")}円`;
}

function readNumber(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
}

export default function KaigoFacilityMonthlyCostMemoPage() {
  const [facilityName, setFacilityName] = useState("候補施設A");
  const [initialCost, setInitialCost] = useState(300000);
  const [rentManage, setRentManage] = useState(125000);
  const [mealCost, setMealCost] = useState(45000);
  const [careCost, setCareCost] = useState(25000);
  const [medicalCost, setMedicalCost] = useState(12000);
  const [dailyCost, setDailyCost] = useState(15000);
  const [familyTravel, setFamilyTravel] = useState(10000);
  const [reserveCost, setReserveCost] = useState(10000);
  const [parentMonthlyBudget, setParentMonthlyBudget] = useState(180000);
  const [questions, setQuestions] = useState(initialQuestions);

  const result = useMemo(() => {
    const facilityMonthly = rentManage + mealCost + careCost;
    const outsideMonthly = medicalCost + dailyCost + familyTravel + reserveCost;
    const totalMonthly = facilityMonthly + outsideMonthly;
    const annualTotal = totalMonthly * 12 + initialCost;
    const monthlyGap = Math.max(totalMonthly - parentMonthlyBudget, 0);
    const selectedQuestions = (Object.keys(questionOptions) as QuestionKey[])
      .filter((key) => questions[key])
      .map((key) => questionOptions[key]);

    const confirmItems = [
      "月額利用料に含まれるものと含まれないもの",
      "介護度や医療対応が変わった時の追加費用",
      "入院が長引いた時の部屋代、退去条件、連絡体制",
      "親本人の年金や預貯金から払う範囲と家族が立て替える可能性",
      ...selectedQuestions,
    ];

    const memoText = [
      "施設入居前 月額費用見積もりメモ",
      `候補施設: ${facilityName}`,
      "",
      "施設へ払う月額",
      `- 家賃・管理費など: ${yen(rentManage)}`,
      `- 食費: ${yen(mealCost)}`,
      `- 介護保険自己負担・上乗せ介護費: ${yen(careCost)}`,
      `- 施設請求の月額小計: ${yen(facilityMonthly)}`,
      "",
      "別途見込む月額",
      `- 医療・薬・通院関連: ${yen(medicalCost)}`,
      `- 日用品・洗濯・理美容: ${yen(dailyCost)}`,
      `- 家族の面会交通費: ${yen(familyTravel)}`,
      `- 緊急時予備費: ${yen(reserveCost)}`,
      `- 別途費用小計: ${yen(outsideMonthly)}`,
      "",
      `初期費用: ${yen(initialCost)}`,
      `月額合計目安: ${yen(totalMonthly)}`,
      `初年度目安: ${yen(annualTotal)}`,
      `親本人の月額予算との差額: ${yen(monthlyGap)}`,
      "",
      "次回確認すること",
      ...confirmItems.map((item) => `- ${item}`),
      "",
      "注意: このメモは家族内の概算整理用。正式な見積もり、契約条件、制度判断は施設、自治体、専門窓口へ確認する。",
    ].join("\n");

    return { annualTotal, confirmItems, facilityMonthly, memoText, monthlyGap, outsideMonthly, totalMonthly };
  }, [
    careCost,
    dailyCost,
    facilityName,
    familyTravel,
    initialCost,
    mealCost,
    medicalCost,
    parentMonthlyBudget,
    questions,
    rentManage,
    reserveCost,
  ]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">ツール</Link>
        <span className="mx-2">/</span>
        <span>施設入居前の月額費用見積もりメモ</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">介護施設の費用内訳を家族で確認</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">施設入居前の月額費用見積もりメモ</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          施設へ払う月額、医療・日用品、家族の面会交通費、初期費用を分けて、家族会議で確認するメモを作ります。
          入力内容は保存せず、ブラウザ上で概算だけを整理します。
        </p>
      </header>

      <section className="rounded-xl border border-card-border bg-card-bg p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-5">
            <label className="block">
              <span className="mb-1 block text-sm font-medium">候補施設名</span>
              <input
                value={facilityName}
                onChange={(event) => setFacilityName(event.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                ["初期費用", initialCost, setInitialCost],
                ["家賃・管理費など（月額）", rentManage, setRentManage],
                ["食費（月額）", mealCost, setMealCost],
                ["介護関連費（月額）", careCost, setCareCost],
                ["医療・薬・通院関連（月額）", medicalCost, setMedicalCost],
                ["日用品・洗濯・理美容（月額）", dailyCost, setDailyCost],
                ["家族の面会交通費（月額）", familyTravel, setFamilyTravel],
                ["緊急時予備費（月額）", reserveCost, setReserveCost],
                ["親本人の月額予算", parentMonthlyBudget, setParentMonthlyBudget],
              ].map(([label, value, setter]) => (
                <label key={label as string} className="block">
                  <span className="mb-1 block text-sm font-medium">{label as string}</span>
                  <input
                    type="number"
                    min={0}
                    step={1000}
                    value={value as number}
                    onChange={(event) => (setter as (next: number) => void)(readNumber(event.target.value))}
                    className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                  />
                </label>
              ))}
            </div>

            <div className="rounded-lg bg-background p-4">
              <p className="text-sm font-bold">見学時に確認したい項目</p>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {(Object.keys(questionOptions) as QuestionKey[]).map((key) => (
                  <label key={key} className="flex items-center gap-2 rounded-lg border border-card-border bg-card-bg px-3 py-2 text-sm">
                    <input
                      type="checkbox"
                      checked={questions[key]}
                      onChange={(event) => setQuestions((current) => ({ ...current, [key]: event.target.checked }))}
                    />
                    {questionOptions[key]}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <aside className="rounded-xl border border-primary/20 bg-primary/5 p-5">
            <h2 className="text-base font-bold">費用の目安</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted">施設請求の月額小計</dt>
                <dd className="font-bold">{yen(result.facilityMonthly)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted">別途費用小計</dt>
                <dd className="font-bold">{yen(result.outsideMonthly)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted">月額合計目安</dt>
                <dd className="text-xl font-bold text-primary">{yen(result.totalMonthly)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted">初年度目安</dt>
                <dd className="font-bold">{yen(result.annualTotal)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted">月額予算との差額</dt>
                <dd className="font-bold">{yen(result.monthlyGap)}</dd>
              </div>
            </dl>
            <div className="mt-5 rounded-lg border border-card-border bg-card-bg p-4">
              <h3 className="text-sm font-bold">見落としやすい点</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                家族の交通費、入院時の立替、日用品、通院付き添いは施設の月額外で発生しやすい項目です。
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-6 rounded-lg border border-card-border bg-background p-4">
          <h2 className="text-base font-bold">次回確認すること</h2>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm leading-relaxed text-muted md:grid-cols-2">
            {result.confirmItems.map((item) => <li key={item}>・{item}</li>)}
          </ul>
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
          このツールは家族内の概算整理用です。正式な費用、契約条件、介護制度の判断は、施設、自治体、専門窓口へ確認してください。
        </p>
      </section>

      <KaigoToolCta
        toolSlug={TOOL_SLUG}
        title="施設見学後は比較表へ残す"
        description="月額の内訳を整理したら、候補施設ごとに同じ項目で比較し、見学メモや未確認事項を残すと家族に説明しやすくなります。"
        links={[
          { label: "親のこと整理ナビで診断する", href: KAIGO_NAVI_URL, eventName: "kaigo_navi_click", position: "facility_monthly_cost_tool", variant: "primary" },
          { label: "施設費用の記事を読む", href: GUIDE_URL, eventName: "guide_click", position: "facility_monthly_cost_guide" },
          { label: "施設選び重点パックを見る", href: "https://kaigo-okane.booth.pm/items/8340642", eventName: "booth_click", position: "facility_pack" },
          { label: "施設比較表メーカーを使う", href: "https://net-toolbox.jp/tools/kaigo-facility-compare", eventName: "tool_click", position: "facility_compare" },
        ]}
      />

      <ToolFAQSection
        toolName="施設入居前の月額費用見積もりメモ"
        howTo={[
          "候補施設名と初期費用、月額費用を入力します",
          "医療、日用品、家族交通費、緊急時予備費を別枠で入力します",
          "月額合計、初年度目安、次回確認することを家族共有用メモで確認します",
        ]}
        faqs={[
          {
            question: "正式な見積もりとして使えますか？",
            answer: "使えません。家族内で概算を整理するためのツールです。正式な費用、契約条件、退去条件は各施設の見積書や重要事項説明で確認してください。",
          },
          {
            question: "介護保険自己負担は固定ですか？",
            answer: "固定とは限りません。要介護度、利用サービス、負担割合、施設の体制で変わります。見学時に、どの条件で増減するかを確認してください。",
          },
          {
            question: "家族の交通費も入れるべきですか？",
            answer: "入れると実負担を把握しやすくなります。面会、通院付き添い、緊急時の移動、宿泊が発生する場合、施設へ払う月額とは別に家族側の負担として見ておくと説明しやすくなります。",
          },
          {
            question: "一番安い施設を選ぶためのツールですか？",
            answer: "違います。費用を見える化するためのツールです。医療対応、本人の生活環境、面会しやすさ、退去条件も合わせて検討してください。",
          },
        ]}
      />

      <AffiliateSection slug={TOOL_SLUG} category="日常ツール" />
      <RelatedTools currentSlug={TOOL_SLUG} category="日常ツール" />
    </div>
  );
}
