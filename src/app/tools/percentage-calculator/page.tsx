"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type Mode = "a_of_b" | "x_percent_of_a" | "change";

export default function PercentageCalculatorPage() {
  const [mode, setMode] = useState<Mode>("a_of_b");

  // Mode 1: A is what % of B?
  const [m1A, setM1A] = useState("");
  const [m1B, setM1B] = useState("");
  const [m1Result, setM1Result] = useState<string | null>(null);

  // Mode 2: What is X% of A?
  const [m2X, setM2X] = useState("");
  const [m2A, setM2A] = useState("");
  const [m2Result, setM2Result] = useState<string | null>(null);

  // Mode 3: A increased/decreased by X% is?
  const [m3A, setM3A] = useState("");
  const [m3X, setM3X] = useState("");
  const [m3Dir, setM3Dir] = useState<"increase" | "decrease">("increase");
  const [m3Result, setM3Result] = useState<{ value: string; diff: string } | null>(null);

  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setM1Result(null);
    setM2Result(null);
    setM3Result(null);

    if (mode === "a_of_b") {
      const a = Number(m1A);
      const b = Number(m1B);
      if (!m1A || !m1B || isNaN(a) || isNaN(b)) {
        setError("AとBの値を入力してください");
        return;
      }
      if (b === 0) {
        setError("Bに0は入力できません");
        return;
      }
      setM1Result(((a / b) * 100).toFixed(4).replace(/\.?0+$/, ""));
    } else if (mode === "x_percent_of_a") {
      const x = Number(m2X);
      const a = Number(m2A);
      if (!m2X || !m2A || isNaN(x) || isNaN(a)) {
        setError("XとAの値を入力してください");
        return;
      }
      setM2Result(((x / 100) * a).toFixed(4).replace(/\.?0+$/, ""));
    } else {
      const a = Number(m3A);
      const x = Number(m3X);
      if (!m3A || !m3X || isNaN(a) || isNaN(x)) {
        setError("AとX%の値を入力してください");
        return;
      }
      const diff = (a * x) / 100;
      const value = m3Dir === "increase" ? a + diff : a - diff;
      setM3Result({
        value: value.toFixed(4).replace(/\.?0+$/, ""),
        diff: diff.toFixed(4).replace(/\.?0+$/, ""),
      });
    }
  };

  const reset = () => {
    setError("");
    setM1A(""); setM1B(""); setM1Result(null);
    setM2X(""); setM2A(""); setM2Result(null);
    setM3A(""); setM3X(""); setM3Result(null);
  };

  const tabs: { id: Mode; label: string }[] = [
    { id: "a_of_b", label: "AはBの何%？" },
    { id: "x_percent_of_a", label: "Aの X% はいくつ？" },
    { id: "change", label: "増加・減少後の値" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>パーセント計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">パーセント計算ツール</h1>
      <p className="text-muted mb-8">
        3つのモードで割合・百分率を素早く計算できます。すべての処理はブラウザ内で完結します。
      </p>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => { setMode(tab.id); setError(""); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              mode === tab.id
                ? "bg-primary text-white border-primary"
                : "border-card-border hover:bg-background"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        {/* Mode 1 */}
        {mode === "a_of_b" && (
          <div className="space-y-4">
            <p className="text-sm text-muted font-medium">A ÷ B × 100 = X%</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">A（比べる値）</label>
                <input
                  type="number"
                  value={m1A}
                  onChange={(e) => setM1A(e.target.value)}
                  placeholder="例: 25"
                  className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">B（基準値）</label>
                <input
                  type="number"
                  value={m1B}
                  onChange={(e) => setM1B(e.target.value)}
                  placeholder="例: 200"
                  className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
            </div>
            {m1Result !== null && (
              <div className="mt-4 bg-background rounded-lg p-4 text-center">
                <p className="text-sm text-muted mb-1">結果</p>
                <p className="text-4xl font-bold text-primary">{m1Result}<span className="text-2xl ml-1">%</span></p>
                <p className="text-sm text-muted mt-2">{m1A} は {m1B} の {m1Result}% です</p>
              </div>
            )}
          </div>
        )}

        {/* Mode 2 */}
        {mode === "x_percent_of_a" && (
          <div className="space-y-4">
            <p className="text-sm text-muted font-medium">A × X ÷ 100 = 結果</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">A（基準値）</label>
                <input
                  type="number"
                  value={m2A}
                  onChange={(e) => setM2A(e.target.value)}
                  placeholder="例: 5000"
                  className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">X（%）</label>
                <input
                  type="number"
                  value={m2X}
                  onChange={(e) => setM2X(e.target.value)}
                  placeholder="例: 8"
                  className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
            </div>
            {m2Result !== null && (
              <div className="mt-4 bg-background rounded-lg p-4 text-center">
                <p className="text-sm text-muted mb-1">結果</p>
                <p className="text-4xl font-bold text-primary">{m2Result}</p>
                <p className="text-sm text-muted mt-2">{m2A} の {m2X}% = {m2Result}</p>
              </div>
            )}
          </div>
        )}

        {/* Mode 3 */}
        {mode === "change" && (
          <div className="space-y-4">
            <p className="text-sm text-muted font-medium">A を X% 増加／減少させた後の値</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">A（元の値）</label>
                <input
                  type="number"
                  value={m3A}
                  onChange={(e) => setM3A(e.target.value)}
                  placeholder="例: 10000"
                  className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">X（変化率 %）</label>
                <input
                  type="number"
                  value={m3X}
                  onChange={(e) => setM3X(e.target.value)}
                  placeholder="例: 15"
                  className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="dir"
                  checked={m3Dir === "increase"}
                  onChange={() => setM3Dir("increase")}
                  className="accent-primary"
                />
                増加
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="dir"
                  checked={m3Dir === "decrease"}
                  onChange={() => setM3Dir("decrease")}
                  className="accent-primary"
                />
                減少
              </label>
            </div>
            {m3Result !== null && (
              <div className="mt-4 bg-background rounded-lg p-4 text-center">
                <p className="text-sm text-muted mb-1">
                  {m3A} を {m3X}% {m3Dir === "increase" ? "増加" : "減少"}させると
                </p>
                <p className="text-4xl font-bold text-primary">{m3Result.value}</p>
                <p className="text-sm text-muted mt-2">
                  差分: {m3Dir === "increase" ? "+" : "-"}{m3Result.diff}
                </p>
              </div>
            )}
          </div>
        )}

        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

        <div className="flex gap-3 mt-6">
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
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p><strong className="text-foreground">AはBの何%？</strong> — 「25は200の何%か」など、ある値が全体のどれくらいの割合かを求めます。</p>
          <p><strong className="text-foreground">Aの X% はいくつ？</strong> — 「5000円の8%はいくら」など、割引・税額・手数料の計算に便利です。</p>
          <p><strong className="text-foreground">増加・減少後の値</strong> — 「10000を15%増やしたらいくつ」など、値上がり・値引き後の金額を計算します。</p>
          <p>すべての処理はブラウザ内で完結し、入力データが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="percentage-calculator" category="日常ツール" />
      <RelatedTools currentSlug="percentage-calculator" category="日常ツール" />
    </div>
  );
}
