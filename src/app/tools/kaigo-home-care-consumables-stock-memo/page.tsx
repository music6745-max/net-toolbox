"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=consumables_stock_memo";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/home-care-consumables-stock-replenishment?utm_source=net-toolbox&utm_medium=referral&utm_campaign=consumables_stock_memo";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8382994";

export default function KaigoHomeCareConsumablesStockMemoPage() {
  const [targetPerson, setTargetPerson] = useState("");
  const [stockDate, setStockDate] = useState("");
  const [toiletingItems, setToiletingItems] = useState("");
  const [hygieneItems, setHygieneItems] = useState("");
  const [oralSkinItems, setOralSkinItems] = useState("");
  const [caregiverItems, setCaregiverItems] = useState("");
  const [currentShortage, setCurrentShortage] = useState("");
  const [buyList, setBuyList] = useState("");
  const [shareMemo, setShareMemo] = useState("");
  const [reviewTiming, setReviewTiming] = useState("");

  const output = useMemo(() => {
    return [
      "【在宅介護 消耗品在庫・補充メモ】",
      targetPerson ? `対象者: ${targetPerson}` : "対象者: 未入力",
      stockDate ? `確認日: ${stockDate}` : "確認日: 未入力",
      "",
      "■ 排泄ケア用品",
      toiletingItems || "未入力",
      "",
      "■ 清潔・衛生用品",
      hygieneItems || "未入力",
      "",
      "■ 口腔・皮膚ケア用品",
      oralSkinItems || "未入力",
      "",
      "■ 介護者・環境用品",
      caregiverItems || "未入力",
      "",
      "■ 残り少ないもの・不足しているもの",
      currentShortage || "未入力",
      "",
      "■ 次に買うもの・購入先・数量",
      buyList || "未入力",
      "",
      "■ 家族への申し送り",
      shareMemo || "未入力",
      "",
      "■ 次回見直すタイミング",
      reviewTiming || "未入力",
      "",
      "※このメモは家庭内の介護消耗品の情報整理用です。医薬品、処方薬、市販薬、サプリ、治療用品、医療機器、専門用品の管理や判断には使えません。用品の選定、使用量、交換頻度、皮膚トラブル、介護保険給付の扱いは、担当ケアマネジャー、訪問看護師、福祉用具事業者、医師、薬剤師などへ確認してください。",
    ].join("\n");
  }, [
    buyList,
    caregiverItems,
    currentShortage,
    hygieneItems,
    oralSkinItems,
    reviewTiming,
    shareMemo,
    stockDate,
    targetPerson,
    toiletingItems,
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">在宅介護 消耗品在庫・補充メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          紙おむつ、尿とりパッド、ウェットティッシュ、使い捨て手袋など、在宅介護で使う消耗品の残量と補充予定を整理します。
          医薬品や専門用品の判断を行うツールではありません。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <MemoField label="対象者" value={targetPerson} onChange={setTargetPerson} placeholder="例: 母、自宅、主に長女が買い物担当" rows={2} />
            <MemoField label="確認日" value={stockDate} onChange={setStockDate} placeholder="例: 2026年5月30日、週末の在庫確認" rows={2} />
            <MemoField
              label="排泄ケア用品"
              value={toiletingItems}
              onChange={setToiletingItems}
              placeholder="例: 紙おむつM 残り1袋、尿とりパッド 残り20枚、防水シーツ 残り2枚"
            />
            <MemoField
              label="清潔・衛生用品"
              value={hygieneItems}
              onChange={setHygieneItems}
              placeholder="例: ウェットティッシュ 残り2個、使い捨て手袋 残り半箱、清拭クロス 要確認"
            />
            <MemoField
              label="口腔・皮膚ケア用品"
              value={oralSkinItems}
              onChange={setOralSkinItems}
              placeholder="例: スポンジブラシ 残り少ない、保湿クリーム 残り1本、ガーゼ 余裕あり"
            />
            <MemoField
              label="介護者・環境用品"
              value={caregiverItems}
              onChange={setCaregiverItems}
              placeholder="例: 使い捨てエプロン、マスク、消臭袋、ゴミ袋、掃除用品など"
            />
            <MemoField
              label="残り少ないもの・不足しているもの"
              value={currentShortage}
              onChange={setCurrentShortage}
              placeholder="例: 紙おむつと手袋は今週中に補充。ウェットティッシュは次回訪問時に確認。"
            />
            <MemoField
              label="次に買うもの・購入先・数量"
              value={buyList}
              onChange={setBuyList}
              placeholder="例: ドラッグストアで紙おむつMを2袋、手袋Mを1箱、消臭袋を1箱。"
            />
            <MemoField
              label="家族への申し送り"
              value={shareMemo}
              onChange={setShareMemo}
              placeholder="例: 長男が土曜に購入。商品名の写真は家族LINEに共有済み。"
            />
            <MemoField
              label="次回見直すタイミング"
              value={reviewTiming}
              onChange={setReviewTiming}
              placeholder="例: 次の日曜訪問時、デイサービス連絡帳確認後、月末の家族共有時"
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
              消耗品の在庫と補充タイミングを共有する方法を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              在宅介護の消耗品 在庫・補充メモテンプレート集を見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは家庭内の介護消耗品の情報整理用です。医薬品、処方薬、市販薬、サプリ、治療用品、医療機器、専門用品の管理や判断には使えません。
        用品の選定、使用量、交換頻度、皮膚トラブル、介護保険給付の扱いは、担当ケアマネジャー、訪問看護師、福祉用具事業者、医師、薬剤師などへ確認してください。
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
