import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WiFi QRコード生成ツール - 無料オンラインWiFi QRコード生成",
  description: "WiFiのSSIDとパスワードからQRコードを生成。スマホで読み取って簡単接続。無料・登録不要でブラウザ上で完結。",
  keywords: ["WiFi","QRコード","パスワード"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
