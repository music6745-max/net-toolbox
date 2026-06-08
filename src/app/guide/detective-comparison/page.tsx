import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】探偵事務所比較5選｜浮気調査・身辺調査の料金を徹底解説",
  description:
    "原一探偵事務所・HAL探偵社・MR探偵社・さくら幸子探偵事務所・総合探偵社TS事務所の探偵5社を料金・実績で徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/detective-comparison` },
};

const faqItems = [
  { question: "浮気調査の料金相場は？", answer: "1日5〜10万円が一般的です。証拠が取れるまでの期間で総額が変わります。20〜50万円が平均的な総額です。" },
  { question: "悪徳業者を避けるには？", answer: "都道府県公安委員会への届出番号がある事務所を選びましょう。料金体系が明朗な業者が安心です。" },
  { question: "成功報酬制とは？", answer: "証拠が取れた場合のみ追加料金が発生する料金体系です。リスクを抑えたい人におすすめです。" },
  { question: "離婚に使える証拠は？", answer: "肉体関係を示す証拠(ホテル出入り写真等)が必要です。プロの探偵なら裁判で使える証拠を取得します。" },
];

const services = [
  { name: "原一探偵事務所", type: "業界最大手", feature: "創業50年以上", points: ["全国18拠点", "メディア出演多数", "成功率No.1クラス"], bestFor: "信頼性最優先。" },
  { name: "HAL探偵社", type: "全国展開", feature: "後払いOK", points: ["全国対応", "後払い・分割払い対応", "弁護士相談無料"], bestFor: "費用を後払いしたい人。" },
  { name: "MR探偵社", type: "東京中心", feature: "経験豊富な調査員", points: ["元警察関係者多数", "高い調査能力", "東京・関東中心"], bestFor: "首都圏で本格調査。" },
  { name: "さくら幸子探偵事務所", type: "女性向け", feature: "女性相談員多数", points: ["女性が相談しやすい", "全国主要都市に拠点", "相談無料"], bestFor: "女性で相談しにくい人。" },
  { name: "総合探偵社TS事務所", type: "成功報酬型", feature: "成功報酬制プランあり", points: ["着手金低め", "結果重視の料金", "全国対応"], bestFor: "結果に対して支払いたい人。" },
];

export default function DetectiveComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "探偵事務所比較", url: `${siteConfig.url}/guide/detective-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】探偵事務所比較5選" description="原一・HAL・MR・さくら幸子・TS事務所徹底比較。" url={`${siteConfig.url}/guide/detective-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>探偵事務所比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】探偵事務所比較5選｜浮気調査・身辺調査の料金を徹底解説</h1>
        <p className="text-muted leading-relaxed">本記事では浮気調査・身辺調査で実績ある探偵事務所5社を徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ探偵事務所5社</h2>
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
          <Link href="/guide/legal-consultation-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">法律相談比較</span>
            <p className="text-xs text-muted mt-1">離婚問題の相談先</p>
          </Link>
          <Link href="/guide/matchmaking-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">結婚相談所比較</span>
            <p className="text-xs text-muted mt-1">再婚を考える人へ</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
