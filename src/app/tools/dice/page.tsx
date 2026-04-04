"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const DICE_TYPES = [4, 6, 8, 10, 12, 20] as const;
type DiceType = (typeof DICE_TYPES)[number];

interface DiceResult {
  id: number;
  value: number;
  sides: number;
  rolling: boolean;
}

const DICE_FACES: Record<number, string> = {
  1: "⚀", 2: "⚁", 3: "⚂", 4: "⚃", 5: "⚄", 6: "⚅",
};

function getDiceFace(value: number, sides: number): string {
  if (sides === 6 && value >= 1 && value <= 6) return DICE_FACES[value];
  return String(value);
}

export default function DicePage() {
  const [sides, setSides] = useState<DiceType>(6);
  const [count, setCount] = useState(1);
  const [results, setResults] = useState<DiceResult[]>([]);
  const [rolling, setRolling] = useState(false);
  const [history, setHistory] = useState<{ sides: number; values: number[]; total: number }[]>([]);

  const roll = () => {
    if (rolling) return;
    setRolling(true);

    const ids = Array.from({ length: count }, (_, i) => i);
    const initial: DiceResult[] = ids.map((id) => ({
      id,
      value: Math.floor(Math.random() * sides) + 1,
      sides,
      rolling: true,
    }));
    setResults(initial);

    const interval = setInterval(() => {
      setResults((prev) =>
        prev.map((r) => ({ ...r, value: Math.floor(Math.random() * sides) + 1 }))
      );
    }, 80);

    setTimeout(() => {
      clearInterval(interval);
      const final: DiceResult[] = ids.map((id) => ({
        id,
        value: Math.floor(Math.random() * sides) + 1,
        sides,
        rolling: false,
      }));
      setResults(final);
      setRolling(false);
      const total = final.reduce((s, r) => s + r.value, 0);
      setHistory((prev) => [
        { sides, values: final.map((r) => r.value), total },
        ...prev.slice(0, 9),
      ]);
    }, 700);
  };

  const total = results.reduce((s, r) => s + r.value, 0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>サイコロ</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">サイコロツール</h1>
      <p className="text-muted mb-8">
        各種サイコロを振ることができるオンラインダイスツールです。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">サイコロの種類</label>
          <div className="flex flex-wrap gap-2">
            {DICE_TYPES.map((d) => (
              <button
                key={d}
                onClick={() => setSides(d)}
                className={`px-4 py-2 rounded-lg text-sm font-bold border transition-colors ${
                  sides === d
                    ? "bg-primary text-white border-primary"
                    : "border-card-border hover:border-primary text-muted"
                }`}
              >
                D{d}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">個数: {count}個</label>
          <input
            type="range"
            min={1}
            max={10}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-full max-w-xs accent-primary"
          />
          <div className="flex justify-between text-xs text-muted mt-1 max-w-xs">
            <span>1</span><span>10</span>
          </div>
        </div>

        <button
          onClick={roll}
          disabled={rolling}
          className="bg-primary text-white px-8 py-3 rounded-xl text-base font-bold hover:bg-primary-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {rolling ? "振っています..." : "🎲 ダイスを振る"}
        </button>

        {results.length > 0 && (
          <div>
            <div className="flex flex-wrap gap-3 mb-4">
              {results.map((r) => (
                <div
                  key={r.id}
                  className={`bg-background border-2 rounded-xl flex items-center justify-center font-bold transition-all ${
                    rolling
                      ? "border-primary animate-pulse w-14 h-14 text-lg"
                      : "border-card-border w-14 h-14 text-2xl"
                  } ${r.sides === 6 ? "text-3xl" : "text-lg"}`}
                >
                  {getDiceFace(r.value, r.sides)}
                </div>
              ))}
            </div>

            {count > 1 && (
              <div className="text-center">
                <span className="text-sm text-muted">合計: </span>
                <span className="text-2xl font-bold text-primary">{total}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {history.length > 0 && (
        <div className="mt-6 bg-card-bg border border-card-border rounded-xl p-5">
          <h2 className="font-semibold text-sm mb-3">履歴</h2>
          <div className="space-y-2">
            {history.map((h, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className="text-muted w-12">D{h.sides}×{h.values.length}</span>
                <span className="font-mono">[{h.values.join(", ")}]</span>
                {h.values.length > 1 && (
                  <span className="text-muted ml-auto">合計 {h.total}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">サイコロツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. サイコロの種類（D4・D6・D8・D10・D12・D20）を選択します。</p>
          <p>2. スライダーで振る個数（1〜10個）を設定します。</p>
          <p>3. 「ダイスを振る」ボタンをクリックするとアニメーション付きで結果が表示されます。</p>
          <p>4. 複数個振った場合は合計値も表示されます。過去の履歴も確認できます。</p>
          <p>ボードゲーム・TRPG・各種ゲームのダイスロールにお使いください。</p>
        </div>
      </section>
    </div>
  );
}
