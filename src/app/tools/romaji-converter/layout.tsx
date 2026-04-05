import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ローマ字変換ツール - 無料オンラインローマ字変換",
  description: "ひらがな・カタカナをローマ字に変換。ヘボン式・訓令式に対応。無料・登録不要でブラウザ上で完結。",
  keywords: ["ローマ字","ひらがな","変換"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/romaji-converter",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
