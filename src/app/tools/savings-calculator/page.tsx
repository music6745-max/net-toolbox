"use client";

import { useState } from "react";
import Link from "next/link";

export default function SavingsCalculatorPage() {
  const [monthly, setMonthly] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<{
    totalSaved: number;
    interest: number;
    totalContributed: number;
  } | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const m = Number(monthly);
    const r = Number(rate);
    const y = Number(years);

    if (!monthly || !rate || !years || isNaN(m) || isNaN(r) || isNaN(y)) {
      setError("すべての項目を正しく入力してください");
      setResult(null);
      return;
    }
    if (m <= 0) { setError("毎月の積立額は0より大きい値を入力してください"); setResult(null); return; }
    if (r < 0 || r > 100) { setError("年利は0〜100の範囲で入力してください"); setResult(null); return; }
    if (y <= 0 || y > 100) { setError("積立期間は1〜100年の範囲で入力してください"); setResult(null); return; }

    setError("");
    const monthlyRate = r / 100 / 12;
    const months = y * 12;
    let totalSaved: number;

    if (monthlyRate === 0) {
      totalSaved = m * months;
    } else {
      totalSaved = m * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    }

    const totalContributed = m * months;
    const interest = totalSaved - totalContributed;
    setResult({ totalSaved, interest, totalContributed });
  };

  const reset = () => {
    setMonthly("");
    setRate("");
    setYears("");
    setResult(null);
    setError("");
  };

  const fmt = (n: number) => Math.round(n).toLocaleString("ja-JP");

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>積立計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">積立計算ツール</h1>
      <p className="text-muted mb-8">
        毎月の積立額・年利・積立期間を入力して、将来の総資産と受取利息を計算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">毎月の積立額 (円)</label>
            <input
              type="number"
              value={monthly}
              onChange={(e) => setMonthly(e.target.value)}
              placeholder="例: 30000"
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
            <label className="block text-sm font-medium mb-2">積立期間 (年)</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="例: 20"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
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
                <p className="text-sm text-muted mb-1">最終積立額</p>
                <p className="text-3xl font-bold text-primary">¥{fmt(result.totalSaved)}</p>
              </div>
              <div className="bg-background rounded-lg p-4 text-center">
                <p className="text-sm text-muted mb-1">受取利息</p>
                <p className="text-3xl font-bold text-green-600">¥{fmt(result.interest)}</p>
              </div>
            </div>
            <div className="bg-background rounded-lg p-4 text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-muted">積立元本合計</span>
                <span className="font-medium">¥{fmt(result.totalContributed)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">利息合計</span>
                <span className="font-medium text-green-600">¥{fmt(result.interest)}</span>
              </div>
              <div className="flex justify-between border-t border-card-border pt-1 mt-1">
                <span className="text-muted">最終積立額</span>
                <span className="font-bold">¥{fmt(result.totalSaved)}</span>
              </div>
              {result.totalContributed > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted">利息割合</span>
                  <span className="font-medium">
                    {((result.interest / result.totalSaved) * 100).toFixed(1)}%
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">積立計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 毎月の積立額（円）を入力します。</p>
          <p>2. 年利（年間の期待利回り）をパーセントで入力します。</p>
          <p>3. 積立期間（年数）を入力します。</p>
          <p>4. 「計算する」ボタンを押すと、積立完了時の総資産と受取利息が表示されます。</p>
          <p>計算式: 積立終価 = 毎月の積立額 × ((1+月利)^月数 - 1) / 月利</p>
          <p>NISAやiDeCoなどの長期積立投資のシミュレーションに活用できます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
