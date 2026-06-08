import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】FX会社おすすめ比較5選｜スプレッド・スワップ・取引ツールを徹底解説",
  description:
    "DMM FX・GMOクリック証券・外為どっとコム・SBI FX・みんなのFXのFX会社5社をスプレッド・スワップ・取引ツールで徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/fx-broker-comparison` },
};

const faqItems = [
  { question: "FXは初心者でも始められますか？", answer: "可能です。多くの会社で1,000通貨単位から取引でき、4,000円程度から始められます。リスクを理解してから始めましょう。" },
  { question: "口座開設費用はかかりますか？", answer: "全社で口座開設・維持費は無料です。取引コストはスプレッドのみです。" },
  { question: "スプレッドが狭いとどうお得？", answer: "売買時の実質手数料が低くなります。短期トレードを多くする人ほど影響が大きくなります。" },
  { question: "スワップポイントとは？", answer: "通貨間の金利差で得られる収益です。長期保有で安定収入が期待できます。" },
];

const services = [
  { name: "DMM FX", type: "業界最大手", feature: "取引高No.1", points: ["スプレッド業界最狭水準", "取引ツールが使いやすい", "口座開設で4,000円キャッシュバック"], bestFor: "初心者からプロまで。" },
  { name: "GMOクリック証券", type: "総合", feature: "FX以外も充実", points: ["FX取引高No.1", "高機能チャート", "株式取引も同時可能"], bestFor: "総合的に運用したい人。" },
  { name: "外為どっとコム", type: "情報提供", feature: "セミナーが豊富", points: ["FX教育コンテンツ充実", "1,000通貨単位で取引可", "アナリストの市場解説"], bestFor: "学びながら始めたい初心者。" },
  { name: "SBI FXトレード", type: "少額取引", feature: "1通貨から取引可", points: ["業界最少単位の1通貨", "スプレッド最狭水準", "信頼のSBIブランド"], bestFor: "超少額から試したい人。" },
  { name: "みんなのFX", type: "高スワップ", feature: "スワップ高水準", points: ["新興国通貨のスワップが高い", "1,000通貨から取引可", "アプリの使いやすさ"], bestFor: "スワップ狙いの長期投資家。" },
];

export default function FxBrokerComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "FX会社比較", url: `${siteConfig.url}/guide/fx-broker-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】FX会社おすすめ比較5選" description="DMM FX・GMOクリック・外為どっとコム・SBI・みんなのFX徹底比較。" url={`${siteConfig.url}/guide/fx-broker-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>FX会社比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】FX会社おすすめ比較5選｜スプレッド・スワップ・取引ツールを徹底解説</h1>
        <p className="text-muted leading-relaxed">※本記事は投資助言ではありません。FX取引にはリスクがあります。最終判断はご自身で行ってください。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">FX会社選びのポイント</h2>
        <p className="text-muted leading-relaxed mb-4">スプレッド（売買コスト）・スワップポイント（金利差収益）・取引ツールの3点が重要です。短期トレードならスプレッド重視、長期投資ならスワップ重視で選びましょう。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめFX会社5社</h2>
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
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/online-broker-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット証券比較</span>
            <p className="text-xs text-muted mt-1">株式投資の口座選び</p>
          </Link>
          <Link href="/guide/nisa-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">NISA口座比較</span>
            <p className="text-xs text-muted mt-1">非課税の投資制度</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
