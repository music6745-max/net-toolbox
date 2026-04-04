"use client";

import { useState } from "react";
import Link from "next/link";

type InputFormat = "decimal" | "binary" | "hex" | "integer";

function ipDecimalToInt(ip: string): number | null {
  const parts = ip.split(".").map(Number);
  if (parts.length !== 4) return null;
  if (parts.some((p) => isNaN(p) || p < 0 || p > 255)) return null;
  return (parts[0] << 24 | parts[1] << 16 | parts[2] << 8 | parts[3]) >>> 0;
}

function intToIpParts(n: number): number[] {
  return [(n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff];
}

function parseInput(value: string, format: InputFormat): number | null {
  const v = value.trim();
  if (!v) return null;

  if (format === "decimal") {
    return ipDecimalToInt(v);
  }
  if (format === "binary") {
    const octets = v.split(".").map((o) => parseInt(o, 2));
    if (octets.length !== 4) return null;
    if (octets.some((o) => isNaN(o) || o < 0 || o > 255)) return null;
    return ipDecimalToInt(octets.join("."));
  }
  if (format === "hex") {
    const clean = v.replace(/^0x/i, "").replace(/[:.\-]/g, "");
    if (clean.length !== 8) return null;
    const n = parseInt(clean, 16);
    if (isNaN(n)) return null;
    return n >>> 0;
  }
  if (format === "integer") {
    const n = parseInt(v, 10);
    if (isNaN(n) || n < 0 || n > 4294967295) return null;
    return n >>> 0;
  }
  return null;
}

function formatOutput(intVal: number): Record<string, string> {
  const parts = intToIpParts(intVal);
  const binary = parts.map((p) => p.toString(2).padStart(8, "0")).join(".");
  const hex = "0x" + intVal.toString(16).toUpperCase().padStart(8, "0");
  const hexColons = parts.map((p) => p.toString(16).toUpperCase().padStart(2, "0")).join(":");
  return {
    decimal: parts.join("."),
    binary,
    hex,
    hexColons,
    integer: intVal.toString(),
    class: getIpClass(parts[0]),
    isPrivate: isPrivateIp(parts) ? "はい" : "いいえ",
    isLoopback: parts[0] === 127 ? "はい" : "いいえ",
  };
}

function getIpClass(firstOctet: number): string {
  if (firstOctet < 128) return "A クラス（0-127）";
  if (firstOctet < 192) return "B クラス（128-191）";
  if (firstOctet < 224) return "C クラス（192-223）";
  if (firstOctet < 240) return "D クラス（マルチキャスト）";
  return "E クラス（予約済み）";
}

function isPrivateIp(parts: number[]): boolean {
  if (parts[0] === 10) return true;
  if (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) return true;
  if (parts[0] === 192 && parts[1] === 168) return true;
  return false;
}

const FORMAT_LABELS: Record<InputFormat, string> = {
  decimal: "10進数（ドット区切り）",
  binary: "2進数（ドット区切り）",
  hex: "16進数",
  integer: "整数（10進数）",
};

const FORMAT_PLACEHOLDERS: Record<InputFormat, string> = {
  decimal: "192.168.1.1",
  binary: "11000000.10101000.00000001.00000001",
  hex: "0xC0A80101 または C0:A8:01:01",
  integer: "3232235777",
};

const QUICK_IPS = [
  { label: "ローカルホスト", value: "127.0.0.1" },
  { label: "プライベート A", value: "10.0.0.1" },
  { label: "プライベート B", value: "172.16.0.1" },
  { label: "プライベート C", value: "192.168.1.1" },
  { label: "ブロードキャスト", value: "255.255.255.255" },
];

export default function IpConverterPage() {
  const [inputFormat, setInputFormat] = useState<InputFormat>("decimal");
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const intVal = parseInput(inputValue, inputFormat);
  const result = intVal !== null ? formatOutput(intVal) : null;

  const handleInput = (v: string) => {
    setInputValue(v);
    setError("");
    if (v.trim() && parseInput(v, inputFormat) === null) {
      setError("入力形式が正しくありません");
    }
  };

  const loadQuick = (ip: string) => {
    setInputFormat("decimal");
    setInputValue(ip);
    setError("");
  };

  const copyText = (text: string) => navigator.clipboard.writeText(text);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>IPアドレス変換</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">IPアドレス変換ツール</h1>
      <p className="text-muted mb-8">
        IPv4アドレスを10進数・2進数・16進数・整数の各形式に相互変換します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">入力形式</label>
          <div className="grid grid-cols-2 gap-2">
            {(Object.keys(FORMAT_LABELS) as InputFormat[]).map((f) => (
              <button
                key={f}
                onClick={() => { setInputFormat(f); setInputValue(""); setError(""); }}
                className={`border rounded-lg py-2 px-3 text-sm font-medium transition-colors text-left ${inputFormat === f ? "bg-primary text-white border-primary" : "border-card-border hover:border-primary text-muted"}`}
              >
                {FORMAT_LABELS[f]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">IPアドレスを入力</label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => handleInput(e.target.value)}
            placeholder={FORMAT_PLACEHOLDERS[inputFormat]}
            className={`w-full border rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary ${error ? "border-red-400" : "border-card-border"}`}
          />
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>

        <div className="mt-3">
          <p className="text-xs text-muted mb-2">クイック入力:</p>
          <div className="flex flex-wrap gap-2">
            {QUICK_IPS.map((q) => (
              <button key={q.value} onClick={() => loadQuick(q.value)} className="text-xs px-2 py-1 border border-card-border rounded hover:border-primary hover:text-primary text-muted transition-colors">
                {q.label}（{q.value}）
              </button>
            ))}
          </div>
        </div>
      </div>

      {result && (
        <div className="mt-6">
          <h2 className="text-base font-bold mb-3">変換結果</h2>
          <div className="space-y-2">
            {[
              { label: "10進数（ドット区切り）", value: result.decimal },
              { label: "2進数（ドット区切り）", value: result.binary },
              { label: "16進数", value: result.hex },
              { label: "16進数（コロン区切り）", value: result.hexColons },
              { label: "整数（10進数）", value: result.integer },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg px-4 py-2.5">
                <span className="text-xs text-muted w-40 flex-shrink-0">{row.label}</span>
                <code className="text-sm font-mono flex-1 break-all">{row.value}</code>
                <button onClick={() => copyText(row.value)} className="text-xs text-primary hover:text-primary-hover flex-shrink-0">コピー</button>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-background rounded-lg p-4">
            <p className="text-sm font-medium mb-2">IP情報</p>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div>
                <span className="text-xs text-muted block">クラス</span>
                <span>{result.class}</span>
              </div>
              <div>
                <span className="text-xs text-muted block">プライベートIP</span>
                <span>{result.isPrivate}</span>
              </div>
              <div>
                <span className="text-xs text-muted block">ループバック</span>
                <span>{result.isLoopback}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 入力形式（10進数・2進数・16進数・整数）を選択します。</p>
          <p>2. IPアドレスを入力すると、4つの形式すべてに変換した結果が表示されます。</p>
          <p>3. クイック入力ボタンで代表的なIPアドレスをすぐに確認できます。</p>
          <p>4. 各行の「コピー」ボタンで変換結果をクリップボードにコピーできます。</p>
          <p>※ このツールはIPv4アドレス専用です。IPv6には対応していません。</p>
        </div>
      </section>
    </div>
  );
}
