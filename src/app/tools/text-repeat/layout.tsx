import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "テキスト繰り返しツール - テキストをN回リピート",
  description:
    "テキストを指定回数繰り返して生成する無料オンラインツール。テストデータ作成やダミーテキスト生成に便利。",
  keywords: ["テキスト繰り返し", "テキストリピート", "コピー", "ダミーテキスト", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/text-repeat",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
