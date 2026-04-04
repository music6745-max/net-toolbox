import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "行番号付与ツール - テキストに行番号を追加",
  description:
    "テキストの各行に行番号を付与する無料オンラインツール。開始番号や区切り文字を自由に設定できます。ブラウザ内で処理するため安全です。",
  keywords: ["行番号", "テキスト", "番号付与", "行", "変換", "オンライン", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
