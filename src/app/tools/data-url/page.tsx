"use client";

import { useState } from "react";
import Link from "next/link";

type MimeType = "text/plain" | "text/html";
type Encoding = "base64" | "uri";
type Mode = "encode" | "decode";

function encodeDataUrl(text: string, mime: MimeType, enc: Encoding): string {
  if (enc === "base64") {
    try {
      const b64 = btoa(unescape(encodeURIComponent(text)));
      return `data:${mime};base64,${b64}`;
    } catch {
      return "エンコードエラー: 無効な文字が含まれています";
    }
  } else {
    return `data:${mime},${encodeURIComponent(text)}`;
  }
}

function decodeDataUrl(dataUrl: string): { text: string; mime: string; enc: string } | null {
  const m = dataUrl.match(/^data:([^;,]+)(?:;([^,]+))?,(.+)$/);
  if (!m) return null;
  const mime = m[1];
  const enc = m[2] || "uri";
  const data = m[3];
  try {
    const text =
      enc === "base64"
        ? decodeURIComponent(escape(atob(data)))
        : decodeURIComponent(data);
    return { text, mime, enc };
  } catch {
    return null;
  }
}

export default function DataUrlPage() {
  const [mode, setMode] = useState<Mode>("encode");
  const [input, setInput] = useState('<h1>Hello, World!</h1>\n<p>これはテストです。</p>');
  const [mime, setMime] = useState<MimeType>("text/html");
  const [enc, setEnc] = useState<Encoding>("base64");
  const [copied, setCopied] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  const encoded = mode === "encode" ? encodeDataUrl(input, mime, enc) : "";
  const decoded = mode === "decode" ? decodeDataUrl(input) : null;
  const output = mode === "encode" ? encoded : (decoded ? decoded.text : "デコードに失敗しました。有効なデータURLを入力してください。");
  const isHtml = mime === "text/html" || (decoded && decoded.mime === "text/html");

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const byteSize = new Blob([output]).size;
  const inputSize = new Blob([input]).size;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>データURL変換</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">データURL変換ツール</h1>
      <p className="text-muted mb-8">
        テキストやHTMLをデータURL（Data URI）に変換、またはデータURLをテキストにデコードできます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6 space-y-5">
        <div className="flex gap-2">
          <button
            onClick={() => setMode("encode")}
            className={`px-5 py-2 rounded-lg text-sm font-medium border transition-colors ${
              mode === "encode" ? "bg-primary text-white border-primary" : "border-card-border text-muted hover:border-primary"
            }`}
          >
            テキスト → データURL
          </button>
          <button
            onClick={() => setMode("decode")}
            className={`px-5 py-2 rounded-lg text-sm font-medium border transition-colors ${
              mode === "decode" ? "bg-primary text-white border-primary" : "border-card-border text-muted hover:border-primary"
            }`}
          >
            データURL → テキスト
          </button>
        </div>

        {mode === "encode" && (
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-xs text-muted mb-1">MIMEタイプ</label>
              <div className="flex gap-2">
                {(["text/plain", "text/html"] as MimeType[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMime(m)}
                    className={`px-3 py-1 rounded text-xs border transition-colors ${
                      mime === m ? "bg-primary text-white border-primary" : "border-card-border text-muted"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs text-muted mb-1">エンコード方式</label>
              <div className="flex gap-2">
                {(["base64", "uri"] as Encoding[]).map((e) => (
                  <button
                    key={e}
                    onClick={() => setEnc(e)}
                    className={`px-3 py-1 rounded text-xs border transition-colors ${
                      enc === e ? "bg-primary text-white border-primary" : "border-card-border text-muted"
                    }`}
                  >
                    {e === "base64" ? "Base64" : "URLエンコード"}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium">
              {mode === "encode" ? "入力テキスト" : "データURL"}
            </label>
            <span className="text-xs text-muted">{inputSize.toLocaleString()} bytes</span>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={6}
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-y"
            placeholder={mode === "encode" ? "変換したいテキストを入力..." : "data:text/html;base64,... を入力"}
          />
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-4">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium">
            {mode === "encode" ? "データURL（出力）" : "デコードされたテキスト"}
          </label>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted">{byteSize.toLocaleString()} bytes</span>
            <button onClick={copy} className="text-sm text-primary font-medium">
              {copied ? "✓コピー済み" : "コピー"}
            </button>
          </div>
        </div>
        <textarea
          value={output}
          readOnly
          rows={6}
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono bg-background focus:outline-none resize-y"
        />
      </div>

      {mode === "encode" && isHtml && !encoded.startsWith("エンコードエラー") && (
        <div className="mb-6">
          <button
            onClick={() => setPreviewOpen((v) => !v)}
            className="text-sm text-primary font-medium"
          >
            {previewOpen ? "プレビューを閉じる" : "HTMLプレビューを表示"}
          </button>
          {previewOpen && (
            <div className="mt-3 border border-card-border rounded-xl overflow-hidden">
              <div className="bg-background px-4 py-2 text-xs text-muted border-b border-card-border">HTML プレビュー</div>
              <iframe
                src={encoded}
                className="w-full"
                style={{ height: 200, border: "none" }}
                title="HTML preview"
                sandbox="allow-same-origin"
              />
            </div>
          )}
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">データURL変換ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>「テキスト → データURL」モードで、入力したテキストやHTMLをデータURLに変換します。</p>
          <p>「データURL → テキスト」モードで、data:で始まるURLをテキストにデコードします。</p>
          <p>Base64エンコードとURLエンコードの両方に対応しています。</p>
          <p>HTMLモードを選択すると、変換結果をプレビューで確認できます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
