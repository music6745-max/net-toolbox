"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function ScreenResolutionPage() {
  const [info, setInfo] = useState<Record<string, string>>({});

  useEffect(() => {
    const update = () => {
      setInfo({
        "画面の幅": `${window.screen.width}px`,
        "画面の高さ": `${window.screen.height}px`,
        "ブラウザ幅": `${window.innerWidth}px`,
        "ブラウザ高さ": `${window.innerHeight}px`,
        "デバイスピクセル比": `${window.devicePixelRatio}x`,
        "物理解像度 (幅)": `${Math.round(window.screen.width * window.devicePixelRatio)}px`,
        "物理解像度 (高さ)": `${Math.round(window.screen.height * window.devicePixelRatio)}px`,
        "色深度": `${window.screen.colorDepth}bit`,
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>画面解像度確認</span></nav>
      <h1 className="text-2xl font-bold mb-2">画面解像度確認ツール</h1>
      <p className="text-muted mb-8">現在のブラウザ・画面の解像度やピクセル比をリアルタイム表示。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Object.entries(info).map(([label, value]) => (
            <div key={label} className="bg-background rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-primary">{value}</div>
              <div className="text-xs text-muted mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">画面解像度確認の使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>ページを開くだけで現在のデバイスの画面情報がリアルタイムで表示されます。</p><p>レスポンシブデザインの確認やデバッグにご活用ください。ブラウザのサイズを変更すると値もリアルタイムで更新されます。</p></div></section>
      <AffiliateSection slug="screen-resolution" category="開発ツール" />
      <RelatedTools currentSlug="screen-resolution" category="開発ツール" />
    </div>
  );
}
