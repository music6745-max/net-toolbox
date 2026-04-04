"use client";

import { useState } from "react";
import Link from "next/link";

type Hand = "gu" | "choki" | "pa";

const HANDS: { value: Hand; label: string; emoji: string }[] = [
  { value: "gu", label: "グー", emoji: "✊" },
  { value: "choki", label: "チョキ", emoji: "✌️" },
  { value: "pa", label: "パー", emoji: "🖐" },
];

type Result = "win" | "lose" | "draw";

function judge(player: Hand, computer: Hand): Result {
  if (player === computer) return "draw";
  if (
    (player === "gu" && computer === "choki") ||
    (player === "choki" && computer === "pa") ||
    (player === "pa" && computer === "gu")
  )
    return "win";
  return "lose";
}

function randomHand(): Hand {
  const hands: Hand[] = ["gu", "choki", "pa"];
  return hands[Math.floor(Math.random() * 3)];
}

const RESULT_LABELS: Record<Result, string> = {
  win: "あなたの勝ち！",
  lose: "コンピュータの勝ち！",
  draw: "引き分け！",
};

const RESULT_COLORS: Record<Result, string> = {
  win: "text-green-500",
  lose: "text-red-500",
  draw: "text-yellow-500",
};

export default function JankenPage() {
  const [playerHand, setPlayerHand] = useState<Hand | null>(null);
  const [computerHand, setComputerHand] = useState<Hand | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [score, setScore] = useState({ win: 0, lose: 0, draw: 0 });
  const [animating, setAnimating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const play = (hand: Hand) => {
    if (animating) return;
    setAnimating(true);
    setShowResult(false);
    setPlayerHand(hand);
    setComputerHand(null);
    setResult(null);

    setTimeout(() => {
      const comp = randomHand();
      const res = judge(hand, comp);
      setComputerHand(comp);
      setResult(res);
      setScore((prev) => ({ ...prev, [res]: prev[res] + 1 }));
      setShowResult(true);
      setAnimating(false);
    }, 600);
  };

  const reset = () => {
    setPlayerHand(null);
    setComputerHand(null);
    setResult(null);
    setScore({ win: 0, lose: 0, draw: 0 });
    setShowResult(false);
  };

  const total = score.win + score.lose + score.draw;

  const getHandEmoji = (h: Hand | null) => {
    if (!h) return "❓";
    return HANDS.find((x) => x.value === h)?.emoji ?? "❓";
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>じゃんけん</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">じゃんけんツール</h1>
      <p className="text-muted mb-8">コンピュータとじゃんけん対決！勝敗を競いましょう。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        {/* スコア */}
        <div className="flex gap-4 justify-center text-center">
          <div className="flex-1 bg-background rounded-xl p-3">
            <div className="text-2xl font-bold text-green-500">{score.win}</div>
            <div className="text-xs text-muted mt-1">勝ち</div>
          </div>
          <div className="flex-1 bg-background rounded-xl p-3">
            <div className="text-2xl font-bold text-yellow-500">{score.draw}</div>
            <div className="text-xs text-muted mt-1">引き分け</div>
          </div>
          <div className="flex-1 bg-background rounded-xl p-3">
            <div className="text-2xl font-bold text-red-500">{score.lose}</div>
            <div className="text-xs text-muted mt-1">負け</div>
          </div>
        </div>

        {/* 手の表示 */}
        <div className="flex items-center justify-around py-4">
          <div className="text-center">
            <div className={`text-7xl mb-2 transition-all duration-300 ${animating ? "animate-bounce" : ""}`}>
              {getHandEmoji(playerHand)}
            </div>
            <div className="text-sm text-muted">あなた</div>
          </div>
          <div className="text-2xl font-bold text-muted">VS</div>
          <div className="text-center">
            <div className={`text-7xl mb-2 transition-all duration-300 ${animating ? "animate-bounce" : ""}`}>
              {animating ? "🤔" : getHandEmoji(computerHand)}
            </div>
            <div className="text-sm text-muted">コンピュータ</div>
          </div>
        </div>

        {/* 結果 */}
        {showResult && result && (
          <div className={`text-center text-2xl font-bold ${RESULT_COLORS[result]}`}>
            {RESULT_LABELS[result]}
          </div>
        )}

        {/* 手選択 */}
        <div>
          <p className="text-sm text-center text-muted mb-3">手を選んでください</p>
          <div className="flex gap-3 justify-center">
            {HANDS.map((h) => (
              <button
                key={h.value}
                onClick={() => play(h.value)}
                disabled={animating}
                className="flex flex-col items-center gap-1 px-5 py-3 bg-background border border-card-border rounded-xl hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-3xl">{h.emoji}</span>
                <span className="text-sm font-medium">{h.label}</span>
              </button>
            ))}
          </div>
        </div>

        {total > 0 && (
          <div className="text-center">
            <button
              onClick={reset}
              className="text-sm text-muted hover:text-primary underline"
            >
              スコアをリセット
            </button>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">じゃんけんツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. グー・チョキ・パーのどれかをクリックして手を選びます。</p>
          <p>2. コンピュータがランダムに手を選び、勝敗が判定されます。</p>
          <p>3. 勝ち・引き分け・負けのスコアが記録されます。</p>
          <p>4. 「スコアをリセット」ボタンで記録を初期化できます。</p>
        </div>
      </section>
    </div>
  );
}
