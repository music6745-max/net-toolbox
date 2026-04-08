"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [guests, setGuests] = useState("70");
  const [region, setRegion] = useState("1.0");
  const [style, setStyle] = useState("hotel");

  const g = parseInt(guests) || 0;
  const regionRate = parseFloat(region) || 1;
  const styleRates: Record<string, { base: number; perGuest: number; label: string }> = {
    hotel: { base: 1500000, perGuest: 25000, label: "ホテル" },
    guesthouse: { base: 1800000, perGuest: 28000, label: "ゲストハウス" },
    specialty: { base: 1400000, perGuest: 24000, label: "専門式場" },
    restaurant: { base: 900000, perGuest: 18000, label: "レストラン" },
    small: { base: 600000, perGuest: 15000, label: "少人数婚" },
  };
  const s = styleRates[style];

  const ceremony = Math.round(400000 * regionRate);
  const venue = Math.round(s.base * regionRate);
  const catering = Math.round(s.perGuest * g * regionRate);
  const dress = Math.round(450000 * regionRate);
  const photo = Math.round(280000 * regionRate);
  const gift = Math.round(6000 * g);
  const total = ceremony + venue + catering + dress + photo + gift;
  const goshugi = Math.round(32000 * g);
  const selfPay = total - goshugi;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>結婚式費用詳細シミュレーター</span></nav>
      <h1 className="text-2xl font-bold mb-2">結婚式費用詳細シミュレーター</h1>
      <p className="text-muted mb-8">招待人数・地域・挙式スタイルから結婚式の総費用と内訳、自己負担額を試算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">招待人数（名）</label><input type="number" value={guests} onChange={e => setGuests(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">地域</label>
            <select value={region} onChange={e => setRegion(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option value="1.15">首都圏</option>
              <option value="1.05">関西・中京圏</option>
              <option value="1.0">全国平均</option>
              <option value="0.9">地方都市</option>
            </select>
          </div>
          <div><label className="block text-sm font-medium mb-2">挙式スタイル</label>
            <select value={style} onChange={e => setStyle(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg focus:outline-none focus:ring-2 focus:ring-primary/30">
              {Object.entries(styleRates).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">総費用</div><div className="text-xl font-bold text-primary">¥{total.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">ご祝儀見込み</div><div className="text-xl font-bold">¥{goshugi.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">自己負担額</div><div className="text-xl font-bold">¥{selfPay.toLocaleString()}</div></div>
        </div>
        <div className="mt-6 border-t border-card-border pt-4">
          <h3 className="text-sm font-bold mb-3">内訳</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted">挙式料</span><span>¥{ceremony.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-muted">会場費・装花・演出</span><span>¥{venue.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-muted">料理・飲物</span><span>¥{catering.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-muted">衣装（新郎新婦）</span><span>¥{dress.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-muted">写真・映像</span><span>¥{photo.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-muted">引出物・ギフト</span><span>¥{gift.toLocaleString()}</span></div>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/wedding-venue-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">結婚式場比較ガイド</span>
            <p className="text-xs text-muted mt-1">式場選びのポイント</p>
          </Link>
          <Link href="/guide/wedding-ring-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">結婚指輪比較ガイド</span>
            <p className="text-xs text-muted mt-1">指輪選びのコツ</p>
          </Link>
        </div>
      </section>

      <AffiliateSection slug="wedding-cost-detail-simulator" category="日常ツール" />
      <RelatedTools currentSlug="wedding-cost-detail-simulator" category="日常ツール" />
    </div>
  );
}
