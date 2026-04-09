import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】結婚相談所おすすめ比較5選｜料金・成婚率・サポートを徹底解説",
  description:
    "IBJメンバーズ・パートナーエージェント・サンマリエ・ツヴァイ・ゼクシィ縁結びエージェントの結婚相談所5社を料金・成婚率・サポート体制で徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/matchmaking-comparison` },
};

const faqItems = [
  { question: "結婚相談所とマッチングアプリの違いは？", answer: "結婚相談所は身元保証された会員と本気で婚活する場、マッチングアプリは気軽な出会いから恋愛・結婚まで幅広いです。短期で結婚したい人は相談所が向いています。" },
  { question: "費用相場は？", answer: "入会金10〜15万円、月会費1〜2万円、成婚料20〜30万円が相場です。1年以内に成婚すれば総額50万円程度。" },
  { question: "成婚率はどれくらい？", answer: "活動1年以内の成婚率は20〜40%が一般的です。会員のプロフィール充実度・お見合い数・自己改善努力で大きく変わります。" },
  { question: "30代・40代でも遅くないですか？", answer: "全く遅くありません。むしろ結婚相談所の中心年齢層は30〜40代です。年齢を重ねた分の経済力・落ち着きがプラスに評価されます。" },
];

const services = [
  { name: "IBJメンバーズ", type: "ハイクラス", feature: "業界最大手の高品質", points: ["成婚実績No.1", "会員の質が高い", "専任カウンセラー付き"], bestFor: "本気で結婚を目指す30代以上。" },
  { name: "パートナーエージェント", type: "成果重視", feature: "成婚コンシェルジュ", points: ["独自の成婚プロセス", "1年以内の成婚率高", "個別のアドバイス充実"], bestFor: "短期で結果を出したい人。" },
  { name: "サンマリエ", type: "老舗", feature: "創業40年以上の信頼", points: ["全国展開で出会いの幅広い", "丁寧なサポート", "幅広い年齢層に対応"], bestFor: "じっくり婚活したい人。" },
  { name: "ツヴァイ", type: "イオン系", feature: "イオングループの安心感", points: ["イオンの会員ネットワーク", "地方都市にも店舗", "比較的リーズナブル"], bestFor: "地方在住の人。" },
  { name: "ゼクシィ縁結びエージェント", type: "リクルート系", feature: "コスパ重視", points: ["リクルート運営の安心感", "成婚料0円", "オンライン面談中心"], bestFor: "費用を抑えたい人。" },
];

export default function MatchmakingComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "結婚相談所比較", url: `${siteConfig.url}/guide/matchmaking-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】結婚相談所おすすめ比較5選" description="IBJ・パートナー・サンマリエ・ツヴァイ・ゼクシィ徹底比較。" url={`${siteConfig.url}/guide/matchmaking-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>結婚相談所比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】結婚相談所おすすめ比較5選｜料金・成婚率・サポートを徹底解説</h1>
        <p className="text-muted leading-relaxed">『今年こそ結婚したい』を本気で叶えるなら結婚相談所が最短ルート。本記事では大手5社の料金・成婚率・サポート内容を徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">結婚相談所の選び方</h2>
        <p className="text-muted leading-relaxed mb-4">『会員数』『成婚率』『サポート手厚さ』の3点を必ず比較しましょう。複数社の無料カウンセリングを受けて、自分に合うコンシェルジュを選ぶのが成功の鍵です。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ結婚相談所5選</h2>
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
        <h2 className="text-xl font-bold mb-4">無料カウンセリング予約</h2>
        <ComparisonTableCTA
          services={[
            { name: "ゼクシィ縁結びエージェント", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "成婚料0円", price: "月額制", badge: "コスパ" },
            { name: "パートナーエージェント", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "成果重視のサポート", price: "月額制" },
            { name: "サンマリエ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "創業40年の老舗", price: "月額制" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/matching-app-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">マッチングアプリ比較</span>
            <p className="text-xs text-muted mt-1">気軽な出会いはアプリで</p>
          </Link>
          <Link href="/guide/wedding-venue-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">結婚式場比較</span>
            <p className="text-xs text-muted mt-1">成婚後の準備にも</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
