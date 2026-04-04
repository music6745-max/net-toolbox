"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

const RATES: { code: string; name: string; toJpy: number }[] = [
  { code: "USD", name: "米ドル", toJpy: 150.0 },
  { code: "EUR", name: "ユーロ", toJpy: 162.5 },
  { code: "GBP", name: "英ポンド", toJpy: 190.0 },
  { code: "CNY", name: "中国人民元", toJpy: 20.7 },
  { code: "KRW", name: "韓国ウォン", toJpy: 0.11 },
  { code: "AUD", name: "豪ドル", toJpy: 97.0 },
  { code: "CAD", name: "カナダドル", toJpy: 110.0 },
  { code: "CHF", name: "スイスフラン", toJpy: 168.0 },
  { code: "SGD", name: "シンガポールドル", toJpy: 111.0 },
  { code: "HKD", name: "香港ドル", toJpy: 19.2 },
];

export default function CurrencyConverterPage() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const selectedRate = RATES.find((r) => r.code === fromCurrency)!;

  const convert = () => {
    const a = Number(amount);
    if (!amount || isNaN(a) || a < 0) {
      setError("有効な金額を入力してください");
      setResult(null);
      return;
    }
    setError("");
    setResult(a * selectedRate.toJpy);
  };

  const reset = () => {
    setAmount("");
    setResult(null);
    setError("");
  };

  const fmt = (n: number) => {
    if (n >= 1) return Math.round(n).toLocaleString("ja-JP");
    return n.toFixed(4);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>為替換算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">為替換算ツール</h1>
      <p className="text-muted mb-8">
        主要通貨の金額を入力して日本円に換算します。レートは参考値です。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">通貨</label>
            <select
              value={fromCurrency}
              onChange={(e) => { setFromCurrency(e.target.value); setResult(null); }}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-card-bg"
            >
              {RATES.map((r) => (
                <option key={r.code} value={r.code}>
                  {r.code} — {r.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">金額 ({fromCurrency})</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="例: 100"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="flex gap-3">
          <button
            onClick={convert}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            換算する
          </button>
          <button
            onClick={reset}
            className="px-5 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors"
          >
            リセット
          </button>
        </div>

        {result !== null && (
          <div className="mt-8">
            <div className="bg-background rounded-lg p-6 text-center">
              <p className="text-sm text-muted mb-1">
                {Number(amount).toLocaleString()} {fromCurrency} =
              </p>
              <p className="text-4xl font-bold text-primary">¥{fmt(result)}</p>
              <p className="text-xs text-muted mt-2">
                参考レート: 1 {fromCurrency} = ¥{selectedRate.toJpy.toLocaleString()}
              </p>
            </div>
          </div>
        )}

        <div className="mt-6">
          <h3 className="text-sm font-medium mb-3">参考レート一覧（対日本円）</h3>
          <div className="overflow-hidden rounded-lg border border-card-border text-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-background text-left">
                  <th className="px-4 py-2 font-medium text-muted">通貨</th>
                  <th className="px-4 py-2 font-medium text-muted">名称</th>
                  <th className="px-4 py-2 font-medium text-muted text-right">JPY換算</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-card-border">
                {RATES.map((r) => (
                  <tr
                    key={r.code}
                    className={fromCurrency === r.code ? "bg-primary/5" : ""}
                  >
                    <td className="px-4 py-2 font-mono font-bold">{r.code}</td>
                    <td className="px-4 py-2 text-muted">{r.name}</td>
                    <td className="px-4 py-2 text-right">¥{r.toJpy.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">為替換算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 換算したい通貨をドロップダウンから選択します。</p>
          <p>2. 換算したい金額を入力します。</p>
          <p>3. 「換算する」ボタンを押すと、日本円換算後の金額が表示されます。</p>
          <p>※ 掲載レートは参考値です。実際の取引レートとは異なります。最新レートは金融機関等でご確認ください。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <RelatedTools currentSlug="currency-converter" category="日常ツール" />
    </div>
  );
}
