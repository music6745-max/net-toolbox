"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function IpAddressPage() {
  const [ip, setIp] = useState<string>("");
  const [userAgent, setUserAgent] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [screenSize, setScreenSize] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setUserAgent(navigator.userAgent);
    setPlatform(navigator.platform);
    setLanguage(navigator.language);
    setScreenSize(`${window.screen.width} x ${window.screen.height}`);

    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        setIp(data.ip);
        setLoading(false);
      })
      .catch(() => {
        setError("IPアドレスの取得に失敗しました");
        setLoading(false);
      });
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const items = [
    { label: "IPアドレス", value: ip || (loading ? "取得中..." : error) },
    { label: "ユーザーエージェント", value: userAgent },
    { label: "プラットフォーム", value: platform },
    { label: "言語", value: language },
    { label: "画面解像度", value: screenSize },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>IPアドレス確認</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">IPアドレス確認ツール</h1>
      <p className="text-muted mb-8">
        現在のグローバルIPアドレスとブラウザ・端末情報を表示します。ネットワークの確認やトラブルシューティングにご活用ください。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="bg-background rounded-lg p-4 flex items-center justify-between gap-4"
            >
              <div className="min-w-0">
                <div className="text-xs text-muted mb-1">{item.label}</div>
                <div className="text-sm font-mono break-all">
                  {item.value || "-"}
                </div>
              </div>
              {item.value && (
                <button
                  onClick={() => copyToClipboard(item.value)}
                  className="shrink-0 text-xs text-primary hover:text-primary/80 transition-colors"
                >
                  コピー
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">IPアドレス確認ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>ページを開くと自動的にグローバルIPアドレスとブラウザ情報を取得・表示します。</p>
          <p>各項目の「コピー」ボタンでクリップボードにコピーできます。</p>
          <p>VPN接続の確認やネットワーク設定の診断にご利用ください。</p>
        </div>
      </section>

      <AffiliateSection slug="ip-address" category="開発ツール" />
      <RelatedTools currentSlug="ip-address" category="開発ツール" />
    </div>
  );
}
