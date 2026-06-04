"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_people_names_relationship";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-people-names-relationship-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_people_names_relationship";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383174";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";
const NOTE_URL = "https://note.com/mild_quail6092/n/n0d18a8165daf";

type FieldKey =
  | "targetPerson"
  | "recordDate"
  | "parentCallName"
  | "familyKnownAs"
  | "roughRelationship"
  | "sceneTopic"
  | "familyMemo"
  | "avoidInfo"
  | "nextCheck";

const initialValues: Record<FieldKey, string> = {
  targetPerson: "",
  recordDate: "",
  parentCallName: "",
  familyKnownAs: "",
  roughRelationship: "",
  sceneTopic: "",
  familyMemo: "",
  avoidInfo: "",
  nextCheck: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "targetPerson",
    label: "対象の親・共有範囲",
    placeholder: "例: 母が電話で話していた人の呼び方を、長女・長男で家族内共有。外部公開には使わない。",
    rows: 2,
  },
  {
    key: "recordDate",
    label: "記録日・聞いた場面",
    placeholder: "例: 2026年6月4日、夕方の電話で昔の近所の人の話が出たので控えた。",
    rows: 2,
  },
  {
    key: "parentCallName",
    label: "親が話す呼び方",
    placeholder:
      "例:\n- ○○おじさん\n- △△ちゃん\n- 畑の近くの□□さん\n※正式氏名や続柄を断定する欄ではない",
    rows: 5,
  },
  {
    key: "familyKnownAs",
    label: "家族内で分かる名前・呼び方（任意）",
    placeholder:
      "例:\n- 祖母の弟さんかもしれない\n- 昔の職場の人として家族内では話している\n- 分からない場合は空欄にする",
    rows: 5,
  },
  {
    key: "roughRelationship",
    label: "親から見たざっくりした関係",
    placeholder:
      "例:\n- 親戚として話している\n- 昔の同級生らしい\n- 近所でよく会っていた人\n※戸籍、本籍、正式続柄、相続判断には使わない",
    rows: 5,
  },
  {
    key: "sceneTopic",
    label: "話に出る場面・話題",
    placeholder:
      "例:\n- お祭りの話で出てくる\n- 昔の仕事の話で出てくる\n- 台所や畑の思い出と一緒に出てくる",
    rows: 5,
  },
  {
    key: "familyMemo",
    label: "家族内メモ",
    placeholder:
      "例:\n- 誰のことか家族内でまだ確定しない\n- 次に昔の写真を見ながら聞いてみる\n- 評価やもめごとの記録にはしない",
    rows: 4,
  },
  {
    key: "avoidInfo",
    label: "このメモに書かない情報",
    placeholder:
      "例: 住所、電話番号、メール、LINE、SNS、勤務先、会員番号、ログイン情報、認証情報、支払い情報、葬儀連絡先、人物評価は書かない。",
    rows: 4,
  },
  {
    key: "nextCheck",
    label: "次に本人へ聞いてみたいこと",
    placeholder: "例: 次の電話で、その人をどんな場面で覚えているのかだけ無理なく聞いてみる。",
    rows: 3,
  },
];

export default function KaigoParentPeopleNamesRelationshipMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【高齢親が話す人の呼び方・関係性メモ】",
      values.targetPerson ? "対象の親・共有範囲: " + values.targetPerson : "対象の親・共有範囲: 未入力",
      values.recordDate ? "記録日・聞いた場面: " + values.recordDate : "記録日・聞いた場面: 未入力",
      "",
      "■ 親が話す呼び方",
      values.parentCallName || "未入力",
      "",
      "■ 家族内で分かる名前・呼び方（任意）",
      values.familyKnownAs || "未入力",
      "",
      "■ 親から見たざっくりした関係",
      values.roughRelationship || "未入力",
      "",
      "■ 話に出る場面・話題",
      values.sceneTopic || "未入力",
      "",
      "■ 家族内メモ",
      values.familyMemo || "未入力",
      "",
      "■ このメモに書かない情報",
      values.avoidInfo ||
        "住所、電話番号、メール、LINE、SNS、勤務先、会員番号、ログイン情報、認証情報、支払い情報、葬儀連絡先、人物評価は書かない。",
      "",
      "■ 次に本人へ聞いてみたいこと",
      values.nextCheck || "未入力",
      "",
      "※このメモは、親が会話で話す人の呼び方や関係性を家族内で見返すための控えです。",
      "※連絡先管理、住所録、家系図、戸籍や正式続柄の確認、相続、遺言、葬儀連絡先作成、人物評価、家族内のもめごとの整理には使いません。",
      "※個人情報や秘密情報は書き込まず、必要な確認は家族や関係者と別途行ってください。",
    ].join("\n");
  }, [values]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
  };

  const updateField = (key: FieldKey, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <a href="/tools" className="text-sm font-semibold text-blue-700 hover:underline">
          ツール一覧へ戻る
        </a>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">
          高齢親が話す人の呼び方・関係性メモメーカー
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          親が会話で使う「○○おじさん」「△△ちゃん」などの呼び方を、家族内で誰の話か見返す控えとして整理します。
          連絡先管理、住所録、正式な続柄確認、家系図、相続や葬儀連絡先の整理には使わないでください。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            {fields.map((field) => (
              <MemoField
                key={field.key}
                label={field.label}
                value={values[field.key]}
                onChange={(value) => updateField(field.key, value)}
                placeholder={field.placeholder}
                rows={field.rows}
              />
            ))}
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
            <p className="font-bold text-slate-900">関連リンク</p>
            <a className="block font-semibold text-blue-700 hover:underline" href={KAIGO_NAVI_URL}>
              親のこと整理ナビで関連テンプレートを見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={GUIDE_URL}>
              人の呼び方・関係性メモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              人の呼び方・関係性メモ テンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={NOTE_URL}>
              note記事を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={FULL_PACK_URL}>
              介護まるごと総合パックを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは、家族内で親の会話を見返すためのメモです。住所、電話番号、メール、SNS、ログイン情報、会員番号、支払い情報などは記録しないでください。
        正式な続柄、相続、遺言、葬儀連絡先、人物評価、家族内のもめごとの整理には使わず、必要な確認は別途行ってください。
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
