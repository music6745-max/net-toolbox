import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】太陽光・蓄電池一括見積もりサイト比較5選｜価格・補助金・施工業者の選び方",
  description:
    "タイナビ・グリエネ・ソーラーパートナーズ・エコ発・タイナビ蓄電池の一括見積サイト5社を徹底比較。電気代高騰時代に賢く設置するコツ。",
  alternates: { canonical: `${siteConfig.url}/guide/solar-battery-comparison` },
};

const faqItems = [
  { question: "太陽光と蓄電池の費用相場は？", answer: "太陽光5kW+蓄電池10kWhで約250〜350万円が相場です。補助金で50〜100万円安くなることもあります。" },
  { question: "元は取れますか？", answer: "電気代削減と売電収入で10〜15年で元を取れる試算が一般的です。電気代高騰により回収期間が短縮傾向にあります。" },
  { question: "補助金はもらえますか？", answer: "国・自治体ともに補助金が用意されています。一括見積サイトを使えば最新情報を業者から教えてもらえます。" },
  { question: "悪徳業者を避けるには？", answer: "一括見積サイトは独自の審査基準で業者を選定しているため、悪徳業者を避けやすいです。さらに3社以上の相見積もりが安全策です。" },
];

const services = [
  { name: "タイナビ", type: "業界最大手", feature: "太陽光一括見積もり最大手", points: ["全国対応", "厳選された350社以上の業者", "利用者100万人超"], bestFor: "最大の選択肢から選びたい人。" },
  { name: "グリエネ", type: "総合", feature: "経験豊富なコンシェルジュ", points: ["コンシェルジュが業者選定をサポート", "悪徳業者を排除", "アフターサポートも充実"], bestFor: "業者選びに不安な人。" },
  { name: "ソーラーパートナーズ", type: "厳選", feature: "厳しい審査基準", points: ["NHKでも紹介された一括見積", "厳選された業者のみ", "成約率が高い"], bestFor: "信頼性最優先の人。" },
  { name: "エコ発", type: "シンプル", feature: "見積もり比較が簡単", points: ["シンプルな操作で見積もり依頼", "実績件数No.1クラス", "業者数も豊富"], bestFor: "サクッと見積もり比較したい人。" },
  { name: "タイナビ蓄電池", type: "蓄電池特化", feature: "蓄電池専門", points: ["蓄電池の見積もりに特化", "既存太陽光ユーザーにも対応", "国産蓄電池豊富"], bestFor: "蓄電池だけ追加したい人。" },
];

export default function SolarBatteryComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "太陽光蓄電池比較", url: `${siteConfig.url}/guide/solar-battery-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】太陽光・蓄電池一括見積比較5選" description="タイナビ・グリエネ・ソーラーパートナーズ・エコ発・タイナビ蓄電池徹底比較。" url={`${siteConfig.url}/guide/solar-battery-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>太陽光蓄電池比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】太陽光・蓄電池一括見積もりサイト比較5選</h1>
        <p className="text-muted leading-relaxed">電気代高騰時代に注目される太陽光発電と蓄電池。本記事では一括見積サイト5社を徹底比較し、適正価格で導入するコツを解説します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ一括見積もりサイト5選</h2>
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
        <h2 className="text-xl font-bold mb-4">無料一括見積もりを依頼</h2>
        <ComparisonTableCTA
          services={[
            { name: "タイナビ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "業界最大手", price: "完全無料", badge: "おすすめ" },
            { name: "グリエネ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "コンシェルジュ付き", price: "完全無料" },
            { name: "ソーラーパートナーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "厳しい審査基準", price: "完全無料" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/solar-power-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">太陽光発電比較</span>
            <p className="text-xs text-muted mt-1">太陽光全般のガイド</p>
          </Link>
          <Link href="/guide/electric-company-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">電力会社比較</span>
            <p className="text-xs text-muted mt-1">電気代削減の総合戦略</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
