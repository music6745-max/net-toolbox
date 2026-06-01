"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_family_doors_sliding_screens";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-home-family-doors-sliding-screens-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_family_doors_sliding_screens";
const NOTE_URL = "https://note.com/mild_quail6092/n/nd8756eecad97";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383411";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383412";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

type FieldKey =
  | "recordDate"
  | "familyMember"
  | "fixtureName"
  | "placeArea"
  | "familyScene"
  | "parentWords"
  | "keepSeparate"
  | "nextReview";

const initialValues: Record<FieldKey, string> = {
  recordDate: "",
  familyMember: "",
  fixtureName: "",
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
    key: "fixtureName",
    label: "建具・場所の呼び方",
    placeholder: "例: 中の間の襖、縁側の引き戸、茶の間の障子、床の間、押し入れ、畳の部屋",
    rows: 4,
  },
  {
    key: "placeArea",
    label: "ある場所",
    placeholder: "例: 茶の間と座敷のあいだ、縁側の南側、玄関から見て右、押し入れの上段",
    rows: 4,
  },
  {
    key: "familyScene",
    label: "家族が触れてきた場面",
    placeholder: "例: 正月に襖を開けて親戚を迎えた、祖父が縁側で腰かけていた、子どもが畳で遊んでいた",
    rows: 4,
  },
  {
    key: "parentWords",
    label: "親が話していた由来・ひと言",
    placeholder: "例: 昔からこの襖と呼んでいた、祖母が選んだ畳だと聞いた、この引き戸は子どものころからあった",
    rows: 4,
  },
  {
    key: "keepSeparate",
    label: "このメモで判断しないこと",
    placeholder:
      "例: 修理、改修、施工、安全確認、解体、契約、費用、所有や相続、住所や連絡先の共有は別で確認する",
    rows: 4,
  },
  {
    key: "nextReview",
    label: "次に見返すこと",
    placeholder: "例: 次の帰省で写真を撮る。兄に襖の呼び方を聞く。修理の話は別メモに分ける",
    rows: 3,
  },
];

export default function KaigoParentHomeFamilyDoorsSlidingScreensMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親の家の障子・襖・引き戸・畳まわり 家族内メモ】",
      values.recordDate ? "記録日・聞いた人: " + values.recordDate : "記録日・聞いた人: 未入力",
      values.familyMember ? "家族内で確認したい相手: " + values.familyMember : "家族内で確認したい相手: 未入力",
      "",
      "■ 建具・場所の呼び方",
      values.fixtureName || "未入力",
      "",
      "■ ある場所",
      values.placeArea || "未入力",
      "",
      "■ 家族が触れてきた場面",
      values.familyScene || "未入力",
      "",
      "■ 親が話していた由来・ひと言",
      values.parentWords || "未入力",
      "",
      "■ このメモで判断しないこと",
      values.keepSeparate ||
        "修理、改修、施工、安全確認、解体、契約、費用、所有や相続、住所や連絡先の共有は別で確認する。",
      "",
      "■ 次に見返すこと",
      values.nextReview || "未入力",
      "",
      "※このメモは家族内で障子、襖、引き戸、縁側、畳まわりの呼び方、場所、由来を見返すための控えです。",
      "※修理、改修、施工、安全確認、解体、契約、費用、所有や相続の判断には使いません。",
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">高齢親の家の障子・襖・引き戸・畳まわりメモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          障子、襖、板戸、引き戸、縁側、床の間、押し入れ、畳、板の間など、親の家で家族が長年触れてきた場所を家族内の控えとして整理します。
          修理や改修を決める表ではなく、呼び方、場所、使っていた場面、親のひと言を次の帰省や親族の集まりの前に見返すためのメモです。
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
              障子・襖・引き戸・畳まわりメモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={NOTE_URL}>
              noteの案内を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              障子・襖・引き戸・畳まわりメモ テンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={PACK_URL}>
              79商品まとめセットを見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={FULL_PACK_URL}>
              介護まるごと総合パックを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは、家族内で障子、襖、引き戸、縁側、畳まわりの呼び方、場所、由来、親が話していたことを見返すためのメモです。修理、改修、施工、
        安全確認、解体、契約、費用、所有や相続などの判断には使いません。住所、電話番号、業者名、本人確認情報などは記録しないでください。
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

