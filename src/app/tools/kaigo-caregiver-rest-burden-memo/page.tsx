"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=caregiver_rest_burden";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/caregiver-rest-schedule-burden-visualization?utm_source=net-toolbox&utm_medium=referral&utm_campaign=caregiver_rest_burden";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8382978";

export default function KaigoCaregiverRestBurdenMemoPage() {
  const [weekStart, setWeekStart] = useState("");
  const [careTasks, setCareTasks] = useState("");
  const [restBlocks, setRestBlocks] = useState("");
  const [heavyTimes, setHeavyTimes] = useState("");
  const [supportRequests, setSupportRequests] = useState("");
  const [familyShare, setFamilyShare] = useState("");
  const [workImpact, setWorkImpact] = useState("");
  const [nextAdjustments, setNextAdjustments] = useState("");

  const output = useMemo(() => {
    return [
      "【介護者 休息・負担見える化メモ】",
      weekStart ? `対象週: ${weekStart} から` : "対象週: 未入力",
      "",
      "■ 今週の介護予定・対応していること",
      careTasks || "未入力",
      "",
      "■ 休息として確保したい時間",
      restBlocks || "未入力",
      "",
      "■ 負担が重い曜日・時間帯・作業",
      heavyTimes || "未入力",
      "",
      "■ 家族や周囲に頼みたいこと",
      supportRequests || "未入力",
      "",
      "■ 家族へ共有したいこと",
      familyShare || "未入力",
      "",
      "■ 仕事・家事・自分の予定への影響",
      workImpact || "未入力",
      "",
      "■ 次回見直すこと",
      nextAdjustments || "未入力",
      "",
      "※このメモは家族内の情報整理用です。医療、メンタルヘルス、介護サービス利用、労務・法律上の判断の代替ではありません。強い疲労、不眠、つらさ、安全面の不安がある場合は、医療機関、自治体、地域包括支援センター、担当ケアマネジャー、勤務先窓口などへ相談してください。",
    ].join("\n");
  }, [careTasks, familyShare, heavyTimes, nextAdjustments, restBlocks, supportRequests, weekStart, workImpact]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <a href="/tools" className="text-sm font-semibold text-blue-700 hover:underline">
          ツール一覧へ戻る
        </a>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">介護者 休息・負担見える化メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          介護する家族自身の週間予定、休息として確保したい時間、負担が重い時間帯、家族へ頼みたいことを一枚の手元メモに整理します。
          体調や制度の判断ではなく、分担や相談につなげるためのメモ作成ツールです。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <label className="block text-sm font-semibold text-slate-800">
              対象週
              <input
                type="date"
                value={weekStart}
                onChange={(event) => setWeekStart(event.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </label>
            <MemoField
              label="今週の介護予定・対応していること"
              value={careTasks}
              onChange={setCareTasks}
              placeholder="例: 通院付き添い、買い物、服薬確認、ケアマネ連絡、見守り電話"
            />
            <MemoField
              label="休息として確保したい時間"
              value={restBlocks}
              onChange={setRestBlocks}
              placeholder="例: 火曜夜は連絡を代わってもらう、日曜午前は外出、睡眠時間を優先"
            />
            <MemoField
              label="負担が重い曜日・時間帯・作業"
              value={heavyTimes}
              onChange={setHeavyTimes}
              placeholder="例: 平日夜の電話対応、通院日の半日拘束、休日の買い物と掃除"
            />
            <MemoField
              label="家族や周囲に頼みたいこと"
              value={supportRequests}
              onChange={setSupportRequests}
              placeholder="例: 送迎交代、買い物、電話確認、書類確認、月1回の見守り"
            />
            <MemoField
              label="家族へ共有したいこと"
              value={familyShare}
              onChange={setFamilyShare}
              placeholder="例: 今週は仕事後の対応が続く、次回家族会議で分担を見直したい"
            />
            <MemoField
              label="仕事・家事・自分の予定への影響"
              value={workImpact}
              onChange={setWorkImpact}
              placeholder="例: 残業できない日、睡眠不足、家事が滞っている、休みを取りたい日"
            />
            <MemoField
              label="次回見直すこと"
              value={nextAdjustments}
              onChange={setNextAdjustments}
              placeholder="例: 来週の通院担当、外部サービス相談、休息時間の確保、連絡順の見直し"
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
              介護する家族の休息予定と負担を見える化する方法を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              介護者自身の休息・予定・負担見える化テンプレート集を見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは家族内の情報整理用です。医療、メンタルヘルス、介護サービス利用、労務・法律上の判断の代替ではありません。
        強い疲労、不眠、つらさ、安全面の不安がある場合は、医療機関、自治体、地域包括支援センター、担当ケアマネジャー、勤務先窓口などへ相談してください。
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
