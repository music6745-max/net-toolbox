import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】中古スマホ購入サイト比較5選｜iPhone・Android安心ショップ",
  description:
    "イオシス・じゃんぱら・ゲオモバイル・にこスマ・楽天市場の中古スマホ購入サイト5社を保証・在庫数・価格で徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/used-smartphone-comparison` },
};

const faqItems = [
  { question: "中古スマホは安全？", answer: "信頼できるショップで購入すれば安全です。アクティベーションロック解除済み・赤ロム保証付きを選びましょう。" },
  { question: "保証は付いている？", answer: "大手ショップでは1〜6ヶ月の初期不良保証が標準です。" },
  { question: "どれくらい安い？", answer: "新品の30〜60%で買えます。1〜2世代前のiPhoneがコスパ最強。" },
  { question: "SIMフリー版を選ぶべき？", answer: "SIMフリー版またはSIMロック解除済みを選びましょう。キャリア版は使えるSIMが制限される場合があります。" },
];

const services = [
  { name: "イオシス", type: "中古スマホ専門", feature: "在庫数No.1クラス", points: ["全国主要都市に店舗", "豊富な在庫", "オンライン販売も充実"], bestFor: "選択肢を増やしたい人。" },
  { name: "じゃんぱら", type: "中古ショップ", feature: "信頼性と価格", points: ["全国50店舗以上", "保証付きで安心", "Webで簡単購入"], bestFor: "信頼性重視。" },
  { name: "ゲオモバイル", type: "全国チェーン", feature: "全国1,200店舗", points: ["全国どこでも購入可", "30日保証", "下取りキャンペーンあり"], bestFor: "全国どこでも購入したい。" },
  { name: "にこスマ", type: "ネット専門", feature: "ネット限定の安さ", points: ["全国送料無料", "30日間返品保証", "公正な評価ランクで分かりやすい"], bestFor: "ネット完結派。" },
  { name: "楽天市場", type: "総合EC", feature: "ポイント還元", points: ["楽天ポイントが貯まる", "豊富な出品者", "ショップ評価で選べる"], bestFor: "楽天ユーザー。" },
];

export default function UsedSmartphoneComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "中古スマホ購入比較", url: `${siteConfig.url}/guide/used-smartphone-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】中古スマホ購入サイト比較5選" description="イオシス・じゃんぱら・ゲオ・にこスマ・楽天徹底比較。" url={`${siteConfig.url}/guide/used-smartphone-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>中古スマホ購入比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】中古スマホ購入サイト比較5選｜iPhone・Android安心ショップ</h1>
        <p className="text-muted leading-relaxed">新品の半額以下で買える中古スマホ。本記事では信頼できる5ショップを徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ中古スマホサイト5選</h2>
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
        <h2 className="text-xl font-bold mb-4">通信プランをお得に</h2>
        <ComparisonTableCTA
          services={[
            { name: "楽天モバイル", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "データ無制限", price: "月3,278円〜", badge: "人気" },
            { name: "ahamo", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "ドコモ品質", price: "月2,970円〜" },
            { name: "LINEMO", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "ソフトバンク回線", price: "月990円〜" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/smartphone-buyback-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">スマホ買取比較</span>
            <p className="text-xs text-muted mt-1">古いスマホを売る</p>
          </Link>
          <Link href="/guide/sim-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">格安SIM比較</span>
            <p className="text-xs text-muted mt-1">通信費を節約</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
