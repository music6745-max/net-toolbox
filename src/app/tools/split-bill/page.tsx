"use client";

import { useState } from "react";
import Link from "next/link";

export default function SplitBillPage() {
  const [total, setTotal] = useState("");
  const [people, setPeople] = useState("");
  const [tip, setTip] = useState("0");
  const [result, setResult] = useState<{
    tipAmount: number;
    grandTotal: number;
    perPerson: number;
    perPersonRounded: number;
  } | null>(null);
  const [error, setError] = useState("");

  const tipOptions = ["0", "5", "10", "15", "20"];

  const calculate = () => {
    const t = Number(total);
    const p = Number(people);
    const tipRate = Number(tip);

    if (!total || !people || isNaN(t) || isNaN(p)) {
      setError("合計金額と人数を入力してください");
      setResult(null);
      return;
    }
    if (t <= 0) { setError("合計金額は0より大きい値を入力してください"); setResult(null); return; }
    if (p < 1 || !Number.isInteger(p)) { setError("人数は1以上の整数を入力してください"); setResult(null); return; }

    setError("");
    const tipAmount = t * (tipRate / 100);
    const grandTotal = t + tipAmount;
    const perPerson = grandTotal / p;
    const perPersonRounded = Math.ceil(perPerson / 10) * 10;

    setResult({ tipAmount, grandTotal, perPerson, perPersonRounded });
  };

  const reset = () => {
    setTotal("");
    setPeople("");
    setTip("0");
    setResult(null);
    setError("");
  };

  const fmt = (n: number) => Math.round(n).toLocaleString("ja-JP");

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>割り勘計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">割り勘計算ツール</h1>
      <p className="text-muted mb-8">
        合計金額と人数を入力して、一人あたりの負担額を計算します。チップの計算もできます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-2">合計金額 (円)</label>
            <input
              type="number"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              placeholder="例: 25000"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">人数 (人)</label>
            <input
              type="number"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              placeholder="例: 4"
              min="1"
              step="1"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">チップ / 幹事費用</label>
          <div className="flex gap-2">
            {tipOptions.map((t) => (
              <button
                key={t}
                onClick={() => setTip(t)}
                className={`px-4 py-2 rounded-lg text-sm border transition-colors ${
                  tip === t
                    ? "bg-primary text-white border-primary"
                    : "border-card-border hover:bg-background"
                }`}
              >
                {t}%
              </button>
            ))}
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
                <p className="text-sm text-muted mb-1">一人あたり</p>
                <p className="text-4xl font-bold text-primary">¥{fmt(result.perPerson)}</p>
              </div>
              <div className="bg-background rounded-lg p-4 text-center">
                <p className="text-sm text-muted mb-1">一人あたり（10円切上）</p>
                <p className="text-4xl font-bold text-green-600">¥{fmt(result.perPersonRounded)}</p>
              </div>
            </div>
            <div className="bg-background rounded-lg p-4 text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-muted">合計金額</span>
                <span className="font-medium">¥{fmt(Number(total))}</span>
              </div>
              {Number(tip) > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted">チップ ({tip}%)</span>
                  <span className="font-medium">¥{fmt(result.tipAmount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-muted">支払い総額</span>
                <span className="font-medium">¥{fmt(result.grandTotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">人数</span>
                <span className="font-medium">{Number(people)}人</span>
              </div>
              <div className="flex justify-between border-t border-card-border pt-1 mt-1">
                <span className="text-muted">一人あたり</span>
                <span className="font-bold">¥{fmt(result.perPerson)}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">割り勘計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 合計金額（お会計の総額）を入力します。</p>
          <p>2. 参加人数を入力します。</p>
          <p>3. 必要に応じてチップや幹事費用の割合を選択します。</p>
          <p>4. 「計算する」ボタンを押すと、一人あたりの負担額が表示されます。</p>
          <p>10円切り上げ欄はキリよく集金したい場合の目安金額です。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
