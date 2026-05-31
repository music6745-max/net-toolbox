"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=hair_salon_barber_visit_record";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-hair-salon-barber-visit-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=hair_salon_barber_visit_record";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383065";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

export default function KaigoParentHairSalonBarberVisitRecordMemoPage() {
  const [targetPerson, setTargetPerson] = useState("");
  const [recordDate, setRecordDate] = useState("");
  const [reservationMemo, setReservationMemo] = useState("");
  const [visitRecordMemo, setVisitRecordMemo] = useState("");
  const [stylePreferenceMemo, setStylePreferenceMemo] = useState("");
  const [finishMemo, setFinishMemo] = useState("");
  const [companionMemo, setCompanionMemo] = useState("");
  const [nextPlanMemo, setNextPlanMemo] = useState("");
  const [familyShareMemo, setFamilyShareMemo] = useState("");
  const [nextReview, setNextReview] = useState("");

  const output = useMemo(() => {
    return [
      "【高齢親 美容院・理容院 予約と来店記録メモ】",
      targetPerson ? `対象: ${targetPerson}` : "対象: 未入力",
      recordDate ? `記録日: ${recordDate}` : "記録日: 未入力",
      "",
      "■ 予約メモ",
      reservationMemo || "未入力",
      "",
      "■ 来店記録",
      visitRecordMemo || "未入力",
      "",
      "■ 本人の希望・伝えたいこと",
      stylePreferenceMemo || "未入力",
      "",
      "■ 仕上がり・本人の感想メモ",
      finishMemo || "未入力",
      "",
      "■ 同行・移動・待ち合わせメモ",
      companionMemo || "未入力",
      "",
      "■ 次回目安・予約確認",
      nextPlanMemo || "未入力",
      "",
      "■ 家族共有メモ",
      familyShareMemo || "未入力",
      "",
      "■ 次回見直すタイミング",
      nextReview || "未入力",
      "",
      "※このメモは家族内で美容院・理容院の予定と来店後の共有事項を整理するためのものです。予約代行、店舗との交渉、髪型・施術内容・料金・健康面の判断は扱いません。本人の希望と店舗の案内を確認してください。住所・電話番号などの個人情報は必要最小限に絞り、パスワード・暗証番号・ログイン情報・口座番号・カード番号・マイナンバー等の秘密情報や支払い情報は記録しないでください。",
    ].join("\n");
  }, [
    companionMemo,
    familyShareMemo,
    finishMemo,
    nextPlanMemo,
    nextReview,
    recordDate,
    reservationMemo,
    stylePreferenceMemo,
    targetPerson,
    visitRecordMemo,
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">高齢親 美容院・理容院 予約と来店記録メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          散髪の予約日、来店日、本人の希望、前回の仕上がり、次回目安を家族で見返しやすい形にそろえます。
          店舗との調整、施術や健康面の判断、秘密情報はこのメモに含めないでください。
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
              placeholder="例: 母の散髪、父の理容院、次回予約メモ"
              rows={2}
            />
            <MemoField label="記録日" value={recordDate} onChange={setRecordDate} placeholder="例: 2026年5月31日、予約後に記録" rows={2} />
            <MemoField
              label="予約メモ"
              value={reservationMemo}
              onChange={setReservationMemo}
              placeholder={"例:\n- 店名: いつもの理容院\n- 予約日時: 6月10日 10:00\n- 予約した人: 長女\n- 変更が必要な場合は前日までに店舗へ確認"}
              rows={6}
            />
            <MemoField
              label="来店記録"
              value={visitRecordMemo}
              onChange={setVisitRecordMemo}
              placeholder={"例:\n- 来店日: 5月20日\n- 同行: 次男\n- 所要時間: 約1時間\n- 帰宅後に家族LINEへ共有済み"}
            />
            <MemoField
              label="本人の希望・伝えたいこと"
              value={stylePreferenceMemo}
              onChange={setStylePreferenceMemo}
              placeholder={"例:\n- 本人は短め希望\n- 前髪は目にかからない程度\n- 細かい施術内容は店舗で本人と確認"}
            />
            <MemoField
              label="仕上がり・本人の感想メモ"
              value={finishMemo}
              onChange={setFinishMemo}
              placeholder={"例:\n- 本人は前回と同じくらいでよいと言っていた\n- 次回は耳まわりを少し早めに確認\n- 家族の見た印象は事実メモだけにする"}
            />
            <MemoField
              label="同行・移動・待ち合わせメモ"
              value={companionMemo}
              onChange={setCompanionMemo}
              placeholder={"例:\n- 9:40に自宅へ迎え\n- 店の前で待ち合わせ\n- 支払い方法や店舗対応はその場で本人・店舗に確認"}
            />
            <MemoField
              label="次回目安・予約確認"
              value={nextPlanMemo}
              onChange={setNextPlanMemo}
              placeholder={"例:\n- 5〜6週間後を目安に家族で予定確認\n- 次回予約担当: 長男\n- 6月末に本人へ希望日を聞く"}
            />
            <MemoField
              label="家族共有メモ"
              value={familyShareMemo}
              onChange={setFamilyShareMemo}
              placeholder={"例:\n- 兄弟LINEへ共有済み\n- 店舗名や予約時間は家族内だけで管理\n- 個人情報や支払い情報は書かない"}
            />
            <MemoField
              label="次回見直すタイミング"
              value={nextReview}
              onChange={setNextReview}
              placeholder="例: 次回予約前、来店後、同行担当が変わる前"
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
              美容院・理容院の予約と来店記録メモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              美容院・理容院 予約と来店記録メモテンプレート集を見る
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
        このツールは家族内で美容院・理容院の予定と来店後メモをそろえるためのものです。予約代行、店舗との交渉、施術や健康面の判断は扱いません。
        秘密情報（暗証番号・ログイン情報等）や支払い情報は記録しないでください。
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
