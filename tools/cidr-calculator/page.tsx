"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface CidrResult {
  networkAddress: string;
  broadcastAddress: string;
  firstHost: string;
  lastHost: string;
  subnetMask: string;
  wildcardMask: string;
  totalHosts: number;
  usableHosts: number;
  prefix: number;
  ipClass: string;
  binaryMask: string;
}

function ipToInt(ip: string): number {
  return ip.split(".").reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
}

function intToIp(n: number): string {
  return [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join(".");
}

function toBinaryMask(prefix: number): string {
  const ones = "1".repeat(prefix).padEnd(32, "0");
  return [ones.slice(0, 8), ones.slice(8, 16), ones.slice(16, 24), ones.slice(24)].join(".");
}

function getIpClass(ip: string): string {
  const first = parseInt(ip.split(".")[0], 10);
  if (first >= 1 && first <= 126) return "A";
  if (first === 127) return "ループバック";
  if (first >= 128 && first <= 191) return "B";
  if (first >= 192 && first <= 223) return "C";
  if (first >= 224 && first <= 239) return "D (マルチキャスト)";
  return "E (予約済み)";
}

function calculateCidr(cidr: string): CidrResult | null {
  const match = cidr.trim().match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\/(\d{1,2})$/);
  if (!match) return null;

  const octets = [match[1], match[2], match[3], match[4]].map(Number);
  if (octets.some((o) => o > 255)) return null;

  const prefix = parseInt(match[5], 10);
  if (prefix < 0 || prefix > 32) return null;

  const mask = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
  const ipInt = ipToInt(octets.join("."));
  const networkInt = (ipInt & mask) >>> 0;
  const broadcastInt = (networkInt | (~mask >>> 0)) >>> 0;
  const totalHosts = Math.pow(2, 32 - prefix);
  const usableHosts = prefix >= 31 ? totalHosts : Math.max(totalHosts - 2, 0);
  const firstHost = prefix >= 31 ? intToIp(networkInt) : intToIp(networkInt + 1);
  const lastHost = prefix >= 31 ? intToIp(broadcastInt) : intToIp(broadcastInt - 1);

  return {
    networkAddress: intToIp(networkInt),
    broadcastAddress: intToIp(broadcastInt),
    firstHost,
    lastHost,
    subnetMask: intToIp(mask),
    wildcardMask: intToIp(~mask >>> 0),
    totalHosts,
    usableHosts,
    prefix,
    ipClass: getIpClass(octets.join(".")),
    binaryMask: toBinaryMask(prefix),
  };
}

const PRESETS = ["192.168.1.0/24", "10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "10.10.10.0/28"];

export default function CidrCalculatorPage() {
  const [input, setInput] = useState("192.168.1.0/24");
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const result = useMemo(() => calculateCidr(input), [input]);

  const copyValue = (label: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(null), 2000);
  };

  const rows = result
    ? [
        { label: "ネットワークアドレス", value: result.networkAddress },
        { label: "ブロードキャストアドレス", value: result.broadcastAddress },
        { label: "最初のホストアドレス", value: result.firstHost },
        { label: "最後のホストアドレス", value: result.lastHost },
        { label: "サブネットマスク", value: result.subnetMask },
        { label: "ワイルドカードマスク", value: result.wildcardMask },
        { label: "バイナリマスク", value: result.binaryMask },
        { label: "総アドレス数", value: result.totalHosts.toLocaleString() },
        { label: "使用可能ホスト数", value: result.usableHosts.toLocaleString() },
        { label: "プレフィックス長", value: `/${result.prefix}` },
        { label: "IPクラス", value: result.ipClass },
      ]
    : [];

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted flex items-center gap-1">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <span className="text-primary">CIDRサブネット計算ツール</span>
        </nav>

        <h1 className="text-2xl font-bold text-primary mb-2">CIDRサブネット計算ツール</h1>
        <p className="text-muted mb-8">CIDR表記を入力してサブネット情報を計算します。</p>

        {/* Input Card */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary mb-1">CIDR表記を入力</label>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="例：192.168.1.0/24"
                className="w-full px-3 py-2 rounded-lg bg-background border border-card-border text-primary placeholder:text-muted focus:outline-none focus:border-primary transition-colors font-mono"
              />
              {input && !result && (
                <p className="text-red-500 text-xs mt-1">有効なCIDR表記を入力してください（例：192.168.1.0/24）</p>
              )}
            </div>
            <div>
              <p className="text-xs text-muted mb-2">プリセット</p>
              <div className="flex flex-wrap gap-2">
                {PRESETS.map((p) => (
                  <button
                    key={p}
                    onClick={() => setInput(p)}
                    className={`px-3 py-1.5 rounded-lg border text-sm font-mono transition-colors ${
                      input === p
                        ? "bg-primary text-white border-primary"
                        : "bg-background border-card-border text-muted hover:border-primary hover:text-primary"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-primary mb-4">計算結果</h2>
            <div className="space-y-2">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-3 px-3 py-2.5 bg-background border border-card-border rounded-lg"
                >
                  <span className="text-xs text-muted w-44 shrink-0">{row.label}</span>
                  <span className="flex-1 font-mono text-sm text-primary break-all">{row.value}</span>
                  <button
                    onClick={() => copyValue(row.label, row.value)}
                    className="shrink-0 text-xs px-3 py-1 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors"
                  >
                    {copiedLabel === row.label ? "✓" : "コピー"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 使い方 */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">使い方</h2>
          <ol className="space-y-2 text-muted list-decimal list-inside">
            <li>CIDR表記（例：192.168.1.0/24）を入力するか、プリセットを選択します</li>
            <li>ネットワークアドレス、ブロードキャスト、ホスト範囲などが自動計算されます</li>
            <li>各値の右のコピーボタンでクリップボードにコピーできます</li>
          </ol>
          <div className="mt-4 space-y-1 text-sm text-muted">
            <p><span className="text-primary font-medium">CIDR</span> = Classless Inter-Domain Routing（クラスレス・インタードメイン・ルーティング）</p>
            <p>IPアドレスとプレフィックス長（/24など）でネットワーク範囲を表記する方式です。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
