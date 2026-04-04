"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

const VIEWPORTS = [
  { label: "モバイル", width: 375, icon: "📱" },
  { label: "タブレット", width: 768, icon: "📟" },
  { label: "デスクトップ", width: 1280, icon: "🖥️" },
];

export default function ResponsiveTesterPage() {
  const [inputUrl, setInputUrl] = useState("");
  const [url, setUrl] = useState("");
  const [activeView, setActiveView] = useState(0);
  const [scale, setScale] = useState(0.5);
  const [error, setError] = useState("");

  const load = () => {
    const raw = inputUrl.trim();
    if (!raw) { setError("URLを入力してください"); return; }
    let normalized = raw;
    if (!/^https?:\/\//i.test(normalized)) normalized = "https://" + normalized;
    try {
      new URL(normalized);
      setUrl(normalized);
      setError("");
    } catch {
      setError("無効なURLです");
    }
  };

  const vp = VIEWPORTS[activeView];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>レスポンシブテスター</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">レスポンシブテスターツール</h1>
      <p className="text-muted mb-8">
        URLを入力してモバイル・タブレット・デスクトップの各画面サイズでの表示を確認します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && load()}
            placeholder="https://example.com"
            className="flex-1 border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
          <button onClick={load}
            className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors whitespace-nowrap">
            表示
          </button>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex gap-2">
            {VIEWPORTS.map((v, i) => (
              <button key={v.label} onClick={() => setActiveView(i)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${activeView === i ? "bg-primary text-white border-primary" : "border-card-border hover:border-primary hover:text-primary"}`}>
                {v.label} ({v.width}px)
              </button>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2 text-sm text-muted">
            <span>縮小率:</span>
            <select value={scale} onChange={(e) => setScale(Number(e.target.value))}
              className="border border-card-border rounded px-2 py-1 text-sm">
              <option value={0.3}>30%</option>
              <option value={0.4}>40%</option>
              <option value={0.5}>50%</option>
              <option value={0.6}>60%</option>
              <option value={0.75}>75%</option>
              <option value={1}>100%</option>
            </select>
          </div>
        </div>

        {url ? (
          <div className="overflow-auto bg-background rounded-lg p-4">
            <div style={{ width: vp.width * scale, height: 600 * scale, position: "relative" }}>
              <iframe
                src={url}
                style={{
                  width: vp.width,
                  height: 600,
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                  border: "1px solid",
                  borderRadius: "8px",
                }}
                title={`${vp.label}プレビュー`}
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            </div>
            <p className="text-xs text-muted mt-2 text-center">
              {vp.label} — {vp.width}px × 600px（表示倍率 {Math.round(scale * 100)}%）
            </p>
          </div>
        ) : (
          <div className="bg-background rounded-lg p-10 text-center text-muted text-sm">
            URLを入力して「表示」ボタンを押してください
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 確認したいWebサイトのURLを入力して「表示」ボタンを押します。</p>
          <p>2. モバイル（375px）・タブレット（768px）・デスクトップ（1280px）のタブで切り替えます。</p>
          <p>3. 縮小率を調整してプレビューの表示サイズを変更できます。</p>
          <p>※ X-Frame-Options や CSP により表示できないサイトがあります。その場合は実際のブラウザで確認してください。</p>
        </div>
      </section>


      <RelatedTools currentSlug="responsive-tester" category="開発ツール" />
    </div>
  );
}
