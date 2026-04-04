"use client";

import { useState } from "react";
import Link from "next/link";

function parseMac(input: string): string | null {
  // Remove all separators and whitespace
  const clean = input.replace(/[:\-.\s]/g, "").toUpperCase();
  // Must be exactly 12 hex characters
  if (!/^[0-9A-F]{12}$/.test(clean)) return null;
  return clean;
}

function formatMac(clean: string): Record<string, string> {
  const bytes = clean.match(/.{2}/g)!;
  const groups4 = clean.match(/.{4}/g)!;
  return {
    colon: bytes.join(":"),            // XX:XX:XX:XX:XX:XX
    hyphen: bytes.join("-"),           // XX-XX-XX-XX-XX-XX
    dot: groups4.join("."),            // XXXX.XXXX.XXXX
    bare: clean,                       // XXXXXXXXXXXX
    lower_colon: bytes.join(":").toLowerCase(),
    lower_hyphen: bytes.join("-").toLowerCase(),
  };
}

function getMacType(clean: string): { isMulticast: boolean; isLocallyAdministered: boolean; isUniversal: boolean; isBroadcast: boolean } {
  const firstByte = parseInt(clean.substring(0, 2), 16);
  return {
    isBroadcast: clean === "FFFFFFFFFFFF",
    isMulticast: (firstByte & 0x01) === 1,
    isLocallyAdministered: (firstByte & 0x02) === 2,
    isUniversal: (firstByte & 0x02) === 0,
  };
}

const SAMPLE_MACS = [
  { label: "サンプル 1", value: "00:1A:2B:3C:4D:5E" },
  { label: "ブロードキャスト", value: "FF:FF:FF:FF:FF:FF" },
  { label: "マルチキャスト", value: "01:00:5E:00:00:01" },
  { label: "ローカル管理", value: "02:00:00:00:00:01" },
];

export default function MacFormatterPage() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const clean = parseMac(input);
  const result = clean ? formatMac(clean) : null;
  const macType = clean ? getMacType(clean) : null;
  const oui = clean ? clean.substring(0, 6) : null;

  const handleInput = (v: string) => {
    setInput(v);
    if (v.trim() && !parseMac(v)) {
      setError("有効なMACアドレスを入力してください（例: 00:1A:2B:3C:4D:5E）");
    } else {
      setError("");
    }
  };

  const copyText = (text: string) => navigator.clipboard.writeText(text);

  const FORMAT_LABELS: Record<string, string> = {
    colon: "コロン区切り（XX:XX:XX:XX:XX:XX）",
    hyphen: "ハイフン区切り（XX-XX-XX-XX-XX-XX）",
    dot: "ドット区切り（XXXX.XXXX.XXXX）",
    bare: "区切りなし（XXXXXXXXXXXX）",
    lower_colon: "小文字・コロン区切り",
    lower_hyphen: "小文字・ハイフン区切り",
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>MACアドレスフォーマッター</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">MACアドレスフォーマッターツール</h1>
      <p className="text-muted mb-8">
        MACアドレスを各種フォーマットに変換・整形します。コロン・ハイフン・ドット区切りなど複数の形式に対応。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div>
          <label className="block text-sm font-medium mb-1">MACアドレスを入力</label>
          <input
            type="text"
            value={input}
            onChange={(e) => handleInput(e.target.value)}
            placeholder="00:1A:2B:3C:4D:5E（どの形式でも可）"
            className={`w-full border rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary ${error ? "border-red-400" : "border-card-border"}`}
          />
          {error ? (
            <p className="text-red-500 text-xs mt-1">{error}</p>
          ) : (
            <p className="text-xs text-muted mt-1">コロン・ハイフン・ドット区切り・区切りなしなど、どの形式でも入力できます</p>
          )}
        </div>

        <div className="mt-3">
          <p className="text-xs text-muted mb-2">サンプル:</p>
          <div className="flex flex-wrap gap-2">
            {SAMPLE_MACS.map((s) => (
              <button key={s.value} onClick={() => handleInput(s.value)} className="text-xs px-2 py-1 border border-card-border rounded hover:border-primary hover:text-primary text-muted transition-colors">
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {result && macType && (
        <div className="mt-6 space-y-4">
          <div>
            <h2 className="text-base font-bold mb-3">フォーマット変換結果</h2>
            <div className="space-y-2">
              {Object.entries(result).map(([key, value]) => (
                <div key={key} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg px-4 py-2.5">
                  <span className="text-xs text-muted flex-shrink-0 w-52">{FORMAT_LABELS[key]}</span>
                  <code className="text-sm font-mono flex-1">{value}</code>
                  <button onClick={() => copyText(value)} className="text-xs text-primary hover:text-primary-hover flex-shrink-0">コピー</button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background rounded-lg p-4">
            <p className="text-sm font-medium mb-3">MACアドレス情報</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-xs text-muted block">OUI（ベンダー識別子）</span>
                <code className="font-mono">{oui}</code>
              </div>
              <div>
                <span className="text-xs text-muted block">ブロードキャスト</span>
                <span className={macType.isBroadcast ? "text-orange-500 font-medium" : ""}>{macType.isBroadcast ? "はい" : "いいえ"}</span>
              </div>
              <div>
                <span className="text-xs text-muted block">マルチキャスト</span>
                <span className={macType.isMulticast && !macType.isBroadcast ? "text-orange-500 font-medium" : ""}>{macType.isMulticast ? "はい" : "いいえ"}</span>
              </div>
              <div>
                <span className="text-xs text-muted block">アドレス種別</span>
                <span>{macType.isLocallyAdministered ? "ローカル管理（LAA）" : "グローバル管理（UAA）"}</span>
              </div>
            </div>
            {!macType.isLocallyAdministered && !macType.isMulticast && (
              <p className="text-xs text-muted mt-3">
                OUI（最初の3バイト: {oui?.match(/.{2}/g)?.join(":")}）はIEEE登録のベンダー識別子です。
                実際のベンダー名はIEEEのOUIデータベースで確認できます。
              </p>
            )}
          </div>
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. MACアドレスをどの形式でも入力できます（XX:XX:XX・XX-XX-XX・XXXX.XXXX・XXXXXXXXXXXX）。</p>
          <p>2. 入力すると自動的に検証・変換が行われ、6種類のフォーマットで表示されます。</p>
          <p>3. 各行の「コピー」ボタンで希望の形式をクリップボードにコピーできます。</p>
          <p>4. OUI（最初の3バイト）はIEEEに登録されたベンダー識別子です。ローカル管理アドレス（LAA）の場合はベンダー識別としては使用されません。</p>
        </div>
      </section>
    </div>
  );
}
