"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const COMMON = new Set([
  "password", "123456", "123456789", "qwerty", "12345678", "111111",
  "1234567", "abc123", "password1", "iloveyou", "admin", "welcome",
]);

function analyze(pw: string) {
  const length = pw.length;
  const hasLower = /[a-z]/.test(pw);
  const hasUpper = /[A-Z]/.test(pw);
  const hasDigit = /\d/.test(pw);
  const hasSymbol = /[^A-Za-z0-9]/.test(pw);
  let pool = 0;
  if (hasLower) pool += 26;
  if (hasUpper) pool += 26;
  if (hasDigit) pool += 10;
  if (hasSymbol) pool += 33;
  const entropy = length > 0 && pool > 0 ? length * Math.log2(pool) : 0;
  const isCommon = COMMON.has(pw.toLowerCase());
  const hasRepeat = /(.)\1{2,}/.test(pw);
  const hasSequence = /(?:abcd|1234|qwer|asdf|zxcv)/i.test(pw);

  // Score 0–4
  let score = 0;
  if (length >= 8) score++;
  if (length >= 12) score++;
  if (hasLower && hasUpper && hasDigit) score++;
  if (hasSymbol && length >= 10) score++;
  if (isCommon || length < 6) score = 0;
  if (hasRepeat || hasSequence) score = Math.max(0, score - 1);

  // Estimated crack time at 10^10 guesses/sec
  const guesses = Math.pow(2, entropy);
  const seconds = guesses / 1e10;
  const crackTime = formatTime(seconds);

  const suggestions: string[] = [];
  if (length < 12) suggestions.push("12文字以上にする");
  if (!hasUpper) suggestions.push("大文字を含める");
  if (!hasDigit) suggestions.push("数字を含める");
  if (!hasSymbol) suggestions.push("記号を含める");
  if (isCommon) suggestions.push("よく使われるパスワードを避ける");
  if (hasRepeat) suggestions.push("同じ文字の連続を避ける");
  if (hasSequence) suggestions.push("連続した並び（abcd, 1234など）を避ける");

  return { length, hasLower, hasUpper, hasDigit, hasSymbol, entropy, score, crackTime, suggestions, isCommon };
}

function formatTime(sec: number): string {
  if (sec < 1) return "瞬時";
  if (sec < 60) return `${sec.toFixed(0)}秒`;
  if (sec < 3600) return `${(sec / 60).toFixed(0)}分`;
  if (sec < 86400) return `${(sec / 3600).toFixed(0)}時間`;
  if (sec < 31536000) return `${(sec / 86400).toFixed(0)}日`;
  const years = sec / 31536000;
  if (years < 1000) return `${years.toFixed(0)}年`;
  if (years < 1e6) return `${(years / 1000).toFixed(0)}千年`;
  if (years < 1e9) return `${(years / 1e6).toFixed(0)}百万年`;
  return "事実上解読不能";
}

const SCORE_LABEL = ["非常に弱い", "弱い", "普通", "強い", "非常に強い"];
const SCORE_COLOR = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500", "bg-emerald-600"];
const SCORE_TEXT = ["text-red-500", "text-orange-500", "text-yellow-600", "text-green-600", "text-emerald-600"];

export default function Page() {
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);
  const a = useMemo(() => analyze(pw), [pw]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>パスワード強度テスター</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">パスワード強度テスター</h1>
      <p className="text-muted mb-8">
        入力したパスワードの強度をリアルタイムで評価します。すべての処理はブラウザ内で行われ、パスワードは外部送信されません。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">パスワードを入力</label>
        <div className="relative mb-4">
          <input
            type={show ? "text" : "password"}
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="ここにパスワードを入力..."
            className="w-full border border-card-border rounded-lg px-4 py-2.5 pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            autoComplete="off"
          />
          <button onClick={() => setShow(!show)} className="absolute right-2 top-1/2 -translate-y-1/2 text-xs px-2 py-1 rounded border border-card-border hover:bg-background">
            {show ? "隠す" : "表示"}
          </button>
        </div>

        {pw && (
          <>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className={`font-bold ${SCORE_TEXT[a.score]}`}>{SCORE_LABEL[a.score]}</span>
                <span className="text-muted">スコア {a.score}/4</span>
              </div>
              <div className="h-2 bg-background rounded-full overflow-hidden">
                <div className={`h-full transition-all duration-300 ${SCORE_COLOR[a.score]}`} style={{ width: `${((a.score + 1) / 5) * 100}%` }} />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4 text-xs">
              <div className="bg-background rounded p-3"><p className="text-muted">文字数</p><p className="font-bold text-base">{a.length}</p></div>
              <div className="bg-background rounded p-3"><p className="text-muted">エントロピー</p><p className="font-bold text-base">{a.entropy.toFixed(0)} bit</p></div>
              <div className="bg-background rounded p-3 col-span-2"><p className="text-muted">推定解析時間</p><p className="font-bold text-base">{a.crackTime}</p></div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4 text-xs">
              <span className={`px-2 py-1 rounded ${a.hasLower ? "bg-green-500/20 text-green-600" : "bg-background text-muted"}`}>小文字</span>
              <span className={`px-2 py-1 rounded ${a.hasUpper ? "bg-green-500/20 text-green-600" : "bg-background text-muted"}`}>大文字</span>
              <span className={`px-2 py-1 rounded ${a.hasDigit ? "bg-green-500/20 text-green-600" : "bg-background text-muted"}`}>数字</span>
              <span className={`px-2 py-1 rounded ${a.hasSymbol ? "bg-green-500/20 text-green-600" : "bg-background text-muted"}`}>記号</span>
            </div>

            {a.suggestions.length > 0 && (
              <div className="bg-background rounded-lg p-4 text-sm">
                <p className="font-medium mb-2">改善提案</p>
                <ul className="list-disc list-inside text-muted space-y-1">
                  {a.suggestions.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            )}
          </>
        )}
      </div>

      <section className="mt-10 bg-card-bg border border-card-border rounded-xl p-6">
        <h2 className="text-lg font-bold mb-3">関連ガイド</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <Link href="/tools/password-generator" className="block p-4 rounded-lg border border-card-border hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-medium">パスワード生成ツール</p>
            <p className="text-muted text-xs mt-1">安全なパスワードを作る</p>
          </Link>
          <Link href="/guide/best-vpn-services" className="block p-4 rounded-lg border border-card-border hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-medium">VPNサービス比較</p>
            <p className="text-muted text-xs mt-1">通信もまとめて保護するなら</p>
          </Link>
        </div>
      </section>

      <AffiliateSection slug="password-strength-tester" category="セキュリティ" />
      <RelatedTools currentSlug="password-strength-tester" category="セキュリティ" />
    </div>
  );
}
