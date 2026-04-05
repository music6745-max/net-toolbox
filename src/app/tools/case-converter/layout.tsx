import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "大文字小文字変換ツール - テキストのケース変換",
  description:
    "テキストをUPPERCASE・lowercase・Title Case・camelCase・snake_case・kebab-caseに変換。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["大文字変換", "小文字変換", "camelCase", "snake_case", "ケース変換", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/case-converter",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
