import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter Cardプレビューツール - X/Twitterでの表示を確認",
  description:
    "Twitter Card（X Card）のタイトル・説明・画像URLを入力して、X/Twitterでシェアされた際のプレビューを確認できる無料ツール。",
  keywords: ["Twitter Card", "Xカード", "OGP", "SNSシェア", "Twitter", "X", "メタタグ", "プレビュー"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
