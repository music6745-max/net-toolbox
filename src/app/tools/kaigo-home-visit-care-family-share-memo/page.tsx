"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=home_visit_care_family_share";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/home-visit-care-family-share-memo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=home_visit_care_family_share";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8382965";

export default function KaigoHomeVisitCareFamilyShareMemoPage() {
  const [visitDate, setVisitDate] = useState("");
  const [beforeVisit, setBeforeVisit] = useState("");
  const [afterVisit, setAfterVisit] = useState("");
  const [helperNotice, setHelperNotice] = useState("");
  const [familyShare, setFamilyShare] = useState("");
  const [nextQuestions, setNextQuestions] = useState("");
  const [weeklyReview, setWeeklyReview] = useState("");
  const [contacts, setContacts] = useState("");

  const output = useMemo(() => {
    return [
      "【訪問介護 家族共有メモ】",
      visitDate ? `訪問日: ${visitDate}` : "訪問日: 未入力",
      "",
      "■ 訪問前に家族が伝えたいこと",
      beforeVisit || "未入力",
      "",
      "■ 訪問後に家族が気づいたこと",
      afterVisit || "未入力",
      "",
      "■ ヘルパー・事業所から聞いたこと",
      helperNotice || "未入力",
      "",
      "■ 家族に共有する要点",
      familyShare || "未入力",
      "",
      "■ 次回ケアマネ・事業所へ確認したいこと",
      nextQuestions || "未入力",
      "",
      "■ 週まとめ・続いている気づき",
      weeklyReview || "未入力",
      "",
      "■ 関係者・連絡先メモ",
      contacts || "未入力",
      "",
      "※このメモは家族内の訪問介護利用時の共有用です。訪問介護の業務記録、ヘルパーへの指示書、ケアプランの代替、サービス変更・契約・利用可否・給付・自己負担額の判断には使わず、担当ケアマネジャーや訪問介護事業所へ確認してください。",
    ].join("\n");
  }, [afterVisit, beforeVisit, contacts, familyShare, helperNotice, nextQuestions, visitDate, weeklyReview]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <a href="/tools" className="text-sm font-semibold text-blue-700 hover:underline">
          ツール一覧へ戻る
        </a>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">訪問介護 家族共有メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          ヘルパー訪問前後に、家族が伝えたいこと、訪問後の気づき、次回確認したいことを整理します。
          指示書や業務記録ではなく、家族内で状況をそろえるための手元メモです。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <label className="block text-sm font-semibold text-slate-800">
              訪問日
              <input
                type="date"
                value={visitDate}
                onChange={(event) => setVisitDate(event.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </label>
            <MemoField
              label="訪問前に家族が伝えたいこと"
              value={beforeVisit}
              onChange={setBeforeVisit}
              placeholder="例: 昨日から少し食欲が落ちている、買い物内容を確認したい"
            />
            <MemoField
              label="訪問後に家族が気づいたこと"
              value={afterVisit}
              onChange={setAfterVisit}
              placeholder="本人の様子、家の中の変化、家族が見た事実"
            />
            <MemoField
              label="ヘルパー・事業所から聞いたこと"
              value={helperNotice}
              onChange={setHelperNotice}
              placeholder="訪問後に伝えられたこと、連絡事項、次回予定"
            />
            <MemoField
              label="家族に共有する要点"
              value={familyShare}
              onChange={setFamilyShare}
              placeholder="離れて暮らす家族やきょうだいへ伝える短い要点"
            />
            <MemoField
              label="次回ケアマネ・事業所へ確認したいこと"
              value={nextQuestions}
              onChange={setNextQuestions}
              placeholder="サービス範囲、変更可否、連絡方法、気になる点"
            />
            <MemoField
              label="週まとめ・続いている気づき"
              value={weeklyReview}
              onChange={setWeeklyReview}
              placeholder="同じ気づきが続いているか、次回面談で聞くこと"
            />
            <MemoField
              label="関係者・連絡先メモ"
              value={contacts}
              onChange={setContacts}
              placeholder="担当ケアマネ、訪問介護事業所、家族連絡係"
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
            <p className="font-bold text-slate-900">次の導線</p>
            <a className="block font-semibold text-blue-700 hover:underline" href={KAIGO_NAVI_URL}>
              親のこと整理ナビで関連テンプレートを診断する
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={GUIDE_URL}>
              訪問介護利用時に家族で共有するメモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              訪問介護利用時の家族共有メモテンプレート集を見る
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

function MemoField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <label className="block text-sm font-semibold text-slate-800">
      {label}
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={4}
        className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm leading-6"
      />
    </label>
  );
}
