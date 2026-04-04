"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type Sign = {
  name: string;
  en: string;
  symbol: string;
  period: string;
};

const SIGNS: Sign[] = [
  { name: "牡羊座", en: "Aries", symbol: "♈", period: "3/21〜4/19" },
  { name: "牡牛座", en: "Taurus", symbol: "♉", period: "4/20〜5/20" },
  { name: "双子座", en: "Gemini", symbol: "♊", period: "5/21〜6/21" },
  { name: "蟹座", en: "Cancer", symbol: "♋", period: "6/22〜7/22" },
  { name: "獅子座", en: "Leo", symbol: "♌", period: "7/23〜8/22" },
  { name: "乙女座", en: "Virgo", symbol: "♍", period: "8/23〜9/22" },
  { name: "天秤座", en: "Libra", symbol: "♎", period: "9/23〜10/23" },
  { name: "蠍座", en: "Scorpio", symbol: "♏", period: "10/24〜11/22" },
  { name: "射手座", en: "Sagittarius", symbol: "♐", period: "11/23〜12/21" },
  { name: "山羊座", en: "Capricorn", symbol: "♑", period: "12/22〜1/19" },
  { name: "水瓶座", en: "Aquarius", symbol: "♒", period: "1/20〜2/18" },
  { name: "魚座", en: "Pisces", symbol: "♓", period: "2/19〜3/20" },
];

function getSign(month: number, day: number): number {
  const md = month * 100 + day;
  if (md >= 321 && md <= 419) return 0;
  if (md >= 420 && md <= 520) return 1;
  if (md >= 521 && md <= 621) return 2;
  if (md >= 622 && md <= 722) return 3;
  if (md >= 723 && md <= 822) return 4;
  if (md >= 823 && md <= 922) return 5;
  if (md >= 923 && md <= 1023) return 6;
  if (md >= 1024 && md <= 1122) return 7;
  if (md >= 1123 && md <= 1221) return 8;
  if (md >= 1222 || md <= 119) return 9;
  if (md >= 120 && md <= 218) return 10;
  return 11; // 2/19〜3/20
}

export default function HoroscopeCalculatorPage() {
  const [month, setMonth] = useState("1");
  const [day, setDay] = useState("1");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const m = parseInt(month, 10);
    const d = parseInt(day, 10);
    if (isNaN(m) || m < 1 || m > 12) { setError("月は1〜12の範囲で入力してください"); setResult(null); return; }
    const maxDay = new Date(2000, m, 0).getDate();
    if (isNaN(d) || d < 1 || d > maxDay) { setError(`${m}月の日は1〜${maxDay}の範囲で入力してください`); setResult(null); return; }
    setError("");
    setResult(getSign(m, d));
  };

  const reset = () => { setMonth("1"); setDay("1"); setResult(null); setError(""); };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>星座計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">星座計算ツール</h1>
      <p className="text-muted mb-8">誕生日（月・日）を入力すると、あなたの星座を調べることができます。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">月</label>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-card-bg"
            >
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={String(i + 1)}>{i + 1}月</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">日</label>
            <input
              type="number"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              min="1"
              max="31"
              placeholder="例: 15"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="flex gap-3">
          <button onClick={calculate} className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">
            星座を調べる
          </button>
          <button onClick={reset} className="px-5 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors">
            リセット
          </button>
        </div>

        {result !== null && (
          <div className="mt-8 text-center py-6 bg-background rounded-xl">
            <p className="text-sm text-muted mb-1">{month}月{day}日生まれの星座</p>
            <p className="text-6xl mt-2">{SIGNS[result].symbol}</p>
            <p className="text-3xl font-bold text-primary mt-3">{SIGNS[result].name}</p>
            <p className="text-base text-muted mt-1">{SIGNS[result].en}</p>
            <p className="text-xs text-muted mt-2">期間: {SIGNS[result].period}</p>
          </div>
        )}

        <div className="mt-6 grid grid-cols-4 sm:grid-cols-6 gap-2 text-center text-xs">
          {SIGNS.map((s, i) => (
            <div
              key={s.name}
              className={`py-2 px-1 rounded-lg ${result === i ? "bg-primary text-white" : "bg-background text-muted"}`}
            >
              <div className="text-lg">{s.symbol}</div>
              <div className="mt-0.5">{s.name}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">星座計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 誕生月（1〜12）と誕生日を入力して「星座を調べる」をクリックします。</p>
          <p>2. 12星座の中からあなたの星座がシンボルとともに表示されます。</p>
          <p>西洋占星術で使われる12星座は、誕生日（太陽暦の月日）によって決まります。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="horoscope-calculator" category="日常ツール" />
      <RelatedTools currentSlug="horoscope-calculator" category="日常ツール" />
    </div>
  );
}
