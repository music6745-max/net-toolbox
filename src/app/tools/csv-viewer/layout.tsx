import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSVビューアーツール - CSVデータを表形式で表示",
  description:
    "CSVデータをブラウザ上で表形式に整形して表示する無料オンラインツール。列のソートにも対応。",
  keywords: ["CSVビューアー", "CSV表示", "CSV変換", "CSV", "表形式", "データ確認", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
