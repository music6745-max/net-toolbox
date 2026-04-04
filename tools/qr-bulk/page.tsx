"use client";

import { useState } from "react";
import Link from "next/link";
import QRCode from "qrcode";

interface QRItem {
  text: string;
  dataUrl: string;
  error?: string;
}

export default function QrBulkPage() {
  const [input, setInput] = useState("");
  const [qrSize, setQrSize] = useState(200);
  const [items, setItems] = useState<QRItem[]>([]);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    const lines = input.split("\n").map((l) => l.trim()).filter(Boolean);
    if (lines.length === 0) return;
    setLoading(true);
    const results: QRItem[] = [];
    for (const text of lines) {
      try {
        const dataUrl = await QRCode.toDataURL(text, {
          width: qrSize,
          margin: 2,
          color: { dark: "#000000", light: "#ffffff" },
        });
        results.push({ text, dataUrl });
      } catch {
        results.push({ text, dataUrl: "", error: "生成に失敗しました" });
      }
    }
    setItems(results);
    setLoading(false);
  };

  const downloadAll = () => {
    items.forEach((item, i) => {
      if (!item.dataUrl) return;
      const a = document.createElement("a");
      a.href = item.dataUrl;
      a.download = `qr-${i + 1}.png`;
      a.click();
    });
  };

  const downloadOne = (item: QRItem, index: number) => {
    const a = document.createElement("a");
    a.href = item.dataUrl;
    a.download = `qr-${index + 1}.png`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted flex items-center gap-1">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <span className="text-primary">QRコード一括生成ツール</span>
        </nav>

        <h1 className="text-2xl font-bold text-primary mb-2">QRコード一括生成ツール</h1>
        <p className="text-muted mb-8">テキストやURLを1行ずつ入力してQRコードを一括生成します。</p>

        {/* Input Card */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                テキスト・URL（1行に1つ）
              </label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={6}
                placeholder={"https://example.com\nhttps://google.com\n連絡先テキストなど"}
                className="w-full px-3 py-2 rounded-lg bg-background border border-card-border text-primary placeholder:text-muted focus:outline-none focus:border-primary transition-colors resize-y font-mono text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                QRコードサイズ: {qrSize}px
              </label>
              <input
                type="range"
                min={100}
                max={400}
                step={50}
                value={qrSize}
                onChange={(e) => setQrSize(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-muted mt-1">
                <span>100px</span>
                <span>400px</span>
              </div>
            </div>
            <button
              onClick={generate}
              disabled={!input.trim() || loading}
              className="w-full py-2.5 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? "生成中..." : "QRコードを生成する"}
            </button>
          </div>
        </div>

        {/* Results */}
        {items.length > 0 && (
          <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-primary">
                生成結果 ({items.length}件)
              </h2>
              <button
                onClick={downloadAll}
                className="px-4 py-1.5 bg-primary hover:bg-primary-hover text-white text-sm rounded-lg transition-colors"
              >
                全てダウンロード
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {items.map((item, i) => (
                <div key={i} className="bg-background border border-card-border rounded-xl p-3 flex flex-col items-center gap-2">
                  {item.error ? (
                    <div className="text-red-500 text-sm py-8">{item.error}</div>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.dataUrl} alt={`QR ${i + 1}`} className="rounded" />
                  )}
                  <p className="text-xs text-muted text-center break-all line-clamp-2">{item.text}</p>
                  {!item.error && (
                    <button
                      onClick={() => downloadOne(item, i)}
                      className="text-xs px-3 py-1 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors"
                    >
                      ダウンロード
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 使い方 */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">使い方</h2>
          <ol className="space-y-2 text-muted list-decimal list-inside">
            <li>テキストやURLを1行に1つずつ入力します</li>
            <li>QRコードのサイズをスライダーで調整します</li>
            <li>「QRコードを生成する」ボタンをクリックします</li>
            <li>個別または一括でPNG画像としてダウンロードできます</li>
          </ol>
          <p className="text-muted text-sm mt-4">
            ※ 一度に生成できる数に制限はありませんが、大量の場合は処理に時間がかかることがあります。
          </p>
        </div>
      </div>
    </div>
  );
}
