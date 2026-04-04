"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

export default function CssAnimationPage() {
  const [duration, setDuration] = useState(1);
  const [timing, setTiming] = useState("ease");
  const [iteration, setIteration] = useState("infinite");
  const [direction, setDirection] = useState("normal");
  const [delay, setDelay] = useState(0);
  const [fillMode, setFillMode] = useState("none");
  const [playing, setPlaying] = useState(true);
  const [copied, setCopied] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const keyframeName = "toolbox-move";

  const animationStyle: React.CSSProperties = {
    animationName: playing ? keyframeName : "none",
    animationDuration: `${duration}s`,
    animationTimingFunction: timing,
    animationIterationCount: iteration,
    animationDirection: direction,
    animationDelay: `${delay}s`,
    animationFillMode: fillMode,
  };

  const cssCode = `@keyframes ${keyframeName} {
  0%   { transform: translateX(0); }
  50%  { transform: translateX(200px); }
  100% { transform: translateX(0); }
}

.animated-box {
  animation-name: ${keyframeName};
  animation-duration: ${duration}s;
  animation-timing-function: ${timing};
  animation-iteration-count: ${iteration};
  animation-direction: ${direction};
  animation-delay: ${delay}s;
  animation-fill-mode: ${fillMode};
}`;

  const copy = async () => {
    await navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <style>{`
        @keyframes ${keyframeName} {
          0%   { transform: translateX(0); }
          50%  { transform: translateX(200px); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>CSSアニメーション生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">CSSアニメーション生成ツール</h1>
      <p className="text-muted mb-8">
        アニメーションのプロパティを設定してライブプレビューを確認し、CSSコードを生成します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">duration（秒）</label>
            <input
              type="number"
              min={0.1}
              max={10}
              step={0.1}
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">timing-function</label>
            <select
              value={timing}
              onChange={(e) => setTiming(e.target.value)}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            >
              {["ease", "ease-in", "ease-out", "ease-in-out", "linear", "step-start", "step-end"].map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">iteration-count</label>
            <select
              value={iteration}
              onChange={(e) => setIteration(e.target.value)}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            >
              {["infinite", "1", "2", "3", "5", "10"].map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">direction</label>
            <select
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            >
              {["normal", "reverse", "alternate", "alternate-reverse"].map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">delay（秒）</label>
            <input
              type="number"
              min={0}
              max={5}
              step={0.1}
              value={delay}
              onChange={(e) => setDelay(Number(e.target.value))}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">fill-mode</label>
            <select
              value={fillMode}
              onChange={(e) => setFillMode(e.target.value)}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            >
              {["none", "forwards", "backwards", "both"].map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">ライブプレビュー</span>
            <button
              onClick={() => setPlaying(!playing)}
              className="text-sm text-primary hover:text-primary-hover font-medium"
            >
              {playing ? "一時停止" : "再生"}
            </button>
          </div>
          <div className="bg-background rounded-lg p-6 overflow-hidden">
            <div
              ref={boxRef}
              style={animationStyle}
              className="w-14 h-14 bg-primary rounded-lg"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">生成されたCSS</span>
            <button onClick={copy} className="text-sm text-primary hover:text-primary-hover font-medium">
              {copied ? "コピー済み" : "コピー"}
            </button>
          </div>
          <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
            {cssCode}
          </pre>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 各プロパティ（duration・timing・iteration・direction など）を設定します。</p>
          <p>2. ライブプレビューでボックスのアニメーションをリアルタイム確認できます。</p>
          <p>3. 「コピー」ボタンで生成されたCSSコードをクリップボードにコピーします。</p>
          <p>生成されたコードは @keyframes と .animated-box のセットで構成されています。</p>
        </div>
      </section>


      <RelatedTools currentSlug="css-animation" category="デザイン" />
    </div>
  );
}
