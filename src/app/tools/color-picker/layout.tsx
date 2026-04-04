import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "カラーピッカーツール - 直感的に色を選択",
  description:
    "HSLスライダーで直感的に色を選択し、HEX・RGB・HSLの各形式でコピーできる無料カラーピッカーツール。",
  keywords: ["カラーピッカー", "色", "HEX", "RGB", "HSL", "カラーコード", "色選択"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
