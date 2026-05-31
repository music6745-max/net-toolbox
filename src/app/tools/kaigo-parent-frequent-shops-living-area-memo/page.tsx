"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_frequent_shops_living_area";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-frequent-shops-living-area-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_frequent_shops_living_area";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383096";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

type FieldKey =
  | "targetHome"
  | "recordDate"
  | "shoppingPlaces"
  | "errandPlaces"
  | "salonPlaces"
  | "walkPlaces"
  | "familyNotes"
  | "avoidInfo"
  | "nextCheck";

const initialValues: Record<FieldKey, string> = {
  targetHome: "",
  recordDate: "",
  shoppingPlaces: "",
  errandPlaces: "",
  salonPlaces: "",
  walkPlaces: "",
  familyNotes: "",
  avoidInfo: "",
  nextCheck: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "targetHome",
    label: "対象の家・共有範囲",
    placeholder: "例: 母の実家。長女・長男で共有。住所や電話番号はここには書かない。",
    rows: 2,
  },
  {
    key: "recordDate",
    label: "確認日・確認した人",
    placeholder: "例: 2026年6月1日、帰省時に長女が本人と会話して確認。",
    rows: 2,
  },
  {
    key: "shoppingPlaces",
    label: "買い物でよく行く場所",
    placeholder:
      "例:\n- 駅前スーパー: 牛乳、卵、総菜を買うことが多い\n- 近所の薬局: 日用品の補充で月1回ほど\n- 商店街の八百屋: 季節の果物を買うことが多い",
    rows: 5,
  },
  {
    key: "errandPlaces",
    label: "用事で立ち寄る場所",
    placeholder:
      "例:\n- 郵便局: 手続き内容は書かず、次に家族が確認する予定だけ残す\n- クリーニング店: 受け取り予定を家族で確認\n- 公民館: 行事の有無だけ控える",
    rows: 5,
  },
  {
    key: "salonPlaces",
    label: "理美容室・身だしなみの控え",
    placeholder:
      "例:\n- いつもの理美容室: 前回は5月下旬\n- 希望: 短め、前髪は残す\n- 次回: 予約の有無を本人へ確認",
    rows: 4,
  },
  {
    key: "walkPlaces",
    label: "散歩・立ち寄り先の目印",
    placeholder:
      "例:\n- 駅前の公園: 天気がよい日に立ち寄ることがある\n- 近所のベンチ: 帰りに休むことがある\n- 家族が同行した時の気づきだけ残す",
    rows: 4,
  },
  {
    key: "familyNotes",
    label: "家族で共有する控え",
    placeholder:
      "例:\n- 外出可否や移動方法はこのメモで決めない\n- 次回帰省時に、買い物の定番品を本人へ確認\n- 細かい個人情報は別管理にする",
    rows: 4,
  },
  {
    key: "avoidInfo",
    label: "このメモに書かない情報",
    placeholder:
      "例: 住所、電話番号、会員番号、決済情報、暗証番号、ログイン情報、本人確認情報、重要書類の保管場所は書かない。",
    rows: 3,
  },
  {
    key: "nextCheck",
    label: "次に確認すること",
    placeholder: "例: 次回帰省時に、薬局へ行く頻度と理美容室の予約目安を本人に確認する。",
    rows: 3,
  },
];

export default function KaigoParentFrequentShopsLivingAreaMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親のよく行く店・生活圏メモ】",
      values.targetHome ? `対象の家・共有範囲: ${values.targetHome}` : "対象の家・共有範囲: 未入力",
      values.recordDate ? `確認日・確認した人: ${values.recordDate}` : "確認日・確認した人: 未入力",
      "",
      "■ 買い物でよく行く場所",
      values.shoppingPlaces || "未入力",
      "",
      "■ 用事で立ち寄る場所",
      values.errandPlaces || "未入力",
      "",
      "■ 理美容室・身だしなみの控え",
      values.salonPlaces || "未入力",
      "",
      "■ 散歩・立ち寄り先の目印",
      values.walkPlaces || "未入力",
      "",
      "■ 家族で共有する控え",
      values.familyNotes || "未入力",
      "",
      "■ このメモに書かない情報",
      values.avoidInfo || "未入力",
      "",
      "■ 次に確認すること",
      values.nextCheck || "未入力",
      "",
      "※このメモは、親がよく行く店や生活圏を家族で見返すための控えです。外出可否、移動方法、防犯、契約、支払い、本人確認、医療や介護サービスの判断には使いません。住所、電話番号、会員番号、決済情報、暗証番号、ログイン情報、本人確認情報、重要書類の保管場所は書かない前提で使ってください。",
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
          高齢親のよく行く店・生活圏メモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          スーパー、薬局、理美容室、散歩先など、親がふだん立ち寄る場所と家族が次に確認することを整理します。
          詳しい住所や支払い情報を集めるためではなく、家族内の引き継ぎ用メモとして使ってください。
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
              親のこと整理ナビで関連テンプレートを診断する
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={GUIDE_URL}>
              よく行く店・生活圏メモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              よく行く店・生活圏メモ テンプレート集を見る
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
        このツールは、親がよく行く店や生活圏を家族内で見返すためのメモです。
        外出可否、移動方法、防犯、契約、支払い、本人確認、医療や介護サービスの判断には使えません。
        住所、電話番号、会員番号、決済情報、暗証番号、ログイン情報、本人確認情報、重要書類の保管場所は記録しないでください。
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
