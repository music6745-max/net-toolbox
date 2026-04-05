import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSONパス検索ツール - JSONのパスを確認",
  description:
    "JSONを入力してツリー表示し、値をクリックするとドット記法のJSONパスを確認できる無料ツール。APIレスポンスの解析やデータ構造の把握に便利です。",
  keywords: ["JSONパス", "JSON path", "JSON ツリー", "JSON 解析", "JSONビューア", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/json-path-finder",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
