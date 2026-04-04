"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

interface StatusCode {
  code: number;
  name: string;
  description: string;
}

const statusCodes: StatusCode[] = [
  { code: 100, name: "Continue", description: "リクエストの最初の部分を受信。クライアントはリクエストを続行可能。" },
  { code: 101, name: "Switching Protocols", description: "サーバーがプロトコルの切り替えに同意。" },
  { code: 200, name: "OK", description: "リクエスト成功。最も一般的なレスポンス。" },
  { code: 201, name: "Created", description: "リクエスト成功し、新しいリソースが作成された。" },
  { code: 204, name: "No Content", description: "リクエスト成功だがレスポンスボディなし。" },
  { code: 206, name: "Partial Content", description: "範囲リクエストに対する部分的なレスポンス。" },
  { code: 301, name: "Moved Permanently", description: "リソースが恒久的に新しいURLへ移動。SEOで重要。" },
  { code: 302, name: "Found", description: "リソースが一時的に別のURLにある。" },
  { code: 303, name: "See Other", description: "レスポンスを別のURLで取得するよう指示。" },
  { code: 304, name: "Not Modified", description: "リソースが変更されていない。キャッシュを使用可能。" },
  { code: 307, name: "Temporary Redirect", description: "一時的リダイレクト。リクエストメソッドを変更しない。" },
  { code: 308, name: "Permanent Redirect", description: "恒久的リダイレクト。リクエストメソッドを変更しない。" },
  { code: 400, name: "Bad Request", description: "リクエストの構文が不正。パラメータエラーなど。" },
  { code: 401, name: "Unauthorized", description: "認証が必要。ログインしていない状態。" },
  { code: 403, name: "Forbidden", description: "アクセス権限がない。認証済みでも拒否。" },
  { code: 404, name: "Not Found", description: "リソースが見つからない。URLの誤りやページ削除。" },
  { code: 405, name: "Method Not Allowed", description: "指定されたHTTPメソッドが許可されていない。" },
  { code: 408, name: "Request Timeout", description: "リクエストがタイムアウト。" },
  { code: 409, name: "Conflict", description: "リクエストが現在のリソース状態と競合。" },
  { code: 410, name: "Gone", description: "リソースが完全に削除され利用不可。" },
  { code: 413, name: "Payload Too Large", description: "リクエストボディが大きすぎる。" },
  { code: 414, name: "URI Too Long", description: "リクエストURIが長すぎる。" },
  { code: 415, name: "Unsupported Media Type", description: "サポートされていないメディアタイプ。" },
  { code: 422, name: "Unprocessable Entity", description: "リクエストは正しいが処理できない。バリデーションエラー。" },
  { code: 429, name: "Too Many Requests", description: "リクエストが多すぎる。レート制限。" },
  { code: 500, name: "Internal Server Error", description: "サーバー内部エラー。予期しない障害。" },
  { code: 502, name: "Bad Gateway", description: "ゲートウェイが不正なレスポンスを受信。" },
  { code: 503, name: "Service Unavailable", description: "サーバーが一時的に利用不可。メンテナンスや過負荷。" },
  { code: 504, name: "Gateway Timeout", description: "ゲートウェイがタイムアウト。上流サーバーから応答なし。" },
];

function getCategoryColor(code: number): string {
  if (code < 200) return "text-blue-500";
  if (code < 300) return "text-green-500";
  if (code < 400) return "text-yellow-500";
  if (code < 500) return "text-orange-500";
  return "text-red-500";
}

function getCategoryLabel(code: number): string {
  if (code < 200) return "情報";
  if (code < 300) return "成功";
  if (code < 400) return "リダイレクト";
  if (code < 500) return "クライアントエラー";
  return "サーバーエラー";
}

export default function HttpStatusPage() {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const categories = ["all", "1xx", "2xx", "3xx", "4xx", "5xx"];

  const filtered = statusCodes.filter((s) => {
    const matchesSearch =
      search === "" ||
      s.code.toString().includes(search) ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.description.includes(search);
    const matchesCategory =
      filterCategory === "all" ||
      s.code.toString().startsWith(filterCategory.charAt(0));
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>HTTPステータスコード一覧</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">HTTPステータスコード一覧</h1>
      <p className="text-muted mb-8">
        HTTPステータスコードの意味を一覧表示・検索できます。Web開発やAPI連携時の参照にご活用ください。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="コード番号や名前で検索..."
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                filterCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "border-card-border text-muted hover:text-foreground"
              }`}
            >
              {cat === "all" ? "すべて" : cat}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {filtered.map((s) => (
            <div
              key={s.code}
              className="bg-background rounded-lg p-4 flex items-start gap-4"
            >
              <div className={`text-lg font-bold font-mono shrink-0 w-12 ${getCategoryColor(s.code)}`}>
                {s.code}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-medium">
                  {s.name}
                  <span className={`ml-2 text-xs ${getCategoryColor(s.code)}`}>
                    {getCategoryLabel(s.code)}
                  </span>
                </div>
                <div className="text-xs text-muted mt-1">{s.description}</div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center text-muted py-8 text-sm">
              該当するステータスコードが見つかりません
            </div>
          )}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">HTTPステータスコード一覧の使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>検索ボックスにコード番号や名前を入力すると、該当するステータスコードを絞り込めます。</p>
          <p>カテゴリボタンで1xx〜5xxの範囲別にフィルタリングできます。</p>
          <p>API開発やサーバー管理時のHTTPレスポンス確認にご活用ください。</p>
        </div>
      </section>

      <AffiliateSection slug="http-status" category="開発ツール" />
      <RelatedTools currentSlug="http-status" category="開発ツール" />
    </div>
  );
}
