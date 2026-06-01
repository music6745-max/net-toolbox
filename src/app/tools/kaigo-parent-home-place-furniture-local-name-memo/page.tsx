"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_place_furniture_local_name";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-home-place-furniture-local-name-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_place_furniture_local_name";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383382";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383384";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

type FieldKey =
  | "scope"
  | "recordDate"
  | "localName"
  | "actualPlace"
  | "placeType"
  | "familyMember"
  | "parentWords"
  | "originStory"
  | "relatedMemory"
  | "familyMemo"
  | "excludedInfo"
  | "nextReview";

const initialValues: Record<FieldKey, string> = {
  scope: "",
  recordDate: "",
  localName: "",
  actualPlace: "",
  placeType: "",
  familyMember: "",
  parentWords: "",
  originStory: "",
  relatedMemory: "",
  familyMemo: "",
  excludedInfo: "",
  nextReview: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "scope",
    label: "対象範囲",
    placeholder:
      "例: 実家のなかで家族だけに通じてきた場所・部屋・家具・コーナーの呼び名。家族内で見返す控えにする。",
    rows: 3,
  },
  {
    key: "recordDate",
    label: "聞いた日・控えた人",
    placeholder: "例: 2026年6月1日、帰省時に長女が母から聞いた呼び名を控えた。",
    rows: 2,
  },
  {
    key: "localName",
    label: "家族内の呼び名",
    placeholder: "例: 中の間、茶箪笥のとこ、お父さんの机の横、縁側のとこ、うらの棚。",
    rows: 4,
  },
  {
    key: "actualPlace",
    label: "実際に指している場所・部屋・家具",
    placeholder: "例: 仏間の隣の部屋、食器棚の右側、茶の間の出窓、玄関から入って左の棚。",
    rows: 4,
  },
  {
    key: "placeType",
    label: "区分",
    placeholder: "例: 部屋、家具、棚、通路、コーナー、玄関まわり、窓際、家族内でだけ分かる場所。",
    rows: 3,
  },
  {
    key: "familyMember",
    label: "その呼び名を使う人",
    placeholder: "例: 母がよく使う、父と長男だけが使う、親族の集まりで聞く、昔から家族全員が使う。",
    rows: 4,
  },
  {
    key: "parentWords",
    label: "親が話していた言葉",
    placeholder: "例: 「中の間に置いといて」「茶箪笥のとこにあるよ」など、聞いたままの言い方を短く控える。",
    rows: 4,
  },
  {
    key: "originStory",
    label: "呼び名の由来・聞き書き",
    placeholder: "例: 昔は家族が集まる部屋だった。祖父母の代からそう呼んでいたらしい。由来が不明なら不明と書く。",
    rows: 4,
  },
  {
    key: "relatedMemory",
    label: "家族内で思い出す手がかり",
    placeholder: "例: 写真に写っていた。年末の片づけで必ず話題になる。来客前に親がよく確認していた。",
    rows: 4,
  },
  {
    key: "familyMemo",
    label: "家族内メモ",
    placeholder: "例: 兄弟姉妹で呼び方が違う場合は併記する。正式名称や正解は決めない。",
    rows: 4,
  },
  {
    key: "excludedInfo",
    label: "このメモに書かない情報",
    placeholder:
      "例: 住所、電話番号、口座、カード、契約番号、暗証番号、パスワード、鍵の所在、防犯コード、認証情報、第三者の連絡先。",
    rows: 4,
  },
  {
    key: "nextReview",
    label: "次に見返すこと・確認したいこと",
    placeholder: "例: 次回帰省時に古い写真と照らす。本人や家族に無理なく聞ける範囲だけ確認する。",
    rows: 3,
  },
];

export default function KaigoParentHomePlaceFurnitureLocalNameMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親の家の場所・部屋・家具の家族内呼び名メモ】",
      values.scope ? "対象範囲: " + values.scope : "対象範囲: 未入力",
      values.recordDate ? "聞いた日・控えた人: " + values.recordDate : "聞いた日・控えた人: 未入力",
      "",
      "■ 家族内の呼び名",
      values.localName || "未入力",
      "",
      "■ 実際に指している場所・部屋・家具",
      values.actualPlace || "未入力",
      "",
      "■ 区分",
      values.placeType || "未入力",
      "",
      "■ その呼び名を使う人",
      values.familyMember || "未入力",
      "",
      "■ 親が話していた言葉",
      values.parentWords || "未入力",
      "",
      "■ 呼び名の由来・聞き書き",
      values.originStory || "未入力",
      "",
      "■ 家族内で思い出す手がかり",
      values.relatedMemory || "未入力",
      "",
      "■ 家族内メモ",
      values.familyMemo || "未入力",
      "",
      "■ このメモに書かない情報",
      values.excludedInfo ||
        "住所、電話番号、口座、カード、契約番号、暗証番号、パスワード、鍵の所在、防犯コード、認証情報、第三者の連絡先は書かない。",
      "",
      "■ 次に見返すこと・確認したいこと",
      values.nextReview || "未入力",
      "",
      "※このメモは、家族だけに通じてきた場所・部屋・家具・コーナーの呼び名を、家族内で見返すための控えです。",
      "※正式な建築用語、所有、処分、形見分け、相続、費用負担、家具の価値の判断には使いません。",
      "※住所、電話番号、口座、カード、契約番号、暗証番号、パスワード、鍵、防犯コードなどの秘密情報は記録しないでください。",
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
          高齢親の家の場所・部屋・家具の家族内呼び名メモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          「中の間」「茶箪笥のとこ」など、家族だけに通じてきた場所・部屋・家具・コーナーの呼び名を、
          家族内で見返す軽い控えとして整理します。所有、処分、相続、正式名称、秘密情報の判断には使わないでください。
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
              場所・部屋・家具の呼び名メモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              場所・部屋・家具の呼び名メモ テンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={PACK_URL}>
              介護はじめの73商品まとめセットを見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={FULL_PACK_URL}>
              介護まるごと総合パックを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは、家族だけに通じてきた場所・部屋・家具・コーナーの呼び名を、家族内で見返すためのメモです。
        正式な建築用語、所有、処分、形見分け、相続、費用負担、家具の価値の判断には使いません。
        秘密情報や防犯に関わる情報は記録しないでください。
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
