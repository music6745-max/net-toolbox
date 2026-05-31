"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=memorial_service_anniversary_schedule";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-memorial-service-anniversary-schedule-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=memorial_service_anniversary_schedule";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383072";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

export default function KaigoParentMemorialServiceAnniversaryScheduleMemoPage() {
  const [targetFamily, setTargetFamily] = useState("");
  const [recordDate, setRecordDate] = useState("");
  const [deceasedMemo, setDeceasedMemo] = useState("");
  const [anniversaryScheduleMemo, setAnniversaryScheduleMemo] = useState("");
  const [memorialRecordMemo, setMemorialRecordMemo] = useState("");
  const [annualEventMemo, setAnnualEventMemo] = useState("");
  const [nextCheckMemo, setNextCheckMemo] = useState("");
  const [familyShareMemo, setFamilyShareMemo] = useState("");
  const [nextReview, setNextReview] = useState("");

  const output = useMemo(() => {
    return [
      "【実家 法事・年忌予定 書き留めメモ】",
      targetFamily ? `対象: ${targetFamily}` : "対象: 未入力",
      recordDate ? `記録日: ${recordDate}` : "記録日: 未入力",
      "",
      "■ 故人ごとの基本情報（必要な範囲だけ）",
      deceasedMemo || "未入力",
      "",
      "■ 確認済みの年忌予定",
      anniversaryScheduleMemo || "未入力",
      "",
      "■ 過去の法要記録",
      memorialRecordMemo || "未入力",
      "",
      "■ 年間行事・命日・墓参りメモ",
      annualEventMemo || "未入力",
      "",
      "■ 次に確認したいこと",
      nextCheckMemo || "未入力",
      "",
      "■ 家族共有メモ",
      familyShareMemo || "未入力",
      "",
      "■ 次回見直すタイミング",
      nextReview || "未入力",
      "",
      "※このメモは家族内で確認済みの法事・年忌予定や過去の記録を見返すためのものです。年忌日程の計算、宗派・作法、読経、お布施や費用の目安、墓地・寺院の選定や変更、相続・法務判断、外部への連絡文作成は扱いません。戒名・法名、親族情報、連絡先、支払い情報、本人確認情報などは必要最小限に絞り、家族内で管理してください。",
    ].join("\n");
  }, [
    annualEventMemo,
    anniversaryScheduleMemo,
    deceasedMemo,
    familyShareMemo,
    memorialRecordMemo,
    nextCheckMemo,
    nextReview,
    recordDate,
    targetFamily,
  ]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <a href="/tools" className="text-sm font-semibold text-blue-700 hover:underline">
          ツール一覧へ戻る
        </a>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">実家 法事・年忌予定 書き留めメモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          実家の法事・年忌予定について、確認済みの予定、過去の法要記録、次に家族で確認したいことを家族内で見返しやすい形にそろえます。
          年忌計算、宗派・作法、費用、墓地やお寺、相続や法務に関わる判断はこのメモに含めないでください。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <MemoField
              label="対象"
              value={targetFamily}
              onChange={setTargetFamily}
              placeholder="例: 母方の法事予定、父の実家の年忌予定、兄弟姉妹共有用"
              rows={2}
            />
            <MemoField label="記録日" value={recordDate} onChange={setRecordDate} placeholder="例: 2026年5月31日、次回帰省時の確認メモ" rows={2} />
            <MemoField
              label="故人ごとの基本情報（必要な範囲だけ）"
              value={deceasedMemo}
              onChange={setDeceasedMemo}
              placeholder={"例:\n- 呼び名: 祖父\n- 命日: 家族で確認済み\n- 詳細な連絡先や書類は別保管\n- 戒名・法名は必要な場合だけ家族内で確認"}
              rows={6}
            />
            <MemoField
              label="確認済みの年忌予定"
              value={anniversaryScheduleMemo}
              onChange={setAnniversaryScheduleMemo}
              placeholder={"例:\n- 一周忌: 2027年予定、家族で確認済み\n- 三回忌: 未確認\n- 予定年は自動計算せず、確認した内容だけ記録"}
            />
            <MemoField
              label="過去の法要記録"
              value={memorialRecordMemo}
              onChange={setMemorialRecordMemo}
              placeholder={"例:\n- 2026年5月 実施済み\n- 参列: 家族内で共有済み\n- 次回は日程を早めに確認\n- 費用や手続きの詳細は別管理"}
            />
            <MemoField
              label="年間行事・命日・墓参りメモ"
              value={annualEventMemo}
              onChange={setAnnualEventMemo}
              placeholder={"例:\n- お盆: 家族で集まる時期を確認\n- お彼岸: 墓参り担当を次回相談\n- 命日: 月だけ共有、詳しい情報は別保管"}
            />
            <MemoField
              label="次に確認したいこと"
              value={nextCheckMemo}
              onChange={setNextCheckMemo}
              placeholder={"例:\n- 次の年忌予定年を家族で確認\n- お寺への確認が必要なことは家族で担当を決める\n- 宗派・作法・費用はこのメモで判断しない"}
            />
            <MemoField
              label="家族共有メモ"
              value={familyShareMemo}
              onChange={setFamilyShareMemo}
              placeholder={"例:\n- 長男・長女へ共有済み\n- 次回帰省時に紙の控えを確認\n- 個人情報や支払い情報はこのメモにまとめない"}
            />
            <MemoField
              label="次回見直すタイミング"
              value={nextReview}
              onChange={setNextReview}
              placeholder="例: 次の帰省時、年末、未確認事項が増えた時、家族会議の前"
              rows={2}
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
              法事・年忌予定メモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              法事・年忌予定 書き留めメモテンプレート集を見る
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
        このツールは家族内で確認済みの法事・年忌予定や過去の記録を整理するためのものです。
        年忌日程の計算、宗派・作法、費用、墓地・寺院、相続・法務、外部連絡文の作成は扱いません。
        個人情報、親族情報、本人確認情報、支払い情報などは必要最小限に絞り、正式な保管場所で管理してください。
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
