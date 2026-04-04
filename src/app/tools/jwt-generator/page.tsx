"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

function base64UrlEncode(str: string): string {
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlDecode(str: string): string {
  let s = str.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  return atob(s);
}

async function hmacSha256(message: string, secret: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  const bytes = new Uint8Array(sig);
  let binary = "";
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export default function Page() {
  const [mode, setMode] = useState<"generate" | "decode">("generate");
  const [headerJson, setHeaderJson] = useState('{"alg":"HS256","typ":"JWT"}');
  const [payloadJson, setPayloadJson] = useState('{"sub":"1234567890","name":"John Doe","iat":1516239022}');
  const [secret, setSecret] = useState("your-256-bit-secret");
  const [generatedJwt, setGeneratedJwt] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  // Decode mode
  const [jwtInput, setJwtInput] = useState("");
  const [decodedHeader, setDecodedHeader] = useState("");
  const [decodedPayload, setDecodedPayload] = useState("");
  const [decodeError, setDecodeError] = useState("");

  const generate = async () => {
    setError("");
    try {
      JSON.parse(headerJson);
      JSON.parse(payloadJson);
    } catch {
      setError("ヘッダーまたはペイロードが有効なJSONではありません。");
      return;
    }
    try {
      const encodedHeader = base64UrlEncode(headerJson);
      const encodedPayload = base64UrlEncode(payloadJson);
      const sigInput = `${encodedHeader}.${encodedPayload}`;
      const signature = await hmacSha256(sigInput, secret);
      setGeneratedJwt(`${encodedHeader}.${encodedPayload}.${signature}`);
    } catch (e) {
      setError("JWT生成中にエラーが発生しました。");
    }
  };

  const decode = () => {
    setDecodeError("");
    const parts = jwtInput.trim().split(".");
    if (parts.length !== 3) {
      setDecodeError("有効なJWTではありません。3つのパートが必要です。");
      return;
    }
    try {
      const header = base64UrlDecode(parts[0]);
      const payload = base64UrlDecode(parts[1]);
      setDecodedHeader(JSON.stringify(JSON.parse(header), null, 2));
      setDecodedPayload(JSON.stringify(JSON.parse(payload), null, 2));
    } catch {
      setDecodeError("JWTのデコードに失敗しました。");
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(generatedJwt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const jwtParts = generatedJwt.split(".");

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>JWT生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">JWT生成・デコードツール</h1>
      <p className="text-muted mb-8">
        ヘッダー・ペイロードからJWTトークンを生成（HS256署名）。デコードも可能です。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div className="flex gap-3">
          <button
            onClick={() => setMode("generate")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${mode === "generate" ? "bg-primary text-white" : "bg-background"}`}
          >
            生成
          </button>
          <button
            onClick={() => setMode("decode")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${mode === "decode" ? "bg-primary text-white" : "bg-background"}`}
          >
            デコード
          </button>
        </div>

        {mode === "generate" && (
          <>
            <div>
              <label className="block text-sm font-medium mb-1">ヘッダー（JSON）</label>
              <textarea
                value={headerJson}
                onChange={(e) => setHeaderJson(e.target.value)}
                className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                rows={2}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">ペイロード（JSON）</label>
              <textarea
                value={payloadJson}
                onChange={(e) => setPayloadJson(e.target.value)}
                className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">署名キー（Secret）</label>
              <input
                type="text"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              onClick={generate}
              className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              JWTを生成
            </button>

            {generatedJwt && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">生成されたJWT</span>
                  <button onClick={copy} className="text-sm text-primary hover:text-primary-hover font-medium">
                    {copied ? "コピー済み" : "コピー"}
                  </button>
                </div>
                <div className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto break-all">
                  <span className="text-red-500">{jwtParts[0]}</span>
                  <span>.</span>
                  <span className="text-purple-500">{jwtParts[1]}</span>
                  <span>.</span>
                  <span className="text-blue-500">{jwtParts[2]}</span>
                </div>
                <div className="mt-2 text-xs text-muted space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-500 rounded inline-block" />
                    <span>ヘッダー</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-purple-500 rounded inline-block" />
                    <span>ペイロード</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-blue-500 rounded inline-block" />
                    <span>署名</span>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {mode === "decode" && (
          <>
            <div>
              <label className="block text-sm font-medium mb-1">JWTを貼り付け</label>
              <textarea
                value={jwtInput}
                onChange={(e) => setJwtInput(e.target.value)}
                placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                rows={4}
              />
            </div>

            {decodeError && <p className="text-red-500 text-sm">{decodeError}</p>}

            <button
              onClick={decode}
              className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              デコード
            </button>

            {decodedHeader && (
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium block mb-1 text-red-500">ヘッダー</span>
                  <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
                    {decodedHeader}
                  </pre>
                </div>
                <div>
                  <span className="text-sm font-medium block mb-1 text-purple-500">ペイロード</span>
                  <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
                    {decodedPayload}
                  </pre>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">JWT生成・デコードツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>「生成」モードでは、ヘッダー・ペイロードのJSONと署名キーを入力してJWTを生成します。</p>
          <p>「デコード」モードでは、JWTを貼り付けてヘッダーとペイロードを確認できます。</p>
          <p>HMAC-SHA256（HS256）アルゴリズムに対応しています。Web Crypto APIを使用。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>

      <RelatedTools currentSlug="jwt-generator" category="セキュリティ" />
    </div>
  );
}
