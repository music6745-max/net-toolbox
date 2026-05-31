"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=belongings_name_label_carryout";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-belongings-name-label-carryout-management?utm_source=net-toolbox&utm_medium=referral&utm_campaign=belongings_name_label_carryout";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8436265";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

export default function KaigoParentBelongingsNameLabelCarryoutMemoPage() {
  const [targetPerson, setTargetPerson] = useState("");
  const [checkDate, setCheckDate] = useState("");
  const [itemListMemo, setItemListMemo] = useState("");
  const [nameLabelMemo, setNameLabelMemo] = useState("");
  const [carryoutMemo, setCarryoutMemo] = useState("");
  const [returnCheckMemo, setReturnCheckMemo] = useState("");
  const [identificationMemo, setIdentificationMemo] = useState("");
  const [facilityRuleMemo, setFacilityRuleMemo] = useState("");
  const [nextReview, setNextReview] = useState("");

  const output = useMemo(() => {
    return [
      "【高齢親 持ち物・名前つけ・持ち出し管理メモ】",
      targetPerson ? `対象: ${targetPerson}` : "対象: 未入力",
      checkDate ? `確認日: ${checkDate}` : "確認日: 未入力",
      "",
      "■ 持ち物一覧（品名・置き場所）",
      itemListMemo || "未入力",
      "",
      "■ 名前つけ状況（済み/未確認/書いた場所）",
      nameLabelMemo || "未入力",
      "",
      "■ 持ち出し予定・持ち出したもの",
      carryoutMemo || "未入力",
      "",
      "■ 返却・戻し先の確認",
      returnCheckMemo || "未入力",
      "",
      "■ 似た物の識別メモ（色・柄・サイズ・目印）",
      identificationMemo || "未入力",
      "",
      "■ 施設・サービスへ確認した内容/未確認のこと",
      facilityRuleMemo || "未入力",
      "",
      "■ 次回見直すタイミング",
      nextReview || "未入力",
      "",
      "※このメモは家族内で親の持ち物、記名状況、持ち出し・返却確認を整理するためのものです。施設やサービスの持ち込みルール、洗濯・保管・返却の扱い、契約や費用の判断は利用先の案内や担当窓口へ確認してください。住所・電話番号などの個人情報は必要最小限に絞り、パスワード・暗証番号・ログイン情報・口座番号・カード番号・マイナンバー等の秘密情報は記録しないでください。",
    ].join("\n");
  }, [
    carryoutMemo,
    checkDate,
    facilityRuleMemo,
    identificationMemo,
    itemListMemo,
    nameLabelMemo,
    nextReview,
    returnCheckMemo,
    targetPerson,
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">高齢親 持ち物・名前つけ・持ち出し管理メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          親の持ち物への記名状況、持ち出し、返却確認、似た物の目印を家族で見返しやすい形にそろえます。
          施設ルールや契約判断、秘密情報はこのメモに含めないでください。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <MemoField label="対象" value={targetPerson} onChange={setTargetPerson} placeholder="例: 母の施設持ち物、父の外出用バッグ、通院時の持ち物" rows={2} />
            <MemoField label="確認日" value={checkDate} onChange={setCheckDate} placeholder="例: 2026年5月31日、面会時に確認" rows={2} />
            <MemoField
              label="持ち物一覧（品名・置き場所）"
              value={itemListMemo}
              onChange={setItemListMemo}
              placeholder={"例:\n- カーディガン: 施設の棚\n- コップ: ベッド横\n- 外出用バッグ: 自宅玄関収納"}
              rows={6}
            />
            <MemoField
              label="名前つけ状況（済み/未確認/書いた場所）"
              value={nameLabelMemo}
              onChange={setNameLabelMemo}
              placeholder={"例:\n- カーディガン: 首元タグに記名済み\n- 靴下: 未確認、次回見る\n- コップ: 底面に目印シール"}
            />
            <MemoField
              label="持ち出し予定・持ち出したもの"
              value={carryoutMemo}
              onChange={setCarryoutMemo}
              placeholder={"例:\n- 通院日: 保険証ケース、眼鏡、上着\n- 一時帰宅: 着替え2日分、薬袋は施設へ確認"}
            />
            <MemoField
              label="返却・戻し先の確認"
              value={returnCheckMemo}
              onChange={setReturnCheckMemo}
              placeholder={"例:\n- 外出後、上着は施設棚へ戻す\n- 借りたタオルは施設へ返却済み\n- 次回バッグ内を確認"}
            />
            <MemoField
              label="似た物の識別メモ（色・柄・サイズ・目印）"
              value={identificationMemo}
              onChange={setIdentificationMemo}
              placeholder={"例:\n- グレーの上着は袖口に青い糸\n- 黒い靴は内側に白いシール\n- 同じ柄のタオルがあるためタグを確認"}
            />
            <MemoField
              label="施設・サービスへ確認した内容/未確認のこと"
              value={facilityRuleMemo}
              onChange={setFacilityRuleMemo}
              placeholder={"例:\n- 記名場所はタグ推奨と確認済み\n- 洗濯に出す物は次回確認\n- 持ち込み可否は担当者へ確認する"}
            />
            <MemoField
              label="次回見直すタイミング"
              value={nextReview}
              onChange={setNextReview}
              placeholder="例: 次回面会時、一時帰宅前、衣替え前、通院バッグを作る前"
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
              持ち物・名前つけ管理メモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              持ち物 名前つけ・持ち出し管理メモテンプレート集を見る
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
        このツールは家族内で持ち物と記名状況を整理するためのメモです。施設ルールや契約・費用判断は利用先へ確認し、秘密情報は記録しないでください。
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
