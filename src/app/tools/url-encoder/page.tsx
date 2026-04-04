"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function UrlEncoderPage() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [method, setMethod] = useState<"component" | "uri">("component");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleConvert = () => {
    setError("");
    try {
      if (mode === "encode") {
        setResult(
          method === "component"
            ? encodeURIComponent(input)
            : encodeURI(input)
        );
      } else {
        setResult(
          method === "component"
            ? decodeURIComponent(input)
            : decodeURI(input)
        );
      }
    } catch {
      setError("変換に失敗しました。入力値を確認してください。");
      setResult("");
    }
  };

  const handleCopy = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>URLエンコード/デコード</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">URLエンコード/デコードツール</h1>
      <p className="text-muted mb-8">
        URLの特殊文字をパーセントエンコーディング形式にエンコード・デコードします。encodeURIComponentとencodeURIの両方に対応。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              checked={mode === "encode"}
              onChange={() => setMode("encode")}
            />
            エンコード
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              checked={mode === "decode"}
              onChange={() => setMode("decode")}
            />
            デコード
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">メソッド</label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value as "component" | "uri")}
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          >
            <option value="component">encodeURIComponent（パラメータ値向け）</option>
            <option value="uri">encodeURI（URL全体向け）</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">入力</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="変換したいテキストやURLを入力..."
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={4}
          />
        </div>

        <button
          onClick={handleConvert}
          className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          変換
        </button>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        {result && (
          <div>
            <label className="block text-sm font-medium mb-2">結果</label>
            <textarea
              value={result}
              readOnly
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-background resize-none"
              rows={4}
            />
            <button
              onClick={handleCopy}
              className="mt-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {copied ? "コピーしました!" : "コピー"}
            </button>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">URLエンコード/デコードの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>エンコードまたはデコードを選択し、変換したいテキストを入力して「変換」ボタンをクリックします。</p>
          <p>encodeURIComponentはクエリパラメータの値に、encodeURIはURL全体の変換に適しています。</p>
        </div>
      </section>

      <AffiliateSection slug="url-encoder" category="開発ツール" />
      <RelatedTools currentSlug="url-encoder" category="開発ツール" />
    </div>
  );
}
