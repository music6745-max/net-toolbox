"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

interface CookieEntry {
  key: string;
  value: string;
}

function parseCookies(raw: string): CookieEntry[] {
  if (!raw.trim()) return [];
  return raw.split(";").map((pair) => {
    const idx = pair.indexOf("=");
    if (idx === -1) return { key: pair.trim(), value: "" };
    return {
      key: pair.slice(0, idx).trim(),
      value: pair.slice(idx + 1).trim(),
    };
  }).filter((c) => c.key !== "");
}

export default function CookieViewerPage() {
  const [cookies, setCookies] = useState<CookieEntry[]>([]);
  const [filter, setFilter] = useState("");

  const reload = () => {
    if (typeof document !== "undefined") {
      setCookies(parseCookies(document.cookie));
    }
  };

  useEffect(() => {
    reload();
  }, []);

  const filtered = filter
    ? cookies.filter((c) => c.key.toLowerCase().includes(filter.toLowerCase()) || c.value.toLowerCase().includes(filter.toLowerCase()))
    : cookies;

  const [testKey, setTestKey] = useState("");
  const [testValue, setTestValue] = useState("");
  const [addMsg, setAddMsg] = useState("");

  const addTestCookie = () => {
    if (!testKey.trim()) {
      setAddMsg("キーを入力してください");
      return;
    }
    document.cookie = `${encodeURIComponent(testKey.trim())}=${encodeURIComponent(testValue)}; path=/`;
    setAddMsg(`Cookie "${testKey}" を設定しました`);
    setTestKey("");
    setTestValue("");
    setTimeout(() => {
      setAddMsg("");
      reload();
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>Cookie確認</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">Cookie確認ツール</h1>
      <p className="text-muted mb-8">
        現在のページのブラウザCookieを一覧表示します。JavaScriptからアクセスできるCookieのみ表示されます（HttpOnly Cookieは非表示）。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="キーまたは値で絞り込み..."
            className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
          <button onClick={reload}
            className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors whitespace-nowrap">
            再読み込み
          </button>
        </div>

        {filtered.length === 0 ? (
          <div className="bg-background rounded-lg p-6 text-center text-muted text-sm">
            {cookies.length === 0
              ? "このページにCookieは設定されていません。下のフォームでテスト用Cookieを追加できます。"
              : "絞り込み条件に一致するCookieがありません。"}
          </div>
        ) : (
          <div className="bg-background rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border">
                  <th className="py-2 px-4 text-left text-xs font-medium text-muted w-1/3">キー</th>
                  <th className="py-2 px-4 text-left text-xs font-medium text-muted">値</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c, i) => (
                  <tr key={i} className="border-b border-card-border last:border-0 hover:bg-card-bg/50 transition-colors">
                    <td className="py-2.5 px-4 font-mono font-medium break-all">{c.key}</td>
                    <td className="py-2.5 px-4 font-mono text-muted break-all">{c.value || <span className="italic">（空）</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="text-xs text-muted">合計: {cookies.length}件 / 表示: {filtered.length}件</p>

        <div className="border-t border-card-border pt-5">
          <h3 className="text-sm font-semibold mb-3">テスト用Cookie追加</h3>
          <div className="flex gap-2 flex-wrap">
            <input type="text" value={testKey} onChange={(e) => setTestKey(e.target.value)}
              placeholder="キー"
              className="flex-1 min-w-24 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
            <input type="text" value={testValue} onChange={(e) => setTestValue(e.target.value)}
              placeholder="値"
              className="flex-1 min-w-24 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
            <button onClick={addTestCookie}
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">
              追加
            </button>
          </div>
          {addMsg && <p className="text-green-600 text-sm mt-2">{addMsg}</p>}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. ページを開くと自動でブラウザのCookieを読み込み、テーブルに表示します。</p>
          <p>2. 「再読み込み」ボタンで最新のCookieを再取得します。</p>
          <p>3. 絞り込み欄にキーまたは値を入力して特定のCookieを検索できます。</p>
          <p>4. テスト用Cookieフォームでこのページ上にCookieを追加して動作を確認できます。</p>
          <p>※ HttpOnly 属性のCookieはJavaScriptからアクセスできないため表示されません。</p>
        </div>
      </section>


      <AffiliateSection slug="cookie-viewer" category="開発ツール" />
      <RelatedTools currentSlug="cookie-viewer" category="開発ツール" />
    </div>
  );
}
