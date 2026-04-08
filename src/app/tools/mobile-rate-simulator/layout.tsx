import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "携帯料金シミュレーター - 大手キャリア・MVNO比較",
  description: "ドコモ・au・ソフトバンク・楽天モバイル・主要MVNOの料金をデータ容量別に比較試算。月額・年間コストがわかる無料ツール。",
  keywords: ["携帯料金", "格安SIM", "MVNO", "シミュレーター", "キャリア比較"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/mobile-rate-simulator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
