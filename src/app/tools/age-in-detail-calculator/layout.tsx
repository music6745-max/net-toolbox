import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "年齢詳細計算ツール - 西暦・和暦・干支・星座・誕生日まで日数",
  description:
    "生年月日から満年齢・数え年・和暦・干支・星座・次の誕生日までの日数までまとめて算出。総生存日数・週数も計算します。",
  keywords: ["年齢計算", "和暦", "干支", "星座", "誕生日", "数え年"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/age-in-detail-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
