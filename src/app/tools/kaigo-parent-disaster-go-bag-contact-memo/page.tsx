"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_disaster_go_bag";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/elderly-parent-disaster-go-bag-contact-list?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_disaster_go_bag";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8382972";

export default function KaigoParentDisasterGoBagContactMemoPage() {
  const [parentName, setParentName] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [goBagItems, setGoBagItems] = useState("");
  const [medicines, setMedicines] = useState("");
  const [contactList, setContactList] = useState("");
  const [evacuationPlaces, setEvacuationPlaces] = useState("");
  const [medicalInfo, setMedicalInfo] = useState("");
  const [careServiceContacts, setCareServiceContacts] = useState("");
  const [familyRoles, setFamilyRoles] = useState("");
  const [nextChecks, setNextChecks] = useState("");

  const output = useMemo(() => {
    return [
      "【高齢親 災害時持ち出し・連絡先メモ】",
      parentName ? `対象者: ${parentName}` : "対象者: 未入力",
      updateDate ? `更新日: ${updateDate}` : "更新日: 未入力",
      "",
      "■ 持ち出し品・補充するもの",
      goBagItems || "未入力",
      "",
      "■ 薬・お薬手帳・医療まわり",
      medicines || "未入力",
      "",
      "■ 緊急連絡先",
      contactList || "未入力",
      "",
      "■ 避難先候補・確認先",
      evacuationPlaces || "未入力",
      "",
      "■ 医療・介護で配慮が必要なこと",
      medicalInfo || "未入力",
      "",
      "■ ケアマネ・介護サービス・地域の連絡先",
      careServiceContacts || "未入力",
      "",
      "■ 家族の役割分担",
      familyRoles || "未入力",
      "",
      "■ 次回確認すること",
      nextChecks || "未入力",
      "",
      "※このメモは家族内の情報整理用です。避難判断、防災計画、備蓄量、医療・介護対応、福祉避難所の利用可否を判断するものではありません。災害時の行動や避難先は、自治体、消防、防災情報、医療機関、担当ケアマネジャーなどの公式情報を確認してください。パスワード、口座番号、マイナンバーなどの機密情報は記録しないでください。",
    ].join("\n");
  }, [
    careServiceContacts,
    contactList,
    evacuationPlaces,
    familyRoles,
    goBagItems,
    medicalInfo,
    medicines,
    nextChecks,
    parentName,
    updateDate,
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">高齢親 災害時持ち出し・連絡先メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          高齢の親の災害時に備えて、持ち出し品、薬、緊急連絡先、避難先候補、医療・介護連絡先、家族の役割を一枚の手元メモに整理します。
          避難判断ではなく、家族で確認先を見返すためのメモ作成ツールです。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <label className="block text-sm font-semibold text-slate-800">
              対象者
              <input
                type="text"
                value={parentName}
                onChange={(event) => setParentName(event.target.value)}
                placeholder="例: 母"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </label>
            <label className="block text-sm font-semibold text-slate-800">
              更新日
              <input
                type="date"
                value={updateDate}
                onChange={(event) => setUpdateDate(event.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </label>
            <MemoField
              label="持ち出し品・補充するもの"
              value={goBagItems}
              onChange={setGoBagItems}
              placeholder="例: 水、非常食、眼鏡、補聴器電池、充電器、保険証コピー、衛生用品"
            />
            <MemoField
              label="薬・お薬手帳・医療まわり"
              value={medicines}
              onChange={setMedicines}
              placeholder="例: 毎日飲む薬、お薬手帳の保管場所、薬局、次回補充確認"
            />
            <MemoField
              label="緊急連絡先"
              value={contactList}
              onChange={setContactList}
              placeholder="例: 家族代表、近所の人、親族、かかりつけ医、薬局"
            />
            <MemoField
              label="避難先候補・確認先"
              value={evacuationPlaces}
              onChange={setEvacuationPlaces}
              placeholder="例: 近隣避難所、親族宅、福祉避難所の確認窓口、自治体ページ"
            />
            <MemoField
              label="医療・介護で配慮が必要なこと"
              value={medicalInfo}
              onChange={setMedicalInfo}
              placeholder="例: 歩行時の注意、食事制限、認知面の不安、車椅子や杖の有無"
            />
            <MemoField
              label="ケアマネ・介護サービス・地域の連絡先"
              value={careServiceContacts}
              onChange={setCareServiceContacts}
              placeholder="例: ケアマネ、訪問介護、デイサービス、地域包括支援センター"
            />
            <MemoField
              label="家族の役割分担"
              value={familyRoles}
              onChange={setFamilyRoles}
              placeholder="例: 誰が連絡、補充、避難先確認、迎え、鍵確認を担当するか"
            />
            <MemoField
              label="次回確認すること"
              value={nextChecks}
              onChange={setNextChecks}
              placeholder="例: 薬の期限、避難先の最新情報、連絡先変更、持ち出し袋の中身"
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
          <pre className="mt-4 min-h-[680px] whitespace-pre-wrap rounded-md bg-slate-50 p-4 text-sm leading-6 text-slate-800">
            {output}
          </pre>
          <div className="mt-5 space-y-3 rounded-md border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
            <p className="font-bold text-slate-900">次の導線</p>
            <a className="block font-semibold text-blue-700 hover:underline" href={KAIGO_NAVI_URL}>
              親のこと整理ナビで関連テンプレートを診断する
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={GUIDE_URL}>
              高齢親の災害時持ち出し品・連絡先を家族で整理する方法を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              高齢親の災害時持ち出し・連絡先整理テンプレート集を見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは家族内の情報整理用です。避難判断、防災計画、備蓄量、医療・介護対応、福祉避難所の利用可否を判断するものではありません。
        災害時の行動や避難先は、自治体、消防、防災情報、医療機関、担当ケアマネジャーなどの公式情報を確認してください。
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
