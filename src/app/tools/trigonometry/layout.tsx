import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "三角関数計算ツール - sin/cos/tanを計算",
  description:
    "角度（度数法または弧度法）を入力してsin・cos・tan・cot・sec・cscを計算します。",
  keywords: ["三角関数", "sin", "cos", "tan", "cot", "sec", "csc", "角度", "数学"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
