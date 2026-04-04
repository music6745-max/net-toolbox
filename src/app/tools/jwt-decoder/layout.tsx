import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JWTデコーダーツール - JWTトークンを解析",
  description:
    "JWTトークン（JSON Web Token）のヘッダー・ペイロードをBase64デコードして内容を確認できる無料ツール。有効期限や発行者の確認に便利。署名検証は行いません。",
  keywords: ["JWT", "JWTデコード", "JSON Web Token", "Base64", "認証", "トークン解析", "開発ツール"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
