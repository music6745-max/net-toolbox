"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=family_duty_role_share_memo";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/kaigo-family-duty-role-share-memo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=family_duty_role_share_memo";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8383027";
const PACK_URL = "https://kaigo-okane.booth.pm/items/8383440";

export default function KaigoFamilyDutyRoleShareMemoPage() {
  const [checkDate, setCheckDate] = useState("");
  const [familyMembers, setFamilyMembers] = useState("");
  const [roles, setRoles] = useState("");
  const [dutyRoster, setDutyRoster] = useState("");
  const [activityLog, setActivityLog] = useState("");
  const [roleChangeLog, setRoleChangeLog] = useState("");
  const [familyNotes, setFamilyNotes] = useState("");
  const [nextReview, setNextReview] = useState("");

  const output = useMemo(() => {
    return [
      "【介護家族 当番・役割分担 記録メモ】",
      checkDate ? `確認日: ${checkDate}` : "確認日: 未入力",
      "",
      "■ 家族メンバー（呼び名でOK）",
      familyMembers || "未入力",
      "",
      "■ 担当エリア・役割（連絡窓口/訪問/買い物/費用記録/実家整理など）",
      roles || "未入力",
      "",
      "■ 当番スケジュール（今月/来月など）",
      dutyRoster || "未入力",
      "",
      "■ 活動実績（やったこと・残タスク）",
      activityLog || "未入力",
      "",
      "■ 役割変更メモ（変更日/変更内容/理由を短く）",
      roleChangeLog || "未入力",
      "",
      "■ 家族共有メモ（更新ルール/連絡の決め事/見直し観点など）",
      familyNotes || "未入力",
      "",
      "■ 次回見直すタイミング",
      nextReview || "未入力",
      "",
      "※このメモは家族内で当番・役割分担・実績を見返すための記録です。家族間の仲裁、専門的なケアの評価判断、行政・法律・税務・金融・保険の判断、契約判断の代替にはなりません。パスワード・暗証番号・ログイン情報・カード番号・口座番号・マイナンバー等の秘密情報は記録しないでください。必要な場合は担当窓口や専門職へ確認してください。",
    ].join("\n");
  }, [activityLog, checkDate, dutyRoster, familyMembers, familyNotes, nextReview, roleChangeLog, roles]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <a href="/tools" className="text-sm font-semibold text-blue-700 hover:underline">
          ツール一覧へ戻る
        </a>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">介護家族 当番・役割分担 記録メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          家族内の「担当エリア」「当番スケジュール」「活動実績」「役割変更」を同じ形式で整理し、見返しやすいメモを作ります。秘密情報は記録しないでください。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <MemoField label="確認日" value={checkDate} onChange={setCheckDate} placeholder="例: 2026年5月30日、月末の見直し日" rows={2} />
            <MemoField
              label="家族メンバー（呼び名でOK）"
              value={familyMembers}
              onChange={setFamilyMembers}
              placeholder={"例: \n- 長男（近居）\n- 長女（遠方）\n- 配偶者\n- 家族A"}
            />
            <MemoField
              label="担当エリア・役割（連絡窓口/訪問/買い物/費用記録/実家整理など）"
              value={roles}
              onChange={setRoles}
              placeholder={
                "例:\n- 連絡窓口: 長男（必要時は長女へ共有）\n- 訪問/買い物: 長男（週1）\n- 費用記録: 長女（領収書は写真共有）\n- 実家整理/置き場所更新: 配偶者（帰省時）"
              }
            />
            <MemoField
              label="当番スケジュール（今月/来月など）"
              value={dutyRoster}
              onChange={setDutyRoster}
              placeholder={
                "例:\n- 6月: 第1週=長男 / 第2週=長女 / 第3週=長男 / 第4週=長女\n- 月末: 全員でオンライン共有（30分）"
              }
            />
            <MemoField
              label="活動実績（やったこと・残タスク）"
              value={activityLog}
              onChange={setActivityLog}
              placeholder={
                "例:\n- 6/3: 通院付き添い（質問メモ作成→共有）\n- 6/10: 消耗品補充\n- 残: 次回のケアマネ面談前に確認事項整理"
              }
            />
            <MemoField
              label="役割変更メモ（変更日/変更内容/理由を短く）"
              value={roleChangeLog}
              onChange={setRoleChangeLog}
              placeholder={"例:\n- 6/1: 費用記録を長女へ移管（領収書整理が得意）\n- 6/15: 訪問頻度を週1→隔週へ調整（サービス利用開始）"}
            />
            <MemoField
              label="家族共有メモ（更新ルール/連絡の決め事/見直し観点など）"
              value={familyNotes}
              onChange={setFamilyNotes}
              placeholder={"例:\n- 変更があったら担当欄だけ更新\n- 連絡はまず窓口へ。緊急は電話、通常はチャット\n- 月末に当番と実績を見直す"}
            />
            <MemoField
              label="次回見直すタイミング"
              value={nextReview}
              onChange={setNextReview}
              placeholder="例: 次回帰省後、月末の共有会、当番交代のタイミング"
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
              当番・役割分担の整理方法を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              当番・役割分担 記録メモテンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={PACK_URL}>
              介護はじめの87商品まとめセットを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは家族内の当番・役割分担・実績のメモです。秘密情報は記録しないでください。家族間の仲裁、医療判断、介護サービスの利用可否判断、契約判断は扱いません。必要な場合は担当窓口や専門職へ確認してください。
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

