"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_checkin_contact_log";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-checkin-contact-log?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_checkin_contact_log";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8434675";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

export default function KaigoParentCheckinContactLogMemoPage() {
  const [checkDate, setCheckDate] = useState("");
  const [target, setTarget] = useState("");
  const [contactRule, setContactRule] = useState("");
  const [contactLog, setContactLog] = useState("");
  const [noResponseLog, setNoResponseLog] = useState("");
  const [monthlySummary, setMonthlySummary] = useState("");
  const [familyNotes, setFamilyNotes] = useState("");
  const [nextReview, setNextReview] = useState("");

  const output = useMemo(() => {
    return [
      "【高齢親 安否確認・定期連絡 記録メモ】",
      checkDate ? `確認日: ${checkDate}` : "確認日: 未入力",
      target ? `対象者（呼び名）: ${target}` : "対象者（呼び名）: 未入力",
      "",
      "■ 連絡の基本ルール（頻度/担当/連絡方法の目安）",
      contactRule || "未入力",
      "",
      "■ 連絡記録（日時/担当/方法/つながったか/短い様子メモ）",
      contactLog || "未入力",
      "",
      "■ つながらなかったときの対応記録（試したこと/結果/次回確認の目安）",
      noResponseLog || "未入力",
      "",
      "■ 月次まとめ（回数/気になった出来事/次月の予定メモ）",
      monthlySummary || "未入力",
      "",
      "■ 家族共有メモ（更新ルール/共有先/見直し観点など）",
      familyNotes || "未入力",
      "",
      "■ 次回見直すタイミング",
      nextReview || "未入力",
      "",
      "※このメモは家族内で定期連絡の事実と短いメモを見返すための記録です。家族間の仲裁、医療判断、介護サービスの利用可否判断、契約判断は扱いません。急ぎの判断や連絡先確認が必要な場合は、自治体や地域包括支援センターなどの関係窓口へ確認してください。パスワード・暗証番号・ログイン情報・カード番号・口座番号・マイナンバー等の秘密情報は記録しないでください。",
    ].join("\n");
  }, [
    checkDate,
    contactLog,
    contactRule,
    familyNotes,
    monthlySummary,
    nextReview,
    noResponseLog,
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
        <h1 className="mt-3 text-2xl font-bold text-slate-900">高齢親 安否確認・定期連絡 記録メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          親への定期連絡を「いつ・誰が・どの方法で・どうだったか」の同じ形式で残し、きょうだいで見返しやすいメモを作ります。秘密情報は記録しないでください。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <MemoField label="確認日" value={checkDate} onChange={setCheckDate} placeholder="例: 2026年5月31日、月末の見直し日" rows={2} />
            <MemoField
              label="対象者（呼び名）"
              value={target}
              onChange={setTarget}
              placeholder={"例: \n- 母（実家）\n- 父（義実家）\n※氏名や住所など個人情報は書かない"}
              rows={3}
            />
            <MemoField
              label="連絡の基本ルール（頻度/担当/連絡方法の目安）"
              value={contactRule}
              onChange={setContactRule}
              placeholder={
                "例:\n- 連絡頻度: 週1（平日夜）\n- 担当: 第1週=長男 / 第2週=長女\n- 方法: まず電話。出ない場合は翌日再度。\n- 共有: 連絡後に要点だけ家族チャットへ"
              }
            />
            <MemoField
              label="連絡記録（日時/担当/方法/つながったか/短い様子メモ）"
              value={contactLog}
              onChange={setContactLog}
              placeholder={
                "例:\n- 5/10(土) 19:30 / 長男 / 電話 / つながった / いつも通り、来週通院予定\n- 5/17(土) 20:10 / 長女 / 電話 / つながらず / 折返しなし、翌日再確認\n- 5/18(日) 10:00 / 長女 / 電話 / つながった / 寝ていた、問題なし"
              }
            />
            <MemoField
              label="つながらなかったときの対応記録（試したこと/結果/次回確認の目安）"
              value={noResponseLog}
              onChange={setNoResponseLog}
              placeholder={
                "例:\n- 5/17 20:10 電話→不在\n- 5/18 10:00 再度電話→通話\n- 次回: 5/24に通常連絡\n※急ぎの判断が必要な場合は関係窓口へ確認"
              }
            />
            <MemoField
              label="月次まとめ（回数/気になった出来事/次月の予定メモ）"
              value={monthlySummary}
              onChange={setMonthlySummary}
              placeholder={
                "例:\n- 連絡回数: 4回（長男2/長女2）\n- 気になったこと: 夜の電話に出づらい日があった\n- 次月予定: 通院日を共有、帰省は第3週に検討"
              }
            />
            <MemoField
              label="家族共有メモ（更新ルール/共有先/見直し観点など）"
              value={familyNotes}
              onChange={setFamilyNotes}
              placeholder={"例:\n- 連絡したら3行で共有\n- 変化があったら次回の聞き取り項目を追加\n- 月末に回数だけ振り返る"}
            />
            <MemoField
              label="次回見直すタイミング"
              value={nextReview}
              onChange={setNextReview}
              placeholder="例: 次回連絡後、月末の共有会、次回帰省後"
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
              安否確認・定期連絡の記録方法を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              安否確認・定期連絡 記録メモテンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={FULL_PACK_URL}>
              介護まるごと総合パックを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは家族内の定期連絡記録メモです。秘密情報は記録しないでください。家族間の仲裁、医療判断、介護サービスの利用可否判断、契約判断は扱いません。急ぎの判断が必要な場合は関係窓口へ確認してください。
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
