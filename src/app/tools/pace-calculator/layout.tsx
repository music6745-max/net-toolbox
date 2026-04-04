import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ランニングペース計算ツール - 無料オンラインランニングペース計算",
  description: "距離・タイムからペース(分/km)を計算。マラソン・ジョギングの記録管理に。無料・登録不要でブラウザ上で完結。",
  keywords: ["ランニング","ペース","マラソン"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
