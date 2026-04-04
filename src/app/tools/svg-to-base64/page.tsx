"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [input, setInput] = useState("");
  const [copiedB64, setCopiedB64] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  const svgTrimmed = input.trim();

  const base64Output = svgTrimmed
    ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgTrimmed)))
    : "";

  const urlEncodedOutput = svgTrimmed
    ? "data:image/svg+xml," + encodeURIComponent(svgTrimmed)
    : "";

  const originalSize = new Blob([svgTrimmed]).size;
  const base64Size = new Blob([base64Output]).size;
  const urlEncodedSize = new Blob([urlEncodedOutput]).size;

  const copyB64 = async () => {
    await navigator.clipboard.writeText(base64Output);
    setCopiedB64(true);
    setTimeout(() => setCopiedB64(false), 2000);
  };

  const copyUrl = async () => {
    await navigator.clipboard.writeText(urlEncodedOutput);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>SVG→Base64変換</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">SVG→Base64変換ツール</h1>
      <p className="text-muted mb-8">
        SVGコードをBase64エンコードしたdata URIに変換。CSS背景画像等に利用できます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">SVGコード</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="40" fill="blue"/></svg>'
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={6}
          />
        </div>

        {svgTrimmed && (
          <>
            <div>
              <span className="text-sm font-medium block mb-2">プレビュー</span>
              <div
                className="bg-white rounded-lg p-4 border border-card-border flex items-center justify-center min-h-[80px]"
                dangerouslySetInnerHTML={{ __html: svgTrimmed }}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Base64 Data URI</span>
                <button onClick={copyB64} className="text-sm text-primary hover:text-primary-hover font-medium">
                  {copiedB64 ? "コピー済み" : "コピー"}
                </button>
              </div>
              <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto break-all whitespace-pre-wrap max-h-40 overflow-y-auto">
                {base64Output}
              </pre>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">URLエンコード版</span>
                <button onClick={copyUrl} className="text-sm text-primary hover:text-primary-hover font-medium">
                  {copiedUrl ? "コピー済み" : "コピー"}
                </button>
              </div>
              <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto break-all whitespace-pre-wrap max-h-40 overflow-y-auto">
                {urlEncodedOutput}
              </pre>
            </div>

            <div>
              <span className="text-sm font-medium block mb-2">サイズ比較</span>
              <div className="bg-background rounded-lg p-4 text-sm space-y-1">
                <div className="flex justify-between"><span>元SVG</span><span className="font-mono">{originalSize.toLocaleString()} bytes</span></div>
                <div className="flex justify-between"><span>Base64 Data URI</span><span className="font-mono">{base64Size.toLocaleString()} bytes ({((base64Size / originalSize) * 100).toFixed(0)}%)</span></div>
                <div className="flex justify-between"><span>URLエンコード版</span><span className="font-mono">{urlEncodedSize.toLocaleString()} bytes ({((urlEncodedSize / originalSize) * 100).toFixed(0)}%)</span></div>
              </div>
            </div>
          </>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">SVG→Base64変換ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>SVGコードを貼り付けると、Base64 Data URIとURLエンコード版の両方を生成します。</p>
          <p>CSSの背景画像や、imgタグのsrc属性にそのまま使用できます。</p>
          <p>URLエンコード版はBase64版より小さくなることが多く、推奨されます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>

      <AffiliateSection slug="svg-to-base64" category="開発ツール" />


      <RelatedTools currentSlug="svg-to-base64" category="開発ツール" />
    </div>
  );
}
