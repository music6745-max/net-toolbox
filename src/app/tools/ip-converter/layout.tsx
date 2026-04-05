import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPアドレス変換ツール - IPを2進数・16進数・整数に変換",
  description:
    "IPv4アドレスを10進数（ドット区切り）・2進数・16進数・整数の4つの形式に相互変換できる無料ツール。ネットワーク学習・設定に役立ちます。",
  keywords: ["IPアドレス", "IP変換", "2進数", "16進数", "IPv4", "ネットワーク", "変換ツール"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/ip-converter",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
