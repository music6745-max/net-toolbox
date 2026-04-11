"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [length, setLength] = useState(16);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const chars = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%&*";
    let result = "";
    const arr = new Uint32Array(length);
    crypto.getRandomValues(arr);
    for (let i = 0; i < length; i++) result += chars[arr[i] % chars.length];
    setPassword(result);
    setCopied(false);
  };

  const copy = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>WiFiパスワード生成</span></nav>
      <h1 className="text-2xl font-bold mb-2">WiFi用 安全パスワード生成ツール</h1>
      <p className="text-muted mb-8">WiFiルーターに設定する安全なパスワードを生成。紛らわしい文字(0/O/l/1)を除外。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">文字数: {length}</label>
          <input type="range" min="8" max="32" value={length} onChange={e => setLength(parseInt(e.target.value))} className="w-full" />
          <div className="flex justify-between text-xs text-muted"><span>8</span><span>32</span></div>
        </div>
        <button onClick={generate} className="w-full py-3 bg-primary text-white rounded-lg font-bold text-sm">パスワードを生成</button>
        {password && (
          <div className="bg-background rounded-lg p-4">
            <div className="font-mono text-lg font-bold tracking-wider text-center break-all">{password}</div>
            <button onClick={copy} className="mt-3 w-full py-2 bg-card-bg border border-card-border rounded-lg text-sm">{copied ? "コピーしました！" : "クリップボードにコピー"}</button>
          </div>
        )}
        <div className="text-xs text-muted space-y-1">
          <p>WiFiパスワードの推奨ルール:</p>
          <p>- 最低12文字以上（16文字以上推奨）</p>
          <p>- 英大文字・小文字・数字・記号を混合</p>
          <p>- 辞書に載っている単語を使わない</p>
        </div>
      </div>
      <AffiliateSection slug="wifi-password-generator" category="日常ツール" />
      <RelatedTools currentSlug="wifi-password-generator" category="日常ツール" />
    </div>
  );
}
