"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type CipherMode = "rot13" | "caesar" | "xor";

function rot13(text: string): string {
  return text.replace(/[a-zA-Z]/g, (c) => {
    const base = c >= "a" ? 97 : 65;
    return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
  });
}

function caesarShift(text: string, shift: number): string {
  const s = ((shift % 26) + 26) % 26;
  return text.replace(/[a-zA-Z]/g, (c) => {
    const base = c >= "a" ? 97 : 65;
    return String.fromCharCode(((c.charCodeAt(0) - base + s) % 26) + base);
  });
}

function xorCipher(text: string, key: string): string {
  if (!key) return text;
  const result: string[] = [];
  for (let i = 0; i < text.length; i++) {
    const keyChar = key.charCodeAt(i % key.length);
    result.push(String.fromCharCode(text.charCodeAt(i) ^ keyChar));
  }
  return result.join("");
}

function xorToHex(text: string, key: string): string {
  if (!key) return "";
  const bytes: string[] = [];
  for (let i = 0; i < text.length; i++) {
    const keyChar = key.charCodeAt(i % key.length);
    bytes.push((text.charCodeAt(i) ^ keyChar).toString(16).padStart(2, "0"));
  }
  return bytes.join(" ");
}

function xorFromHex(hex: string, key: string): string {
  if (!key) return "";
  const bytes = hex.trim().split(/\s+/);
  const result: string[] = [];
  for (let i = 0; i < bytes.length; i++) {
    const byte = parseInt(bytes[i], 16);
    if (isNaN(byte)) return "";
    const keyChar = key.charCodeAt(i % key.length);
    result.push(String.fromCharCode(byte ^ keyChar));
  }
  return result.join("");
}

export default function TextEncryptPage() {
  const [cipherMode, setCipherMode] = useState<CipherMode>("rot13");
  const [input, setInput] = useState("");
  const [shift, setShift] = useState("3");
  const [xorKey, setXorKey] = useState("");
  const [xorHexMode, setXorHexMode] = useState(false);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const encrypt = () => {
    setError("");
    if (!input.trim()) {
      setError("テキストを入力してください");
      setOutput("");
      return;
    }
    if (cipherMode === "rot13") {
      setOutput(rot13(input));
    } else if (cipherMode === "caesar") {
      const s = parseInt(shift, 10);
      if (isNaN(s)) { setError("シフト数は整数で入力してください"); return; }
      setOutput(caesarShift(input, s));
    } else {
      if (!xorKey) { setError("XORキーを入力してください"); return; }
      if (xorHexMode) {
        setOutput(xorToHex(input, xorKey));
      } else {
        setOutput(xorCipher(input, xorKey));
      }
    }
  };

  const decrypt = () => {
    setError("");
    if (!input.trim()) {
      setError("テキストを入力してください");
      setOutput("");
      return;
    }
    if (cipherMode === "rot13") {
      // ROT13 is its own inverse
      setOutput(rot13(input));
    } else if (cipherMode === "caesar") {
      const s = parseInt(shift, 10);
      if (isNaN(s)) { setError("シフト数は整数で入力してください"); return; }
      setOutput(caesarShift(input, -s));
    } else {
      if (!xorKey) { setError("XORキーを入力してください"); return; }
      if (xorHexMode) {
        const result = xorFromHex(input, xorKey);
        if (!result) { setError("16進数の形式が正しくありません（例: 4a 2f 1c）"); return; }
        setOutput(result);
      } else {
        setOutput(xorCipher(input, xorKey));
      }
    }
  };

  const swap = () => {
    setInput(output);
    setOutput("");
  };

  const reset = () => {
    setInput("");
    setOutput("");
    setError("");
    setShift("3");
    setXorKey("");
  };

  const cipherTabs: { id: CipherMode; label: string }[] = [
    { id: "rot13", label: "ROT13" },
    { id: "caesar", label: "シーザー暗号" },
    { id: "xor", label: "XOR暗号" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>テキスト暗号化</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">テキスト暗号化ツール</h1>
      <p className="text-muted mb-3">
        ROT13・シーザー暗号・XOR暗号でテキストを暗号化・復号化します。
      </p>
      <div className="mb-8 bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs rounded-lg px-4 py-3">
        ⚠️ このツールは学習・ゲーム・エンターテイメント目的の簡易暗号化ツールです。実際のセキュリティ用途には使用しないでください。パスワードや個人情報の保護には適していません。
      </div>

      {/* Cipher tabs */}
      <div className="flex gap-2 mb-6">
        {cipherTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => { setCipherMode(tab.id); setError(""); setOutput(""); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              cipherMode === tab.id
                ? "bg-primary text-white border-primary"
                : "border-card-border hover:bg-background"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        {/* Cipher-specific options */}
        {cipherMode === "caesar" && (
          <div>
            <label className="block text-sm font-medium mb-2">シフト数（1〜25）</label>
            <input
              type="number"
              value={shift}
              onChange={(e) => setShift(e.target.value)}
              min={1}
              max={25}
              className="w-32 border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
            <p className="text-xs text-muted mt-1">ROT13 はシフト数 13 のシーザー暗号です</p>
          </div>
        )}

        {cipherMode === "xor" && (
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-2">XORキー（任意の文字列）</label>
              <input
                type="text"
                value={xorKey}
                onChange={(e) => setXorKey(e.target.value)}
                placeholder="例: mysecretkey"
                className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={xorHexMode}
                onChange={(e) => { setXorHexMode(e.target.checked); setOutput(""); }}
                className="accent-primary"
              />
              暗号化結果を16進数（hex）で表示
            </label>
          </div>
        )}

        {/* Input */}
        <div>
          <label className="block text-sm font-medium mb-2">
            入力テキスト
            {cipherMode === "xor" && xorHexMode && <span className="text-muted font-normal ml-1">（復号時: hex形式で入力）</span>}
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ここにテキストを入力..."
            rows={5}
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-y"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={encrypt}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            暗号化
          </button>
          <button
            onClick={decrypt}
            className="bg-foreground text-background px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            復号化
          </button>
          <button
            onClick={swap}
            disabled={!output}
            className="px-5 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors disabled:opacity-40"
          >
            結果を入力に
          </button>
          <button
            onClick={reset}
            className="px-5 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors"
          >
            リセット
          </button>
        </div>

        {/* Output */}
        {output && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium">結果</label>
              <button
                onClick={() => navigator.clipboard?.writeText(output)}
                className="text-xs text-primary hover:underline"
              >
                コピー
              </button>
            </div>
            <textarea
              readOnly
              value={output}
              rows={5}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono bg-background resize-y focus:outline-none"
            />
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p><strong className="text-foreground">ROT13</strong> — アルファベットを13文字ずつずらします。同じ操作を2回繰り返すと元に戻ります。</p>
          <p><strong className="text-foreground">シーザー暗号</strong> — 指定したシフト数だけアルファベットをずらします。「暗号化」でずらし、「復号化」で逆方向に戻します。</p>
          <p><strong className="text-foreground">XOR暗号</strong> — 入力テキストとキーの各文字をXOR演算します。同じキーで再度XORすると元の文字列に戻ります。hex表示モードでは結果を16進数で出力します。</p>
          <p>すべての処理はブラウザ内で完結し、テキストが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="text-encrypt" category="セキュリティ" />
      <RelatedTools currentSlug="text-encrypt" category="セキュリティ" />
    </div>
  );
}
