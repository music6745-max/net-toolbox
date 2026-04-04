"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

function ipToNum(ip: string): number {
  const parts = ip.split(".").map(Number);
  return ((parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3]) >>> 0;
}

function numToIp(num: number): string {
  return [
    (num >>> 24) & 255,
    (num >>> 16) & 255,
    (num >>> 8) & 255,
    num & 255,
  ].join(".");
}

function isValidIp(ip: string): boolean {
  const parts = ip.split(".");
  if (parts.length !== 4) return false;
  return parts.every((p) => {
    const n = Number(p);
    return !isNaN(n) && n >= 0 && n <= 255 && String(n) === p;
  });
}

export default function Page() {
  const [ip, setIp] = useState("192.168.1.100");
  const [cidr, setCidr] = useState(24);

  const valid = isValidIp(ip) && cidr >= 0 && cidr <= 32;

  const calculate = () => {
    if (!valid) return null;
    const ipNum = ipToNum(ip);
    const mask = cidr === 0 ? 0 : (0xffffffff << (32 - cidr)) >>> 0;
    const wildcard = (~mask) >>> 0;
    const network = (ipNum & mask) >>> 0;
    const broadcast = (network | wildcard) >>> 0;
    const totalHosts = cidr === 32 ? 1 : cidr === 31 ? 2 : Math.pow(2, 32 - cidr) - 2;
    const firstUsable = cidr >= 31 ? network : (network + 1) >>> 0;
    const lastUsable = cidr >= 31 ? broadcast : (broadcast - 1) >>> 0;

    return {
      network: numToIp(network),
      broadcast: numToIp(broadcast),
      mask: numToIp(mask),
      wildcard: numToIp(wildcard),
      totalHosts,
      firstUsable: numToIp(firstUsable),
      lastUsable: numToIp(lastUsable),
    };
  };

  const result = calculate();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>サブネット計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">サブネット計算ツール</h1>
      <p className="text-muted mb-8">
        IPアドレスとCIDRプレフィックスからネットワーク情報を計算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">IPアドレス</label>
            <input
              type="text"
              value={ip}
              onChange={(e) => setIp(e.target.value)}
              placeholder="192.168.1.100"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div className="w-24">
            <label className="block text-sm font-medium mb-1">CIDR</label>
            <div className="flex items-center">
              <span className="text-sm mr-1">/</span>
              <input
                type="number"
                value={cidr}
                onChange={(e) => setCidr(Math.min(32, Math.max(0, Number(e.target.value))))}
                min={0}
                max={32}
                className="w-full border border-card-border rounded-lg px-3 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
          </div>
        </div>

        {!valid && ip && (
          <p className="text-red-500 text-sm">有効なIPアドレスとCIDRを入力してください。</p>
        )}

        {result && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["ネットワークアドレス", result.network + "/" + cidr],
                  ["サブネットマスク", result.mask],
                  ["ワイルドカードマスク", result.wildcard],
                  ["ブロードキャストアドレス", result.broadcast],
                  ["使用可能ホスト数", result.totalHosts.toLocaleString()],
                  ["最初の使用可能IP", result.firstUsable],
                  ["最後の使用可能IP", result.lastUsable],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-card-border/50">
                    <td className="py-2.5 pr-4 font-medium">{label}</td>
                    <td className="py-2.5 font-mono">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">サブネット計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>IPアドレスとCIDRプレフィックス長を入力すると、ネットワーク情報を自動計算します。</p>
          <p>ネットワークアドレス、ブロードキャストアドレス、サブネットマスク、使用可能ホスト数などを表示します。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>

      <RelatedTools currentSlug="ip-subnet" category="開発ツール" />
    </div>
  );
}
