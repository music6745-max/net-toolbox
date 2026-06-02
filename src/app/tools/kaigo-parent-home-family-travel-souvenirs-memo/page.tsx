"use client";

import { useMemo, useState } from "react";

const TOOL_SLUG = "kaigo-parent-home-family-travel-souvenirs-memo";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-home-family-travel-souvenirs-record?utm_source=net-toolbox&utm_medium=tool&utm_campaign=kaigo-parent-home-family-travel-souvenirs-memo";
const BOOTH_URL =
  "https://kaigo-okane.booth.pm/items/8383448?utm_source=net-toolbox&utm_medium=tool&utm_campaign=kaigo-parent-home-family-travel-souvenirs-memo&utm_content=single_template";
const FULL_PACK_URL =
  "https://kaigo-okane.booth.pm/items/8383441?utm_source=net-toolbox&utm_medium=tool&utm_campaign=kaigo-parent-home-family-travel-souvenirs-memo&utm_content=full_pack";

const initialMemo = {
  recordDate: "",
  familyMember: "",
  itemName: "",
  place: "",
  itemType: "",
  appearance: "",
  familyWords: "",
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
    label: "旅行記念品・お土産物の呼び方",
    placeholder: "北海道の置物、温泉のお土産、棚の小さな人形、観光地のキーホルダーなど",
    rows: 2,
  },
  {
    key: "place",
    label: "置かれていた部屋・場所",
    placeholder: "床の間、茶の間の棚、玄関、引き出し、タンス、押し入れなど",
    rows: 2,
  },
  {
    key: "itemType",
    label: "種類・ざっくりした分類",
    placeholder: "置物、小物、箱入りの土産物、キーホルダー、民芸品、絵はがきなど",
    rows: 2,
  },
  {
    key: "appearance",
    label: "見た目の特徴",
    placeholder: "色、形、大きさ、書かれている地名、箱や包みの有無など。価値や真贋の判断は書かないでください。",
    rows: 3,
  },
  {
    key: "familyWords",
    label: "家族内で覚えている呼び方・場面",
    placeholder: "昔から棚にあった、帰省のたびに見ていた、旅行の話題で出てきた、など",
    rows: 3,
  },
  {
    key: "parentWords",
    label: "親が話してくれた由来・ひとこと",
    placeholder: "どこで買った、誰にもらった、いつ頃からある、どの話と一緒に出てきた、など。分かる範囲で十分です。",
    rows: 3,
  },
  {
    key: "keepSeparate",
    label: "このメモで扱わないこと",
    placeholder:
      "査定、売却、真贋、処分、譲渡、税務、相続、輸入や通関、旅行日程、同行者、宿泊先、個人情報、決済情報は別で確認する、など",
    rows: 3,
  },
  {
    key: "nextReview",
    label: "次に見返すこと",
    placeholder: "次の帰省で同じ棚を見る、家族に呼び方を聞く、写真と照合する、など",
    rows: 3,
  },
];

function buildOutput(memo: typeof initialMemo) {
  return [
    "高齢親の家の旅行記念品・お土産物まわりメモ",
    `記録日: ${memo.recordDate || "未入力"}`,
    `記録した家族: ${memo.familyMember || "未入力"}`,
    "",
    `旅行記念品・お土産物の呼び方: ${memo.itemName || "未入力"}`,
    `置かれていた部屋・場所: ${memo.place || "未入力"}`,
    `種類・ざっくりした分類: ${memo.itemType || "未入力"}`,
    `見た目の特徴: ${memo.appearance || "未入力"}`,
    `家族内で覚えている呼び方・場面: ${memo.familyWords || "未入力"}`,
    `親が話してくれた由来・ひとこと: ${memo.parentWords || "未入力"}`,
    "",
    `このメモで扱わないこと: ${
      memo.keepSeparate ||
      "査定、売却、真贋、処分、譲渡、税務、相続、輸入や通関、旅行日程、同行者、宿泊先、個人情報、決済情報は書かない"
    }`,
    `次に見返すこと: ${memo.nextReview || "未入力"}`,
  ].join("\n");
}

export default function KaigoParentHomeFamilyTravelSouvenirsMemoPage() {
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
          高齢親の家の旅行記念品・お土産物まわりメモメーカー
        </h1>
        <p className="mt-4 max-w-3xl leading-7 text-slate-700">
          旅行先の置物、帰省のお土産、観光地の記念品、家族で出かけた時の小物などを家族内で見返すためのメモです。
          査定、売却、真贋、処分、税務、相続、旅行日程、同行者、宿泊先の判断とは分けて、呼び方、場所、見た目だけを控えます。
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
              複数の記念品やお土産物をPDF/Excelで控える場合は、BOOTH版とフルパックを使えます。
              この無料ツールは、まず短い家族内メモを作るための簡易版です。
            </p>
            <div className="grid gap-2">
              <a className="rounded-md bg-sky-700 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-sky-800" href={BOOTH_URL}>
                P91単品を見る
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
              査定、売却、真贋、処分、譲渡、税務、相続、輸入や通関、旅行日程、同行者、宿泊先、個人情報、決済情報は入力しません。
              このツールは家族内の思い出整理用です。
            </p>
          </section>
        </aside>
      </div>

      <p className="mt-8 text-xs text-slate-500">tool: {TOOL_SLUG}</p>
    </main>
  );
}
