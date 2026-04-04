"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

interface Stats {
  count: number;
  sum: number;
  mean: number;
  median: number;
  mode: number[];
  variance: number;
  stdDev: number;
  min: number;
  max: number;
  range: number;
}

function calcStats(nums: number[]): Stats {
  const n = nums.length;
  const sorted = [...nums].sort((a, b) => a - b);
  const sum = nums.reduce((a, b) => a + b, 0);
  const mean = sum / n;
  const median =
    n % 2 === 0
      ? (sorted[n / 2 - 1] + sorted[n / 2]) / 2
      : sorted[Math.floor(n / 2)];
  const variance = nums.reduce((a, b) => a + (b - mean) ** 2, 0) / n;
  const stdDev = Math.sqrt(variance);
  const min = sorted[0];
  const max = sorted[n - 1];
  const range = max - min;

  const freq: Record<number, number> = {};
  for (const v of nums) freq[v] = (freq[v] || 0) + 1;
  const maxFreq = Math.max(...Object.values(freq));
  const mode = Object.entries(freq)
    .filter(([, f]) => f === maxFreq)
    .map(([v]) => Number(v))
    .sort((a, b) => a - b);

  return { count: n, sum, mean, median, mode, variance, stdDev, min, max, range };
}

export default function StatisticsPage() {
  const [input, setInput] = useState("");
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const raw = input.replace(/\n/g, ",").split(",").map((s) => s.trim()).filter(Boolean);
    if (raw.length === 0) {
      setError("数値を入力してください");
      setStats(null);
      return;
    }
    const nums = raw.map(Number);
    if (nums.some(isNaN)) {
      setError("数値以外の値が含まれています");
      setStats(null);
      return;
    }
    if (nums.length < 1) {
      setError("1つ以上の数値が必要です");
      setStats(null);
      return;
    }
    setError("");
    setStats(calcStats(nums));
  };

  const reset = () => {
    setInput("");
    setStats(null);
    setError("");
  };

  const fmt = (n: number) =>
    Number.isInteger(n) ? String(n) : parseFloat(n.toPrecision(10)).toString();

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>統計計算ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">統計計算ツール</h1>
      <p className="text-muted mb-8">
        数値データから平均・中央値・標準偏差などの統計量を一括計算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">
            数値入力（カンマ区切りまたは改行区切り）
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={"例: 10, 20, 30, 40, 50\nまたは改行区切りで入力"}
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={6}
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <div className="flex gap-3">
          <button
            onClick={calculate}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            計算する
          </button>
          <button
            onClick={reset}
            className="border border-card-border px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-background transition-colors"
          >
            リセット
          </button>
        </div>

        {stats && (
          <div className="mt-2">
            <h2 className="text-sm font-semibold mb-3">計算結果</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: "データ数", value: String(stats.count) },
                { label: "合計", value: fmt(stats.sum) },
                { label: "平均", value: fmt(stats.mean) },
                { label: "中央値", value: fmt(stats.median) },
                { label: "最頻値", value: stats.mode.join(", ") },
                { label: "標準偏差", value: fmt(stats.stdDev) },
                { label: "分散", value: fmt(stats.variance) },
                { label: "最小値", value: fmt(stats.min) },
                { label: "最大値", value: fmt(stats.max) },
                { label: "範囲", value: fmt(stats.range) },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-background rounded-lg p-3 border border-card-border"
                >
                  <p className="text-xs text-muted mb-1">{label}</p>
                  <p className="text-base font-mono font-semibold break-all">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">統計計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. テキストエリアに数値をカンマ区切りまたは改行区切りで入力します。</p>
          <p>2. 「計算する」ボタンを押すと、平均・中央値・最頻値・標準偏差・分散などが表示されます。</p>
          <p>3. 小数点を含む数値にも対応しています。</p>
          <p>※ 数値以外の文字が含まれている場合はエラーが表示されます。</p>
        </div>
      </section>


      <AffiliateSection slug="statistics" category="日常ツール" />
      <RelatedTools currentSlug="statistics" category="日常ツール" />
    </div>
  );
}
