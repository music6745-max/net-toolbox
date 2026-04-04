"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

interface DirectiveState {
  self: boolean;
  none: boolean;
  unsafeInline: boolean;
  unsafeEval: boolean;
  custom: string;
}

const directiveNames = [
  "default-src",
  "script-src",
  "style-src",
  "img-src",
  "font-src",
  "connect-src",
  "frame-src",
  "media-src",
] as const;

type DirectiveName = typeof directiveNames[number];

const defaultState = (): DirectiveState => ({
  self: false,
  none: false,
  unsafeInline: false,
  unsafeEval: false,
  custom: "",
});

export default function Page() {
  const [directives, setDirectives] = useState<Record<DirectiveName, DirectiveState>>(
    () => {
      const init: Record<string, DirectiveState> = {};
      directiveNames.forEach((name) => {
        init[name] = defaultState();
      });
      return init as Record<DirectiveName, DirectiveState>;
    }
  );
  const [copied, setCopied] = useState(false);

  const updateDirective = (name: DirectiveName, field: keyof DirectiveState, value: boolean | string) => {
    setDirectives((prev) => ({
      ...prev,
      [name]: { ...prev[name], [field]: value },
    }));
  };

  const generateCsp = (): string => {
    const parts: string[] = [];
    directiveNames.forEach((name) => {
      const d = directives[name];
      const values: string[] = [];
      if (d.none) {
        values.push("'none'");
      } else {
        if (d.self) values.push("'self'");
        if (d.unsafeInline) values.push("'unsafe-inline'");
        if (d.unsafeEval) values.push("'unsafe-eval'");
        if (d.custom.trim()) {
          d.custom
            .trim()
            .split(/[\s,]+/)
            .filter(Boolean)
            .forEach((v) => values.push(v));
        }
      }
      if (values.length > 0) {
        parts.push(`${name} ${values.join(" ")}`);
      }
    });
    return parts.join("; ");
  };

  const cspHeader = generateCsp();

  const copy = async () => {
    await navigator.clipboard.writeText(cspHeader);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>CSPヘッダー生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">CSPヘッダー生成ツール</h1>
      <p className="text-muted mb-8">
        Content-Security-Policyヘッダーをビジュアルに設定・生成します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        {directiveNames.map((name) => {
          const d = directives[name];
          return (
            <div key={name} className="border-b border-card-border/50 pb-4 last:border-0">
              <div className="text-sm font-medium font-mono mb-2">{name}</div>
              <div className="flex flex-wrap gap-3 mb-2">
                {(
                  [
                    { key: "self" as const, label: "'self'" },
                    { key: "none" as const, label: "'none'" },
                    { key: "unsafeInline" as const, label: "'unsafe-inline'" },
                    { key: "unsafeEval" as const, label: "'unsafe-eval'" },
                  ] as const
                ).map((opt) => (
                  <label key={opt.key} className="flex items-center gap-1.5 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={d[opt.key]}
                      onChange={(e) => updateDirective(name, opt.key, e.target.checked)}
                      className="rounded"
                    />
                    <span className="font-mono text-xs">{opt.label}</span>
                  </label>
                ))}
              </div>
              <input
                type="text"
                value={d.custom}
                onChange={(e) => updateDirective(name, "custom", e.target.value)}
                placeholder="カスタムドメイン（例: https://cdn.example.com *.googleapis.com）"
                className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
          );
        })}

        {cspHeader && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">生成されたCSPヘッダー</span>
              <button onClick={copy} className="text-sm text-primary hover:text-primary-hover font-medium">
                {copied ? "コピー済み" : "コピー"}
              </button>
            </div>
            <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto break-all whitespace-pre-wrap">
              Content-Security-Policy: {cspHeader}
            </pre>
          </div>
        )}

        {!cspHeader && (
          <p className="text-sm text-muted">上記のディレクティブを設定してください。</p>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">CSPヘッダー生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>各ディレクティブのチェックボックスで許可するソースを選択します。</p>
          <p>カスタムドメインを追加する場合は、テキストボックスにスペース区切りで入力してください。</p>
          <p>生成されたCSPヘッダーをサーバー設定やmeta tagにコピーして使用します。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>

      <RelatedTools currentSlug="csp-generator" category="開発ツール" />
    </div>
  );
}
