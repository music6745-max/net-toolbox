"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [lastPeriod, setLastPeriod] = useState("2026-01-01");

  const calc = () => {
    const d = new Date(lastPeriod);
    if (isNaN(d.getTime())) return null;
    const due = new Date(d);
    due.setDate(due.getDate() + 280);
    const today = new Date();
    const diff = Math.floor((today.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diff / 7);
    const days = diff % 7;
    return { due, weeks, days, totalDays: diff };
  };

  const result = calc();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>妊娠週数計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">妊娠週数・出産予定日計算</h1>
      <p className="text-muted mb-8">最終月経開始日から現在の妊娠週数と出産予定日を計算。※医療助言ではありません。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">最終月経開始日</label><input type="date" value={lastPeriod} onChange={e => setLastPeriod(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        {result && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">現在の週数</div><div className="text-xl font-bold text-primary">{result.weeks}週{result.days}日</div></div>
            <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">出産予定日</div><div className="text-lg font-bold">{result.due.toLocaleDateString('ja-JP')}</div></div>
          </div>
        )}
        <p className="text-xs text-muted mt-2">※ 参考値です。正確な診断は医師にご相談ください。</p>
      </div>
      <ToolFAQSection
        toolName="妊娠週数計算"
        howTo={[
          "最終月経開始日を入力する",
          "現在の妊娠週数（◯週◯日）と出産予定日が自動計算される",
          "妊娠経過の確認・産婦人科受診のタイミングに活用する",
          "正確な週数・予定日は医師の超音波検査で決定されます",
        ]}
        faqs={[
          {
            question: "妊娠初期・中期・後期の区分は？",
            answer: "妊娠初期：0〜15週6日（1〜4ヶ月）、妊娠中期：16〜27週6日（5〜7ヶ月）、妊娠後期：28週〜出産（8〜10ヶ月）。初期はつわり・流産リスク要注意、中期は安定期で体調良好、後期は出産準備期。各時期で注意点・検診頻度が異なり、産婦人科での相談が重要です。",
          },
          {
            question: "出産までの検診スケジュールは？",
            answer: "妊娠初期（〜23週）：4週間に1回、妊娠中期（24〜35週）：2週間に1回、妊娠後期（36週〜）：1週間に1回の検診が標準。血液検査・超音波検査・体重測定等、胎児の成長確認。妊婦健診券（自治体配布・14〜16回分）で費用の大部分がカバーされます。",
          },
          {
            question: "つわりの時期と対処法は？",
            answer: "つわりは妊娠5〜16週頃、特に8〜10週がピーク。軽減法：①こまめに少量ずつ食事②水分補給（氷・ゼリー）③妊娠用サプリ（葉酸・鉄分）④リラックス（ストレス軽減）⑤ひどい場合は医師相談（重症妊娠悪阻は点滴治療）。2〜3ヶ月続く個人差あり、安定期に入れば軽減します。",
          },
          {
            question: "出産準備はいつから始める？",
            answer: "妊娠20週（5ヶ月）頃：産院選び・出産方法検討（自然分娩・無痛分娩・帝王切開）。妊娠28週（8ヶ月）：ベビー用品購入（ベビーベッド・チャイルドシート・衣類）。妊娠34週（9ヶ月）：入院準備完了（陣痛バッグ・入院書類）。育児休業・出産育児一時金（50万円）の申請も早めに確認しましょう。",
          },
        ]}
      />
      <AffiliateSection slug="pregnancy-week-calculator" category="日常ツール" />
      <RelatedTools currentSlug="pregnancy-week-calculator" category="日常ツール" />
    </div>
  );
}
