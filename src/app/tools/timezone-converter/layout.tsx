import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "タイムゾーン変換ツール - 世界の時刻を即変換",
  description: "世界各地のタイムゾーン間で時刻を変換できるオンラインツール。日本時間(JST)からの変換に便利。無料・登録不要。",
  keywords: ["タイムゾーン","時差","変換","JST","UTC"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
