"use client";

import { useState } from "react";
import Link from "next/link";

const DAYS_JP = ["日", "月", "火", "水", "木", "金", "土"];
const MONTHS_JP = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

function parseField(field: string, min: number, max: number): number[] {
  const result: number[] = [];
  if (field === "*") {
    for (let i = min; i <= max; i++) result.push(i);
    return result;
  }
  for (const part of field.split(",")) {
    if (part.includes("/")) {
      const [range, stepStr] = part.split("/");
      const step = parseInt(stepStr, 10);
      let start = min;
      let end = max;
      if (range !== "*") {
        if (range.includes("-")) {
          const [s, e] = range.split("-").map(Number);
          start = s;
          end = e;
        } else {
          start = parseInt(range, 10);
        }
      }
      for (let i = start; i <= end; i += step) result.push(i);
    } else if (part.includes("-")) {
      const [s, e] = part.split("-").map(Number);
      for (let i = s; i <= e; i++) result.push(i);
    } else {
      result.push(parseInt(part, 10));
    }
  }
  return [...new Set(result)].filter((n) => n >= min && n <= max).sort((a, b) => a - b);
}

function describeField(field: string, type: "minute" | "hour" | "dom" | "month" | "dow"): string {
  if (field === "*") {
    const map = { minute: "毎分", hour: "毎時", dom: "毎日", month: "毎月", dow: "毎曜日" };
    return map[type];
  }
  if (field.startsWith("*/")) {
    const n = field.slice(2);
    const map = { minute: `${n}分ごと`, hour: `${n}時間ごと`, dom: `${n}日ごと`, month: `${n}ヶ月ごと`, dow: `${n}曜日ごと` };
    return map[type];
  }

  const values = parseField(field, type === "month" ? 1 : type === "dow" ? 0 : type === "hour" ? 0 : type === "minute" ? 0 : 1, type === "month" ? 12 : type === "dow" ? 6 : type === "hour" ? 23 : type === "minute" ? 59 : 31);

  if (type === "minute") return `${values.join("、")}分`;
  if (type === "hour") return `${values.join("、")}時`;
  if (type === "dom") return `${values.join("、")}日`;
  if (type === "month") return values.map((v) => MONTHS_JP[v - 1]).join("、");
  if (type === "dow") return values.map((v) => DAYS_JP[v]).join("、") + "曜日";
  return field;
}

function buildDescription(minute: string, hour: string, dom: string, month: string, dow: string): string {
  const parts: string[] = [];

  const monthPart = month === "*" ? "" : MONTHS_JP[parseField(month, 1, 12)[0] - 1] + "の";
  const domPart = dom === "*" ? "" : parseField(dom, 1, 31).join("、") + "日の";
  const dowPart = dow === "*" ? "" : parseField(dow, 0, 6).map((v) => DAYS_JP[v]).join("・") + "曜日の";

  if (minute === "*" && hour === "*") {
    parts.push("毎分");
  } else if (minute === "*") {
    parts.push(`${describeField(hour, "hour")}台の毎分`);
  } else if (hour === "*") {
    parts.push(`毎時${describeField(minute, "minute")}`);
  } else {
    const h = parseField(hour, 0, 23);
    const m = parseField(minute, 0, 59);
    if (h.length === 1 && m.length === 1) {
      const hh = h[0];
      const ampm = hh < 12 ? "午前" : "午後";
      const hStr = hh === 0 ? 12 : hh > 12 ? hh - 12 : hh;
      parts.push(`${ampm}${hStr}時${m[0] > 0 ? m[0] + "分" : "ちょうど"}`);
    } else {
      parts.push(`${describeField(hour, "hour")}${describeField(minute, "minute")}`);
    }
  }

  const timePart = parts.join("");

  if (month !== "*" && dom !== "*" && dow !== "*") {
    return `${monthPart}${domPart}または${dowPart}${timePart}に実行`;
  } else if (month !== "*" || dom !== "*") {
    return `${monthPart}${domPart}${timePart}に実行`;
  } else if (dow !== "*") {
    return `毎週${dowPart}${timePart}に実行`;
  } else {
    return `毎日${timePart}に実行`;
  }
}

function getNextExecutions(minute: string, hour: string, dom: string, month: string, dow: string, count = 5): Date[] {
  const minutes = parseField(minute, 0, 59);
  const hours = parseField(hour, 0, 23);
  const doms = dom === "*" ? null : parseField(dom, 1, 31);
  const months = parseField(month, 1, 12);
  const dows = dow === "*" ? null : parseField(dow, 0, 6);

  const results: Date[] = [];
  const now = new Date();
  now.setSeconds(0, 0);
  now.setMinutes(now.getMinutes() + 1);

  const limit = new Date(now);
  limit.setFullYear(limit.getFullYear() + 2);

  const cur = new Date(now);

  while (results.length < count && cur < limit) {
    const m = cur.getMonth() + 1;
    const d = cur.getDate();
    const dw = cur.getDay();
    const h = cur.getHours();
    const mn = cur.getMinutes();

    if (!months.includes(m)) {
      cur.setMonth(cur.getMonth() + 1);
      cur.setDate(1);
      cur.setHours(0, 0, 0, 0);
      continue;
    }

    const domOk = doms ? doms.includes(d) : true;
    const dowOk = dows ? dows.includes(dw) : true;
    const dayOk = doms && dows ? domOk || dowOk : doms ? domOk : dowOk !== false ? dowOk : true;

    if (!dayOk) {
      cur.setDate(cur.getDate() + 1);
      cur.setHours(0, 0, 0, 0);
      continue;
    }

    if (!hours.includes(h)) {
      const nextH = hours.find((hh) => hh > h);
      if (nextH !== undefined) {
        cur.setHours(nextH, 0, 0, 0);
      } else {
        cur.setDate(cur.getDate() + 1);
        cur.setHours(0, 0, 0, 0);
      }
      continue;
    }

    const nextM = minutes.find((mm) => mm >= mn);
    if (nextM !== undefined) {
      cur.setMinutes(nextM, 0, 0);
      results.push(new Date(cur));
      cur.setMinutes(nextM + 1, 0, 0);
    } else {
      const nextH = hours.find((hh) => hh > h);
      if (nextH !== undefined) {
        cur.setHours(nextH, 0, 0, 0);
      } else {
        cur.setDate(cur.getDate() + 1);
        cur.setHours(0, 0, 0, 0);
      }
    }
  }

  return results;
}

function formatDate(d: Date): string {
  const y = d.getFullYear();
  const mo = d.getMonth() + 1;
  const dd = d.getDate();
  const dw = DAYS_JP[d.getDay()];
  const h = String(d.getHours()).padStart(2, "0");
  const mn = String(d.getMinutes()).padStart(2, "0");
  return `${y}年${mo}月${dd}日（${dw}） ${h}:${mn}`;
}

const SAMPLES = [
  { label: "毎日9時", value: "0 9 * * *" },
  { label: "毎週月曜8時30分", value: "30 8 * * 1" },
  { label: "毎時0分", value: "0 * * * *" },
  { label: "毎5分", value: "*/5 * * * *" },
  { label: "毎月1日0時", value: "0 0 1 * *" },
];

export default function CronParserPage() {
  const [expr, setExpr] = useState("0 9 * * *");
  const [description, setDescription] = useState("");
  const [nextTimes, setNextTimes] = useState<string[]>([]);
  const [error, setError] = useState("");

  const parse = (value?: string) => {
    const input = (value ?? expr).trim();
    const fields = input.split(/\s+/);
    if (fields.length !== 5) {
      setError("Cron式は5つのフィールド（分 時 日 月 曜日）で入力してください。");
      setDescription("");
      setNextTimes([]);
      return;
    }
    try {
      const [minute, hour, dom, month, dow] = fields;
      const desc = buildDescription(minute, hour, dom, month, dow);
      const times = getNextExecutions(minute, hour, dom, month, dow);
      setDescription(desc);
      setNextTimes(times.map(formatDate));
      setError("");
    } catch {
      setError("Cron式の解析に失敗しました。形式を確認してください。");
      setDescription("");
      setNextTimes([]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>Cron式解説</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">Cron式解説ツール</h1>
      <p className="text-muted mb-8">
        Cron式を入力すると、日本語でスケジュールを説明し、次回の実行時刻を5件表示します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-1">Cron式（5フィールド）</label>
        <p className="text-xs text-muted mb-2">形式: 分（0-59） 時（0-23） 日（1-31） 月（1-12） 曜日（0-6、0=日曜）</p>
        <div className="flex gap-2">
          <input
            type="text"
            value={expr}
            onChange={(e) => setExpr(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && parse()}
            placeholder="例: 0 9 * * *"
            className="flex-1 border border-card-border rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background"
          />
          <button
            onClick={() => parse()}
            className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors whitespace-nowrap"
          >
            解析する
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {SAMPLES.map((s) => (
            <button
              key={s.value}
              onClick={() => {
                setExpr(s.value);
                parse(s.value);
              }}
              className="text-xs border border-card-border rounded-lg px-3 py-1.5 hover:border-primary hover:text-primary transition-colors"
            >
              {s.label}
            </button>
          ))}
        </div>

        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

        {description && (
          <div className="mt-6 space-y-4">
            <div className="bg-background rounded-lg p-4">
              <p className="text-xs text-muted mb-1">スケジュールの説明</p>
              <p className="text-lg font-semibold text-primary">{description}</p>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">次回実行時刻（5件）</p>
              <ul className="space-y-2">
                {nextTimes.map((t, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 bg-background rounded-lg px-4 py-2.5 text-sm font-mono"
                  >
                    <span className="text-xs text-muted w-4">{i + 1}</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 bg-card-bg border border-card-border rounded-xl p-5">
        <h2 className="text-sm font-bold mb-3">Cron式フィールド早見表</h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs text-muted">
          <div className="font-mono">* * * * *</div><div>フィールド：分 時 日 月 曜日</div>
          <div className="font-mono">0 9 * * *</div><div>毎日午前9時</div>
          <div className="font-mono">*/5 * * * *</div><div>5分おき</div>
          <div className="font-mono">0 0 * * 1</div><div>毎週月曜0時</div>
          <div className="font-mono">0 8-18 * * 1-5</div><div>平日8〜18時の毎時0分</div>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-lg font-bold mb-3">Cron式解説ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>
            入力欄にCron式（5フィールド）を入力して「解析する」ボタンを押してください。Enterキーでも実行できます。
          </p>
          <p>
            分・時・日・月・曜日の順で半角スペース区切りで入力します。<code className="bg-background px-1 rounded">*</code>はすべての値、<code className="bg-background px-1 rounded">*/n</code>はn間隔、<code className="bg-background px-1 rounded">a-b</code>は範囲、カンマ区切りで複数指定できます。
          </p>
          <p>解析結果として日本語の説明と次回実行時刻5件を表示します。</p>
        </div>
      </section>
    </div>
  );
}
