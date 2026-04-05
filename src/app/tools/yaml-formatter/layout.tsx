import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YAML整形 - 無料オンラインツール",
  description: "YAMLテキストを整形・検証します。インデントの統一や基本的な構文チェックが可能です。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/yaml-formatter",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
