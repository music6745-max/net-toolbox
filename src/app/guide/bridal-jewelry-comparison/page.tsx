import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】婚約指輪ブランド比較5選｜価格・デザイン・アフターサービスを徹底解説",
  description:
    "ティファニー・カルティエ・俄(ニワカ)・銀座ダイヤモンドシライシ・I-PRIMOの婚約指輪ブランド5社を価格・デザイン・アフターで徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/bridal-jewelry-comparison` },
};

const faqItems = [
  { question: "婚約指輪の予算はどれくらい？", answer: "全国平均は約36万円。給料3ヶ月分と言われた時代もありましたが、現在は20〜50万円が相場です。" },
  { question: "ハイブランドと国内ブランドどちらが良い？", answer: "ステータス重視ならティファニー・カルティエ、デザインの細やかさ重視なら国内ブランドが向いています。" },
  { question: "アフターサービスは重要？", answer: "とても重要です。サイズ直し・クリーニング・石の留め直しなど、長く使うほど必要になります。無料保証期間と内容を必ず確認しましょう。" },
  { question: "ブライダルフェアは参加すべき？", answer: "予算以内で複数比較できる絶好の機会です。多くの場合、ペア割引や特典付きで購入できます。" },
];

const services = [
  { name: "ティファニー", type: "海外ハイブランド", feature: "世界的ブランドの安心感", points: ["セッティングの代名詞", "ブランド力No.1", "アフターも世界対応"], bestFor: "ステータス・ブランド重視。" },
  { name: "カルティエ", type: "海外ハイブランド", feature: "歴史と格式", points: ["フランスの老舗ジュエラー", "個性的なデザイン", "高品質な石の選定"], bestFor: "上質さを求める人。" },
  { name: "俄(NIWAKA)", type: "国内ブランド", feature: "京都発の和ブランド", points: ["和の意匠を取り入れたデザイン", "職人の手作業中心", "末永く着けられる品質"], bestFor: "和装婚や個性派。" },
  { name: "銀座ダイヤモンドシライシ", type: "国内ブライダル特化", feature: "ブライダル専門", points: ["ダイヤモンド品質に定評", "保証システム充実", "全国に店舗"], bestFor: "コスパと品質のバランス。" },
  { name: "I-PRIMO", type: "国内ブライダル特化", feature: "豊富なデザイン数", points: ["100種類以上のデザイン", "リーズナブルな価格帯", "全国50店舗以上"], bestFor: "デザインを豊富に比較したい人。" },
];

export default function BridalJewelryComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "婚約指輪比較", url: `${siteConfig.url}/guide/bridal-jewelry-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】婚約指輪ブランド比較5選" description="ティファニー・カルティエ・俄・シライシ・I-PRIMO徹底比較。" url={`${siteConfig.url}/guide/bridal-jewelry-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>婚約指輪比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】婚約指輪ブランド比較5選｜価格・デザイン・アフターサービスを徹底解説</h1>
        <p className="text-muted leading-relaxed">一生に一度の婚約指輪選び。本記事では人気の海外・国内5ブランドを徹底比較し、後悔しない選び方を解説します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">指輪選びのポイント</h2>
        <p className="text-muted leading-relaxed mb-4">『ブランド』『デザイン』『品質(石・地金)』『アフターサービス』『予算』の5点を総合的に検討しましょう。複数店舗を回って実物を比較するのが理想です。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ婚約指輪ブランド5選</h2>
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
        <h2 className="text-xl font-bold mb-4">指輪と結婚準備に役立つ内部ツール</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Link href="/tools/wedding-budget-split" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">結婚費用分担計算</span>
            <p className="text-xs text-muted mt-1">指輪・式費用の分担整理に</p>
          </Link>
          <Link href="/guide/wedding-ring-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">結婚指輪比較</span>
            <p className="text-xs text-muted mt-1">マリッジリングも確認</p>
          </Link>
          <Link href="/guide/wedding-venue-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">結婚式場比較</span>
            <p className="text-xs text-muted mt-1">式場費用とのバランスを見る</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/wedding-ring-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">結婚指輪比較</span>
            <p className="text-xs text-muted mt-1">マリッジリング選び</p>
          </Link>
          <Link href="/guide/wedding-venue-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">結婚式場比較</span>
            <p className="text-xs text-muted mt-1">式場選びのコツ</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
