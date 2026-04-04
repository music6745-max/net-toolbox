"use client";

import { useState } from "react";
import Link from "next/link";

export default function RandomNumberPage() {
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [count, setCount] = useState("1");
  const [allowDuplicates, setAllowDuplicates] = useState(true);
  const [results, setResults] = useState<number[]>([]);
  const [error, setError] = useState("");

  const generate = () => {
    const minN = parseInt(min, 10);
    const maxN = parseInt(max, 10);
    const countN = parseInt(count, 10);

    if (isNaN(minN) || isNaN(maxN)) {
      setError("最小値と最大値を入力してください");
      return;
    }
    if (minN >= maxN) {
      setError("最小値は最大値より小さい値を入力してください");
      return;
    }
    if (isNaN(countN) || countN < 1 || countN > 100) {
      setError("生成する個数は1〜100の範囲で入力してください");
      return;
    }
    const range = maxN - minN + 1;
    if (!allowDuplicates && countN > range) {
      setError(`重複なしで${countN}個生成するには、範囲（${range}個）を広げてください`);
      return;
    }
    setError("");

    if (allowDuplicates) {
      const nums: number[] = [];
      for (let i = 0; i < countN; i++) {
        nums.push(Math.floor(Math.random() * range) + minN);
      }
      setResults(nums);
    } else {
      const pool: number[] = [];
      for (let i = minN; i <= maxN; i++) pool.push(i);
      // Fisher-Yates shuffle, take first countN
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      setResults(pool.slice(0, countN));
    }
  };

  const reset = () => {
    setMin("1");
    setMax("100");
    setCount("1");
    setAllowDuplicates(true);
    setResults([]);
    setError("");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>乱数生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">乱数生成ツール</h1>
      <p className="text-muted mb-8">
        指定した範囲内のランダムな整数を生成します。複数生成・重複なし設定にも対応。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block text-sm font-medium mb-2">最小値</label>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">最大値</label>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">生成する個数 (1〜100)</label>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            min="1"
            max="100"
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        <div className="mb-6">
          <label className="flex items-center gap-2 cursor-pointer text-sm">
            <input
              type="checkbox"
              checked={!allowDuplicates}
              onChange={(e) => setAllowDuplicates(!e.target.checked)}
              className="accent-primary w-4 h-4"
            />
            重複を許可しない
          </label>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="flex gap-3">
          <button
            onClick={generate}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            生成する
          </button>
          <button
            onClick={reset}
            className="px-5 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors"
          >
            リセット
          </button>
        </div>

        {results.length > 0 && (
          <div className="mt-8">
            {results.length === 1 ? (
              <div className="text-center">
                <p className="text-xs text-muted mb-2">生成された乱数</p>
                <p className="text-6xl font-bold text-primary font-mono">{results[0]}</p>
              </div>
            ) : (
              <div>
                <p className="text-xs text-muted mb-3">生成された乱数（{results.length}個）</p>
                <div className="flex flex-wrap gap-2">
                  {results.map((n, i) => (
                    <span
                      key={i}
                      className="bg-background border border-card-border rounded-lg px-3 py-1.5 text-sm font-mono font-medium text-primary"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">乱数生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 最小値と最大値を入力して乱数の範囲を指定します（整数のみ対応）。</p>
          <p>2. 生成する個数を1〜100の範囲で指定します。</p>
          <p>3. 「重複を許可しない」にチェックを入れると、同じ数字が複数回出ないよう生成します（抽選などに便利）。</p>
          <p>4. 「生成する」ボタンをクリックするとランダムな整数が表示されます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
