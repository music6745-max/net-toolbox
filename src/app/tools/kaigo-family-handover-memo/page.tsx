"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=family_handover_memo";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/kaigo-family-handover-memo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=family_handover_memo";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383018";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";

export default function KaigoFamilyHandoverMemoPage() {
  const [target, setTarget] = useState("");
  const [checkDate, setCheckDate] = useState("");
  const [facts, setFacts] = useState("");
  const [decided, setDecided] = useState("");
  const [nextToCheck, setNextToCheck] = useState("");
  const [needContact, setNeedContact] = useState("");
  const [afterVisitSummary, setAfterVisitSummary] = useState("");
  const [periodicShare, setPeriodicShare] = useState("");
  const [familyMemo, setFamilyMemo] = useState("");
  const [nextReview, setNextReview] = useState("");

  const output = useMemo(() => {
    return [
      "【介護家族 申し送り・引き継ぎメモ】",
      target ? `対象: ${target}` : "対象: 未入力",
      checkDate ? `確認日: ${checkDate}` : "確認日: 未入力",
      "",
      "■ 日次申し送り（事実: 見たこと・聞いたこと）",
      facts || "未入力",
      "",
      "■ 日次申し送り（決まったこと）",
      decided || "未入力",
      "",
      "■ 日次申し送り（次に確認すること）",
      nextToCheck || "未入力",
      "",
      "■ 日次申し送り（連絡が必要なこと）",
      needContact || "未入力",
      "",
      "■ 帰省・当番交代後のまとめ（決定事項/未決事項/次の担当）",
      afterVisitSummary || "未入力",
      "",
      "■ 家族への定期共有（週1/月1などで共有する要点）",
      periodicShare || "未入力",
      "",
      "■ 家族共有メモ（更新ルール/次の確認日など）",
      familyMemo || "未入力",
      "",
      "■ 次回見直すタイミング",
      nextReview || "未入力",
      "",
      "※このメモは家族内の申し送り・引き継ぎを整理するためのものです。医療判断、介護サービスの利用可否判断、契約判断の代替にはなりません。パスワード・暗証番号・ログイン情報・カード番号・口座番号・マイナンバー等の秘密情報は記録しないでください。必要な場合は担当窓口や専門職へ確認してください。",
    ].join("\n");
  }, [afterVisitSummary, checkDate, decided, facts, familyMemo, needContact, nextReview, nextToCheck, periodicShare, target]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <a href="/tools" className="text-sm font-semibold text-blue-700 hover:underline">
          ツール一覧へ戻る
        </a>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">介護家族 申し送り・引き継ぎメモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          帰省や当番交代で抜けやすい情報を、「事実」「決まったこと」「次に確認」「連絡が必要」に分けて整理し、家族で共有できるメモを作ります。秘密情報は記録しないでください。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <MemoField
              label="対象"
              value={target}
              onChange={setTarget}
              placeholder="例: 母の介護全体、実家の様子、今週の当番交代メモ"
              rows={2}
            />
            <MemoField label="確認日" value={checkDate} onChange={setCheckDate} placeholder="例: 2026年5月30日、帰省後に記入" rows={2} />
            <MemoField
              label="日次申し送り（事実: 見たこと・聞いたこと）"
              value={facts}
              onChange={setFacts}
              placeholder="例: 食事の様子、会話、睡眠、服薬の確認、家の中で気づいたこと。評価ではなく事実だけ。"
            />
            <MemoField
              label="日次申し送り（決まったこと）"
              value={decided}
              onChange={setDecided}
              placeholder="例: 次回通院日、家族の対応予定、連絡窓口、次にやることが決まったもの。"
            />
            <MemoField
              label="日次申し送り（次に確認すること）"
              value={nextToCheck}
              onChange={setNextToCheck}
              placeholder="例: ケアマネに聞くこと、施設/事業所に確認したいこと、次回帰省で確認すること。"
            />
            <MemoField
              label="日次申し送り（連絡が必要なこと）"
              value={needContact}
              onChange={setNeedContact}
              placeholder="例: 誰に/いつまでに/何を連絡するか。家族内連絡だけでなく担当窓口への連絡もここに。"
            />
            <MemoField
              label="帰省・当番交代後のまとめ（決定事項/未決事項/次の担当）"
              value={afterVisitSummary}
              onChange={setAfterVisitSummary}
              placeholder="例: 今回決まったこと、保留になったこと、次に動く人、期限、次回帰省予定。"
            />
            <MemoField
              label="家族への定期共有（週1/月1などで共有する要点）"
              value={periodicShare}
              onChange={setPeriodicShare}
              placeholder="例: 今月の変化、費用の立替メモ、次に大きく確認すること。長文にしない。"
            />
            <MemoField
              label="家族共有メモ（更新ルール/次の確認日など）"
              value={familyMemo}
              onChange={setFamilyMemo}
              placeholder="例: 変更があったら日次欄だけ更新。毎月末に定期共有をまとめる。"
            />
            <MemoField
              label="次回見直すタイミング"
              value={nextReview}
              onChange={setNextReview}
              placeholder="例: 次回帰省時、当番交代後、月末の定期共有時。"
            />
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
              申し送り・引き継ぎメモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              介護家族の申し送り・引き継ぎメモ テンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={PACK_URL}>
              親の介護はじめの37商品まとめセットを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは家族内の申し送り・引き継ぎのメモです。秘密情報は記録しないでください。医療判断、介護サービスの利用可否判断、契約判断は扱いません。必要な場合は担当窓口や専門職へ確認してください。
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
