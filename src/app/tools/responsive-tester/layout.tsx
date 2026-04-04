import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "レスポンシブテスターツール - 各画面サイズでの表示を確認",
  description:
    "URLを入力してモバイル（375px）・タブレット（768px）・デスクトップ（1280px）の各画面サイズでのWebサイト表示をiframeで確認できる無料ツール。",
  keywords: ["レスポンシブテスト", "画面サイズ確認", "モバイル確認", "Webデザイン", "開発ツール", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
