"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=care_manager_meeting_todo";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/care-manager-meeting-after-todo-family-share?utm_source=net-toolbox&utm_medium=referral&utm_campaign=care_manager_meeting_todo";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8382960";

export default function KaigoCareManagerMeetingTodoMemoPage() {
  const [meetingDate, setMeetingDate] = useState("");
  const [decidedItems, setDecidedItems] = useState("");
  const [familyTodos, setFamilyTodos] = useState("");
  const [assignedPeople, setAssignedPeople] = useState("");
  const [contacts, setContacts] = useState("");
  const [documents, setDocuments] = useState("");
  const [questions, setQuestions] = useState("");
  const [shareMemo, setShareMemo] = useState("");

  const output = useMemo(() => {
    return [
      "【ケアマネ面談後 家族ToDoメモ】",
      meetingDate ? `面談日: ${meetingDate}` : "面談日: 未入力",
      "",
      "■ 面談で決まったこと",
      decidedItems || "未入力",
      "",
      "■ 家族が次回までにやること",
      familyTodos || "未入力",
      "",
      "■ 担当者・期限",
      assignedPeople || "未入力",
      "",
      "■ 連絡する相手・連絡先",
      contacts || "未入力",
      "",
      "■ 確認する書類・持ち物",
      documents || "未入力",
      "",
      "■ ケアマネ・事業所・自治体へ確認したいこと",
      questions || "未入力",
      "",
      "■ 面談に同席していない家族へ共有する要点",
      shareMemo || "未入力",
      "",
      "※このメモは家族内の面談後整理用です。ケアプランの代替、サービス変更の指示、契約・利用可否・給付・自己負担額の判断には使わず、担当ケアマネジャー、各事業所、自治体へ確認してください。",
    ].join("\n");
  }, [assignedPeople, contacts, decidedItems, documents, familyTodos, meetingDate, questions, shareMemo]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <a href="/tools" className="text-sm font-semibold text-blue-700 hover:underline">
          ツール一覧へ戻る
        </a>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">ケアマネ面談後ToDoメモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          ケアマネジャーとの面談後に、決まったこと、家族がやること、担当者、次回までに確認することを整理します。
          面談内容を判断するツールではなく、家族共有のための手元整理として使うツールです。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <label className="block text-sm font-semibold text-slate-800">
              面談日
              <input
                type="date"
                value={meetingDate}
                onChange={(event) => setMeetingDate(event.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </label>
            <MemoField
              label="面談で決まったこと"
              value={decidedItems}
              onChange={setDecidedItems}
              placeholder="例: 来週からデイサービス見学、訪問看護の相談、次回面談日"
            />
            <MemoField
              label="家族が次回までにやること"
              value={familyTodos}
              onChange={setFamilyTodos}
              placeholder="例: 本人へ希望確認、薬の一覧を探す、事業所からの書類を確認"
            />
            <MemoField
              label="担当者・期限"
              value={assignedPeople}
              onChange={setAssignedPeople}
              placeholder="例: 長男が5/31までに病院へ連絡、次女が書類を写真共有"
            />
            <MemoField
              label="連絡する相手・連絡先"
              value={contacts}
              onChange={setContacts}
              placeholder="ケアマネ、事業所、病院、自治体窓口、家族連絡係"
            />
            <MemoField
              label="確認する書類・持ち物"
              value={documents}
              onChange={setDocuments}
              placeholder="介護保険証、薬の一覧、診察券、契約書、費用説明書など"
            />
            <MemoField
              label="ケアマネ・事業所・自治体へ確認したいこと"
              value={questions}
              onChange={setQuestions}
              placeholder="サービス変更、費用、送迎、契約、次回面談までに聞くこと"
            />
            <MemoField
              label="同席していない家族へ共有する要点"
              value={shareMemo}
              onChange={setShareMemo}
              placeholder="決まったこと、未確認のこと、家族にお願いしたいこと"
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
              ケアマネ面談後に家族でやることを整理する方法を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              ケアマネ面談後の家族ToDoまとめテンプレート集を見る
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
