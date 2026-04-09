import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】スマホ買取サービス比較5選｜iPhone高額査定のコツ",
  description:
    "ゲオモバイル・じゃんぱら・ブックオフ・iPhone買取専門店・モバックスのスマホ買取5社を徹底比較。iPhoneを高く売るコツも解説。",
  alternates: { canonical: `${siteConfig.url}/guide/smartphone-buyback-comparison` },
};

const faqItems = [
  { question: "iPhoneと Android どちらが高く売れる？", answer: "iPhoneの方が圧倒的に高値が付きやすいです。リセールバリューが高く、新品の50〜70%で売れることもあります。" },
  { question: "傷や故障でも売れる？", answer: "ジャンク買取に対応する業者なら可能です。ただし査定額は大幅に下がります。" },
  { question: "宅配買取と店頭買取どちらが良い？", answer: "店頭は即現金、宅配は手間なしで全国対応。料金面ではほぼ差がありません。" },
  { question: "個人情報の消去は？", answer: "売却前に必ず初期化＋アクティベーションロック解除を行いましょう。" },
];

const services = [
  { name: "ゲオモバイル", type: "全国チェーン", feature: "全国1,200店舗", points: ["全国どこでも査定", "iPhone高額買取", "即現金対応"], bestFor: "店頭で即現金化したい人。" },
  { name: "じゃんぱら", type: "中古ショップ", feature: "中古スマホ販売も", points: ["全国50店舗以上", "高額査定で評判", "宅配買取対応"], bestFor: "高額査定狙い。" },
  { name: "ブックオフ", type: "総合", feature: "総合買取の安心感", points: ["全国800店舗", "本・雑貨と一括査定", "宅配買取無料"], bestFor: "他の不用品もまとめて売りたい人。" },
  { name: "iPhone買取専門店", type: "iPhone専門", feature: "iPhone特化", points: ["iPhone専門で査定額高", "ネット申込で簡単", "全国対応"], bestFor: "iPhoneだけを最高値で売りたい人。" },
  { name: "モバックス", type: "ネット専門", feature: "宅配買取の老舗", points: ["全国どこからでもOK", "見積もり後キャンセル無料", "梱包キット無料配布"], bestFor: "ネット完結で売りたい人。" },
];

export default function SmartphoneBuybackComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "スマホ買取比較", url: `${siteConfig.url}/guide/smartphone-buyback-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】スマホ買取サービス比較5選" description="ゲオ・じゃんぱら・ブックオフ・iPhone買取専門店・モバックス徹底比較。" url={`${siteConfig.url}/guide/smartphone-buyback-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>スマホ買取比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】スマホ買取サービス比較5選｜iPhone高額査定のコツ</h1>
        <p className="text-muted leading-relaxed">機種変更で余ったスマホを高値で売る方法。本記事では人気5社を徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめスマホ買取5社</h2>
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
        <h2 className="text-xl font-bold mb-4">スマホ・通信プランをお得に</h2>
        <ComparisonTableCTA
          services={[
            { name: "楽天モバイル", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "データ無制限", price: "月3,278円〜", badge: "人気" },
            { name: "ahamo", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "ドコモ品質", price: "月2,970円〜" },
            { name: "povo 2.0", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "基本料0円", price: "トッピング型" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/sim-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">格安SIM比較</span>
            <p className="text-xs text-muted mt-1">通信費を節約</p>
          </Link>
          <Link href="/guide/smartphone-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">スマホ比較</span>
            <p className="text-xs text-muted mt-1">次の機種選び</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
