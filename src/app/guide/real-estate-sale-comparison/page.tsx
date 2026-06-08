import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】不動産売却一括査定サイト比較5選｜高く売るコツも解説",
  description:
    "すまいValue・HOME4U・イエウール・LIFULL HOME'S・SUUMOの不動産売却一括査定サイト5社を徹底比較。少しでも高く売るための査定依頼のコツも解説。",
  alternates: { canonical: `${siteConfig.url}/guide/real-estate-sale-comparison` },
};

const faqItems = [
  { question: "一括査定は本当に高く売れますか？", answer: "1社のみの査定と比較して、平均で5〜10%高く売れたという調査結果があります。複数社の競合関係を作ることで、不動産会社が本気で査定してくれます。" },
  { question: "査定は無料ですか？", answer: "完全無料です。査定後の媒介契約も任意で、断っても費用は発生しません。" },
  { question: "個人情報が悪用されませんか？", answer: "大手の一括査定サイトは個人情報保護方針が明確で、依頼した不動産会社以外には情報が渡りません。" },
  { question: "売却までどれくらいかかりますか？", answer: "一般的に3〜6ヶ月が目安です。築年数や立地で大きく変わります。急ぎの場合は買取保証付きプランを選びましょう。" },
];

const services = [
  { name: "すまいValue", type: "大手専門", feature: "業界6社の大手のみ", points: ["三井のリハウス・住友不動産販売など大手のみ", "売却実績が豊富", "都市部マンションに強い"], bestFor: "都市部・大手志向の人。" },
  { name: "HOME4U", type: "総合", feature: "国内最大級の老舗", points: ["NTTデータが運営", "提携1800社以上", "個人情報管理が厳格"], bestFor: "信頼性と提携数を両立したい人。" },
  { name: "イエウール", type: "総合", feature: "地方物件に強い", points: ["全国2000社以上の提携", "ローカル会社も豊富", "戸建て査定が得意"], bestFor: "地方の戸建てを売りたい人。" },
  { name: "LIFULL HOME'S", type: "総合", feature: "情報量No.1", points: ["不動産ポータルサイト連携", "売却ガイド記事が充実", "強引な営業が少ない"], bestFor: "じっくり情報を集めたい人。" },
  { name: "SUUMO売却査定", type: "総合", feature: "リクルート運営の安心感", points: ["大手から地域密着まで網羅", "匿名査定サービスあり", "ユーザー満足度が高い"], bestFor: "とりあえず相場を知りたい人。" },
];

export default function RealEstateSaleComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "不動産売却査定比較", url: `${siteConfig.url}/guide/real-estate-sale-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】不動産売却一括査定サイト比較5選" description="すまいValue・HOME4U・イエウール・LIFULL HOME'S・SUUMO徹底比較。" url={`${siteConfig.url}/guide/real-estate-sale-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>不動産売却査定比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】不動産売却一括査定サイト比較5選｜高く売るコツも解説</h1>
        <p className="text-muted leading-relaxed">不動産の売却額は、依頼する会社で数百万円変わることも。本記事では一括査定サイト5社を比較し、最高額で売るコツを解説します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">一括査定の仕組み</h2>
        <p className="text-muted leading-relaxed mb-4">物件情報を1度入力するだけで、複数の不動産会社から査定を受けられます。各社が競合関係にあるため、本気の査定額を提示する傾向があります。査定額だけでなく、担当者の対応・販売戦略・売却実績で総合判断するのがポイントです。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ一括査定サイト5選</h2>
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
          <p className="text-muted leading-relaxed">不動産売却で失敗しないためには、複数サイトを併用し最低5社以上の査定を比較することが重要です。査定額の高さだけでなく担当者の信頼性も判断材料に入れましょう。</p>
        </div>
      </section>


      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/real-estate-investment-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">不動産投資比較</span>
            <p className="text-xs text-muted mt-1">投資としての不動産</p>
          </Link>
          <Link href="/guide/housing-loan-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">住宅ローン比較</span>
            <p className="text-xs text-muted mt-1">買い替え時のローン</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
