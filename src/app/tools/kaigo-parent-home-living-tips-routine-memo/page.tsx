"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_living_tips_routine";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-home-living-tips-routine-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_living_tips_routine";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383365";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

type FieldKey =
  | "scope"
  | "recordDate"
  | "place"
  | "item"
  | "season"
  | "parentWords"
  | "routine"
  | "familyMemo"
  | "avoidInfo"
  | "nextReview";

const initialValues: Record<FieldKey, string> = {
  scope: "",
  recordDate: "",
  place: "",
  item: "",
  season: "",
  parentWords: "",
  routine: "",
  familyMemo: "",
  avoidInfo: "",
  nextReview: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "scope",
    label: "対象範囲",
    placeholder: "例: 実家の暮らしの小さな段取り。家族内で見返すだけ。家事の正解や健康判断には使わない。",
    rows: 2,
  },
  {
    key: "recordDate",
    label: "聞いた日・聞いた人",
    placeholder: "例: 2026年6月1日、電話で長女が聞いた範囲を記録。",
    rows: 2,
  },
  {
    key: "place",
    label: "場所",
    placeholder: "例: 玄関まわり、台所まわり、押し入れ、物干し場、縁側、洗面まわり。",
    rows: 3,
  },
  {
    key: "item",
    label: "道具・小物",
    placeholder: "例: ふきん、雑巾、ほうき、洗濯ばさみ、のれん、座布団、湯のみ。家電や鍵は書かない。",
    rows: 4,
  },
  {
    key: "season",
    label: "季節・場面",
    placeholder: "例: 梅雨前、冬支度前、衣替え前、使った後、出した後、ふだんから。",
    rows: 3,
  },
  {
    key: "parentWords",
    label: "親が話してくれた言い方",
    placeholder: "例: 使ったあとはここに戻す。梅雨前にひと風通しする。ふだんはここへ掛けておく。",
    rows: 5,
  },
  {
    key: "routine",
    label: "小さなコツ・段取り",
    placeholder: "例: どの順で出すか、どこへ戻すか、季節前に何をするか。分からない部分は未確認で残す。",
    rows: 5,
  },
  {
    key: "familyMemo",
    label: "家族内メモ",
    placeholder: "例: 次回帰省時に押し入れまわりをもう一度聞く。兄弟姉妹で見返す場所に保存する。",
    rows: 4,
  },
  {
    key: "avoidInfo",
    label: "このメモに書かない情報",
    placeholder:
      "例: 住所、電話番号、鍵、暗証番号、パスワード、口座、カード、契約番号、本人確認情報、防犯情報、体調、症状、薬、医療や介護の判断。",
    rows: 4,
  },
  {
    key: "nextReview",
    label: "次に聞きたいこと・見返すタイミング",
    placeholder: "例: 梅雨前に見返す。次回電話でふきんの戻し方を聞き直す。",
    rows: 3,
  },
];

export default function KaigoParentHomeLivingTipsRoutineMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親に聞いた家の暮らしの小さなコツ・段取り 家族内メモ】",
      values.scope ? "対象範囲: " + values.scope : "対象範囲: 未入力",
      values.recordDate ? "聞いた日・聞いた人: " + values.recordDate : "聞いた日・聞いた人: 未入力",
      "",
      "■ 場所",
      values.place || "未入力",
      "",
      "■ 道具・小物",
      values.item || "未入力",
      "",
      "■ 季節・場面",
      values.season || "未入力",
      "",
      "■ 親が話してくれた言い方",
      values.parentWords || "未入力",
      "",
      "■ 小さなコツ・段取り",
      values.routine || "未入力",
      "",
      "■ 家族内メモ",
      values.familyMemo || "未入力",
      "",
      "■ このメモに書かない情報",
      values.avoidInfo ||
        "住所、電話番号、鍵、暗証番号、パスワード、口座、カード、契約番号、本人確認情報、防犯情報、体調、症状、薬、医療や介護の判断は書かない。",
      "",
      "■ 次に聞きたいこと・見返すタイミング",
      values.nextReview || "未入力",
      "",
      "※このメモは、親が話してくれた家のなかの小さな段取りを家族内で見返すための控えです。家事の正解、健康法、節約術、家事代行の手順、役割分担の判断には使いません。",
      "※住所、電話番号、鍵、暗証番号、パスワード、口座、カード、契約番号、本人確認情報、防犯情報などの個人情報や秘密情報は記録しないでください。",
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">
          高齢親に聞いた家の暮らしの小さなコツ・段取りメモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          親が話してくれた家のなかの場所、道具、小物、季節の変わり目、いつもの置き方や戻し方を、
          家族内で見返す軽い控えとして整理します。家事の正解、健康法、節約術、防犯情報、秘密情報の集約には使わないでください。
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
          <pre className="mt-4 min-h-[620px] whitespace-pre-wrap rounded-md bg-slate-50 p-4 text-sm leading-6 text-slate-800">
            {output}
          </pre>
          <div className="mt-5 space-y-3 rounded-md border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
            <p className="font-bold text-slate-900">関連リンク</p>
            <a className="block font-semibold text-blue-700 hover:underline" href={KAIGO_NAVI_URL}>
              親のこと整理ナビで関連テンプレートを見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={GUIDE_URL}>
              家の暮らしの小さなコツ・段取りメモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              家の暮らしの小さなコツ・段取りメモ テンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={PACK_URL}>
              親の介護はじめの37商品まとめセットを見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={FULL_PACK_URL}>
              介護まるごと総合パックを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは、親が話してくれた家の小さな段取りを家族内で見返すためのメモです。
        家事の正解、健康法、節約術、家事代行の手順、役割分担の判断には使いません。
        住所、電話番号、鍵、暗証番号、パスワード、口座、カード、契約番号、本人確認情報、防犯情報は記録しないでください。
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
