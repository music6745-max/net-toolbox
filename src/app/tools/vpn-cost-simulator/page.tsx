"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

type Plan = { name: string; m1: number; m12: number; m24: number; devices: number };

const plans: Plan[] = [
  { name: "NordVPN", m1: 1970, m12: 690, m24: 540, devices: 10 },
  { name: "ExpressVPN", m1: 1990, m12: 1050, m24: 900, devices: 8 },
  { name: "Surfshark", m1: 1820, m12: 480, m24: 330, devices: 999 },
  { name: "CyberGhost", m1: 1780, m12: 670, m24: 340, devices: 7 },
  { name: "MillenVPN", m1: 1580, m12: 540, m24: 396, devices: 10 },
];

export default function Page() {
  const [term, setTerm] = useState("24");
  const [devices, setDevices] = useState("3");

  const needed = Math.max(1, Math.min(20, parseInt(devices) || 1));
  const months = parseInt(term);

  const rows = plans.map(p => {
    const perMonth = months === 1 ? p.m1 : months === 12 ? p.m12 : p.m24;
    const fits = p.devices >= needed;
    const yearly = perMonth * 12;
    const total = perMonth * months;
    return { ...p, perMonth, yearly, total, fits };
  }).sort((a, b) => a.total - b.total);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>VPN料金シミュレーター</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">VPN料金シミュレーター</h1>
      <p className="text-muted mb-8">契約年数と同時接続台数から、主要VPNサービスの年間コストを一覧比較します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">契約期間</label>
            <select value={term} onChange={e => setTerm(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background">
              <option value="1">1ヶ月プラン</option>
              <option value="12">1年プラン</option>
              <option value="24">2年プラン</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">同時接続台数（必要数）</label>
            <input type="number" min="1" max="20" value={devices} onChange={e => setDevices(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border">
                <th className="text-left py-2 px-2">サービス</th>
                <th className="text-right py-2 px-2">月額換算</th>
                <th className="text-right py-2 px-2">年間</th>
                <th className="text-right py-2 px-2">契約総額</th>
                <th className="text-center py-2 px-2">台数</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.name} className={`border-b border-card-border ${!r.fits ? "opacity-40" : ""} ${i === 0 && r.fits ? "bg-primary/10" : ""}`}>
                  <td className="py-2 px-2 font-medium">
                    {r.name}
                    {i === 0 && r.fits && <span className="ml-2 text-xs text-primary">最安</span>}
                  </td>
                  <td className="text-right py-2 px-2">¥{r.perMonth.toLocaleString()}</td>
                  <td className="text-right py-2 px-2">¥{r.yearly.toLocaleString()}</td>
                  <td className="text-right py-2 px-2 font-bold">¥{r.total.toLocaleString()}</td>
                  <td className="text-center py-2 px-2">{r.devices >= 999 ? "無制限" : `${r.devices}台`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-xs text-muted">
          ※ 契約期間が長いほど月額換算は安くなります。必要台数を満たさないサービスは淡色表示。
        </div>
      </div>

      <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link href="/guide/vpn-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">VPN比較ガイドを見る</div>
          <p className="text-xs text-muted">主要VPNを速度・セキュリティ・料金で徹底比較 →</p>
        </Link>
        <Link href="/guide/corporate-vpn-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">法人向けVPN比較</div>
          <p className="text-xs text-muted">業務利用の要件も確認 →</p>
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>契約期間と同時接続台数を入力すると、主要VPNサービスの月額・年間・契約総額を一覧比較します。料金は各社公表プランに基づく参考試算です。</p>
        </div>
      </section>

      <AffiliateSection slug="vpn-cost-simulator" category="セキュリティ" />
      <RelatedTools currentSlug="vpn-cost-simulator" category="セキュリティ" />
    </div>
  );
}
