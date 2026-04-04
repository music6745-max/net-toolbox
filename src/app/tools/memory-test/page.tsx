"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

type Phase = "idle" | "showing" | "input" | "correct" | "wrong" | "finished";

const INITIAL_LENGTH = 3;
const MAX_LEVEL = 10;
const SHOW_DURATION_MS = 1500;

function generateSequence(length: number): number[] {
  return Array.from({ length }, () => Math.floor(Math.random() * 10));
}

export default function MemoryTestPage() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [level, setLevel] = useState(1);
  const [sequence, setSequence] = useState<number[]>([]);
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [maxLevel, setMaxLevel] = useState(0);
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startLevel = (lvl: number) => {
    const len = INITIAL_LENGTH + lvl - 1;
    const seq = generateSequence(len);
    setSequence(seq);
    setUserInput("");
    setPhase("showing");
    setMessage("");

    timerRef.current = setTimeout(() => {
      setPhase("input");
      setTimeout(() => inputRef.current?.focus(), 50);
    }, SHOW_DURATION_MS + Math.max(0, (len - 3) * 200));
  };

  const start = () => {
    setLevel(1);
    setScore(0);
    setMaxLevel(0);
    startLevel(1);
  };

  const handleSubmit = () => {
    if (phase !== "input") return;
    const expected = sequence.join("");
    if (userInput === expected) {
      const newLevel = level + 1;
      setScore((s) => s + sequence.length * 10);
      if (newLevel > maxLevel) setMaxLevel(newLevel - 1);
      setMessage(`正解！ +${sequence.length * 10}点`);
      setPhase("correct");
      if (newLevel > MAX_LEVEL) {
        setTimeout(() => setPhase("finished"), 1200);
      } else {
        timerRef.current = setTimeout(() => {
          setLevel(newLevel);
          startLevel(newLevel);
        }, 1200);
      }
    } else {
      if (level > maxLevel) setMaxLevel(level - 1);
      setMessage(`不正解！正解は「${expected}」でした。`);
      setPhase("wrong");
      timerRef.current = setTimeout(() => setPhase("finished"), 2000);
    }
  };

  const digitLength = INITIAL_LENGTH + level - 1;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>記憶力テスト</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">記憶力テストツール</h1>
      <p className="text-muted mb-8">
        表示された数字列を記憶して入力してください。正解するたびに桁数が増えていきます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        {/* ステータス */}
        {phase !== "idle" && (
          <div className="flex gap-4 flex-wrap">
            <div className="bg-background rounded-xl px-4 py-2 text-center">
              <div className="font-bold text-xl">レベル {level}</div>
              <div className="text-xs text-muted">{digitLength}桁</div>
            </div>
            <div className="bg-background rounded-xl px-4 py-2 text-center">
              <div className="font-bold text-xl text-primary">{score}</div>
              <div className="text-xs text-muted">スコア</div>
            </div>
          </div>
        )}

        {/* 表示フェーズ */}
        {phase === "showing" && (
          <div className="text-center py-8">
            <p className="text-sm text-muted mb-4">数字を記憶してください...</p>
            <div className="flex justify-center gap-2 flex-wrap">
              {sequence.map((n, i) => (
                <span
                  key={i}
                  className="text-4xl font-bold bg-primary text-white rounded-xl w-14 h-14 flex items-center justify-center"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 入力フェーズ */}
        {phase === "input" && (
          <div className="text-center py-4">
            <p className="text-sm text-muted mb-4">
              {digitLength}桁の数字を入力してください
            </p>
            <div className="flex gap-2 justify-center mb-4">
              <input
                ref={inputRef}
                type="number"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                className="border border-card-border rounded-xl px-4 py-3 text-2xl font-mono w-48 text-center focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                placeholder="数字を入力"
                autoComplete="off"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-primary text-white px-8 py-2.5 rounded-lg font-medium hover:bg-primary-hover transition-colors"
            >
              確認
            </button>
          </div>
        )}

        {/* 正解・不正解 */}
        {(phase === "correct" || phase === "wrong") && (
          <div className={`text-center py-6 ${phase === "correct" ? "text-green-500" : "text-red-500"}`}>
            <div className="text-5xl mb-2">{phase === "correct" ? "✓" : "✗"}</div>
            <p className="text-lg font-bold">{message}</p>
          </div>
        )}

        {/* 終了 */}
        {phase === "finished" && (
          <div className="bg-background rounded-xl p-6 text-center space-y-3">
            <p className="text-xl font-bold">ゲーム終了！</p>
            <p className="text-3xl font-bold text-primary">{score} 点</p>
            <p className="text-sm text-muted">
              最大レベル: {maxLevel} / 最大桁数: {INITIAL_LENGTH + maxLevel - 1}桁
            </p>
          </div>
        )}

        {/* スタートボタン */}
        {(phase === "idle" || phase === "finished") && (
          <button
            onClick={start}
            className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-base hover:bg-primary-hover transition-colors"
          >
            {phase === "idle" ? "テスト開始" : "もう一度"}
          </button>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">記憶力テストの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 「テスト開始」をクリックすると数字の列が短時間表示されます。</p>
          <p>2. 数字が消えたら、記憶した順番通りに入力して「確認」ボタンを押します。</p>
          <p>3. 正解すると次のレベルへ進み、桁数が1桁増えます。</p>
          <p>4. 不正解でゲーム終了。最大10レベル（12桁）まで挑戦できます。</p>
          <p>短期記憶（ワーキングメモリ）のトレーニングに活用できます。</p>
        </div>
      </section>


      <RelatedTools currentSlug="memory-test" category="日常ツール" />
    </div>
  );
}
