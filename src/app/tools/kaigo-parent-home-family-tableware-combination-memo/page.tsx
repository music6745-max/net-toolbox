"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_family_tableware_combination";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-home-family-tableware-combination-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_family_tableware_combination";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383386";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383387";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

type FieldKey =
  | "recordDate"
  | "familyMember"
  | "dailyTableware"
  | "usualScene"
  | "seasonalSetting"
  | "parentWords"
  | "familyMemory"
  | "notForUse"
  | "lastChecked"
  | "nextReview";

const initialValues: Record<FieldKey, string> = {
  recordDate: "",
  familyMember: "",
  dailyTableware: "",
  usualScene: "",
  seasonalSetting: "",
  parentWords: "",
  familyMemory: "",
  notForUse: "",
  lastChecked: "",
  nextReview: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "recordDate",
    label: "記入日・聞いた人",
    placeholder: "例: 2026年6月1日、帰省時に長女が母から聞いた",
    rows: 2,
  },
  {
    key: "familyMember",
    label: "対象の家族メンバー",
    placeholder: "例: 父、母、祖母、長男、孫など。家族内で通じる呼び方で書く",
    rows: 3,
  },
  {
    key: "dailyTableware",
    label: "いつもの茶碗・湯のみ・お椀",
    placeholder: "例: 父は黒くて大きい茶碗、母は花柄の細い湯のみ、祖母は緑の塗りお椀",
    rows: 4,
  },
  {
    key: "usualScene",
    label: "ふだんの食卓での取り合わせ",
    placeholder: "例: 朝は茶碗と白いお椀、日中のお茶は花柄の湯のみと小さい菓子皿",
    rows: 4,
  },
  {
    key: "seasonalSetting",
    label: "節目・来客時の取り合わせ",
    placeholder: "例: 正月は黒塗りのお盆と赤い取り皿、親族の集まりでは青い小鉢を出す",
    rows: 4,
  },
  {
    key: "parentWords",
    label: "親が話してくれた言葉",
    placeholder: "例: これは結婚祝いでもらったらしい、祖母の代から使っていると聞いた",
    rows: 4,
  },
  {
    key: "familyMemory",
    label: "家族内で見返したい覚え",
    placeholder: "例: 兄弟姉妹で覚えが違うところは両方併記する。正解を決める欄にしない",
    rows: 4,
  },
  {
    key: "notForUse",
    label: "このメモに書かないこと",
    placeholder:
      "例: 価格、鑑定、処分、相続、食事制限、食物アレルギー、賞味期限、住所、電話番号、口座番号、暗証番号は書かない",
    rows: 4,
  },
  {
    key: "lastChecked",
    label: "最後に確認した人・場面",
    placeholder: "例: 2026年お盆前、次男が食器棚を見ながら確認",
    rows: 3,
  },
  {
    key: "nextReview",
    label: "次に見返すこと",
    placeholder: "例: 次の帰省時に、母が使う湯のみと来客用の小皿をもう一度聞く",
    rows: 3,
  },
];

export default function KaigoParentHomeFamilyTablewareCombinationMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親の家族別 食器・食卓取り合わせ 家族内メモ】",
      values.recordDate ? "記入日・聞いた人: " + values.recordDate : "記入日・聞いた人: 未入力",
      values.familyMember ? "対象の家族メンバー: " + values.familyMember : "対象の家族メンバー: 未入力",
      "",
      "■ いつもの茶碗・湯のみ・お椀",
      values.dailyTableware || "未入力",
      "",
      "■ ふだんの食卓での取り合わせ",
      values.usualScene || "未入力",
      "",
      "■ 節目・来客時の取り合わせ",
      values.seasonalSetting || "未入力",
      "",
      "■ 親が話してくれた言葉",
      values.parentWords || "未入力",
      "",
      "■ 家族内で見返したい覚え",
      values.familyMemory || "未入力",
      "",
      "■ このメモに書かないこと",
      values.notForUse ||
        "価格、鑑定、処分、形見分け、相続、所有権、食事制限、食物アレルギー、衛生、賞味期限、住所、電話番号、口座番号、暗証番号などは書かない。",
      "",
      "■ 最後に確認した人・場面",
      values.lastChecked || "未入力",
      "",
      "■ 次に見返すこと",
      values.nextReview || "未入力",
      "",
      "※このメモは、家族内で通じる食器・食卓の取り合わせを見返すための覚え書きです。",
      "※鑑定、査定、市場価値、処分、形見分け、所有権、相続、食品衛生、食事制限、食物アレルギーなどの判断には使いません。",
      "※住所、電話番号、口座番号、カード番号、暗証番号、パスワード、認証情報、防犯情報は記入しないでください。",
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
          高齢親の家族別食器・食卓取り合わせメモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          茶碗、湯のみ、お椀、取り皿、お盆など、家族内で通じる食卓の取り合わせを軽く控えるためのメモです。
          価値判断や処分判断ではなく、次の帰省や家族の集まりの前に見返す覚え書きとして使います。
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
          <pre className="mt-4 min-h-[640px] whitespace-pre-wrap rounded-md bg-slate-50 p-4 text-sm leading-6 text-slate-800">
            {output}
          </pre>
          <div className="mt-5 space-y-3 rounded-md border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
            <p className="font-bold text-slate-900">関連リンク</p>
            <a className="block font-semibold text-blue-700 hover:underline" href={KAIGO_NAVI_URL}>
              親のこと整理ナビで関連テンプレートを見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={GUIDE_URL}>
              食器・食卓取り合わせメモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              食器・食卓取り合わせメモ テンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={PACK_URL}>
              介護はじめの74商品まとめセットを見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={FULL_PACK_URL}>
              介護まるごと総合パックを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは、家族内で食器や食卓の取り合わせを見返すためのメモです。食器の価値、処分、相続、食事制限、食品衛生、食物アレルギーなどの判断には使いません。
        個人情報、秘密情報、防犯情報、認証情報は記入しないでください。
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
