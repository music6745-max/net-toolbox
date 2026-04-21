"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [length, setLength] = useState(16);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const chars = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%&*";
    let result = "";
    const arr = new Uint32Array(length);
    crypto.getRandomValues(arr);
    for (let i = 0; i < length; i++) result += chars[arr[i] % chars.length];
    setPassword(result);
    setCopied(false);
  };

  const copy = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>WiFiパスワード生成</span></nav>
      <h1 className="text-2xl font-bold mb-2">WiFi用 安全パスワード生成ツール</h1>
      <p className="text-muted mb-8">WiFiルーターに設定する安全なパスワードを生成。紛らわしい文字(0/O/l/1)を除外。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">文字数: {length}</label>
          <input type="range" min="8" max="32" value={length} onChange={e => setLength(parseInt(e.target.value))} className="w-full" />
          <div className="flex justify-between text-xs text-muted"><span>8</span><span>32</span></div>
        </div>
        <button onClick={generate} className="w-full py-3 bg-primary text-white rounded-lg font-bold text-sm">パスワードを生成</button>
        {password && (
          <div className="bg-background rounded-lg p-4">
            <div className="font-mono text-lg font-bold tracking-wider text-center break-all">{password}</div>
            <button onClick={copy} className="mt-3 w-full py-2 bg-card-bg border border-card-border rounded-lg text-sm">{copied ? "コピーしました！" : "クリップボードにコピー"}</button>
          </div>
        )}
        <div className="text-xs text-muted space-y-1">
          <p>WiFiパスワードの推奨ルール:</p>
          <p>- 最低12文字以上（16文字以上推奨）</p>
          <p>- 英大文字・小文字・数字・記号を混合</p>
          <p>- 辞書に載っている単語を使わない</p>
        </div>
      </div>
      <ToolFAQSection
        toolName="WiFiパスワード生成"
        howTo={[
          "文字数（8〜32）をスライダーで設定",
          "「パスワードを生成」で強固なパスワード作成",
          "クリップボードにコピーしてルーターに設定",
          "紛らわしい文字（0/O/l/1）除外で入力ミス防止",
        ]}
        faqs={[
          {
            question: "WiFiパスワードの長さは？",
            answer: "最低12文字、推奨16文字以上。8文字以下は総当たり攻撃で数時間で破られる、12文字で数十年、16文字で事実上解読不可能。WPA2/WPA3暗号化と組合せで、家庭用WiFiの安全性は十分確保できる。初期パスワード（ルーター裏面のMACアドレス等）は必ず変更しましょう。",
          },
          {
            question: "WPA2とWPA3の違いは？",
            answer: "WPA2（2004年〜）：現在の標準暗号化、ほぼ全てのデバイス対応。WPA3（2018年〜）：次世代暗号化、ブルートフォース攻撃への耐性強化。最新ルーター（2023年以降）はWPA3対応、古いデバイス（2018年以前）はWPA2のみ対応のため、家庭では「WPA2/WPA3混合モード」が互換性確保できます。",
          },
          {
            question: "ゲスト用WiFiの設定は？",
            answer: "多くのルーターに「ゲストネットワーク」機能あり、メインWiFiと別のSSID＋パスワードで運用。訪問者・短期滞在者にはゲストWiFiを提供、メインのパスワード漏洩を防止。IoT機器（ロボット掃除機・スマートスピーカー）もゲスト側に隔離することで、セキュリティ向上できます。",
          },
          {
            question: "スマホへのパスワード共有方法は？",
            answer: "iPhone同士：iOS11以降、自動でパスワード共有可能。iPhone→Android：QRコード生成（WiFi設定からQRコード作成アプリ）。共通：本ツールで生成したパスワードをLINE・メモアプリに記録。WiFiルーターのQRコード印刷＋冷蔵庫に貼る方式が家庭内では便利、来客時の案内もスムーズです。",
          },
        ]}
      />
      <AffiliateSection slug="wifi-password-generator" category="日常ツール" />
      <RelatedTools currentSlug="wifi-password-generator" category="日常ツール" />
    </div>
  );
}
