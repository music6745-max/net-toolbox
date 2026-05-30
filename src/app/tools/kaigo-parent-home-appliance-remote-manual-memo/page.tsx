"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=home_appliance_manual_memo";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-home-appliance-remote-manual-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=home_appliance_manual_memo";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8382997";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";

export default function KaigoParentHomeApplianceRemoteManualMemoPage() {
  const [targetHome, setTargetHome] = useState("");
  const [checkDate, setCheckDate] = useState("");
  const [applianceList, setApplianceList] = useState("");
  const [remoteOperations, setRemoteOperations] = useState("");
  const [manualWarranty, setManualWarranty] = useState("");
  const [modelPurchase, setModelPurchase] = useState("");
  const [makerContact, setMakerContact] = useState("");
  const [seasonSettings, setSeasonSettings] = useState("");
  const [familyMemo, setFamilyMemo] = useState("");
  const [nextReview, setNextReview] = useState("");

  const output = useMemo(() => {
    return [
      "【高齢親 家電・リモコン・取扱説明書メモ】",
      targetHome ? `対象: ${targetHome}` : "対象: 未入力",
      checkDate ? `確認日: ${checkDate}` : "確認日: 未入力",
      "",
      "■ 対象にする日常家電",
      applianceList || "未入力",
      "",
      "■ よく使うリモコン操作・ボタン",
      remoteOperations || "未入力",
      "",
      "■ 取扱説明書・保証書の保管場所",
      manualWarranty || "未入力",
      "",
      "■ 型番・購入日・購入店",
      modelPurchase || "未入力",
      "",
      "■ メーカー名・窓口の控え",
      makerContact || "未入力",
      "",
      "■ 季節ごと・普段使う設定の控え",
      seasonSettings || "未入力",
      "",
      "■ 家族への申し送り",
      familyMemo || "未入力",
      "",
      "■ 次回見直すタイミング",
      nextReview || "未入力",
      "",
      "※このメモは日常家電の操作メモ、取扱説明書、保証書情報を家族内で整理するためのものです。給湯器、IH、ブレーカー、ガス栓、水道元栓などの設備操作、修理、交換、配線、工事、点検の判断には使えません。パスワード、暗証番号、ログイン情報、カード番号、口座番号、マイナンバー等の秘密情報は記録しないでください。必要な場合は、取扱説明書、メーカー窓口、専門業者の案内を確認してください。",
    ].join("\n");
  }, [
    applianceList,
    checkDate,
    familyMemo,
    makerContact,
    manualWarranty,
    modelPurchase,
    nextReview,
    remoteOperations,
    seasonSettings,
    targetHome,
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">高齢親 家電・リモコン・取扱説明書メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          実家の日常家電について、よく使う操作、取扱説明書や保証書の保管場所、型番、家族への申し送りを整理します。
          設備操作や修理判断、秘密情報の記録には使わないでください。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <MemoField label="対象" value={targetHome} onChange={setTargetHome} placeholder="例: 母の自宅、2階リビングまわり、長女が確認" rows={2} />
            <MemoField label="確認日" value={checkDate} onChange={setCheckDate} placeholder="例: 2026年5月30日、帰省時に確認" rows={2} />
            <MemoField
              label="対象にする日常家電"
              value={applianceList}
              onChange={setApplianceList}
              placeholder="例: リビングのエアコン、テレビ、録画機、固定電話、洗濯機、電子レンジ、照明"
            />
            <MemoField
              label="よく使うリモコン操作・ボタン"
              value={remoteOperations}
              onChange={setRemoteOperations}
              placeholder="例: エアコンは電源、冷暖房切替、温度上下。テレビは入力切替、録画再生、音量。"
            />
            <MemoField
              label="取扱説明書・保証書の保管場所"
              value={manualWarranty}
              onChange={setManualWarranty}
              placeholder="例: リビング棚の青いファイル、保証書は家電量販店の封筒に保管。"
            />
            <MemoField
              label="型番・購入日・購入店"
              value={modelPurchase}
              onChange={setModelPurchase}
              placeholder="例: エアコン型番、購入年月、購入店、保証期限の控え。"
            />
            <MemoField
              label="メーカー名・窓口の控え"
              value={makerContact}
              onChange={setMakerContact}
              placeholder="例: 取扱説明書や本体ラベルに記載のメーカー名、問い合わせ先の控え。"
            />
            <MemoField
              label="季節ごと・普段使う設定の控え"
              value={seasonSettings}
              onChange={setSeasonSettings}
              placeholder="例: 夏は冷房、冬は暖房。普段家族が見た設定だけを控える。"
            />
            <MemoField
              label="家族への申し送り"
              value={familyMemo}
              onChange={setFamilyMemo}
              placeholder="例: パスワード類は書かない。リモコン写真は家族LINEで共有済み。"
            />
            <MemoField
              label="次回見直すタイミング"
              value={nextReview}
              onChange={setNextReview}
              placeholder="例: 次回帰省時、家電買い替え後、保証書を見つけたとき。"
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
              家電リモコンと取扱説明書を共有する方法を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              高齢親の家電・リモコン・取扱説明書メモテンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={PACK_URL}>
              親の介護はじめの37商品まとめセットを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは日常家電の情報整理用です。給湯器、IH、ブレーカー、ガス栓、水道元栓などの設備操作、修理、交換、配線、工事、点検の判断には使えません。
        パスワード、暗証番号、ログイン情報、カード番号、口座番号、マイナンバー等の秘密情報は記録しないでください。
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
