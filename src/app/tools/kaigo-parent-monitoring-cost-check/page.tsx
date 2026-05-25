"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { KaigoToolCta } from "@/components/KaigoToolCta";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const TOOL_SLUG = "kaigo-parent-monitoring-cost-check";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=kaigo_parent_monitoring_cost_check";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/living-alone-parent-monitoring-cost-contact-system?utm_source=net-toolbox&utm_medium=referral&utm_campaign=kaigo_parent_monitoring_cost_check";

const monitoringOptions = {
  phone: "電話・メッセージでの定期連絡",
  visit: "家族の定期訪問",
  meal: "配食や買い物支援の利用",
  emergency: "緊急通報・駆けつけ先の確認",
  medicine: "服薬・通院予定の確認",
  mail: "郵便物・公共料金の確認",
} as const;

type MonitoringKey = keyof typeof monitoringOptions;

const initialMonitoring: Record<MonitoringKey, boolean> = {
  phone: true,
  visit: true,
  meal: false,
  emergency: true,
  medicine: true,
  mail: false,
};

function yen(value: number) {
  return `${Math.max(0, Math.round(value)).toLocaleString("ja-JP")}円`;
}

export default function KaigoParentMonitoringCostCheckPage() {
  const [monitoring, setMonitoring] = useState(initialMonitoring);
  const [communicationCost, setCommunicationCost] = useState(2500);
  const [visitCostPerTrip, setVisitCostPerTrip] = useState(6000);
  const [monthlyVisits, setMonthlyVisits] = useState(2);
  const [serviceCost, setServiceCost] = useState(3000);
  const [mealSupportCost, setMealSupportCost] = useState(0);
  const [emergencyReserve, setEmergencyReserve] = useState(5000);
  const [parentShare, setParentShare] = useState(0);
  const [familyMembers, setFamilyMembers] = useState(2);
  const [noContactDays, setNoContactDays] = useState(2);
  const [mainContact, setMainContact] = useState("電話担当の家族");
  const [localContact, setLocalContact] = useState("近くの家族・親族");
  const [backupContact, setBackupContact] = useState("管理会社・近所の連絡先");

  const result = useMemo(() => {
    const visitMonthly = visitCostPerTrip * monthlyVisits;
    const totalMonthly = communicationCost + visitMonthly + serviceCost + mealSupportCost + emergencyReserve;
    const familyTarget = Math.max(totalMonthly - parentShare, 0);
    const perPerson = familyMembers > 0 ? Math.ceil(familyTarget / familyMembers) : familyTarget;
    const selectedItems = (Object.keys(monitoringOptions) as MonitoringKey[])
      .filter((key) => monitoring[key])
      .map((key) => monitoringOptions[key]);

    const contactFlow = [
      `通常時: ${mainContact}が決めた頻度で連絡する`,
      `${noContactDays}日連絡が取れない: ${localContact}へ確認を依頼する`,
      "生活リスクが高い: かかりつけ、地域包括支援センター、自治体窓口など相談先を確認する",
      `現地確認が必要: ${backupContact}へ連絡できる条件を家族で決めておく`,
    ];

    const memoText = [
      "親の見守り費用チェック",
      `月額合計: ${yen(totalMonthly)}`,
      `年額目安: ${yen(totalMonthly * 12)}`,
      `親本人の負担予定: ${yen(parentShare)}`,
      `家族で分ける月額: ${yen(familyTarget)}`,
      `家族1人あたり月額: ${yen(perPerson)}`,
      "",
      "費用内訳",
      `- 通信・連絡費: ${yen(communicationCost)}`,
      `- 家族の訪問費: ${yen(visitMonthly)}（1回 ${yen(visitCostPerTrip)} × 月 ${monthlyVisits}回）`,
      `- 外部見守り・緊急対応費: ${yen(serviceCost)}`,
      `- 配食・買い物など生活支援費: ${yen(mealSupportCost)}`,
      `- 緊急時予備費: ${yen(emergencyReserve)}`,
      "",
      "見守り項目",
      ...selectedItems.map((item) => `- ${item}`),
      "",
      "連絡が途切れた時の順番",
      ...contactFlow.map((item) => `- ${item}`),
      "",
      "注意: このメモには住所、鍵の場所、保険証番号、病名、口座情報などの個人情報は入力しない。具体情報は手元の紙や専用テンプレートで管理する。",
    ].join("\n");

    return { contactFlow, familyTarget, memoText, perPerson, selectedItems, totalMonthly, visitMonthly };
  }, [
    backupContact,
    communicationCost,
    emergencyReserve,
    familyMembers,
    localContact,
    mainContact,
    mealSupportCost,
    monthlyVisits,
    monitoring,
    noContactDays,
    parentShare,
    serviceCost,
    visitCostPerTrip,
  ]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">ツール</Link>
        <span className="mx-2">/</span>
        <span>親の見守り費用チェック</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">一人暮らしの親の連絡体制と費用整理</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">親の見守り費用チェック</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          一人暮らしの親を見守るために、通信費、家族の訪問費、外部サービス費、緊急時の予備費を月額で整理します。
          個人情報は保存せず、ブラウザ上で確認項目だけを生成します。
        </p>
      </header>

      <section className="rounded-xl border border-card-border bg-card-bg p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-base font-bold">見守りに入れる項目</h2>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {(Object.keys(monitoringOptions) as MonitoringKey[]).map((key) => (
                <label key={key} className="flex items-center gap-2 rounded-lg border border-card-border bg-background px-3 py-2 text-sm">
                  <input
                    type="checkbox"
                    checked={monitoring[key]}
                    onChange={(event) => setMonitoring((current) => ({ ...current, [key]: event.target.checked }))}
                  />
                  {monitoringOptions[key]}
                </label>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-sm font-medium">通信・連絡費（月額）</span>
                <input
                  type="number"
                  min="0"
                  value={communicationCost}
                  onChange={(e) => setCommunicationCost(Number(e.target.value))}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">訪問1回あたり交通費</span>
                <input
                  type="number"
                  min="0"
                  value={visitCostPerTrip}
                  onChange={(e) => setVisitCostPerTrip(Number(e.target.value))}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">月の訪問回数</span>
                <input
                  type="number"
                  min="0"
                  value={monthlyVisits}
                  onChange={(e) => setMonthlyVisits(Number(e.target.value))}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">外部見守り・緊急対応費（月額）</span>
                <input
                  type="number"
                  min="0"
                  value={serviceCost}
                  onChange={(e) => setServiceCost(Number(e.target.value))}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">配食・買い物支援費（月額）</span>
                <input
                  type="number"
                  min="0"
                  value={mealSupportCost}
                  onChange={(e) => setMealSupportCost(Number(e.target.value))}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">緊急時予備費（月額）</span>
                <input
                  type="number"
                  min="0"
                  value={emergencyReserve}
                  onChange={(e) => setEmergencyReserve(Number(e.target.value))}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">親本人の負担予定（月額）</span>
                <input
                  type="number"
                  min="0"
                  value={parentShare}
                  onChange={(e) => setParentShare(Number(e.target.value))}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">分担する家族人数</span>
                <input
                  type="number"
                  min="1"
                  value={familyMembers}
                  onChange={(e) => setFamilyMembers(Number(e.target.value))}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
            </div>
          </div>

          <aside className="rounded-xl border border-primary/20 bg-primary/5 p-5">
            <h2 className="text-base font-bold">月額の目安</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted">月額合計</dt>
                <dd className="text-xl font-bold">{yen(result.totalMonthly)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted">年額目安</dt>
                <dd className="font-bold">{yen(result.totalMonthly * 12)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted">家族で分ける月額</dt>
                <dd className="font-bold">{yen(result.familyTarget)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted">1人あたり月額</dt>
                <dd className="font-bold text-primary">{yen(result.perPerson)}</dd>
              </div>
            </dl>
            <div className="mt-5 rounded-lg border border-card-border bg-card-bg p-4">
              <h3 className="text-sm font-bold">費用の見方</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                見守り費用は、親本人の生活費、家族の訪問費、外部サービス費、緊急時の立替を分けておくと話し合いやすくなります。
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-6 rounded-lg border border-card-border bg-background p-4">
          <h2 className="text-base font-bold">連絡が途切れた時の順番</h2>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-sm font-medium">何日連絡が取れなければ確認するか</span>
              <input
                type="number"
                min="1"
                value={noContactDays}
                onChange={(e) => setNoContactDays(Number(e.target.value))}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">普段の連絡担当</span>
              <input
                value={mainContact}
                onChange={(e) => setMainContact(e.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">現地確認を依頼する相手</span>
              <input
                value={localContact}
                onChange={(e) => setLocalContact(e.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">補助的な連絡先</span>
              <input
                value={backupContact}
                onChange={(e) => setBackupContact(e.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>
          </div>

          <ol className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
            {result.contactFlow.map((item, index) => (
              <li key={item} className="rounded-lg border border-card-border bg-card-bg p-4 text-sm leading-relaxed">
                <span className="text-xs font-bold text-primary">STEP {index + 1}</span>
                <p className="mt-1">{item}</p>
              </li>
            ))}
          </ol>
        </div>

        <label className="mt-6 block">
          <span className="mb-2 block text-sm font-bold">家族共有用メモ</span>
          <textarea
            readOnly
            value={result.memoText}
            rows={15}
            className="min-h-[320px] w-full rounded-lg border border-card-border bg-background px-4 py-3 text-sm leading-relaxed"
          />
        </label>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          住所、鍵の場所、病名、保険証番号、口座番号などの個人情報は入力しないでください。具体情報は手元の紙や専用テンプレートで管理してください。
        </p>
      </section>

      <KaigoToolCta
        toolSlug={TOOL_SLUG}
        title="見守り体制を診断ページとテンプレートへつなげる"
        description="見守り費用と連絡順を整理したら、親のこと整理ナビで必要なテンプレートや無料記事を選び、家族で使う連絡表へ転記できます。"
        links={[
          { label: "親のこと整理ナビで診断する", href: KAIGO_NAVI_URL, eventName: "kaigo_navi_click", position: "monitoring_tool", variant: "primary" },
          { label: "一人暮らしの親の記事を読む", href: GUIDE_URL, eventName: "guide_click", position: "monitoring_guide" },
          { label: "見守り連絡表テンプレートを見る", href: "https://kaigo-okane.booth.pm/items/8409959", eventName: "booth_click", position: "monitoring_contact_template" },
        ]}
      />

      <ToolFAQSection
        toolName="親の見守り費用チェック"
        howTo={[
          "見守りに入れたい項目を選びます",
          "通信費、訪問費、外部サービス費、緊急時予備費を入力します",
          "連絡が途切れた時の順番を決め、家族共有用メモを確認します",
        ]}
        faqs={[
          {
            question: "このツールは見守りサービスを選ぶためのものですか？",
            answer:
              "特定サービスの推薦ではありません。家族の連絡、訪問、外部サービス、緊急時の予備費を分けて整理し、必要な支援を相談前に見える化するためのツールです。",
          },
          {
            question: "費用相場は表示されますか？",
            answer:
              "相場の断定はせず、家庭ごとの実費や見積もりを入力して月額と年額を整理する設計です。サービス料金は地域や契約内容で変わるため、公式情報や窓口で確認してください。",
          },
          {
            question: "親の住所や鍵の場所を入力してよいですか？",
            answer:
              "入力しないでください。このツールはブラウザ内で費用と確認項目を整理するだけです。住所、鍵、病名、保険証番号、口座情報などは扱いません。",
          },
          {
            question: "緊急時の判断に使えますか？",
            answer:
              "緊急時の判断そのものには使えません。連絡順を家族で決めるためのメモです。実際に急変や連絡不能の不安がある場合は、地域の相談窓口や緊急窓口へ確認してください。",
          },
        ]}
      />

      <AffiliateSection slug={TOOL_SLUG} category="日常ツール" />
      <RelatedTools currentSlug={TOOL_SLUG} category="日常ツール" />
    </div>
  );
}
