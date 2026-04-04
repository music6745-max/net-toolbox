import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TSV⇔CSV変換ツール - タブ区切り⇔カンマ区切り変換",
  description:
    "TSV（タブ区切り）とCSV（カンマ区切り）を相互変換できる無料オンラインツール。スプレッドシートのデータ変換に便利。",
  keywords: ["TSV変換", "CSV変換", "TSV CSV", "タブ区切り", "カンマ区切り", "データ変換", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
