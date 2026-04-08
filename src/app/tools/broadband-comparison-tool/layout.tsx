import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "光回線×スマホセット割シミュレーター - 通信費まとめて節約",
  description: "光回線とスマホキャリアのセット割で通信費がいくら安くなるか試算。ドコモ光・auひかり・ソフトバンク光・楽天ひかりに対応。",
  keywords: ["光回線", "スマホ", "セット割", "シミュレーター", "通信費"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/broadband-comparison-tool",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
