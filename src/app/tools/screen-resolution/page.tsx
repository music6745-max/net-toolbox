"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";
import { ToolFAQSection } from "@/components/ToolFAQSection";

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
      <ToolFAQSection
        toolName="画面解像度確認"
        howTo={[
          "ページを開くだけで現在のデバイスの画面情報が表示",
          "ブラウザを縮小・拡大するとリアルタイムに値が更新",
          "レスポンシブデザインのデバッグに活用",
          "デバイスピクセル比（Retina：2x以上）の確認にも",
        ]}
        faqs={[
          {
            question: "画面の幅とブラウザ幅の違いは？",
            answer: "画面の幅：モニター全体の物理的解像度（ブラウザの外側も含む）。ブラウザ幅：実際にコンテンツが表示される領域、タスクバー・メニューバーを除いた内側。レスポンシブデザインの判定はブラウザ幅（window.innerWidth）を使用、CSS @media queryはこの値を参照します。",
          },
          {
            question: "デバイスピクセル比とは？",
            answer: "論理ピクセル1pxあたりの物理ピクセル数。通常ディスプレイは1x（等倍）、Retina・4K高精細ディスプレイは2x・3x。1920×1080ディスプレイでピクセル比2xなら物理解像度3840×2160の高解像度相当。Webデザインでは @2x・@3x画像を準備して対応します。",
          },
          {
            question: "主要デバイスの解像度は？",
            answer: "iPhone 15 Pro Max：430×932 (CSS)、1290×2796（物理）、3x。iPad Pro：1024×1366（CSS）、2048×2732（物理）、2x。MacBook Pro：1440×900または1680×1050（Retina）。Windows PC 1920×1080（FHD）が最も一般的、4Kディスプレイは3840×2160で2xスケーリング設定が標準です。",
          },
          {
            question: "レスポンシブデザインの breakpoint は？",
            answer: "Tailwind CSS標準：sm 640px・md 768px・lg 1024px・xl 1280px・2xl 1536px。Bootstrap 5：sm 576px・md 768px・lg 992px・xl 1200px・xxl 1400px。モバイルファースト設計では、最初は320pxスマホから考慮、徐々に幅を広げるのが王道のレスポンシブ開発手法です。",
          },
        ]}
      />
      <AffiliateSection slug="screen-resolution" category="開発ツール" />
      <RelatedTools currentSlug="screen-resolution" category="開発ツール" />
    </div>
  );
}
