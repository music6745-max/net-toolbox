import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】不動産投資クラウドファンディング比較5選｜利回り・安全性・最低投資額を徹底解説",
  description:
    "COZUCHI・CREAL・FUNDROP・利回りくん・OwnersBookの不動産投資クラウドファンディング5社を利回り・安全性・最低投資額で徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/used-property-investment-comparison` },
};

const faqItems = [
  { question: "不動産クラウドファンディングとは？", answer: "複数投資家から集めた資金で不動産を取得・運用し、賃料・売却益を分配する仕組みです。少額(1万円〜)から不動産投資が可能です。" },
  { question: "利回りはどれくらい？", answer: "年利4〜10%が相場です。上記サービスでは年利6〜8%のファンドが中心です。元本保証はありません。" },
  { question: "リスクはありますか？", answer: "賃料収入低下・物件価格下落・運営会社の倒産などのリスクがあります。優先劣後方式を採用するサービスを選ぶとリスクが軽減されます。" },
  { question: "初心者でも始めやすい？", answer: "1万円から投資可能で、運用は完全に運営会社が行うため、初心者でも参加しやすい投資商品です。" },
];

const services = [
  { name: "COZUCHI", type: "高利回り", feature: "高利回り案件多数", points: ["平均利回り8%超", "1万円から投資可", "ハイクラス案件にアクセス可"], bestFor: "高リターンを狙いたい人。" },
  { name: "CREAL", type: "業界大手", feature: "上場企業運営", points: ["東証グロース上場", "運用資産規模No.1", "1万円から投資可"], bestFor: "信頼性重視。" },
  { name: "FUNDROP", type: "新興", feature: "短期運用案件多め", points: ["1万円から投資可", "短期(6〜12ヶ月)中心", "想定利回り6〜8%"], bestFor: "短期で結果を見たい人。" },
  { name: "利回りくん", type: "ストーリー型", feature: "想いを応援する投資", points: ["再生プロジェクトに参加", "1万円から投資可", "ストーリー性のある投資"], bestFor: "社会貢献も重視する人。" },
  { name: "OwnersBook", type: "老舗", feature: "業界の先駆け", points: ["設立10年以上の実績", "厳格な審査体制", "貸付型・エクイティ型あり"], bestFor: "安全性重視。" },
];

export default function UsedPropertyInvestmentComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "不動産クラファン比較", url: `${siteConfig.url}/guide/used-property-investment-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】不動産投資クラウドファンディング比較5選" description="COZUCHI・CREAL・FUNDROP・利回りくん・OwnersBook徹底比較。" url={`${siteConfig.url}/guide/used-property-investment-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>不動産クラファン比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】不動産投資クラウドファンディング比較5選｜利回り・安全性・最低投資額を徹底解説</h1>
        <p className="text-muted leading-relaxed">※本記事は投資助言ではありません。元本割れリスクがあります。最終判断はご自身で行ってください。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">不動産クラファンの選び方</h2>
        <p className="text-muted leading-relaxed mb-4">『運用会社の規模・実績』『利回り』『最低投資額』『優先劣後方式の採用』『運用期間』の5点を比較しましょう。複数サービスへの分散投資もリスク軽減に有効です。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ不動産クラファン5選</h2>
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
        <h2 className="text-xl font-bold mb-4">無料口座開設</h2>
        <ComparisonTableCTA
          services={[
            { name: "COZUCHI", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "高利回り案件", price: "口座開設無料", badge: "高利回り" },
            { name: "CREAL", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "上場企業運営", price: "口座開設無料" },
            { name: "OwnersBook", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "10年以上の実績", price: "口座開設無料" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/real-estate-investment-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">不動産投資比較</span>
            <p className="text-xs text-muted mt-1">現物不動産投資</p>
          </Link>
          <Link href="/guide/nisa-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">NISA口座比較</span>
            <p className="text-xs text-muted mt-1">非課税で資産形成</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
