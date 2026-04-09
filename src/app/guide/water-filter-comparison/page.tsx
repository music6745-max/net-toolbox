import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】浄水器おすすめ比較5選｜据置・蛇口直結・ポット型を徹底解説",
  description:
    "クリンスイ・ブリタ・トレビーノ・パナソニック・Amway eSpringの浄水器5社を価格・浄水性能・カートリッジコストで徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/water-filter-comparison` },
};

const faqItems = [
  { question: "浄水器とウォーターサーバーどちらが良い？", answer: "コスト重視なら浄水器(年1〜3万円)、手軽さ重視ならウォーターサーバー(月3,000〜5,000円)です。家族構成と使い方で選びましょう。" },
  { question: "蛇口直結型と据置型の違いは？", answer: "蛇口直結型は安価で工事不要、据置型はろ過能力が高くカートリッジが長持ちします。" },
  { question: "カートリッジ交換頻度は？", answer: "蛇口直結型で2〜4ヶ月、据置型で6〜12ヶ月、ポット型で1〜2ヶ月が目安です。" },
  { question: "塩素は本当に除去できる？", answer: "JIS規格に適合した浄水器なら塩素・トリハロメタンなどを除去できます。性能表示を確認しましょう。" },
];

const services = [
  { name: "三菱クリンスイ", type: "蛇口直結", feature: "国内シェアトップクラス", points: ["カートリッジ性能が高い", "コスパ良好", "国産で安心"], bestFor: "コスパ重視。" },
  { name: "ブリタ", type: "ポット型", feature: "ヨーロッパ生まれの定番", points: ["工事不要・置くだけ", "デザインがおしゃれ", "カートリッジが安価"], bestFor: "一人暮らし・少人数。" },
  { name: "東レ トレビーノ", type: "蛇口直結", feature: "コスパに定評", points: ["カートリッジが長持ち", "13物質除去", "国内シェアも高い"], bestFor: "カートリッジコスパ重視。" },
  { name: "パナソニック", type: "据置型", feature: "中空糸膜+活性炭", points: ["高浄水性能", "カートリッジ12ヶ月持つ", "国産で安心"], bestFor: "据置型の高性能機種が欲しい人。" },
  { name: "Amway eSpring", type: "据置型ハイエンド", feature: "高浄水+UV殺菌", points: ["140物質以上を除去", "UV殺菌付き", "プレミアム価格"], bestFor: "最高品質を求める人。" },
];

export default function WaterFilterComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "浄水器比較", url: `${siteConfig.url}/guide/water-filter-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】浄水器おすすめ比較5選" description="クリンスイ・ブリタ・トレビーノ・パナソニック・Amway徹底比較。" url={`${siteConfig.url}/guide/water-filter-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>浄水器比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】浄水器おすすめ比較5選｜据置・蛇口直結・ポット型を徹底解説</h1>
        <p className="text-muted leading-relaxed">毎日の水を安全においしく飲みたい方へ。本記事では人気5機種を徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ浄水器5選</h2>
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
        <h2 className="text-xl font-bold mb-4">代替案：ウォーターサーバー</h2>
        <ComparisonTableCTA
          services={[
            { name: "プレミアムウォーター", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "天然水ウォーターサーバー", price: "月額制", badge: "定番" },
            { name: "コスモウォーター", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "ボトル交換が楽", price: "月額制" },
            { name: "アクアクララ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "RO水で安心", price: "月額制" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/water-server-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ウォーターサーバー比較</span>
            <p className="text-xs text-muted mt-1">代替手段も検討</p>
          </Link>
          <Link href="/guide/electric-company-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">電力会社比較</span>
            <p className="text-xs text-muted mt-1">家計の固定費削減</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
