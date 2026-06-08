import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】MBA・ビジネススクール比較5選｜国内・オンラインで学ぶ経営学",
  description:
    "グロービス・KBS・WBS・ABS・BBT大学院のMBA・ビジネススクール5社を料金・カリキュラム・卒業実績で徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/bookkeeping-2-comparison` },
};

const faqItems = [
  { question: "MBAの費用相場は？", answer: "国内MBAで200万〜400万円、トップ校で500万円超もあります。海外MBAは1,000万円以上が一般的です。" },
  { question: "オンラインMBAでも価値ある？", answer: "近年はオンラインMBAも認知度が上がっています。働きながら学べる柔軟性が魅力。" },
  { question: "受験対策は必要？", answer: "小論文・面接・GMAT等の対策が必要です。専門予備校を利用する人も多いです。" },
  { question: "MBAで年収は上がる？", answer: "卒業後2〜3年で平均年収が大幅に上昇する事例が多数。費用対効果は高いと言えます。" },
];

const services = [
  { name: "グロービス経営大学院", type: "国内最大手", feature: "国内MBAの最大手", points: ["国内MBA志望者数No.1", "実践的なケーススタディ", "オンラインも対応"], bestFor: "実践重視の人。" },
  { name: "慶應ビジネススクール(KBS)", type: "国内トップ", feature: "アジアトップクラス", points: ["国際的評価が高い", "卒業生ネットワーク強", "ケースメソッド中心"], bestFor: "国際的キャリア志向。" },
  { name: "早稲田大学ビジネススクール(WBS)", type: "国内トップ", feature: "夜間・週末コースあり", points: ["夜間・週末コース充実", "起業家精神を育成", "都心開講"], bestFor: "働きながら学びたい人。" },
  { name: "青山学院大学ビジネススクール(ABS)", type: "国内", feature: "国際派の養成", points: ["英語プログラムあり", "MBA国際認証取得", "都心立地"], bestFor: "英語で学びたい人。" },
  { name: "BBT大学院", type: "オンライン", feature: "オンライン特化", points: ["100%オンライン", "全国どこでも受講可", "大前研一が学長"], bestFor: "地方在住・働きながら学びたい人。" },
];

export default function MbaComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "MBA比較", url: `${siteConfig.url}/guide/bookkeeping-2-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】MBA・ビジネススクール比較5選" description="グロービス・KBS・WBS・ABS・BBT徹底比較。" url={`${siteConfig.url}/guide/bookkeeping-2-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>MBA比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】MBA・ビジネススクール比較5選｜国内・オンラインで学ぶ経営学</h1>
        <p className="text-muted leading-relaxed">キャリアアップのための自己投資としてMBAは根強い人気。本記事では国内主要5校を徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめMBA・ビジネススクール5校</h2>
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
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/career-coaching-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">キャリアコーチング</span>
            <p className="text-xs text-muted mt-1">キャリア相談</p>
          </Link>
          <Link href="/guide/executive-job-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">エグゼクティブ転職</span>
            <p className="text-xs text-muted mt-1">ハイクラス転職</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
