import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】保険見直し相談サービス比較5選｜FP無料相談で家計改善",
  description:
    "保険チャンネル・保険見直しラボ・ほけんのぜんぶ・ほけんの窓口・マネードクターの保険見直し無料相談5社を徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/life-insurance-review-comparison` },
};

const faqItems = [
  { question: "FP無料相談はなぜ無料？", answer: "保険会社からの紹介手数料で運営されているため、ユーザーは費用負担ゼロです。中立性を保つため、金融庁の指導のもと運営されています。" },
  { question: "保険見直しでどれくらい節約できますか？", answer: "ケースバイケースですが、月数千〜2万円程度の保険料削減事例が多数あります。年間数十万円の家計改善も珍しくありません。" },
  { question: "強引な勧誘はありますか？", answer: "大手のFP相談サービスは強引な勧誘を禁じています。気に入らない場合は断っても問題ありません。" },
  { question: "オンラインでも相談できますか？", answer: "ほぼ全社でZoomなどのオンライン相談に対応しています。仕事終わりや休日に自宅から受けられます。" },
];

const services = [
  { name: "保険チャンネル", type: "リクルート系", feature: "リクルート運営の信頼", points: ["大手の安心感", "無料FP相談", "ライフプラン設計"], bestFor: "信頼性重視の人。" },
  { name: "保険見直しラボ", type: "総合", feature: "経験豊富なFP", points: ["平均業界経験12年以上のFP", "全国対応", "強引な勧誘なし"], bestFor: "プロのアドバイスを受けたい人。" },
  { name: "ほけんのぜんぶ", type: "子育て世帯特化", feature: "子育て世代に強い", points: ["FP在籍数業界トップクラス", "教育資金相談に強い", "オンライン対応"], bestFor: "子育て世帯。" },
  { name: "ほけんの窓口", type: "店舗型", feature: "全国780店舗以上", points: ["対面相談が中心", "40社以上の保険を比較", "お客様満足度97%"], bestFor: "対面でじっくり話したい人。" },
  { name: "マネードクター", type: "総合FP", feature: "お金全般の相談", points: ["保険＋資産運用＋住宅ローンも対応", "全国の優秀なFPと面談", "オンライン・店舗対応"], bestFor: "お金全般を見直したい人。" },
];

export default function LifeInsuranceReviewComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "保険見直し比較", url: `${siteConfig.url}/guide/life-insurance-review-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】保険見直し相談サービス比較5選" description="保険チャンネル・保険見直しラボ・ほけんのぜんぶ・ほけんの窓口・マネードクター徹底比較。" url={`${siteConfig.url}/guide/life-insurance-review-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>保険見直し比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】保険見直し相談サービス比較5選｜FP無料相談で家計改善</h1>
        <p className="text-muted leading-relaxed">『保険料、本当に妥当？』と感じたら無料FP相談がおすすめ。本記事では人気5社のFP相談サービスを徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">保険見直しのメリット</h2>
        <p className="text-muted leading-relaxed mb-4">家計の中で保険料は大きな固定費。一度の見直しで月数千〜数万円の節約に繋がる可能性があります。FP相談は完全無料なので、迷ったらまず気軽に相談しましょう。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめFP相談サービス5選</h2>
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
        <h2 className="text-xl font-bold mb-4">無料FP相談を予約する</h2>
        <ComparisonTableCTA
          services={[
            { name: "保険チャンネル", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "リクルート運営", price: "完全無料", badge: "おすすめ" },
            { name: "保険見直しラボ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "業界経験豊富なFP", price: "完全無料" },
            { name: "ほけんのぜんぶ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "子育て世帯に強い", price: "完全無料" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">生命保険比較</span>
            <p className="text-xs text-muted mt-1">主要な生命保険を比較</p>
          </Link>
          <Link href="/guide/fire-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">火災保険比較</span>
            <p className="text-xs text-muted mt-1">住宅保険の見直し</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
