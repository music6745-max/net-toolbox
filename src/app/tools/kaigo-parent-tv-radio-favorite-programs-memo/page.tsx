"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_tv_radio_favorite_programs";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-tv-radio-favorite-programs-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_tv_radio_favorite_programs";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383151";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

type FieldKey =
  | "targetPerson"
  | "recordDate"
  | "tvPrograms"
  | "radioPrograms"
  | "timeAndHowToFind"
  | "conversationMemo"
  | "familyMemo"
  | "avoidInfo"
  | "nextCheck";

const initialValues: Record<FieldKey, string> = {
  targetPerson: "",
  recordDate: "",
  tvPrograms: "",
  radioPrograms: "",
  timeAndHowToFind: "",
  conversationMemo: "",
  familyMemo: "",
  avoidInfo: "",
  nextCheck: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "targetPerson",
    label: "対象の親・共有範囲",
    placeholder: "例: 母がよく見る番組。長女・長男で電話前に見返す。外部公開用には使わない。",
    rows: 2,
  },
  {
    key: "recordDate",
    label: "記録日・聞いた場面",
    placeholder: "例: 2026年6月3日、帰省時の夕食後に本人から聞いた。次回電話前に見返す。",
    rows: 2,
  },
  {
    key: "tvPrograms",
    label: "よく見るテレビ番組",
    placeholder:
      "例:\n- 朝のニュース: 朝食後によく見ている\n- 旅番組: 行ったことのある場所が出ると話題になる\n- スポーツ中継: 試合結果を聞くと話しやすい",
    rows: 5,
  },
  {
    key: "radioPrograms",
    label: "よく聴くラジオ番組",
    placeholder:
      "例:\n- 午前のラジオ番組: 台所仕事の時間に流している\n- 音楽番組: 昔の曲が出ると話しやすい\n- 番組名があいまいなら、曜日や時間だけ控える",
    rows: 5,
  },
  {
    key: "timeAndHowToFind",
    label: "曜日・時間帯・探す手がかり",
    placeholder:
      "例:\n- 平日朝、昼食後、日曜夕方など\n- 番組名が分からない場合は、局名や時間帯だけ\n- 録画設定や契約内容はここには書かない",
    rows: 4,
  },
  {
    key: "conversationMemo",
    label: "会話前に見返す話題",
    placeholder:
      "例:\n- 前に話していた出演者のことを聞く\n- 好きなコーナーを聞く\n- 見逃したかどうかの確認ではなく、自然な話題として使う",
    rows: 4,
  },
  {
    key: "familyMemo",
    label: "家族内メモ",
    placeholder:
      "例:\n- 兄弟で覚えている番組名が違う場合は併記する\n- 番組内容を長く書き写さない\n- 親本人が話した範囲だけ控える",
    rows: 4,
  },
  {
    key: "avoidInfo",
    label: "このメモに書かない情報",
    placeholder:
      "例: 契約番号、支払い情報、アカウント情報、録画機の暗証番号、番組本文、歌詞、長いせりふ、健康状態や認知機能の判断。",
    rows: 4,
  },
  {
    key: "nextCheck",
    label: "次に見返す・聞いてみたいこと",
    placeholder: "例: 次回電話で、最近楽しみにしている番組が変わっていないか無理なく聞く。",
    rows: 3,
  },
];

export default function KaigoParentTvRadioFavoriteProgramsMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親のテレビ・ラジオ 好きな番組メモ】",
      values.targetPerson ? "対象の親・共有範囲: " + values.targetPerson : "対象の親・共有範囲: 未入力",
      values.recordDate ? "記録日・聞いた場面: " + values.recordDate : "記録日・聞いた場面: 未入力",
      "",
      "■ よく見るテレビ番組",
      values.tvPrograms || "未入力",
      "",
      "■ よく聴くラジオ番組",
      values.radioPrograms || "未入力",
      "",
      "■ 曜日・時間帯・探す手がかり",
      values.timeAndHowToFind || "未入力",
      "",
      "■ 会話前に見返す話題",
      values.conversationMemo || "未入力",
      "",
      "■ 家族内メモ",
      values.familyMemo || "未入力",
      "",
      "■ このメモに書かない情報",
      values.avoidInfo ||
        "契約番号、支払い情報、アカウント情報、録画機の暗証番号、番組本文、歌詞、長いせりふ、健康状態や認知機能の判断は書かない。",
      "",
      "■ 次に見返す・聞いてみたいこと",
      values.nextCheck || "未入力",
      "",
      "※このメモは、親がよく見るテレビ番組やよく聴くラジオ番組を、家族内の会話の手がかりとして見返すための控えです。",
      "※契約変更、録画設定、機器操作、修理、購入、健康状態、認知機能の判断には使いません。",
      "※番組本文、歌詞、長いせりふ、契約番号、支払い情報、アカウント情報、暗証番号は記録しないでください。",
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
          高齢親のテレビ・ラジオ好きな番組メモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          親がよく見るテレビ番組、よく聴くラジオ番組、曜日や時間帯、会話前に見返す話題を家族内の控えとして整理します。
          契約、録画設定、機器操作、健康状態の判断には使わないでください。
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
              テレビ・ラジオ好きな番組メモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              テレビ・ラジオ好きな番組メモ テンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={FULL_PACK_URL}>
              介護まるごと総合パックを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは、家族内で親との会話の手がかりを見返すためのメモです。
        視聴契約、録画設定、機器操作、修理、購入、健康状態、認知機能の判断には使えません。
        番組本文、歌詞、長いせりふ、契約番号、支払い情報、アカウント情報、暗証番号は記録しないでください。
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
