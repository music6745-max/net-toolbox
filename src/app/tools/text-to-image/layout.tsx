import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "テキスト画像生成ツール - テキストを画像化",
  description:
    "テキストをPNG画像に変換する無料オンラインツール。フォント・色・サイズ・背景色を自由に指定して画像を生成・ダウンロード。",
  keywords: ["テキスト", "画像生成", "テキスト画像", "PNG", "文字画像", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
