"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=memory_family_history_record";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-memory-family-history-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=memory_family_history_record";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8436039";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

export default function KaigoParentMemoryFamilyHistoryRecordMemoPage() {
  const [targetPerson, setTargetPerson] = useState("");
  const [recordDate, setRecordDate] = useState("");
  const [lifeTimelineMemo, setLifeTimelineMemo] = useState("");
  const [familyMilestonesMemo, setFamilyMilestonesMemo] = useState("");
  const [storyMemo, setStoryMemo] = useState("");
  const [relatedItemsMemo, setRelatedItemsMemo] = useState("");
  const [questionsMemo, setQuestionsMemo] = useState("");
  const [shareRuleMemo, setShareRuleMemo] = useState("");
  const [nextReview, setNextReview] = useState("");

  const output = useMemo(() => {
    return [
      "【高齢親 思い出・家族の歴史 書き留めメモ】",
      targetPerson ? `対象: ${targetPerson}` : "対象: 未入力",
      recordDate ? `記録日: ${recordDate}` : "記録日: 未入力",
      "",
      "■ 生い立ち・年表メモ",
      lifeTimelineMemo || "未入力",
      "",
      "■ 家族の節目・出来事",
      familyMilestonesMemo || "未入力",
      "",
      "■ 親が話してくれたこと",
      storyMemo || "未入力",
      "",
      "■ 写真・手紙・記念品など関連するもの",
      relatedItemsMemo || "未入力",
      "",
      "■ 次に聞きたいこと",
      questionsMemo || "未入力",
      "",
      "■ 家族内の共有ルール",
      shareRuleMemo || "未入力",
      "",
      "■ 次回見直すタイミング",
      nextReview || "未入力",
      "",
      "※このメモは家族内で思い出や会話を整理するためのものです。財産、相続、契約、医療、介護サービスなどの判断は扱いません。必要な内容は公式書類や専門窓口で確認してください。住所・電話番号などの個人情報は必要最小限に絞り、パスワード・暗証番号・ログイン情報・口座番号・カード番号・マイナンバー等の秘密情報は記録しないでください。",
    ].join("\n");
  }, [
    familyMilestonesMemo,
    lifeTimelineMemo,
    nextReview,
    questionsMemo,
    recordDate,
    relatedItemsMemo,
    shareRuleMemo,
    storyMemo,
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">高齢親 思い出・家族の歴史 書き留めメモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
親が話してくれたこと、生い立ち、家族の節目、次に聞きたいことを、家族で見返しやすい形にそろえます。
手続きや専門判断、秘密情報はこのメモに含めないでください。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
<h2 className="text-lg font-bold text-slate-900">入力</h2>
<div className="mt-4 space-y-4">
  <MemoField label="対象" value={targetPerson} onChange={setTargetPerson} placeholder="例: 母の昔の話、父の仕事の話、祖父母から聞いた家族の話" rows={2} />
  <MemoField label="記録日" value={recordDate} onChange={setRecordDate} placeholder="例: 2026年5月31日、帰省時に聞いた話" rows={2} />
  <MemoField
    label="生い立ち・年表メモ"
    value={lifeTimelineMemo}
    onChange={setLifeTimelineMemo}
    placeholder={"例:\n- 生まれた地域: 〇〇町\n- 子どもの頃によく行った場所: 川沿い、商店街\n- 学校・仕事の話: 詳細は次回確認"}
    rows={6}
  />
  <MemoField
    label="家族の節目・出来事"
    value={familyMilestonesMemo}
    onChange={setFamilyMilestonesMemo}
    placeholder={"例:\n- 引っ越しした時期\n- 結婚、出産、家族旅行\n- 家族で大切にしていた行事"}
  />
  <MemoField
    label="親が話してくれたこと"
    value={storyMemo}
    onChange={setStoryMemo}
    placeholder={"例:\n- 若い頃に通っていた店の話\n- 初めて働いた日の話\n- 写真を見ながら思い出した一言"}
  />
  <MemoField
    label="写真・手紙・記念品など関連するもの"
    value={relatedItemsMemo}
    onChange={setRelatedItemsMemo}
    placeholder={"例:\n- 古いアルバムの3冊目\n- 手紙は押し入れの箱\n- 写真の人物名は次回聞く"}
  />
  <MemoField
    label="次に聞きたいこと"
    value={questionsMemo}
    onChange={setQuestionsMemo}
    placeholder={"例:\n- 写真に写っている人の名前\n- 住んでいた家の場所\n- 当時好きだった食べ物や歌"}
  />
  <MemoField
    label="家族内の共有ルール"
    value={shareRuleMemo}
    onChange={setShareRuleMemo}
    placeholder={"例:\n- 家族内だけで共有\n- SNSへ投稿しない\n- 本人が話したくない内容は無理に聞かない"}
  />
  <MemoField
    label="次回見直すタイミング"
    value={nextReview}
    onChange={setNextReview}
    placeholder="例: 次回帰省時、写真整理の前、兄弟で共有する前"
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
    思い出・家族の歴史メモの作り方を読む
  </a>
  <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
    思い出・家族の歴史 書き留めメモテンプレート集を見る
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
        このツールは家族内で思い出や会話を整理するためのメモです。財産、相続、契約、医療、介護サービスなどの判断は扱いません。
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
