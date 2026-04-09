import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】高齢者向け宅配弁当比較5選｜栄養バランス・料金・配送エリアを徹底解説",
  description:
    "ワタミの宅食・ヨシケイ・ナッシュ・食宅便・まごころ弁当の高齢者向け宅配弁当5社を栄養・料金・配送で徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/meal-delivery-senior-comparison` },
};

const faqItems = [
  { question: "宅配弁当の料金相場は？", answer: "1食あたり500〜800円が相場です。冷凍便の場合は1食400円台のサービスもあります。" },
  { question: "塩分・カロリー制限食はありますか？", answer: "ほぼ全社で塩分制限食・糖質制限食・カロリー制限食を提供しています。医師指示にも対応可能です。" },
  { question: "配送エリアは？", answer: "全国対応の冷凍便と、首都圏中心の常温便があります。地域によって選択肢が異なります。" },
  { question: "高齢者の安否確認に使えますか？", answer: "対面配達タイプ(ワタミ・まごころ弁当)では配達員が直接手渡しするため、安否確認サービスとしても役立ちます。" },
];

const services = [
  { name: "ワタミの宅食", type: "対面配達", feature: "業界シェアNo.1", points: ["全国対応の対面配達", "管理栄養士監修メニュー", "1食490円〜"], bestFor: "毎日の安否確認も兼ねたい人。" },
  { name: "ヨシケイ", type: "対面配達", feature: "栄養バランスが秀逸", points: ["管理栄養士監修", "毎日違うメニュー", "1食600円〜"], bestFor: "栄養バランス重視。" },
  { name: "ナッシュ", type: "冷凍便", feature: "若者にも人気", points: ["冷凍で長期保存可", "全国配送対応", "メニュー60種以上"], bestFor: "好きなときに食べたい人。" },
  { name: "食宅便", type: "冷凍便", feature: "日清医療食品運営", points: ["医療食ノウハウ", "塩分制限食・たんぱく調整食あり", "全国配送"], bestFor: "病気で食事制限が必要な人。" },
  { name: "まごころ弁当", type: "対面配達", feature: "高齢者特化", points: ["やわらか食・刻み食対応", "全国フランチャイズ展開", "毎日配達可"], bestFor: "嚥下が難しい高齢者。" },
];

export default function MealDeliverySeniorComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "高齢者向け宅配弁当比較", url: `${siteConfig.url}/guide/meal-delivery-senior-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】高齢者向け宅配弁当比較5選" description="ワタミ・ヨシケイ・ナッシュ・食宅便・まごころ弁当徹底比較。" url={`${siteConfig.url}/guide/meal-delivery-senior-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>高齢者向け宅配弁当比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】高齢者向け宅配弁当比較5選｜栄養バランス・料金・配送エリアを徹底解説</h1>
        <p className="text-muted leading-relaxed">離れて暮らす親御さんの食事や、自身の健康管理に便利な宅配弁当。本記事では人気5サービスを徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ宅配弁当5選</h2>
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
        <h2 className="text-xl font-bold mb-4">無料お試し・資料請求</h2>
        <ComparisonTableCTA
          services={[
            { name: "ワタミの宅食", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "業界シェアNo.1", price: "1食490円〜", badge: "定番" },
            { name: "ナッシュ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "冷凍で長期保存可", price: "1食599円〜" },
            { name: "食宅便", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "医療食ノウハウ", price: "1食560円〜" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/meal-kit-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ミールキット比較</span>
            <p className="text-xs text-muted mt-1">食材+レシピのキット</p>
          </Link>
          <Link href="/guide/nursing-home-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">老人ホーム比較</span>
            <p className="text-xs text-muted mt-1">介護施設選び</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
