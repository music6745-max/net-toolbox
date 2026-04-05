"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function ipToNum(ip: string): number | null {
  const parts = ip.split(".");
  if (parts.length !== 4) return null;
  let num = 0;
  for (const p of parts) {
    const n = parseInt(p);
    if (isNaN(n) || n < 0 || n > 255) return null;
    num = (num << 8) + n;
  }
  return num >>> 0;
}

function numToIp(num: number): string {
  return [
    (num >>> 24) & 255,
    (num >>> 16) & 255,
    (num >>> 8) & 255,
    num & 255,
  ].join(".");
}

function cidrToMask(cidr: number): number {
  if (cidr === 0) return 0;
  return (~0 << (32 - cidr)) >>> 0;
}

function maskToCidr(mask: number): number {
  let bits = 0;
  let m = mask;
  while (m & 0x80000000) {
    bits++;
    m = (m << 1) >>> 0;
  }
  return bits;
}

function numToBinary(num: number): string {
  return [
    ((num >>> 24) & 255).toString(2).padStart(8, "0"),
    ((num >>> 16) & 255).toString(2).padStart(8, "0"),
    ((num >>> 8) & 255).toString(2).padStart(8, "0"),
    (num & 255).toString(2).padStart(8, "0"),
  ].join(".");
}

interface SubnetResult {
  networkAddress: string;
  broadcastAddress: string;
  subnetMask: string;
  wildcardMask: string;
  hostMin: string;
  hostMax: string;
  totalHosts: number;
  usableHosts: number;
  cidr: number;
  ipBinary: string;
  maskBinary: string;
  ipClass: string;
}

function calculateSubnet(ip: string, cidr: number): SubnetResult | null {
  const ipNum = ipToNum(ip);
  if (ipNum === null || cidr < 0 || cidr > 32) return null;

  const mask = cidrToMask(cidr);
  const network = (ipNum & mask) >>> 0;
  const broadcast = (network | ~mask) >>> 0;
  const wildcard = (~mask) >>> 0;
  const totalHosts = Math.pow(2, 32 - cidr);
  const usableHosts = cidr >= 31 ? (cidr === 32 ? 1 : 2) : totalHosts - 2;
  const hostMin = cidr >= 31 ? network : (network + 1) >>> 0;
  const hostMax = cidr >= 31 ? broadcast : (broadcast - 1) >>> 0;

  const firstOctet = (ipNum >>> 24) & 255;
  let ipClass = "E";
  if (firstOctet < 128) ipClass = "A";
  else if (firstOctet < 192) ipClass = "B";
  else if (firstOctet < 224) ipClass = "C";
  else if (firstOctet < 240) ipClass = "D";

  return {
    networkAddress: numToIp(network),
    broadcastAddress: numToIp(broadcast),
    subnetMask: numToIp(mask),
    wildcardMask: numToIp(wildcard),
    hostMin: numToIp(hostMin),
    hostMax: numToIp(hostMax),
    totalHosts,
    usableHosts,
    cidr,
    ipBinary: numToBinary(ipNum),
    maskBinary: numToBinary(mask),
    ipClass,
  };
}

const commonCidrs = [8, 16, 20, 24, 25, 26, 27, 28, 29, 30, 32];

export default function SubnetCalculatorPage() {
  const [ip, setIp] = useState("192.168.1.0");
  const [cidr, setCidr] = useState(24);
  const [result, setResult] = useState<SubnetResult | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    const res = calculateSubnet(ip, cidr);
    if (!res) {
      setError("IPアドレスまたはCIDRが不正です");
      setResult(null);
      return;
    }
    setResult(res);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>サブネット計算機</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">サブネット計算機</h1>
      <p className="text-muted mb-8">
        IPアドレスとCIDR（サブネットマスク）からネットワーク情報を計算します。ネットワーク設計やトラブルシューティングに便利です。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="flex items-end gap-3 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">IPアドレス</label>
            <input
              type="text"
              value={ip}
              onChange={(e) => setIp(e.target.value)}
              placeholder="192.168.1.0"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <span className="text-muted pb-2.5 text-lg">/</span>
          <div className="w-24">
            <label className="block text-sm font-medium mb-1">CIDR</label>
            <input
              type="number"
              min={0}
              max={32}
              value={cidr}
              onChange={(e) => setCidr(parseInt(e.target.value) || 0)}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs text-muted mb-2">よく使うCIDR</p>
          <div className="flex flex-wrap gap-2">
            {commonCidrs.map((c) => (
              <button
                key={c}
                onClick={() => setCidr(c)}
                className={`px-3 py-1.5 rounded-lg text-xs border transition-colors ${
                  cidr === c
                    ? "bg-primary text-white border-primary"
                    : "border-card-border hover:bg-foreground/5"
                }`}
              >
                /{c}
              </button>
            ))}
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button
          onClick={calculate}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          計算する
        </button>
      </div>

      {result && (
        <div className="mt-6 bg-card-bg border border-card-border rounded-xl p-6">
          <h3 className="text-sm font-medium mb-4">計算結果</h3>
          <div className="space-y-3">
            {[
              ["ネットワークアドレス", result.networkAddress],
              ["ブロードキャストアドレス", result.broadcastAddress],
              ["サブネットマスク", `${result.subnetMask} (/${result.cidr})`],
              ["ワイルドカードマスク", result.wildcardMask],
              ["ホスト範囲", `${result.hostMin} 〜 ${result.hostMax}`],
              ["ホスト数（合計）", result.totalHosts.toLocaleString()],
              ["利用可能ホスト数", result.usableHosts.toLocaleString()],
              ["IPクラス", `クラス ${result.ipClass}`],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between items-center py-2 border-b border-card-border last:border-b-0"
              >
                <span className="text-sm text-muted">{label}</span>
                <span className="text-sm font-mono font-medium">{value}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-card-border">
            <h4 className="text-xs text-muted mb-2">バイナリ表記</h4>
            <div className="space-y-1.5">
              <div className="flex gap-2 text-xs">
                <span className="text-muted w-16 shrink-0">IP:</span>
                <span className="font-mono break-all">{result.ipBinary}</span>
              </div>
              <div className="flex gap-2 text-xs">
                <span className="text-muted w-16 shrink-0">マスク:</span>
                <span className="font-mono break-all">{result.maskBinary}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">サブネット計算機の使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. IPアドレスを入力します（例: 192.168.1.0）。</p>
          <p>2. CIDRプレフィックスを入力するか、よく使うCIDRボタンから選択します。</p>
          <p>3. 「計算する」ボタンでネットワーク情報が表示されます。</p>
          <p>
            入力したデータはブラウザ内で処理されるため、サーバーに送信されることはありません。安心してご利用ください。
          </p>
        </div>
      </section>

      <AffiliateSection slug="subnet-calculator" category="開発ツール" />
      <RelatedTools currentSlug="subnet-calculator" category="開発ツール" />
    </div>
  );
}
