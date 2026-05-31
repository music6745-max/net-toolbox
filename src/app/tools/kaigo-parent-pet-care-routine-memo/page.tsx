"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_pet_care_routine";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-pet-care-routine-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_pet_care_routine";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383160";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

type FieldKey =
  | "targetHome"
  | "recordDate"
  | "petBasicMemo"
  | "feedingWaterMemo"
  | "walkActivityMemo"
  | "toiletCleaningMemo"
  | "suppliesStorageMemo"
  | "careContactsMemo"
  | "handoverMemo"
  | "nextReview";

const initialValues: Record<FieldKey, string> = {
  targetHome: "",
  recordDate: "",
  petBasicMemo: "",
  feedingWaterMemo: "",
  walkActivityMemo: "",
  toiletCleaningMemo: "",
  suppliesStorageMemo: "",
  careContactsMemo: "",
  handoverMemo: "",
  nextReview: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "targetHome",
    label: "対象の家・共有範囲",
    placeholder: "例: 母の実家。長女・長男で共有。外部共有はしない。",
    rows: 2,
  },
  {
    key: "recordDate",
    label: "記録日・確認した人",
    placeholder: "例: 2026年5月31日、帰省時に長女が確認。",
    rows: 2,
  },
  {
    key: "petBasicMemo",
    label: "ペットの基本メモ",
    placeholder:
      "例:\n- 呼び名: たろう\n- 種類: 小型犬\n- 普段いる場所: リビング横\n- いつもの様子: 朝は玄関近くで待つことが多い",
    rows: 5,
  },
  {
    key: "feedingWaterMemo",
    label: "ごはん・水の控え",
    placeholder:
      "例:\n- 朝: 台所横でいつものフードを出す\n- 夜: 親が出していることが多い\n- 水: リビングと台所の器を確認\n- 量や種類は、袋や公式案内を見て確認する",
    rows: 6,
  },
  {
    key: "walkActivityMemo",
    label: "散歩・遊び・見守りの控え",
    placeholder:
      "例:\n- 散歩は夕方に短め。無理に距離を伸ばさない\n- いつものリードは玄関棚\n- 様子が違う場合は家族内で相談し、必要なら動物病院に確認",
    rows: 5,
  },
  {
    key: "toiletCleaningMemo",
    label: "トイレ・掃除の控え",
    placeholder:
      "例:\n- トイレシートは洗面所下の収納\n- ゴミの日は実家の分別表を確認\n- 砂やシートの交換頻度は親の普段のやり方を優先して確認",
    rows: 5,
  },
  {
    key: "suppliesStorageMemo",
    label: "用品・買い足し候補",
    placeholder:
      "例:\n- フード: 台所右下収納\n- リード: 玄関棚\n- ブラシ: 洗面台横\n- 買い足しは商品名を袋で確認してから",
    rows: 5,
  },
  {
    key: "careContactsMemo",
    label: "確認先・正式情報の保管場所",
    placeholder:
      "例:\n- 動物病院のカードは玄関横の青いファイル\n- トリマーの情報は親の手帳で確認\n- 電話番号、保険番号、診察券番号はこのメモに書かない",
    rows: 5,
  },
  {
    key: "handoverMemo",
    label: "家族内の引き継ぎメモ",
    placeholder:
      "例:\n- 次回帰省時にフードの残量を確認\n- 親が不在の時だけ長男が散歩を担当\n- 体調や行動の変化は家族内で共有してから専門先へ確認",
    rows: 5,
  },
  {
    key: "nextReview",
    label: "次に見直すタイミング",
    placeholder: "例: 次回帰省時、フードを買い足す前、トリミング予約前。",
    rows: 2,
  },
];

export default function KaigoParentPetCareRoutineMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親と暮らすペットのお世話控えメモ】",
      values.targetHome ? `対象の家・共有範囲: ${values.targetHome}` : "対象の家・共有範囲: 未入力",
      values.recordDate ? `記録日・確認した人: ${values.recordDate}` : "記録日・確認した人: 未入力",
      "",
      "■ ペットの基本メモ",
      values.petBasicMemo || "未入力",
      "",
      "■ ごはん・水の控え",
      values.feedingWaterMemo || "未入力",
      "",
      "■ 散歩・遊び・見守りの控え",
      values.walkActivityMemo || "未入力",
      "",
      "■ トイレ・掃除の控え",
      values.toiletCleaningMemo || "未入力",
      "",
      "■ 用品・買い足し候補",
      values.suppliesStorageMemo || "未入力",
      "",
      "■ 確認先・正式情報の保管場所",
      values.careContactsMemo || "未入力",
      "",
      "■ 家族内の引き継ぎメモ",
      values.handoverMemo || "未入力",
      "",
      "■ 次に見直すタイミング",
      values.nextReview || "未入力",
      "",
      "※このメモは家族内で、実家のペットのお世話習慣と確認先を見返すための控えです。フード、薬、サプリ、治療、トリミング、病院、しつけの判断には使いません。体調や行動の変化がある場合は、飼い主本人、動物病院、専門家、公式案内で確認してください。住所、電話番号、口座、決済情報、ログイン情報、保険番号、診察券番号、詳しい病歴はこのメモにまとめないでください。",
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
          高齢親と暮らすペットのお世話控えメモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          実家のペットのごはん・水・散歩・トイレ・用品の置き場所を、家族内で見返せる引き継ぎメモに整えます。
          判断が必要な内容や詳しい個人情報は入れず、確認先と普段の習慣だけを整理してください。
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
              ペットのお世話控えメモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              ペットのお世話控えメモテンプレート集を見る
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
        このツールは家族内の引き継ぎメモを作るためのものです。フード、薬、サプリ、治療、トリミング、病院、しつけの判断には使えません。
        体調や行動の変化がある場合は、飼い主本人、動物病院、専門家、公式案内で確認してください。
        住所、電話番号、口座、決済情報、ログイン情報、保険番号、診察券番号、詳しい病歴は記録しないでください。
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
