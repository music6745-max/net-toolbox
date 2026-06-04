"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_everyday_personal_items";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-everyday-personal-items-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_everyday_personal_items";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383157";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

type FieldKey =
  | "targetPerson"
  | "recordDate"
  | "mealItems"
  | "relaxItems"
  | "outingItems"
  | "featureMemo"
  | "familyMemo"
  | "avoidInfo"
  | "nextCheck";

const initialValues: Record<FieldKey, string> = {
  targetPerson: "",
  recordDate: "",
  mealItems: "",
  relaxItems: "",
  outingItems: "",
  featureMemo: "",
  familyMemo: "",
  avoidInfo: "",
  nextCheck: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "targetPerson",
    label: "対象の親・共有範囲",
    placeholder: "例: 母がいつも使っている品。長女・長男で帰省前に見返す。外部公開用には使わない。",
    rows: 2,
  },
  {
    key: "recordDate",
    label: "記録日・見た場面",
    placeholder: "例: 2026年6月4日、帰省時の朝食後に本人が使っているところを見て控えた。",
    rows: 2,
  },
  {
    key: "mealItems",
    label: "食事まわりのいつもの品",
    placeholder:
      "例:\n- 湯飲み: 縁が黒いもの。朝のお茶で使う\n- 茶碗: 白地に青い線。食器棚の右側\n- 箸: 木目の細いもの。家族内で見分けるための控え",
    rows: 5,
  },
  {
    key: "relaxItems",
    label: "くつろぎまわりのいつもの品",
    placeholder:
      "例:\n- 座布団: 青っぽい柄。テレビを見るときに使う\n- ひざ掛け: 冬に茶の間で使う\n- 室内履き: 玄関近くに置いてある",
    rows: 5,
  },
  {
    key: "outingItems",
    label: "外出まわりの小物",
    placeholder:
      "例:\n- 帽子: 夏によく使う薄い色のもの\n- ハンカチ: 玄関の棚にあるもの\n- いつものバッグ: 外側の色と形だけ控え、中身は書かない",
    rows: 5,
  },
  {
    key: "featureMemo",
    label: "見分けるための特徴メモ",
    placeholder:
      "例:\n- 似た湯飲みが並ぶときは、縁が黒い方が本人のもの\n- 座布団は厚みより色で見分ける\n- バッグや手帳の中身は書かない",
    rows: 4,
  },
  {
    key: "familyMemo",
    label: "家族内メモ",
    placeholder:
      "例:\n- 兄弟で覚えている呼び方が違う場合は併記する\n- 親本人が話した範囲だけ控える\n- 処分や評価の判断には使わない",
    rows: 4,
  },
  {
    key: "avoidInfo",
    label: "このメモに書かない情報",
    placeholder:
      "例: バッグや手帳の中身、住所、電話番号、会員番号、支払い情報、暗証番号、アカウント情報、査定・売却・処分・専門的な評価の判断。",
    rows: 4,
  },
  {
    key: "nextCheck",
    label: "次に見返す・聞いてみたいこと",
    placeholder: "例: 次回帰省時に、湯飲みと室内履きが変わっていないか無理なく見返す。",
    rows: 3,
  },
];

export default function KaigoParentEverydayPersonalItemsMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親のいつもの身の回り品・お気に入り小物メモ】",
      values.targetPerson ? "対象の親・共有範囲: " + values.targetPerson : "対象の親・共有範囲: 未入力",
      values.recordDate ? "記録日・見た場面: " + values.recordDate : "記録日・見た場面: 未入力",
      "",
      "■ 食事まわりのいつもの品",
      values.mealItems || "未入力",
      "",
      "■ くつろぎまわりのいつもの品",
      values.relaxItems || "未入力",
      "",
      "■ 外出まわりの小物",
      values.outingItems || "未入力",
      "",
      "■ 見分けるための特徴メモ",
      values.featureMemo || "未入力",
      "",
      "■ 家族内メモ",
      values.familyMemo || "未入力",
      "",
      "■ このメモに書かない情報",
      values.avoidInfo ||
        "バッグや手帳の中身、住所、電話番号、会員番号、支払い情報、暗証番号、アカウント情報、査定・売却・処分・専門的な評価の判断は書かない。",
      "",
      "■ 次に見返す・聞いてみたいこと",
      values.nextCheck || "未入力",
      "",
      "※このメモは、親がふだん使っている身の回り品や小物を、家族内で見分けるための控えです。",
      "※物の良し悪し、査定、売却、処分、将来の整理、専門的な評価の判断には使いません。",
      "※バッグや手帳の中身、住所、電話番号、会員番号、支払い情報、暗証番号、アカウント情報は記録しないでください。",
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
          高齢親のいつもの身の回り品・お気に入り小物メモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          親がふだん使っている湯飲み、座布団、室内履き、帽子、ハンカチなどを家族内の控えとして整理します。
          価値判断、処分判断、専門的な評価、個人情報の記録には使わないでください。
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
          <pre className="mt-4 min-h-[680px] whitespace-pre-wrap rounded-md bg-slate-50 p-4 text-sm leading-6 text-slate-800">
            {output}
          </pre>
          <div className="mt-5 space-y-3 rounded-md border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
            <p className="font-bold text-slate-900">関連リンク</p>
            <a className="block font-semibold text-blue-700 hover:underline" href={KAIGO_NAVI_URL}>
              親のこと整理ナビで関連テンプレートを見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={GUIDE_URL}>
              身の回り品・お気に入り小物メモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              身の回り品・お気に入り小物メモ テンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={FULL_PACK_URL}>
              介護まるごと総合パックを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは、家族内で親のいつもの品を見分けるためのメモです。
        査定、売却、処分、将来の整理、専門的な評価、健康状態の判断には使えません。
        バッグや手帳の中身、住所、電話番号、会員番号、支払い情報、暗証番号、アカウント情報は記録しないでください。
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
