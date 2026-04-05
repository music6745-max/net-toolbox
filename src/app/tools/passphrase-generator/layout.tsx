import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "パスフレーズ生成ツール - 覚えやすい安全なパスワードを生成",
  description:
    "日本語の単語を組み合わせた覚えやすいパスフレーズを生成する無料オンラインツール。単語数や区切り文字も自由に設定可能。",
  keywords: ["パスフレーズ", "パスワード生成", "覚えやすい", "セキュリティ", "日本語", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/passphrase-generator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
