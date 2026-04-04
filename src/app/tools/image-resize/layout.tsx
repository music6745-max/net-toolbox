import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "画像リサイズツール - 画像のサイズを変更",
  description:
    "画像をアップロードして幅・高さを指定するだけでリサイズ。アスペクト比の維持も対応。PNG・JPEG形式でダウンロード可能。データはブラウザ内のみで処理されます。",
  keywords: ["画像リサイズ", "画像サイズ変更", "画像圧縮", "PNG", "JPEG", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
