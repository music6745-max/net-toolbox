"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_written_note_sticky_message";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-home-written-note-sticky-message-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_written_note_sticky_message";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383369";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

type FieldKey =
  | "scope"
  | "recordDate"
  | "sourcePlace"
  | "messageScene"
  | "writtenText"
  | "writingHabit"
  | "familyMemory"
  | "familyMemo"
  | "excludedInfo"
  | "nextReview";

const initialValues: Record<FieldKey, string> = {
  scope: "",
  recordDate: "",
  sourcePlace: "",
  messageScene: "",
  writtenText: "",
  writingHabit: "",
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
      "例: 家のなかで親が家族向けに書いていた書き置き・付箋・伝言。家族内で見返す控えにする。",
    rows: 2,
  },
  {
    key: "recordDate",
    label: "見た日・控えた人",
    placeholder: "例: 2026年6月1日、帰省時に長女が見た範囲を控えた。",
    rows: 2,
  },
  {
    key: "sourcePlace",
    label: "見た場所",
    placeholder: "例: 冷蔵庫の扉、食卓のメモ用紙、玄関の伝言ノート、カレンダーの余白。",
    rows: 3,
  },
  {
    key: "messageScene",
    label: "場面・用途",
    placeholder: "例: 食事の用意、買い物の頼みごと、帰宅予定、季節のひとこと、お土産に添えた一筆。",
    rows: 3,
  },
  {
    key: "writtenText",
    label: "書かれていた内容（要約可）",
    placeholder:
      "例: ご飯炊いておいたよ。お風呂沸いてるよ。お醤油買っておいて。家族内で意味が通じる範囲で要約する。",
    rows: 5,
  },
  {
    key: "writingHabit",
    label: "親らしい言い方・書き方",
    placeholder: "例: 行末に「ね」が多い。短い絵記号を添える。家族の呼び方がいつも同じ。",
    rows: 4,
  },
  {
    key: "familyMemory",
    label: "家族内で思い出す手がかり",
    placeholder: "例: お弁当のラップに短く書いてくれていた。夏前によく台所に貼ってあった。",
    rows: 4,
  },
  {
    key: "familyMemo",
    label: "家族内メモ",
    placeholder: "例: 兄弟姉妹で覚えが違う場合は複数の言い方を併記する。正しさは決めない。",
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
    placeholder: "例: 次回帰省時に玄関の伝言ノートを見返す。季節のひとことだけ別シートに追記する。",
    rows: 3,
  },
];

export default function KaigoParentHomeWrittenNoteStickyMessageMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親の家族向け書き置き・付箋・伝言 家族内メモ】",
      values.scope ? "対象範囲: " + values.scope : "対象範囲: 未入力",
      values.recordDate ? "見た日・控えた人: " + values.recordDate : "見た日・控えた人: 未入力",
      "",
      "■ 見た場所",
      values.sourcePlace || "未入力",
      "",
      "■ 場面・用途",
      values.messageScene || "未入力",
      "",
      "■ 書かれていた内容（要約可）",
      values.writtenText || "未入力",
      "",
      "■ 親らしい言い方・書き方",
      values.writingHabit || "未入力",
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
      "※このメモは、親が家のなかで家族向けに書いていた書き置き・付箋・伝言を、家族内で見返すための控えです。",
      "※字の癖、書き間違い、本心、健康状態、記憶力、所有や処分、著作権、家族外への公開や投稿の判断には使いません。",
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
          高齢親の家族向け書き置き・付箋・伝言メモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          親が家のなかで家族向けに書いていた書き置き、付箋、伝言を、家族内で見返す軽い控えとして整理します。
          家族外への公開や投稿、健康状態の判断、秘密情報の集約には使わないでください。
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
          <pre className="mt-4 min-h-[620px] whitespace-pre-wrap rounded-md bg-slate-50 p-4 text-sm leading-6 text-slate-800">
            {output}
          </pre>
          <div className="mt-5 space-y-3 rounded-md border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
            <p className="font-bold text-slate-900">関連リンク</p>
            <a className="block font-semibold text-blue-700 hover:underline" href={KAIGO_NAVI_URL}>
              親のこと整理ナビで関連テンプレートを見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={GUIDE_URL}>
              書き置き・付箋・伝言メモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              書き置き・付箋・伝言メモ テンプレート集を見る
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
        このツールは、親が家のなかで家族向けに書いていた書き置き・付箋・伝言を、家族内で見返すためのメモです。
        字の癖、書き間違い、本心、健康状態、記憶力、所有や処分、著作権、家族外への公開や投稿の判断には使いません。
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
