import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "料理計量変換ツール - 大さじ・小さじ・カップ・ml・gを変換",
  description: "大さじ・小さじ・カップ・ml・gの計量単位を相互変換できるオンラインツール。料理やお菓子作りに便利。無料。",
  keywords: ["料理","計量","大さじ","小さじ","カップ","変換"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
