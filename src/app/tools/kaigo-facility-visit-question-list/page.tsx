"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { KaigoToolCta } from "@/components/KaigoToolCta";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const TOOL_SLUG = "kaigo-facility-visit-question-list";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=kaigo_facility_visit_question_list";
const FACILITY_COMPARE_URL =
  "https://net-toolbox.jp/tools/kaigo-facility-compare?utm_source=net-toolbox&utm_medium=internal&utm_campaign=kaigo_facility_visit_question_list";

type QuestionGroup = {
  title: string;
  questions: string[];
};

const baseGroups: QuestionGroup[] = [
  {
    title: "費用",
    questions: [
      "月額費用の内訳は、家賃・管理費・食費・介護保険自己負担でどう分かれていますか？",
      "追加費用が発生しやすい項目は何ですか？",
      "入居一時金、敷金、保証金、退去時の返金条件はどうなっていますか？",
    ],
  },
  {
    title: "生活",
    questions: [
      "食事の内容、食事形態、アレルギーや好き嫌いへの対応範囲はどこまでですか？",
      "入浴、排せつ、着替え、洗濯、掃除はどの頻度で支援されますか？",
      "日中の過ごし方、レクリエーション、外出や散歩の機会はありますか？",
    ],
  },
  {
    title: "連絡",
    questions: [
      "家族への定期報告は、電話、メール、アプリ、面談のどれで行われますか？",
      "緊急時は誰に、どの順番で連絡されますか？",
      "面会時間、オンライン面会、外出・外泊のルールはどうなっていますか？",
    ],
  },
  {
    title: "契約",
    questions: [
      "重要事項説明書、契約書、料金表で家族が特に確認すべき箇所はどこですか？",
      "状態が変わった場合、追加費用や退去相談が発生する条件はありますか？",
      "入院が長引いた場合の居室費、食費、退去条件はどうなりますか？",
    ],
  },
];

const concernQuestions: Record<string, QuestionGroup> = {
  medical: {
    title: "医療対応",
    questions: [
      "服薬管理、通院付き添い、訪問診療、看護師配置の対応範囲はどこまでですか？",
      "医療処置が必要になった場合、施設内で対応できる範囲と外部受診になる範囲は何ですか？",
      "協力医療機関、夜間や休日の受診判断、家族連絡の流れを教えてください。",
    ],
  },
  night: {
    title: "夜間・緊急時",
    questions: [
      "夜間の職員体制と巡回頻度はどうなっていますか？",
      "転倒、発熱、救急搬送の判断は誰が行い、家族へいつ連絡されますか？",
      "夜間対応で追加費用が発生する場面はありますか？",
    ],
  },
  dementia: {
    title: "認知面の不安",
    questions: [
      "もの忘れ、徘徊、不安が強いときの見守り体制はどうなっていますか？",
      "本人が環境に慣れるまで、家族との連絡や面会はどのように調整できますか？",
      "他の入居者とのトラブルが起きた場合の対応方針を教えてください。",
    ],
  },
  familyDistance: {
    title: "家族の通いやすさ",
    questions: [
      "遠方の家族へ、面談内容や日々の様子を共有する方法はありますか？",
      "家族が行けない場合、通院付き添いや買い物代行はどこまで依頼できますか？",
      "緊急時に現地へ向かうまでの間、施設側でできる対応範囲を教えてください。",
    ],
  },
};

export default function KaigoFacilityVisitQuestionListPage() {
  const [facilityType, setFacilityType] = useState("介護付き有料老人ホーム");
  const [monthlyBudget, setMonthlyBudget] = useState("20万円以内");
  const [medical, setMedical] = useState(true);
  const [night, setNight] = useState(true);
  const [dementia, setDementia] = useState(false);
  const [familyDistance, setFamilyDistance] = useState(true);

  const selectedConcernGroups = useMemo(() => {
    const groups: QuestionGroup[] = [];
    if (medical) groups.push(concernQuestions.medical);
    if (night) groups.push(concernQuestions.night);
    if (dementia) groups.push(concernQuestions.dementia);
    if (familyDistance) groups.push(concernQuestions.familyDistance);
    return groups;
  }, [dementia, familyDistance, medical, night]);

  const allGroups = useMemo(() => [...baseGroups, ...selectedConcernGroups], [selectedConcernGroups]);
  const totalQuestions = allGroups.reduce((sum, group) => sum + group.questions.length, 0);
  const memoText = useMemo(
    () =>
      [
        "介護施設見学 質問リスト",
        `候補施設種別: ${facilityType}`,
        `月額予算目安: ${monthlyBudget}`,
        "",
        ...allGroups.flatMap((group) => [
          `【${group.title}】`,
          ...group.questions.map((question) => `- ${question}`),
          "",
        ]),
        "見学後に確認: 正式見積もり、重要事項説明書、契約書、未確認事項、家族での次回相談日",
      ].join("\n"),
    [allGroups, facilityType, monthlyBudget],
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">ツール</Link>
        <span className="mx-2">/</span>
        <span>施設見学質問リストメーカー</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">介護施設選びの見学準備</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">施設見学質問リストメーカー</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          施設見学前に、費用、生活、医療対応、夜間対応、面会、退去条件で聞く質問を整理します。候補施設ごとに同じ質問を使うと比較しやすくなります。
        </p>
      </header>

      <section className="rounded-xl border border-card-border bg-card-bg p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-sm font-medium">候補施設の種類</span>
            <select
              value={facilityType}
              onChange={(e) => setFacilityType(e.target.value)}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            >
              <option>介護付き有料老人ホーム</option>
              <option>住宅型有料老人ホーム</option>
              <option>サービス付き高齢者向け住宅</option>
              <option>グループホーム</option>
              <option>特別養護老人ホーム</option>
              <option>老健・退院後の一時利用</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">月額予算の目安</span>
            <select
              value={monthlyBudget}
              onChange={(e) => setMonthlyBudget(e.target.value)}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            >
              <option>15万円以内</option>
              <option>20万円以内</option>
              <option>25万円以内</option>
              <option>30万円以内</option>
              <option>費用より医療対応を優先</option>
            </select>
          </label>
        </div>

        <div className="mt-5 rounded-lg bg-background p-4">
          <p className="text-sm font-bold">重点的に聞きたい項目</p>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={medical} onChange={(e) => setMedical(e.target.checked)} />
              医療対応・服薬管理
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={night} onChange={(e) => setNight(e.target.checked)} />
              夜間・緊急時対応
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={dementia} onChange={(e) => setDementia(e.target.checked)} />
              認知面の不安
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={familyDistance} onChange={(e) => setFamilyDistance(e.target.checked)} />
              家族の通いやすさ・遠方共有
            </label>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
          <p className="text-sm leading-relaxed">
            <strong>{totalQuestions}個</strong> の質問を生成しました。見学先ごとに同じ質問を使い、回答、未確認事項、次回確認日を残してください。
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {allGroups.map((group) => (
            <article key={group.title} className="rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">{group.title}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                {group.questions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <label className="mt-6 block">
          <span className="mb-2 block text-sm font-bold">家族共有用メモ</span>
          <textarea
            readOnly
            value={memoText}
            rows={12}
            className="min-h-[240px] w-full rounded-lg border border-card-border bg-background px-4 py-3 text-sm leading-relaxed"
          />
        </label>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          このツールは見学前の質問整理用です。契約、費用、医療対応、退去条件の最終判断は、施設の正式資料や公的窓口、専門家に確認してください。
        </p>
      </section>

      <KaigoToolCta
        toolSlug={TOOL_SLUG}
        title="質問リストを比較表とテンプレートにつなげる"
        description="見学で聞いた内容は、費用比較、医療対応、面会条件、退去条件を同じ形式で残すと家族で判断しやすくなります。"
        links={[
          { label: "親のこと整理ナビで診断する", href: KAIGO_NAVI_URL, eventName: "kaigo_navi_click", position: "facility_visit_question_tool", variant: "primary" },
          { label: "施設費用比較表を作る", href: FACILITY_COMPARE_URL, eventName: "tool_click", position: "facility_compare" },
          { label: "施設選び重点パックを見る", href: "https://kaigo-okane.booth.pm/items/8340642", eventName: "booth_click", position: "facility_pack" },
        ]}
      />

      <ToolFAQSection
        toolName="施設見学質問リストメーカー"
        howTo={[
          "施設の種類と月額予算の目安を選ぶ",
          "重点的に聞きたい項目を選ぶ",
          "生成された質問を見学時のメモに使い、回答と未確認事項を残す",
        ]}
        faqs={[
          {
            question: "すべての質問を必ず聞く必要がありますか？",
            answer:
              "すべて聞く必要はありません。費用、医療対応、夜間対応、退去条件など、家族の判断に影響する項目を優先してください。",
          },
          {
            question: "見学時に質問できなかった項目はどうすればよいですか？",
            answer:
              "未確認事項として残し、後日電話やメールで確認します。複数施設を比べる場合は、未確認のまま判断しないことが大切です。",
          },
          {
            question: "費用はこのリストだけで比較できますか？",
            answer:
              "費用比較には、正式な料金表や見積もりが必要です。このリストで聞いた内容を、施設費用比較表に転記して整理してください。",
          },
          {
            question: "医療対応の可否をこのツールで判断できますか？",
            answer:
              "判断はできません。施設側の説明、主治医やケアマネ、公的窓口への確認を前提に、相談前の質問整理として使ってください。",
          },
        ]}
      />

      <AffiliateSection slug={TOOL_SLUG} category="日常ツール" />
      <RelatedTools currentSlug={TOOL_SLUG} category="日常ツール" />
    </div>
  );
}
