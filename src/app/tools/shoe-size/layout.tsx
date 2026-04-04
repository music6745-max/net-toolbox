import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "靴サイズ変換ツール - 無料オンライン靴サイズ変換",
  description: "日本・US・UK・EUの靴サイズを相互変換。メンズ・レディース対応。無料・登録不要でブラウザ上で完結。",
  keywords: ["靴サイズ","変換","US","UK","EU"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
