"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_seasonal_event_supplies_storage";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-seasonal-event-supplies-storage-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_seasonal_event_supplies_storage";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383090";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

type FieldKey =
  | "targetHome"
  | "recordDate"
  | "seasonalSuppliesMemo"
  | "eventSuppliesMemo"
  | "storageLocationMemo"
  | "containerLabelMemo"
  | "avoidInfoMemo"
  | "familyShareMemo"
  | "nextCheckMemo";

const initialValues: Record<FieldKey, string> = {
  targetHome: "",
  recordDate: "",
  seasonalSuppliesMemo: "",
  eventSuppliesMemo: "",
  storageLocationMemo: "",
  containerLabelMemo: "",
  avoidInfoMemo: "",
  familyShareMemo: "",
  nextCheckMemo: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "targetHome",
    label: "対象の家・共有範囲",
    placeholder: "例: 母の実家。長女・長男で共有。住所や電話番号は書かない。",
    rows: 2,
  },
  {
    key: "recordDate",
    label: "確認日・確認した人",
    placeholder: "例: 2026年6月1日、帰省時に長女が押し入れと納戸を確認。",
    rows: 2,
  },
  {
    key: "seasonalSuppliesMemo",
    label: "季節用品の収納メモ",
    placeholder:
      "例:\n- こたつ布団カバー: 2階納戸の透明ケース\n- 扇風機カバー: 和室押し入れ上段の白い袋\n- 加湿器の収納袋: 廊下収納の下段",
    rows: 5,
  },
  {
    key: "eventSuppliesMemo",
    label: "年中行事用品の収納メモ",
    placeholder:
      "例:\n- 正月飾り: 玄関収納の上段、赤い箱\n- ひな人形: 2階押し入れ、箱にラベルあり\n- クリスマスツリー: 納戸奥の緑の箱",
    rows: 5,
  },
  {
    key: "storageLocationMemo",
    label: "収納場所別の中身メモ",
    placeholder:
      "例:\n- 1階和室押し入れ上段: 季節の布類\n- 2階納戸の棚: 行事用品の箱\n- 玄関収納: 正月用品の一部",
    rows: 5,
  },
  {
    key: "containerLabelMemo",
    label: "容器・ラベルの控え",
    placeholder:
      "例:\n- 透明ケースに「冬物カバー」と手書きラベル\n- 段ボールは古い表記なので次回写真で確認\n- 箱を開けずに分かる範囲だけ記録",
    rows: 4,
  },
  {
    key: "avoidInfoMemo",
    label: "書かない情報の確認",
    placeholder:
      "例: 鍵、暗証番号、通帳、カード、重要書類、貴重品の詳しい保管場所は書かない。外部共有リンクには載せない。",
    rows: 4,
  },
  {
    key: "familyShareMemo",
    label: "家族内の共有メモ",
    placeholder:
      "例:\n- 次回帰省時に長男が納戸奥を確認\n- 処分や買い足しはこのメモでは決めない\n- 写真は家族共有フォルダ名だけを書く",
    rows: 4,
  },
  {
    key: "nextCheckMemo",
    label: "次に見返すタイミング",
    placeholder: "例: 年末前、衣替え前、帰省時、行事用品を出す前。",
    rows: 3,
  },
];

export default function KaigoParentSeasonalEventSuppliesStorageMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【実家の季節用品・年中行事用品 収納場所控えメモ】",
      values.targetHome ? `対象の家・共有範囲: ${values.targetHome}` : "対象の家・共有範囲: 未入力",
      values.recordDate ? `確認日・確認した人: ${values.recordDate}` : "確認日・確認した人: 未入力",
      "",
      "■ 季節用品の収納メモ",
      values.seasonalSuppliesMemo || "未入力",
      "",
      "■ 年中行事用品の収納メモ",
      values.eventSuppliesMemo || "未入力",
      "",
      "■ 収納場所別の中身メモ",
      values.storageLocationMemo || "未入力",
      "",
      "■ 容器・ラベルの控え",
      values.containerLabelMemo || "未入力",
      "",
      "■ 書かない情報の確認",
      values.avoidInfoMemo || "未入力",
      "",
      "■ 家族内の共有メモ",
      values.familyShareMemo || "未入力",
      "",
      "■ 次に見返すタイミング",
      values.nextCheckMemo || "未入力",
      "",
      "※このメモは、実家の季節用品・年中行事用品の収納場所を家族内で見返すための控えです。整理、処分、買い足し、貴重品管理、相続、契約、防犯、本人確認、支払いの判断には使いません。住所、電話番号、鍵、暗証番号、通帳、カード、ログイン情報、重要書類や貴重品の詳細な保管場所は書かないでください。",
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
          実家の季節用品・年中行事用品 収納場所控えメモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          正月用品、季節飾り、冬支度、夏支度など、年に数回だけ使うものの収納場所、箱やラベル、次に確認することを家族内の控えとして整理します。
          整理、処分、買い足し、防犯に関わる詳しい情報の記録には使わないでください。
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
              季節用品・年中行事用品の収納場所控えメモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              季節用品・年中行事用品収納場所控えメモテンプレート集を見る
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
        このツールは家族内で季節用品・年中行事用品の収納場所を見返すためのものです。
        整理、処分、買い足し、貴重品管理、相続、契約、防犯、本人確認、支払いの判断には使えません。
        住所、電話番号、鍵、暗証番号、通帳、カード、ログイン情報、重要書類や貴重品の詳細な保管場所は記録しないでください。
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
