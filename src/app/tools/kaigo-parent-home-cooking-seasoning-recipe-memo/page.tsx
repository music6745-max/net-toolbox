"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_cooking_seasoning_recipe";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-home-cooking-seasoning-recipe-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_cooking_seasoning_recipe";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383190";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

type FieldKey =
  | "targetRecipe"
  | "recordDate"
  | "dishName"
  | "familyMemory"
  | "ingredients"
  | "steps"
  | "seasoningNotes"
  | "trialMemo"
  | "avoidInfo"
  | "nextReview";

const initialValues: Record<FieldKey, string> = {
  targetRecipe: "",
  recordDate: "",
  dishName: "",
  familyMemory: "",
  ingredients: "",
  steps: "",
  seasoningNotes: "",
  trialMemo: "",
  avoidInfo: "",
  nextReview: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "targetRecipe",
    label: "対象の料理・共有範囲",
    placeholder: "例: 母の煮物メモ。家族内で見返すだけ。公開用レシピや健康判断には使わない。",
    rows: 2,
  },
  {
    key: "recordDate",
    label: "記入日・聞いた人",
    placeholder: "例: 2026年6月1日、帰省時に長女が聞いた範囲を記入。",
    rows: 2,
  },
  {
    key: "dishName",
    label: "料理名・親の呼び方",
    placeholder:
      "例:\n- いつもの煮物\n- 祖母から聞いた味\n- 家族内では『正月の甘い煮物』と呼んでいる",
    rows: 4,
  },
  {
    key: "familyMemory",
    label: "思い出・話してくれた背景",
    placeholder:
      "例: どんな日に作っていたか、誰が好きだったか、親が話してくれた短い思い出。事実確認が必要な話は断定しない。",
    rows: 4,
  },
  {
    key: "ingredients",
    label: "材料・目分量",
    placeholder:
      "例:\n- 里いも: ある分だけ\n- にんじん: 小さめに切る\n- だし: 鍋にひたるくらい\n※アレルギーや栄養判断には使わない。",
    rows: 5,
  },
  {
    key: "steps",
    label: "作り方・火加減・タイミング",
    placeholder:
      "例: 最初は強め、煮立ったら弱め。親が『この色になったら』と言っていた状態。正確でない部分は未確認として残す。",
    rows: 5,
  },
  {
    key: "seasoningNotes",
    label: "味つけの加減",
    placeholder:
      "例: 甘め、最後にしょうゆを少し足す、香りを見て調整。塩分管理や食事制限の判断には使わない。",
    rows: 5,
  },
  {
    key: "trialMemo",
    label: "家族内の試作メモ",
    placeholder:
      "例: 試して近かった点、違った点、次に少し変える点。第三者への公開や商品化を目的にしない。",
    rows: 4,
  },
  {
    key: "avoidInfo",
    label: "このメモに書かない情報",
    placeholder:
      "例: 食事制限、アレルギー判断、栄養療法、介護食、衛生・保存期限、食中毒、体調や医療の判断、住所、電話番号、口座、カード、ログイン情報、本人確認情報。",
    rows: 4,
  },
  {
    key: "nextReview",
    label: "次に聞きたいこと・見返すタイミング",
    placeholder: "例: 次回帰省時に火加減をもう一度聞く。年末に家族で試作メモを見返す。",
    rows: 3,
  },
];

export default function KaigoParentHomeCookingSeasoningRecipeMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親の家庭料理・味つけ・作り方 家族内メモ】",
      values.targetRecipe ? "対象の料理・共有範囲: " + values.targetRecipe : "対象の料理・共有範囲: 未入力",
      values.recordDate ? "記入日・聞いた人: " + values.recordDate : "記入日・聞いた人: 未入力",
      "",
      "■ 料理名・親の呼び方",
      values.dishName || "未入力",
      "",
      "■ 思い出・話してくれた背景",
      values.familyMemory || "未入力",
      "",
      "■ 材料・目分量",
      values.ingredients || "未入力",
      "",
      "■ 作り方・火加減・タイミング",
      values.steps || "未入力",
      "",
      "■ 味つけの加減",
      values.seasoningNotes || "未入力",
      "",
      "■ 家族内の試作メモ",
      values.trialMemo || "未入力",
      "",
      "■ このメモに書かない情報",
      values.avoidInfo ||
        "食事制限、アレルギー判断、栄養療法、介護食、衛生・保存期限、食中毒、体調や医療の判断、住所、電話番号、口座、カード、ログイン情報、本人確認情報は書かない。",
      "",
      "■ 次に聞きたいこと・見返すタイミング",
      values.nextReview || "未入力",
      "",
      "※このメモは、家庭料理を家族内で思い出として見返すための控えです。食事制限、アレルギー、栄養管理、介護食、衛生・保存期限、食中毒、体調や医療の判断には使えません。",
      "※SNS、ブログ、出版、販売、商品化、第三者への共有、著作権や権利者の許諾が関わる用途には使わないでください。秘密情報や個人情報も記録しないでください。",
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
          高齢親の家庭料理・味つけ・作り方メモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          親が話してくれた家庭料理の名前、材料、目分量、火加減、味つけの加減、思い出を、家族内で見返す控えとして整理します。
          食事制限、アレルギー、栄養管理、衛生、体調、医療、公開用レシピの判断には使わないでください。
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
              家庭料理・味つけメモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              家庭料理・味つけ・作り方メモ テンプレート集を見る
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
        このツールは、家庭料理を家族内で思い出として見返すためのメモです。
        食事制限、アレルギー、栄養管理、介護食、衛生・保存期限、食中毒、体調や医療の判断には使えません。
        SNS、ブログ、出版、販売、商品化、第三者への共有、著作権や権利者の許諾が関わる用途にも使わないでください。
        住所、電話番号、口座、カード、ログイン情報、本人確認情報などは記録しないでください。
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
