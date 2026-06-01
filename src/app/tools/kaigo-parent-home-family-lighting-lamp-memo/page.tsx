"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_family_lighting_lamp";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-home-family-lighting-lamp-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_family_lighting_lamp";
const NOTE_URL = "https://note.com/mild_quail6092/n/nab1359455387";
const BOOTH_URL =
  "https://kaigo-okane.booth.pm/items/8383429?utm_source=net-toolbox&utm_medium=tool&utm_campaign=kaigo-parent-home-family-lighting-lamp-memo&utm_content=single_template";
const PACK_URL =
  "https://kaigo-okane.booth.pm/items/8383430?utm_source=net-toolbox&utm_medium=tool&utm_campaign=kaigo-parent-home-family-lighting-lamp-memo&utm_content=starter_pack";
const FULL_PACK_URL =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=net-toolbox&utm_medium=tool&utm_campaign=kaigo-parent-home-family-lighting-lamp-memo&utm_content=full_pack";

type FieldKey =
  | "recordDate"
  | "familyMember"
  | "lightName"
  | "roomPlace"
  | "appearance"
  | "parentWords"
  | "keepSeparate"
  | "nextReview";

const initialValues: Record<FieldKey, string> = {
  recordDate: "",
  familyMember: "",
  lightName: "",
  roomPlace: "",
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
    key: "lightName",
    label: "あかり・照明器具の呼び方",
    placeholder: "例: 茶の間の丸いあかり、台所の白い笠、父の電気スタンド",
    rows: 4,
  },
  {
    key: "roomPlace",
    label: "置かれていた部屋・場所",
    placeholder: "例: 茶の間、台所、玄関、廊下、寝室の枕元、仏壇横の小棚",
    rows: 4,
  },
  {
    key: "appearance",
    label: "見た目・一緒に覚えておきたい特徴",
    placeholder: "例: 丸い笠、白いシェード、ひもで点ける、花柄、低い台に置いていた",
    rows: 4,
  },
  {
    key: "parentWords",
    label: "親が話してくれた由来・ひとこと",
    placeholder: "例: 昔からここにある、父が読書に使っていた、来客の時に点けていたと聞いた",
    rows: 4,
  },
  {
    key: "keepSeparate",
    label: "このメモで扱わないこと",
    placeholder:
      "例: 配線、コンセント、ブレーカー、電球交換、修理、買い替え、安全判断、睡眠や見守り、健康観察、処分、査定、相続は別で確認する",
    rows: 4,
  },
  {
    key: "nextReview",
    label: "次に見返すこと",
    placeholder: "例: 次の帰省で写真を撮る。兄に呼び方を聞く。電気まわりの確認は別手順に分ける",
    rows: 3,
  },
];

export default function KaigoParentHomeFamilyLightingLampMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親の家のあかり・照明器具まわり 家族内メモ】",
      values.recordDate ? "記録日・聞いた人: " + values.recordDate : "記録日・聞いた人: 未入力",
      values.familyMember ? "家族内で確認したい相手: " + values.familyMember : "家族内で確認したい相手: 未入力",
      "",
      "■ あかり・照明器具の呼び方",
      values.lightName || "未入力",
      "",
      "■ 置かれていた部屋・場所",
      values.roomPlace || "未入力",
      "",
      "■ 見た目・一緒に覚えておきたい特徴",
      values.appearance || "未入力",
      "",
      "■ 親が話してくれた由来・ひとこと",
      values.parentWords || "未入力",
      "",
      "■ このメモで扱わないこと",
      values.keepSeparate ||
        "配線、コンセント、ブレーカー、電球交換、修理、買い替え、安全判断、睡眠や見守り、健康観察、処分、査定、相続は別で確認する。",
      "",
      "■ 次に見返すこと",
      values.nextReview || "未入力",
      "",
      "※このメモは家族内であかり・照明器具の呼び方、場所、由来を見返すための控えです。",
      "※電気工事、配線、感電、漏電、火災予防、安全判断、修理、買い替え、処分、査定、相続、医療・法律・税務の判断には使いません。",
      "※認証情報、決済情報、住所、連絡先、医療情報、重要書類の内容などは記録しないでください。",
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">高齢親の家のあかり・照明器具まわりメモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          茶の間のあかり、台所や玄関の照明、枕元の電気スタンド、ランプシェードなど、
          親の家で家族が長年見てきたあかりまわりの呼び方、場所、由来を整理します。
          電気作業や安全判断ではなく、家族内で見返せる記録だけに絞るためのメモです。
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
              あかり・照明器具まわりメモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={NOTE_URL}>
              noteの案内を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              あかり・照明器具まわりメモ テンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={PACK_URL}>
              84番まわりのまとめセットを見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={FULL_PACK_URL}>
              介護まるごと総合パックを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは、家族内であかり・照明器具の呼び方、場所、由来を見返すためのメモです。
        電気工事、配線、感電、漏電、火災予防、安全判断、修理、買い替え、処分、査定、相続、医療・法律・税務の判断には使いません。
        認証情報、決済情報、住所、連絡先、医療情報、重要書類の内容などは記録しないでください。
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
