import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "パスワード一括生成ツール - 複数パスワードを一度に生成",
  description: "文字種や長さを設定して、安全なパスワードを最大50個まで一括生成します。",
};

export default function PasswordListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
