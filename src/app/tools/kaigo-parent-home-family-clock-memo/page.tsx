"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_family_clock";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-home-family-clock-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_family_clock";
const NOTE_URL = "https://note.com/mild_quail6092/n/nc10ac2875e3f";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383414";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383417";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

type FieldKey =
  | "recordDate"
  | "familyMember"
  | "clockName"
  | "placeArea"
  | "familyScene"
  | "parentWords"
  | "keepSeparate"
  | "nextReview";

const initialValues: Record<FieldKey, string> = {
  recordDate: "",
  familyMember: "",
  clockName: "",
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
    placeholder: "例: 2026年6月1日、長女が帰省時に母から聞いた",
    rows: 2,
  },
  {
    key: "familyMember",
    label: "家族内で確認したい相手",
    placeholder: "例: 母、長男、妹など。家族内で通じる呼び方で書く",
    rows: 2,
  },
  {
    key: "clockName",
    label: "時計の呼び方",
    placeholder: "例: 茶の間の丸い時計、台所の白い時計、玄関の柱時計、寝室の目覚まし時計",
    rows: 4,
  },
  {
    key: "placeArea",
    label: "置いてあった場所",
    placeholder: "例: 茶の間の座敷側、台所から見える壁、玄関を入って右、寝室の棚の上",
    rows: 4,
  },
  {
    key: "familyScene",
    label: "家族が見てきた場面",
    placeholder: "例: 正月に親戚を迎えるときに見ていた、祖父がねじを巻いていた、子どものころ畳で遊びながら見上げていた",
    rows: 4,
  },
  {
    key: "parentWords",
    label: "親が話してくれた由来・ひとこと",
    placeholder: "例: 昔からこの時計と呼んでいた、祖母が選んだと聞いた、引っ越す前からあったらしい",
    rows: 4,
  },
  {
    key: "keepSeparate",
    label: "このメモで判断しないこと",
    placeholder:
      "例: 修理、電池交換、査定、処分、譲渡、相続、費用、メーカー名や修理店の連絡先は別で確認する",
    rows: 4,
  },
  {
    key: "nextReview",
    label: "次に見返すこと",
    placeholder: "例: 次の帰省で写真を撮る。兄弟姉妹に呼び方を聞く。修理や処分の話は別メモに分ける",
    rows: 3,
  },
];

export default function KaigoParentHomeFamilyClockMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親の家の時計まわり 家族内メモ】",
      values.recordDate ? "記録日・聞いた人: " + values.recordDate : "記録日・聞いた人: 未入力",
      values.familyMember ? "家族内で確認したい相手: " + values.familyMember : "家族内で確認したい相手: 未入力",
      "",
      "■ 時計の呼び方",
      values.clockName || "未入力",
      "",
      "■ 置いてあった場所",
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
        "修理、電池交換、査定、処分、譲渡、相続、費用、メーカー名や修理店の連絡先は別で確認する。",
      "",
      "■ 次に見返すこと",
      values.nextReview || "未入力",
      "",
      "※このメモは家族内で掛け時計、柱時計、置き時計、目覚まし時計の呼び方、場所、由来を見返すための控えです。",
      "※修理、査定、処分、譲渡、相続、費用などの判断には使いません。",
      "※住所、電話番号、業者名、本人確認情報などは記録しないでください。",
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">高齢親の家の時計まわりメモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          掛け時計、柱時計、置き時計、目覚まし時計など、親の家で家族が長年見てきた時計を家族内の控えとして整理します。
          修理や処分を決める表ではなく、呼び方、場所、見てきた場面、親のひとことを次の帰省や親族の集まりの前に見返すためのメモです。
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
              時計まわりメモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={NOTE_URL}>
              noteの案内を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              時計まわりメモ テンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={PACK_URL}>
              80商品まとめセットを見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={FULL_PACK_URL}>
              介護まるごと総合パックを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは、家族内で時計の呼び方、場所、由来を見返すためのメモです。
        修理、電池交換、査定、処分、譲渡、相続、費用などの判断には使いません。
        住所、電話番号、業者名、本人確認情報などは記録しないでください。
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
