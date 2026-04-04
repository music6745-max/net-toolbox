import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie確認ツール - ブラウザのCookieを確認",
  description:
    "現在のページのブラウザCookieを一覧表示・解析する無料ツール。document.cookieを読み取り、キーと値をテーブル形式で確認できます。",
  keywords: ["Cookie確認", "ブラウザCookie", "document.cookie", "Cookie解析", "開発ツール", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
