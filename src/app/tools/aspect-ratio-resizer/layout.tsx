import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "画像リサイズ計算ツール - 無料オンライン画像リサイズ計算",
  description: "アスペクト比を維持したまま、幅または高さを指定してリサイズ後のサイズを計算。無料・登録不要でブラウザ上で完結。",
  keywords: ["リサイズ","アスペクト比","画像"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
