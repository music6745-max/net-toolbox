"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

type Rule = {
  id: number;
  userAgent: string;
  allowPaths: string;
  disallowPaths: string;
};

let nextId = 2;

export default function RobotsTxtGeneratorPage() {
  const [rules, setRules] = useState<Rule[]>([
    { id: 1, userAgent: "*", allowPaths: "/", disallowPaths: "" },
  ]);
  const [sitemapUrl, setSitemapUrl] = useState("");
  const [crawlDelay, setCrawlDelay] = useState("");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const addRule = () => {
    setRules((prev) => [
      ...prev,
      { id: nextId++, userAgent: "*", allowPaths: "", disallowPaths: "" },
    ]);
  };

  const removeRule = (id: number) => {
    setRules((prev) => prev.filter((r) => r.id !== id));
  };

  const updateRule = (id: number, field: keyof Rule, value: string) => {
    setRules((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    );
  };

  const generate = () => {
    const lines: string[] = [];

    for (const rule of rules) {
      lines.push(`User-agent: ${rule.userAgent || "*"}`);
      if (crawlDelay) lines.push(`Crawl-delay: ${crawlDelay}`);
      const allows = rule.allowPaths
        .split("\n")
        .map((p) => p.trim())
        .filter((p) => p.length > 0);
      const disallows = rule.disallowPaths
        .split("\n")
        .map((p) => p.trim())
        .filter((p) => p.length > 0);
      for (const a of allows) lines.push(`Allow: ${a}`);
      if (disallows.length === 0) {
        lines.push(`Disallow:`);
      } else {
        for (const d of disallows) lines.push(`Disallow: ${d}`);
      }
      lines.push("");
    }

    if (sitemapUrl) lines.push(`Sitemap: ${sitemapUrl}`);

    setResult(lines.join("\n").trim());
  };

  const copy = async () => {
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const download = () => {
    const blob = new Blob([result], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "robots.txt";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const presets = [
    {
      label: "すべて許可",
      apply: () =>
        setRules([{ id: nextId++, userAgent: "*", allowPaths: "/", disallowPaths: "" }]),
    },
    {
      label: "すべて禁止",
      apply: () =>
        setRules([{ id: nextId++, userAgent: "*", allowPaths: "", disallowPaths: "/" }]),
    },
    {
      label: "管理画面を禁止",
      apply: () =>
        setRules([
          {
            id: nextId++,
            userAgent: "*",
            allowPaths: "/",
            disallowPaths: "/admin/\n/wp-admin/\n/login/",
          },
        ]),
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>robots.txt生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">robots.txt生成ツール</h1>
      <p className="text-muted mb-8">
        クローラーのアクセス設定を選択してrobots.txtを自動生成します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        <div>
          <p className="text-sm font-medium mb-3">プリセット</p>
          <div className="flex flex-wrap gap-2">
            {presets.map((p) => (
              <button
                key={p.label}
                onClick={p.apply}
                className="px-3 py-1.5 bg-background border border-card-border rounded-lg text-xs font-medium hover:text-primary hover:border-primary transition-colors"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {rules.map((rule, idx) => (
            <div key={rule.id} className="border border-card-border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">ルール {idx + 1}</span>
                {rules.length > 1 && (
                  <button
                    onClick={() => removeRule(rule.id)}
                    className="text-xs text-red-400 hover:text-red-600"
                  >
                    削除
                  </button>
                )}
              </div>
              <div>
                <label className="block text-xs text-muted mb-1">User-agent</label>
                <input
                  type="text"
                  value={rule.userAgent}
                  onChange={(e) => updateRule(rule.id, "userAgent", e.target.value)}
                  placeholder="* （全クローラー）"
                  className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-muted mb-1">Allow パス（1行に1つ）</label>
                  <textarea
                    value={rule.allowPaths}
                    onChange={(e) => updateRule(rule.id, "allowPaths", e.target.value)}
                    placeholder={"/\n/public/"}
                    className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none font-mono"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted mb-1">Disallow パス（1行に1つ）</label>
                  <textarea
                    value={rule.disallowPaths}
                    onChange={(e) => updateRule(rule.id, "disallowPaths", e.target.value)}
                    placeholder={"/admin/\n/private/"}
                    className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none font-mono"
                    rows={3}
                  />
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={addRule}
            className="text-sm text-primary hover:text-primary-hover font-medium"
          >
            + ルールを追加
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Sitemap URL（省略可）</label>
            <input
              type="url"
              value={sitemapUrl}
              onChange={(e) => setSitemapUrl(e.target.value)}
              placeholder="https://example.com/sitemap.xml"
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Crawl-delay（秒、省略可）</label>
            <input
              type="number"
              value={crawlDelay}
              onChange={(e) => setCrawlDelay(e.target.value)}
              placeholder="例: 10"
              min="0"
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>

        <button
          onClick={generate}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          robots.txtを生成
        </button>

        {result && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">生成された robots.txt</span>
              <div className="flex gap-2">
                <button
                  onClick={copy}
                  className="text-xs text-primary hover:text-primary-hover font-medium border border-card-border rounded px-3 py-1"
                >
                  {copied ? "コピー済み" : "コピー"}
                </button>
                <button
                  onClick={download}
                  className="text-xs text-primary hover:text-primary-hover font-medium border border-card-border rounded px-3 py-1"
                >
                  ダウンロード
                </button>
              </div>
            </div>
            <textarea
              readOnly
              value={result}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono bg-background resize-none"
              rows={10}
            />
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>プリセットを選ぶか、User-agent・Allow・Disallowパスを入力して「robots.txtを生成」をクリックします。</p>
          <p>生成されたテキストをダウンロードし、Webサーバーのルートディレクトリに配置してください。</p>
          <p>Disallowが空の場合はそのUser-agentのクロールをすべて許可します。</p>
          <p>Googleなど主要検索エンジンはrobots.txtを尊重しますが、全てのクローラーが従うわけではありません。</p>
        </div>
      </section>


      <RelatedTools currentSlug="robots-txt-generator" category="開発ツール" />
    </div>
  );
}
