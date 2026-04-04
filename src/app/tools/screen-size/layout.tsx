import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "画面サイズ確認ツール - 画面・ウィンドウのサイズを確認",
  description:
    "現在の画面サイズ・ウィンドウサイズ・ビューポートサイズ・デバイスピクセル比・画面向きをリアルタイムで確認できる無料ツール。",
  keywords: ["画面サイズ確認", "ウィンドウサイズ", "ビューポート", "デバイスピクセル比", "開発ツール", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
