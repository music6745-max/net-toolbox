import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "二次方程式の解ツール - 無料オンライン二次方程式の解",
  description: "ax²+bx+c=0の係数を入力して解を求める。判別式・グラフも表示。無料・登録不要でブラウザ上で完結。",
  keywords: ["二次方程式","解","判別式"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
