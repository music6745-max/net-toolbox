"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const SAMPLE_TEXTS = [
  "日本語のタイピング練習をしましょう。毎日少しずつ練習することで速度が上がります。正確さも大切にしながら、リズムよく入力することが上達の近道です。",
  "プログラミングを学ぶには毎日コードを書くことが大切です。小さなプログラムから始めて、徐々に複雑な課題に挑戦していきましょう。",
  "インターネットの普及により、情報へのアクセスが容易になりました。正確な情報を見極める力を養うことが現代社会では重要です。",
  "タイピングは現代のビジネスに欠かせないスキルです。速く正確にタイプできれば、作業効率が大幅に向上します。",
  "日本の四季はそれぞれに美しさがあります。春の桜、夏の青空、秋の紅葉、冬の雪景色と、季節ごとに異なる風景を楽しむことができます。",
];

type Phase = "idle" | "running" | "finished";

export default function TypingTestPage() {
  const [duration, setDuration] = useState<30 | 60>(60);
  const [phase, setPhase] = useState<Phase>("idle");
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [charCount, setCharCount] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [cpm, setCpm] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);

  const getNewText = useCallback(() => {
    return SAMPLE_TEXTS[Math.floor(Math.random() * SAMPLE_TEXTS.length)];
  }, []);

  const start = () => {
    const t = getNewText();
    setText(t);
    setInput("");
    setTimeLeft(duration);
    setCharCount(0);
    setErrorCount(0);
    setCpm(0);
    setPhase("running");
    startTimeRef.current = Date.now();
    inputRef.current?.focus();
  };

  const finish = useCallback(() => {
    setPhase("finished");
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (phase !== "running") return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          finish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase, finish]);

  useEffect(() => {
    if (phase !== "running") return;
    const elapsed = (Date.now() - startTimeRef.current) / 1000 / 60;
    if (elapsed > 0) setCpm(Math.round(charCount / elapsed));
  }, [charCount, phase]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (phase !== "running") return;
    const val = e.target.value;
    setInput(val);

    let correct = 0;
    let errors = 0;
    for (let i = 0; i < val.length; i++) {
      if (i < text.length && val[i] === text[i]) correct++;
      else errors++;
    }
    setCharCount(correct);
    setErrorCount(errors);

    if (val === text) {
      const newText = getNewText();
      setText(newText);
      setInput("");
    }
  };

  const accuracy =
    charCount + errorCount > 0
      ? Math.round((charCount / (charCount + errorCount)) * 100)
      : 100;

  const renderText = () => {
    return text.split("").map((char, i) => {
      let cls = "text-muted";
      if (i < input.length) {
        cls = input[i] === char ? "text-green-500" : "text-red-500 bg-red-100 rounded";
      } else if (i === input.length) {
        cls = "text-primary border-b-2 border-primary";
      }
      return (
        <span key={i} className={cls}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>タイピング速度テスト</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">タイピング速度テストツール</h1>
      <p className="text-muted mb-8">
        日本語テキストのタイピング速度を計測します。CPM（1分あたり文字数）を測定します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        {/* 時間設定 */}
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

        {/* タイマー・スコア */}
        {phase !== "idle" && (
          <div className="flex gap-6 flex-wrap">
            <div className="text-center">
              <div className={`text-3xl font-bold ${timeLeft <= 10 ? "text-red-500" : "text-primary"}`}>
                {timeLeft}
              </div>
              <div className="text-xs text-muted">残り秒数</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{cpm}</div>
              <div className="text-xs text-muted">CPM</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{charCount}</div>
              <div className="text-xs text-muted">正解文字</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{accuracy}%</div>
              <div className="text-xs text-muted">正確さ</div>
            </div>
          </div>
        )}

        {/* テキスト表示 */}
        {phase !== "idle" && (
          <div className="bg-background rounded-xl p-4 text-base leading-loose font-medium select-none">
            {renderText()}
          </div>
        )}

        {/* 入力欄 */}
        {phase === "running" && (
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInput}
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            placeholder="ここに入力してください..."
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />
        )}

        {/* 結果 */}
        {phase === "finished" && (
          <div className="bg-background rounded-xl p-5 text-center space-y-2">
            <p className="text-lg font-bold">テスト終了！</p>
            <p className="text-3xl font-bold text-primary">{cpm} CPM</p>
            <p className="text-sm text-muted">正解文字数: {charCount} / 正確さ: {accuracy}%</p>
          </div>
        )}

        <button
          onClick={start}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          {phase === "idle" ? "テスト開始" : "もう一度"}
        </button>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">タイピング速度テストの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. テスト時間（30秒・60秒）を選択します。</p>
          <p>2. 「テスト開始」ボタンをクリックすると日本語テキストが表示されます。</p>
          <p>3. 表示されたテキストをできるだけ速く・正確に入力します。</p>
          <p>4. 時間終了後にCPM（1分あたり文字数）と正確さが表示されます。</p>
          <p>一般的なタイピング速度の目安: 200CPM以下=初心者、300CPM=中級者、500CPM以上=上級者。</p>
        </div>
      </section>
    </div>
  );
}
