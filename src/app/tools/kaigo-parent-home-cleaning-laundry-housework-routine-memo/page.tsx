"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=housework_routine_memo";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-home-cleaning-laundry-housework-routine?utm_source=net-toolbox&utm_medium=referral&utm_campaign=housework_routine_memo";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383008";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";

export default function KaigoParentHomeCleaningLaundryHouseworkRoutineMemoPage() {
  const [targetHome, setTargetHome] = useState("");
  const [checkDate, setCheckDate] = useState("");
  const [cleaningRoutineMemo, setCleaningRoutineMemo] = useState("");
  const [laundryRoutineMemo, setLaundryRoutineMemo] = useState("");
  const [trashRoutineMemo, setTrashRoutineMemo] = useState("");
  const [otherHouseworkMemo, setOtherHouseworkMemo] = useState("");
  const [familyMemo, setFamilyMemo] = useState("");
  const [nextReview, setNextReview] = useState("");

  const output = useMemo(() => {
    return [
      "【高齢親 掃除・洗濯・家事ルーティン共有メモ】",
      targetHome ? `対象: ${targetHome}` : "対象: 未入力",
      checkDate ? `確認日: ${checkDate}` : "確認日: 未入力",
      "",
      "■ 掃除ルーティン（毎日/週1/不定期）",
      cleaningRoutineMemo || "未入力",
      "",
      "■ 洗濯ルーティン（洗剤場所・干し方・取り込みなど）",
      laundryRoutineMemo || "未入力",
      "",
      "■ ゴミ出し・片付け（曜日・分別・仮置きなど）",
      trashRoutineMemo || "未入力",
      "",
      "■ その他家事（買い物・料理・来客前後など）",
      otherHouseworkMemo || "未入力",
      "",
      "■ 家族共有メモ",
      familyMemo || "未入力",
      "",
      "■ 次回見直すタイミング",
      nextReview || "未入力",
      "",
      "※このメモは家族内で日常家事の申し送りを整理するためのものです。パスワード・暗証番号・ログイン情報・カード番号・口座番号・マイナンバー等の秘密情報は記録しないでください。設備操作や安全判断、専門作業が必要な内容は扱いません。必要な場合はメーカーや自治体、専門業者の案内を確認してください。",
    ].join("\n");
  }, [
    checkDate,
    cleaningRoutineMemo,
    familyMemo,
    laundryRoutineMemo,
    nextReview,
    otherHouseworkMemo,
    targetHome,
    trashRoutineMemo,
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">
          高齢親 掃除・洗濯・家事ルーティン共有メモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          掃除、洗濯、ゴミ出しなどの日常家事について、頻度と担当、申し送りを整理して家族で共有できるメモを作ります。秘密情報は記録しないでください。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <MemoField
              label="対象"
              value={targetHome}
              onChange={setTargetHome}
              placeholder="例: 実家（1階）全体、母の自宅、父の部屋まわり"
              rows={2}
            />
            <MemoField
              label="確認日"
              value={checkDate}
              onChange={setCheckDate}
              placeholder="例: 2026年5月30日、帰省時に確認"
              rows={2}
            />
            <MemoField
              label="掃除ルーティン（毎日/週1/不定期）"
              value={cleaningRoutineMemo}
              onChange={setCleaningRoutineMemo}
              placeholder="例: 週1で掃除機。トイレは週2。来客前だけ水回りを追加。掃除道具は洗面所棚。"
            />
            <MemoField
              label="洗濯ルーティン（洗剤場所・干し方・取り込みなど）"
              value={laundryRoutineMemo}
              onChange={setLaundryRoutineMemo}
              placeholder="例: 洗剤は洗濯機上。洗濯ネットは引き出し。干す場所は庭。取り込みは夕方。"
            />
            <MemoField
              label="ゴミ出し・片付け（曜日・分別・仮置きなど）"
              value={trashRoutineMemo}
              onChange={setTrashRoutineMemo}
              placeholder="例: 可燃は火曜金曜。資源は第1土曜。仮置きは玄関横。分別ルールは自治体案内確認。"
            />
            <MemoField
              label="その他家事（買い物・料理・来客前後など）"
              value={otherHouseworkMemo}
              onChange={setOtherHouseworkMemo}
              placeholder="例: 買い物は週末。冷蔵庫チェックは帰省初日。来客前に玄関を片付ける。"
            />
            <MemoField
              label="家族共有メモ"
              value={familyMemo}
              onChange={setFamilyMemo}
              placeholder="例: 変更があったら次に帰省した人が更新。迷う内容はメモに残して次回確認。"
            />
            <MemoField
              label="次回見直すタイミング"
              value={nextReview}
              onChange={setNextReview}
              placeholder="例: 次回帰省時、季節の切り替え後、家事の担当が変わった後。"
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
              家事ルーティン共有の作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              掃除・洗濯・家事ルーティン共有メモ テンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={PACK_URL}>
              親の介護はじめの37商品まとめセットを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは家事ルーティンの申し送りを家族内で整理するためのメモです。秘密情報は記録しないでください。設備操作や安全判断、専門作業が必要な内容は扱いません。
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

