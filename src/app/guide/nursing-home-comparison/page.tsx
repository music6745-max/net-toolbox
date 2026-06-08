import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】老人ホーム・介護施設比較5選｜種類・費用・選び方を徹底解説",
  description:
    "LIFULL介護・みんなの介護・きらケア施設・かいごDB・OZの介護施設紹介サービス5社を徹底比較。費用相場や施設選びのコツも解説。",
  alternates: { canonical: `${siteConfig.url}/guide/nursing-home-comparison` },
};

const faqItems = [
  { question: "介護施設の月額費用はいくらくらい？", answer: "特別養護老人ホームで月額10〜15万円、有料老人ホームで月額15〜30万円が相場です。地域や施設タイプで大きく変動します。" },
  { question: "どんな施設がありますか？", answer: "要介護度により『特養』『老健』『有料老人ホーム』『サ高住』『グループホーム』など多様な選択肢があります。介護度と予算に応じて選びます。" },
  { question: "紹介サービスの利用は無料？", answer: "完全無料です。施設からの紹介手数料で運営されているため、利用者は一切費用を負担しません。" },
  { question: "見学はどうすれば？", answer: "紹介サービスを通すと見学日程の調整までやってもらえます。最低3施設は実際に見学して比較するのがおすすめです。" },
];

const services = [
  { name: "LIFULL介護", type: "総合", feature: "業界最大級の掲載数", points: ["全国4万件以上の施設掲載", "詳細な口コミ・評価あり", "電話相談無料"], bestFor: "とにかく多くの選択肢から選びたい人。" },
  { name: "みんなの介護", type: "総合", feature: "費用シミュレーション充実", points: ["月額費用の自動シミュレーション", "口コミ件数が豊富", "資料請求が簡単"], bestFor: "費用感を具体的に知りたい人。" },
  { name: "きらケア施設", type: "総合", feature: "コンサルの提案力", points: ["介護福祉士有資格の相談員", "条件マッチング精度が高い", "見学同行サービスあり"], bestFor: "プロのアドバイスを受けたい人。" },
  { name: "かいごDB", type: "総合", feature: "地域密着型に強い", points: ["地方の施設情報が豊富", "詳細な施設データ掲載", "比較しやすいUI"], bestFor: "地方での施設探しに困っている人。" },
  { name: "OZの介護施設紹介", type: "総合", feature: "OZmall運営の安心感", points: ["女性編集者目線の情報", "施設選びガイドが詳しい", "予約相談可能"], bestFor: "女性ユーザーや子世代が探す場合。" },
];

export default function NursingHomeComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "老人ホーム比較", url: `${siteConfig.url}/guide/nursing-home-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】老人ホーム・介護施設比較5選" description="LIFULL介護・みんなの介護・きらケア施設・かいごDB・OZ徹底比較。" url={`${siteConfig.url}/guide/nursing-home-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>老人ホーム比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】老人ホーム・介護施設比較5選｜種類・費用・選び方を徹底解説</h1>
        <p className="text-muted leading-relaxed">親の介護が始まると、施設選びは家族の重大な決断です。本記事では無料の紹介サービス5社を比較し、信頼できる施設探しの方法を解説します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">施設選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">老人ホーム選びで失敗しないコツは『複数施設の見学』『長期費用の試算』『家族との話し合い』です。紹介サービスを使えば条件にマッチする施設を効率的に絞り込めるため、自力で探すよりも数倍早く決まります。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ介護施設紹介サービス5選</h2>
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
          <p className="text-muted leading-relaxed">介護施設選びは情報量が勝負です。複数の紹介サービスを併用して候補を増やし、3〜5施設を実際に見学して決めましょう。早めの行動で家族の負担を減らせます。</p>
        </div>
      </section>


      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/funeral-service-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">葬儀社比較</span>
            <p className="text-xs text-muted mt-1">終活情報を網羅</p>
          </Link>
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">生命保険比較</span>
            <p className="text-xs text-muted mt-1">介護保険も検討</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
