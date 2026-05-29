"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL = "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=clinic_visit";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/clinic-visit-before-after-family-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=clinic_visit";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8427038";

export default function KaigoClinicVisitRecordMemoPage() {
  const [date, setDate] = useState("");
  const [hospital, setHospital] = useState("");
  const [department, setDepartment] = useState("");
  const [beforeMemo, setBeforeMemo] = useState("");
  const [questions, setQuestions] = useState("");
  const [doctorMemo, setDoctorMemo] = useState("");
  const [pharmacyMemo, setPharmacyMemo] = useState("");
  const [nextPlan, setNextPlan] = useState("");
  const [shareMemo, setShareMemo] = useState("");

  const output = useMemo(() => {
    return [
      "【通院付き添い記録メモ】",
      date ? `受診日: ${date}` : "受診日: 未入力",
      hospital ? `医療機関: ${hospital}` : "医療機関: 未入力",
      department ? `診療科・担当: ${department}` : "診療科・担当: 未入力",
      "",
      "■ 受診前に伝えたいこと",
      beforeMemo || "未入力",
      "",
      "■ 医師・薬剤師へ確認したいこと",
      questions || "未入力",
      "",
      "■ 受診後に聞いた説明メモ",
      doctorMemo || "未入力",
      "",
      "■ 薬局で聞いたこと・お薬手帳の変更メモ",
      pharmacyMemo || "未入力",
      "",
      "■ 次回予定・次回までに確認すること",
      nextPlan || "未入力",
      "",
      "■ 家族に共有すること",
      shareMemo || "未入力",
      "",
      "※このメモは家族内の記録整理用です。受診要否、診断、治療方針、薬の副作用や飲み合わせは医師・薬剤師などへ確認してください。",
    ].join("\n");
  }, [beforeMemo, date, department, doctorMemo, hospital, nextPlan, pharmacyMemo, questions, shareMemo]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <a href="/tools" className="text-sm font-semibold text-blue-700 hover:underline">
          ツール一覧へ戻る
        </a>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">通院付き添い記録メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          親の通院付き添い前後に、受診前の質問、受診後に聞いた説明、薬局メモ、次回予定、家族共有事項を整理します。
          医療判断ではなく、相談前後の記録として使うためのメモです。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <label className="block text-sm font-semibold text-slate-800">
              受診日
              <input
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </label>
            <label className="block text-sm font-semibold text-slate-800">
              医療機関
              <input
                value={hospital}
                onChange={(event) => setHospital(event.target.value)}
                placeholder="例: 〇〇クリニック"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </label>
            <label className="block text-sm font-semibold text-slate-800">
              診療科・担当
              <input
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
                placeholder="例: 内科、整形外科、薬局名など"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </label>
            <MemoField label="受診前に伝えたいこと" value={beforeMemo} onChange={setBeforeMemo} placeholder="前回からの変化、本人が困っていること、家族が気づいたこと" />
            <MemoField label="医師・薬剤師へ確認したいこと" value={questions} onChange={setQuestions} placeholder="聞きたいことを箇条書きで入力" />
            <MemoField label="受診後に聞いた説明メモ" value={doctorMemo} onChange={setDoctorMemo} placeholder="医師から説明された要点、次回までの注意点など" />
            <MemoField label="薬局で聞いたこと・お薬手帳の変更メモ" value={pharmacyMemo} onChange={setPharmacyMemo} placeholder="薬剤師から聞いた内容、変更の有無、次回確認したいこと" />
            <MemoField label="次回予定・次回までに確認すること" value={nextPlan} onChange={setNextPlan} placeholder="次回受診日、予約、持参物、家族内で確認すること" />
            <MemoField label="家族に共有すること" value={shareMemo} onChange={setShareMemo} placeholder="同席していない家族へ伝える要点" />
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
              通院付き添い前後に記録することを読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              通院付き添い・受診前後記録テンプレート集を見る
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
