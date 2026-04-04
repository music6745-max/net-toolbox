"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

interface InfoItem {
  label: string;
  value: string;
}

export default function IpInfoPage() {
  const [ip, setIp] = useState<string>("取得中...");
  const [ipError, setIpError] = useState(false);
  const [clientInfo, setClientInfo] = useState<InfoItem[]>([]);

  useEffect(() => {
    // Fetch public IP
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch(() => {
        setIp("取得できませんでした");
        setIpError(true);
      });

    // Collect browser/device info
    const info: InfoItem[] = [
      {
        label: "ユーザーエージェント",
        value: navigator.userAgent,
      },
      {
        label: "画面解像度",
        value: `${window.screen.width} × ${window.screen.height} px`,
      },
      {
        label: "ビューポートサイズ",
        value: `${window.innerWidth} × ${window.innerHeight} px`,
      },
      {
        label: "言語設定",
        value: navigator.language || "不明",
      },
      {
        label: "タイムゾーン",
        value: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      {
        label: "プラットフォーム",
        value: navigator.platform || "不明",
      },
      {
        label: "Cookie有効",
        value: navigator.cookieEnabled ? "はい" : "いいえ",
      },
    ];
    setClientInfo(info);
  }, []);

  const [copied, setCopied] = useState(false);

  const copyIp = async () => {
    if (!ip || ipError) return;
    await navigator.clipboard.writeText(ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>IPアドレス確認</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">IPアドレス確認ツール</h1>
      <p className="text-muted mb-8">
        現在のパブリックIPアドレスとブラウザ・端末情報を表示します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <h2 className="text-sm font-semibold mb-3 text-muted uppercase tracking-wide">パブリックIPアドレス</h2>
        <div className="flex items-center justify-between gap-4 bg-background rounded-lg px-4 py-3">
          <span className="font-mono text-lg font-bold text-primary">{ip}</span>
          {!ipError && (
            <button
              onClick={copyIp}
              className="shrink-0 text-sm text-primary hover:opacity-80 font-medium"
            >
              {copied ? "コピー済み" : "コピー"}
            </button>
          )}
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <h2 className="text-sm font-semibold mb-4 text-muted uppercase tracking-wide">ブラウザ・端末情報</h2>
        <div className="space-y-3">
          {clientInfo.map((item) => (
            <div key={item.label} className="bg-background rounded-lg px-4 py-3">
              <div className="text-xs text-muted mb-1">{item.label}</div>
              <div className="text-sm break-all">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">IPアドレス確認ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>ページを開くと自動的にパブリックIPアドレスと端末情報が表示されます。</p>
          <p>パブリックIPアドレスの取得には外部API（api.ipify.org）を使用しています。</p>
          <p>ブラウザ情報・画面解像度・言語・タイムゾーンはすべてブラウザ内で取得しており、外部に送信されません。</p>
          <p>VPNや代理サーバー使用時は、実際の接続IPアドレスが表示されます。</p>
        </div>
      </section>


      <AffiliateSection slug="ip-info" category="開発ツール" />
      <RelatedTools currentSlug="ip-info" category="開発ツール" />
    </div>
  );
}
