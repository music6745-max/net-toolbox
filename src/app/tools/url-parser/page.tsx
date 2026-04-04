"use client";

import { useState } from "react";
import Link from "next/link";

interface ParsedUrl {
  protocol: string;
  username: string;
  password: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  hash: string;
  origin: string;
  href: string;
  searchParams: [string, string][];
}

export default function UrlParserPage() {
  const [input, setInput] = useState("https://example.com:8080/path/to/page?foo=1&bar=hello#section");
  const [parsed, setParsed] = useState<ParsedUrl | null>(null);
  const [error, setError] = useState("");

  const parse = () => {
    if (!input.trim()) {
      setError("URLを入力してください");
      setParsed(null);
      return;
    }
    try {
      const u = new URL(input.trim());
      const params: [string, string][] = [];
      u.searchParams.forEach((v, k) => params.push([k, v]));
      setParsed({
        protocol: u.protocol,
        username: u.username,
        password: u.password,
        hostname: u.hostname,
        port: u.port,
        pathname: u.pathname,
        search: u.search,
        hash: u.hash,
        origin: u.origin,
        href: u.href,
        searchParams: params,
      });
      setError("");
    } catch {
      setError("無効なURLです。プロトコル（https://など）を含む完全なURLを入力してください。");
      setParsed(null);
    }
  };

  const Row = ({ label, value }: { label: string; value: string }) => (
    <tr className="border-b border-card-border last:border-0">
      <td className="py-2 pr-4 text-sm font-mono text-muted whitespace-nowrap w-36">{label}</td>
      <td className="py-2 text-sm font-mono break-all">{value || <span className="text-muted italic">（なし）</span>}</td>
    </tr>
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>URLパーサー</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">URLパーサーツール</h1>
      <p className="text-muted mb-8">
        URLを入力してプロトコル・ホスト・パス・クエリパラメータなどの構成要素に分解します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">URL入力</label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && parse()}
            placeholder="https://example.com/path?key=value#hash"
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <button
          onClick={parse}
          className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          解析する
        </button>

        {parsed && (
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-sm font-semibold mb-2">基本情報</h3>
              <div className="bg-background rounded-lg overflow-hidden">
                <table className="w-full">
                  <tbody className="divide-y divide-card-border">
                    <Row label="protocol" value={parsed.protocol} />
                    <Row label="username" value={parsed.username} />
                    <Row label="password" value={parsed.password} />
                    <Row label="hostname" value={parsed.hostname} />
                    <Row label="port" value={parsed.port} />
                    <Row label="pathname" value={parsed.pathname} />
                    <Row label="search" value={parsed.search} />
                    <Row label="hash" value={parsed.hash} />
                    <Row label="origin" value={parsed.origin} />
                  </tbody>
                </table>
              </div>
            </div>

            {parsed.searchParams.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold mb-2">クエリパラメータ</h3>
                <div className="bg-background rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-card-border">
                        <th className="py-2 px-4 text-left text-xs font-medium text-muted">キー</th>
                        <th className="py-2 px-4 text-left text-xs font-medium text-muted">値</th>
                      </tr>
                    </thead>
                    <tbody>
                      {parsed.searchParams.map(([k, v], i) => (
                        <tr key={i} className="border-b border-card-border last:border-0">
                          <td className="py-2 px-4 text-sm font-mono">{k}</td>
                          <td className="py-2 px-4 text-sm font-mono break-all">{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 解析したいURLを入力欄に貼り付けます（https://から始まる完全なURLを入力）。</p>
          <p>2. 「解析する」ボタンをクリック、またはEnterキーを押します。</p>
          <p>3. protocol・hostname・pathname・クエリパラメータなどが一覧表示されます。</p>
          <p>クエリパラメータが複数ある場合は、キーと値を個別に確認できます。</p>
        </div>
      </section>
    </div>
  );
}
