"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_neighborhood_contact_list";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-neighborhood-contact-list?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_neighborhood_contact_list";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383033";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

export default function KaigoParentNeighborhoodContactListMemoPage() {
  const [checkDate, setCheckDate] = useState("");
  const [target, setTarget] = useState("");
  const [contactPurpose, setContactPurpose] = useState("");
  const [neighborContacts, setNeighborContacts] = useState("");
  const [communityContacts, setCommunityContacts] = useState("");
  const [managementContacts, setManagementContacts] = useState("");
  const [frequentPlaces, setFrequentPlaces] = useState("");
  const [familyNotes, setFamilyNotes] = useState("");
  const [nextReview, setNextReview] = useState("");

  const output = useMemo(() => {
    return [
      "【高齢親 近所付き合い・地域連絡先 整理メモ】",
      checkDate ? `確認日: ${checkDate}` : "確認日: 未入力",
      target ? `対象者（呼び名）: ${target}` : "対象者（呼び名）: 未入力",
      "",
      "■ 連絡してよい用件の目安（家族内メモ）",
      contactPurpose || "未入力",
      "",
      "■ 近所の人・見守り先（呼び名/関係性/連絡手段/注意点）",
      neighborContacts || "未入力",
      "",
      "■ 町内会・自治会・地域の窓口（役割/連絡手段/連絡してよい条件）",
      communityContacts || "未入力",
      "",
      "■ 管理会社・大家・管理組合（窓口/対応時間/必要な確認項目）",
      managementContacts || "未入力",
      "",
      "■ よく行く場所・その他（分かる範囲だけ）",
      frequentPlaces || "未入力",
      "",
      "■ 家族共有メモ（共有範囲/更新ルール/見直し観点）",
      familyNotes || "未入力",
      "",
      "■ 次回見直すタイミング",
      nextReview || "未入力",
      "",
      "※このメモは家族内で連絡先と補足を見返すための記録です。緊急時の判断、医療判断、介護サービスの利用可否判断、契約判断は扱いません。急ぎの連絡や判断が必要な場合は、自治体や関係窓口、公式の案内に従って確認してください。氏名・電話番号・住所などの個人情報は必要な範囲に絞り、家族内で管理してください。パスワード・暗証番号・ログイン情報・カード番号・口座番号・マイナンバー等の秘密情報は記録しないでください。",
    ].join("\n");
  }, [
    checkDate,
    communityContacts,
    contactPurpose,
    familyNotes,
    frequentPlaces,
    managementContacts,
    neighborContacts,
    nextReview,
    target,
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">高齢親 近所付き合い・地域連絡先メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          近所の人、町内会・自治会、管理会社などの連絡先と補足を、家族内で見返しやすい形式にそろえるメモを作ります。秘密情報は記録しないでください。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <MemoField
              label="確認日"
              value={checkDate}
              onChange={setCheckDate}
              placeholder="例: 2026年5月31日、月末の見直し日"
              rows={2}
            />
            <MemoField
              label="対象者（呼び名）"
              value={target}
              onChange={setTarget}
              placeholder={"例:\n- 母（実家）\n- 父（義実家）\n※氏名や住所など個人情報は必要最小限"}
              rows={3}
            />
            <MemoField
              label="連絡してよい用件の目安（家族内メモ）"
              value={contactPurpose}
              onChange={setContactPurpose}
              placeholder={
                "例:\n- 連絡が取れない時に「最近見かけたか」だけ確認\n- 回覧や自治会連絡の窓口確認\n- 生活音が聞こえない日が続いた時に声かけ\n※緊急時は公式連絡先へ"
              }
            />
            <MemoField
              label="近所の人・見守り先（呼び名/関係性/連絡手段/注意点）"
              value={neighborContacts}
              onChange={setNeighborContacts}
              placeholder={
                "例:\n- 斜め向かいのAさん / 近所 / 電話（必要な範囲だけ） / 夕方は出づらい\n- 同じ階のBさん / 回覧 / メッセージ / 急ぎでない用件のみ\n※個人情報は必要最小限、家族内で管理"
              }
            />
            <MemoField
              label="町内会・自治会・地域の窓口（役割/連絡手段/連絡してよい条件）"
              value={communityContacts}
              onChange={setCommunityContacts}
              placeholder={
                "例:\n- 町内会 回覧 / 連絡網 / 回覧が止まった時だけ確認\n- 自治会 防災担当 / 掲示板 / 年1回の更新連絡\n※分かる範囲だけでOK"
              }
            />
            <MemoField
              label="管理会社・大家・管理組合（窓口/対応時間/必要な確認項目）"
              value={managementContacts}
              onChange={setManagementContacts}
              placeholder={
                "例:\n- 管理会社 代表窓口 / 平日9-17 / 水漏れ・鍵の紛失などの連絡先\n- 大家さん / 電話 / 室内修繕の窓口\n※暗証番号や鍵の保管場所など秘密情報は書かない"
              }
            />
            <MemoField
              label="よく行く場所・その他（分かる範囲だけ）"
              value={frequentPlaces}
              onChange={setFrequentPlaces}
              placeholder={"例:\n- 近所の商店 / 営業時間 / 配達の相談窓口\n- いつも行く薬局 / 連絡先 / 受け取りの相談窓口\n※判断や手続きの代替はしない"}
            />
            <MemoField
              label="家族共有メモ（共有範囲/更新ルール/見直し観点）"
              value={familyNotes}
              onChange={setFamilyNotes}
              placeholder={"例:\n- 共有範囲: きょうだい3人のみ\n- 更新: 変更があったら追記、月末に見直し\n- 外部転送しない"}
            />
            <MemoField
              label="次回見直すタイミング"
              value={nextReview}
              onChange={setNextReview}
              placeholder="例: 次回帰省後、月末の共有会、年1の更新日"
              rows={2}
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
              近所付き合い・地域連絡先の整理方法を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              近所付き合い・地域連絡先 整理メモテンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={FULL_PACK_URL}>
              介護まるごと総合パックを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは家族内の連絡先整理メモです。秘密情報は記録しないでください。緊急時の判断、医療判断、契約判断は扱いません。急ぎの連絡や判断が必要な場合は、関係窓口や公式の案内に従って確認してください。
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
