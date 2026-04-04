"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const COMMON_PATTERNS = [
  "password", "123456", "qwerty", "abc123", "letmein", "monkey", "dragon",
  "master", "sunshine", "princess", "welcome", "shadow", "superman",
];

function calcEntropy(pw: string): number {
  let pool = 0;
  if (/[a-z]/.test(pw)) pool += 26;
  if (/[A-Z]/.test(pw)) pool += 26;
  if (/[0-9]/.test(pw)) pool += 10;
  if (/[^a-zA-Z0-9]/.test(pw)) pool += 32;
  if (pool === 0) return 0;
  return Math.floor(pw.length * Math.log2(pool));
}

type Strength = { label: string; color: string; bg: string; score: number };

function getStrength(pw: string): Strength {
  if (!pw) return { label: "", color: "", bg: "", score: 0 };
  const entropy = calcEntropy(pw);
  if (entropy < 28) return { label: "非常に弱い", color: "text-red-600", bg: "bg-red-500", score: 1 };
  if (entropy < 36) return { label: "弱い", color: "text-orange-500", bg: "bg-orange-400", score: 2 };
  if (entropy < 60) return { label: "普通", color: "text-yellow-600", bg: "bg-yellow-400", score: 3 };
  if (entropy < 80) return { label: "強い", color: "text-green-600", bg: "bg-green-500", score: 4 };
  return { label: "非常に強い", color: "text-emerald-600", bg: "bg-emerald-500", score: 5 };
}

export default function PasswordStrengthPage() {
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);

  const entropy = calcEntropy(pw);
  const strength = getStrength(pw);

  const checks = [
    { label: "8文字以上", ok: pw.length >= 8 },
    { label: "16文字以上（推奨）", ok: pw.length >= 16 },
    { label: "小文字を含む", ok: /[a-z]/.test(pw) },
    { label: "大文字を含む", ok: /[A-Z]/.test(pw) },
    { label: "数字を含む", ok: /[0-9]/.test(pw) },
    { label: "記号を含む", ok: /[^a-zA-Z0-9]/.test(pw) },
    {
      label: "よくあるパスワードでない",
      ok: !COMMON_PATTERNS.some((p) => pw.toLowerCase().includes(p)),
    },
    { label: "繰り返しパターンがない", ok: !/(.)\1{2,}/.test(pw) },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>パスワード強度チェック</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">パスワード強度チェックツール</h1>
      <p className="text-muted mb-8">
        パスワードのエントロピーを計算し、安全性を診断します。入力内容はサーバーに送信されません。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">パスワードを入力</label>
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="パスワードを入力..."
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary pr-20"
            />
            <button
              onClick={() => setShow(!show)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-primary hover:text-primary-hover font-medium"
            >
              {show ? "隠す" : "表示"}
            </button>
          </div>
        </div>

        {pw && (
          <>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">強度</span>
                <span className={`text-sm font-bold ${strength.color}`}>{strength.label}</span>
              </div>
              <div className="w-full bg-background rounded-full h-3 overflow-hidden">
                <div
                  className={`h-3 rounded-full transition-all duration-300 ${strength.bg}`}
                  style={{ width: `${(strength.score / 5) * 100}%` }}
                />
              </div>
              <p className="text-xs text-muted mt-1">エントロピー: {entropy} bits</p>
            </div>

            <div>
              <p className="text-sm font-medium mb-3">チェック項目</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {checks.map((c) => (
                  <div key={c.label} className="flex items-center gap-2 text-sm">
                    <span className={c.ok ? "text-green-500" : "text-red-400"}>
                      {c.ok ? "✓" : "✗"}
                    </span>
                    <span className={c.ok ? "" : "text-muted"}>{c.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-lg p-4 text-sm space-y-1">
              <p className="font-medium mb-2">パスワードの詳細</p>
              <p className="text-muted">文字数: {pw.length}文字</p>
              <p className="text-muted">エントロピー: {entropy} bits（{entropy >= 60 ? "十分に安全" : entropy >= 36 ? "やや安全" : "不十分"}）</p>
            </div>
          </>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>パスワードを入力すると、エントロピー（情報量）を計算してリアルタイムで強度を表示します。</p>
          <p>エントロピーが高いほど総当たり攻撃への耐性が高くなります。60 bits以上を目安にしましょう。</p>
          <p>文字の種類（大文字・小文字・数字・記号）を増やし、16文字以上にすることで強度が大幅に向上します。</p>
          <p>入力されたパスワードはすべてブラウザ内で処理され、サーバーには送信されません。</p>
        </div>
      </section>


      <AffiliateSection slug="password-strength" category="セキュリティ" />
      <RelatedTools currentSlug="password-strength" category="セキュリティ" />
    </div>
  );
}
