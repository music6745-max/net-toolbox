"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

const STATUS_CODES = [
  // 1xx
  { code: 100, name: "Continue", desc: "リクエストの最初の部分を受信し、残りを続けてよいことをクライアントに伝えます。" },
  { code: 101, name: "Switching Protocols", desc: "サーバーがプロトコルの切り替え（例：HTTP→WebSocket）に同意します。" },
  { code: 102, name: "Processing", desc: "サーバーがリクエストを受信し処理中ですが、まだレスポンスはありません。" },
  { code: 103, name: "Early Hints", desc: "最終レスポンスの前にリンクヘッダーを送信し、ブラウザがリソースを先読みできるようにします。" },
  // 2xx
  { code: 200, name: "OK", desc: "リクエストが成功しました。最も一般的なステータスコードです。" },
  { code: 201, name: "Created", desc: "リクエストが成功し、新しいリソースが作成されました（POSTなど）。" },
  { code: 202, name: "Accepted", desc: "リクエストは受理されましたが、処理はまだ完了していません。" },
  { code: 203, name: "Non-Authoritative Information", desc: "成功ですが、レスポンスはオリジンサーバー以外のソースからのものです。" },
  { code: 204, name: "No Content", desc: "リクエストは成功しましたが、返すコンテンツはありません。" },
  { code: 205, name: "Reset Content", desc: "リクエストが成功し、クライアントはビュー（フォームなど）をリセットしてください。" },
  { code: 206, name: "Partial Content", desc: "部分的なGETリクエストへのレスポンス（Range ヘッダー使用時）。" },
  { code: 207, name: "Multi-Status", desc: "複数のリソースに対する複数のステータスコードを含むXMLレスポンスです（WebDAV）。" },
  { code: 208, name: "Already Reported", desc: "DAVバインディングのメンバーがすでに前のレスポンスで列挙されています（WebDAV）。" },
  { code: 226, name: "IM Used", desc: "サーバーはGETリクエストを完了し、レスポンスは1つ以上のインスタンス操作の結果を表します。" },
  // 3xx
  { code: 300, name: "Multiple Choices", desc: "リクエストに対して複数の選択肢があります。" },
  { code: 301, name: "Moved Permanently", desc: "リソースが恒久的に新しいURLに移動しました。SEOで重要なリダイレクト。" },
  { code: 302, name: "Found", desc: "リソースが一時的に別のURLにあります。一時的なリダイレクトに使用。" },
  { code: 303, name: "See Other", desc: "別のURLをGETでリクエストしてください。POSTの後のリダイレクトに使用。" },
  { code: 304, name: "Not Modified", desc: "キャッシュされたバージョンが最新のため、リソースは変更されていません。" },
  { code: 307, name: "Temporary Redirect", desc: "リソースが一時的に別のURLにあります。メソッドは変更しません。" },
  { code: 308, name: "Permanent Redirect", desc: "リソースが恒久的に別のURLに移動。メソッドは変更しません。" },
  // 4xx
  { code: 400, name: "Bad Request", desc: "リクエストの構文が不正、または無効なリクエストです。" },
  { code: 401, name: "Unauthorized", desc: "認証が必要です。ログインが必要なページでよく見られます。" },
  { code: 402, name: "Payment Required", desc: "将来の使用のために予約されています。" },
  { code: 403, name: "Forbidden", desc: "アクセスが拒否されています。認証済みでも許可されていません。" },
  { code: 404, name: "Not Found", desc: "リクエストされたリソースが見つかりません。最も有名なエラーコード。" },
  { code: 405, name: "Method Not Allowed", desc: "そのリソースに対してそのHTTPメソッドは許可されていません。" },
  { code: 406, name: "Not Acceptable", desc: "リクエストのAcceptヘッダーに合うコンテンツをサーバーが生成できません。" },
  { code: 407, name: "Proxy Authentication Required", desc: "プロキシサーバーの認証が必要です。" },
  { code: 408, name: "Request Timeout", desc: "クライアントのリクエスト送信がタイムアウトしました。" },
  { code: 409, name: "Conflict", desc: "リクエストがリソースの現在の状態と競合しています。" },
  { code: 410, name: "Gone", desc: "リソースが恒久的に削除され、転送先URLもありません。" },
  { code: 411, name: "Length Required", desc: "Content-Lengthヘッダーが必要です。" },
  { code: 412, name: "Precondition Failed", desc: "リクエストの前提条件がサーバーで満たされませんでした。" },
  { code: 413, name: "Content Too Large", desc: "リクエストエンティティがサーバーの制限より大きい。" },
  { code: 414, name: "URI Too Long", desc: "リクエストURIがサーバーの許容量を超えています。" },
  { code: 415, name: "Unsupported Media Type", desc: "リクエストのメディアタイプがサーバーでサポートされていません。" },
  { code: 416, name: "Range Not Satisfiable", desc: "Rangeヘッダーで指定された範囲が無効です。" },
  { code: 417, name: "Expectation Failed", desc: "Expectヘッダーの内容をサーバーが満たせません。" },
  { code: 418, name: "I'm a teapot", desc: "「私はティーポットです」。RFC 2324のジョークコード。コーヒーを淹れるよう求めると返します。" },
  { code: 421, name: "Misdirected Request", desc: "リクエストが適切に応答できないサーバーに送られました。" },
  { code: 422, name: "Unprocessable Content", desc: "リクエストは正しい形式ですが、意味的なエラーがあります（バリデーションエラーなど）。" },
  { code: 423, name: "Locked", desc: "リソースがロックされています（WebDAV）。" },
  { code: 424, name: "Failed Dependency", desc: "以前のリクエストが失敗したため、このリクエストも失敗しました（WebDAV）。" },
  { code: 425, name: "Too Early", desc: "早期データでリクエストを処理することをサーバーが拒否。" },
  { code: 426, name: "Upgrade Required", desc: "クライアントはプロトコルをアップグレードする必要があります（TLSなど）。" },
  { code: 428, name: "Precondition Required", desc: "リクエストに条件付きヘッダーが必要です。" },
  { code: 429, name: "Too Many Requests", desc: "レートリミット超過。一定時間内のリクエスト数が多すぎます。" },
  { code: 431, name: "Request Header Fields Too Large", desc: "リクエストヘッダーフィールドが大きすぎます。" },
  { code: 451, name: "Unavailable For Legal Reasons", desc: "法的な理由によりリソースにアクセスできません（政府による検閲など）。" },
  // 5xx
  { code: 500, name: "Internal Server Error", desc: "サーバー内部エラー。サーバー側で予期しない問題が発生しました。" },
  { code: 501, name: "Not Implemented", desc: "サーバーがリクエストメソッドをサポートしていません。" },
  { code: 502, name: "Bad Gateway", desc: "ゲートウェイ/プロキシが不正なレスポンスを受信しました。" },
  { code: 503, name: "Service Unavailable", desc: "サービスが一時的に利用不可。メンテナンスや過負荷の場合に使用。" },
  { code: 504, name: "Gateway Timeout", desc: "ゲートウェイ/プロキシがタイムアウトしました。" },
  { code: 505, name: "HTTP Version Not Supported", desc: "サーバーがリクエストのHTTPバージョンをサポートしていません。" },
  { code: 506, name: "Variant Also Negotiates", desc: "コンテントネゴシエーションの設定が循環参照しています。" },
  { code: 507, name: "Insufficient Storage", desc: "サーバーの空き容量不足でリクエストを完了できません（WebDAV）。" },
  { code: 508, name: "Loop Detected", desc: "無限ループを検出しました（WebDAV）。" },
  { code: 510, name: "Not Extended", desc: "さらなる拡張が必要です。" },
  { code: 511, name: "Network Authentication Required", desc: "ネットワークアクセスのための認証が必要です（公衆Wi-Fiのログインページなど）。" },
];

const CATEGORY_COLORS: Record<string, string> = {
  "1": "bg-blue-100 text-blue-700",
  "2": "bg-green-100 text-green-700",
  "3": "bg-yellow-100 text-yellow-700",
  "4": "bg-orange-100 text-orange-700",
  "5": "bg-red-100 text-red-700",
};

const CATEGORY_LABELS: Record<string, string> = {
  "1": "1xx 情報",
  "2": "2xx 成功",
  "3": "3xx リダイレクト",
  "4": "4xx クライアントエラー",
  "5": "5xx サーバーエラー",
};

export default function HttpStatusCodesPage() {
  const [query, setQuery] = useState("");

  const filtered = STATUS_CODES.filter((s) => {
    const q = query.toLowerCase();
    return (
      String(s.code).includes(q) ||
      s.name.toLowerCase().includes(q) ||
      s.desc.includes(q)
    );
  });

  const grouped = filtered.reduce<Record<string, typeof STATUS_CODES>>((acc, s) => {
    const key = String(s.code)[0];
    if (!acc[key]) acc[key] = [];
    acc[key].push(s);
    return acc;
  }, {});

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>HTTPステータスコード一覧</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">HTTPステータスコード一覧</h1>
      <p className="text-muted mb-8">
        HTTPステータスコードの意味を日本語で解説します。コード番号・名前・説明でリアルタイム検索できます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="コード番号・名前・説明で検索（例: 404, redirect, not found）"
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background"
        />
        <p className="text-xs text-muted mt-2">{filtered.length} 件表示中</p>
      </div>

      {Object.entries(grouped).sort().map(([key, codes]) => (
        <div key={key} className="mb-8">
          <h2 className="text-base font-bold mb-3 text-muted">{CATEGORY_LABELS[key]}</h2>
          <div className="space-y-2">
            {codes.map((s) => (
              <div key={s.code} className="bg-card-bg border border-card-border rounded-xl p-4 flex gap-4">
                <span className={`text-sm font-bold font-mono px-2 py-1 rounded shrink-0 h-fit ${CATEGORY_COLORS[String(s.code)[0]]}`}>
                  {s.code}
                </span>
                <div>
                  <p className="text-sm font-semibold">{s.name}</p>
                  <p className="text-sm text-muted mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <p className="text-muted text-sm text-center py-12">該当するステータスコードが見つかりませんでした。</p>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">HTTPステータスコードとは</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>HTTPステータスコードは、サーバーがクライアントのリクエストに応答する際に返す3桁の数字コードです。</p>
          <p>1xx（情報）、2xx（成功）、3xx（リダイレクト）、4xx（クライアントエラー）、5xx（サーバーエラー）の5種類に分類されます。</p>
          <p>検索ボックスにコード番号や英語名、日本語の説明を入力してリアルタイムで絞り込めます。</p>
        </div>
      </section>


      <RelatedTools currentSlug="http-status-codes" category="開発ツール" />
    </div>
  );
}
