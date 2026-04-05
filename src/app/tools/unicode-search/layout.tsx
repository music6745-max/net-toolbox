import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unicode文字検索ツール - Unicode文字を検索・コピー",
  description:
    "Unicode文字を名前やコードポイントで検索してコピーできる無料オンラインツール。記号・矢印・数学記号などを簡単に探せます。",
  keywords: ["Unicode", "文字検索", "記号", "矢印", "コードポイント", "コピー", "オンライン", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/unicode-search",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
