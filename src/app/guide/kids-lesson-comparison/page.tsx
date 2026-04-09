import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】子供向けオンライン習い事比較5選｜英会話・プログラミング・学習を徹底解説",
  description:
    "Cambly Kids・QQ Kids・QUREO・Tech Kids School・スマイルゼミの子供向けオンライン習い事5社を徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/kids-lesson-comparison` },
};

const faqItems = [
  { question: "子供向けオンライン習い事のメリットは？", answer: "送迎不要・自宅でできる・コスパが良い・幅広い選択肢から選べる、といったメリットがあります。" },
  { question: "何歳から始めるべき？", answer: "英会話は3歳から、プログラミングは小学校1〜2年生からが推奨されます。早ければ早いほど吸収が早いです。" },
  { question: "費用相場は？", answer: "オンライン英会話で月3,000〜10,000円、プログラミングで月10,000〜25,000円が相場です。" },
  { question: "効果はありますか？", answer: "継続が前提ですが、6ヶ月以上続ければ明確な成長が見られます。子供の興味を引き出すコース選びが重要です。" },
];

const services = [
  { name: "Cambly Kids", type: "英会話", feature: "ネイティブ講師の英会話", points: ["全員ネイティブ講師", "予約不要・24時間対応", "週1回30分5,990円〜"], bestFor: "本格的にネイティブと話したい子。" },
  { name: "QQ Kids", type: "英会話", feature: "公教育水準の品質", points: ["カリキュラムが体系的", "ハロウィンなどイベント豊富", "月2,980円〜"], bestFor: "コスパ重視。" },
  { name: "QUREO", type: "プログラミング", feature: "ゲーム感覚で学べる", points: ["小学校教材としても採用", "動画レッスン＋実践", "月額制"], bestFor: "ゲーム好きな小学生。" },
  { name: "Tech Kids School", type: "プログラミング", feature: "サイバーエージェント運営", points: ["プロ品質のカリキュラム", "オンライン・通学あり", "成果発表会あり"], bestFor: "本格的に学ばせたい家庭。" },
  { name: "スマイルゼミ", type: "総合学習", feature: "タブレット学習の定番", points: ["全教科対応", "AI個別最適化", "中学生まで対応"], bestFor: "総合的な学力をつけたい子。" },
];

export default function KidsLessonComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "子供向け習い事比較", url: `${siteConfig.url}/guide/kids-lesson-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】子供向けオンライン習い事比較5選" description="Cambly Kids・QQ Kids・QUREO・Tech Kids School・スマイルゼミ徹底比較。" url={`${siteConfig.url}/guide/kids-lesson-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>子供向け習い事比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】子供向けオンライン習い事比較5選｜英会話・プログラミング・学習を徹底解説</h1>
        <p className="text-muted leading-relaxed">送迎不要・自宅で受講できるオンライン習い事は共働き世帯の強い味方。本記事では人気5サービスを徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ子供向けオンライン習い事5選</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">{s.feature}</p>
              <ul className="space-y-1 mb-4">
                {s.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{s.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">無料体験レッスン予約</h2>
        <ComparisonTableCTA
          services={[
            { name: "QQ Kids", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "コスパ最強", price: "月2,980円〜", badge: "おすすめ" },
            { name: "Cambly Kids", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "ネイティブ講師", price: "月5,990円〜" },
            { name: "Tech Kids School", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "プログラミング", price: "月額制" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/online-english-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンライン英会話比較</span>
            <p className="text-xs text-muted mt-1">大人向けも比較</p>
          </Link>
          <Link href="/guide/programming-school-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">プログラミングスクール</span>
            <p className="text-xs text-muted mt-1">大人向けスクール</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
