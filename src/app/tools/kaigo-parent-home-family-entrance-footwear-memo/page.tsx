"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_family_entrance_footwear";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-home-family-entrance-footwear-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_family_entrance_footwear";
const NOTE_URL = "https://note.com/mild_quail6092/n/nc57199555445";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383422";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383424";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

type FieldKey =
  | "recordDate"
  | "familyMember"
  | "itemName"
  | "placeArea"
  | "familyScene"
  | "parentWords"
  | "keepSeparate"
  | "nextReview";

const initialValues: Record<FieldKey, string> = {
  recordDate: "",
  familyMember: "",
  itemName: "",
  placeArea: "",
  familyScene: "",
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
    placeholder: "例: 母、長男、妹など。家族内で通じる呼び方で書く",
    rows: 2,
  },
  {
    key: "itemName",
    label: "玄関まわりの物の呼び方",
    placeholder: "例: 青い傘立て、父の靴べら、お客さん用スリッパ箱、来客用履物入れ",
    rows: 4,
  },
  {
    key: "placeArea",
    label: "置かれていた場所",
    placeholder: "例: 玄関を入って右、下駄箱の横、土間の奥、廊下側の棚の下",
    rows: 4,
  },
  {
    key: "familyScene",
    label: "家族が見てきた場面",
    placeholder: "例: 帰省時にいつも見ていた、来客前に母が出していた、父が出勤前に使っていた",
    rows: 4,
  },
  {
    key: "parentWords",
    label: "親が話してくれた由来・ひとこと",
    placeholder: "例: 新築時から置いている、近所の店で買った、祖母が来る時だけ出していたと聞いた",
    rows: 4,
  },
  {
    key: "keepSeparate",
    label: "このメモで判断しないこと",
    placeholder:
      "例: 鍵、住所、暗証番号、防犯、防災、避難用品、歩行、転倒予防、介護シューズ、修理、査定、処分、相続は別で確認する",
    rows: 4,
  },
  {
    key: "nextReview",
    label: "次に見返すこと",
    placeholder: "例: 次の帰省で写真を撮る。妹に呼び方を聞く。安全や処分の話は別メモに分ける",
    rows: 3,
  },
];

export default function KaigoParentHomeFamilyEntranceFootwearMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親の家の玄関まわり 家族内メモ】",
      values.recordDate ? "記録日・聞いた人: " + values.recordDate : "記録日・聞いた人: 未入力",
      values.familyMember ? "家族内で確認したい相手: " + values.familyMember : "家族内で確認したい相手: 未入力",
      "",
      "■ 玄関まわりの物の呼び方",
      values.itemName || "未入力",
      "",
      "■ 置かれていた場所",
      values.placeArea || "未入力",
      "",
      "■ 家族が見てきた場面",
      values.familyScene || "未入力",
      "",
      "■ 親が話してくれた由来・ひとこと",
      values.parentWords || "未入力",
      "",
      "■ このメモで判断しないこと",
      values.keepSeparate ||
        "鍵、住所、暗証番号、防犯、防災、避難用品、歩行、転倒予防、介護シューズ、修理、査定、処分、相続は別で確認する。",
      "",
      "■ 次に見返すこと",
      values.nextReview || "未入力",
      "",
      "※このメモは家族内で玄関まわりの物の呼び方、場所、由来を見返すための控えです。",
      "※防犯、防災、医療、介護用品、修理、査定、処分、相続などの判断には使いません。",
      "※住所、電話番号、鍵、暗証番号、来客名、本人確認情報などは記録しないでください。",
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">高齢親の家の玄関まわりメモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          傘立て、靴べら、スリッパ立て、来客用履物入れなど、親の家で家族が長年見てきた玄関まりの物を、家族内の控えとして整理します。
          防犯、防災、医療、介護用品、修理、処分の判断をする表ではなく、呼び方、場所、親のひとことを次の帰省や親族の集まりの前に見返すためのメモです。
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
              玄関まわりメモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={NOTE_URL}>
              noteの案内を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              玄関まわりメモ テンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={PACK_URL}>
              82商品まとめセットを見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={FULL_PACK_URL}>
              介護まるごと総合パックを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは、家族内で玄関まわりの呼び方、場所、由来を見返すためのメモです。
        防犯、防災、医療、介護用品、修理、査定、処分、相続などの判断には使いません。
        住所、電話番号、鍵、暗証番号、来客名、本人確認情報などは記録しないでください。
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
