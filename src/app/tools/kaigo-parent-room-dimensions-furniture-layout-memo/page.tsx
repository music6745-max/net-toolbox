"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_room_dimensions_furniture_layout";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-room-dimensions-furniture-layout-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_room_dimensions_furniture_layout";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383086";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

type FieldKey =
  | "targetHome"
  | "recordDate"
  | "roomMemo"
  | "dimensionMemo"
  | "furnitureMemo"
  | "doorwayPathMemo"
  | "photoStorageMemo"
  | "familyShareMemo"
  | "nextCheckMemo";

const initialValues: Record<FieldKey, string> = {
  targetHome: "",
  recordDate: "",
  roomMemo: "",
  dimensionMemo: "",
  furnitureMemo: "",
  doorwayPathMemo: "",
  photoStorageMemo: "",
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
    label: "確認日・測った人",
    placeholder: "例: 2026年5月31日、帰省時に長女が確認。古い寸法は次回見直す。",
    rows: 2,
  },
  {
    key: "roomMemo",
    label: "部屋の呼び名・用途",
    placeholder:
      "例:\n- 1階和室: 来客用、押し入れあり\n- 2階北側の部屋: 使っていない家具が多い\n- 台所横: 通路が狭い",
    rows: 5,
  },
  {
    key: "dimensionMemo",
    label: "寸法の控え",
    placeholder:
      "例:\n- 1階和室: 幅 約000cm、奥行 約000cm、高さ 約000cm\n- 窓: 南側、カーテン幅は未確認\n- 扉: 内開き。家具を置く前に扉の動きを再確認",
    rows: 6,
  },
  {
    key: "furnitureMemo",
    label: "家具配置の控え",
    placeholder:
      "例:\n- タンス: 入口から見て右奥。重くて動かしにくい\n- ベッド: 窓側。通路幅は次回確認\n- テレビ台: コンセント近く。配線は写真で確認",
    rows: 6,
  },
  {
    key: "doorwayPathMemo",
    label: "通路・搬入経路の気づき",
    placeholder:
      "例:\n- 玄関から和室までは廊下で曲がり角あり\n- 階段幅は未確認。大きな家具は販売店に相談前に再測定\n- 扉の幅と開き方を次回確認",
    rows: 5,
  },
  {
    key: "photoStorageMemo",
    label: "写真・図の保存メモ",
    placeholder:
      "例:\n- 写真は家族共有フォルダの「2026_実家_和室」に保存\n- 防犯上の細かい配置や鍵の場所は撮らない\n- 紙のメモは実家ファイルに保管",
    rows: 5,
  },
  {
    key: "familyShareMemo",
    label: "家族内の共有メモ",
    placeholder:
      "例:\n- 次回は長男が2階を確認\n- 家具を買う前に、販売店へ搬入条件を確認\n- 施工や修理の判断は専門先に確認してから",
    rows: 5,
  },
  {
    key: "nextCheckMemo",
    label: "次に確認すること",
    placeholder: "例: カーテン幅、階段幅、ベッド横の通路、コンセント位置、家具裏の状態。",
    rows: 3,
  },
];

export default function KaigoParentRoomDimensionsFurnitureLayoutMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【実家の部屋寸法・家具配置 控えメモ】",
      values.targetHome ? `対象の家・共有範囲: ${values.targetHome}` : "対象の家・共有範囲: 未入力",
      values.recordDate ? `確認日・測った人: ${values.recordDate}` : "確認日・測った人: 未入力",
      "",
      "■ 部屋の呼び名・用途",
      values.roomMemo || "未入力",
      "",
      "■ 寸法の控え",
      values.dimensionMemo || "未入力",
      "",
      "■ 家具配置の控え",
      values.furnitureMemo || "未入力",
      "",
      "■ 通路・搬入経路の気づき",
      values.doorwayPathMemo || "未入力",
      "",
      "■ 写真・図の保存メモ",
      values.photoStorageMemo || "未入力",
      "",
      "■ 家族内の共有メモ",
      values.familyShareMemo || "未入力",
      "",
      "■ 次に確認すること",
      values.nextCheckMemo || "未入力",
      "",
      "※このメモは、家族内で実家の部屋寸法と家具配置の確認事項を見返すための控えです。家具購入、設置、修理、施工、リフォーム、介護用品導入などの判断には使いません。必要な場合は販売店、メーカー、施工会社、管理会社、専門家の正式な確認を取ってください。住所、電話番号、鍵、防犯コード、金庫、口座、カード、ログイン情報、詳細な防犯上の配置は記録しないでください。",
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
          実家の部屋寸法・家具配置 控えメモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          帰省時に測った部屋の寸法、家具の置き場所、通路、搬入経路、次に確認することを家族内の控えとして整理します。
          購入や施工の判断に使う情報ではなく、確認漏れを減らすためのメモだけを残してください。
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
              部屋寸法・家具配置控えメモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              部屋寸法・家具配置控えメモテンプレート集を見る
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
        このツールは家族内の確認メモを作るためのものです。家具購入、設置、修理、施工、リフォーム、介護用品導入などの判断には使えません。
        必要な場合は販売店、メーカー、施工会社、管理会社、専門家の正式な確認を取ってください。
        住所、電話番号、鍵、防犯コード、金庫、口座、カード、ログイン情報、詳細な防犯上の配置は記録しないでください。
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
