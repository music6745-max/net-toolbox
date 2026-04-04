import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JWT生成ツール - 無料オンラインJWT生成",
  description: "ヘッダー・ペイロードからJWTトークンを生成。HS256署名に対応。無料・登録不要でブラウザ上で完結。",
  keywords: ["JWT","トークン","認証"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
