import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "電気料金比較ツール - 無料オンライン電気料金比較",
  description: "消費電力と使用時間から電気代を計算。複数家電の比較も可能。無料・登録不要でブラウザ上で完結。",
  keywords: ["電気代","電気料金","消費電力"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
