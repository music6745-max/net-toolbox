import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ライセンス生成ツール - オープンソースライセンスを作成",
  description:
    "MIT・Apache 2.0・GPL 3.0・BSDなどのオープンソースライセンスを年号と著者名を入力するだけで生成できる無料ツール。",
  keywords: ["ライセンス", "MIT", "Apache", "GPL", "BSD", "オープンソース", "LICENSE", "著作権"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
