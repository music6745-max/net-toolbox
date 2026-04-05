import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "パンくずリスト生成ツール - パンくずのHTML/JSON-LDを作成",
  description:
    "パンくずリストのHTML（aria対応）とJSON-LD構造化データを同時に生成できる無料ツール。SEO対策のリッチリザルトにも対応。",
  keywords: ["パンくずリスト", "breadcrumb", "HTML生成", "JSON-LD", "SEO", "構造化データ"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/breadcrumb-generator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
