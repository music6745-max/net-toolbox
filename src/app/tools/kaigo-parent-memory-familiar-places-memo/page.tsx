"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_memory_familiar_places";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-memory-familiar-places-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_memory_familiar_places";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383171";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";
const NOTE_URL = "https://note.com/mild_quail6092/n/nad760f55c4ec";

type FieldKey =
  | "targetPerson"
  | "recordDate"
  | "placeName"
  | "roughArea"
  | "memoryScene"
  | "peopleMemo"
  | "parentWords"
  | "avoidInfo"
  | "nextCheck";

const initialValues: Record<FieldKey, string> = {
  targetPerson: "",
  recordDate: "",
  placeName: "",
  roughArea: "",
  memoryScene: "",
  peopleMemo: "",
  parentWords: "",
  avoidInfo: "",
  nextCheck: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "targetPerson",
    label: "対象の親・共有範囲",
    placeholder: "例: 母が電話で話してくれた昔の場所。長女・長男で家族内共有。外部公開には使わない。",
    rows: 2,
  },
  {
    key: "recordDate",
    label: "記録日・聞いた場面",
    placeholder: "例: 2026年6月4日、帰省前の電話で昔住んでいた町の話が出たので控えた。",
    rows: 2,
  },
  {
    key: "placeName",
    label: "親が使っている場所の呼び方",
    placeholder:
      "例:\n- 昔の商店街\n- 家族で写真を撮った海\n- よく寄っていた喫茶店\n※正式名称や正確な住所を断定する欄ではない",
    rows: 5,
  },
  {
    key: "roughArea",
    label: "だいたいの地域・目印",
    placeholder:
      "例:\n- 祖父母の家の近く\n- 駅から歩いた先の通り\n- 小学校の近くにあった店\n※住所、電話番号、個人名、会員番号は書かない",
    rows: 5,
  },
  {
    key: "memoryScene",
    label: "思い出の場面",
    placeholder:
      "例:\n- 夏休みに家族で行った\n- 帰省すると寄っていた\n- 昔の友人と待ち合わせていた\n※旅行計画や外出可否の判断には使わない",
    rows: 5,
  },
  {
    key: "peopleMemo",
    label: "一緒にいた人・家族内メモ",
    placeholder:
      "例:\n- 父と一緒に行ったと話していた\n- 兄弟でよく寄っていたらしい\n- 誰の話か分からない部分は次回確認に回す",
    rows: 4,
  },
  {
    key: "parentWords",
    label: "親が大事にしている一言",
    placeholder:
      "例:\n- あそこは懐かしい\n- 店の人がよく声をかけてくれた\n- また話したいと言っていた\n※評価や事実認定ではなく、本人の言葉として残す",
    rows: 4,
  },
  {
    key: "avoidInfo",
    label: "このメモに書かない情報",
    placeholder:
      "例: 住所、電話番号、親戚や近所の連絡先、SNS、ログイン情報、会員番号、支払い、予約、本人確認、宿泊、移動手段、付き添い判断は書かない。",
    rows: 4,
  },
  {
    key: "nextCheck",
    label: "次に聞いてみたいこと",
    placeholder: "例: 次の電話で、親がその場所を何と呼んでいたかだけ無理なく聞いてみる。",
    rows: 3,
  },
];

export default function KaigoParentMemoryFamiliarPlacesMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親が話す思い出の場所・なじみの場所メモ】",
      values.targetPerson ? "対象の親・共有範囲: " + values.targetPerson : "対象の親・共有範囲: 未入力",
      values.recordDate ? "記録日・聞いた場面: " + values.recordDate : "記録日・聞いた場面: 未入力",
      "",
      "■ 親が使っている場所の呼び方",
      values.placeName || "未入力",
      "",
      "■ だいたいの地域・目印",
      values.roughArea || "未入力",
      "",
      "■ 思い出の場面",
      values.memoryScene || "未入力",
      "",
      "■ 一緒にいた人・家族内メモ",
      values.peopleMemo || "未入力",
      "",
      "■ 親が大事にしている一言",
      values.parentWords || "未入力",
      "",
      "■ このメモに書かない情報",
      values.avoidInfo ||
        "住所、電話番号、親戚や近所の連絡先、SNS、ログイン情報、会員番号、支払い、予約、本人確認、宿泊、移動手段、付き添い判断は書かない。",
      "",
      "■ 次に聞いてみたいこと",
      values.nextCheck || "未入力",
      "",
      "※このメモは、親が会話で話してくれた思い出の場所・なじみの場所を家族内で見返すための控えです。",
      "※旅行計画、外出可否、住所特定、予約、支払い、連絡先共有、本人確認、医療・介護・法律・お金の判断には使いません。",
      "※個人情報や秘密情報は書き込まず、必要な確認は家族や関係者と別途行ってください。",
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
          高齢親が話す思い出の場所・なじみの場所メモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          親が話してくれた昔住んでいた地域、よく通った店、家族で出かけた場所を、家族内で見返す控えとして整理します。
          住所特定、旅行計画、外出可否、予約、支払い、連絡先共有には使わないでください。
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
              思い出の場所・なじみの場所メモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              思い出の場所・なじみの場所メモ テンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={NOTE_URL}>
              note記事を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={FULL_PACK_URL}>
              介護まるごと総合パックを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは、家族内で親の思い出を見返すためのメモです。住所、電話番号、連絡先、ログイン情報、会員番号、支払い、予約、本人確認などは記録しないでください。
        外出や移動、付き添い、宿泊、費用の判断は、このメモだけで決めず、家族や関係者と別途確認してください。
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
