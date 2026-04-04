"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

const PRESETS = [
  { label: "サンセット", from: "#f97316", to: "#ec4899" },
  { label: "オーシャン", from: "#06b6d4", to: "#6366f1" },
  { label: "フォレスト", from: "#22c55e", to: "#3b82f6" },
  { label: "ゴールド", from: "#f59e0b", to: "#ef4444" },
  { label: "パープル", from: "#8b5cf6", to: "#ec4899" },
  { label: "モノクロ", from: "#374151", to: "#9ca3af" },
];

export default function GradientTextPage() {
  const [text, setText] = useState("グラデーション文字");
  const [from, setFrom] = useState("#f97316");
  const [to, setTo] = useState("#ec4899");
  const [angle, setAngle] = useState(90);
  const [fontSize, setFontSize] = useState(48);
  const [fontWeight, setFontWeight] = useState("700");
  const [copied, setCopied] = useState(false);

  const gradientStyle = `linear-gradient(${angle}deg, ${from}, ${to})`;
  const css = `.gradient-text {
  font-size: ${fontSize}px;
  font-weight: ${fontWeight};
  background: ${gradientStyle};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}`;

  const copy = () => {
    navigator.clipboard.writeText(css).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>グラデーション文字生成</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">グラデーション文字生成ツール</h1>
      <p className="text-muted mb-8">グラデーション文字のCSSをリアルタイムでプレビューしながら生成します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div className="bg-background rounded-xl p-6 flex items-center justify-center min-h-24">
          <span
            style={{
              fontSize: `${fontSize}px`,
              fontWeight,
              background: gradientStyle,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1.2,
              wordBreak: "break-all",
            }}
          >
            {text || "グラデーション文字"}
          </span>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">テキスト</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">プリセット</label>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button key={p.label} onClick={() => { setFrom(p.from); setTo(p.to); }} className="text-xs border border-card-border hover:bg-background px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2">
                <span className="w-4 h-4 rounded-full inline-block" style={{ background: `linear-gradient(90deg, ${p.from}, ${p.to})` }} />
                {p.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">開始色</label>
            <div className="flex gap-2 items-center">
              <input type="color" value={from} onChange={(e) => setFrom(e.target.value)} className="w-10 h-10 rounded cursor-pointer border border-card-border" />
              <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 font-mono" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">終了色</label>
            <div className="flex gap-2 items-center">
              <input type="color" value={to} onChange={(e) => setTo(e.target.value)} className="w-10 h-10 rounded cursor-pointer border border-card-border" />
              <input type="text" value={to} onChange={(e) => setTo(e.target.value)} className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 font-mono" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">角度: {angle}°</label>
            <input type="range" value={angle} onChange={(e) => setAngle(+e.target.value)} min={0} max={360} className="w-full accent-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">フォントサイズ（px）</label>
            <input type="number" value={fontSize} onChange={(e) => setFontSize(Math.max(8, Math.min(200, +e.target.value)))} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" min={8} max={200} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">フォントウェイト</label>
            <select value={fontWeight} onChange={(e) => setFontWeight(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
              {["100","200","300","400","500","600","700","800","900"].map((w) => <option key={w} value={w}>{w}</option>)}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">生成されたCSS</label>
          <pre className="bg-background rounded-lg px-4 py-3 text-xs font-mono overflow-x-auto whitespace-pre-wrap">{css}</pre>
        </div>
        <button onClick={copy} className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          {copied ? "コピーしました！" : "CSSをコピー"}
        </button>
      </div>
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>テキストと色を設定するとグラデーション文字のプレビューとCSSが生成されます。</p>
          <p>プリセットから素早く色の組み合わせを選んだり、カラーピッカーで自由に色を設定できます。</p>
          <p>生成されたCSSをコピーして、そのままHTMLファイルで使用できます。</p>
        </div>
      </section>


      <RelatedTools currentSlug="gradient-text" category="デザイン" />
    </div>
  );
}
