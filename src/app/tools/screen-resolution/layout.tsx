import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "画面解像度確認ツール - 無料オンラインツール",
  description: "現在のブラウザ・画面の解像度やピクセル比をリアルタイム表示。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/screen-resolution",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
