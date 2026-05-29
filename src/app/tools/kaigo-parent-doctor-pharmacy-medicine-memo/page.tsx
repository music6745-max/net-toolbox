"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=doctor_pharmacy_medicine_info";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-doctor-pharmacy-prescription-info-list?utm_source=net-toolbox&utm_medium=referral&utm_campaign=doctor_pharmacy_medicine_info";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8382989";

export default function KaigoParentDoctorPharmacyMedicineMemoPage() {
  const [recordDate, setRecordDate] = useState("");
  const [hospitals, setHospitals] = useState("");
  const [pharmacies, setPharmacies] = useState("");
  const [prescriptionMeds, setPrescriptionMeds] = useState("");
  const [otcSupplements, setOtcSupplements] = useState("");
  const [allergyNotes, setAllergyNotes] = useState("");
  const [updateHistory, setUpdateHistory] = useState("");
  const [familyShare, setFamilyShare] = useState("");
  const [consultQuestions, setConsultQuestions] = useState("");

  const output = useMemo(() => {
    return [
      "【高齢親 医療機関・薬局・薬情報メモ】",
      recordDate ? `確認日: ${recordDate}` : "確認日: 未入力",
      "",
      "■ かかりつけ医・医療機関",
      hospitals || "未入力",
      "",
      "■ 利用している薬局",
      pharmacies || "未入力",
      "",
      "■ 処方薬メモ",
      prescriptionMeds || "未入力",
      "",
      "■ 市販薬・サプリ・健康食品メモ",
      otcSupplements || "未入力",
      "",
      "■ アレルギー・過去に困ったこと",
      allergyNotes || "未入力",
      "",
      "■ 更新履歴・次に確認すること",
      updateHistory || "未入力",
      "",
      "■ 家族への共有事項",
      familyShare || "未入力",
      "",
      "■ 医師・薬剤師へ確認したいこと",
      consultQuestions || "未入力",
      "",
      "※このメモは家族内の情報整理用です。お薬手帳の代わりにはなりません。薬の飲み合わせ、副作用、用法、服薬変更、受診要否の判断はできません。気になることは、かかりつけ医、薬剤師、看護師などの専門職へ確認してください。",
    ].join("\n");
  }, [
    allergyNotes,
    consultQuestions,
    familyShare,
    hospitals,
    otcSupplements,
    pharmacies,
    prescriptionMeds,
    recordDate,
    updateHistory,
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">高齢親 医療機関・薬局・薬情報メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          かかりつけ医、薬局、処方薬、市販薬、サプリ、確認日、家族への共有事項をまとめます。
          お薬手帳と併用する家族向けの控えで、服薬や医療判断を行うものではありません。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <MemoField label="確認日" value={recordDate} onChange={setRecordDate} placeholder="例: 2026年5月30日、母のお薬手帳を確認" rows={2} />
            <MemoField
              label="かかりつけ医・医療機関"
              value={hospitals}
              onChange={setHospitals}
              placeholder="例: ○○内科、診療科、担当医、電話番号、次回受診日、家族が把握している受診メモ"
            />
            <MemoField
              label="利用している薬局"
              value={pharmacies}
              onChange={setPharmacies}
              placeholder="例: ○○薬局、電話番号、担当者、いつも伝えていること、薬の受け取り方法"
            />
            <MemoField
              label="処方薬メモ"
              value={prescriptionMeds}
              onChange={setPrescriptionMeds}
              placeholder="例: 薬袋・お薬手帳に書かれている薬名、用法メモ、処方元、確認日"
            />
            <MemoField
              label="市販薬・サプリ・健康食品メモ"
              value={otcSupplements}
              onChange={setOtcSupplements}
              placeholder="例: 本人が買っている市販薬、サプリ、健康食品。飲み合わせは薬剤師へ確認する。"
            />
            <MemoField
              label="アレルギー・過去に困ったこと"
              value={allergyNotes}
              onChange={setAllergyNotes}
              placeholder="例: 家族が聞いているアレルギー、過去に合わなかった薬、詳細確認が必要なこと"
            />
            <MemoField
              label="更新履歴・次に確認すること"
              value={updateHistory}
              onChange={setUpdateHistory}
              placeholder="例: 5/30 お薬手帳を確認。次回受診後に処方変更がないか確認。"
            />
            <MemoField
              label="家族への共有事項"
              value={familyShare}
              onChange={setFamilyShare}
              placeholder="例: 薬の保管場所、薬局への連絡担当、別居家族へ共有する内容"
            />
            <MemoField
              label="医師・薬剤師へ確認したいこと"
              value={consultQuestions}
              onChange={setConsultQuestions}
              placeholder="例: 飲み合わせ、飲み忘れ時の対応、サプリを続けてよいか、次回持参するもの"
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
              医療機関・薬局・薬情報を家族で共有する方法を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              親のかかりつけ医・薬局・処方薬情報まとめテンプレート集を見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは家族内の情報整理用です。お薬手帳の代わりにはなりません。
        薬の飲み合わせ、副作用、用法、服薬変更、受診要否の判断は、かかりつけ医、薬剤師、看護師などの専門職へ確認してください。
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
