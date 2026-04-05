import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "インデント変換ツール - タブ⇔スペース変換",
  description:
    "テキストのインデントをタブとスペースの間で変換する無料オンラインツール。スペース数も自由に設定できます。",
  keywords: ["インデント", "タブ", "スペース", "変換", "コード", "整形", "オンライン", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/indent-converter",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
