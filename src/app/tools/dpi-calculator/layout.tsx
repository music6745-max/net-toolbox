import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DPI計算ツール - 無料オンラインDPI計算",
  description: "解像度・画面サイズからDPI(PPI)を計算。ディスプレイの精細さを確認。無料・登録不要でブラウザ上で完結。",
  keywords: ["DPI","PPI","解像度"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
