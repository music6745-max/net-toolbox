"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type FieldMode = "every" | "specific" | "range" | "step";

interface CronField {
  mode: FieldMode;
  specific: string;
  rangeFrom: string;
  rangeTo: string;
  stepEvery: string;
  stepStart: string;
}

const defaultField = (): CronField => ({
  mode: "every",
  specific: "0",
  rangeFrom: "0",
  rangeTo: "1",
  stepEvery: "1",
  stepStart: "0",
});

const FIELDS = [
  { label: "分", name: "minute", min: 0, max: 59 },
  { label: "時", name: "hour", min: 0, max: 23 },
  { label: "日", name: "day", min: 1, max: 31 },
  { label: "月", name: "month", min: 1, max: 12 },
  { label: "曜日", name: "weekday", min: 0, max: 6 },
] as const;

const WEEKDAY_NAMES = ["日", "月", "火", "水", "木", "金", "土"];
const MONTH_NAMES = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

function fieldToExpr(field: CronField, min: number, max: number): string {
  switch (field.mode) {
    case "every":
      return "*";
    case "specific":
      return field.specific;
    case "range":
      return `${field.rangeFrom}-${field.rangeTo}`;
    case "step":
      return field.stepStart === String(min)
        ? `*/${field.stepEvery}`
        : `${field.stepStart}/${field.stepEvery}`;
  }
}

function describeField(
  field: CronField,
  label: string,
  isWeekday: boolean,
  isMonth: boolean
): string {
  const getName = (v: string) => {
    const n = Number(v);
    if (isWeekday) return WEEKDAY_NAMES[n] ?? v;
    if (isMonth) return MONTH_NAMES[n - 1] ?? v;
    return v;
  };
  switch (field.mode) {
    case "every":
      return `毎${label}`;
    case "specific":
      return `${label}${getName(field.specific)}`;
    case "range":
      return `${label}${getName(field.rangeFrom)}〜${getName(field.rangeTo)}`;
    case "step":
      return `${field.stepStart}から${field.stepEvery}${label}ごと`;
  }
}

function buildDescription(fields: CronField[]): string {
  const [min, hour, day, month, weekday] = fields;
  const parts = [
    describeField(min, "分", false, false),
    describeField(hour, "時", false, false),
    describeField(day, "日", false, false),
    describeField(month, "月", false, true),
    describeField(weekday, "曜日", true, false),
  ];
  return parts.join(", ");
}

function rangeOptions(min: number, max: number, isWeekday = false, isMonth = false) {
  return Array.from({ length: max - min + 1 }, (_, i) => {
    const v = min + i;
    let label = String(v);
    if (isWeekday) label = `${v} (${WEEKDAY_NAMES[v]})`;
    if (isMonth) label = `${v} (${MONTH_NAMES[v - 1]})`;
    return (
      <option key={v} value={v}>
        {label}
      </option>
    );
  });
}

export default function CrontabGeneratorPage() {
  const [fields, setFields] = useState<CronField[]>(FIELDS.map(() => defaultField()));
  const [copied, setCopied] = useState(false);

  const updateField = (index: number, patch: Partial<CronField>) => {
    setFields((prev) => prev.map((f, i) => (i === index ? { ...f, ...patch } : f)));
  };

  const expr = fields
    .map((f, i) => fieldToExpr(f, FIELDS[i].min, FIELDS[i].max))
    .join(" ");

  const description = buildDescription(fields);

  const copy = async () => {
    await navigator.clipboard.writeText(expr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>Crontab生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">Crontab生成ツール</h1>
      <p className="text-muted mb-8">
        各フィールドを選択してcron式を生成します。スケジュールの内容を日本語で確認できます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        {FIELDS.map((meta, index) => {
          const f = fields[index];
          const isWeekday = meta.name === "weekday";
          const isMonth = meta.name === "month";
          return (
            <div key={meta.name}>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="w-8 font-medium text-sm">{meta.label}</span>
                <select
                  value={f.mode}
                  onChange={(e) => updateField(index, { mode: e.target.value as FieldMode })}
                  className="border border-card-border rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option value="every">毎{meta.label}</option>
                  <option value="specific">特定の{meta.label}</option>
                  <option value="range">範囲指定</option>
                  <option value="step">ステップ</option>
                </select>

                {f.mode === "specific" && (
                  <select
                    value={f.specific}
                    onChange={(e) => updateField(index, { specific: e.target.value })}
                    className="border border-card-border rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    {rangeOptions(meta.min, meta.max, isWeekday, isMonth)}
                  </select>
                )}

                {f.mode === "range" && (
                  <>
                    <select
                      value={f.rangeFrom}
                      onChange={(e) => updateField(index, { rangeFrom: e.target.value })}
                      className="border border-card-border rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      {rangeOptions(meta.min, meta.max, isWeekday, isMonth)}
                    </select>
                    <span className="text-sm text-muted">〜</span>
                    <select
                      value={f.rangeTo}
                      onChange={(e) => updateField(index, { rangeTo: e.target.value })}
                      className="border border-card-border rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      {rangeOptions(meta.min, meta.max, isWeekday, isMonth)}
                    </select>
                  </>
                )}

                {f.mode === "step" && (
                  <>
                    <span className="text-sm text-muted">開始:</span>
                    <select
                      value={f.stepStart}
                      onChange={(e) => updateField(index, { stepStart: e.target.value })}
                      className="border border-card-border rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      {rangeOptions(meta.min, meta.max, isWeekday, isMonth)}
                    </select>
                    <span className="text-sm text-muted">間隔:</span>
                    <select
                      value={f.stepEvery}
                      onChange={(e) => updateField(index, { stepEvery: e.target.value })}
                      className="border border-card-border rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      {rangeOptions(1, meta.max, false, false)}
                    </select>
                  </>
                )}
              </div>
            </div>
          );
        })}

        <div className="mt-4 bg-background rounded-xl p-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-muted font-medium uppercase tracking-wide">cron式</span>
            <button
              onClick={copy}
              className="text-sm text-primary hover:text-primary-hover font-medium"
            >
              {copied ? "コピー済み" : "コピー"}
            </button>
          </div>
          <p className="font-mono text-lg font-bold break-all">{expr}</p>
          <p className="text-sm text-muted mt-2">{description}</p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">Crontab生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 分・時・日・月・曜日の各フィールドで実行タイミングを選択します。</p>
          <p>2. 「毎〜」はすべての値、「特定の〜」は指定した値、「範囲指定」は開始〜終了、「ステップ」は間隔指定です。</p>
          <p>3. 生成されたcron式とその日本語説明をリアルタイムで確認できます。</p>
          <p>4. 「コピー」ボタンでcron式をクリップボードにコピーできます。</p>
          <p>crontabに貼り付けて使用してください。例: <code>*/5 * * * * /path/to/script.sh</code></p>
        </div>
      </section>


      <AffiliateSection slug="crontab-generator" category="開発ツール" />
      <RelatedTools currentSlug="crontab-generator" category="開発ツール" />
    </div>
  );
}
