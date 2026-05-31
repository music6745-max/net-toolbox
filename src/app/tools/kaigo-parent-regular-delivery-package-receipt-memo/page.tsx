"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=regular_delivery_package_receipt";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-regular-delivery-package-receipt-record?utm_source=net-toolbox&utm_medium=referral&utm_campaign=regular_delivery_package_receipt";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383076";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383305";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

type FieldKey =
  | "targetHome"
  | "recordDate"
  | "deliveryListMemo"
  | "subscriptionMemo"
  | "monthlyScheduleMemo"
  | "receiptHandlingMemo"
  | "nextCheckMemo"
  | "familyShareMemo"
  | "nextReview";

const initialValues: Record<FieldKey, string> = {
  targetHome: "",
  recordDate: "",
  deliveryListMemo: "",
  subscriptionMemo: "",
  monthlyScheduleMemo: "",
  receiptHandlingMemo: "",
  nextCheckMemo: "",
  familyShareMemo: "",
  nextReview: "",
};

const fields: Array<{ key: FieldKey; label: string; placeholder: string; rows?: number }> = [
  {
    key: "targetHome",
    label: "対象",
    placeholder: "例: 母の実家、父の一人暮らし宅、次回帰省時に見るメモ",
    rows: 2,
  },
  { key: "recordDate", label: "記録日", placeholder: "例: 2026年5月31日、次回帰省時の確認メモ", rows: 2 },
  {
    key: "deliveryListMemo",
    label: "実家に届くもの一覧",
    placeholder: "例:\n- 新聞: 毎朝、郵便受け\n- 牛乳: 週2回、玄関先\n- 食材宅配: 毎週水曜、発泡箱は玄関横\n- 通販: 不定期、本人に確認",
    rows: 6,
  },
  {
    key: "subscriptionMemo",
    label: "通販定期便・継続して届くものメモ",
    placeholder: "例:\n- 食品の定期便: 月1回の目安\n- 日用品: 必要なときだけ届く可能性あり\n- 会員番号や支払い情報はこのメモに書かない\n- 変更が必要そうなことは公式案内を確認",
  },
  {
    key: "monthlyScheduleMemo",
    label: "月別・週別の受け取り予定",
    placeholder: "例:\n- 第1週: 食材宅配\n- 毎週: 新聞、牛乳\n- 月末: 請求書や案内が届く可能性あり\n- 不明なものは次回帰省時に確認",
  },
  {
    key: "receiptHandlingMemo",
    label: "受け取り方・置き場所・家族共有の手がかり",
    placeholder: "例:\n- 受け取り後は台所横の棚へ置く\n- 保冷箱は玄関横に戻す\n- 紙の控えは冷蔵庫横のファイルへ\n- 詳しい契約書や支払い情報は別保管",
  },
  {
    key: "nextCheckMemo",
    label: "次に確認したいこと",
    placeholder: "例:\n- 食材宅配の曜日を本人に確認\n- 不明な箱が届いたら写真ではなく品名だけ家族に共有\n- 契約変更や解約は公式窓口を確認してから判断",
  },
  {
    key: "familyShareMemo",
    label: "家族共有メモ",
    placeholder: "例:\n- 長男・長女へ共有済み\n- 次に見る人は未確認欄だけ確認\n- 個人情報や支払い情報はこのメモにまとめない",
  },
  {
    key: "nextReview",
    label: "次回見直すタイミング",
    placeholder: "例: 次の帰省時、月末、届くものが増えた時、家族の担当が変わる前",
    rows: 2,
  },
];

export default function KaigoParentRegularDeliveryPackageReceiptMemoPage() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);

  const output = useMemo(() => {
    return [
      "【実家 定期便・宅配便 受け取りメモ】",
      values.targetHome ? `対象: ${values.targetHome}` : "対象: 未入力",
      values.recordDate ? `記録日: ${values.recordDate}` : "記録日: 未入力",
      "",
      "■ 実家に届くもの一覧",
      values.deliveryListMemo || "未入力",
      "",
      "■ 通販定期便・継続して届くものメモ",
      values.subscriptionMemo || "未入力",
      "",
      "■ 月別・週別の受け取り予定",
      values.monthlyScheduleMemo || "未入力",
      "",
      "■ 受け取り方・置き場所・家族共有の手がかり",
      values.receiptHandlingMemo || "未入力",
      "",
      "■ 次に確認したいこと",
      values.nextCheckMemo || "未入力",
      "",
      "■ 家族共有メモ",
      values.familyShareMemo || "未入力",
      "",
      "■ 次回見直すタイミング",
      values.nextReview || "未入力",
      "",
      "※このメモは家族内で実家に届く定期便・宅配便の概要を見返すためのものです。契約変更、解約、支払い、配送先変更、置き配設定、問い合わせ、商品やサービスの比較・推薦は扱いません。住所、電話番号、会員番号、注文番号などは必要最小限にし、パスワード、暗証番号、ログイン情報、カード番号、口座番号、本人確認情報はこのメモにまとめないでください。",
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">実家 定期便・宅配便 受け取りメモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          新聞、牛乳、食材宅配、通販定期便など、実家に届くものを家族で見返しやすい形にそろえます。
          契約変更、解約、支払い、配送設定、個人情報の詳しい管理はこのメモに含めないでください。
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
          <pre className="mt-4 min-h-[620px] whitespace-pre-wrap rounded-md bg-slate-50 p-4 text-sm leading-6 text-slate-800">
            {output}
          </pre>
          <div className="mt-5 space-y-3 rounded-md border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
            <p className="font-bold text-slate-900">次の整理</p>
            <a className="block font-semibold text-blue-700 hover:underline" href={KAIGO_NAVI_URL}>
              親のこと整理ナビで関連テンプレートを診断する
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={GUIDE_URL}>
              定期便・宅配便受け取りメモの作り方を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              定期便・宅配便受け取りメモテンプレート集を見る
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
        このツールは家族内で実家に届く定期便・宅配便の概要を整理するためのものです。
        契約変更、解約、支払い、配送先変更、置き配設定、問い合わせ、商品やサービスの比較・推薦は扱いません。
        個人情報、本人確認情報、ログイン情報、支払い情報などは必要最小限に絞り、正式な保管場所で管理してください。
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
