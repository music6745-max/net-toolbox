import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】バイク買取一括査定比較5選｜高く売るコツも徹底解説",
  description:
    "バイクワン・KATIX・バイク王・MOTOBANK・バイクブロスのバイク買取一括査定5社を徹底比較。事故車・不動車も含めて高く売るコツを解説。",
  alternates: { canonical: `${siteConfig.url}/guide/bike-buyback-comparison` },
};

const faqItems = [
  { question: "車検切れ・不動車でも売れますか？", answer: "可能です。多くの業者で不動車・事故車・カスタム車も買取対象です。状態に応じた適正価格を提示してくれます。" },
  { question: "出張査定の手数料は？", answer: "全社で出張査定無料です。査定後にキャンセルしても費用は発生しません。" },
  { question: "売却手続きに何が必要？", answer: "印鑑証明・自賠責保険証・自動車税納税証明書・身分証明書が必要です。書類は業者がサポートしてくれます。" },
  { question: "高く売るコツは？", answer: "洗車・小修理を済ませる、買取シーズン(春)を狙う、複数業者で相見積もりを取るのが基本です。" },
];

const services = [
  { name: "バイクワン", type: "業界最大手", feature: "全国対応の最大手", points: ["全国どこでも出張査定", "事故車・不動車もOK", "業界トップクラスの査定額"], bestFor: "幅広い車両の売却。" },
  { name: "KATIX (旧Goobikeセル)", type: "総合", feature: "Goo系列の安心感", points: ["プロトコーポレーション運営", "年間10万件以上の実績", "全国対応"], bestFor: "信頼性重視。" },
  { name: "バイク王", type: "知名度No.1", feature: "TVCMでも有名", points: ["業界知名度No.1", "全国出張査定", "海外輸出ルートも持つ"], bestFor: "気軽に依頼したい人。" },
  { name: "MOTOBANK", type: "新興", feature: "オンライン査定が早い", points: ["写真送るだけで概算見積", "出張査定もスピーディ", "若年層に人気"], bestFor: "オンライン完結派。" },
  { name: "バイクブロス", type: "総合一括査定", feature: "複数社一括見積", points: ["最大5社同時査定", "比較表で選びやすい", "高額査定が出やすい"], bestFor: "複数業者を競わせたい人。" },
];

export default function BikeBuybackComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "バイク買取比較", url: `${siteConfig.url}/guide/bike-buyback-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】バイク買取一括査定比較5選" description="バイクワン・KATIX・バイク王・MOTOBANK・バイクブロス徹底比較。" url={`${siteConfig.url}/guide/bike-buyback-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>バイク買取比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】バイク買取一括査定比較5選｜高く売るコツも徹底解説</h1>
        <p className="text-muted leading-relaxed">愛車のバイクを少しでも高く売りたい方へ。本記事では人気のバイク買取5社を徹底比較し、高額査定のコツを解説します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめバイク買取サービス5選</h2>
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
        <h2 className="text-xl font-bold mb-4">無料一括査定を依頼</h2>
        <ComparisonTableCTA
          services={[
            { name: "バイクワン", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "業界最大手", price: "完全無料", badge: "おすすめ" },
            { name: "バイク王", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "知名度No.1", price: "完全無料" },
            { name: "バイクブロス", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "5社一括査定", price: "完全無料" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/car-purchase-buyback-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">車買取比較</span>
            <p className="text-xs text-muted mt-1">クルマも一括査定</p>
          </Link>
          <Link href="/guide/used-car-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">中古車購入比較</span>
            <p className="text-xs text-muted mt-1">買い替えにも</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
