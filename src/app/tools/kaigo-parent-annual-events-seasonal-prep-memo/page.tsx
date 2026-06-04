"use client";

import { useMemo, useState } from "react";

import { getKaigoKindleLink } from "@/components/KaigoToolCta";
import { trackEvent } from "@/lib/tracking";

const TOOL_SLUG = "kaigo-parent-annual-events-seasonal-prep-memo";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_annual_events_seasonal_prep";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-annual-events-seasonal-prep-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_annual_events_seasonal_prep";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383170";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";
const KINDLE_LINK = getKaigoKindleLink(TOOL_SLUG);

function trackKindleClick() {
  trackEvent(KINDLE_LINK.eventName, {
    page: TOOL_SLUG,
    position: KINDLE_LINK.position,
    url: KINDLE_LINK.href.slice(0, 200),
  });
}

type FieldKey =
  | "targetFamily"
  | "recordDate"
  | "newYearMemo"
  | "springMemo"
  | "summerMemo"
  | "autumnWinterMemo"
  | "foodGenreMemo"
  | "familyPrepMemo"
  | "avoidInfo"
  | "nextCheck";

const initialValues: Record<FieldKey, string> = {
  targetFamily: "",
  recordDate: "",
  newYearMemo: "",
  springMemo: "",
  summerMemo: "",
  autumnWinterMemo: "",
  foodGenreMemo: "",
  familyPrepMemo: "",
  avoidInfo: "",
  nextCheck: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "targetFamily",
    label: "対象の親・家族内の共有範囲",
    placeholder: "例: 母の家の年中行事。長女・長男で共有。親戚や近所の連絡先は書かない。",
    rows: 2,
  },
  {
    key: "recordDate",
    label: "確認日・聞いた場面",
    placeholder: "例: 2026年6月4日、帰省時に母からお盆前後の流れを聞いた。",
    rows: 2,
  },
  {
    key: "newYearMemo",
    label: "お正月・年末年始の段取り",
    placeholder:
      "例:\n- 年末の最後の週ごろから少しずつ準備\n- 玄関まわりの飾りは毎年出していた\n- 元日は家族でお雑煮を食べる流れだった\n※正式な作法ではなく親の家の流れとして控える",
    rows: 5,
  },
  {
    key: "springMemo",
    label: "春の行事の段取り",
    placeholder:
      "例:\n- 節分は家族で豆をまいていた\n- ひな祭りの飾りは早めに出すと話していた\n- 春のお彼岸は家族内で確認してから動く\n※宗派や地域差の判断には使わない",
    rows: 5,
  },
  {
    key: "summerMemo",
    label: "夏の行事・お盆前後の段取り",
    placeholder:
      "例:\n- 七夕飾りの話が出たら家族内メモとして残す\n- お盆前後は親の家でしていた流れを大づかみに控える\n- 外部連絡や予約はこのメモでは扱わない",
    rows: 5,
  },
  {
    key: "autumnWinterMemo",
    label: "秋冬の行事・年越しの段取り",
    placeholder:
      "例:\n- お月見や秋のお彼岸で親が話していたこと\n- 冬至や年越しで毎年用意していたもののジャンル\n- 年越し前に家族で見返したいこと",
    rows: 5,
  },
  {
    key: "foodGenreMemo",
    label: "行事食のジャンル感",
    placeholder:
      "例:\n- お雑煮、ちらし寿司、柏餅、そうめん、月見団子、冬至のかぼちゃ、年越しそばなど\n※栄養、塩分、糖分、アレルギー、嚥下、食事制限の判断には使わない",
    rows: 4,
  },
  {
    key: "familyPrepMemo",
    label: "家族で手伝うときの控え",
    placeholder:
      "例:\n- 前日までに家族内で確認すること\n- 当日に手伝う人の目安\n- 親が大事にしていた順番や一言\n※支払い、契約、寄付、退会の判断は書かない",
    rows: 4,
  },
  {
    key: "avoidInfo",
    label: "このメモに書かない情報",
    placeholder:
      "例: 正式な作法、宗派・地域差の判定、寺社や専門店の選定、連絡先、住所、金額、口座、登録番号、ログイン情報、認証情報は書かない。",
    rows: 4,
  },
  {
    key: "nextCheck",
    label: "次に見返すタイミング",
    placeholder: "例: 帰省前、家族で集まる前、お盆前、年末前、親から新しく話を聞いたあと。",
    rows: 3,
  },
];

export default function KaigoParentAnnualEventsSeasonalPrepMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親の年中行事・季節の段取りメモ】",
      values.targetFamily
        ? `対象の親・家族内の共有範囲: ${values.targetFamily}`
        : "対象の親・家族内の共有範囲: 未入力",
      values.recordDate ? `確認日・聞いた場面: ${values.recordDate}` : "確認日・聞いた場面: 未入力",
      "",
      "■ お正月・年末年始の段取り",
      values.newYearMemo || "未入力",
      "",
      "■ 春の行事の段取り",
      values.springMemo || "未入力",
      "",
      "■ 夏の行事・お盆前後の段取り",
      values.summerMemo || "未入力",
      "",
      "■ 秋冬の行事・年越しの段取り",
      values.autumnWinterMemo || "未入力",
      "",
      "■ 行事食のジャンル感",
      values.foodGenreMemo || "未入力",
      "",
      "■ 家族で手伝うときの控え",
      values.familyPrepMemo || "未入力",
      "",
      "■ このメモに書かない情報",
      values.avoidInfo ||
        "正式な作法、宗派・地域差の判定、寺社や専門店の選定、連絡先、住所、金額、口座、登録番号、ログイン情報、認証情報は書かない。",
      "",
      "■ 次に見返すタイミング",
      values.nextCheck || "未入力",
      "",
      "※このメモは、親の家で毎年していた年中行事・季節行事の流れを家族内で見返すための控えです。正式な作法、宗派・地域差、食事制限、健康、相続、契約、支払い、寄付、退会、外部連絡の判断には使いません。",
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
          高齢親の年中行事・季節の段取りメモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          お正月、節分、節句、お盆前後、お月見、年越しなど、親の家で毎年していた流れを家族内の控えとして整理します。
          正式な作法、宗派や地域差、食事制限、支払い、契約、寄付、退会などの判断には使わないでください。
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
          <pre className="mt-4 min-h-[700px] whitespace-pre-wrap rounded-md bg-slate-50 p-4 text-sm leading-6 text-slate-800">
            {output}
          </pre>
          <div className="mt-5 space-y-3 rounded-md border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
            <p className="font-bold text-slate-900">関連リンク</p>
            <a className="block font-semibold text-blue-700 hover:underline" href={KAIGO_NAVI_URL}>
              親のこと整理ナビで関連テンプレートを診断する
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={GUIDE_URL}>
              年中行事・季節の段取りメモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              年中行事・季節の段取りメモテンプレート集を見る
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
        このツールは、親の家で毎年していた行事の流れを家族内で思い出すためのものです。
        正式な作法、宗派・地域差、栄養や食事制限、相続、契約、支払い、寄付、退会、外部連絡の判断には使えません。
        連絡先、住所、金額、口座、登録番号、ログイン情報、認証情報などは記録しないでください。
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
