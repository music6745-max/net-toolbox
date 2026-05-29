"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL = "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=post_discharge_month";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/post-discharge-one-month-home-monitoring-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=post_discharge_month";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8427230";

export default function KaigoPostDischargeMonthRecordMemoPage() {
  const [date, setDate] = useState("");
  const [mealMemo, setMealMemo] = useState("");
  const [waterMemo, setWaterMemo] = useState("");
  const [sleepMemo, setSleepMemo] = useState("");
  const [activityMemo, setActivityMemo] = useState("");
  const [supportMemo, setSupportMemo] = useState("");
  const [concernMemo, setConcernMemo] = useState("");
  const [nextQuestion, setNextQuestion] = useState("");
  const [familyShare, setFamilyShare] = useState("");

  const output = useMemo(() => {
    return [
      "【退院後1か月 生活見守り記録メモ】",
      date ? `記録日: ${date}` : "記録日: 未入力",
      "",
      "■ 食事の様子",
      mealMemo || "未入力",
      "",
      "■ 水分の様子",
      waterMemo || "未入力",
      "",
      "■ 睡眠の様子",
      sleepMemo || "未入力",
      "",
      "■ 日中の活動・移動の様子",
      activityMemo || "未入力",
      "",
      "■ 担当者から伝えられたこと",
      supportMemo || "未入力",
      "",
      "■ 家族が気になったこと",
      concernMemo || "未入力",
      "",
      "■ 次の訪問・面談で確認したいこと",
      nextQuestion || "未入力",
      "",
      "■ 家族に共有すること",
      familyShare || "未入力",
      "",
      "※このメモは家族内の記録整理用です。体調悪化の緊急性、受診要否、在宅療養の継続可否は、かかりつけ医・訪問看護師・救急相談窓口などへ確認してください。",
    ].join("\n");
  }, [activityMemo, concernMemo, date, familyShare, mealMemo, nextQuestion, sleepMemo, supportMemo, waterMemo]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <a href="/tools" className="text-sm font-semibold text-blue-700 hover:underline">
          ツール一覧へ戻る
        </a>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">退院後1か月生活記録メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          親が退院して自宅に戻った後の食事・水分・睡眠・活動・担当者へ伝えることを整理します。
          医療判断ではなく、家族内共有と面談前の手元メモとして使うためのツールです。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <label className="block text-sm font-semibold text-slate-800">
              記録日
              <input
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </label>
            <MemoField label="食事の様子" value={mealMemo} onChange={setMealMemo} placeholder="食べた量、食欲、気になったこと" />
            <MemoField label="水分の様子" value={waterMemo} onChange={setWaterMemo} placeholder="飲む量の様子、声かけ、担当者へ聞きたいこと" />
            <MemoField label="睡眠の様子" value={sleepMemo} onChange={setSleepMemo} placeholder="就寝、起床、夜間の様子、昼寝など" />
            <MemoField label="日中の活動・移動の様子" value={activityMemo} onChange={setActivityMemo} placeholder="室内移動、外出、疲れやすさ、転倒やヒヤリハット" />
            <MemoField label="担当者から伝えられたこと" value={supportMemo} onChange={setSupportMemo} placeholder="ヘルパー、訪問看護師、ケアマネから聞いたこと" />
            <MemoField label="家族が気になったこと" value={concernMemo} onChange={setConcernMemo} placeholder="気になる変化、次に共有したいこと" />
            <MemoField label="次の訪問・面談で確認したいこと" value={nextQuestion} onChange={setNextQuestion} placeholder="担当者へ聞きたいこと" />
            <MemoField label="家族に共有すること" value={familyShare} onChange={setFamilyShare} placeholder="遠方の家族やきょうだいに伝える要点" />
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
              退院後1か月に記録することを読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              退院後1か月の生活見守り記録テンプレート集を見る
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
