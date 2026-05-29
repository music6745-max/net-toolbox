"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=home_care_monthly_calendar";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/home-care-monthly-family-role-calendar?utm_source=net-toolbox&utm_medium=referral&utm_campaign=home_care_monthly_calendar";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8382957";

export default function KaigoHomeCareMonthlyFamilyCalendarMemoPage() {
  const [targetMonth, setTargetMonth] = useState("");
  const [fixedServices, setFixedServices] = useState("");
  const [familyRoles, setFamilyRoles] = useState("");
  const [clinicPlans, setClinicPlans] = useState("");
  const [changes, setChanges] = useState("");
  const [burdenMemo, setBurdenMemo] = useState("");
  const [questions, setQuestions] = useState("");
  const [familyShare, setFamilyShare] = useState("");

  const output = useMemo(() => {
    return [
      "【在宅介護 月間予定・家族分担メモ】",
      targetMonth ? `対象月: ${targetMonth}` : "対象月: 未入力",
      "",
      "■ 月内の固定サービス予定",
      fixedServices || "未入力",
      "",
      "■ 家族の担当・未定事項",
      familyRoles || "未入力",
      "",
      "■ 通院・薬局・付き添い予定",
      clinicPlans || "未入力",
      "",
      "■ 変更・追加・休止の可能性",
      changes || "未入力",
      "",
      "■ 負担の偏り・調整したいこと",
      burdenMemo || "未入力",
      "",
      "■ ケアマネ・事業所・病院へ確認したいこと",
      questions || "未入力",
      "",
      "■ 家族に共有する要点",
      familyShare || "未入力",
      "",
      "※このメモは家族内の月間予定整理用です。ケアプランの代替、サービス変更の指示、利用可否・給付・自己負担額の判断には使わず、担当ケアマネジャー、各事業所、医療機関へ確認してください。",
    ].join("\n");
  }, [burdenMemo, changes, clinicPlans, familyRoles, familyShare, fixedServices, questions, targetMonth]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <a href="/tools" className="text-sm font-semibold text-blue-700 hover:underline">
          ツール一覧へ戻る
        </a>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">在宅介護 月間予定・家族分担メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          通院・訪問サービス・買い物・見守り連絡など、月内の介護予定と家族担当を一枚のメモに整理します。
          サービス調整の判断ではなく、家族で状況をそろえるための手元整理として使うツールです。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <label className="block text-sm font-semibold text-slate-800">
              対象月
              <input
                type="month"
                value={targetMonth}
                onChange={(event) => setTargetMonth(event.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </label>
            <MemoField
              label="月内の固定サービス予定"
              value={fixedServices}
              onChange={setFixedServices}
              placeholder="例: 月・木 訪問介護、火・金 デイサービス、隔週水曜 訪問看護"
            />
            <MemoField
              label="家族の担当・未定事項"
              value={familyRoles}
              onChange={setFamilyRoles}
              placeholder="例: 母の通院付き添いは長男、買い物は次女、月末の手続きは未定"
            />
            <MemoField
              label="通院・薬局・付き添い予定"
              value={clinicPlans}
              onChange={setClinicPlans}
              placeholder="日付、病院名、付き添い予定者、薬の受け取り、次回予約"
            />
            <MemoField
              label="変更・追加・休止の可能性"
              value={changes}
              onChange={setChanges}
              placeholder="サービス変更、休止、振替、帰省予定、確認中の予定"
            />
            <MemoField
              label="負担の偏り・調整したいこと"
              value={burdenMemo}
              onChange={setBurdenMemo}
              placeholder="誰かに予定が集中している日、仕事と重なる日、交代を相談したいこと"
            />
            <MemoField
              label="ケアマネ・事業所・病院へ確認したいこと"
              value={questions}
              onChange={setQuestions}
              placeholder="月内の変更可否、送迎時間、受診前後の注意点、相談したいこと"
            />
            <MemoField
              label="家族に共有する要点"
              value={familyShare}
              onChange={setFamilyShare}
              placeholder="今月の重要日、未定の担当、次回家族連絡で決めること"
            />
          </div>
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-slate-900">出力メモ</h2>
            <button
              type="button"
              onClick={copyOutput}
              className="rounded-md bg-blue-700 px-4 py-2 text-sm font-bold text-white hover:bg-blue-800"
            >
              コピー
            </button>
          </div>
          <pre className="mt-4 min-h-[620px] whitespace-pre-wrap rounded-md bg-slate-50 p-4 text-sm leading-6 text-slate-800">
            {output}
          </pre>
          <div className="mt-5 space-y-3 rounded-md border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
            <p className="font-bold text-slate-900">次の導線</p>
            <a className="block font-semibold text-blue-700 hover:underline" href={KAIGO_NAVI_URL}>
              親のこと整理ナビで関連テンプレートを診断する
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={GUIDE_URL}>
              在宅介護の月間予定と家族分担を共有する方法を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              在宅介護の月間予定・家族分担カレンダーテンプレート集を見る
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

function MemoField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <label className="block text-sm font-semibold text-slate-800">
      {label}
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={4}
        className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm leading-6"
      />
    </label>
  );
}
