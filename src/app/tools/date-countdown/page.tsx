"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [target, setTarget] = useState("2027-01-01");

  const calc = () => {
    const t = new Date(target);
    if (isNaN(t.getTime())) return null;
    const now = new Date();
    const diff = t.getTime() - now.getTime();
    const abs = Math.abs(diff);
    const days = Math.floor(abs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((abs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    return { days, hours, weeks, months, past: diff < 0 };
  };
  const r = calc();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>日付カウントダウン</span></nav>
      <h1 className="text-2xl font-bold mb-2">日付カウントダウン・カウントアップ</h1>
      <p className="text-muted mb-8">指定した日付まであと何日か、または何日経過したかを計算。誕生日・イベント・記念日の管理に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">対象日付</label><input type="date" value={target} onChange={e => setTarget(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        {r && (
          <>
            <div className="bg-primary/10 rounded-lg p-6 text-center">
              <div className="text-xs text-muted mb-1">{r.past ? "経過" : "残り"}</div>
              <div className="text-3xl font-bold text-primary">{r.days}日 {r.hours}時間</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">週数</div><div className="text-lg font-bold">{r.weeks}週</div></div>
              <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月数</div><div className="text-lg font-bold">{r.months}ヶ月</div></div>
            </div>
          </>
        )}
      </div>
      <ToolFAQSection
        toolName="日付カウントダウン"
        howTo={[
          "対象日付を選択（誕生日・記念日・イベント・試験日等）",
          "現在日からの残り日数／経過日数が自動計算",
          "週数・月数でも表示、中期・長期の計画立てに活用",
          "ブラウザブックマークで毎日チェックも",
        ]}
        faqs={[
          {
            question: "どんな場面で使う？",
            answer: "①誕生日・記念日までの日数②結婚式・卒業式・入学式まで③受験・資格試験まで④旅行・イベント出発まで⑤ダイエット・目標達成の期限管理⑥赤ちゃんの出産予定日まで⑦新居引越しまで。人生の節目・目標管理・モチベーション維持に役立ちます。",
          },
          {
            question: "日付管理アプリのおすすめは？",
            answer: "Googleカレンダー（無料・共有可能）、Apple純正カレンダー（iOS統合）、Timepage（ビジュアル重視）、Calendly（予約・会議調整）、Notion（タスク統合）。日常のスケジュール管理はGoogleカレンダー、仕事の予約調整はCalendlyが定番、用途別の使い分けが効率的です。",
          },
          {
            question: "目標達成のコツは？",
            answer: "①期限を決める（「いつまで」を明確に）②目標を小さく分解（週次・日次）③カウントダウンで視覚化（このツール活用）④週1回の振り返り⑤仲間と共有（SNS・アプリ）⑥達成時のご褒美設定。脳科学的にも期限付き目標は達成率が3倍に上がる効果確認されています。",
          },
          {
            question: "長期目標の立て方は？",
            answer: "5年後・10年後の理想像から逆算。資産2000万円を10年で達成→月16.6万円の積立＋投資が必要。FIRE（5000万円・20年）→月20万円＋年7%運用。大きな目標ほど具体的な数値・期限・方法に分解、このツールで進捗を定期的に確認するのが成功の鉄則です。",
          },
        ]}
      />
      <AffiliateSection slug="date-countdown" category="日常ツール" />
      <RelatedTools currentSlug="date-countdown" category="日常ツール" />
    </div>
  );
}
