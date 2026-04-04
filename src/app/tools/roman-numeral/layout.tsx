import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ローマ数字変換ツール - アラビア数字⇔ローマ数字",
  description: "アラビア数字をローマ数字に変換、またはローマ数字をアラビア数字に変換するオンラインツール。無料・登録不要。",
  keywords: ["ローマ数字","変換","数字"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
