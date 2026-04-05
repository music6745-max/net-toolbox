import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LocalStorage確認ツール - ブラウザのLocalStorageを確認",
  description:
    "ブラウザのlocalStorageに保存されているデータを一覧表示・追加・編集・削除できる無料ツール。開発・デバッグ作業に最適。",
  keywords: ["LocalStorage", "ブラウザストレージ", "LocalStorage確認", "開発ツール", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/localstorage-viewer",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
