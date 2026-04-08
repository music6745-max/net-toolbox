"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [years, setYears] = useState("0.5");
  const [weeklyDays, setWeeklyDays] = useState("5");

  // 労基法39条: 通常の労働者（週5日以上 or 週30時間以上）
  const fullTime: Record<string, number> = {
    "0.5": 10, "1.5": 11, "2.5": 12, "3.5": 14, "4.5": 16, "5.5": 18, "6.5": 20,
  };
  // 比例付与: 週4日(168-216日) / 週3日(120-168日) / 週2日(72-120日) / 週1日(48-72日)
  const partTime: Record<string, Record<string, number>> = {
    "4": { "0.5": 7, "1.5": 8, "2.5": 9, "3.5": 10, "4.5": 12, "5.5": 13, "6.5": 15 },
    "3": { "0.5": 5, "1.5": 6, "2.5": 6, "3.5": 8, "4.5": 9, "5.5": 10, "6.5": 11 },
    "2": { "0.5": 3, "1.5": 4, "2.5": 4, "3.5": 5, "4.5": 6, "5.5": 6, "6.5": 7 },
    "1": { "0.5": 1, "1.5": 2, "2.5": 2, "3.5": 2, "4.5": 3, "5.5": 3, "6.5": 3 },
  };

  let days = 0;
  if (weeklyDays === "5") {
    days = fullTime[years] || 20;
  } else {
    days = (partTime[weeklyDays] && partTime[weeklyDays][years]) || 0;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>有給休暇付与日数計算</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">有給休暇付与日数計算ツール</h1>
      <p className="text-muted mb-8">労働基準法第39条に基づく年次有給休暇の付与日数を、勤続年数と週の所定労働日数から自動計算します。フルタイム・パートタイム両対応。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">勤続年数</label>
            <select value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background">
              <option value="0.5">6ヶ月</option>
              <option value="1.5">1年6ヶ月</option>
              <option value="2.5">2年6ヶ月</option>
              <option value="3.5">3年6ヶ月</option>
              <option value="4.5">4年6ヶ月</option>
              <option value="5.5">5年6ヶ月</option>
              <option value="6.5">6年6ヶ月以上</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">週の所定労働日数</label>
            <select value={weeklyDays} onChange={e => setWeeklyDays(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background">
              <option value="5">週5日以上（フルタイム）</option>
              <option value="4">週4日</option>
              <option value="3">週3日</option>
              <option value="2">週2日</option>
              <option value="1">週1日</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">付与日数</div>
            <div className="text-3xl font-bold text-primary">{days}日</div>
          </div>
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">時効（2年）後の累積上限</div>
            <div className="text-3xl font-bold">{Math.min(40, days * 2)}日</div>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>労働基準法第39条により、入社から6ヶ月継続勤務し、所定労働日の8割以上出勤した労働者には有給休暇が付与されます。フルタイム（週5日以上 or 週30時間以上）は最初に10日付与され、勤続年数に応じて最大20日まで増加します。</p>
          <p>週4日以下のパートタイマーは「比例付与」となり、所定労働日数に応じて少ない日数が付与されます。年5日の取得義務（働き方改革関連法）も忘れずに管理しましょう。</p>
          <p>有給休暇の時効は付与日から2年間。未消化の有給は翌年度に繰り越せますが、2年経過後は失効します。</p>
        </div>
      </section>

      <section className="mt-10 mb-10">
        <Link href="/guide/business-bank-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">ビジネス銀行口座比較ガイド</div>
          <p className="text-xs text-muted">給与振込手数料を抑えるネット銀行を比較 →</p>
        </Link>
      </section>

      <AffiliateSection slug="annual-leave-calculator" category="日常ツール" />
      <RelatedTools currentSlug="annual-leave-calculator" category="日常ツール" />
    </div>
  );
}
