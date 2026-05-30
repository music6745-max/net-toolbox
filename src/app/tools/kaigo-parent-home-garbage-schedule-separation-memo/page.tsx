"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=garbage_schedule_separation";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-home-garbage-schedule-separation?utm_source=net-toolbox&utm_medium=referral&utm_campaign=garbage_schedule_separation";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8435173";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";

export default function KaigoParentHomeGarbageScheduleSeparationMemoPage() {
  const [targetHome, setTargetHome] = useState("");
  const [checkDate, setCheckDate] = useState("");
  const [scheduleMemo, setScheduleMemo] = useState("");
  const [separationMemo, setSeparationMemo] = useState("");
  const [collectionPointMemo, setCollectionPointMemo] = useState("");
  const [bulkyWasteMemo, setBulkyWasteMemo] = useState("");
  const [familyMemo, setFamilyMemo] = useState("");
  const [nextReview, setNextReview] = useState("");

  const output = useMemo(() => {
    return [
      "【実家 ごみ出し曜日・分別メモ】",
      targetHome ? `対象: ${targetHome}` : "対象: 未入力",
      checkDate ? `確認日: ${checkDate}` : "確認日: 未入力",
      "",
      "■ ごみ出し曜日（収集日）",
      scheduleMemo || "未入力",
      "",
      "■ 分別・袋・まとめ方",
      separationMemo || "未入力",
      "",
      "■ 集積所（置き場所）・注意点",
      collectionPointMemo || "未入力",
      "",
      "■ 粗大ごみ・一時保管",
      bulkyWasteMemo || "未入力",
      "",
      "■ 家族共有メモ",
      familyMemo || "未入力",
      "",
      "■ 次回見直すタイミング",
      nextReview || "未入力",
      "",
      "※このメモは家族内で「確認済みのごみ出し情報」を整理するためのものです。自治体ごとのルール確認や外部への連絡・手続きの代行は含みません。最新の案内は自治体等の公式情報をご参照ください。通帳・印鑑・カード・鍵・パスワード・暗証番号・ログイン情報・口座番号・カード番号・マイナンバー等の秘密情報は記録しないでください。",
    ].join("\n");
  }, [bulkyWasteMemo, checkDate, collectionPointMemo, familyMemo, nextReview, scheduleMemo, separationMemo, targetHome]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <a href="/tools" className="text-sm font-semibold text-blue-700 hover:underline">
          ツール一覧へ戻る
        </a>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">実家 ごみ出し曜日・分別メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          実家のごみ出し曜日、分別、集積所（置き場所）、粗大ごみ・一時保管の確認メモを整理し、家族で見返しやすい形にそろえます。
          秘密情報は記録せず、自治体の案内は公式情報をご参照ください。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <MemoField label="対象" value={targetHome} onChange={setTargetHome} placeholder="例: 母の自宅、実家1階、帰省時に確認" rows={2} />
            <MemoField label="確認日" value={checkDate} onChange={setCheckDate} placeholder="例: 2026年5月31日、帰省時に確認" rows={2} />
            <MemoField
              label="ごみ出し曜日（収集日）"
              value={scheduleMemo}
              onChange={setScheduleMemo}
              placeholder="例: 燃えるごみ: 火・金 / 資源: 水 / びん缶: 第2・第4土 など"
            />
            <MemoField
              label="分別・袋・まとめ方"
              value={separationMemo}
              onChange={setSeparationMemo}
              placeholder="例: 指定袋（色/サイズ）。ペットボトルはラベルを外す。新聞はひもで束ねる。"
            />
            <MemoField
              label="集積所（置き場所）・注意点"
              value={collectionPointMemo}
              onChange={setCollectionPointMemo}
              placeholder="例: 家の角のネット箱。出す時間は朝8時まで。カラス対策でネットをかける。"
            />
            <MemoField
              label="粗大ごみ・一時保管"
              value={bulkyWasteMemo}
              onChange={setBulkyWasteMemo}
              placeholder="例: 問い合わせ先/確認したいこと/保管場所メモ（手続き代行の目的では使わない）"
            />
            <MemoField
              label="家族共有メモ"
              value={familyMemo}
              onChange={setFamilyMemo}
              placeholder="例: 変更があったら次に帰省した人が更新。迷ったら自治体の案内を確認。"
            />
            <MemoField
              label="次回見直すタイミング"
              value={nextReview}
              onChange={setNextReview}
              placeholder="例: 次回帰省時、自治体のルール変更があったとき、引っ越し後。"
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
              ごみ出し曜日・分別メモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              実家のごみ出し曜日・分別メモテンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={PACK_URL}>
              親の介護はじめの37商品まとめセットを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは家族内で確認済みの内容を整理するためのメモです。自治体ごとのルール確認や外部への連絡・手続きの代行は含みません。
        秘密情報（暗証番号・ログイン情報等）は記録しないでください。
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

