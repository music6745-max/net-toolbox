"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [workHours, setWorkHours] = useState("8");
  const [overtime, setOvertime] = useState("20");
  const [holidays, setHolidays] = useState("120");
  const [commute, setCommute] = useState("60");
  const [paidLeaveRate, setPaidLeaveRate] = useState("50");

  const result = useMemo(() => {
    const wh = parseFloat(workHours) || 0;
    const ot = parseFloat(overtime) || 0;
    const hd = parseFloat(holidays) || 0;
    const cm = parseFloat(commute) || 0;
    const pl = parseFloat(paidLeaveRate) || 0;

    // Scoring (100 point)
    const workScore = Math.max(0, 25 - Math.max(0, wh - 8) * 5);
    const otScore = Math.max(0, 25 - Math.max(0, ot - 10) * 1.2);
    const hdScore = Math.min(20, (hd / 125) * 20);
    const cmScore = Math.max(0, 15 - Math.max(0, cm - 30) * 0.25);
    const plScore = (pl / 100) * 15;
    const total = Math.round(workScore + otScore + hdScore + cmScore + plScore);

    let grade = "S", comment = "理想的なバランス", color = "#16a34a";
    if (total < 85) { grade = "A"; comment = "良好なバランス"; color = "#22c55e"; }
    if (total < 70) { grade = "B"; comment = "平均的・改善余地あり"; color = "#eab308"; }
    if (total < 55) { grade = "C"; comment = "やや偏っている"; color = "#f97316"; }
    if (total < 40) { grade = "D"; comment = "バランスが崩れている"; color = "#ef4444"; }

    return { total, grade, comment, color };
  }, [workHours, overtime, holidays, commute, paidLeaveRate]);

  const shareText = `私のワークライフバランス診断は${result.total}点（${result.grade}ランク / ${result.comment}）でした！ #ワークライフバランス診断 #ネットツールボックス`;
  const shareUrl = "https://net-toolbox.jp/tools/work-life-balance-checker";
  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>ワークライフバランス診断</span></nav>
      <h1 className="text-2xl font-bold mb-2">ワークライフバランス診断</h1>
      <p className="text-muted mb-8">あなたの働き方を5つの観点から100点満点でスコア化します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">1日の実労働時間（h）</label><input type="number" value={workHours} onChange={e => setWorkHours(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">月間残業時間（h）</label><input type="number" value={overtime} onChange={e => setOvertime(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">年間休日数</label><input type="number" value={holidays} onChange={e => setHolidays(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">片道通勤時間（分）</label><input type="number" value={commute} onChange={e => setCommute(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">有給取得率（%）</label><input type="number" value={paidLeaveRate} onChange={e => setPaidLeaveRate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>

        <div className="mt-6 rounded-lg p-6 text-center" style={{ background: result.color + "1A", border: `1px solid ${result.color}` }}>
          <div className="text-xs text-muted mb-1">あなたのWLBスコア</div>
          <div className="text-5xl font-bold" style={{ color: result.color }}>{result.total}<span className="text-xl">/100</span></div>
          <div className="mt-2 text-lg font-semibold">ランク {result.grade}</div>
          <div className="text-sm text-muted mt-1">{result.comment}</div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <a href={xHref} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:opacity-80">Xで結果をシェア</a>
          <button onClick={() => { navigator.clipboard?.writeText(shareText + " " + shareUrl); }} className="px-4 py-2 rounded-lg border border-card-border text-sm font-medium hover:bg-background">結果をコピー</button>
        </div>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        <Link href="/guide/remote-work-tools" className="block bg-card-bg border border-card-border rounded-xl p-5 hover:border-primary transition">
          <div className="text-sm text-primary font-semibold mb-1">関連ガイド</div>
          <div className="font-bold">リモートワークツール比較</div>
          <div className="text-xs text-muted mt-1">働き方を見直したい方向けのおすすめツール</div>
        </Link>
        <Link href="/guide/job-site-comparison" className="block bg-card-bg border border-card-border rounded-xl p-5 hover:border-primary transition">
          <div className="text-sm text-primary font-semibold mb-1">関連ガイド</div>
          <div className="font-bold">転職サイト徹底比較</div>
          <div className="text-xs text-muted mt-1">WLB改善のための転職情報</div>
        </Link>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>労働時間・残業・年間休日・通勤時間・有給取得率の5項目を入力すると、ワークライフバランスを100点満点でスコア化します。</p>
        </div>
      </section>

      <AffiliateSection slug="work-life-balance-checker" category="日常ツール" />
      <RelatedTools currentSlug="work-life-balance-checker" category="日常ツール" />
    </div>
  );
}
