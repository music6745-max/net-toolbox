"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import QRCode from "qrcode";

export default function Page() {
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [encryption, setEncryption] = useState<"WPA" | "WEP" | "nopass">("WPA");
  const [hidden, setHidden] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [error, setError] = useState("");

  const generate = async () => {
    if (!ssid.trim()) {
      setError("SSIDを入力してください。");
      return;
    }
    setError("");

    const escapeSpecial = (s: string) =>
      s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/:/g, "\\:").replace(/"/g, '\\"');

    const wifiString = `WIFI:T:${encryption};S:${escapeSpecial(ssid)};P:${escapeSpecial(password)};H:${hidden ? "true" : "false"};;`;

    try {
      const dataUrl = await QRCode.toDataURL(wifiString, {
        width: 300,
        margin: 2,
        color: { dark: "#000000", light: "#ffffff" },
      });
      setQrDataUrl(dataUrl);
    } catch {
      setError("QRコードの生成に失敗しました。");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>WiFi QRコード生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">WiFi QRコード生成ツール</h1>
      <p className="text-muted mb-8">
        WiFiのSSIDとパスワードからQRコードを生成。スマホで読み取って簡単に接続できます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">SSID（ネットワーク名）</label>
          <input
            type="text"
            value={ssid}
            onChange={(e) => setSsid(e.target.value)}
            placeholder="MyWiFi"
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">パスワード</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="パスワードを入力"
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">暗号化方式</label>
          <select
            value={encryption}
            onChange={(e) => setEncryption(e.target.value as "WPA" | "WEP" | "nopass")}
            className="border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="WPA">WPA/WPA2/WPA3</option>
            <option value="WEP">WEP</option>
            <option value="nopass">暗号化なし</option>
          </select>
        </div>

        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={hidden}
            onChange={(e) => setHidden(e.target.checked)}
            className="rounded"
          />
          <span>ステルスSSID（非表示ネットワーク）</span>
        </label>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          onClick={generate}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          QRコードを生成
        </button>

        {qrDataUrl && (
          <div className="text-center">
            <img
              src={qrDataUrl}
              alt="WiFi QR Code"
              className="mx-auto border border-card-border rounded-lg"
            />
            <p className="text-sm text-muted mt-3">
              スマホのカメラでスキャンしてWiFiに接続できます。
            </p>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">WiFi QRコード生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>SSID（ネットワーク名）、パスワード、暗号化方式を入力して「QRコードを生成」をクリックします。</p>
          <p>生成されたQRコードをスマホのカメラで読み取ると、自動でWiFiに接続できます。</p>
          <p>ゲスト用のWiFi共有や、カフェ・オフィスでの掲示に便利です。</p>
          <p>すべての処理はブラウザ内で完結し、パスワードが外部に送信されることはありません。</p>
        </div>
      </section>

      <AffiliateSection slug="wifi-qr" category="日常ツール" />


      <RelatedTools currentSlug="wifi-qr" category="日常ツール" />
    </div>
  );
}
