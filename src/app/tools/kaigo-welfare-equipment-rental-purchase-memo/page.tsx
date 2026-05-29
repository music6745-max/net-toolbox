"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=welfare_equipment_memo";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/welfare-equipment-rental-purchase-family-check?utm_source=net-toolbox&utm_medium=referral&utm_campaign=welfare_equipment_memo";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8382980";

export default function KaigoWelfareEquipmentRentalPurchaseMemoPage() {
  const [targetPerson, setTargetPerson] = useState("");
  const [lifeScenes, setLifeScenes] = useState("");
  const [candidateItems, setCandidateItems] = useState("");
  const [questions, setQuestions] = useState("");
  const [familyOpinions, setFamilyOpinions] = useState("");
  const [costNotes, setCostNotes] = useState("");
  const [homeSetup, setHomeSetup] = useState("");
  const [nextContacts, setNextContacts] = useState("");

  const output = useMemo(() => {
    return [
      "【福祉用具 レンタル・購入前確認メモ】",
      targetPerson ? `対象者: ${targetPerson}` : "対象者: 未入力",
      "",
      "■ 生活場面ごとの困りごと",
      lifeScenes || "未入力",
      "",
      "■ 気になっている道具名・候補",
      candidateItems || "未入力",
      "",
      "■ ケアマネ・福祉用具事業者へ確認したいこと",
      questions || "未入力",
      "",
      "■ 家族の意見・心配していること",
      familyOpinions || "未入力",
      "",
      "■ パンフレット・見積・費用メモ",
      costNotes || "未入力",
      "",
      "■ 置き場所・動線・使う場面のメモ",
      homeSetup || "未入力",
      "",
      "■ 次に連絡・確認する先",
      nextContacts || "未入力",
      "",
      "※このメモは家族内の情報整理用です。福祉用具の貸与・購入の対象、介護保険の給付可否、本人への適合、自己負担額、安全面の判断は、担当ケアマネジャー、福祉用具事業者、市区町村窓口、医療・リハビリ職などへ確認してください。",
    ].join("\n");
  }, [candidateItems, costNotes, familyOpinions, homeSetup, lifeScenes, nextContacts, questions, targetPerson]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <a href="/tools" className="text-sm font-semibold text-blue-700 hover:underline">
          ツール一覧へ戻る
        </a>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">福祉用具 レンタル・購入前確認メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          ケアマネジャーや福祉用具事業者へ相談する前に、生活場面ごとの困りごと、気になる候補、質問、家族の意見を整理します。
          貸与・購入や制度の判断ではなく、相談前の手元メモ作成ツールです。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <MemoField
              label="対象者"
              value={targetPerson}
              onChange={setTargetPerson}
              placeholder="例: 母、父、同居の祖母など"
              rows={2}
            />
            <MemoField
              label="生活場面ごとの困りごと"
              value={lifeScenes}
              onChange={setLifeScenes}
              placeholder="例: ベッドから起き上がりに時間がかかる、浴室で立ち上がりが不安、玄関の段差が怖い"
            />
            <MemoField
              label="気になっている道具名・候補"
              value={candidateItems}
              onChange={setCandidateItems}
              placeholder="例: 手すり、歩行器、介護ベッド、シャワーチェア、ポータブルトイレ"
            />
            <MemoField
              label="ケアマネ・福祉用具事業者へ確認したいこと"
              value={questions}
              onChange={setQuestions}
              placeholder="例: 介護保険対象か、試用できるか、置き場所の確認は必要か、返却や交換の流れ"
            />
            <MemoField
              label="家族の意見・心配していること"
              value={familyOpinions}
              onChange={setFamilyOpinions}
              placeholder="例: 本人が使いたがるか、夜間に安全に使えるか、家族が片付けられるか"
            />
            <MemoField
              label="パンフレット・見積・費用メモ"
              value={costNotes}
              onChange={setCostNotes}
              placeholder="例: パンフレット名、見積で聞いた金額、月額、購入候補の価格、未確認の費用"
            />
            <MemoField
              label="置き場所・動線・使う場面のメモ"
              value={homeSetup}
              onChange={setHomeSetup}
              placeholder="例: 寝室のベッド横、トイレまでの廊下、浴室入口、玄関段差"
            />
            <MemoField
              label="次に連絡・確認する先"
              value={nextContacts}
              onChange={setNextContacts}
              placeholder="例: 担当ケアマネ、福祉用具事業者、市区町村窓口、訪問リハビリ、家族会議"
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
              福祉用具レンタル・購入前に家族で整理することを読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              福祉用具レンタル・購入前確認メモ集を見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは家族内の情報整理用です。福祉用具の貸与・購入の対象、介護保険の給付可否、本人への適合、
        自己負担額、安全面の判断は、担当ケアマネジャー、福祉用具事業者、市区町村窓口、医療・リハビリ職などへ確認してください。
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
