import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "消費カロリー計算ツール - 無料オンラインツール",
  description: "運動の種類と時間から消費カロリーを計算。ダイエット・健康管理に。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/calorie-burn",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
