"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_family_small_box_container";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-home-family-small-box-container-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_family_small_box_container";
const NOTE_URL = "https://note.com/mild_quail6092/n/n48ea43b4290b";
const BOOTH_URL =
  "https://kaigo-okane.booth.pm/items/8383425?utm_source=net-toolbox&utm_medium=tool&utm_campaign=kaigo-parent-home-family-small-box-container-memo&utm_content=single_template";
const PACK_URL =
  "https://kaigo-okane.booth.pm/items/8383427?utm_source=net-toolbox&utm_medium=tool&utm_campaign=kaigo-parent-home-family-small-box-container-memo&utm_content=starter_pack";
const FULL_PACK_URL =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=net-toolbox&utm_medium=tool&utm_campaign=kaigo-parent-home-family-small-box-container-memo&utm_content=full_pack";

type FieldKey =
  | "recordDate"
  | "familyMember"
  | "itemName"
  | "placeArea"
  | "appearance"
  | "parentWords"
  | "keepSeparate"
  | "nextReview";

const initialValues: Record<FieldKey, string> = {
  recordDate: "",
  familyMember: "",
  itemName: "",
  placeArea: "",
  appearance: "",
  parentWords: "",
  keepSeparate: "",
  nextReview: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "recordDate",
    label: "記録日・聞いた人",
    placeholder: "例: 2026年6月2日、長女が帰省時に母から聞いた",
    rows: 2,
  },
  {
    key: "familyMember",
    label: "家族内で確認したい相手",
    placeholder: "例: 母、兄、妹など。家族内で通じる呼び方で書く",
    rows: 2,
  },
  {
    key: "itemName",
    label: "小箱・入れ物の呼び方",
    placeholder: "例: 青い茶筒、お正月の菓子缶、父の切手箱、玄関の小箱",
    rows: 4,
  },
  {
    key: "placeArea",
    label: "置かれていた場所",
    placeholder: "例: 食器棚の上、茶の間の棚、玄関の引き出し、仏壇横の小棚",
    rows: 4,
  },
  {
    key: "appearance",
    label: "見た目・一緒に覚えておきたい特徴",
    placeholder: "例: 丸い缶、花柄、ふたが固い、古い包装紙が貼ってある",
    rows: 4,
  },
  {
    key: "parentWords",
    label: "親が話してくれた由来・ひとこと",
    placeholder: "例: 近所の店で買った、昔からここに置いている、来客用だったと聞いた",
    rows: 4,
  },
  {
    key: "keepSeparate",
    label: "このメモで扱わないこと",
    placeholder:
      "例: 中身、現金、鍵、暗証番号、住所、電話番号、本人確認情報、処分、売却、相続、査定は別で安全に確認する",
    rows: 4,
  },
  {
    key: "nextReview",
    label: "次に見返すこと",
    placeholder: "例: 次の帰省で写真を撮る。兄に呼び方を聞く。中身や貴重品の話は別メモに分ける",
    rows: 3,
  },
];

export default function KaigoParentHomeFamilySmallBoxContainerMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親の家の小箱・入れ物まわり 家族内メモ】",
      values.recordDate ? "記録日・聞いた人: " + values.recordDate : "記録日・聞いた人: 未入力",
      values.familyMember ? "家族内で確認したい相手: " + values.familyMember : "家族内で確認したい相手: 未入力",
      "",
      "■ 小箱・入れ物の呼び方",
      values.itemName || "未入力",
      "",
      "■ 置かれていた場所",
      values.placeArea || "未入力",
      "",
      "■ 見た目・一緒に覚えておきたい特徴",
      values.appearance || "未入力",
      "",
      "■ 親が話してくれた由来・ひとこと",
      values.parentWords || "未入力",
      "",
      "■ このメモで扱わないこと",
      values.keepSeparate ||
        "中身、現金、鍵、暗証番号、住所、電話番号、本人確認情報、処分、売却、相続、査定は別で安全に確認する。",
      "",
      "■ 次に見返すこと",
      values.nextReview || "未入力",
      "",
      "※このメモは家族内で小箱・入れ物の呼び方、場所、由来を見返すための控えです。",
      "※防犯、防災、医療、介護用品、修理、査定、処分、相続などの判断には使いません。",
      "※現金、鍵、暗証番号、住所、電話番号、本人確認情報などは記録しないでください。",
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">高齢親の家の小箱・入れ物まわりメモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          茶筒、菓子缶、小箱、小さな入れ物など、親の家で家族が長年見てきた小物入れの呼び方、場所、由来を整理します。
          中身、貴重品、処分、査定、相続の判断ではなく、家族内で見返せる記録だけに絞るためのメモです。
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
              小箱・入れ物まわりメモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={NOTE_URL}>
              noteの案内を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              小箱・入れ物まわりメモ テンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={PACK_URL}>
              83番まわりのまとめセットを見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={FULL_PACK_URL}>
              介護まるごと総合パックを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは、家族内で小箱・入れ物の呼び方、場所、由来を見返すためのメモです。
        防犯、防災、医療、介護用品、修理、査定、処分、相続などの判断には使いません。
        現金、鍵、暗証番号、住所、電話番号、本人確認情報などは記録しないでください。
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
