"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_decoration_seasonal_ornament";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-home-decoration-seasonal-ornament-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_decoration_seasonal_ornament";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383373";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

type FieldKey =
  | "scope"
  | "recordDate"
  | "displayPlace"
  | "itemName"
  | "seasonTiming"
  | "displayStyle"
  | "parentWords"
  | "familyMemory"
  | "familyMemo"
  | "excludedInfo"
  | "nextReview";

const initialValues: Record<FieldKey, string> = {
  scope: "",
  recordDate: "",
  displayPlace: "",
  itemName: "",
  seasonTiming: "",
  displayStyle: "",
  parentWords: "",
  familyMemory: "",
  familyMemo: "",
  excludedInfo: "",
  nextReview: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "scope",
    label: "対象範囲",
    placeholder:
      "例: 家のなかで親が日常や季節の節目に飾っていた飾りもの・置きもの・季節飾り。家族内で見返す控えにする。",
    rows: 3,
  },
  {
    key: "recordDate",
    label: "見た日・控えた人",
    placeholder: "例: 2026年6月1日、帰省時に長男が見た範囲を控えた。",
    rows: 2,
  },
  {
    key: "displayPlace",
    label: "飾っていた場所",
    placeholder: "例: 玄関の靴箱の上、サイドボード、出窓、仏間の棚、本棚の上、壁の小さな額。",
    rows: 4,
  },
  {
    key: "itemName",
    label: "飾っていたもの",
    placeholder: "例: 花瓶の一輪挿し、干支の置きもの、お雛さま、七夕飾り、クリスマスリース。",
    rows: 4,
  },
  {
    key: "seasonTiming",
    label: "季節・場面",
    placeholder: "例: 正月前後、節分、春先、来客前、命日が近い時期、特に決まっていない日常の飾り。",
    rows: 4,
  },
  {
    key: "displayStyle",
    label: "飾り方・一緒に置いていたもの",
    placeholder: "例: 白い敷き布の上に置く。写真立てと並べる。小さな花瓶と一緒に飾る。",
    rows: 4,
  },
  {
    key: "parentWords",
    label: "親が呼んでいた名前・話していたこと",
    placeholder: "例: 「毎年ここに出すの」と言っていた。家族内で分かる呼び名だけを控える。",
    rows: 4,
  },
  {
    key: "familyMemory",
    label: "家族内で思い出す手がかり",
    placeholder: "例: 玄関を入ると必ず見えた。来客前に出していた。写真を撮るときの背景によく写っていた。",
    rows: 4,
  },
  {
    key: "familyMemo",
    label: "家族内メモ",
    placeholder: "例: 兄弟姉妹で覚え方が違う場合は複数の記憶を併記する。正しさや価値は決めない。",
    rows: 4,
  },
  {
    key: "excludedInfo",
    label: "このメモに書かない情報",
    placeholder:
      "例: 住所、電話番号、口座、カード、契約番号、会員番号、暗証番号、パスワード、認証情報、鍵、防犯コード、第三者の連絡先。",
    rows: 4,
  },
  {
    key: "nextReview",
    label: "次に見返すこと・追記したいこと",
    placeholder: "例: 次回帰省時に玄関と棚だけ確認する。季節飾りは写真ではなく言葉だけで控える。",
    rows: 3,
  },
];

export default function KaigoParentHomeDecorationSeasonalOrnamentMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親の家の飾りもの・置きもの・季節飾り 家族内メモ】",
      values.scope ? "対象範囲: " + values.scope : "対象範囲: 未入力",
      values.recordDate ? "見た日・控えた人: " + values.recordDate : "見た日・控えた人: 未入力",
      "",
      "■ 飾っていた場所",
      values.displayPlace || "未入力",
      "",
      "■ 飾っていたもの",
      values.itemName || "未入力",
      "",
      "■ 季節・場面",
      values.seasonTiming || "未入力",
      "",
      "■ 飾り方・一緒に置いていたもの",
      values.displayStyle || "未入力",
      "",
      "■ 親が呼んでいた名前・話していたこと",
      values.parentWords || "未入力",
      "",
      "■ 家族内で思い出す手がかり",
      values.familyMemory || "未入力",
      "",
      "■ 家族内メモ",
      values.familyMemo || "未入力",
      "",
      "■ このメモに書かない情報",
      values.excludedInfo ||
        "住所、電話番号、口座、カード、契約番号、会員番号、暗証番号、パスワード、認証情報、鍵の所在、防犯コード、第三者の連絡先は書かない。",
      "",
      "■ 次に見返すこと・追記したいこと",
      values.nextReview || "未入力",
      "",
      "※このメモは、親が家のなかで日常や季節の節目に飾ってきたものを、家族内で見返すための控えです。",
      "※鑑定、査定、真贋、所有、処分、形見分け、宗教的な作法、インテリアの良し悪しの判断には使いません。",
      "※住所、電話番号、口座、カード、契約番号、会員番号、暗証番号、パスワード、認証情報、鍵、防犯コード、第三者の連絡先は記録しないでください。",
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
          高齢親の家の飾りもの・置きもの・季節飾りメモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          親が家のなかで日常や季節の節目に飾ってきたものを、家族内で見返す軽い控えとして整理します。
          鑑定、処分、宗教作法、家族外への公開、秘密情報の集約には使わないでください。
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
              飾りもの・置きもの・季節飾りメモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              飾りもの・置きもの・季節飾りメモ テンプレート集を見る
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
        このツールは、親が家のなかで日常や季節の節目に飾ってきたものを、家族内で見返すためのメモです。
        鑑定、査定、真贋、所有、処分、形見分け、宗教的な作法、インテリアの良し悪しの判断には使いません。
        住所、電話番号、口座、カード、契約番号、会員番号、暗証番号、パスワード、認証情報、鍵、防犯コード、第三者の連絡先は記録しないでください。
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
