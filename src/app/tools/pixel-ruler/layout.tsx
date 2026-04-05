import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ピクセル定規ツール - 無料オンラインツール",
  description: "キャンバス上でドラッグして距離をピクセル単位で測定します。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/pixel-ruler",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
