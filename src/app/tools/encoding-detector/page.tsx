"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

// Common mojibake patterns and their fixes (Shift-JIS read as Latin-1 → UTF-8)
const MOJIBAKE_MAP: [RegExp, string][] = [
  // Shift-JIS read as Windows-1252 / Latin1 common patterns
  [/ã\x81/g, "あ"], [/ã\x82/g, "い"], [/ã\x83/g, "う"], [/ã\x84/g, "え"], [/ã\x85/g, "お"],
  [/縺ゅ＞繧/g, "あいう"], [/縺上′/g, "かが"],
];

const ENCODINGS = [
  { label: "Shift-JIS → UTF-8", id: "sjis" },
  { label: "EUC-JP → UTF-8", id: "eucjp" },
  { label: "ISO-2022-JP → UTF-8", id: "iso2022jp" },
  { label: "Windows-1252 → UTF-8", id: "win1252" },
  { label: "Latin-1 → UTF-8", id: "latin1" },
];

async function tryDecode(text: string, encoding: string): Promise<string> {
  try {
    // Convert the string back to bytes using latin1 (1:1 mapping), then decode with target
    const bytes = new Uint8Array(text.split("").map((c) => c.charCodeAt(0) & 0xff));
    const decoder = new TextDecoder(encoding, { fatal: false });
    return decoder.decode(bytes);
  } catch {
    return text;
  }
}

const ENCODING_MAP: Record<string, string> = {
  sjis: "shift-jis",
  eucjp: "euc-jp",
  iso2022jp: "iso-2022-jp",
  win1252: "windows-1252",
  latin1: "iso-8859-1",
};

export default function EncodingDetectorPage() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const process = async () => {
    if (!input.trim()) return;
    setIsProcessing(true);
    const out: Record<string, string> = {};
    for (const enc of ENCODINGS) {
      out[enc.id] = await tryDecode(input, ENCODING_MAP[enc.id]);
    }
    setResults(out);
    setIsProcessing(false);
  };

  const copy = (id: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => { setCopied(id); setTimeout(() => setCopied(null), 2000); });
  };

  // Check if result looks Japanese (heuristic)
  const looksFixed = (text: string) => {
    const jpChars = (text.match(/[\u3040-\u9FFF\uFF00-\uFFEF]/g) || []).length;
    return jpChars > 0;
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>文字化け修復</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">文字化け修復ツール</h1>
      <p className="text-muted mb-8">文字化けしたテキストを貼り付けて、複数のエンコーディングで変換を試みます。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">文字化けしたテキスト</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={5}
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y font-mono"
            placeholder="文字化けしたテキストをここに貼り付けてください..."
          />
        </div>
        <button
          onClick={process}
          disabled={!input.trim() || isProcessing}
          className="bg-primary hover:bg-primary-hover disabled:opacity-50 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          {isProcessing ? "処理中..." : "変換を試みる"}
        </button>

        {Object.keys(results).length > 0 && (
          <div className="space-y-3">
            <p className="text-sm font-medium">変換結果</p>
            {ENCODINGS.map((enc) => {
              const text = results[enc.id];
              const fixed = looksFixed(text);
              return (
                <div key={enc.id} className={`rounded-lg p-4 border ${fixed ? "border-green-500/40 bg-green-50 dark:bg-green-900/10" : "bg-background border-card-border"}`}>
                  <div className="flex items-center justify-between mb-2 gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium">{enc.label}</span>
                      {fixed && <span className="text-xs bg-green-500 text-white px-1.5 py-0.5 rounded">日本語を検出</span>}
                    </div>
                    <button onClick={() => copy(enc.id, text)} className="text-xs border border-card-border hover:bg-background px-2 py-1 rounded transition-colors">
                      {copied === enc.id ? "コピーしました！" : "コピー"}
                    </button>
                  </div>
                  <div className="text-sm font-mono break-all whitespace-pre-wrap max-h-32 overflow-y-auto">{text || "(空)"}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>文字化けしたテキストをテキストエリアに貼り付けて「変換を試みる」をクリックします。</p>
          <p>Shift-JIS・EUC-JP・ISO-2022-JP・Windows-1252・Latin-1の5種類のエンコーディングで変換を試みます。</p>
          <p>「日本語を検出」と表示された結果が正しく変換された可能性が高いです。コピーしてご利用ください。</p>
          <p>注意：ブラウザ上でのバイト操作のため、すべての文字化けを修復できるわけではありません。</p>
        </div>
      </section>


      <AffiliateSection slug="encoding-detector" category="テキスト" />
      <RelatedTools currentSlug="encoding-detector" category="テキスト" />
    </div>
  );
}
