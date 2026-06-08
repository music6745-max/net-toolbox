import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】ホワイトニング歯科クリニック比較5選｜料金・効果・通いやすさを徹底解説",
  description:
    "ホワイトニング専門院から大手歯科グループまで主要5院を料金・効果・通いやすさで徹底比較。オフィス・ホーム・デュアルの違いも解説。",
  alternates: { canonical: `${siteConfig.url}/guide/whitening-clinic-comparison` },
};

const faqItems = [
  { question: "ホワイトニングは保険適用されますか？", answer: "ホワイトニングは美容目的のため自由診療です。保険適用外で全額自己負担となります。" },
  { question: "効果はどれくらい持続しますか？", answer: "オフィスホワイトニングで3〜6ヶ月、ホームホワイトニングで6〜12ヶ月が目安です。定期メンテナンスで長持ちさせられます。" },
  { question: "オフィスとホームどちらが良いですか？", answer: "短期間で白くしたいならオフィス、持続性重視ならホーム、両方の良さを取りたいならデュアルがおすすめです。" },
  { question: "痛みはありますか？", answer: "薬剤の濃度により知覚過敏が出ることがあります。痛みに弱い方は低濃度プランや段階的施術を選びましょう。" },
];

const services = [
  { name: "ホワイトニング東京", type: "専門院", feature: "セルフホワイトニング併設", points: ["月額制で何度でも通える", "全国主要都市に展開", "1回4,378円〜の低価格"], bestFor: "コスパ重視で継続したい人。" },
  { name: "スターホワイトニング", type: "専門院", feature: "歯科医師監修の安心施術", points: ["1回2,750円のお試しあり", "施術時間最短20分", "予約が取りやすい"], bestFor: "気軽に試してみたい人。" },
  { name: "ホワイトエッセンス", type: "大手チェーン", feature: "全国200院以上の最大手", points: ["専任の歯科衛生士が担当", "効果保証付きプラン", "結婚式前の集中ケアにも対応"], bestFor: "イベント前にしっかり白くしたい人。" },
  { name: "ホワイトニングバー", type: "専門院", feature: "セルフ施術の先駆け", points: ["1回4,000円台と低価格", "全国20店舗以上", "ホームケアも併用可"], bestFor: "気軽に短時間で施術したい人。" },
  { name: "Bマインドクリニック", type: "美容歯科", feature: "美容歯科併設で高品質", points: ["医療レベルのオフィス施術", "クリーニングと同時施術OK", "リピート割引あり"], bestFor: "本格的な美容歯科ケアも一緒に受けたい人。" },
];

export default function WhiteningClinicComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "ホワイトニング比較", url: `${siteConfig.url}/guide/whitening-clinic-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】ホワイトニング歯科クリニック比較5選" description="ホワイトニング東京・スターホワイトニング・ホワイトエッセンス他を徹底比較。" url={`${siteConfig.url}/guide/whitening-clinic-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ホワイトニング比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】ホワイトニング歯科クリニック比較5選｜料金・効果・通いやすさを徹底解説</h1>
        <p className="text-muted leading-relaxed">第一印象を大きく左右する歯の白さ。本記事ではホワイトニング専門院・大手歯科グループ・美容歯科の主要5院を、料金・効果・通いやすさで比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">ホワイトニングの種類</h2>
        <p className="text-muted leading-relaxed mb-4">クリニックで行うオフィスホワイトニング、自宅で行うホームホワイトニング、両方を併用するデュアルホワイトニングの3種類があります。即効性はオフィス、持続性はホーム、最大効果はデュアルが特徴です。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめホワイトニング歯科5選</h2>
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
        <h2 className="text-2xl font-bold mb-4">まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed">ホワイトニングは継続することで効果が定着します。料金だけでなく通いやすさ・予約の取りやすさも重要なので、無料カウンセリングで雰囲気を確認してから決めましょう。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">歯科・美容医療の検討に役立つ内部ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/guide/dental-clinic-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">歯科クリニック比較</span>
            <p className="text-xs text-muted mt-1">治療内容と費用の見方を確認</p>
          </Link>
          <Link href="/guide/beauty-clinic-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">美容クリニック比較</span>
            <p className="text-xs text-muted mt-1">美容医療の選び方を確認</p>
          </Link>
          <Link href="/guide/dental-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">歯科保険比較</span>
            <p className="text-xs text-muted mt-1">自費診療の備えも確認</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/dental-clinic-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">歯科クリニック比較</span>
            <p className="text-xs text-muted mt-1">かかりつけ歯科の選び方</p>
          </Link>
          <Link href="/guide/beauty-clinic-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">美容クリニック比較</span>
            <p className="text-xs text-muted mt-1">美容医療全般の比較</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
