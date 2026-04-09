"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [birth, setBirth] = useState("1990-05-15");
  const d = new Date(birth);
  const m = d.getMonth() + 1;
  const day = d.getDate();
  const zodiac = (() => {
    if ((m===1&&day>=20)||(m===2&&day<=18)) return "水瓶座(♒)";
    if ((m===2&&day>=19)||(m===3&&day<=20)) return "魚座(♓)";
    if ((m===3&&day>=21)||(m===4&&day<=19)) return "牡羊座(♈)";
    if ((m===4&&day>=20)||(m===5&&day<=20)) return "牡牛座(♉)";
    if ((m===5&&day>=21)||(m===6&&day<=21)) return "双子座(♊)";
    if ((m===6&&day>=22)||(m===7&&day<=22)) return "蟹座(♋)";
    if ((m===7&&day>=23)||(m===8&&day<=22)) return "獅子座(♌)";
    if ((m===8&&day>=23)||(m===9&&day<=22)) return "乙女座(♍)";
    if ((m===9&&day>=23)||(m===10&&day<=23)) return "天秤座(♎)";
    if ((m===10&&day>=24)||(m===11&&day<=22)) return "蠍座(♏)";
    if ((m===11&&day>=23)||(m===12&&day<=21)) return "射手座(♐)";
    return "山羊座(♑)";
  })();
  const eto = ["申","酉","戌","亥","子","丑","寅","卯","辰","巳","午","未"][d.getFullYear() % 12];
  const today = new Date();
  const ageDiff = today.getFullYear() - d.getFullYear();
  const age = today.getMonth() > d.getMonth() || (today.getMonth() === d.getMonth() && today.getDate() >= d.getDate()) ? ageDiff : ageDiff - 1;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>誕生日情報</span></nav>
      <h1 className="text-2xl font-bold mb-2">誕生日から星座・干支・年齢を調べる</h1>
      <p className="text-muted mb-8">生年月日を入力すると星座・干支・現在の年齢を表示。プロフィールや占いの参考に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">生年月日</label><input type="date" value={birth} onChange={e => setBirth(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        {!isNaN(d.getTime()) && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">星座</div><div className="text-xl font-bold text-primary">{zodiac}</div></div>
            <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">干支</div><div className="text-xl font-bold">{eto}年</div></div>
            <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">現在の年齢</div><div className="text-xl font-bold">{age}歳</div></div>
          </div>
        )}
      </div>
      <AffiliateSection slug="birthday-zodiac" category="日常ツール" />
      <RelatedTools currentSlug="birthday-zodiac" category="日常ツール" />
    </div>
  );
}
