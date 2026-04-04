"use client";

import { useState } from "react";
import Link from "next/link";

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes.toFixed(0)} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  return `${(bytes / 1024 / 1024 / 1024).toFixed(3)} GB`;
}

const PRESETS = [
  { label: "YouTube 4K (2160p)", width: 3840, height: 2160, bitrate: 45 },
  { label: "YouTube 1080p", width: 1920, height: 1080, bitrate: 8 },
  { label: "YouTube 720p", width: 1280, height: 720, bitrate: 5 },
  { label: "Twitter 動画", width: 1280, height: 720, bitrate: 6 },
  { label: "Instagram Reels", width: 1080, height: 1920, bitrate: 3.5 },
  { label: "TikTok", width: 1080, height: 1920, bitrate: 4 },
];

export default function VideoSizeCalculatorPage() {
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(1080);
  const [bitrateVideo, setBitrateVideo] = useState(8);
  const [bitrateAudio, setBitrateAudio] = useState(192);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [overhead, setOverhead] = useState(5);

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  const totalBitrate = bitrateVideo * 1000 + bitrateAudio; // kbps
  const rawBytes = (totalBitrate * 1000 / 8) * totalSeconds;
  const finalBytes = rawBytes * (1 + overhead / 100);

  const applyPreset = (p: typeof PRESETS[0]) => {
    setWidth(p.width);
    setHeight(p.height);
    setBitrateVideo(p.bitrate);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>動画容量計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">動画容量計算ツール</h1>
      <p className="text-muted mb-8">
        解像度・ビットレート・再生時間を入力して動画ファイルの推定容量を計算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        <div>
          <p className="text-sm font-medium mb-2">プリセット</p>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button key={p.label} onClick={() => applyPreset(p)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium border border-card-border hover:border-primary hover:text-primary transition-colors">
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">幅（px）</label>
            <input type="number" min={1} value={width} onChange={(e) => setWidth(Number(e.target.value))}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">高さ（px）</label>
            <input type="number" min={1} value={height} onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">映像ビットレート（Mbps）</label>
            <input type="number" min={0.1} step={0.1} value={bitrateVideo} onChange={(e) => setBitrateVideo(Number(e.target.value))}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">音声ビットレート（kbps）</label>
            <select value={bitrateAudio} onChange={(e) => setBitrateAudio(Number(e.target.value))}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
              {[64, 96, 128, 192, 256, 320].map((v) => <option key={v} value={v}>{v} kbps</option>)}
            </select>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium mb-2">再生時間</p>
          <div className="flex items-center gap-2">
            <input type="number" min={0} max={23} value={hours} onChange={(e) => setHours(Number(e.target.value))}
              className="w-20 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
            <span className="text-sm text-muted">時間</span>
            <input type="number" min={0} max={59} value={minutes} onChange={(e) => setMinutes(Number(e.target.value))}
              className="w-20 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
            <span className="text-sm text-muted">分</span>
            <input type="number" min={0} max={59} value={seconds} onChange={(e) => setSeconds(Number(e.target.value))}
              className="w-20 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
            <span className="text-sm text-muted">秒</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">コンテナオーバーヘッド: {overhead}%</label>
          <input type="range" min={0} max={20} value={overhead} onChange={(e) => setOverhead(Number(e.target.value))} className="w-full" />
          <p className="text-xs text-muted mt-1">コンテナフォーマット（MP4・MKVなど）のメタデータによるサイズ増加の目安</p>
        </div>

        <div className="bg-background rounded-xl p-5 space-y-3 border border-card-border">
          <h3 className="text-sm font-semibold">計算結果</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-muted">解像度</p>
              <p className="text-sm font-mono font-medium">{width} × {height} px</p>
            </div>
            <div>
              <p className="text-xs text-muted">合計ビットレート</p>
              <p className="text-sm font-mono font-medium">{(totalBitrate / 1000).toFixed(2)} Mbps</p>
            </div>
            <div>
              <p className="text-xs text-muted">再生時間</p>
              <p className="text-sm font-mono font-medium">
                {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
                {totalSeconds > 0 && <span className="text-muted text-xs ml-1">（{totalSeconds}秒）</span>}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted">推定ファイルサイズ</p>
              <p className="text-xl font-bold text-primary">{totalSeconds > 0 ? formatBytes(finalBytes) : "—"}</p>
            </div>
          </div>
          {totalSeconds > 0 && (
            <div className="border-t border-card-border pt-3 text-xs text-muted space-y-1">
              <p>計算式: ({bitrateVideo} Mbps + {bitrateAudio} kbps) × {totalSeconds}秒 ÷ 8 × オーバーヘッド係数</p>
              <p>参考目安: MB = {(finalBytes / 1024 / 1024).toFixed(1)} MB / GB = {(finalBytes / 1024 / 1024 / 1024).toFixed(4)} GB</p>
            </div>
          )}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. プリセットから用途を選択するか、解像度・ビットレートを手動入力します。</p>
          <p>2. 再生時間（時・分・秒）を入力します。</p>
          <p>3. 推定ファイルサイズが自動計算されます。</p>
          <p>ビットレートはエンコード設定によって変わるため、実際のサイズとは異なる場合があります。</p>
        </div>
      </section>
    </div>
  );
}
