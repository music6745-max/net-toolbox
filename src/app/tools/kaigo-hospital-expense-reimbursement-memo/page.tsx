"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { KaigoToolCta } from "@/components/KaigoToolCta";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const TOOL_SLUG = "kaigo-hospital-expense-reimbursement-memo";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=kaigo_hospital_expense_reimbursement";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-hospital-expense-advance-reimbursement?utm_source=net-toolbox&utm_medium=referral&utm_campaign=kaigo_hospital_expense_reimbursement";

const expenseLabels = {
  hospital: "病院支払い",
  daily: "日用品・入院生活",
  transport: "交通費・駐車場",
  document: "書類・保険請求",
  discharge: "退院後準備",
} as const;

type ExpenseKey = keyof typeof expenseLabels;

function yen(value: number) {
  return `${Math.max(0, Math.round(value)).toLocaleString("ja-JP")}円`;
}

export default function KaigoHospitalExpenseReimbursementMemoPage() {
  const [payer, setPayer] = useState("近くの家族");
  const [familyMembers, setFamilyMembers] = useState(2);
  const [parentShare, setParentShare] = useState(30000);
  const [receiptCheck, setReceiptCheck] = useState(true);
  const [memoShare, setMemoShare] = useState(true);
  const [amounts, setAmounts] = useState<Record<ExpenseKey, number>>({
    hospital: 60000,
    daily: 8000,
    transport: 12000,
    document: 3000,
    discharge: 10000,
  });

  const result = useMemo(() => {
    const total = Object.values(amounts).reduce((sum, value) => sum + value, 0);
    const familyTarget = Math.max(total - parentShare, 0);
    const perPerson = familyMembers > 0 ? Math.ceil(familyTarget / familyMembers) : familyTarget;
    const items = (Object.keys(expenseLabels) as ExpenseKey[]).map((key) => ({
      key,
      label: expenseLabels[key],
      amount: amounts[key],
    }));
    const checklist = [
      "支払日、支払った人、支払先、費目、金額を同じ形式で残す",
      ...(receiptCheck ? ["領収書の写真を撮り、原本の保管場所をメモする"] : []),
      "親本人負担、家族分担、未定のどれにするか仮で分ける",
      ...(memoShare ? ["きょうだいへ共有する日と、未精算の金額を決める"] : []),
      "病院、保険会社、自治体窓口へ確認することを別欄に残す",
    ];
    const memoText = [
      "親の入院費立替精算メモ",
      `主に立て替えた人: ${payer}`,
      `立替合計: ${yen(total)}`,
      `親本人の負担予定: ${yen(parentShare)}`,
      `家族で相談する金額: ${yen(familyTarget)}`,
      `家族1人あたり目安: ${yen(perPerson)}`,
      "",
      "内訳",
      ...items.map((item) => `- ${item.label}: ${yen(item.amount)}`),
      "",
      "確認すること",
      ...checklist.map((item) => `- ${item}`),
      "",
      "注意: 口座番号、暗証番号、保険証番号、病名などの個人情報はこのメモに入力しない。具体情報は手元の紙や専用テンプレートで管理する。",
    ].join("\n");
    return { checklist, familyTarget, items, memoText, perPerson, total };
  }, [amounts, familyMembers, memoShare, parentShare, payer, receiptCheck]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">ツール</Link>
        <span className="mx-2">/</span>
        <span>親の入院費立替精算メモ</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">入院費・日用品・交通費の家族共有</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">親の入院費立替精算メモ</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          親の入院時に家族が立て替えた費用を、病院支払い、日用品、交通費、書類費用、退院後準備に分けて整理します。
          個人情報は保存せず、ブラウザ上で精算メモだけを作ります。
        </p>
      </header>

      <section className="rounded-xl border border-card-border bg-card-bg p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <label className="block sm:col-span-1">
                <span className="mb-1 block text-sm font-medium">主に立て替えた人</span>
                <input
                  value={payer}
                  onChange={(e) => setPayer(e.target.value)}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">親本人の負担予定</span>
                <input
                  type="number"
                  min="0"
                  value={parentShare}
                  onChange={(e) => setParentShare(Number(e.target.value))}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">相談する家族人数</span>
                <input
                  type="number"
                  min="1"
                  value={familyMembers}
                  onChange={(e) => setFamilyMembers(Number(e.target.value))}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {(Object.keys(expenseLabels) as ExpenseKey[]).map((key) => (
                <label key={key} className="block">
                  <span className="mb-1 block text-sm font-medium">{expenseLabels[key]}</span>
                  <input
                    type="number"
                    min="0"
                    value={amounts[key]}
                    onChange={(e) => setAmounts((current) => ({ ...current, [key]: Number(e.target.value) }))}
                    className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                  />
                </label>
              ))}
            </div>

            <div className="mt-5 rounded-lg bg-background p-4">
              <p className="text-sm font-bold">共有ルール</p>
              <label className="mt-3 flex items-center gap-2 text-sm">
                <input type="checkbox" checked={receiptCheck} onChange={(e) => setReceiptCheck(e.target.checked)} />
                領収書の写真と原本保管場所を確認する
              </label>
              <label className="mt-2 flex items-center gap-2 text-sm">
                <input type="checkbox" checked={memoShare} onChange={(e) => setMemoShare(e.target.checked)} />
                きょうだい・親族へ未精算分を共有する
              </label>
            </div>
          </div>

          <aside className="rounded-xl border border-primary/20 bg-primary/5 p-5">
            <h2 className="text-base font-bold">精算メモ</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted">立替合計</dt>
                <dd className="text-xl font-bold">{yen(result.total)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted">家族で相談する金額</dt>
                <dd className="font-bold">{yen(result.familyTarget)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted">1人あたり目安</dt>
                <dd className="font-bold text-primary">{yen(result.perPerson)}</dd>
              </div>
            </dl>
            <div className="mt-5 rounded-lg border border-card-border bg-card-bg p-4">
              <h3 className="text-sm font-bold">内訳</h3>
              <ul className="mt-2 space-y-2 text-xs leading-relaxed text-muted">
                {result.items.map((item) => (
                  <li key={item.key} className="flex justify-between gap-3">
                    <span>{item.label}</span>
                    <span className="font-bold text-foreground">{yen(item.amount)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-card-border bg-background p-4">
            <h2 className="text-base font-bold">確認リスト</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
              {result.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <label className="block">
            <span className="mb-2 block text-sm font-bold">家族共有用メモ</span>
            <textarea
              readOnly
              value={result.memoText}
              rows={15}
              className="min-h-[320px] w-full rounded-lg border border-card-border bg-background px-4 py-3 text-sm leading-relaxed"
            />
          </label>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-muted">
          このツールは立替金の整理用です。医療費控除、保険請求、成年後見、代理手続き、相続、税務判断は専門窓口へ確認してください。
        </p>
      </section>

      <KaigoToolCta
        toolSlug={TOOL_SLUG}
        title="入院費の立替記録をテンプレートへ残す"
        description="一度きりのメモで終わらせず、月次の立替・精算・領収書確認まで続ける場合は、専用テンプレートに転記すると家族で見返しやすくなります。"
        links={[
          { label: "親のこと整理ナビで診断する", href: KAIGO_NAVI_URL, eventName: "kaigo_navi_click", position: "hospital_expense_tool", variant: "primary" },
          { label: "入院費立替の記事を読む", href: GUIDE_URL, eventName: "guide_click", position: "hospital_expense_guide" },
          { label: "介護費用立替テンプレートを見る", href: "https://kaigo-okane.booth.pm/items/8340354", eventName: "booth_click", position: "expense_template" },
        ]}
      />

      <ToolFAQSection
        toolName="親の入院費立替精算メモ"
        howTo={[
          "主に立て替えた人、親本人の負担予定、相談する家族人数を入力します",
          "病院支払い、日用品、交通費、書類費用、退院後準備の金額を入力します",
          "表示された確認リストと家族共有用メモをもとに、領収書や精算予定を整理します",
        ]}
        faqs={[
          { question: "領収書がない少額支出も入れてよいですか？", answer: "入れて構いません。ただし領収書あり、メモのみ、未確認を分けて残すと、あとで説明しやすくなります。" },
          { question: "親本人のお金から精算する判断に使えますか？", answer: "判断そのものには使えません。本人の意思確認、家族共有、必要に応じた専門窓口への確認を前提に、記録整理として使ってください。" },
          { question: "医療費控除や保険請求にも使えますか？", answer: "整理の入口としては使えますが、税務判断や保険請求の可否は、国税庁、保険会社、税理士などの公式窓口へ確認してください。" },
        ]}
      />

      <AffiliateSection slug={TOOL_SLUG} category="日常ツール" />
      <RelatedTools currentSlug={TOOL_SLUG} category="日常ツール" />
    </div>
  );
}
