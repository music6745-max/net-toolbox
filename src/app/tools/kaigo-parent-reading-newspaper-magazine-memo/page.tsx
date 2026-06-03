"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_reading_newspaper_magazine";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-reading-newspaper-magazine-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_reading_newspaper_magazine";
const NOTE_URL =
  "https://note.com/mild_quail6092/n/n0e07d3eb40cf?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_reading_newspaper_magazine";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383152";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

type FieldKey =
  | "targetPerson"
  | "recordDate"
  | "books"
  | "newspapersMagazines"
  | "authorsThemes"
  | "conversationMemo"
  | "giftMemo"
  | "familyMemo"
  | "avoidInfo"
  | "nextCheck";

const initialValues: Record<FieldKey, string> = {
  targetPerson: "",
  recordDate: "",
  books: "",
  newspapersMagazines: "",
  authorsThemes: "",
  conversationMemo: "",
  giftMemo: "",
  familyMemo: "",
  avoidInfo: "",
  nextCheck: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "targetPerson",
    label: "対象の親・共有範囲",
    placeholder: "例: 母が最近読んでいるもの。長女・長男で帰省前に見返す。外部公開用には使わない。",
    rows: 2,
  },
  {
    key: "recordDate",
    label: "記録日・聞いた場面",
    placeholder: "例: 2026年6月3日、帰省時に本棚の前で本人から聞いた。次回電話前に見返す。",
    rows: 2,
  },
  {
    key: "books",
    label: "よく読む本",
    placeholder:
      "例:\n- 時代小説のシリーズ: 春ごろから読み返している\n- 随筆集: 表紙が青い本、と本人が呼んでいる\n- 本棚の上段にある本、など家族内で分かる粒度で控える",
    rows: 5,
  },
  {
    key: "newspapersMagazines",
    label: "よく読む新聞・雑誌",
    placeholder:
      "例:\n- 朝刊: 毎朝ひととおり見る\n- 週刊誌: 日曜に読むことが多い\n- 書評欄や連載名は、分かる範囲の呼び方で控える",
    rows: 5,
  },
  {
    key: "authorsThemes",
    label: "好きな作家・テーマ",
    placeholder:
      "例:\n- 歴史ものの話題が出やすい\n- 旅行記の話をよくする\n- 作家名があいまいなら、本人が話した呼び方だけ控える",
    rows: 4,
  },
  {
    key: "conversationMemo",
    label: "会話前に見返す話題",
    placeholder:
      "例:\n- 最近読み返している本が変わったか聞く\n- 書評欄で気になった話題を聞く\n- 内容の評価ではなく、自然な話題として使う",
    rows: 4,
  },
  {
    key: "giftMemo",
    label: "差し入れ控え",
    placeholder:
      "例:\n- 前回持って行った雑誌名を家族内で控える\n- 購入判断の根拠にはしない\n- 渡した日と家族内メモだけに留める",
    rows: 4,
  },
  {
    key: "familyMemo",
    label: "家族内メモ",
    placeholder:
      "例:\n- 兄弟で覚えている書名が違う場合は併記する\n- 本文や記事を長く書き写さない\n- 親本人が話した範囲だけ控える",
    rows: 4,
  },
  {
    key: "avoidInfo",
    label: "このメモに書かない情報",
    placeholder:
      "例: 本文や記事の長い引用、会員番号、住所、電話番号、支払い情報、アカウント情報、契約番号、健康状態や認知機能の判断。",
    rows: 4,
  },
  {
    key: "nextCheck",
    label: "次に見返す・聞いてみたいこと",
    placeholder: "例: 次回帰省時に、最近読んでいる本や新聞・雑誌が変わっていないか無理なく聞く。",
    rows: 3,
  },
];

export default function KaigoParentReadingNewspaperMagazineMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親の読書・新聞・雑誌メモ】",
      values.targetPerson ? "対象の親・共有範囲: " + values.targetPerson : "対象の親・共有範囲: 未入力",
      values.recordDate ? "記録日・聞いた場面: " + values.recordDate : "記録日・聞いた場面: 未入力",
      "",
      "■ よく読む本",
      values.books || "未入力",
      "",
      "■ よく読む新聞・雑誌",
      values.newspapersMagazines || "未入力",
      "",
      "■ 好きな作家・テーマ",
      values.authorsThemes || "未入力",
      "",
      "■ 会話前に見返す話題",
      values.conversationMemo || "未入力",
      "",
      "■ 差し入れ控え",
      values.giftMemo || "未入力",
      "",
      "■ 家族内メモ",
      values.familyMemo || "未入力",
      "",
      "■ このメモに書かない情報",
      values.avoidInfo ||
        "本文や記事の長い引用、会員番号、住所、電話番号、支払い情報、アカウント情報、契約番号、健康状態や認知機能の判断は書かない。",
      "",
      "■ 次に見返す・聞いてみたいこと",
      values.nextCheck || "未入力",
      "",
      "※このメモは、親がよく読む本、新聞、雑誌、好きな作家やテーマを、家族内の会話の手がかりとして見返すための控えです。",
      "※購入、契約、解約、定期購読、出版状況の確認、本の評価判断、健康状態や認知機能の判断には使いません。",
      "※本文や記事の長い引用、住所、電話番号、会員番号、支払い情報、アカウント情報、契約番号は記録しないでください。",
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
          高齢親の読書・新聞・雑誌メモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          親がよく読む本、新聞、雑誌、好きな作家やテーマ、会話前に見返す話題を家族内の控えとして整理します。
          本選び、契約、購入、評価判断、健康状態の判断には使わないでください。
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
              読書・新聞・雑誌メモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={NOTE_URL}>
              作成背景のnote記事を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              読書・新聞・雑誌メモ テンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={FULL_PACK_URL}>
              介護まるごと総合パックを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは、家族内で親との会話の手がかりを見返すためのメモです。
        購入、契約、解約、定期購読、出版状況の確認、本の評価判断、健康状態、認知機能の判断には使えません。
        本文や記事の長い引用、住所、電話番号、会員番号、支払い情報、アカウント情報、契約番号は記録しないでください。
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
