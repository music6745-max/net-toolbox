import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "スクリーンタイム健康度診断 - デジタルデトックスの目安",
  description: "スマホ・PC・TVの1日使用時間から健康影響度をスコア化。眼精疲労・睡眠・姿勢への影響をチェックしデジタルデトックスの目安に。無料・登録不要。",
  keywords: ["スクリーンタイム", "デジタルデトックス", "健康", "診断", "スマホ依存"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/screen-time-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
