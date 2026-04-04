"use client";
import { useState } from "react";
import Link from "next/link";

const PRESETS = [
  { label: "正方形 (400×400)", w: 400, h: 400 },
  { label: "バナー (728×90)", w: 728, h: 90 },
  { label: "16:9 (1280×720)", w: 1280, h: 720 },
  { label: "ブログ (800×400)", w: 800, h: 400 },
  { label: "アイコン (64×64)", w: 64, h: 64 },
  { label: "OGP (1200×630)", w: 1200, h: 630 },
];

export default function PlaceholderImagePage() {
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(300);
  const [provider, setProvider] = useState<"picsum" | "placeholder">("picsum");
  const [seed, setSeed] = useState(10);
  const [bgColor, setBgColor] = useState("cccccc");
  const [textColor, setTextColor] = useState("333333");
  const [label, setLabel] = useState("");
  const [copied, setCopied] = useState(false);

  const picsumUrl = `https://picsum.photos/seed/${seed}/${width}/${height}`;
  const placeholderUrl = `https://via.placeholder.com/${width}x${height}/${bgColor.replace("#", "")}/${textColor.replace("#", "")}${label ? `?text=${encodeURIComponent(label)}` : ""}`;
  const url = provider === "picsum" ? picsumUrl : placeholderUrl;

  const copy = () => {
    navigator.clipboard.writeText(url).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>プレースホルダー画像生成</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">プレースホルダー画像生成ツール</h1>
      <p className="text-muted mb-8">ダミー画像のURLを生成してプレビューします。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">サービス</label>
          <div className="flex gap-2">
            <button onClick={() => setProvider("picsum")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${provider === "picsum" ? "bg-primary text-white" : "border border-card-border hover:bg-background"}`}>
              picsum.photos（写真）
            </button>
            <button onClick={() => setProvider("placeholder")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${provider === "placeholder" ? "bg-primary text-white" : "border border-card-border hover:bg-background"}`}>
              via.placeholder.com（シンプル）
            </button>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">プリセット</label>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button key={p.label} onClick={() => { setWidth(p.w); setHeight(p.h); }} className="text-xs border border-card-border hover:bg-background px-3 py-1.5 rounded-lg transition-colors">
                {p.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">幅（px）</label>
            <input type="number" value={width} onChange={(e) => setWidth(Math.max(1, Math.min(2000, +e.target.value)))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" min={1} max={2000} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">高さ（px）</label>
            <input type="number" value={height} onChange={(e) => setHeight(Math.max(1, Math.min(2000, +e.target.value)))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" min={1} max={2000} />
          </div>
        </div>
        {provider === "picsum" && (
          <div>
            <label className="block text-sm font-medium mb-2">シード（画像の種類）</label>
            <div className="flex gap-2 items-center">
              <input type="number" value={seed} onChange={(e) => setSeed(+e.target.value)} className="w-32 border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" min={1} />
              <button onClick={() => setSeed(Math.floor(Math.random() * 100) + 1)} className="border border-card-border hover:bg-background px-3 py-2.5 rounded-lg text-sm transition-colors">ランダム</button>
            </div>
          </div>
        )}
        {provider === "placeholder" && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">背景色（HEX）</label>
              <input type="text" value={bgColor} onChange={(e) => setBgColor(e.target.value.replace("#", ""))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="cccccc" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">文字色（HEX）</label>
              <input type="text" value={textColor} onChange={(e) => setTextColor(e.target.value.replace("#", ""))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="333333" />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-2">テキスト（省略可）</label>
              <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="400x300" />
            </div>
          </div>
        )}
        <div>
          <label className="block text-sm font-medium mb-2">生成されたURL</label>
          <div className="bg-background rounded-lg px-4 py-3 text-xs font-mono break-all text-primary">{url}</div>
        </div>
        <button onClick={copy} className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          {copied ? "コピーしました！" : "URLをコピー"}
        </button>
        <div>
          <label className="block text-sm font-medium mb-2">プレビュー</label>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url} alt="placeholder preview" className="max-w-full rounded-lg border border-card-border" style={{ maxHeight: "300px" }} />
        </div>
      </div>
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>幅・高さを入力するとダミー画像のURLが生成されます。</p>
          <p>picsum.photos はリアルな写真のダミー画像、via.placeholder.com はシンプルなカラーブロック画像を生成します。</p>
          <p>生成されたURLをHTMLの src 属性にそのまま使用できます。</p>
        </div>
      </section>
    </div>
  );
}
