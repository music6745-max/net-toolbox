import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON→CSV変換ツール - 無料オンラインツール",
  description: "JSON配列をCSV形式に変換します。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/json-to-csv",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
