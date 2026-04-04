import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "画像切り抜きツール - ブラウザで簡単トリミング",
  description:
    "ブラウザ内で画像を切り抜き・トリミングしてダウンロードできる無料オンラインツール。サーバー送信不要で安心。",
  keywords: ["画像切り抜き", "トリミング", "画像編集", "クロップ", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
