"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

export default function CompoundInterestPage() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [frequency, setFrequency] = useState("12");
  const [result, setResult] = useState<{ finalAmount: number; interest: number } | null>(null);
  const [error, setError] = useState("");

  const frequencyOptions = [
    { value: "1", label: "年1回" },
    { value: "2", label: "半年1回" },
    { value: "4", label: "四半期1回" },
    { value: "12", label: "月1回" },
    { value: "365", label: "日次" },
  ];

  const calculate = () => {
    const p = Number(principal);
    const r = Number(rate);
    const y = Number(years);
    const n = Number(frequency);

    if (!principal || !rate || !years || isNaN(p) || isNaN(r) || isNaN(y)) {
      setError("すべての項目を正しく入力してください");
      setResult(null);
      return;
    }
    if (p <= 0) { setError("元本は0より大きい値を入力してください"); setResult(null); return; }
    if (r < 0 || r > 100) { setError("年利は0〜100の範囲で入力してください"); setResult(null); return; }
    if (y <= 0 || y > 100) { setError("期間は1〜100年の範囲で入力してください"); setResult(null); return; }

    setError("");
    const finalAmount = p * Math.pow(1 + r / 100 / n, n * y);
    const interest = finalAmount - p;
    setResult({ finalAmount, interest });
  };

  const reset = () => {
    setPrincipal("");
    setRate("");
    setYears("");
    setFrequency("12");
    setResult(null);
    setError("");
  };

  const fmt = (n: number) =>
    Math.round(n).toLocaleString("ja-JP");

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>複利計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">複利計算ツール</h1>
      <p className="text-muted mb-8">
        元本・年利・運用期間・複利頻度を入力して、最終金額と利息を計算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">元本 (円)</label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="例: 1000000"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">年利 (%)</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="例: 5"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">運用期間 (年)</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="例: 10"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">複利頻度</label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-card-bg"
            >
              {frequencyOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="flex gap-3">
          <button
            onClick={calculate}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            計算する
          </button>
          <button
            onClick={reset}
            className="px-5 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors"
          >
            リセット
          </button>
        </div>

        {result && (
          <div className="mt-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-background rounded-lg p-4 text-center">
                <p className="text-sm text-muted mb-1">最終金額</p>
                <p className="text-3xl font-bold text-primary">¥{fmt(result.finalAmount)}</p>
              </div>
              <div className="bg-background rounded-lg p-4 text-center">
                <p className="text-sm text-muted mb-1">利息合計</p>
                <p className="text-3xl font-bold text-green-600">¥{fmt(result.interest)}</p>
              </div>
            </div>
            <div className="bg-background rounded-lg p-4 text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-muted">元本</span>
                <span className="font-medium">¥{fmt(Number(principal))}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">利息</span>
                <span className="font-medium text-green-600">¥{fmt(result.interest)}</span>
              </div>
              <div className="flex justify-between border-t border-card-border pt-1 mt-1">
                <span className="text-muted">運用後合計</span>
                <span className="font-bold">¥{fmt(result.finalAmount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">増加率</span>
                <span className="font-medium">{((result.interest / Number(principal)) * 100).toFixed(2)}%</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">複利計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 元本（最初に預ける金額）を入力します。</p>
          <p>2. 年利（年間の利率）をパーセントで入力します。</p>
          <p>3. 運用期間（年数）と複利頻度を設定します。</p>
          <p>4. 「計算する」ボタンを押すと、最終金額と利息が表示されます。</p>
          <p>複利とは、利息にも利息がつく仕組みです。運用期間が長いほど効果が大きくなります。</p>
          <p>計算式: 最終金額 = 元本 × (1 + 年利/複利頻度) ^ (複利頻度 × 年数)</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <RelatedTools currentSlug="compound-interest" category="日常ツール" />
    </div>
  );
}
