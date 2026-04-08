"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const ETO = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

function getZodiac(month: number, day: number): string {
  const z: [number, number, string][] = [
    [1, 20, "山羊座"], [2, 19, "水瓶座"], [3, 21, "魚座"], [4, 20, "牡羊座"],
    [5, 21, "牡牛座"], [6, 22, "双子座"], [7, 23, "蟹座"], [8, 23, "獅子座"],
    [9, 23, "乙女座"], [10, 24, "天秤座"], [11, 23, "蠍座"], [12, 22, "射手座"],
  ];
  for (let i = 0; i < 12; i++) {
    const [m, d, name] = z[i];
    if (month < m || (month === m && day < d)) return name;
  }
  return "山羊座";
}

function toWareki(year: number): string {
  if (year >= 2019) return `令和${year - 2018}年`;
  if (year >= 1989) return `平成${year - 1988}年`;
  if (year >= 1926) return `昭和${year - 1925}年`;
  if (year >= 1912) return `大正${year - 1911}年`;
  return `明治${year - 1867}年`;
}

export default function Page() {
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [r, setR] = useState<null | {
    age: number;
    kazoe: number;
    wareki: string;
    eto: string;
    zodiac: string;
    daysLived: number;
    weeksLived: number;
    daysToBirthday: number;
    nextBdayWareki: string;
  }>(null);

  const calculate = () => {
    if (!date) {
      setError("生年月日を入力してください");
      setR(null);
      return;
    }
    const [y, m, d] = date.split("-").map(Number);
    const birth = new Date(y, m - 1, d);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (birth > today) {
      setError("未来の日付は指定できません");
      setR(null);
      return;
    }
    setError("");
    let age = today.getFullYear() - y;
    const beforeBday =
      today.getMonth() < m - 1 || (today.getMonth() === m - 1 && today.getDate() < d);
    if (beforeBday) age--;
    const kazoe = today.getFullYear() - y + 1;
    const daysLived = Math.floor((today.getTime() - birth.getTime()) / 86400000);
    let nextBday = new Date(today.getFullYear(), m - 1, d);
    if (nextBday <= today) nextBday = new Date(today.getFullYear() + 1, m - 1, d);
    const daysToBirthday = Math.ceil((nextBday.getTime() - today.getTime()) / 86400000);
    setR({
      age,
      kazoe,
      wareki: toWareki(y),
      eto: ETO[(y - 4) % 12 < 0 ? ((y - 4) % 12) + 12 : (y - 4) % 12],
      zodiac: getZodiac(m, d),
      daysLived,
      weeksLived: Math.floor(daysLived / 7),
      daysToBirthday,
      nextBdayWareki: toWareki(nextBday.getFullYear()),
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>年齢詳細計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">年齢詳細計算ツール</h1>
      <p className="text-muted mb-8">
        生年月日から満年齢・数え年・和暦・干支・星座・次の誕生日までの日数までまとめて表示します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">生年月日</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
          className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm bg-card-bg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary mb-4" />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button onClick={calculate} className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">計算する</button>

        {r && (
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="bg-background rounded-lg p-4"><p className="text-xs text-muted">満年齢</p><p className="text-2xl font-bold">{r.age}歳</p></div>
            <div className="bg-background rounded-lg p-4"><p className="text-xs text-muted">数え年</p><p className="text-2xl font-bold">{r.kazoe}歳</p></div>
            <div className="bg-background rounded-lg p-4"><p className="text-xs text-muted">生まれ年（和暦）</p><p className="text-lg font-bold">{r.wareki}</p></div>
            <div className="bg-background rounded-lg p-4"><p className="text-xs text-muted">干支</p><p className="text-2xl font-bold">{r.eto}</p></div>
            <div className="bg-background rounded-lg p-4"><p className="text-xs text-muted">星座</p><p className="text-2xl font-bold">{r.zodiac}</p></div>
            <div className="bg-background rounded-lg p-4"><p className="text-xs text-muted">総生存日数</p><p className="text-xl font-bold">{r.daysLived.toLocaleString()}日</p></div>
            <div className="bg-background rounded-lg p-4"><p className="text-xs text-muted">総週数</p><p className="text-xl font-bold">{r.weeksLived.toLocaleString()}週</p></div>
            <div className="bg-background rounded-lg p-4 col-span-2"><p className="text-xs text-muted">次の誕生日まで</p><p className="text-xl font-bold text-primary">あと {r.daysToBirthday} 日（{r.nextBdayWareki}）</p></div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>生年月日を入力して「計算する」を押すだけで、年齢に関する各種情報をまとめて表示します。</p>
          <p>計算はすべてブラウザ内で行われ、生年月日は外部送信されません。</p>
        </div>
      </section>

      <AffiliateSection slug="age-in-detail-calculator" category="日常ツール" />
      <RelatedTools currentSlug="age-in-detail-calculator" category="日常ツール" />
    </div>
  );
}
