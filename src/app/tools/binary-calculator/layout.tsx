import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2進数計算機ツール - 無料オンライン2進数計算機",
  description: "2進数同士の加算・減算・乗算・論理演算（AND/OR/XOR）を実行。無料・登録不要でブラウザ上で完結。",
  keywords: ["2進数","計算","論理演算"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
