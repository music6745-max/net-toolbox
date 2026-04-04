import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flexboxジェネレーター - CSS Flexboxを視覚的に設定",
  description:
    "CSS Flexboxのプロパティをビジュアルに操作してCSSコードを自動生成する無料ツール。レイアウト作成に便利。",
  keywords: ["Flexbox", "CSS", "ジェネレーター", "レイアウト", "フレックスボックス", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
