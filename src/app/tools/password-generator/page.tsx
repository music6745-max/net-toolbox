"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function PasswordGeneratorPage() {
  const [length, setLength] = useState(16);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    let chars = "";
    if (useUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useLowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (useNumbers) chars += "0123456789";
    if (useSymbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (!chars) {
      setPassword("文字種を1つ以上選択してください");
      return;
    }

    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    const result = Array.from(array)
      .map((n) => chars[n % chars.length])
      .join("");
    setPassword(result);
    setCopied(false);
  }, [length, useUppercase, useLowercase, useNumbers, useSymbols]);

  const copyToClipboard = async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStrength = () => {
    let pool = 0;
    if (useUppercase) pool += 26;
    if (useLowercase) pool += 26;
    if (useNumbers) pool += 10;
    if (useSymbols) pool += 27;
    const entropy = Math.log2(Math.pow(pool || 1, length));
    if (entropy < 40) return { label: "弱い", color: "text-red-500", width: "w-1/4" };
    if (entropy < 60) return { label: "普通", color: "text-yellow-500", width: "w-1/2" };
    if (entropy < 80) return { label: "強い", color: "text-blue-500", width: "w-3/4" };
    return { label: "非常に強い", color: "text-green-600", width: "w-full" };
  };

  const strength = getStrength();

  const options = [
    { label: "大文字 (A-Z)", checked: useUppercase, onChange: setUseUppercase },
    { label: "小文字 (a-z)", checked: useLowercase, onChange: setUseLowercase },
    { label: "数字 (0-9)", checked: useNumbers, onChange: setUseNumbers },
    { label: "記号 (!@#$...)", checked: useSymbols, onChange: setUseSymbols },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>パスワード生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">パスワード生成ツール</h1>
      <p className="text-muted mb-8">
        安全なランダムパスワードを生成します。長さや使用する文字種を自由にカスタマイズできます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            パスワードの長さ: {length}文字
          </label>
          <input
            type="range"
            min={4}
            max={64}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-muted mt-1">
            <span>4</span>
            <span>64</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {options.map((opt) => (
            <label key={opt.label} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={opt.checked}
                onChange={(e) => opt.onChange(e.target.checked)}
                className="accent-primary w-4 h-4"
              />
              {opt.label}
            </label>
          ))}
        </div>

        <button
          onClick={generatePassword}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          パスワードを生成
        </button>

        {password && (
          <div className="mt-6">
            <div className="bg-background rounded-lg p-4 font-mono text-sm break-all flex items-center justify-between gap-3">
              <span>{password}</span>
              <button
                onClick={copyToClipboard}
                className="shrink-0 text-primary hover:text-primary-hover text-sm font-medium"
              >
                {copied ? "コピー済み" : "コピー"}
              </button>
            </div>
            <div className="mt-3">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted">強度:</span>
                <span className={`font-medium ${strength.color}`}>{strength.label}</span>
              </div>
              <div className="mt-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className={`h-full bg-current ${strength.color} ${strength.width} rounded-full transition-all`} />
              </div>
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">パスワード生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. スライダーでパスワードの長さを設定します（4〜64文字）。</p>
          <p>2. 使用する文字種（大文字・小文字・数字・記号）を選択します。</p>
          <p>3. 「パスワードを生成」ボタンをクリックすると、ランダムなパスワードが生成されます。</p>
          <p>パスワードはブラウザ内で生成されるため、外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="password-generator" category="セキュリティ" />
      <RelatedTools currentSlug="password-generator" category="セキュリティ" />
    </div>
  );
}
