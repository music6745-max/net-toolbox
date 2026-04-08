"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

const EMOJIS = ["🍎","🍌","🍇","🍓","🍊","🍉","🍒","🍑","🥝","🍍","🥑","🌽","🥕","🍆","🥦","🍄","🌶️","🫐"];

type Card = {
  id: number;
  value: string;
  flipped: boolean;
  matched: boolean;
};

type Size = 4 | 6;

function buildDeck(size: Size): Card[] {
  const pairCount = (size * size) / 2;
  const chosen = EMOJIS.slice(0, pairCount);
  const doubled = [...chosen, ...chosen];
  for (let i = doubled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [doubled[i], doubled[j]] = [doubled[j], doubled[i]];
  }
  return doubled.map((v, i) => ({ id: i, value: v, flipped: false, matched: false }));
}

export default function Page() {
  const [size, setSize] = useState<Size>(4);
  const [cards, setCards] = useState<Card[]>(() => buildDeck(4));
  const [selected, setSelected] = useState<number[]>([]);
  const [turns, setTurns] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [started, setStarted] = useState(false);
  const [won, setWon] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const reset = useCallback(
    (s: Size) => {
      setSize(s);
      setCards(buildDeck(s));
      setSelected([]);
      setTurns(0);
      setSeconds(0);
      setStarted(false);
      setWon(false);
      if (timerRef.current) clearInterval(timerRef.current);
    },
    []
  );

  useEffect(() => {
    if (!started || won) return;
    timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [started, won]);

  const flip = (id: number) => {
    if (won) return;
    if (!started) setStarted(true);
    if (selected.length === 2) return;
    const card = cards.find((c) => c.id === id);
    if (!card || card.flipped || card.matched) return;
    const newCards = cards.map((c) => (c.id === id ? { ...c, flipped: true } : c));
    setCards(newCards);
    const newSelected = [...selected, id];
    setSelected(newSelected);
    if (newSelected.length === 2) {
      setTurns((t) => t + 1);
      const [aId, bId] = newSelected;
      const a = newCards.find((c) => c.id === aId)!;
      const b = newCards.find((c) => c.id === bId)!;
      if (a.value === b.value) {
        setTimeout(() => {
          setCards((cs) =>
            cs.map((c) =>
              c.id === aId || c.id === bId ? { ...c, matched: true } : c
            )
          );
          setSelected([]);
        }, 400);
      } else {
        setTimeout(() => {
          setCards((cs) =>
            cs.map((c) =>
              c.id === aId || c.id === bId ? { ...c, flipped: false } : c
            )
          );
          setSelected([]);
        }, 800);
      }
    }
  };

  useEffect(() => {
    if (cards.length > 0 && cards.every((c) => c.matched)) {
      setWon(true);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }, [cards]);

  const mm = Math.floor(seconds / 60).toString().padStart(2, "0");
  const ss = (seconds % 60).toString().padStart(2, "0");

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>神経衰弱メモリーゲーム</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">神経衰弱メモリーゲーム</h1>
      <p className="text-muted mb-8">
        カードをめくって同じ絵柄をそろえる脳トレゲーム。4×4と6×6から難易度を選べます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex gap-2">
            {([4, 6] as const).map((s) => (
              <button
                key={s}
                onClick={() => reset(s)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                  size === s
                    ? "bg-primary text-white border-primary"
                    : "border-card-border text-muted hover:border-primary"
                }`}
              >
                {s}×{s}
              </button>
            ))}
          </div>
          <button
            onClick={() => reset(size)}
            className="border border-card-border px-4 py-2 rounded-lg text-sm font-medium hover:border-primary transition-colors"
          >
            リセット
          </button>
          <div className="ml-auto flex gap-4 text-sm">
            <div><span className="text-muted">ターン:</span> <span className="font-bold">{turns}</span></div>
            <div><span className="text-muted">タイム:</span> <span className="font-bold font-mono">{mm}:{ss}</span></div>
          </div>
        </div>

        <div
          className="grid gap-2 sm:gap-3"
          style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
        >
          {cards.map((card) => {
            const show = card.flipped || card.matched;
            return (
              <button
                key={card.id}
                onClick={() => flip(card.id)}
                className={`aspect-square rounded-lg text-2xl sm:text-4xl flex items-center justify-center transition-all duration-300 ${
                  show
                    ? card.matched
                      ? "bg-green-100 dark:bg-green-900/40 border-2 border-green-500"
                      : "bg-primary/10 border-2 border-primary"
                    : "bg-background border border-card-border hover:border-primary"
                }`}
              >
                {show ? card.value : "?"}
              </button>
            );
          })}
        </div>

        {won && (
          <div className="bg-background rounded-xl p-5 text-center space-y-2">
            <p className="text-lg font-bold">🎉 クリア！</p>
            <p className="text-sm text-muted">
              ターン数: <span className="font-bold text-primary">{turns}</span> / タイム: <span className="font-bold text-primary font-mono">{mm}:{ss}</span>
            </p>
            <button
              onClick={() => reset(size)}
              className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors mt-2"
            >
              もう一度プレイ
            </button>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">遊び方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>カードをクリックしてめくり、同じ絵柄のペアを見つけましょう。全てのペアを揃えるとクリアです。</p>
          <p>少ないターン数と短時間でのクリアを目指しましょう。毎日遊ぶと記憶力トレーニングに最適です。</p>
        </div>
      </section>

      <AffiliateSection slug="memory-card-game" category="日常ツール" />
      <RelatedTools currentSlug="memory-card-game" category="日常ツール" />
    </div>
  );
}
