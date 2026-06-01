"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_daily_cloth_items";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-home-daily-cloth-items-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_daily_cloth_items";
const NOTE_URL = "https://note.com/mild_quail6092/n/n8da1c3336e00";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383392";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383396";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

type FieldKey =
  | "recordDate"
  | "familyMember"
  | "clothItems"
  | "usualPlace"
  | "usualScene"
  | "familyWords"
  | "keepSeparate"
  | "nextReview";

const initialValues: Record<FieldKey, string> = {
  recordDate: "",
  familyMember: "",
  clothItems: "",
  usualPlace: "",
  usualScene: "",
  familyWords: "",
  keepSeparate: "",
  nextReview: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "recordDate",
    label: "記録日・聞いた人",
    placeholder: "例: 2026年6月1日、長女が帰省時に母から聞いた",
    rows: 2,
  },
  {
    key: "familyMember",
    label: "家族内で確認したい相手",
    placeholder: "例: 母、父、兄、妹など。家族内で通じる呼び方で書く",
    rows: 2,
  },
  {
    key: "clothItems",
    label: "手ぬぐい・タオル・前掛け・布巾など",
    placeholder: "例: 母の紺色の前掛け、父の古い手ぬぐい、玄関のお手ふき、花柄の布巾",
    rows: 4,
  },
  {
    key: "usualPlace",
    label: "いつもの置き場所",
    placeholder: "例: 台所の引き出し、洗面台のかご、玄関のタオル掛け、茶の間の棚",
    rows: 4,
  },
  {
    key: "usualScene",
    label: "よく使っていた場面",
    placeholder: "例: 正月の煮物、来客時のお茶準備、朝の洗面、親族の集まり",
    rows: 4,
  },
  {
    key: "familyWords",
    label: "親が話していた呼び方・由来",
    placeholder: "例: これは祖母が縫ってくれた前掛け、会社の記念の手ぬぐい、と聞いた",
    rows: 4,
  },
  {
    key: "keepSeparate",
    label: "このメモで判断しないこと",
    placeholder:
      "例: 査定、処分、修理、衛生状態、しみ抜き、除菌、正式な結び方、個人情報は別に確認する",
    rows: 4,
  },
  {
    key: "nextReview",
    label: "次に見返すこと",
    placeholder: "例: 次の帰省で母に前掛けの由来をもう一度聞く。兄に風呂敷の置き場所を確認する",
    rows: 3,
  },
];

export default function KaigoParentHomeDailyClothItemsMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親の家の手ぬぐい・タオル・前掛け・布巾 家族内メモ】",
      values.recordDate ? "記録日・聞いた人: " + values.recordDate : "記録日・聞いた人: 未入力",
      values.familyMember ? "家族内で確認したい相手: " + values.familyMember : "家族内で確認したい相手: 未入力",
      "",
      "■ 手ぬぐい・タオル・前掛け・布巾など",
      values.clothItems || "未入力",
      "",
      "■ いつもの置き場所",
      values.usualPlace || "未入力",
      "",
      "■ よく使っていた場面",
      values.usualScene || "未入力",
      "",
      "■ 親が話していた呼び方・由来",
      values.familyWords || "未入力",
      "",
      "■ このメモで判断しないこと",
      values.keepSeparate ||
        "査定、処分、修理、衛生状態、しみ抜き、除菌、正式な結び方、個人情報は別に確認する",
      "",
      "■ 次に見返すこと",
      values.nextReview || "未入力",
      "",
      "※このメモは家族内で布ものの呼び方、置き場所、使っていた場面を見返すための控えです。",
      "※査定、処分、修理、衛生、しみ抜き、除菌、正式な結び方などの判断には使いません。",
      "※住所、電話番号、口座、暗証番号、契約情報、本人確認情報などは記録しないでください。",
    ].join("\n");
  }, [values]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
  };

  const updateField = (key: FieldKey, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <a href="/tools" className="text-sm font-semibold text-blue-700 hover:underline">
          ツール一覧へ戻る
        </a>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">高齢親の家の手ぬぐい・タオル・前掛け・布巾メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          手ぬぐい、タオル、前掛け、かっぽう着、布巾、風呂敷など、親の家で日々使ってきた洗える布ものを家族内の控えとして整理します。
          価格や処分の判断ではなく、呼び方、置き場所、使っていた場面を次の帰省や親族の集まりの前に見返すためのメモです。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            {fields.map((field) => (
              <MemoField
                key={field.key}
                label={field.label}
                value={values[field.key]}
                onChange={(value) => updateField(field.key, value)}
                placeholder={field.placeholder}
                rows={field.rows}
              />
            ))}
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
          <pre className="mt-4 min-h-[560px] whitespace-pre-wrap rounded-md bg-slate-50 p-4 text-sm leading-6 text-slate-800">
            {output}
          </pre>
          <div className="mt-5 space-y-3 rounded-md border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
            <p className="font-bold text-slate-900">関連リンク</p>
            <a className="block font-semibold text-blue-700 hover:underline" href={KAIGO_NAVI_URL}>
              親のこと整理ナビで関連テンプレートを見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={GUIDE_URL}>
              布ものメモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={NOTE_URL}>
              noteの案内を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              手ぬぐい・タオル・前掛け・布巾メモ テンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={PACK_URL}>
              家のなかの日用品メモスターターセットを見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={FULL_PACK_URL}>
              介護まるごと総合パックを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは、家族内で布ものの呼び方や置き場所を見返すためのメモです。査定、処分、修理、衛生状態、
        しみ抜き、除菌、正式な結び方などの判断には使えません。住所、電話番号、口座、暗証番号、契約情報、
        本人確認情報などは記録しないでください。
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
