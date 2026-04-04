"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

const PRESETS = [
  { label: "MP3 128kbps", bitrate: 128 },
  { label: "MP3 320kbps", bitrate: 320 },
  { label: "AAC 256kbps", bitrate: 256 },
  { label: "FLAC ~1000kbps", bitrate: 1000 },
];

function formatSize(bytes: number) {
  if (bytes >= 1073741824) return (bytes / 1073741824).toFixed(2) + " GB";
  if (bytes >= 1048576) return (bytes / 1048576).toFixed(2) + " MB";
  if (bytes >= 1024) return (bytes / 1024).toFixed(1) + " KB";
  return bytes + " B";
}

export default function AudioBitratePage() {
  const [bitrate, setBitrate] = useState(320);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(30);

  const totalSecs = hours * 3600 + minutes * 60 + seconds;
  const bytes = Math.round((bitrate * 1000 * totalSecs) / 8);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>音声ビットレート計算</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">音声ビットレート計算ツール</h1>
      <p className="text-muted mb-8">ビットレートと再生時間から音声ファイルの容量を計算します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">プリセット</label>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button
                key={p.label}
                onClick={() => setBitrate(p.bitrate)}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${bitrate === p.bitrate ? "bg-primary text-white border-primary" : "border-card-border hover:border-primary"}`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">ビットレート (kbps)</label>
          <input
            type="number"
            min={1}
            value={bitrate}
            onChange={(e) => setBitrate(Number(e.target.value))}
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">再生時間</label>
          <div className="flex gap-3 items-center">
            <div className="flex-1">
              <input
                type="number"
                min={0}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <span className="text-xs text-muted mt-1 block text-center">時間</span>
            </div>
            <div className="flex-1">
              <input
                type="number"
                min={0}
                max={59}
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
                className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <span className="text-xs text-muted mt-1 block text-center">分</span>
            </div>
            <div className="flex-1">
              <input
                type="number"
                min={0}
                max={59}
                value={seconds}
                onChange={(e) => setSeconds(Number(e.target.value))}
                className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <span className="text-xs text-muted mt-1 block text-center">秒</span>
            </div>
          </div>
        </div>

        <div className="bg-background rounded-lg p-5 text-center">
          <div className="text-3xl font-bold text-primary">{totalSecs > 0 ? formatSize(bytes) : "—"}</div>
          <div className="text-sm text-muted mt-1">推定ファイルサイズ</div>
          {totalSecs > 0 && (
            <div className="text-xs text-muted mt-2">{bytes.toLocaleString()} バイト</div>
          )}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>ビットレート（kbps）と再生時間を入力すると、音声ファイルの推定容量が表示されます。</p>
          <p>MP3・AAC・FLACなどのプリセットボタンを使うと素早く設定できます。</p>
          <p>計算式: ファイルサイズ = ビットレート × 再生秒数 ÷ 8</p>
        </div>
      </section>


      <RelatedTools currentSlug="audio-bitrate" category="画像・メディア" />
    </div>
  );
}
