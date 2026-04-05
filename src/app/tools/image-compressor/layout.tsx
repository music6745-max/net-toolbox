import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "画像圧縮ツール - ブラウザで画像を軽量化",
  description:
    "画像ファイルをブラウザ内で圧縮・軽量化できる無料オンラインツール。アップロード不要でプライバシーも安心。JPEG・PNG・WebPに対応。",
  keywords: ["画像圧縮", "画像軽量化", "画像リサイズ", "ファイルサイズ", "JPEG", "PNG", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/image-compressor",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
