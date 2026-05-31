"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_visit_bring_carryback";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-home-visit-bring-carryback-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_home_visit_bring_carryback";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383187";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

type FieldKey =
  | "targetHome"
  | "recordDate"
  | "bringItems"
  | "carryBackItems"
  | "familyRequests"
  | "seasonalItems"
  | "afterVisit"
  | "avoidInfo"
  | "nextReview";

const initialValues: Record<FieldKey, string> = {
  targetHome: "",
  recordDate: "",
  bringItems: "",
  carryBackItems: "",
  familyRequests: "",
  seasonalItems: "",
  afterVisit: "",
  avoidInfo: "",
  nextReview: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "targetHome",
    label: "対象の親宅・共有範囲",
    placeholder: "例: 母宅への帰省用。長女・長男で共有。住所や鍵の情報はここには書かない。",
    rows: 2,
  },
  {
    key: "recordDate",
    label: "記入日・書いた人",
    placeholder: "例: 2026年6月1日、帰省前に長女が家族内メモとして記入。",
    rows: 2,
  },
  {
    key: "bringItems",
    label: "親宅へ持って行くもの",
    placeholder:
      "例:\n- 写真のコピー: 次回帰省で渡す。玄関のバッグに入れる\n- 紙袋: 親宅で使う分を数枚\n- 親宅用の小物: 本人と確認済みの範囲だけ",
    rows: 5,
  },
  {
    key: "carryBackItems",
    label: "親宅から持ち帰るもの",
    placeholder:
      "例:\n- 前回置き忘れた本: 居間の棚にあるか次回確認\n- 空き容器: 台所で見つけたら持ち帰る\n- 家族側へ戻す紙袋: 急がないものだけ",
    rows: 5,
  },
  {
    key: "familyRequests",
    label: "家族間リクエスト",
    placeholder:
      "例:\n- 長女から長男へ: 次回行くとき写真の封筒を持って行けたらお願い\n- 長男から長女へ: 置き忘れた本があれば持ち帰り\n- 無理なら次回へ回す",
    rows: 5,
  },
  {
    key: "seasonalItems",
    label: "季節・行事ごとの定番",
    placeholder:
      "例: お盆、年末年始、母の日・父の日などで毎回運ぶもの。完璧な一覧ではなく、思い出せる範囲だけ。",
    rows: 4,
  },
  {
    key: "afterVisit",
    label: "帰省後の更新メモ",
    placeholder:
      "例: 運べたもの、次回へ回したもの、どこに置いたか、家族に共有しておきたい短い控え。",
    rows: 4,
  },
  {
    key: "avoidInfo",
    label: "このメモに書かない情報",
    placeholder:
      "例: 住所、電話番号、ログイン情報、暗証番号、カード、口座、本人確認情報、鍵の所在、合鍵の置き場所、防犯コード、処分や相続の判断。",
    rows: 4,
  },
  {
    key: "nextReview",
    label: "次に見返すタイミング",
    placeholder: "例: 次回帰省の前日、出発前、家族で持ち物を確認する前。",
    rows: 3,
  },
];

export default function KaigoParentHomeVisitBringCarrybackMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親宅への帰省 持参・持ち帰り家族内メモ】",
      values.targetHome ? "対象の親宅・共有範囲: " + values.targetHome : "対象の親宅・共有範囲: 未入力",
      values.recordDate ? "記入日・書いた人: " + values.recordDate : "記入日・書いた人: 未入力",
      "",
      "■ 親宅へ持って行くもの",
      values.bringItems || "未入力",
      "",
      "■ 親宅から持ち帰るもの",
      values.carryBackItems || "未入力",
      "",
      "■ 家族間リクエスト",
      values.familyRequests || "未入力",
      "",
      "■ 季節・行事ごとの定番",
      values.seasonalItems || "未入力",
      "",
      "■ 帰省後の更新メモ",
      values.afterVisit || "未入力",
      "",
      "■ このメモに書かない情報",
      values.avoidInfo ||
        "住所、電話番号、ログイン情報、暗証番号、カード、口座、本人確認情報、鍵の所在、合鍵の置き場所、防犯コード、処分や相続の判断は書かない。",
      "",
      "■ 次に見返すタイミング",
      values.nextReview || "未入力",
      "",
      "※このメモは、帰省で家族が手で運ぶ持って行くもの・持ち帰るものを家族内で見返すための控えです。帰省日程、交通、宿泊予約、処分、形見分け、相続、支払い、責任分担の判断には使いません。",
      "※秘密情報や個人情報は書かないでください。必要な確認は本人・家族で別途行ってください。",
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
          高齢親宅への帰省 持参・持ち帰りメモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          帰省で家族が手で運ぶ持って行くもの、持ち帰るもの、家族間リクエストを、次に行く家族が見返せる控えとして整理します。
          交通、宿泊、処分、相続、支払い、秘密情報の管理には使わないでください。
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
              帰省の持参・持ち帰りメモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              帰省 持参・持ち帰りメモ テンプレート集を見る
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
        このツールは、帰省で家族が手で運ぶものを家族内で見返すためのメモです。
        帰省日程、交通、宿泊予約、処分、形見分け、相続、支払い、責任分担の判断には使えません。
        住所、電話番号、口座、カード、ログイン情報、本人確認情報、鍵の所在などは記録しないでください。
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
