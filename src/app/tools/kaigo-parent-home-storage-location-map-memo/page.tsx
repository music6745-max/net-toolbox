"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=storage_location_map";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-home-storage-location-map?utm_source=net-toolbox&utm_medium=referral&utm_campaign=storage_location_map";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383002";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";

export default function KaigoParentHomeStorageLocationMapMemoPage() {
  const [targetHome, setTargetHome] = useState("");
  const [checkDate, setCheckDate] = useState("");
  const [kitchenMemo, setKitchenMemo] = useState("");
  const [livingMemo, setLivingMemo] = useState("");
  const [bedroomMemo, setBedroomMemo] = useState("");
  const [bathLaundryMemo, setBathLaundryMemo] = useState("");
  const [closetStorageMemo, setClosetStorageMemo] = useState("");
  const [entranceMemo, setEntranceMemo] = useState("");
  const [otherMemo, setOtherMemo] = useState("");
  const [familyMemo, setFamilyMemo] = useState("");
  const [nextReview, setNextReview] = useState("");

  const output = useMemo(() => {
    return [
      "【実家 収納場所・置き場所マップ】",
      targetHome ? `対象: ${targetHome}` : "対象: 未入力",
      checkDate ? `確認日: ${checkDate}` : "確認日: 未入力",
      "",
      "■ 台所",
      kitchenMemo || "未入力",
      "",
      "■ リビング",
      livingMemo || "未入力",
      "",
      "■ 寝室",
      bedroomMemo || "未入力",
      "",
      "■ 洗面所・脱衣所・浴室まわり",
      bathLaundryMemo || "未入力",
      "",
      "■ 押し入れ・クローゼット・物置",
      closetStorageMemo || "未入力",
      "",
      "■ 玄関",
      entranceMemo || "未入力",
      "",
      "■ その他",
      otherMemo || "未入力",
      "",
      "■ 家族共有メモ",
      familyMemo || "未入力",
      "",
      "■ 次回見直すタイミング",
      nextReview || "未入力",
      "",
      "※このメモは「日用品の置き場所」を家族内で整理するためのものです。通帳・印鑑・カード・鍵・パスワード・暗証番号・ログイン情報・口座番号・カード番号・マイナンバー等の秘密情報は記録しないでください。医薬品・医療用品の保管場所の記録や、ブレーカー・ガス元栓・水道元栓・給湯器などの設備場所・操作や安全判断の代替には使えません。必要な場合は公式案内や専門業者の案内を確認してください。",
    ].join("\n");
  }, [
    bathLaundryMemo,
    bedroomMemo,
    checkDate,
    closetStorageMemo,
    entranceMemo,
    familyMemo,
    kitchenMemo,
    livingMemo,
    nextReview,
    otherMemo,
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">実家 収納場所・置き場所マップメモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          実家の日用品の置き場所を部屋別・棚段別に整理し、家族で見返しやすいメモを作ります。秘密情報や設備操作の記録には使わないでください。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <MemoField label="対象" value={targetHome} onChange={setTargetHome} placeholder="例: 母の自宅、1階全体、帰省時に確認" rows={2} />
            <MemoField label="確認日" value={checkDate} onChange={setCheckDate} placeholder="例: 2026年5月30日、帰省時に確認" rows={2} />
            <MemoField
              label="台所"
              value={kitchenMemo}
              onChange={setKitchenMemo}
              placeholder="例: 洗剤はシンク下の左。ゴミ袋は食器棚下段。予備電球は引き出し奥。"
            />
            <MemoField
              label="リビング"
              value={livingMemo}
              onChange={setLivingMemo}
              placeholder="例: 掃除用品はテレビ横の棚。リモコン予備電池はリビング棚2段目。"
            />
            <MemoField
              label="寝室"
              value={bedroomMemo}
              onChange={setBedroomMemo}
              placeholder="例: 寝具の替えは押し入れ上段。季節の掛け布団は右奥。"
            />
            <MemoField
              label="洗面所・脱衣所・浴室まわり"
              value={bathLaundryMemo}
              onChange={setBathLaundryMemo}
              placeholder="例: タオルは洗面所棚の中段。洗濯洗剤は洗濯機上。"
            />
            <MemoField
              label="押し入れ・クローゼット・物置"
              value={closetStorageMemo}
              onChange={setClosetStorageMemo}
              placeholder="例: 来客用寝具は押し入れ下段。掃除機の紙パックは物置の箱。"
            />
            <MemoField
              label="玄関"
              value={entranceMemo}
              onChange={setEntranceMemo}
              placeholder="例: 傘は下駄箱左。電池は玄関収納の右上。"
            />
            <MemoField
              label="その他"
              value={otherMemo}
              onChange={setOtherMemo}
              placeholder="例: 2階の予備品、庭の物置、車庫など、補足を書いてください。"
            />
            <MemoField
              label="家族共有メモ"
              value={familyMemo}
              onChange={setFamilyMemo}
              placeholder="例: 変更があったら次に帰省した人が更新。写真が必要なら家族LINEに共有。"
            />
            <MemoField
              label="次回見直すタイミング"
              value={nextReview}
              onChange={setNextReview}
              placeholder="例: 次回帰省時、模様替え後、収納場所を変えた後。"
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
              実家の置き場所マップの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              実家収納場所・置き場所マップテンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={PACK_URL}>
              親の介護はじめの37商品まとめセットを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは日用品の置き場所を家族内で整理するためのメモです。通帳・カード・鍵・パスワード等の秘密情報は記録しないでください。
        ブレーカー・ガス元栓・水道元栓・給湯器などの設備場所・操作や安全判断の代替には使えません。
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

