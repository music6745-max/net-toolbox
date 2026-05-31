"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_mail_notification_management";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-mail-notification-management?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_mail_notification_management";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383038";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

export default function KaigoParentMailNotificationManagementMemoPage() {
  const [checkDate, setCheckDate] = useState("");
  const [target, setTarget] = useState("");
  const [mailList, setMailList] = useState("");
  const [deadlineNotes, setDeadlineNotes] = useState("");
  const [storageNotes, setStorageNotes] = useState("");
  const [familyNotes, setFamilyNotes] = useState("");
  const [nextReview, setNextReview] = useState("");

  const output = useMemo(() => {
    return [
      "【高齢親 郵便物・通知まとめ管理メモ】",
      checkDate ? `確認日: ${checkDate}` : "確認日: 未入力",
      target ? `対象者（呼び名）: ${target}` : "対象者（呼び名）: 未入力",
      "",
      "■ 郵便物・通知一覧（受け取り日/差出人/区分/期限/保管場所）",
      mailList || "未入力",
      "",
      "■ 期限・要確認メモ（期限があるもの/不明なもの）",
      deadlineNotes || "未入力",
      "",
      "■ 保管場所メモ（ファイル名/棚/引き出しなど）",
      storageNotes || "未入力",
      "",
      "■ 家族共有メモ（共有範囲/更新ルール/申し送り）",
      familyNotes || "未入力",
      "",
      "■ 次回見直すタイミング",
      nextReview || "未入力",
      "",
      "※このメモは家族内で郵便物・通知の情報を見返すための記録です。手続き、契約、制度、支払いの最終判断は扱いません。急ぎの判断が必要な場合は、公式の案内や関係窓口に確認してください。氏名・住所・電話番号などの個人情報は必要な範囲に絞り、家族内で管理してください。パスワード・暗証番号・ログイン情報・カード番号・口座番号・マイナンバー等の秘密情報は記録しないでください。",
    ].join("\n");
  }, [checkDate, deadlineNotes, familyNotes, mailList, nextReview, storageNotes, target]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <a href="/tools" className="text-sm font-semibold text-blue-700 hover:underline">
          ツール一覧へ戻る
        </a>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">高齢親 郵便物・通知まとめ管理メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          郵便物・通知を、受け取り日、保管場所、期限、次に確認することの形でそろえて、家族内で見返しやすい形式にまとめます。秘密情報は記録しないでください。
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
              placeholder="例: 2026年5月31日、郵便受けを確認した日、月末の見直し日"
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
              label="郵便物・通知一覧（受け取り日/差出人/区分/期限/保管場所）"
              value={mailList}
              onChange={setMailList}
              placeholder={
                "例:\n- 5/31 役所 / お知らせ / 期限: なし / 保管: 書類ファイルA\n- 6/1 事業者 / 手続き / 期限: 6/20 / 保管: 机上トレイ\n- 6/3 サービス / 更新 / 期限: 要確認 / 保管: 封筒ごと保管棚\n※ログイン情報や口座番号など秘密情報は書かない"
              }
              rows={7}
            />
            <MemoField
              label="期限・要確認メモ（期限があるもの/不明なもの）"
              value={deadlineNotes}
              onChange={setDeadlineNotes}
              placeholder={
                "例:\n- 6/20までに確認（担当: A）\n- 期限が不明なので要確認（担当: B）\n- 連絡先は書類の記載を確認\n※判断の代替ではなく、家族内の確認メモ"
              }
            />
            <MemoField
              label="保管場所メモ（ファイル名/棚/引き出しなど）"
              value={storageNotes}
              onChange={setStorageNotes}
              placeholder={"例:\n- 書類ファイルA: 台所の棚 上段\n- 期限が近い書類: 机上トレイ\n- 保管のみ: クローゼットの書類箱\n※鍵の場所や暗証番号などは記録しない"}
            />
            <MemoField
              label="家族共有メモ（共有範囲/更新ルール/申し送り）"
              value={familyNotes}
              onChange={setFamilyNotes}
              placeholder={"例:\n- 共有範囲: きょうだい3人のみ\n- 更新: 届いたら追記、月末に見直し\n- 外部転送しない"}
            />
            <MemoField
              label="次回見直すタイミング"
              value={nextReview}
              onChange={setNextReview}
              placeholder="例: 次回帰省後、週末、月末の共有会"
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
              郵便物・通知の整理方法を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              郵便物・通知まとめ管理テンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={FULL_PACK_URL}>
              介護まるごと総合パックを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは家族内の郵便物・通知の整理メモです。秘密情報は記録しないでください。手続き、契約、制度、支払いの最終判断は扱いません。急ぎの判断が必要な場合は、公式の案内や関係窓口に確認してください。
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
