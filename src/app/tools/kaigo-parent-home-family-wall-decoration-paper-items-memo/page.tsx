"use client";

import { useMemo, useState } from "react";

const TOOL_SLUG = "kaigo-parent-home-family-wall-decoration-paper-items-memo";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-home-family-wall-decoration-paper-items-record?utm_source=net-toolbox&utm_medium=tool&utm_campaign=kaigo-parent-home-family-wall-decoration-paper-items-memo";
const BOOTH_URL =
  "https://kaigo-okane.booth.pm/items/8383442?utm_source=net-toolbox&utm_medium=tool&utm_campaign=kaigo-parent-home-family-wall-decoration-paper-items-memo&utm_content=single_template";
const FULL_PACK_URL =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=net-toolbox&utm_medium=tool&utm_campaign=kaigo-parent-home-family-wall-decoration-paper-items-memo&utm_content=full_pack";

const initialMemo = {
  recordDate: "",
  familyMember: "",
  itemName: "",
  place: "",
  appearance: "",
  parentWords: "",
  keepSeparate: "",
  nextReview: "",
};

type MemoKey = keyof typeof initialMemo;

const fields: Array<{
  key: MemoKey;
  label: string;
  placeholder: string;
  rows?: number;
}> = [
  {
    key: "recordDate",
    label: "記録日",
    placeholder: "2026-06-02",
  },
  {
    key: "familyMember",
    label: "記録した家族",
    placeholder: "長男、次女、孫など",
  },
  {
    key: "itemName",
    label: "壁飾り・紙ものの呼び方",
    placeholder: "玄関の黒い額、茶の間の古い写真立て、柱の横の賞状など",
    rows: 2,
  },
  {
    key: "place",
    label: "掛けられていた部屋・場所",
    placeholder: "玄関、廊下、茶の間、座敷、寝室、柱の横など",
    rows: 2,
  },
  {
    key: "appearance",
    label: "見た目・一緒に覚えておきたい特徴",
    placeholder: "額の色、紙の大きさ、写真立ての形、いつも一緒に掛かっていたものなど",
    rows: 3,
  },
  {
    key: "parentWords",
    label: "親が話してくれた由来・ひとこと",
    placeholder: "いつ頃からある、誰からもらった、昔からこの場所だった、など。分かる範囲だけで十分です。",
    rows: 3,
  },
  {
    key: "keepSeparate",
    label: "このメモで扱わないこと",
    placeholder:
      "氏名、受賞歴、学校名、団体名、写真の人物、連絡先、評価額、売却、譲渡、廃棄、鑑定、相続評価は別で確認する、など",
    rows: 3,
  },
  {
    key: "nextReview",
    label: "次に見返すこと",
    placeholder: "次回の帰省で写真を撮る、家族に呼び方を聞く、同じ部屋の紙ものをまとめて見る、など",
    rows: 3,
  },
];

function buildOutput(memo: typeof initialMemo) {
  return [
    "高齢親の家の壁飾り・紙ものまわりメモ",
    `記録日: ${memo.recordDate || "未入力"}`,
    `記録した家族: ${memo.familyMember || "未入力"}`,
    "",
    `壁飾り・紙ものの呼び方: ${memo.itemName || "未入力"}`,
    `掛けられていた部屋・場所: ${memo.place || "未入力"}`,
    `見た目・一緒に覚えておきたい特徴: ${memo.appearance || "未入力"}`,
    `親が話してくれた由来・ひとこと: ${memo.parentWords || "未入力"}`,
    "",
    `このメモで扱わないこと: ${
      memo.keepSeparate ||
      "氏名、受賞歴、学校名、団体名、写真の人物、連絡先、評価額、売却、譲渡、廃棄、鑑定、相続評価は書かない"
    }`,
    `次に見返すこと: ${memo.nextReview || "未入力"}`,
  ].join("\n");
}

export default function KaigoParentHomeFamilyWallDecorationPaperItemsMemoPage() {
  const [memo, setMemo] = useState(initialMemo);
  const [copied, setCopied] = useState(false);
  const output = useMemo(() => buildOutput(memo), [memo]);

  const updateMemo = (key: MemoKey, value: string) => {
    setMemo((current) => ({ ...current, [key]: value }));
    setCopied(false);
  };

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <header className="mb-8">
        <p className="mb-2 text-sm font-semibold text-sky-700">親のこと整理ナビ連携ツール</p>
        <h1 className="text-2xl font-bold tracking-normal text-slate-950 sm:text-3xl">
          高齢親の家の壁飾り・紙ものまわりメモメーカー
        </h1>
        <p className="mt-4 max-w-3xl leading-7 text-slate-700">
          額縁、賞状、写真立て、カレンダー、ポスターなど、壁や柱に掛けられていた紙ものを家族内で見返すためのメモです。
          氏名・写真の中身・受賞歴・鑑定・相続評価などとは分けて、呼び方や置かれていた場所だけを控えます。
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-slate-950">メモを入力</h2>
          <div className="space-y-4">
            {fields.map((field) => (
              <label key={field.key} className="block">
                <span className="mb-1 block text-sm font-semibold text-slate-800">{field.label}</span>
                <textarea
                  value={memo[field.key]}
                  onChange={(event) => updateMemo(field.key, event.target.value)}
                  rows={field.rows ?? 1}
                  placeholder={field.placeholder}
                  className="w-full resize-y rounded-md border border-slate-300 px-3 py-2 text-sm leading-6 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </label>
            ))}
          </div>
        </section>

        <aside className="space-y-5">
          <section className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="text-lg font-bold text-slate-950">コピー用メモ</h2>
              <button
                type="button"
                onClick={copyOutput}
                className="rounded-md bg-sky-700 px-3 py-2 text-sm font-semibold text-white hover:bg-sky-800"
              >
                {copied ? "コピー済み" : "コピー"}
              </button>
            </div>
            <pre className="min-h-80 whitespace-pre-wrap rounded-md bg-white p-4 text-sm leading-6 text-slate-800 ring-1 ring-slate-200">
              {output}
            </pre>
          </section>

          <section className="rounded-lg border border-sky-200 bg-sky-50 p-5">
            <h2 className="mb-3 text-lg font-bold text-slate-950">関連テンプレート</h2>
            <p className="mb-4 text-sm leading-6 text-slate-700">
              複数の部屋や紙ものをPDF/Excelで控える場合は、BOOTH版とフルパックを使えます。
              この無料ツールは、まず短い家族内メモを作るための簡易版です。
            </p>
            <div className="grid gap-2">
              <a className="rounded-md bg-sky-700 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-sky-800" href={BOOTH_URL}>
                P88単品を見る
              </a>
              <a className="rounded-md border border-sky-300 bg-white px-3 py-2 text-center text-sm font-semibold text-sky-800 hover:border-sky-600" href={FULL_PACK_URL}>
                フルパックを見る
              </a>
              <a className="rounded-md border border-slate-300 bg-white px-3 py-2 text-center text-sm font-semibold text-slate-800 hover:border-slate-600" href={GUIDE_URL}>
                使い方ガイドを見る
              </a>
            </div>
          </section>

          <section className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
            <h2 className="mb-2 font-bold">記録しないこと</h2>
            <p>
              氏名、受賞歴、学校名、団体名、写真の人物、連絡先、評価額、売却、譲渡、廃棄、鑑定、相続評価、個人情報、認証情報、決済情報は入力しません。
              このツールは家族内の思い出整理用です。
            </p>
          </section>
        </aside>
      </div>

      <p className="mt-8 text-xs text-slate-500">tool: {TOOL_SLUG}</p>
    </main>
  );
}
