"use client";

import { useMemo, useState } from "react";

import { getKaigoKindleLink } from "@/components/KaigoToolCta";
import { trackEvent } from "@/lib/tracking";

const TOOL_SLUG = "kaigo-parent-next-conversation-topics-memo";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_next_conversation_topics";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-next-conversation-topics-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_next_conversation_topics";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383185";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";
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
  | "recordFor"
  | "recordDate"
  | "nextAsk"
  | "nextTell"
  | "familyTopics"
  | "talkTiming"
  | "afterTalk"
  | "avoidInfo"
  | "nextReview";

const initialValues: Record<FieldKey, string> = {
  recordFor: "",
  recordDate: "",
  nextAsk: "",
  nextTell: "",
  familyTopics: "",
  talkTiming: "",
  afterTalk: "",
  avoidInfo: "",
  nextReview: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "recordFor",
    label: "対象の親・共有範囲",
    placeholder: "例: 母と次回電話するときの話題。長女・長男で共有。外部公開用には使わない。",
    rows: 2,
  },
  {
    key: "recordDate",
    label: "記入日・思いついた場面",
    placeholder: "例: 2026年6月1日、電話を切ったあとに思い出した話題を控える。",
    rows: 2,
  },
  {
    key: "nextAsk",
    label: "次回聞きたいこと",
    placeholder:
      "例:\n- 前に話していた昔の商店街の話をもう少し聞きたい\n- 写真に写っている親戚の名前を聞きたい\n- 季節の行事で毎年していたことを聞きたい",
    rows: 5,
  },
  {
    key: "nextTell",
    label: "次回話したいこと・伝えたいこと",
    placeholder:
      "例:\n- 孫の近況を短く伝える\n- 次に帰省するだいたいの時期を話す\n- 前回もらった話へのお礼を伝える",
    rows: 5,
  },
  {
    key: "familyTopics",
    label: "家族で持ち寄った話題",
    placeholder:
      "例:\n- 長女: 写真アルバムを一緒に見たい\n- 長男: 昔よく作っていた料理の話を聞きたい\n- 無理に全部話さず、次回に回してよい",
    rows: 5,
  },
  {
    key: "talkTiming",
    label: "見返す場面",
    placeholder: "例: 次回の電話前、帰省前日の夜、写真を見ながら話すとき、食後の短い時間。",
    rows: 3,
  },
  {
    key: "afterTalk",
    label: "話したあとに残すこと",
    placeholder:
      "例: 話せたこと、次回に回したこと、本人が楽しそうに話していた話題、家族内で次に見返したいこと。",
    rows: 4,
  },
  {
    key: "avoidInfo",
    label: "このメモに書かない情報",
    placeholder:
      "例: 住所、電話番号、口座、カード、ログイン情報、本人確認情報、合鍵や保管場所、医療・介護・契約・法律・お金の判断。",
    rows: 4,
  },
  {
    key: "nextReview",
    label: "次に見返すタイミング",
    placeholder: "例: 次回電話の前、帰省前、家族LINEで話題を持ち寄る前。",
    rows: 3,
  },
];

export default function KaigoParentNextConversationTopicsMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親に次回聞きたいこと・話したいこと 家族内メモ】",
      values.recordFor ? "対象の親・共有範囲: " + values.recordFor : "対象の親・共有範囲: 未入力",
      values.recordDate ? "記入日・思いついた場面: " + values.recordDate : "記入日・思いついた場面: 未入力",
      "",
      "■ 次回聞きたいこと",
      values.nextAsk || "未入力",
      "",
      "■ 次回話したいこと・伝えたいこと",
      values.nextTell || "未入力",
      "",
      "■ 家族で持ち寄った話題",
      values.familyTopics || "未入力",
      "",
      "■ 見返す場面",
      values.talkTiming || "未入力",
      "",
      "■ 話したあとに残すこと",
      values.afterTalk || "未入力",
      "",
      "■ このメモに書かない情報",
      values.avoidInfo ||
        "住所、電話番号、口座、カード、ログイン情報、本人確認情報、合鍵や保管場所、医療・介護・契約・法律・お金の判断は書かない。",
      "",
      "■ 次に見返すタイミング",
      values.nextReview || "未入力",
      "",
      "※このメモは、次に親と話すときの話題を家族内で見返すための控えです。介護の申し送り、体調確認、医療・契約・法律・お金の判断には使いません。秘密情報や個人情報は書かないでください。",
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
          高齢親に次回聞きたいこと・話したいことメモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          次に親と電話・帰省・対面で話すとき、聞きたいこと、伝えたいこと、家族で持ち寄った話題を、会話前に見返す控えとして整理します。
          介護の申し送り、体調確認、医療・契約・法律・お金の判断には使わないでください。
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
              次回の会話メモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              次回聞きたいこと・話したいことメモ テンプレート集を見る
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
        このツールは、次に親と話すときの話題を家族内で見返すためのメモです。
        介護の申し送り、体調確認、医療・契約・法律・お金の判断には使えません。
        住所、電話番号、口座、カード、ログイン情報、本人確認情報、合鍵や保管場所などは書かないでください。
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
