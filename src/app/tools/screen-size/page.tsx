"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface SizeInfo {
  screenWidth: number;
  screenHeight: number;
  windowWidth: number;
  windowHeight: number;
  innerWidth: number;
  innerHeight: number;
  devicePixelRatio: number;
  orientation: string;
  colorDepth: number;
  scrollbarWidth: number;
}

function getInfo(): SizeInfo {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  return {
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    windowWidth: window.outerWidth,
    windowHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio,
    orientation: window.screen.orientation?.type ?? (window.innerWidth > window.innerHeight ? "landscape" : "portrait"),
    colorDepth: window.screen.colorDepth,
    scrollbarWidth,
  };
}

export default function ScreenSizePage() {
  const [info, setInfo] = useState<SizeInfo | null>(null);
  const [updated, setUpdated] = useState(0);

  useEffect(() => {
    const update = () => {
      setInfo(getInfo());
      setUpdated(Date.now());
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  const Row = ({ label, value, note }: { label: string; value: string | number; note?: string }) => (
    <tr className="border-b border-card-border last:border-0">
      <td className="py-3 px-4 text-sm text-muted w-48">{label}</td>
      <td className="py-3 px-4 text-sm font-mono font-semibold">{value}{note && <span className="text-xs text-muted font-normal ml-2">{note}</span>}</td>
    </tr>
  );

  const isPortrait = info ? info.innerHeight > info.innerWidth : false;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>画面サイズ確認</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">画面サイズ確認ツール</h1>
      <p className="text-muted mb-8">
        現在の画面・ウィンドウ・ビューポートのサイズをリアルタイムで表示します。ウィンドウのリサイズで自動更新されます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        {info ? (
          <>
            <div className="flex items-center gap-3">
              <div className={`flex items-center justify-center border-2 border-primary rounded-lg bg-primary/10 ${isPortrait ? "w-10 h-14" : "w-14 h-10"}`}>
                <span className="text-xs text-primary font-bold">{isPortrait ? "P" : "L"}</span>
              </div>
              <div>
                <p className="text-lg font-bold">{info.innerWidth} × {info.innerHeight} px</p>
                <p className="text-sm text-muted">ビューポートサイズ（ウィンドウリサイズで自動更新）</p>
              </div>
            </div>

            <div className="bg-background rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  <Row label="画面の幅 (screen.width)" value={`${info.screenWidth} px`} />
                  <Row label="画面の高さ (screen.height)" value={`${info.screenHeight} px`} />
                  <Row label="ウィンドウ幅 (outerWidth)" value={`${info.windowWidth} px`} note="ブラウザUI含む" />
                  <Row label="ウィンドウ高さ (outerHeight)" value={`${info.windowHeight} px`} note="ブラウザUI含む" />
                  <Row label="ビューポート幅 (innerWidth)" value={`${info.innerWidth} px`} />
                  <Row label="ビューポート高さ (innerHeight)" value={`${info.innerHeight} px`} />
                  <Row label="デバイスピクセル比" value={`${info.devicePixelRatio}x`} note={info.devicePixelRatio >= 2 ? "Retina / High-DPI" : "標準"} />
                  <Row label="画面の向き" value={info.orientation} />
                  <Row label="色深度 (colorDepth)" value={`${info.colorDepth} bit`} />
                  <Row label="スクロールバー幅" value={`${info.scrollbarWidth} px`} />
                </tbody>
              </table>
            </div>

            <p className="text-xs text-muted">最終更新: {new Date(updated).toLocaleTimeString("ja-JP")}</p>

            <div className="border-t border-card-border pt-4">
              <p className="text-sm font-medium mb-2">物理解像度（推定）</p>
              <p className="text-sm text-muted">
                {Math.round(info.screenWidth * info.devicePixelRatio)} × {Math.round(info.screenHeight * info.devicePixelRatio)} px
                （デバイスピクセル比 {info.devicePixelRatio}x を適用）
              </p>
            </div>
          </>
        ) : (
          <div className="text-center text-muted py-8 text-sm">読み込み中...</div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. ページを開くと自動で現在の画面・ウィンドウサイズを取得して表示します。</p>
          <p>2. ブラウザのウィンドウをリサイズすると、値がリアルタイムで更新されます。</p>
          <p>3. スマートフォン・タブレットで開くと向きや解像度も確認できます。</p>
          <p>「ビューポート幅/高さ」がCSSのメディアクエリで参照されるサイズです。</p>
        </div>
      </section>
    </div>
  );
}
