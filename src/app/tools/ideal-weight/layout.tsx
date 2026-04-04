import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "適正体重計算ツール - 身長から適正体重を計算",
  description:
    "身長を入力して適正体重をBMI22・ブローカ式・デバイン式の3つの計算式で算出。健康管理の目安にご利用ください。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["適正体重", "理想体重", "BMI22", "ブローカ式", "デバイン式", "健康", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
