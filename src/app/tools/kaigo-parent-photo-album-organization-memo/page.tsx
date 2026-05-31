"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=photo_album_organization";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-photo-album-organization-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=photo_album_organization";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383061";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

export default function KaigoParentPhotoAlbumOrganizationMemoPage() {
  const [targetAlbum, setTargetAlbum] = useState("");
  const [recordDate, setRecordDate] = useState("");
  const [albumOverviewMemo, setAlbumOverviewMemo] = useState("");
  const [photoDetailMemo, setPhotoDetailMemo] = useState("");
  const [peoplePlaceMemo, setPeoplePlaceMemo] = useState("");
  const [digitizationMemo, setDigitizationMemo] = useState("");
  const [questionMemo, setQuestionMemo] = useState("");
  const [sharingRuleMemo, setSharingRuleMemo] = useState("");
  const [nextReview, setNextReview] = useState("");

  const output = useMemo(() => {
    return [
      "【高齢親 写真・アルバム整理メモ】",
      targetAlbum ? `対象: ${targetAlbum}` : "対象: 未入力",
      recordDate ? `記録日: ${recordDate}` : "記録日: 未入力",
      "",
      "■ アルバム・写真の概要",
      albumOverviewMemo || "未入力",
      "",
      "■ 写真ごとのメモ（いつ・どこで・何の写真か）",
      photoDetailMemo || "未入力",
      "",
      "■ 写っている人・場所の手がかり",
      peoplePlaceMemo || "未入力",
      "",
      "■ データ化・保管状況",
      digitizationMemo || "未入力",
      "",
      "■ 次に親へ聞きたいこと",
      questionMemo || "未入力",
      "",
      "■ 家族内の共有ルール",
      sharingRuleMemo || "未入力",
      "",
      "■ 次回見直すタイミング",
      nextReview || "未入力",
      "",
      "※このメモは家族内で写真やアルバムの手がかりを整理するためのものです。処分、公開、権利、相続、契約、外部サービス利用などの判断は扱いません。必要な内容は家族で確認し、公式案内や専門窓口で確認してください。住所・電話番号などの個人情報は必要最小限に絞り、パスワード・暗証番号・ログイン情報・口座番号・カード番号・マイナンバー等の秘密情報は記録しないでください。",
    ].join("\n");
  }, [
    albumOverviewMemo,
    digitizationMemo,
    nextReview,
    peoplePlaceMemo,
    photoDetailMemo,
    questionMemo,
    recordDate,
    sharingRuleMemo,
    targetAlbum,
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">高齢親 写真・アルバム整理メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          実家の写真やアルバムについて、写っている人、時期、場所、データ化状況、次に聞きたいことを家族で見返しやすい形にそろえます。
          処分や公開の判断、秘密情報はこのメモに含めないでください。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <MemoField
              label="対象"
              value={targetAlbum}
              onChange={setTargetAlbum}
              placeholder="例: 実家の黒いアルバム、押し入れ上段の写真箱、母の若い頃の写真"
              rows={2}
            />
            <MemoField label="記録日" value={recordDate} onChange={setRecordDate} placeholder="例: 2026年5月31日、帰省時に確認" rows={2} />
            <MemoField
              label="アルバム・写真の概要"
              value={albumOverviewMemo}
              onChange={setAlbumOverviewMemo}
              placeholder={"例:\n- 保管場所: 和室の押し入れ上段\n- 分量: アルバム3冊、写真箱1つ\n- おおよその時期: 1970年代から1990年代"}
              rows={6}
            />
            <MemoField
              label="写真ごとのメモ（いつ・どこで・何の写真か）"
              value={photoDetailMemo}
              onChange={setPhotoDetailMemo}
              placeholder={"例:\n- 1冊目 5ページ: 親戚旅行、場所は次回確認\n- 写真箱の封筒: 町内会の行事らしい\n- 年代が分からないものは付箋だけ貼る"}
            />
            <MemoField
              label="写っている人・場所の手がかり"
              value={peoplePlaceMemo}
              onChange={setPeoplePlaceMemo}
              placeholder={"例:\n- 右端は叔父の可能性\n- 背景は昔の実家前\n- 名前が分からない人は無理に断定しない"}
            />
            <MemoField
              label="データ化・保管状況"
              value={digitizationMemo}
              onChange={setDigitizationMemo}
              placeholder={"例:\n- 1冊目だけスマホで撮影済み\n- 元の写真は同じアルバムに戻す\n- クラウド共有や外部サービス利用は家族で確認してから"}
            />
            <MemoField
              label="次に親へ聞きたいこと"
              value={questionMemo}
              onChange={setQuestionMemo}
              placeholder={"例:\n- この集合写真はいつのものか\n- 写っている人の名前\n- よく行っていた場所や店の名前"}
            />
            <MemoField
              label="家族内の共有ルール"
              value={sharingRuleMemo}
              onChange={setSharingRuleMemo}
              placeholder={"例:\n- 家族内だけで共有\n- SNSへ投稿しない\n- 本人が話したくない内容は無理に聞かない"}
            />
            <MemoField
              label="次回見直すタイミング"
              value={nextReview}
              onChange={setNextReview}
              placeholder="例: 次回帰省時、アルバム1冊を見終えた後、兄弟で共有する前"
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
              写真・アルバム整理メモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              写真・アルバム整理メモテンプレート集を見る
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
        このツールは家族内で写真やアルバムの手がかりを整理するためのメモです。処分、公開、権利、相続、契約、外部サービス利用の判断は扱いません。
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
