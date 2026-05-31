"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_cherished_item_background";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-cherished-item-background-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_cherished_item_background";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383181";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

type FieldKey =
  | "targetScope"
  | "recordDate"
  | "itemList"
  | "parentStory"
  | "locationNote"
  | "familyMemory"
  | "avoidInfo"
  | "nextCheck";

const initialValues: Record<FieldKey, string> = {
  targetScope: "",
  recordDate: "",
  itemList: "",
  parentStory: "",
  locationNote: "",
  familyMemory: "",
  avoidInfo: "",
  nextCheck: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "targetScope",
    label: "対象の親・共有範囲",
    placeholder: "例: 母の居間と押し入れにある大切な品。長女・長男で共有。外部公開には使わない。",
    rows: 2,
  },
  {
    key: "recordDate",
    label: "記録日・聞いた場面",
    placeholder: "例: 2026年6月1日、帰省時に棚を見ながら本人から聞いた。",
    rows: 2,
  },
  {
    key: "itemList",
    label: "品名・見た目の手がかり",
    placeholder:
      "例:\n- 木箱入りの湯のみ: 茶色の箱、ふたに手書きのメモあり\n- 古い裁縫箱: 居間の棚の下段、赤い布カバー",
    rows: 5,
  },
  {
    key: "parentStory",
    label: "親が話してくれた背景",
    placeholder:
      "例:\n- 湯のみは退職時にもらったもの。来客用ではなく記念として置いている。\n- 裁縫箱は祖母から譲られたもの。詳しい年は未確認。",
    rows: 6,
  },
  {
    key: "locationNote",
    label: "置き場所・保管の控え",
    placeholder:
      "例: 湯のみは食器棚の上段奥。裁縫箱は居間の棚下段。移動した場合は移動日と移動先だけ追記する。",
    rows: 4,
  },
  {
    key: "familyMemory",
    label: "家族が覚えていること",
    placeholder:
      "例: 子どものころ、来客の前にこの湯のみを出すかどうか母が迷っていた。本人の話と違う部分は断定しない。",
    rows: 4,
  },
  {
    key: "avoidInfo",
    label: "このメモに書かない情報",
    placeholder:
      "例: 処分可否、相続判断、売却額、鑑定結果、住所、電話番号、口座、カード、ログイン情報、本人確認書類、鍵の保管場所は書かない。",
    rows: 4,
  },
  {
    key: "nextCheck",
    label: "次に本人へ聞くこと",
    placeholder:
      "例: 誰からもらったか、写真を撮ってよいか、同じ箱に入っている手紙の扱いを確認する。判断はこのメモだけで決めない。",
    rows: 4,
  },
];

export default function KaigoParentCherishedItemBackgroundMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親が大切にしている品の背景メモ】",
      values.targetScope ? "対象の親・共有範囲: " + values.targetScope : "対象の親・共有範囲: 未入力",
      values.recordDate ? "記録日・聞いた場面: " + values.recordDate : "記録日・聞いた場面: 未入力",
      "",
      "■ 品名・見た目の手がかり",
      values.itemList || "未入力",
      "",
      "■ 親が話してくれた背景",
      values.parentStory || "未入力",
      "",
      "■ 置き場所・保管の控え",
      values.locationNote || "未入力",
      "",
      "■ 家族が覚えていること",
      values.familyMemory || "未入力",
      "",
      "■ このメモに書かない情報",
      values.avoidInfo ||
        "処分可否、相続判断、売却額、鑑定結果、住所、電話番号、口座、カード、ログイン情報、本人確認書類、鍵の保管場所は書かない。",
      "",
      "■ 次に本人へ聞くこと",
      values.nextCheck || "未入力",
      "",
      "※このメモは家族内で背景を見返すための控えです。処分、相続、鑑定、売却、権利関係の判断には使いません。",
      "※住所、電話番号、口座、カード、ログイン情報、本人確認書類、鍵や秘密情報はまとめない前提で管理してください。",
    ].join("\n");
  }, [values]);

  const updateValue = (key: FieldKey, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <p className="mb-2 text-sm font-bold text-primary">介護・実家整理メモ</p>
        <h1 className="mb-3 text-3xl font-bold leading-tight">高齢親が大切にしている品の背景メモメーカー</h1>
        <p className="max-w-3xl leading-7 text-muted">
          親の家に長くある品や大切にしている品について、親が話してくれた背景、きっかけ、短い思い出を家族内の控えとして整理します。
          処分・相続・金銭価値の判断に踏み込まず、あとで家族が見返せるメモにするための無料ツールです。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
        <section className="rounded-lg border border-card-border bg-card-bg p-5">
          <h2 className="mb-4 text-xl font-bold">入力</h2>
          <div className="space-y-4">
            {fields.map((field) => (
              <label key={field.key} className="block">
                <span className="mb-1 block text-sm font-bold">{field.label}</span>
                <textarea
                  value={values[field.key]}
                  onChange={(event) => updateValue(field.key, event.target.value)}
                  placeholder={field.placeholder}
                  rows={field.rows || 3}
                  className="w-full rounded-md border border-card-border bg-background px-3 py-2 text-sm leading-6 outline-none focus:border-primary"
                />
              </label>
            ))}
          </div>
        </section>

        <aside className="space-y-4">
          <section className="rounded-lg border border-card-border bg-card-bg p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold">出力メモ</h2>
              <button
                type="button"
                onClick={copyOutput}
                className="rounded-md bg-primary px-3 py-2 text-sm font-bold text-white hover:opacity-90"
              >
                コピー
              </button>
            </div>
            <pre className="min-h-[360px] whitespace-pre-wrap rounded-md bg-background p-4 text-sm leading-6 text-foreground">
              {output}
            </pre>
          </section>

          <section className="rounded-lg border border-primary/20 bg-primary/5 p-5">
            <h2 className="mb-3 text-lg font-bold">テンプレートで整理する</h2>
            <p className="mb-4 text-sm leading-7 text-muted">
              PDF/Excel版では、複数の品を同じ形式で記録し、家族内で見返しやすい控えとして保存できます。
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={BOOTH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90"
              >
                単品を見る
              </a>
              <a
                href={FULL_PACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-primary/30 px-4 py-2 text-sm font-bold text-primary hover:border-primary"
              >
                フルパック
              </a>
              <a
                href={PACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-card-border px-4 py-2 text-sm font-bold hover:border-primary"
              >
                スターター
              </a>
            </div>
          </section>

          <section className="rounded-lg border border-card-border bg-card-bg p-5">
            <h2 className="mb-3 text-lg font-bold">関連リンク</h2>
            <div className="flex flex-wrap gap-3">
              <a
                href={GUIDE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-card-border px-4 py-2 text-sm font-bold hover:border-primary"
              >
                使い方ガイド
              </a>
              <a
                href={KAIGO_NAVI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-card-border px-4 py-2 text-sm font-bold hover:border-primary"
              >
                介護整理ナビ
              </a>
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
