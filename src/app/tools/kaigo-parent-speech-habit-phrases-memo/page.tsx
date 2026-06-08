"use client";

import { useMemo, useState } from "react";

import { getKaigoKindleLink } from "@/components/KaigoToolCta";
import { trackEvent } from "@/lib/tracking";

const TOOL_SLUG = "kaigo-parent-speech-habit-phrases-memo";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_speech_habit_phrases";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-speech-habit-phrases-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_speech_habit_phrases";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383178";
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
  | "targetPerson"
  | "recordDate"
  | "repeatedPhrases"
  | "regionalPhrases"
  | "objectActionNames"
  | "greetingPhrases"
  | "familyMeaning"
  | "avoidInfo"
  | "nextCheck";

const initialValues: Record<FieldKey, string> = {
  targetPerson: "",
  recordDate: "",
  repeatedPhrases: "",
  regionalPhrases: "",
  objectActionNames: "",
  greetingPhrases: "",
  familyMeaning: "",
  avoidInfo: "",
  nextCheck: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "targetPerson",
    label: "対象の親・共有範囲",
    placeholder: "例: 母の言い回し。長女・長男で共有。外部公開用には使わない。",
    rows: 2,
  },
  {
    key: "recordDate",
    label: "記録日・聞いた場面",
    placeholder: "例: 2026年6月1日、帰省時の夕食後に聞いた。電話で聞いた言葉も後で追記する。",
    rows: 2,
  },
  {
    key: "repeatedPhrases",
    label: "よく出る口癖・短いフレーズ",
    placeholder:
      "例:\n- 「あれだね」: 会話の終わりによく出る\n- 「まあまあ」: 疲れた時によく言う\n- 意味がはっきりしないものは空欄のまま控える",
    rows: 5,
  },
  {
    key: "regionalPhrases",
    label: "地域の言葉・家族内で意味が分かりにくい言い回し",
    placeholder:
      "例:\n- 「○○」: 天気の話の時に出た。意味は家族内でまだ確認中\n- 「△△」: 母の実家のあたりで使っていたらしい\n- 標準語には直さず、そのまま控える",
    rows: 5,
  },
  {
    key: "objectActionNames",
    label: "物や行動の呼び方",
    placeholder:
      "例:\n- 「○○」: 台所の特定の道具を指しているらしい\n- 「△△する」: 家の中の片付け動作の呼び方\n- 人物の呼び方は別メモに分ける",
    rows: 5,
  },
  {
    key: "greetingPhrases",
    label: "あいさつ代わりの決まり文句",
    placeholder:
      "例:\n- 電話を切る前によく言う言葉\n- 帰省時に玄関でよく言う言葉\n- 家族の集まりで決まって出る短い言葉",
    rows: 4,
  },
  {
    key: "familyMeaning",
    label: "家族内で分かる範囲の意味・場面",
    placeholder:
      "例:\n- 正しい意味は決めない\n- 家族内では「こういう場面で出る言葉」とだけ覚える\n- 分からない言葉は分からないまま残す",
    rows: 4,
  },
  {
    key: "avoidInfo",
    label: "このメモに書かない情報",
    placeholder:
      "例: 住所、電話番号、連絡先、アカウント情報、聞いた相手の個人情報、長い引用、歌詞、医療や認知機能の判断は書かない。",
    rows: 4,
  },
  {
    key: "nextCheck",
    label: "次に見返す・本人へ聞くこと",
    placeholder: "例: 次回帰省時に、意味が分からなかった言葉を本人に聞く。聞けなければ空欄のまま残す。",
    rows: 3,
  },
];

export default function KaigoParentSpeechHabitPhrasesMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親が話す口癖・言い回しメモ】",
      values.targetPerson ? "対象の親・共有範囲: " + values.targetPerson : "対象の親・共有範囲: 未入力",
      values.recordDate ? "記録日・聞いた場面: " + values.recordDate : "記録日・聞いた場面: 未入力",
      "",
      "■ よく出る口癖・短いフレーズ",
      values.repeatedPhrases || "未入力",
      "",
      "■ 地域の言葉・家族内で意味が分かりにくい言い回し",
      values.regionalPhrases || "未入力",
      "",
      "■ 物や行動の呼び方",
      values.objectActionNames || "未入力",
      "",
      "■ あいさつ代わりの決まり文句",
      values.greetingPhrases || "未入力",
      "",
      "■ 家族内で分かる範囲の意味・場面",
      values.familyMeaning || "未入力",
      "",
      "■ このメモに書かない情報",
      values.avoidInfo || "未入力",
      "",
      "■ 次に見返す・本人へ聞くこと",
      values.nextCheck || "未入力",
      "",
      "※このメモは、親が話した口癖や言い回しを家族内で見返すための控えです。方言辞典、翻訳、語源調査、言語学的な分類、正誤判定、標準語への変換、外部公開、医療・介護・認知機能の判断には使いません。住所、電話番号、連絡先、アカウント情報、認証情報、決済情報、聞いた相手の個人情報、長い引用、歌詞は書かないでください。",
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
          高齢親が話す口癖・言い回しメモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          親がよく使う言葉、地域の言い回し、物や行動の呼び方、あいさつ代わりの決まり文句を、家族内で見返す控えとして整理します。
          辞書化、翻訳、正誤判定、医療や介護の判断には使わないでください。
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
              口癖・言い回しメモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              口癖・言い回しメモ テンプレート集を見る
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
        このツールは家族内で親の口癖や言い回しを見返すためのメモです。
        方言辞典、翻訳、正誤判定、標準語への変換、外部公開、医療・介護・認知機能の判断には使えません。
        住所、電話番号、連絡先、アカウント情報、認証情報、決済情報、聞いた相手の個人情報、長い引用、歌詞は書かないでください。
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
