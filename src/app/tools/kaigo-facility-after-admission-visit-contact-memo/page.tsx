"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=facility_after_admission_contact";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/facility-after-admission-family-visit-contact-memo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=facility_after_admission_contact";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8382968";

export default function KaigoFacilityAfterAdmissionVisitContactMemoPage() {
  const [visitDate, setVisitDate] = useState("");
  const [facilityName, setFacilityName] = useState("");
  const [visitRecord, setVisitRecord] = useState("");
  const [giftItems, setGiftItems] = useState("");
  const [facilityNotice, setFacilityNotice] = useState("");
  const [familyShare, setFamilyShare] = useState("");
  const [nextQuestions, setNextQuestions] = useState("");
  const [contactPeople, setContactPeople] = useState("");

  const output = useMemo(() => {
    return [
      "【施設入所後 面会・差し入れ・連絡メモ】",
      visitDate ? `面会・連絡日: ${visitDate}` : "面会・連絡日: 未入力",
      facilityName ? `施設名: ${facilityName}` : "施設名: 未入力",
      "",
      "■ 面会時の様子・家族が気づいたこと",
      visitRecord || "未入力",
      "",
      "■ 差し入れ・持ち物確認",
      giftItems || "未入力",
      "",
      "■ 施設から聞いた連絡・確認事項",
      facilityNotice || "未入力",
      "",
      "■ 家族へ共有したいこと",
      familyShare || "未入力",
      "",
      "■ 次回、施設・ケアマネジャーへ確認したいこと",
      nextQuestions || "未入力",
      "",
      "■ 連絡先・担当者メモ",
      contactPeople || "未入力",
      "",
      "※このメモは家族内の情報整理用です。施設の公式記録、介護記録、評価、苦情記録、契約・医療判断の代替ではありません。差し入れ・持ち物・面会・連絡ルールは、必ず施設、担当ケアマネジャー、公式窓口へ確認してください。",
    ].join("\n");
  }, [contactPeople, facilityName, facilityNotice, familyShare, giftItems, nextQuestions, visitDate, visitRecord]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <a href="/tools" className="text-sm font-semibold text-blue-700 hover:underline">
          ツール一覧へ戻る
        </a>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">施設入所後 面会・連絡メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          親が施設へ入所した後の面会記録、差し入れ・持ち物、施設からの連絡、家族共有事項を一枚の手元メモに整理します。
          公式記録ではなく、家族内で確認漏れを減らすためのメモ作成ツールです。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <label className="block text-sm font-semibold text-slate-800">
              面会・連絡日
              <input
                type="date"
                value={visitDate}
                onChange={(event) => setVisitDate(event.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </label>
            <label className="block text-sm font-semibold text-slate-800">
              施設名
              <input
                type="text"
                value={facilityName}
                onChange={(event) => setFacilityName(event.target.value)}
                placeholder="例: 〇〇ホーム"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </label>
            <MemoField
              label="面会時の様子・家族が気づいたこと"
              value={visitRecord}
              onChange={setVisitRecord}
              placeholder="例: 表情、食事、会話、衣類、居室で気になったこと"
            />
            <MemoField
              label="差し入れ・持ち物確認"
              value={giftItems}
              onChange={setGiftItems}
              placeholder="例: 持参したもの、施設に確認した可否、次回補充するもの"
            />
            <MemoField
              label="施設から聞いた連絡・確認事項"
              value={facilityNotice}
              onChange={setFacilityNotice}
              placeholder="例: 生活の様子、変更点、家族に確認してほしいこと"
            />
            <MemoField
              label="家族へ共有したいこと"
              value={familyShare}
              onChange={setFamilyShare}
              placeholder="例: 兄弟姉妹へ伝えること、次回面会の担当、写真や書類の共有"
            />
            <MemoField
              label="次回、施設・ケアマネジャーへ確認したいこと"
              value={nextQuestions}
              onChange={setNextQuestions}
              placeholder="例: 差し入れルール、面会時間、体調変化時の連絡方法"
            />
            <MemoField
              label="連絡先・担当者メモ"
              value={contactPeople}
              onChange={setContactPeople}
              placeholder="例: 施設窓口、担当職員、ケアマネジャー、家族代表"
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
              施設入所後の面会・差し入れ・連絡を家族で整理する方法を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              施設入所後の面会・差し入れ・連絡整理メモテンプレート集を見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは家族内の情報整理用です。施設の公式記録、介護記録、施設評価、苦情記録、契約・医療判断の代替ではありません。
        差し入れ・持ち物・面会・連絡ルールは、施設、担当ケアマネジャー、公式窓口へ確認してください。
      </section>
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
