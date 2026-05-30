"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=clothes_bedding_size_memo";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-home-clothes-bedding-season-size-memo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=clothes_bedding_size_memo";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383004";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";

export default function KaigoParentClothesBeddingSeasonSizeMemoPage() {
  const [targetHome, setTargetHome] = useState("");
  const [checkDate, setCheckDate] = useState("");
  const [dailyClothesMemo, setDailyClothesMemo] = useState("");
  const [outerwearMemo, setOuterwearMemo] = useState("");
  const [underwearSocksMemo, setUnderwearSocksMemo] = useState("");
  const [pajamaMemo, setPajamaMemo] = useState("");
  const [beddingMemo, setBeddingMemo] = useState("");
  const [seasonChangeMemo, setSeasonChangeMemo] = useState("");
  const [familyMemo, setFamilyMemo] = useState("");
  const [nextReview, setNextReview] = useState("");

  const output = useMemo(() => {
    return [
      "【高齢親 衣類・寝具・季節替え・サイズ管理メモ】",
      targetHome ? `対象: ${targetHome}` : "対象: 未入力",
      checkDate ? `確認日: ${checkDate}` : "確認日: 未入力",
      "",
      "■ 普段着（よく使うもの）",
      dailyClothesMemo || "未入力",
      "",
      "■ 外出着・防寒（季節物含む）",
      outerwearMemo || "未入力",
      "",
      "■ 下着・靴下（サイズ・予備・保管場所）",
      underwearSocksMemo || "未入力",
      "",
      "■ 部屋着・パジャマ",
      pajamaMemo || "未入力",
      "",
      "■ 寝具（布団・毛布・シーツなど）",
      beddingMemo || "未入力",
      "",
      "■ 季節替えメモ（入れ替え時期・保管場所・更新ルール）",
      seasonChangeMemo || "未入力",
      "",
      "■ 家族共有メモ",
      familyMemo || "未入力",
      "",
      "■ 次回見直すタイミング",
      nextReview || "未入力",
      "",
      "※このメモは衣類・寝具のサイズや保管場所などを家族内で共有するためのものです。パスワード・暗証番号・ログイン情報・カード番号・口座番号・マイナンバー等の秘密情報は記録しないでください。施設やサービスの持ち物ルール、衣類の管理方法、洗濯・預け方の判断は利用先ごとに異なります。必要な場合は利用先の案内や担当窓口へ確認してください。",
    ].join("\n");
  }, [
    beddingMemo,
    checkDate,
    dailyClothesMemo,
    familyMemo,
    nextReview,
    outerwearMemo,
    pajamaMemo,
    seasonChangeMemo,
    targetHome,
    underwearSocksMemo,
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
          高齢親 衣類・寝具・季節替え・サイズ管理メモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          衣類と寝具について、サイズ、季節替え、保管場所、予備を整理して家族で共有できるメモを作ります。秘密情報は記録しないでください。
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
              placeholder="例: 母の自宅、実家（1階）、父の部屋まわり"
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
              label="普段着（よく使うもの）"
              value={dailyClothesMemo}
              onChange={setDailyClothesMemo}
              placeholder="例: 普段の上着はタンス右。ズボンは引き出し2段目。サイズの目安も一緒に。"
            />
            <MemoField
              label="外出着・防寒（季節物含む）"
              value={outerwearMemo}
              onChange={setOuterwearMemo}
              placeholder="例: 冬物コートは押し入れ上段。帽子は玄関収納。クリーニング後はこの場所。"
            />
            <MemoField
              label="下着・靴下（サイズ・予備・保管場所）"
              value={underwearSocksMemo}
              onChange={setUnderwearSocksMemo}
              placeholder="例: 下着は引き出し左。サイズはM。予備は同じ場所に。靴下は右側。"
            />
            <MemoField
              label="部屋着・パジャマ"
              value={pajamaMemo}
              onChange={setPajamaMemo}
              placeholder="例: パジャマは寝室タンス。替えは2セット。季節で入れ替え。"
            />
            <MemoField
              label="寝具（布団・毛布・シーツなど）"
              value={beddingMemo}
              onChange={setBeddingMemo}
              placeholder="例: 布団は押し入れ下段。毛布は右奥。シーツ替えは棚のケース。"
            />
            <MemoField
              label="季節替えメモ（入れ替え時期・保管場所・更新ルール）"
              value={seasonChangeMemo}
              onChange={setSeasonChangeMemo}
              placeholder="例: 春と秋に入れ替え。入れ替え後に家族LINEへ写真共有。場所変更があれば更新。"
            />
            <MemoField
              label="家族共有メモ"
              value={familyMemo}
              onChange={setFamilyMemo}
              placeholder="例: 変更があったら次に帰省した人が更新。迷ったら施設・サービスへ確認。"
            />
            <MemoField
              label="次回見直すタイミング"
              value={nextReview}
              onChange={setNextReview}
              placeholder="例: 次回帰省時、季節替え後、買い替えや処分があった後。"
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
              衣類・寝具・サイズメモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              衣類・寝具・季節替え・サイズ管理テンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={PACK_URL}>
              親の介護はじめの37商品まとめセットを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは衣類・寝具のサイズや保管場所を家族内で整理するためのメモです。秘密情報は記録しないでください。施設やサービスの持ち物ルールは利用先に確認してください。
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

