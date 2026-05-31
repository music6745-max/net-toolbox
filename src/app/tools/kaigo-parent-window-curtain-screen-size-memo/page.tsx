"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_window_curtain_screen_size";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-window-curtain-screen-size-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_window_curtain_screen_size";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383082";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

type FieldKey =
  | "targetHome"
  | "recordDate"
  | "roomWindowMemo"
  | "curtainMemo"
  | "screenMemo"
  | "measuredBy"
  | "storageMemo"
  | "nextCheckMemo"
  | "familyShareMemo"
  | "nextReview";

const initialValues: Record<FieldKey, string> = {
  targetHome: "",
  recordDate: "",
  roomWindowMemo: "",
  curtainMemo: "",
  screenMemo: "",
  measuredBy: "",
  storageMemo: "",
  nextCheckMemo: "",
  familyShareMemo: "",
  nextReview: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "targetHome",
    label: "対象",
    placeholder: "例: 母の実家、1階リビングまわり、次回帰省時に確認する窓",
    rows: 2,
  },
  {
    key: "recordDate",
    label: "記録日",
    placeholder: "例: 2026年5月31日、帰省時に測った控え",
    rows: 2,
  },
  {
    key: "roomWindowMemo",
    label: "部屋名・窓の場所・測ったサイズ",
    placeholder:
      "例:\n- リビング南側 掃き出し窓: 幅○cm / 高さ○cm、長男が確認\n- 寝室東側 小窓: 幅○cm / 高さ○cm、測り直し候補\n- 台所 出窓: レール位置は未確認",
    rows: 6,
  },
  {
    key: "curtainMemo",
    label: "カーテン・レールまわりのメモ",
    placeholder:
      "例:\n- 現在は2枚組、丈が少し長い\n- レールの端から端までを次回確認\n- 購入前には店舗やメーカーの採寸案内を確認",
  },
  {
    key: "screenMemo",
    label: "網戸・窓まわりのメモ",
    placeholder:
      "例:\n- 網戸あり、破れは家族で次回確認\n- 外れやすい箇所は触らず、必要なら専門業者へ確認\n- 部品名や型番は未確認",
  },
  {
    key: "measuredBy",
    label: "測った人・確認した範囲",
    placeholder: "例: 長女がリビングだけ確認。寝室と和室は次回。写真は家族内共有のみ。",
    rows: 3,
  },
  {
    key: "storageMemo",
    label: "関連メモ・書類の置き場所",
    placeholder:
      "例:\n- メジャーは台所引き出し\n- 前回の見積書は青いファイル\n- 契約書や支払い情報はこのメモには書かない",
  },
  {
    key: "nextCheckMemo",
    label: "次に確認したいこと",
    placeholder:
      "例:\n- レールの長さを測り直す\n- 網戸のサイズは販売店の案内に沿って確認\n- 修理や交換の判断は業者に確認してから",
  },
  {
    key: "familyShareMemo",
    label: "家族共有メモ",
    placeholder:
      "例:\n- 長男・長女へ共有済み\n- 住所、鍵、暗証番号、支払い情報は書かない\n- 外部共有リンクには載せない",
  },
  {
    key: "nextReview",
    label: "次回見直すタイミング",
    placeholder: "例: 次の帰省時、販売店へ相談する前、修理の見積もり前",
    rows: 2,
  },
];

export default function KaigoParentWindowCurtainScreenSizeMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【実家 窓・カーテン・網戸 サイズ控えメモ】",
      values.targetHome ? `対象: ${values.targetHome}` : "対象: 未入力",
      values.recordDate ? `記録日: ${values.recordDate}` : "記録日: 未入力",
      "",
      "■ 部屋名・窓の場所・測ったサイズ",
      values.roomWindowMemo || "未入力",
      "",
      "■ カーテン・レールまわりのメモ",
      values.curtainMemo || "未入力",
      "",
      "■ 網戸・窓まわりのメモ",
      values.screenMemo || "未入力",
      "",
      "■ 測った人・確認した範囲",
      values.measuredBy || "未入力",
      "",
      "■ 関連メモ・書類の置き場所",
      values.storageMemo || "未入力",
      "",
      "■ 次に確認したいこと",
      values.nextCheckMemo || "未入力",
      "",
      "■ 家族共有メモ",
      values.familyShareMemo || "未入力",
      "",
      "■ 次回見直すタイミング",
      values.nextReview || "未入力",
      "",
      "※このメモは、家族内で窓・カーテン・網戸まわりの確認済みサイズや未確認事項を見返すためのものです。購入、設置、修理、施工、採寸方法、商品仕様の判断には使えません。実際に購入や修理を進める前には、販売店、メーカー、施工業者などの公式案内で確認してください。住所、鍵、暗証番号、ログイン情報、支払い情報、防犯に関わる詳しい情報はこのメモにまとめないでください。",
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">実家 窓・カーテン・網戸サイズ控えメモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          帰省時に測った窓・カーテン・網戸のサイズ、測定日、確認した人、次に確認することを家族で見返しやすい形にそろえます。
          購入、設置、修理、施工、防犯に関わる詳しい情報の記録には使わないでください。
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
            <p className="font-bold text-slate-900">次の整理</p>
            <a className="block font-semibold text-blue-700 hover:underline" href={KAIGO_NAVI_URL}>
              親のこと整理ナビで関連テンプレートを診断する
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={GUIDE_URL}>
              窓・カーテン・網戸サイズ控えメモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              窓・カーテン・網戸サイズ控えメモテンプレート集を見る
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
        このツールは家族内で窓・カーテン・網戸まわりの確認済みメモを整理するためのものです。
        購入、設置、修理、施工、採寸方法、商品仕様の判断には使えません。必要な場合は販売店、メーカー、施工業者などの公式案内を確認してください。
        住所、鍵、暗証番号、ログイン情報、支払い情報、防犯に関わる詳しい情報は記録しないでください。
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
