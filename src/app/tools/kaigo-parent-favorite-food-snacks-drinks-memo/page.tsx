"use client";

import { useMemo, useState } from "react";

import { getKaigoKindleLink } from "@/components/KaigoToolCta";
import { trackEvent } from "@/lib/tracking";

const TOOL_SLUG = "kaigo-parent-favorite-food-snacks-drinks-memo";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_favorite_food_snacks_drinks";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-favorite-food-snacks-drinks-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_favorite_food_snacks_drinks";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383158";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";
const NOTE_URL = "https://note.com/mild_quail6092/n/n3d9e371ab5ff";
const KINDLE_LINK = getKaigoKindleLink(TOOL_SLUG);

function trackKindleClick() {
  trackEvent(KINDLE_LINK.eventName, {
    page: TOOL_SLUG,
    position: KINDLE_LINK.position,
    url: KINDLE_LINK.href.slice(0, 200),
  });
}

type FieldKey =
  | "targetPerson"
  | "recordDate"
  | "foodItems"
  | "snackItems"
  | "drinkItems"
  | "seasonSceneMemo"
  | "familyMemo"
  | "avoidInfo"
  | "nextCheck";

const initialValues: Record<FieldKey, string> = {
  targetPerson: "",
  recordDate: "",
  foodItems: "",
  snackItems: "",
  drinkItems: "",
  seasonSceneMemo: "",
  familyMemo: "",
  avoidInfo: "",
  nextCheck: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "targetPerson",
    label: "対象の親・共有範囲",
    placeholder: "例: 母が会話で話していた好み。長女・長男で帰省前に見返す。外部公開用には使わない。",
    rows: 2,
  },
  {
    key: "recordDate",
    label: "記録日・聞いた場面",
    placeholder: "例: 2026年6月4日、電話中に昔よく食べたお菓子の話が出たので控えた。",
    rows: 2,
  },
  {
    key: "foodItems",
    label: "好きな食べ物",
    placeholder:
      "例:\n- 季節になると話す果物\n- 昔から好きな家庭料理\n- 外食の思い出として話していたもの\n※食事制限や量の判断には使わない",
    rows: 5,
  },
  {
    key: "snackItems",
    label: "好きなお菓子・お茶の時間の話題",
    placeholder:
      "例:\n- お茶の時間に話していたお菓子\n- 来客時によく出していたもの\n- 昔の思い出として出た甘いもの\n※購入や差し入れを確定する欄ではない",
    rows: 5,
  },
  {
    key: "drinkItems",
    label: "好きな飲み物",
    placeholder:
      "例:\n- 朝に話題に出る飲み物\n- 季節の飲み物\n- 家族との思い出として話していた飲み物\n※水分量や体調管理の欄ではない",
    rows: 5,
  },
  {
    key: "seasonSceneMemo",
    label: "季節・場面メモ",
    placeholder:
      "例:\n- 夏になると話す\n- 帰省時のお茶の時間に話題になりやすい\n- 誕生日や家族行事の会話で出てくる",
    rows: 4,
  },
  {
    key: "familyMemo",
    label: "家族内メモ",
    placeholder:
      "例:\n- 兄弟で覚えている呼び方が違う場合は併記する\n- 本人が話した範囲だけ控える\n- 施設ルールや購入判断とは分けて確認する",
    rows: 4,
  },
  {
    key: "avoidInfo",
    label: "このメモに書かない情報",
    placeholder:
      "例: 食事制限、アレルギー、服薬、栄養、体調、摂取量、施設への持ち込み可否、購入量、保存方法、健康判断、医療・介護上の判断。",
    rows: 4,
  },
  {
    key: "nextCheck",
    label: "次に聞いてみたいこと",
    placeholder: "例: 次回の電話で、昔好きだったお菓子の話を無理なく聞いてみる。",
    rows: 3,
  },
];

export default function KaigoParentFavoriteFoodSnacksDrinksMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親の好きな食べ物・お菓子・飲み物メモ】",
      values.targetPerson ? "対象の親・共有範囲: " + values.targetPerson : "対象の親・共有範囲: 未入力",
      values.recordDate ? "記録日・聞いた場面: " + values.recordDate : "記録日・聞いた場面: 未入力",
      "",
      "■ 好きな食べ物",
      values.foodItems || "未入力",
      "",
      "■ 好きなお菓子・お茶の時間の話題",
      values.snackItems || "未入力",
      "",
      "■ 好きな飲み物",
      values.drinkItems || "未入力",
      "",
      "■ 季節・場面メモ",
      values.seasonSceneMemo || "未入力",
      "",
      "■ 家族内メモ",
      values.familyMemo || "未入力",
      "",
      "■ このメモに書かない情報",
      values.avoidInfo ||
        "食事制限、アレルギー、服薬、栄養、体調、摂取量、施設への持ち込み可否、購入量、保存方法、健康判断、医療・介護上の判断は書かない。",
      "",
      "■ 次に聞いてみたいこと",
      values.nextCheck || "未入力",
      "",
      "※このメモは、親が会話で話していた好きな食べ物・お菓子・飲み物を、家族内で見返すための控えです。",
      "※食事管理、健康判断、購入判断、施設への持ち込み判断、差し入れ判断には使いません。",
      "※制限、アレルギー、服薬、栄養、体調、量や頻度が関わる内容は、本人・家族・施設・専門職の確認と分けてください。",
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
          高齢親の好きな食べ物・お菓子・飲み物メモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          親が会話で話していた食べ物、お菓子、飲み物の好みを家族内の控えとして整理します。
          食事管理、健康判断、購入判断、施設への持ち込み判断には使わないでください。
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
              好きな食べ物・お菓子・飲み物メモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              好きな食べ物・お菓子・飲み物メモ テンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={NOTE_URL}>
              note記事を見る
            </a>
            <a
              className="block font-semibold text-blue-700 hover:underline"
              href={KINDLE_LINK.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackKindleClick}
            >
              {KINDLE_LINK.label}
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={FULL_PACK_URL}>
              介護まるごと総合パックを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは、家族内で親の好みを思い出すためのメモです。
        食事制限、アレルギー、服薬、栄養、体調、摂取量、購入量、保存方法、施設への持ち込み可否の判断には使えません。
        差し入れや購入の前提ではなく、会話の手がかりとして扱ってください。
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
