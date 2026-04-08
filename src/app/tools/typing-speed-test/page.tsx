"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

const SAMPLE_TEXTS = [
  "The quick brown fox jumps over the lazy dog near the riverbank. Practice makes perfect when it comes to typing speed and accuracy.",
  "Programming is the art of telling another human being what one wants the computer to do. Clean code reads like well written prose.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. Keep typing and improving every single day.",
  "The only way to do great work is to love what you do. If you have not found it yet, keep looking and do not settle for less.",
  "Technology is best when it brings people together. A good developer writes code that humans can read, not just machines can execute.",
];

type Phase = "idle" | "running" | "finished";

export default function Page() {
  const [duration, setDuration] = useState<30 | 60>(60);
  const [phase, setPhase] = useState<Phase>("idle");
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [wpm, setWpm] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [errorChars, setErrorChars] = useState(0);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef<number>(0);

  const pickText = useCallback(
    () => SAMPLE_TEXTS[Math.floor(Math.random() * SAMPLE_TEXTS.length)],
    []
  );

  const start = () => {
    setText(pickText());
    setInput("");
    setTimeLeft(duration);
    setWpm(0);
    setCorrectChars(0);
    setErrorChars(0);
    setPhase("running");
    startRef.current = Date.now();
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const finish = useCallback(() => {
    setPhase("finished");
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (phase !== "running") return;
    timerRef.current = setInterval(() => {
      setTimeLeft((p) => {
        if (p <= 1) {
          finish();
          return 0;
        }
        return p - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase, finish]);

  useEffect(() => {
    if (phase !== "running") return;
    const minutes = (Date.now() - startRef.current) / 1000 / 60;
    if (minutes > 0) {
      // WPM = (correct chars / 5) / minutes
      setWpm(Math.round(correctChars / 5 / minutes));
    }
  }, [correctChars, phase]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (phase !== "running") return;
    const val = e.target.value;
    setInput(val);
    let c = 0;
    let err = 0;
    for (let i = 0; i < val.length; i++) {
      if (i < text.length && val[i] === text[i]) c++;
      else err++;
    }
    setCorrectChars(c);
    setErrorChars(err);
    if (val.length >= text.length) {
      setText((prev) => prev + " " + pickText());
    }
  };

  const accuracy =
    correctChars + errorChars > 0
      ? Math.round((correctChars / (correctChars + errorChars)) * 100)
      : 100;

  const renderText = () => {
    return text.split("").map((ch, i) => {
      let cls = "text-muted";
      if (i < input.length) {
        cls = input[i] === ch ? "text-green-500" : "text-red-500 bg-red-100 dark:bg-red-900/40 rounded";
      } else if (i === input.length) {
        cls = "text-primary border-b-2 border-primary";
      }
      return (
        <span key={i} className={cls}>
          {ch}
        </span>
      );
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>英文タイピング速度テスト</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">英文タイピング速度テスト（WPM）</h1>
      <p className="text-muted mb-8">
        英文テキストを使ってタイピング速度をWPM（1分あたり単語数）で計測。英語学習やプログラミングのウォームアップに。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        {phase === "idle" && (
          <div>
            <label className="block text-sm font-medium mb-2">テスト時間</label>
            <div className="flex gap-2">
              {([30, 60] as const).map((d) => (
                <button
                  key={d}
                  onClick={() => setDuration(d)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                    duration === d
                      ? "bg-primary text-white border-primary"
                      : "border-card-border text-muted hover:border-primary"
                  }`}
                >
                  {d}秒
                </button>
              ))}
            </div>
          </div>
        )}

        {phase !== "idle" && (
          <div className="flex gap-6 flex-wrap">
            <div className="text-center">
              <div className={`text-3xl font-bold ${timeLeft <= 10 ? "text-red-500" : "text-primary"}`}>
                {timeLeft}
              </div>
              <div className="text-xs text-muted">残り秒数</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{wpm}</div>
              <div className="text-xs text-muted">WPM</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{correctChars}</div>
              <div className="text-xs text-muted">正解文字</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{accuracy}%</div>
              <div className="text-xs text-muted">正確率</div>
            </div>
          </div>
        )}

        {phase !== "idle" && (
          <div className="bg-background rounded-xl p-4 text-base leading-loose font-mono select-none break-all">
            {renderText()}
          </div>
        )}

        {phase === "running" && (
          <textarea
            ref={inputRef}
            value={input}
            onChange={handleChange}
            rows={3}
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            placeholder="Start typing here..."
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />
        )}

        {phase === "finished" && (
          <div className="bg-background rounded-xl p-5 text-center space-y-2">
            <p className="text-lg font-bold">テスト終了！</p>
            <p className="text-4xl font-bold text-primary">{wpm} WPM</p>
            <p className="text-sm text-muted">
              正解文字数: {correctChars} / 正確率: {accuracy}%
            </p>
            <p className="text-xs text-muted">
              目安: 40WPM以下=初心者 / 60WPM=平均 / 80WPM以上=上級者 / 100WPM以上=プロ級
            </p>
          </div>
        )}

        <button
          onClick={start}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          {phase === "idle" ? "テスト開始" : "もう一度"}
        </button>
      </div>

      <section className="mt-10 bg-card-bg border border-card-border rounded-xl p-5">
        <h2 className="text-base font-bold mb-2">タイピングを本気で鍛えたい方へ</h2>
        <p className="text-sm text-muted mb-3">
          タイピング速度はプログラミング学習の土台。現役エンジニアを目指すなら、カリキュラム付きのスクールで体系的に学ぶのが近道です。
        </p>
        <Link
          href="/guide/programming-school-comparison"
          className="inline-block bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          プログラミングスクール比較ガイドを見る →
        </Link>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>テスト時間（30秒/60秒）を選び「テスト開始」を押すと英文が表示されます。表示された英文をできるだけ速く・正確にタイプしてください。</p>
          <p>WPM（Words Per Minute）は「正解文字数 ÷ 5 ÷ 分」で算出する国際標準の指標です。</p>
        </div>
      </section>

      <AffiliateSection slug="typing-speed-test" category="日常ツール" />
      <RelatedTools currentSlug="typing-speed-test" category="日常ツール" />
    </div>
  );
}
