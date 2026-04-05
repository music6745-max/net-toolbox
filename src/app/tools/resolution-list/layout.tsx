import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "画面解像度一覧ツール - 無料オンライン画面解像度一覧",
  description: "主要なディスプレイ・デバイスの画面解像度を一覧表示。レスポンシブ設計に。無料・登録不要でブラウザ上で完結。",
  keywords: ["解像度","画面サイズ","レスポンシブ"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/resolution-list",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
