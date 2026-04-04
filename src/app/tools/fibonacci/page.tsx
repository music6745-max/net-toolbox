"use client";

import { useState } from "react";
import Link from "next/link";

function generateFibonacci(n: number): bigint[] {
  if (n <= 0) return [];
  if (n === 1) return [BigInt(0)];
  const seq: bigint[] = [BigInt(0), BigInt(1)];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
}

function formatBig(n: bigint): string {
  const s = n.toString();
  if (s.length <= 20) return s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return s.slice(0, 8) + "..." + `(${s.length}桁)`;
}

export default function FibonacciPage() {
  const [nInput, setNInput] = useState("15");
  const [sequence, setSequence] = useState<bigint[] | null>(null);
  const [error, setError] = useState("");

  const generate = () => {
    const n = Number(nInput);
    if (!nInput || isNaN(n) || !Number.isInteger(n) || n < 1) {
      setError("1以上の整数を入力してください");
      setSequence(null);
      return;
    }
    if (n > 200) {
      setError("200以下の数を入力してください");
      setSequence(null);
      return;
    }
    setError("");
    setSequence(generateFibonacci(n));
  };

  const maxVal = sequence ? sequence[sequence.length - 1] : BigInt(0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>フィボナッチ数列</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">フィボナッチ数列ツール</h1>
      <p className="text-muted mb-8">
        項数を入力するとフィボナッチ数列を生成して表示します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="flex gap-3 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">項数 n</label>
            <input
              type="number"
              value={nInput}
              onChange={(e) => setNInput(e.target.value)}
              placeholder="例: 15"
              min="1"
              max="200"
              className="w-32 border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={generate}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          生成する
        </button>

        {sequence && (
          <div className="mt-8">
            <p className="text-sm text-muted mb-4">
              F(1) 〜 F({sequence.length}) の{sequence.length}項を表示しています。
            </p>

            {/* Visual bars for first 20 */}
            {sequence.length <= 30 && maxVal > BigInt(0) && (
              <div className="mb-6 space-y-1.5">
                {sequence.map((val, i) => {
                  const pct = maxVal > BigInt(0) ? Number((val * BigInt(1000)) / maxVal) / 10 : 0;
                  return (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <span className="w-12 text-right text-muted">F({i + 1})</span>
                      <div className="flex-1 bg-background rounded-full h-5 relative overflow-hidden border border-card-border">
                        <div
                          className="h-full bg-primary/70 rounded-full transition-all duration-300"
                          style={{ width: `${Math.max(pct, 0.5)}%` }}
                        />
                        <span className="absolute inset-0 flex items-center pl-2 font-mono text-xs">
                          {formatBig(val)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Table */}
            <div className="overflow-hidden rounded-lg border border-card-border text-sm max-h-96 overflow-y-auto">
              <table className="w-full">
                <thead className="sticky top-0">
                  <tr className="bg-background text-left">
                    <th className="px-4 py-2 font-medium text-muted">項</th>
                    <th className="px-4 py-2 font-medium text-muted">値</th>
                    {sequence.length <= 80 && (
                      <th className="px-4 py-2 font-medium text-muted">比率 (F(n)/F(n-1))</th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-card-border">
                  {sequence.map((val, i) => {
                    const ratio =
                      i > 0 && sequence[i - 1] > BigInt(0)
                        ? (Number(val) / Number(sequence[i - 1])).toFixed(6)
                        : "-";
                    return (
                      <tr key={i}>
                        <td className="px-4 py-2 text-muted">F({i + 1})</td>
                        <td className="px-4 py-2 font-mono">{formatBig(val)}</td>
                        {sequence.length <= 80 && (
                          <td className="px-4 py-2 font-mono text-muted text-xs">{ratio}</td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-muted mt-3">
              黄金比 φ ≈ 1.618033... に収束していきます。
            </p>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">フィボナッチ数列ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 生成したい項数（n）を入力します（最大200）。</p>
          <p>2. 「生成する」ボタンをクリックすると数列が表示されます。</p>
          <p>フィボナッチ数列は F(1)=0, F(2)=1, F(n)=F(n-1)+F(n-2) で定義される数列です。</p>
          <p>隣り合う項の比率は黄金比（約1.618）に収束します。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
