import type { Metadata } from "next";
export const metadata: Metadata = { title: "CSV⇔JSON変換ツール - CSVとJSONを相互変換", description: "CSVデータをJSON形式に、JSONデータをCSV形式に変換する無料オンラインツール。データ変換に便利。", keywords: ["CSV", "JSON", "変換", "CSV変換", "JSON変換", "データ変換", "無料"], alternates: { canonical: "https://net-toolbox.jp/tools/csv-json" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
