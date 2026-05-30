"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_outing_transport_plan";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-outing-transport-plan?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_outing_transport_plan";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8435122";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

export default function KaigoParentOutingTransportMemoPage() {
  const [checkDate, setCheckDate] = useState("");
  const [target, setTarget] = useState("");
  const [transportList, setTransportList] = useState("");
  const [outingPlans, setOutingPlans] = useState("");
  const [handoverNotes, setHandoverNotes] = useState("");
  const [familyNotes, setFamilyNotes] = useState("");
  const [nextReview, setNextReview] = useState("");

  const output = useMemo(() => {
    return [
      "【高齢親 外出予定・移動手段メモ】",
      checkDate ? `確認日: ${checkDate}` : "確認日: 未入力",
      target ? `対象者（呼び名）: ${target}` : "対象者（呼び名）: 未入力",
      "",
      "■ 移動手段の一覧（連絡先/予約方法は必要な範囲）",
      transportList || "未入力",
      "",
      "■ 外出予定（行き先/日時/集合場所/移動手段/同行者/持ち物/注意点）",
      outingPlans || "未入力",
      "",
      "■ 送迎・同行の引き継ぎメモ（担当が変わるとき）",
      handoverNotes || "未入力",
      "",
      "■ 家族共有メモ（共有範囲/更新ルール/申し送り）",
      familyNotes || "未入力",
      "",
      "■ 次回見直すタイミング",
      nextReview || "未入力",
      "",
      "※このメモは家族内の外出・移動の情報を見返すための記録です。受診の判断、医療・介護サービスの利用可否、契約などの最終判断は扱いません。急ぎの判断が必要な場合は、公式の案内や関係窓口に確認してください。氏名・住所・電話番号などの個人情報は必要な範囲に絞り、家族内で管理してください。パスワード・暗証番号・ログイン情報・カード番号・口座番号・マイナンバー等の秘密情報は記録しないでください。",
    ].join("\n");
  }, [checkDate, familyNotes, handoverNotes, nextReview, outingPlans, target, transportList]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <a href="/tools" className="text-sm font-semibold text-blue-700 hover:underline">
          ツール一覧へ戻る
        </a>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">高齢親 外出予定・移動手段メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          通院・買い物などの外出予定と、移動手段、送迎・同行の引き継ぎメモを、家族内で見返しやすい形式にまとめます。秘密情報は記録しないでください。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <MemoField
              label="確認日"
              value={checkDate}
              onChange={setCheckDate}
              placeholder="例: 2026年5月31日、月末の見直し日、帰省前の確認日"
              rows={2}
            />
            <MemoField
              label="対象者（呼び名）"
              value={target}
              onChange={setTarget}
              placeholder={"例:\n- 母（実家）\n- 父（義実家）\n※氏名や住所など個人情報は必要最小限"}
              rows={3}
            />
            <MemoField
              label="移動手段の一覧（連絡先/予約方法は必要な範囲）"
              value={transportList}
              onChange={setTransportList}
              placeholder={
                "例:\n- 家族送迎: 連絡はグループチャット、集合場所は玄関前\n- タクシー: 配車アプリ/電話（番号は必要な範囲だけ）\n- 公共交通: バス停/最寄り駅、乗り換えの目安\n- 地域サービス: 申込先、利用条件は公式案内で確認\n※ログイン情報や暗証番号など秘密情報は書かない"
              }
              rows={7}
            />
            <MemoField
              label="外出予定（行き先/日時/集合場所/移動手段/同行者/持ち物/注意点）"
              value={outingPlans}
              onChange={setOutingPlans}
              placeholder={
                "例:\n- 6/5 午前 通院 / 9:30集合（玄関） / 送迎: A / 持ち物: 予約票・保険証 / 注意: 早めに出る\n- 6/12 午後 買い物 / 集合: スーパー入口 / 移動: タクシー / 持ち物: 買い物メモ\n- 6/20 午前 役所 / 集合: 受付前 / 移動: 公共交通 / 注意: 待ち時間あり\n※判断の代替ではなく、段取りのメモ"
              }
              rows={7}
            />
            <MemoField
              label="送迎・同行の引き継ぎメモ（担当が変わるとき）"
              value={handoverNotes}
              onChange={setHandoverNotes}
              placeholder={
                "例:\n- 集合場所の目印（入口/駐車場/待ち合わせの流れ）\n- いつも持つもの（診察券・お薬手帳など）\n- 迷いやすい点（道順/受付/会計など）\n※医療判断や契約判断はこのメモで決めない"
              }
              rows={6}
            />
            <MemoField
              label="家族共有メモ（共有範囲/更新ルール/申し送り）"
              value={familyNotes}
              onChange={setFamilyNotes}
              placeholder={"例:\n- 共有範囲: きょうだい3人のみ\n- 更新: 予定が決まったら追記、月末に見直し\n- 外部転送しない"}
            />
            <MemoField
              label="次回見直すタイミング"
              value={nextReview}
              onChange={setNextReview}
              placeholder="例: 次回帰省後、週末、月末の共有会"
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
              外出予定・移動手段の整理方法を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              外出予定・移動手段整理テンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={FULL_PACK_URL}>
              介護まるごと総合パックを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは家族内の外出・移動の整理メモです。秘密情報は記録しないでください。受診の判断、医療・介護サービスの利用可否、契約などの最終判断は扱いません。急ぎの判断が必要な場合は、公式の案内や関係窓口に確認してください。
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
