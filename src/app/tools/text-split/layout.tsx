import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "テキスト分割ツール - 区切り文字でテキストを分割",
  description:
    "カンマ・タブ・改行・任意の文字でテキストを分割してリスト表示する無料オンラインツール。",
  keywords: ["テキスト分割", "文字列分割", "区切り文字", "split", "テキスト処理", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/text-split",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
