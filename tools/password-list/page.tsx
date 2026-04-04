"use client";

import { useState } from "react";
import Link from "next/link";

const CHARS = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()-_=+[]{}|;:,.<>?",
};

function generatePassword(length: number, charSet: string): string {
  const array = new Uint32Array(length);
  crypto.getRandomValues(array);
  return Array.from(array)
    .map((val) => charSet[val % charSet.length])
    .join("");
}

export default function PasswordListPage() {
  const [length, setLength] = useState(16);
  const [count, setCount] = useState(10);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [passwords, setPasswords] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const charSet = [
    useUpper ? CHARS.uppercase : "",
    useLower ? CHARS.lowercase : "",
    useNumbers ? CHARS.numbers : "",
    useSymbols ? CHARS.symbols : "",
  ].join("");

  const generate = () => {
    if (!charSet) return;
    const list = Array.from({ length: count }, () => generatePassword(length, charSet));
    setPasswords(list);
    setCopiedIndex(null);
    setCopiedAll(false);
  };

  const copyOne = (pw: string, i: number) => {
    navigator.clipboard.writeText(pw);
    setCopiedIndex(i);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const copyAll = () => {
    navigator.clipboard.writeText(passwords.join("\n"));
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted flex items-center gap-1">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <span className="text-primary">パスワード一括生成ツール</span>
        </nav>

        <h1 className="text-2xl font-bold text-primary mb-2">パスワード一括生成ツール</h1>
        <p className="text-muted mb-8">設定した条件で安全なパスワードを一括生成します。</p>

        {/* Settings Card */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                パスワードの長さ: <span className="text-primary font-bold">{length}文字</span>
              </label>
              <input
                type="range"
                min={4}
                max={64}
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-muted mt-1"><span>4</span><span>64</span></div>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                生成する数: <span className="text-primary font-bold">{count}個</span>
              </label>
              <input
                type="range"
                min={1}
                max={50}
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-muted mt-1"><span>1</span><span>50</span></div>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">使用する文字種</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "大文字 (A-Z)", value: useUpper, setter: setUseUpper },
                  { label: "小文字 (a-z)", value: useLower, setter: setUseLower },
                  { label: "数字 (0-9)", value: useNumbers, setter: setUseNumbers },
                  { label: "記号 (!@#...)", value: useSymbols, setter: setUseSymbols },
                ].map((opt) => (
                  <label key={opt.label} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={opt.value}
                      onChange={(e) => opt.setter(e.target.checked)}
                      className="accent-primary w-4 h-4"
                    />
                    <span className="text-primary text-sm">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {!charSet && (
              <p className="text-red-500 text-sm">文字種を1つ以上選択してください。</p>
            )}

            <button
              onClick={generate}
              disabled={!charSet}
              className="w-full py-2.5 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              パスワードを生成する
            </button>
          </div>
        </div>

        {/* Results */}
        {passwords.length > 0 && (
          <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-primary">生成されたパスワード</h2>
              <button
                onClick={copyAll}
                className="px-4 py-1.5 bg-primary hover:bg-primary-hover text-white text-sm rounded-lg transition-colors"
              >
                {copiedAll ? "コピー済み！" : "全てコピー"}
              </button>
            </div>
            <div className="space-y-2">
              {passwords.map((pw, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 bg-background border border-card-border rounded-lg"
                >
                  <span className="text-muted text-xs w-6 text-right shrink-0">{i + 1}</span>
                  <span className="flex-1 font-mono text-sm text-primary break-all">{pw}</span>
                  <button
                    onClick={() => copyOne(pw, i)}
                    className="shrink-0 text-xs px-3 py-1 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors"
                  >
                    {copiedIndex === i ? "✓" : "コピー"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 使い方 */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">使い方</h2>
          <ol className="space-y-2 text-muted list-decimal list-inside">
            <li>スライダーでパスワードの長さと生成する個数を設定します</li>
            <li>使用する文字種にチェックを入れます</li>
            <li>「パスワードを生成する」ボタンをクリックします</li>
            <li>個別または全てコピーボタンでクリップボードにコピーします</li>
          </ol>
          <p className="text-muted text-sm mt-4">
            ※ パスワードはブラウザ上で生成され、サーバーには送信されません。
          </p>
        </div>
      </div>
    </div>
  );
}
