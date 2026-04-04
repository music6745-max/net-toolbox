"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

export default function LotteryPage() {
  const [items, setItems] = useState(
    "田中 太郎\n鈴木 花子\n佐藤 一郎\n山田 恵子\n中村 健司\n小林 美咲\n加藤 雄大\n渡辺 沙織"
  );
  const [count, setCount] = useState(1);
  const [winners, setWinners] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState("");
  const animationRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [flashName, setFlashName] = useState("");

  const getItemList = () =>
    items
      .split("\n")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

  const runLottery = () => {
    const list = getItemList();
    if (list.length === 0) {
      setError("候補リストを入力してください");
      return;
    }
    if (count < 1) {
      setError("当選人数は1以上にしてください");
      return;
    }
    if (count > list.length) {
      setError(`当選人数（${count}）が候補数（${list.length}）を超えています`);
      return;
    }
    setError("");
    setShowResult(false);
    setWinners([]);
    setIsAnimating(true);

    let tick = 0;
    const totalTicks = 20;
    animationRef.current = setInterval(() => {
      const random = list[Math.floor(Math.random() * list.length)];
      setFlashName(random);
      tick++;
      if (tick >= totalTicks) {
        if (animationRef.current) clearInterval(animationRef.current);
        setIsAnimating(false);
        setFlashName("");

        // Shuffle and pick
        const shuffled = [...list].sort(() => Math.random() - 0.5);
        setWinners(shuffled.slice(0, count));
        setShowResult(true);
      }
    }, 80);
  };

  const reset = () => {
    setWinners([]);
    setShowResult(false);
    setFlashName("");
    setIsAnimating(false);
    if (animationRef.current) clearInterval(animationRef.current);
  };

  const list = getItemList();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>抽選ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">抽選ツール</h1>
      <p className="text-muted mb-8">
        候補リストを入力して、ランダムに当選者を選出します。イベントやプレゼント企画にご活用ください。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <label className="block text-sm font-medium mb-2">
          候補リスト（1行に1名/1項目）
          <span className="ml-2 text-muted font-normal">{list.length}件</span>
        </label>
        <textarea
          value={items}
          onChange={(e) => setItems(e.target.value)}
          rows={8}
          placeholder="田中 太郎&#10;鈴木 花子&#10;佐藤 一郎"
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-y"
        />

        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium whitespace-nowrap">当選人数</label>
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
              min={1}
              max={list.length || 1}
              className="w-20 border border-card-border rounded-lg px-3 py-2 text-sm text-center focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
            <span className="text-sm text-muted">名</span>
          </div>
          <button
            onClick={() => setCount(Math.max(1, count - 1))}
            className="w-8 h-8 flex items-center justify-center border border-card-border rounded-lg text-sm hover:bg-background transition-colors"
          >
            −
          </button>
          <button
            onClick={() => setCount(Math.min(list.length || 1, count + 1))}
            className="w-8 h-8 flex items-center justify-center border border-card-border rounded-lg text-sm hover:bg-background transition-colors"
          >
            ＋
          </button>
        </div>

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

        <div className="flex gap-3 mt-4">
          <button
            onClick={runLottery}
            disabled={isAnimating}
            className="bg-primary text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isAnimating ? "抽選中..." : "抽選スタート！"}
          </button>
          {showResult && (
            <button
              onClick={reset}
              className="border border-card-border px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-background transition-colors"
            >
              リセット
            </button>
          )}
        </div>
      </div>

      {/* Animation display */}
      {isAnimating && (
        <div className="bg-card-bg border border-card-border rounded-xl p-8 mb-6 text-center">
          <p className="text-xs text-muted mb-2">抽選中...</p>
          <p className="text-3xl font-bold text-primary animate-pulse">{flashName}</p>
        </div>
      )}

      {/* Results */}
      {showResult && winners.length > 0 && (
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h2 className="text-base font-semibold mb-4">
            当選者 {winners.length}名
          </h2>
          <ul className="space-y-3">
            {winners.map((w, i) => (
              <li
                key={i}
                className="flex items-center gap-3 bg-background rounded-lg px-5 py-3"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white text-xs font-bold shrink-0">
                  {i + 1}
                </span>
                <span className="font-semibold text-lg">{w}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted mt-4">
            全{list.length}名の候補から{winners.length}名を選出しました。
          </p>
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">抽選ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 候補リストに1行1名（1項目）で入力してください。</p>
          <p>2. 「当選人数」を設定します（デフォルトは1名）。</p>
          <p>3. 「抽選スタート！」ボタンを押すと、アニメーション後に当選者が表示されます。</p>
          <p>4. 「リセット」ボタンで結果をクリアして再抽選できます。</p>
          <p>5. すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <RelatedTools currentSlug="lottery" category="日常ツール" />
    </div>
  );
}
