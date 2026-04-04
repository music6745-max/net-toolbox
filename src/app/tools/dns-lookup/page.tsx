"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

interface DnsRecord {
  type: string;
  name: string;
  TTL: number;
  data: string;
}

const RECORD_TYPES = ["A", "AAAA", "MX", "NS", "TXT", "CNAME", "SOA"];

export default function DnsLookupPage() {
  const [domain, setDomain] = useState("");
  const [recordType, setRecordType] = useState("A");
  const [records, setRecords] = useState<DnsRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLookup = async () => {
    if (!domain.trim()) return;
    setLoading(true);
    setError("");
    setRecords([]);
    try {
      const res = await fetch(
        `https://dns.google/resolve?name=${encodeURIComponent(domain.trim())}&type=${recordType}`
      );
      const data = await res.json();
      if (data.Answer && data.Answer.length > 0) {
        setRecords(
          data.Answer.map((a: { type: number; name: string; TTL: number; data: string }) => ({
            type: recordType,
            name: a.name,
            TTL: a.TTL,
            data: a.data,
          }))
        );
      } else {
        setError("レコードが見つかりませんでした。");
      }
    } catch {
      setError("DNSの問い合わせに失敗しました。ドメイン名を確認してください。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>DNS情報確認</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">DNS情報確認ツール</h1>
      <p className="text-muted mb-8">
        ドメインのDNSレコード情報を確認できます。Google Public
        DNSのAPIを利用して、A/AAAA/MX/NS/TXTなどのレコードを取得します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-2">ドメイン名</label>
            <input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLookup()}
              placeholder="example.com"
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">レコードタイプ</label>
            <select
              value={recordType}
              onChange={(e) => setRecordType(e.target.value)}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            >
              {RECORD_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleLookup}
          disabled={loading || !domain.trim()}
          className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? "問い合わせ中..." : "DNS検索"}
        </button>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        {records.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border">
                  <th className="text-left py-2 px-3">タイプ</th>
                  <th className="text-left py-2 px-3">名前</th>
                  <th className="text-left py-2 px-3">TTL</th>
                  <th className="text-left py-2 px-3">データ</th>
                </tr>
              </thead>
              <tbody>
                {records.map((r, i) => (
                  <tr key={i} className="border-b border-card-border/50">
                    <td className="py-2 px-3 font-mono">{r.type}</td>
                    <td className="py-2 px-3 font-mono text-xs break-all">{r.name}</td>
                    <td className="py-2 px-3">{r.TTL}s</td>
                    <td className="py-2 px-3 font-mono text-xs break-all">{r.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">DNS情報確認ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>ドメイン名を入力し、確認したいレコードタイプを選択して「DNS検索」をクリックします。</p>
          <p>Google Public DNSのAPIを利用しています。教育・学習目的でご活用ください。</p>
        </div>
      </section>

      <AffiliateSection slug="dns-lookup" category="開発ツール" />
      <RelatedTools currentSlug="dns-lookup" category="開発ツール" />
    </div>
  );
}
