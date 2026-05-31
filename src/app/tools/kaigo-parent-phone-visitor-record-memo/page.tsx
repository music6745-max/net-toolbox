"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=phone_visitor_record";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-phone-visitor-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=phone_visitor_record";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383070";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

export default function KaigoParentPhoneVisitorRecordMemoPage() {
  const [targetPerson, setTargetPerson] = useState("");
  const [recordDate, setRecordDate] = useState("");
  const [phoneMemo, setPhoneMemo] = useState("");
  const [visitorMemo, setVisitorMemo] = useState("");
  const [actionMemo, setActionMemo] = useState("");
  const [monthlySummaryMemo, setMonthlySummaryMemo] = useState("");
  const [nextCheckMemo, setNextCheckMemo] = useState("");
  const [familyShareMemo, setFamilyShareMemo] = useState("");
  const [nextReview, setNextReview] = useState("");

  const output = useMemo(() => {
    return [
      "【高齢親 電話・来客メモ】",
      targetPerson ? `対象: ${targetPerson}` : "対象: 未入力",
      recordDate ? `記録日: ${recordDate}` : "記録日: 未入力",
      "",
      "■ 電話メモ",
      phoneMemo || "未入力",
      "",
      "■ 来客メモ",
      visitorMemo || "未入力",
      "",
      "■ 対応済み・未確認メモ",
      actionMemo || "未入力",
      "",
      "■ 月別まとめ",
      monthlySummaryMemo || "未入力",
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
      "※このメモは家族内で電話・来客の概要を見返すためのものです。電話や来客への返答内容の作成、相手の評価、契約・支払い・手続き・医療や介護サービスの判断は扱いません。氏名・住所・電話番号・契約番号・本人確認情報・ログイン情報・支払い情報などは必要最小限に絞り、家族内で管理してください。",
    ].join("\n");
  }, [
    actionMemo,
    familyShareMemo,
    monthlySummaryMemo,
    nextCheckMemo,
    nextReview,
    phoneMemo,
    recordDate,
    targetPerson,
    visitorMemo,
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">高齢親 電話・来客メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          親にあった電話や来客について、日時、相手の呼び名、用件の概要、対応済み・未確認のことを家族で見返しやすい形にそろえます。
          契約、支払い、手続き、医療や介護サービスの判断、個人情報の詳しい管理はこのメモに含めないでください。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <MemoField
              label="対象"
              value={targetPerson}
              onChange={setTargetPerson}
              placeholder="例: 母の実家、父の電話・来客メモ、5月分の記録"
              rows={2}
            />
            <MemoField label="記録日" value={recordDate} onChange={setRecordDate} placeholder="例: 2026年5月31日、5月分まとめ" rows={2} />
            <MemoField
              label="電話メモ"
              value={phoneMemo}
              onChange={setPhoneMemo}
              placeholder={"例:\n- 5/31 10:20ごろ\n- 相手: 町内会の担当者\n- 用件: 次回集まりの日程連絡\n- 親本人が受け、家族には夕方共有済み"}
              rows={6}
            />
            <MemoField
              label="来客メモ"
              value={visitorMemo}
              onChange={setVisitorMemo}
              placeholder={"例:\n- 5/31 午後\n- 相手: 近所の方\n- 用件: 回覧板の受け渡し\n- 玄関で受け取り、次の家へ回す予定"}
            />
            <MemoField
              label="対応済み・未確認メモ"
              value={actionMemo}
              onChange={setActionMemo}
              placeholder={"例:\n- 対応済み: 回覧板は玄関横に置いた\n- 未確認: 町内会の日付を紙で再確認\n- 保留: 支払い・契約に関わる話は家族で確認してから返答"}
            />
            <MemoField
              label="月別まとめ"
              value={monthlySummaryMemo}
              onChange={setMonthlySummaryMemo}
              placeholder={"例:\n- 5月は町内会、宅配、親族からの連絡が多い\n- 折り返しが必要な件は2件\n- 詳細な連絡先は別管理"}
            />
            <MemoField
              label="次に確認したいこと"
              value={nextCheckMemo}
              onChange={setNextCheckMemo}
              placeholder={"例:\n- 町内会の日程を紙で確認\n- 宅配予定の有無を本人に聞く\n- 契約や支払いに関わる話は公式窓口の情報を確認"}
            />
            <MemoField
              label="家族共有メモ"
              value={familyShareMemo}
              onChange={setFamilyShareMemo}
              placeholder={"例:\n- 長女へ共有済み\n- 次に見る人は未確認欄だけ確認\n- 個人情報や支払い情報はこのメモに書かない"}
            />
            <MemoField
              label="次回見直すタイミング"
              value={nextReview}
              onChange={setNextReview}
              placeholder="例: 月末、次の帰省時、未確認メモが3件以上になった時"
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
              電話・来客メモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              電話・来客メモテンプレート集を見る
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
        このツールは家族内で電話・来客の概要を整理するためのものです。返答内容の作成、相手の評価、契約・支払い・行政手続き・医療や介護サービスの判断は扱いません。
        個人情報、本人確認情報、ログイン情報、支払い情報などは必要最小限に絞り、正式な保管場所で管理してください。
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
