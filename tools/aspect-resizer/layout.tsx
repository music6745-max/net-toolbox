import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アスペクト比リサイズ計算 - 目標比率のサイズを計算",
  description: "元の幅と高さ、目標のアスペクト比を入力して、クロップとレターボックスの新しい寸法を計算します。",
};

export default function AspectResizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
