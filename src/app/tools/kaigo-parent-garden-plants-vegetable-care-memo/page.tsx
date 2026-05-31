"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=garden_plants_vegetable_care";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-garden-plants-vegetable-care?utm_source=net-toolbox&utm_medium=referral&utm_campaign=garden_plants_vegetable_care";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8435874";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

export default function KaigoParentGardenPlantsVegetableCareMemoPage() {
  const [targetHome, setTargetHome] = useState("");
  const [checkDate, setCheckDate] = useState("");
  const [plantListMemo, setPlantListMemo] = useState("");
  const [seasonalCareMemo, setSeasonalCareMemo] = useState("");
  const [wateringMemo, setWateringMemo] = useState("");
  const [vegetableGardenMemo, setVegetableGardenMemo] = useState("");
  const [toolsLocationMemo, setToolsLocationMemo] = useState("");
  const [familyMemo, setFamilyMemo] = useState("");
  const [nextReview, setNextReview] = useState("");

  const output = useMemo(() => {
    return [
      "【高齢親 庭・植木・家庭菜園 手入れメモ】",
      targetHome ? `対象: ${targetHome}` : "対象: 未入力",
      checkDate ? `確認日: ${checkDate}` : "確認日: 未入力",
      "",
      "■ 庭木・鉢植え・花のリスト",
      plantListMemo || "未入力",
      "",
      "■ 季節の手入れ予定（草取り・落ち葉・剪定確認など）",
      seasonalCareMemo || "未入力",
      "",
      "■ 水やり・肥料・日当たりのメモ",
      wateringMemo || "未入力",
      "",
      "■ 家庭菜園・収穫・支柱などのメモ",
      vegetableGardenMemo || "未入力",
      "",
      "■ 道具・資材の置き場所",
      toolsLocationMemo || "未入力",
      "",
      "■ 家族共有メモ",
      familyMemo || "未入力",
      "",
      "■ 次回見直すタイミング",
      nextReview || "未入力",
      "",
      "※このメモは家族内で庭・植木・家庭菜園の確認済み情報を整理するためのものです。剪定、伐採、栽培、農薬、工事、安全作業、契約などの判断は扱いません。迷う作業は自治体、園芸店、造園業者、管理会社などの専門窓口へ確認してください。住所・電話番号などの個人情報は必要最小限に絞り、パスワード・暗証番号・ログイン情報・口座番号・カード番号・マイナンバー等の秘密情報は記録しないでください。",
    ].join("\n");
  }, [
    checkDate,
    familyMemo,
    nextReview,
    plantListMemo,
    seasonalCareMemo,
    targetHome,
    toolsLocationMemo,
    vegetableGardenMemo,
    wateringMemo,
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">高齢親 庭・植木・家庭菜園 手入れメモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          実家の庭木、鉢植え、家庭菜園の手入れ予定、道具の置き場所、次回確認を、家族で見返しやすい形にそろえます。
          危険作業や専門判断はこのメモで決めず、秘密情報は記録しないでください。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <MemoField label="対象" value={targetHome} onChange={setTargetHome} placeholder="例: 母の自宅、実家の庭、玄関横の鉢植え" rows={2} />
            <MemoField label="確認日" value={checkDate} onChange={setCheckDate} placeholder="例: 2026年5月31日、帰省時に確認" rows={2} />
            <MemoField
              label="庭木・鉢植え・花のリスト"
              value={plantListMemo}
              onChange={setPlantListMemo}
              placeholder={"例:\n- 玄関横: 鉢植え3つ\n- 庭奥: 柿の木、低木\n- ベランダ: プランター2つ\n※正確な品種名が分からなければ呼び名でOK"}
              rows={6}
            />
            <MemoField
              label="季節の手入れ予定（草取り・落ち葉・剪定確認など）"
              value={seasonalCareMemo}
              onChange={setSeasonalCareMemo}
              placeholder={"例:\n- 春: 草取り、支柱確認\n- 夏: 水切れ確認、日よけ確認\n- 秋: 落ち葉掃除\n- 剪定や高所作業は専門窓口へ確認"}
            />
            <MemoField
              label="水やり・肥料・日当たりのメモ"
              value={wateringMemo}
              onChange={setWateringMemo}
              placeholder={"例:\n- 鉢植えは土が乾いていたら確認\n- 肥料は物置の棚\n- 農薬や薬剤の使用判断はこのメモでしない"}
            />
            <MemoField
              label="家庭菜園・収穫・支柱などのメモ"
              value={vegetableGardenMemo}
              onChange={setVegetableGardenMemo}
              placeholder={"例:\n- 畑の左側: きゅうり\n- 支柱がゆるいので次回確認\n- 収穫時期や薬剤判断は詳しい人・専門窓口へ確認"}
            />
            <MemoField
              label="道具・資材の置き場所"
              value={toolsLocationMemo}
              onChange={setToolsLocationMemo}
              placeholder={"例:\n- はさみ: 物置の左棚\n- 手袋: 玄関収納\n- 肥料: 物置下段\n※危険な道具の扱いは無理に行わない"}
            />
            <MemoField
              label="家族共有メモ"
              value={familyMemo}
              onChange={setFamilyMemo}
              placeholder={"例:\n- 変更があったら次に帰省した人が更新\n- 写真は家族内だけで共有\n- 外部転送しない"}
            />
            <MemoField
              label="次回見直すタイミング"
              value={nextReview}
              onChange={setNextReview}
              placeholder="例: 次回帰省時、季節替え前、台風後、専門業者へ相談する前"
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
              庭・植木・家庭菜園メモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              庭・植木・家庭菜園 手入れメモテンプレート集を見る
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
        このツールは家族内で確認済みの庭・植木・家庭菜園情報を整理するためのメモです。危険作業や専門判断、契約判断は扱いません。
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
