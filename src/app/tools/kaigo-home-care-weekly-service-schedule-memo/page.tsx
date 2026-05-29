"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=home_care_weekly_schedule";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/home-care-weekly-service-schedule-family-share?utm_source=net-toolbox&utm_medium=referral&utm_campaign=home_care_weekly_schedule";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8382953";

export default function KaigoHomeCareWeeklyServiceScheduleMemoPage() {
  const [weekStart, setWeekStart] = useState("");
  const [regularServices, setRegularServices] = useState("");
  const [weeklyChanges, setWeeklyChanges] = useState("");
  const [contacts, setContacts] = useState("");
  const [familyShare, setFamilyShare] = useState("");
  const [questions, setQuestions] = useState("");

  const output = useMemo(() => {
    return [
      "【在宅介護 週間サービス予定メモ】",
      weekStart ? `週の開始日: ${weekStart}` : "週の開始日: 未入力",
      "",
      "■ 今週の定期サービス予定",
      regularServices || "未入力",
      "",
      "■ 変更・休止・振替メモ",
      weeklyChanges || "未入力",
      "",
      "■ 担当事業所・連絡先",
      contacts || "未入力",
      "",
      "■ 家族に共有すること",
      familyShare || "未入力",
      "",
      "■ ケアマネ・事業所へ確認したいこと",
      questions || "未入力",
      "",
      "※このメモは家族内の予定整理用です。ケアプランの代替、サービス変更の指示、利用可否・給付・自己負担額の判断には使わず、担当ケアマネジャーや各事業所へ確認してください。",
    ].join("\n");
  }, [contacts, familyShare, questions, regularServices, weekStart, weeklyChanges]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <a href="/tools" className="text-sm font-semibold text-blue-700 hover:underline">
          ツール一覧へ戻る
        </a>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">在宅介護 週間サービス予定メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          訪問介護・デイサービス・訪問看護など、今週のサービス予定と変更・休止を家族内で共有するためのメモを作ります。
          ケアプランの代替ではなく、担当者へ確認する前の手元整理として使うツールです。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <label className="block text-sm font-semibold text-slate-800">
              週の開始日
              <input
                type="date"
                value={weekStart}
                onChange={(event) => setWeekStart(event.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </label>
            <MemoField
              label="今週の定期サービス予定"
              value={regularServices}
              onChange={setRegularServices}
              placeholder="例: 月曜 10:00 訪問介護、火曜 9:00 デイサービス送迎、木曜 14:00 訪問看護"
            />
            <MemoField
              label="変更・休止・振替メモ"
              value={weeklyChanges}
              onChange={setWeeklyChanges}
              placeholder="対象日、変更内容、連絡元、こちらから確認したこと"
            />
            <MemoField
              label="担当事業所・連絡先"
              value={contacts}
              onChange={setContacts}
              placeholder="ケアマネ、訪問介護事業所、デイサービス、訪問看護など"
            />
            <MemoField
              label="家族に共有すること"
              value={familyShare}
              onChange={setFamilyShare}
              placeholder="遠方の家族やきょうだいに伝える今週の要点"
            />
            <MemoField
              label="ケアマネ・事業所へ確認したいこと"
              value={questions}
              onChange={setQuestions}
              placeholder="変更や休止の確認、今後の予定、家族が迷っていること"
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
          <pre className="mt-4 min-h-[520px] whitespace-pre-wrap rounded-md bg-slate-50 p-4 text-sm leading-6 text-slate-800">
            {output}
          </pre>
          <div className="mt-5 space-y-3 rounded-md border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
            <p className="font-bold text-slate-900">次の導線</p>
            <a className="block font-semibold text-blue-700 hover:underline" href={KAIGO_NAVI_URL}>
              親のこと整理ナビで関連テンプレートを診断する
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={GUIDE_URL}>
              在宅介護の週間予定を家族で共有する方法を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              在宅介護の週間予定・訪問サービス予定表テンプレート集を見る
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
