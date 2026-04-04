import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー生成ツール - 個人情報保護方針を作成",
  description:
    "サイト名・URL・連絡先を入力するだけで日本語のプライバシーポリシー（個人情報保護方針）テンプレートを自動生成する無料ツール。",
  keywords: ["プライバシーポリシー", "個人情報保護方針", "生成", "テンプレート", "ウェブサイト", "GDPR"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
