"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_meal_water_weight";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-meal-water-weight-daily-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_meal_water_weight";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8382987";

export default function KaigoParentMealWaterWeightRecordMemoPage() {
  const [recordDate, setRecordDate] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const [water, setWater] = useState("");
  const [weight, setWeight] = useState("");
  const [observations, setObservations] = useState("");
  const [familyShare, setFamilyShare] = useState("");
  const [consultMemo, setConsultMemo] = useState("");

  const output = useMemo(() => {
    return [
      "【高齢親 食事・水分・体重記録メモ】",
      recordDate ? `記録日: ${recordDate}` : "記録日: 未入力",
      "",
      "■ 朝食の様子",
      breakfast || "未入力",
      "",
      "■ 昼食の様子",
      lunch || "未入力",
      "",
      "■ 夕食の様子",
      dinner || "未入力",
      "",
      "■ 水分のとり方",
      water || "未入力",
      "",
      "■ 体重・測定メモ",
      weight || "未入力",
      "",
      "■ 気になった変化・本人の様子",
      observations || "未入力",
      "",
      "■ 家族への申し送り",
      familyShare || "未入力",
      "",
      "■ 受診時・ケアマネへ伝えたいこと",
      consultMemo || "未入力",
      "",
      "※このメモは家族内の情報整理用です。食事量、水分量、体重変化、栄養状態、病気、服薬、受診要否の判断はできません。気になる変化がある場合は、かかりつけ医、管理栄養士、看護師、薬剤師、担当ケアマネジャーなどへ相談してください。",
    ].join("\n");
  }, [breakfast, consultMemo, dinner, familyShare, lunch, observations, recordDate, water, weight]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <a href="/tools" className="text-sm font-semibold text-blue-700 hover:underline">
          ツール一覧へ戻る
        </a>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">高齢親 食事・水分・体重記録メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          在宅介護中の食事の様子、水分のとり方、体重、気になる変化、受診時に伝えたいことを家族内で整理します。
          食事量や水分量、体重変化の良し悪しを判断するツールではありません。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <MemoField
              label="記録日"
              value={recordDate}
              onChange={setRecordDate}
              placeholder="例: 2026年5月30日、土曜日"
              rows={2}
            />
            <MemoField
              label="朝食の様子"
              value={breakfast}
              onChange={setBreakfast}
              placeholder="例: おかゆを半分ほど。むせはなし。いつもより時間がかかった。"
            />
            <MemoField
              label="昼食の様子"
              value={lunch}
              onChange={setLunch}
              placeholder="例: 主食は少なめ。副菜は少し食べた。食後に眠そうだった。"
            />
            <MemoField
              label="夕食の様子"
              value={dinner}
              onChange={setDinner}
              placeholder="例: 声かけで少しずつ食べた。食べにくそうなものがあった。"
            />
            <MemoField
              label="水分のとり方"
              value={water}
              onChange={setWater}
              placeholder="例: 朝と昼は声かけで飲めた。夕方はあまり進まなかった。"
            />
            <MemoField
              label="体重・測定メモ"
              value={weight}
              onChange={setWeight}
              placeholder="例: 体重は測定できず。前回より服がゆるく感じた。"
            />
            <MemoField
              label="気になった変化・本人の様子"
              value={observations}
              onChange={setObservations}
              placeholder="例: 午後に疲れやすい。話しかけると返事はある。歩く時にふらつきが少しあった。"
            />
            <MemoField
              label="家族への申し送り"
              value={familyShare}
              onChange={setFamilyShare}
              placeholder="例: 明日も水分の声かけを確認。夕食後の様子を妹へ共有する。"
            />
            <MemoField
              label="受診時・ケアマネへ伝えたいこと"
              value={consultMemo}
              onChange={setConsultMemo}
              placeholder="例: 食事量が減っているように見える時の相談先、体重測定の頻度、栄養相談の必要性を確認したい。"
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
            <p className="font-bold text-slate-900">次の整理</p>
            <a className="block font-semibold text-blue-700 hover:underline" href={KAIGO_NAVI_URL}>
              親のこと整理ナビで関連テンプレートを診断する
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={GUIDE_URL}>
              食事・水分・体重を毎日記録する方法を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              高齢親の食事・水分・体重の毎日記録テンプレート集を見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは家族内の情報整理用です。食事量、水分量、体重変化、栄養状態、病気、服薬、受診要否の判断はできません。
        気になる変化がある場合は、かかりつけ医、管理栄養士、看護師、薬剤師、担当ケアマネジャーなどへ相談してください。
      </section>
    </main>
  );
}

function MemoField({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  rows?: number;
}) {
  return (
    <label className="block text-sm font-semibold text-slate-800">
      {label}
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm leading-6"
      />
    </label>
  );
}
