"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function base64UrlDecode(str: string): string {
  // Replace URL-safe chars and pad
  let s = str.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  try {
    return decodeURIComponent(
      atob(s)
        .split("")
        .map((c) => "%" + c.charCodeAt(0).toString(16).padStart(2, "0"))
        .join("")
    );
  } catch {
    return atob(s);
  }
}

function parseJwt(token: string): { header: object; payload: object; signature: string; parts: string[] } | null {
  const parts = token.trim().split(".");
  if (parts.length !== 3) return null;
  try {
    const header = JSON.parse(base64UrlDecode(parts[0]));
    const payload = JSON.parse(base64UrlDecode(parts[1]));
    return { header, payload, signature: parts[2], parts };
  } catch {
    return null;
  }
}

function formatTime(unix: number): string {
  const date = new Date(unix * 1000);
  return date.toLocaleString("ja-JP", {
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit",
    timeZoneName: "short",
  });
}

function getExpiryStatus(exp?: number): { label: string; color: string } {
  if (exp === undefined) return { label: "有効期限なし", color: "text-muted" };
  const now = Math.floor(Date.now() / 1000);
  if (exp < now) {
    const diff = now - exp;
    const hours = Math.floor(diff / 3600);
    const mins = Math.floor((diff % 3600) / 60);
    return { label: `期限切れ（${hours > 0 ? `${hours}時間` : ""}${mins}分前）`, color: "text-red-500" };
  }
  const diff = exp - now;
  const hours = Math.floor(diff / 3600);
  const mins = Math.floor((diff % 3600) / 60);
  return { label: `有効（残り${hours > 0 ? `${hours}時間` : ""}${mins}分）`, color: "text-green-600" };
}

const SAMPLE_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpvb G4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjk5OTk5OTk5OTl9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c".replace(/\s/g, "");

export default function JwtDecoderPage() {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const parsed = token.trim() ? parseJwt(token) : null;

  const handleInput = (v: string) => {
    setToken(v);
    if (v.trim() && !parseJwt(v)) {
      setError("有効なJWTトークンではありません（ヘッダー.ペイロード.署名の形式が必要です）");
    } else {
      setError("");
    }
  };

  const payload = parsed?.payload as Record<string, unknown> | undefined;
  const header = parsed?.header as Record<string, unknown> | undefined;

  const exp = payload?.exp as number | undefined;
  const iat = payload?.iat as number | undefined;
  const nbf = payload?.nbf as number | undefined;
  const expiryStatus = exp !== undefined ? getExpiryStatus(exp) : null;

  const copyPart = (obj: object) => navigator.clipboard.writeText(JSON.stringify(obj, null, 2));

  const CLAIM_LABELS: Record<string, string> = {
    sub: "subject（対象者）",
    iss: "issuer（発行者）",
    aud: "audience（対象オーディエンス）",
    exp: "expiration（有効期限）",
    iat: "issued at（発行日時）",
    nbf: "not before（有効開始日時）",
    jti: "JWT ID",
    name: "name（名前）",
    email: "email（メールアドレス）",
    role: "role（ロール）",
    roles: "roles（ロール一覧）",
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>JWTデコーダー</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">JWTデコーダーツール</h1>
      <p className="text-muted mb-8">
        JWTトークン（JSON Web Token）のヘッダーとペイロードをデコードして内容を確認します。署名の検証は行いません。
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6">
        <p className="text-sm text-amber-800">
          <span className="font-semibold">注意:</span> このツールは署名の検証を行いません。デコードはBase64URLの復号のみです。本番環境のトークンを貼り付ける場合は情報漏洩にご注意ください。
        </p>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-1">JWTトークンを入力</label>
        <textarea
          value={token}
          onChange={(e) => handleInput(e.target.value)}
          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.signature"
          rows={5}
          className={`w-full border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none break-all ${error ? "border-red-400" : "border-card-border"}`}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        <div className="mt-2 flex gap-2">
          <button
            onClick={() => handleInput(SAMPLE_JWT)}
            className="text-xs text-primary hover:text-primary-hover font-medium"
          >
            サンプルトークンを読み込む
          </button>
          {token && (
            <button
              onClick={() => { setToken(""); setError(""); }}
              className="text-xs text-muted hover:text-foreground"
            >
              クリア
            </button>
          )}
        </div>
      </div>

      {parsed && header && payload && (
        <div className="mt-6 space-y-4">
          {/* Token parts visualization */}
          <div className="bg-card-bg border border-card-border rounded-xl p-4">
            <p className="text-xs font-medium text-muted mb-2">トークン構造</p>
            <div className="text-xs font-mono break-all leading-relaxed">
              <span className="text-red-500">{parsed.parts[0]}</span>
              <span className="text-muted">.</span>
              <span className="text-purple-600">{parsed.parts[1]}</span>
              <span className="text-muted">.</span>
              <span className="text-green-600">{parsed.parts[2]}</span>
            </div>
            <div className="flex gap-4 mt-2 text-xs">
              <span className="text-red-500">■ ヘッダー</span>
              <span className="text-purple-600">■ ペイロード</span>
              <span className="text-green-600">■ 署名（検証不可）</span>
            </div>
          </div>

          {/* Expiry status banner */}
          {expiryStatus && (
            <div className={`rounded-xl px-4 py-3 border ${exp! < Math.floor(Date.now() / 1000) ? "bg-red-50 border-red-200" : "bg-green-50 border-green-200"}`}>
              <p className={`text-sm font-medium ${expiryStatus.color}`}>
                {expiryStatus.label}
                {exp && ` — ${formatTime(exp)}`}
              </p>
            </div>
          )}

          {/* Header */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-base font-bold text-red-500">ヘッダー（Header）</h2>
              <button onClick={() => copyPart(header)} className="text-xs text-primary hover:text-primary-hover font-medium">コピー</button>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-4">
              <div className="space-y-1">
                {Object.entries(header).map(([k, v]) => (
                  <div key={k} className="flex gap-3 text-sm">
                    <code className="text-red-500 font-mono w-16 flex-shrink-0">{k}</code>
                    <span className="text-muted text-xs mt-0.5 w-32 flex-shrink-0">
                      {k === "alg" ? "アルゴリズム" : k === "typ" ? "トークンタイプ" : k === "kid" ? "鍵ID" : ""}
                    </span>
                    <code className="font-mono">{String(v)}</code>
                  </div>
                ))}
              </div>
              <pre className="mt-3 text-xs font-mono text-muted bg-background rounded-lg p-3 overflow-x-auto">
                {JSON.stringify(header, null, 2)}
              </pre>
            </div>
          </div>

          {/* Payload */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-base font-bold text-purple-600">ペイロード（Payload）</h2>
              <button onClick={() => copyPart(payload)} className="text-xs text-primary hover:text-primary-hover font-medium">コピー</button>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-4">
              <div className="space-y-2">
                {Object.entries(payload).map(([k, v]) => (
                  <div key={k} className="flex gap-3 text-sm items-start">
                    <code className="text-purple-600 font-mono w-16 flex-shrink-0">{k}</code>
                    <span className="text-muted text-xs mt-0.5 w-36 flex-shrink-0">{CLAIM_LABELS[k] || ""}</span>
                    <div className="flex-1">
                      <code className="font-mono text-xs break-all">
                        {typeof v === "number" && (k === "exp" || k === "iat" || k === "nbf")
                          ? `${v} （${formatTime(v)}）`
                          : typeof v === "object"
                          ? JSON.stringify(v)
                          : String(v)}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
              <pre className="mt-3 text-xs font-mono text-muted bg-background rounded-lg p-3 overflow-x-auto">
                {JSON.stringify(payload, null, 2)}
              </pre>
            </div>
          </div>

          {/* Signature note */}
          <div className="bg-card-bg border border-card-border rounded-xl p-4">
            <h2 className="text-base font-bold text-green-600 mb-1">署名（Signature）</h2>
            <p className="text-xs text-muted mb-2">署名はこのツールでは検証されません。改ざん検知には専用の検証ツールをご利用ください。</p>
            <code className="text-xs font-mono text-green-600 break-all">{parsed.signature}</code>
          </div>

          {/* Summary */}
          <div className="bg-background rounded-lg p-4 text-sm">
            <p className="font-medium mb-2">トークン情報まとめ</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><span className="text-xs text-muted block">アルゴリズム</span>{String(header.alg || "—")}</div>
              <div><span className="text-xs text-muted block">タイプ</span>{String(header.typ || "—")}</div>
              {!!payload.sub && <div><span className="text-xs text-muted block">対象者（sub）</span>{String(payload.sub)}</div>}
              {!!payload.iss && <div><span className="text-xs text-muted block">発行者（iss）</span>{String(payload.iss)}</div>}
              {iat && <div><span className="text-xs text-muted block">発行日時（iat）</span>{formatTime(iat)}</div>}
              {nbf && <div><span className="text-xs text-muted block">有効開始（nbf）</span>{formatTime(nbf)}</div>}
              {exp && <div className="col-span-2"><span className="text-xs text-muted block">有効期限（exp）</span><span className={expiryStatus?.color}>{formatTime(exp)}</span></div>}
            </div>
          </div>
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. JWTトークンをテキストエリアに貼り付けます。</p>
          <p>2. ヘッダー・ペイロードが自動的にデコードされ、クレーム情報が表示されます。</p>
          <p>3. 有効期限（exp）が含まれている場合、現在時刻と比較した状態が表示されます。</p>
          <p>4. このツールは署名の検証を行いません。セキュリティ用途には使用しないでください。</p>
          <p>5. 本番環境のJWTには個人情報や認証情報が含まれる場合があります。取り扱いに注意してください。</p>
        </div>
      </section>


      <AffiliateSection slug="jwt-decoder" category="開発ツール" />
      <RelatedTools currentSlug="jwt-decoder" category="開発ツール" />
    </div>
  );
}
