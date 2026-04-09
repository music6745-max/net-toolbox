import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】ウエディングドレスレンタル比較5選｜価格・デザイン・サイズ展開を徹底解説",
  description:
    "ハツコエンドウ・キヤノットマリアージュ・タカミブライダル・ノバレーゼ・ザ・トリート・ドレッシングのウエディングドレスレンタル5社を徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/bridal-dress-comparison` },
};

const faqItems = [
  { question: "ドレスレンタルの相場は？", answer: "20万〜50万円が相場です。デザイナーズドレスは80万円以上することもあります。式場提携店だと割引されることがあります。" },
  { question: "サイズ直しはできる？", answer: "可能です。ほぼ全店で無料サイズ調整サービスがあります。妊娠・体型変化に対応してくれる店も多いです。" },
  { question: "試着は何着くらいすべき？", answer: "10〜20着試着するのが一般的です。複数店舗で試着して比較しましょう。試着予約は早めに。" },
  { question: "前撮り用と当日用は分けるべき？", answer: "予算が許せば分けるのが理想です。前撮りは少しコンパクトなドレス、当日は華やかなドレスが定番です。" },
];

const services = [
  { name: "ハツコエンドウ", type: "国内有名ブランド", feature: "格式高いドレスが豊富", points: ["国内ブランドの定番", "全国に店舗展開", "クラシック・トラディショナル"], bestFor: "格式と伝統重視。" },
  { name: "キヤノットマリアージュ", type: "輸入ブランド", feature: "海外ハイブランド多数", points: ["Vera Wangなど海外ブランド", "豊富なデザイン", "前撮り対応"], bestFor: "海外ブランド志向。" },
  { name: "タカミブライダル", type: "オリジナル", feature: "オリジナルブランド", points: ["独自デザイン豊富", "ハイクオリティ", "全国展開"], bestFor: "他人と被りたくない人。" },
  { name: "ノバレーゼ", type: "結婚式運営", feature: "式場運営会社のドレスサロン", points: ["式場と一体型", "コーディネーター指名可", "アフター含めて安心"], bestFor: "ノバレーゼで挙式する人。" },
  { name: "ザ・トリート・ドレッシング", type: "ハイエンド", feature: "セレブ御用達", points: ["セレブが選ぶ高級ドレス", "海外デザイナー多数", "東京・大阪に店舗"], bestFor: "特別感を求める人。" },
];

export default function BridalDressComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "ウエディングドレス比較", url: `${siteConfig.url}/guide/bridal-dress-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】ウエディングドレスレンタル比較5選" description="ハツコエンドウ・キヤノット・タカミ・ノバレーゼ・トリート徹底比較。" url={`${siteConfig.url}/guide/bridal-dress-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ウエディングドレス比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】ウエディングドレスレンタル比較5選｜価格・デザイン・サイズ展開を徹底解説</h1>
        <p className="text-muted leading-relaxed">人生最高の1着を選ぶ。本記事では人気5サロンを徹底比較し、後悔しないドレス選びのコツを解説します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめドレスサロン5選</h2>
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
        <h2 className="text-xl font-bold mb-4">結婚式準備をまとめてサポート</h2>
        <ComparisonTableCTA
          services={[
            { name: "ハナユメ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "ブライダルフェア検索", price: "完全無料", badge: "おすすめ" },
            { name: "マイナビウエディング", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "式場相談カウンター", price: "完全無料" },
            { name: "ゼクシィ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "業界最大手", price: "完全無料" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/wedding-venue-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">結婚式場比較</span>
            <p className="text-xs text-muted mt-1">式場選び</p>
          </Link>
          <Link href="/guide/bridal-jewelry-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">婚約指輪比較</span>
            <p className="text-xs text-muted mt-1">指輪選び</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
