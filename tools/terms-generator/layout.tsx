import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約生成ツール - 利用規約テンプレートを作成",
  description: "サイト名を入力するだけで、シンプルな利用規約テンプレートを自動生成します。",
};

export default function TermsGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
