"use client";

import { useState, useRef } from "react";
import QRCode from "qrcode";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

export default function QRCodePage() {
  const [text, setText] = useState("");
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [error, setError] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQR = async () => {
    if (!text.trim()) {
      setError("テキストまたはURLを入力してください");
      return;
    }
    setError("");
    try {
      const url = await QRCode.toDataURL(text, {
        width: 400,
        margin: 2,
        color: { dark: "#000000", light: "#ffffff" },
      });
      setQrDataUrl(url);
    } catch {
      setError("QRコードの生成に失敗しました");
    }
  };

  const downloadQR = () => {
    if (!qrDataUrl) return;
    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = qrDataUrl;
    link.click();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>QRコード作成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">QRコード作成ツール</h1>
      <p className="text-muted mb-8">
        テキストやURLを入力するだけで、QRコードを簡単に作成できます。作成したQRコードはPNG画像としてダウンロード可能です。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">
          テキストまたはURL
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="https://example.com"
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          rows={3}
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <button
          onClick={generateQR}
          className="mt-4 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          QRコードを生成
        </button>

        {qrDataUrl && (
          <div className="mt-6 text-center">
            <img
              src={qrDataUrl}
              alt="生成されたQRコード"
              className="mx-auto border border-card-border rounded-lg"
              width={300}
              height={300}
            />
            <canvas ref={canvasRef} className="hidden" />
            <button
              onClick={downloadQR}
              className="mt-4 bg-foreground text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              PNGでダウンロード
            </button>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">QRコード作成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. テキストボックスにURLやテキストを入力します。</p>
          <p>2. 「QRコードを生成」ボタンをクリックします。</p>
          <p>3. 生成されたQRコードを確認し、必要に応じてPNG画像としてダウンロードします。</p>
          <p>
            入力したデータはブラウザ内で処理されるため、サーバーに送信されることはありません。安心してご利用ください。
          </p>
        </div>
      </section>


      <RelatedTools currentSlug="qr-code" category="画像・メディア" />
    </div>
  );
}
