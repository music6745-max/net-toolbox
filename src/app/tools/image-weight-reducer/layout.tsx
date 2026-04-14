import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "画像軽量化チェッカー - 画像の最適サイズを診断",
  description:
    "画像のファイルサイズと解像度から最適な軽量化設定を診断。用途別の推奨サイズ・形式をチェックできる無料ツール。",
  keywords: ["画像軽量化", "画像圧縮", "ファイルサイズ削減", "WebP", "AVIF", "生成画像 軽量化"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/image-weight-reducer",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
