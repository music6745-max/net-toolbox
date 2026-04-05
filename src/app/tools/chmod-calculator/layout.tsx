import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "chmod計算ツール - 無料オンラインchmod計算",
  description: "Linuxのファイルパーミッションを数値⇔記号表記で変換。chmodコマンド生成。無料・登録不要でブラウザ上で完結。",
  keywords: ["chmod","パーミッション","Linux"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/chmod-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
