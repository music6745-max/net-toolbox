"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type CronField = "minute" | "hour" | "day" | "month" | "weekday";
type FieldMode = "every" | "specific" | "range" | "interval";

interface FieldState {
  mode: FieldMode;
  specific: number[];
  rangeStart: number;
  rangeEnd: number;
  interval: number;
  intervalStart: number;
}

const fieldConfigs: {
  key: CronField;
  label: string;
  min: number;
  max: number;
  labels?: string[];
}[] = [
  { key: "minute", label: "分", min: 0, max: 59 },
  { key: "hour", label: "時", min: 0, max: 23 },
  { key: "day", label: "日", min: 1, max: 31 },
  {
    key: "month",
    label: "月",
    min: 1,
    max: 12,
    labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  },
  {
    key: "weekday",
    label: "曜日",
    min: 0,
    max: 6,
    labels: ["日", "月", "火", "水", "木", "金", "土"],
  },
];

function makeDefaultField(min: number): FieldState {
  return {
    mode: "every",
    specific: [],
    rangeStart: min,
    rangeEnd: min,
    interval: 1,
    intervalStart: min,
  };
}

function fieldToExpression(field: FieldState, min: number, max: number): string {
  switch (field.mode) {
    case "every":
      return "*";
    case "specific":
      return field.specific.length > 0 ? field.specific.sort((a, b) => a - b).join(",") : "*";
    case "range":
      return `${field.rangeStart}-${field.rangeEnd}`;
    case "interval":
      return `${field.intervalStart}/${field.interval}`;
    default:
      return "*";
  }
}

function describeCron(expression: string): string {
  const parts = expression.split(" ");
  if (parts.length !== 5) return "不正な式です";

  const [min, hour, day, month, weekday] = parts;
  const pieces: string[] = [];

  if (month !== "*") pieces.push(`${month}月`);
  if (day !== "*") pieces.push(`${day}日`);
  if (weekday !== "*") {
    const dayNames = ["日", "月", "火", "水", "木", "金", "土"];
    if (weekday.includes(",")) {
      const days = weekday.split(",").map((d) => dayNames[parseInt(d)] || d);
      pieces.push(`${days.join("・")}曜日`);
    } else if (weekday.includes("-")) {
      const [s, e] = weekday.split("-").map((d) => parseInt(d));
      pieces.push(`${dayNames[s]}〜${dayNames[e]}曜日`);
    } else {
      pieces.push(`${dayNames[parseInt(weekday)] || weekday}曜日`);
    }
  }

  if (hour === "*" && min === "*") {
    pieces.push("毎分");
  } else if (hour === "*") {
    pieces.push(`毎時${min}分`);
  } else if (min === "*") {
    pieces.push(`${hour}時台の毎分`);
  } else {
    if (hour.includes("/")) {
      const [s, i] = hour.split("/");
      pieces.push(`${s}時から${i}時間ごと ${min}分`);
    } else {
      pieces.push(`${hour}時${min}分`);
    }
  }

  if (min.includes("/")) {
    const [s, i] = min.split("/");
    return `${pieces.slice(0, -1).join(" ")} ${s}分から${i}分ごと`.trim();
  }

  return pieces.join(" ") || "毎分実行";
}

function getNextRuns(expression: string, count: number): string[] {
  const parts = expression.split(" ");
  if (parts.length !== 5) return [];

  const results: string[] = [];
  const now = new Date();
  const check = new Date(now);
  check.setSeconds(0);
  check.setMilliseconds(0);
  check.setMinutes(check.getMinutes() + 1);

  const matchField = (value: number, expr: string): boolean => {
    if (expr === "*") return true;
    if (expr.includes("/")) {
      const [start, interval] = expr.split("/").map(Number);
      return (value - start) % interval === 0 && value >= start;
    }
    if (expr.includes("-")) {
      const [s, e] = expr.split("-").map(Number);
      return value >= s && value <= e;
    }
    if (expr.includes(",")) {
      return expr.split(",").map(Number).includes(value);
    }
    return value === parseInt(expr);
  };

  let iterations = 0;
  while (results.length < count && iterations < 525600) {
    const m = check.getMinutes();
    const h = check.getHours();
    const d = check.getDate();
    const mo = check.getMonth() + 1;
    const wd = check.getDay();

    if (
      matchField(m, parts[0]) &&
      matchField(h, parts[1]) &&
      matchField(d, parts[2]) &&
      matchField(mo, parts[3]) &&
      matchField(wd, parts[4])
    ) {
      results.push(
        check.toLocaleString("ja-JP", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          weekday: "short",
        })
      );
    }
    check.setMinutes(check.getMinutes() + 1);
    iterations++;
  }
  return results;
}

export default function CronGeneratorPage() {
  const [fields, setFields] = useState<Record<CronField, FieldState>>({
    minute: { ...makeDefaultField(0), mode: "specific", specific: [0] },
    hour: makeDefaultField(0),
    day: makeDefaultField(1),
    month: makeDefaultField(1),
    weekday: makeDefaultField(0),
  });
  const [copied, setCopied] = useState(false);

  const expression = useMemo(() => {
    return fieldConfigs
      .map((cfg) => fieldToExpression(fields[cfg.key], cfg.min, cfg.max))
      .join(" ");
  }, [fields]);

  const description = useMemo(() => describeCron(expression), [expression]);
  const nextRuns = useMemo(() => getNextRuns(expression, 5), [expression]);

  const updateField = (key: CronField, updates: Partial<FieldState>) => {
    setFields((prev) => ({
      ...prev,
      [key]: { ...prev[key], ...updates },
    }));
  };

  const toggleSpecific = (key: CronField, value: number) => {
    const current = fields[key].specific;
    const newSpecific = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    updateField(key, { specific: newSpecific });
  };

  const copyExpression = () => {
    navigator.clipboard.writeText(expression);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>Cron式ジェネレーター</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">Cron式ジェネレーター</h1>
      <p className="text-muted mb-8">
        スケジュール実行のCron式を視覚的に作成できます。各フィールドを設定するだけで自動的にCron式が生成されます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-muted mb-1">生成されたCron式</p>
            <p className="text-2xl font-mono font-bold text-primary">{expression}</p>
          </div>
          <button
            onClick={copyExpression}
            className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            {copied ? "コピー済み" : "コピー"}
          </button>
        </div>
        <p className="text-sm text-muted">{description}</p>
      </div>

      <div className="space-y-4">
        {fieldConfigs.map((cfg) => {
          const field = fields[cfg.key];
          return (
            <div key={cfg.key} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="text-sm font-medium mb-3">{cfg.label}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {(["every", "specific", "range", "interval"] as FieldMode[]).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => updateField(cfg.key, { mode })}
                    className={`px-3 py-1.5 rounded-lg text-xs border transition-colors ${
                      field.mode === mode
                        ? "bg-primary text-white border-primary"
                        : "border-card-border hover:bg-foreground/5"
                    }`}
                  >
                    {mode === "every" && "全て (*)"}
                    {mode === "specific" && "指定値"}
                    {mode === "range" && "範囲"}
                    {mode === "interval" && "間隔"}
                  </button>
                ))}
              </div>

              {field.mode === "specific" && (
                <div className="flex flex-wrap gap-1.5">
                  {Array.from({ length: cfg.max - cfg.min + 1 }, (_, i) => cfg.min + i).map(
                    (val) => (
                      <button
                        key={val}
                        onClick={() => toggleSpecific(cfg.key, val)}
                        className={`w-10 h-8 rounded text-xs border transition-colors ${
                          field.specific.includes(val)
                            ? "bg-primary text-white border-primary"
                            : "border-card-border hover:bg-foreground/5"
                        }`}
                      >
                        {cfg.labels ? cfg.labels[val - cfg.min] : val}
                      </button>
                    )
                  )}
                </div>
              )}

              {field.mode === "range" && (
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={cfg.min}
                    max={cfg.max}
                    value={field.rangeStart}
                    onChange={(e) => updateField(cfg.key, { rangeStart: parseInt(e.target.value) || cfg.min })}
                    className="w-20 border border-card-border rounded-lg px-3 py-2 text-sm"
                  />
                  <span className="text-muted">〜</span>
                  <input
                    type="number"
                    min={cfg.min}
                    max={cfg.max}
                    value={field.rangeEnd}
                    onChange={(e) => updateField(cfg.key, { rangeEnd: parseInt(e.target.value) || cfg.min })}
                    className="w-20 border border-card-border rounded-lg px-3 py-2 text-sm"
                  />
                </div>
              )}

              {field.mode === "interval" && (
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={cfg.min}
                    max={cfg.max}
                    value={field.intervalStart}
                    onChange={(e) => updateField(cfg.key, { intervalStart: parseInt(e.target.value) || cfg.min })}
                    className="w-20 border border-card-border rounded-lg px-3 py-2 text-sm"
                  />
                  <span className="text-muted">から</span>
                  <input
                    type="number"
                    min={1}
                    max={cfg.max}
                    value={field.interval}
                    onChange={(e) => updateField(cfg.key, { interval: parseInt(e.target.value) || 1 })}
                    className="w-20 border border-card-border rounded-lg px-3 py-2 text-sm"
                  />
                  <span className="text-muted">ごと</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {nextRuns.length > 0 && (
        <div className="mt-6 bg-card-bg border border-card-border rounded-xl p-6">
          <h3 className="text-sm font-medium mb-3">次回の実行予定（5件）</h3>
          <ul className="space-y-1.5">
            {nextRuns.map((run, i) => (
              <li key={i} className="text-sm font-mono text-muted">
                {run}
              </li>
            ))}
          </ul>
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">Cron式ジェネレーターの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 分・時・日・月・曜日の各フィールドでモードを選択します。</p>
          <p>2. 「全て」は任意の値、「指定値」は特定の値、「範囲」は連続した範囲、「間隔」は一定間隔を意味します。</p>
          <p>3. 設定に応じてCron式がリアルタイムで生成されます。</p>
          <p>4. 「コピー」ボタンでCron式をクリップボードにコピーできます。</p>
          <p>
            入力したデータはブラウザ内で処理されるため、サーバーに送信されることはありません。安心してご利用ください。
          </p>
        </div>
      </section>

      <AffiliateSection slug="cron-generator" category="開発ツール" />
      <RelatedTools currentSlug="cron-generator" category="開発ツール" />
    </div>
  );
}
