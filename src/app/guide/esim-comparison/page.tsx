import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】eSIM比較5選｜国内・海外旅行向けおすすめプランを徹底解説",
  description:
    "楽天モバイル・povo・ahamo・Airalo・Holaflyの国内＆海外向けeSIM5種を徹底比較。即時開通・物理SIM不要のeSIMを選ぶコツ。",
  alternates: { canonical: `${siteConfig.url}/guide/esim-comparison` },
};

const faqItems = [
  { question: "eSIMと物理SIMの違いは？", answer: "eSIMは端末内蔵の電子的SIMで、物理カードを差し替える必要がありません。オンライン申込から即時開通できる手軽さが魅力です。" },
  { question: "iPhoneでeSIMは使えますか？", answer: "iPhone XS以降ならeSIM対応です。デュアルSIM運用で物理SIMとeSIMを併用できます。" },
  { question: "海外でも使えますか？", answer: "Airalo・Holaflyなどの海外eSIMサービスを使えば、現地SIMを購入せず日本から事前に申し込めます。" },
  { question: "費用はどれくらい？", answer: "国内月額0円〜3,000円、海外旅行用5日プランで1,000〜2,000円程度です。" },
];

const services = [
  { name: "楽天モバイル", type: "国内", feature: "完全無制限プラン", points: ["データ無制限で月額3,278円", "eSIM即時開通対応", "Rakuten Linkで通話無料"], bestFor: "国内でデータをたくさん使う人。" },
  { name: "povo 2.0", type: "国内", feature: "基本料金0円", points: ["トッピング型で必要分だけ払う", "eSIM対応", "短期トッピングが便利"], bestFor: "サブ回線として使いたい人。" },
  { name: "ahamo", type: "国内", feature: "ドコモ品質", points: ["月20GB+5分通話で2,970円", "eSIM対応", "海外ローミング20GB標準"], bestFor: "ドコモ品質で安く使いたい人。" },
  { name: "Airalo", type: "海外", feature: "200カ国以上対応", points: ["世界各国のeSIM販売", "アプリで簡単購入", "渡航前に準備可"], bestFor: "海外旅行・出張する人。" },
  { name: "Holafly", type: "海外", feature: "無制限プラン豊富", points: ["スペイン発のeSIM大手", "データ無制限プラン", "日本語対応"], bestFor: "長期海外滞在・大量データ利用者。" },
];

export default function ESimComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "eSIM比較", url: `${siteConfig.url}/guide/esim-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】eSIM比較5選" description="楽天モバイル・povo・ahamo・Airalo・Holafly徹底比較。" url={`${siteConfig.url}/guide/esim-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>eSIM比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】eSIM比較5選｜国内・海外旅行向けおすすめプランを徹底解説</h1>
        <p className="text-muted leading-relaxed">物理SIMの差し替えが不要なeSIMは、国内のサブ回線にも海外旅行にも便利。本記事では用途別に主要5サービスを徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">eSIMの仕組みとメリット</h2>
        <p className="text-muted leading-relaxed mb-4">eSIMは端末内蔵のチップに通信契約情報を書き込む仕組みで、物理SIMを使わずに通信できます。Web申込→QRコード読み込みで即時開通でき、複数回線の使い分けも簡単です。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめeSIMサービス5選</h2>
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
        <h2 className="text-xl font-bold mb-4">eSIMオンライン申込</h2>
        <ComparisonTableCTA
          services={[
            { name: "楽天モバイル", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "データ無制限", price: "月3,278円〜", badge: "国内定番" },
            { name: "ahamo", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "ドコモ品質", price: "月2,970円〜" },
            { name: "Airalo", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "海外旅行に便利", price: "1日300円〜" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/sim-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">格安SIM比較</span>
            <p className="text-xs text-muted mt-1">国内主要SIMを比較</p>
          </Link>
          <Link href="/guide/wifi-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">WiFi比較</span>
            <p className="text-xs text-muted mt-1">据置・モバイルWiFi</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
